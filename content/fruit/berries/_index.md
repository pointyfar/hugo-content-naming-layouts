---
title: "Berries"
resources:
- name: berries
  src: food-forest-blueberries-raspberries-87818.jpg
  params: 
    credit: https://www.pexels.com/photo/food-forest-blueberries-raspberries-87818/
- name: redcurrants
  src: red-currants/red-currants.jpg
  params:
    credit: https://www.pexels.com/photo/red-currants-on-bowl-2479247/
---

For list pages, page resources must live in the same directory as the `_index.md` file. 

```
content/fruit/berries/
├── berries.pdf             <-- Resource
├── blackberries            <-- Child page
│   └── index.md
├── blueberries             <-- Child page
│   ├── index.md
│   ├── lorem.md            <-- Resource of CHILD page
│   └── photos
│       └── blueberry.jpg   <-- Resource of CHILD page
├── berries.jpg             <-- Resource
├── _index.md               <-- Page
├── raspberries.md          <-- Child page
├── red-currants            <-- NOT PAGE | NOT RESOURCE
│   └── red-currants.jpg
└── strawberries            <-- Child Page
    └── index.md

```

{{< pageresources >}}

{{< back >}}