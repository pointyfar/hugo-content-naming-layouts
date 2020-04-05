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
<customtype>    /  single                            . <suffix>  <-- this page example
                  
_default        / <customlayout>    . <outputformat> . <suffix>
_default        /  single           . <outputformat> . <suffix>
_default        / <customlayout>                     . <suffix>
_default        /  single                            . <suffix>  <-- present, ignored
```

{{< back >}}