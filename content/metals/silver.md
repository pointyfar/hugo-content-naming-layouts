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
<type>          /  single           . <outputformat> . <suffix>  <-- this page example (/amp/metals/silver/)
<type>          / <customlayout>                     . <suffix>  <-- this page example (/metals/silver/)
<type>          /  single                            . <suffix>
                  
_default        / <customlayout>    . <outputformat> . <suffix>
_default        /  single           . <outputformat> . <suffix>
_default        / <customlayout>                     . <suffix>  
_default        /  single                            . <suffix>  <-- present, ignored
```