---
title: "Fig"
layout: customlayout
---


Frontmatter:
```
layout: customlayout
```

From higher priority to lower priority:

```
<type>          / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>
                / <customlayout>                     . <suffix>  <-- this page example
                /  single                            . <suffix>
                  
<_default>      
                / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>
                / <customlayout>                     . <suffix>  
                /  single                            . <suffix>  <-- present, ignored
```

