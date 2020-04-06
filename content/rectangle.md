---
title: "Rectangle"
type: customtype
---

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-regular-pages)

Frontmatter:

```
type: {{< param "type">}}
```

From higher priority to lower priority:

```
<type>    /  single           . <outputformat> . <suffix>
<type>    /  single                            . <suffix>  <-- this page example
                  
_default  /  single           . <outputformat> . <suffix>
_default  /  single                            . <suffix>  <-- present, ignored
```

{{< back >}}