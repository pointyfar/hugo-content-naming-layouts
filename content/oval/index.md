---
title: "Oval"
type: customtype
layout: customlayout
tags: 
- lorem
- ipsum
---

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-regular-pages)

Frontmatter:

```
layout: {{< param "layout">}}
type: {{< param "type">}}
```

From higher priority to lower priority:

```
<customtype>    /  single           . <outputformat> . <suffix>
                /  single                            . <suffix>  <-- this page example
                  
_default        / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>
                / <customlayout>                     . <suffix>
                /  single                            . <suffix>  <-- present, ignored
```

{{< back >}}