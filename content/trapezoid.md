---
title: "Trapezoid"
date: 2020-03-14T00:09:37+10:00
type: customtype
layout: customlayout
---

Frontmatter:

```
layout: {{< param "layout">}}
type: {{< param "type">}}
```

Will use 
- `layouts/customtype/single.html` if found, else
- `customlayout` if found, else 
- `layouts/default/single.html`

See [Custom Layout](/ellipse/) example for `customlayout` details.


{{< back >}}