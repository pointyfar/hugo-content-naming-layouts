---
title: "Square"
date: 2020-03-13T22:29:52+10:00
---

Top level single page


[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-regular-pages)

{{<mermaid>}}
graph TD
    A1("content/lorem.md") --> B
    A2("content/lorem/index.md") --> B
    
    B{Type Set}
    B --- By[Yes]
          By --> ctype("layouts/customtype/single.html")
    

    Both("Example showing precedence <br/> when both are set")

    B --- Bn[No]
          Bn --> C{"Layout set"}

    C --- Cy[Yes]
          Cy --> dcl("layouts/**/customlayout.html")

    C --- Cn[No]
          Cn --> Default("_default/single.html <br/> **this page example**")
    

    classDef thick stroke-width:4px, stroke:#91C7B1;
    class Default,pcl,dcl,ctype,Both thick;

    style Both stroke-dasharray:5, 5 stroke:#91C7B1;
    style A1 stroke-width:4px, stroke:#6153CC;
    style A2 stroke-width:4px, stroke:#6153CC;

    click ctype "/rectangle/" "Example"
    click Both "/oval/" "Example"
    click dcl "/rhombus/" "Example"

{{</mermaid>}}

---

```
<customtype>    /  single           . <outputformat> . html
                /  single                            . html
                  
<_default>      / <customlayout>    . <outputformat> . html
                /  single           . <outputformat> . html
                / <customlayout>                     . html
                /  single                            . html  <-- this page example
```

- `layouts/posts/single.html.html `
- `layouts/posts/single.html`
- `layouts/_default/demolayout.html.html`
- `layouts/_default/single.html.html`
- `layouts/_default/demolayout.html`
- `layouts/_default/single.html`



{{< back >}}
