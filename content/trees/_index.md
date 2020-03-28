---
title: "Trees"
cascade:
      categories:
            - alive
---

Nested single page

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-regular-pages)

{{<mermaid>}}
graph TD
    A1("content/lorem/ipsum.md") --> B
    A2("content/lorem/ipsum/index.md") --> B
    
    B{Type Set}
    B --- By[Yes]
          By --> ctype("layouts/customtype/single.html")
    

    Both("Example <br/> showing precedence <br/> when both are set")

    B --- Bn[No]
          Bn --> C{"Layout set"}

    C --- Cy[Yes]
          Cy --> dcl("layouts/**/customlayout.html")

    C --- Cn[No]
          Cn --> Default("layouts/**/single.html")
    

    classDef thick stroke-width:4px, stroke:#91C7B1;
    class Default,pcl,dcl,ctype,Both thick;

    style Both stroke-dasharray:5, 5 stroke:#91C7B1;
    style A1 stroke-width:4px, stroke:#6153CC;
    style A2 stroke-width:4px, stroke:#6153CC;

    click ctype "/trees/acacia/" "Example"
    click Both "/trees/pine/" "Example"
    click dcl "/trees/fig/" "Example"
    click Default "/trees/mahogany/" "Example"

{{</mermaid>}}

---








{{< back >}}
