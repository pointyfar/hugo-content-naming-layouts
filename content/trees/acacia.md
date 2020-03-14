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
<customtype>    /  single   . <outputformat> . html
                /  single                    . html  <-- this page example

<type>          /  single   . <outputformat> . html
                /  single                    . html
                  
<_default>      /  single   . <outputformat> . html
                /  single                    . html  <-- present, ignored
```
