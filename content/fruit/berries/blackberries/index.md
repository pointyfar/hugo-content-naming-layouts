---
title: "Blackberries"
resources:
- src: missing-resource.jpg
  name: missing
  params:
    lorem: ipsum
- src: blackberry-photo.jpg
  name: blackberry
  params:
    credit: https://www.pexels.com/photo/ice-cream-cone-on-wood-257834/
    foo: bar
---

<!-- credit: https://www.pexels.com/photo/blackberries-on-table-892808/ -->

Resource `blackberries-on-table.jpg` has no metadata configured, while `blackberry-photo.jpg` has the below:

```
src: blackberry-photo.jpg
name: blackberry
params:
    credit: https://www.pexels.com/photo/ice-cream-cone-on-wood-257834/
```

---

Notice the following in the frontmatter of this page:

```
resources:
- src: missing-resource.jpg
  name: missing
  params:
    lorem: ipsum
```

It defines metadata for a resource that does not exist. The `src` value does not match an actual resource in the bundle, so it does not get picked up when we `range` over all the resources.

{{<blackberry>}}
