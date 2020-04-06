---
title: "Square"
---

Top level single page


[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-regular-pages)

{{<mermaid>}}
graph TD
    A1("content/lorem.md") --> B
    A2("content/lorem/index.md") --> B
    
    B{Type Set}
    B --- By[Yes]
          By --> ctype("layouts/customtype/**.html")
    

    Both("Example showing precedence <br/> when both are set")

    B --- Bn[No]
          Bn -- "Type = 'page'" --> C{"Layout set"}

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
<type>          / <customlayout>    . <outputformat> . <suffix>
<type>          /  single           . <outputformat> . <suffix>
<type>          / <customlayout>                     . <suffix>
<type>          /  single                            . <suffix>
                  
_default        / <customlayout>    . <outputformat> . <suffix>
_default        /  single           . <outputformat> . <suffix>
_default        / <customlayout>                     . <suffix>
_default        /  single                            . <suffix>  <-- this page example
```



{{< back >}}
