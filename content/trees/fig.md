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
<type>          / <customlayout>    . <outputformat> . html
                /  single           . <outputformat> . html
                / <customlayout>                     . html  <-- this page example
                /  single                            . html
                  
<_default>      
                / <customlayout>    . <outputformat> . html
                /  single           . <outputformat> . html
                / <customlayout>                     . html  
                /  single                            . html  <-- present, ignored
```

