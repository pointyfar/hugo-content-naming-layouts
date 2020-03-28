---
title: "Pine"
layout: customlayout
type: custompine
---

Frontmatter:
```
layout: custompine
type: customtype
```

From higher priority to lower priority:

```
<customtype>    
                / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>
                / <customlayout>                     . <suffix>  <-- this page example  
                /  single                            . <suffix>

<type>          
                / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>
                / <customlayout>                     . <suffix>  <-- present, ignored
                /  single                            . <suffix>  <-- present, ignored
                  
<_default>      
                / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>
                / <customlayout>                     . <suffix>  
                /  single                            . <suffix>  <-- present, ignored
```
