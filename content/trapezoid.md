---
title: "Trapezoid"
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