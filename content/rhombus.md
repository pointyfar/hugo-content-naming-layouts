---
title: "Rhombus"
date: 2020-03-14T00:10:07+10:00
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