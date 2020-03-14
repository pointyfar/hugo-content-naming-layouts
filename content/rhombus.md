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
<customtype>    /  single           . <outputformat> . html
                /  single                            . html
                  
<_default>      / <customlayout>    . <outputformat> . html
                /  single           . <outputformat> . html
                / <customlayout>                     . html  <-- this page example
                /  single                            . html  <-- present, ignored
```

{{< back >}}