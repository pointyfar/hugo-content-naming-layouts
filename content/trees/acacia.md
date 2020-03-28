---
title: "Acacia"
type: customtype
---

Frontmatter:
```
type: customtype
```

From higher priority to lower priority:

```
<customtype>    /  single   . <outputformat> . <suffix>
                /  single                    . <suffix>  <-- this page example

<type>          /  single   . <outputformat> . <suffix>
                /  single                    . <suffix>
                  
<_default>      /  single   . <outputformat> . <suffix>
                /  single                    . <suffix>  <-- present, ignored
```
