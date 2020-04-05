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
<type>          / <customlayout>    . <outputformat> . <suffix>
<type>          /  single           . <outputformat> . <suffix>
<type>          / <customlayout>                     . <suffix>
<type>          /  single                            . <suffix>  <-- this page example
                  
_default        / <customlayout>    . <outputformat> . <suffix>
_default        /  single           . <outputformat> . <suffix>
_default        / <customlayout>                     . <suffix>
_default        /  single                            . <suffix>  <-- present, ignored

```

{{< back >}}