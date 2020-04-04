---
title: "Rhombus"
layout: customlayout
---


[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-regular-pages)

Frontmatter:

```
layout: {{< param "layout">}}
```

From higher priority to lower priority:

```
<customtype>    /  single           . <outputformat> . <suffix>
                /  single                            . <suffix>
                  
_default        / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>
                / <customlayout>                     . <suffix>  <-- this page example
                /  single                            . <suffix>  <-- present, ignored
```

{{< back >}}