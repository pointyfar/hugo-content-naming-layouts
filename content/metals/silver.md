---
title: "Silver"
outputs: 
- amp
- html
layout: customlayout
---

- [amp](/amp/metals/silver/)
- [html](/metals/silver/)

```
title: "Silver"
outputs: 
- amp
- html
layout: customlayout
```

```
<type>          / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>  <-- this page example (/amp/metals/silver/)
                / <customlayout>                     . <suffix>  <-- this page example (/metals/silver/)
                /  single                            . <suffix>
                  
_default        / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>
                / <customlayout>                     . <suffix>  
                /  single                            . <suffix>  <-- present, ignored
```