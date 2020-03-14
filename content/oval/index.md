---
title: "Oval"
date: 2020-03-13T22:58:49+10:00
type: customtype
layout: customlayout
---

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-regular-pages)

Frontmatter:

```
layout: {{< param "layout">}}
type: {{< param "type">}}
```

From higher priority to lower priority:

```
<customtype>    /  single           . <outputformat> . html
                /  single                            . html  <-- this page example
                  
<_default>      / <customlayout>    . <outputformat> . html
                /  single           . <outputformat> . html
                / <customlayout>                     . html
                /  single                            . html  <-- present, ignored
```

{{< back >}}