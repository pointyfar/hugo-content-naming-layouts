---
title: "Trees"
cascade:
      categories:
            - alive
---

Single page under a Section

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-regular-pages)

{{<mermaid>}}
graph TD
    A1("content/lorem/ipsum.md") --> B
    A2("content/lorem/ipsum/index.md") --> B
    
    B{Type Set}
    B --- By[Yes]
          By --> ctype("layouts/customtype/single.html")
    

    B --- Bn[No]
          Bn --> C{"Layout set"}

    C --- Cy[Yes]
          Cy --> dcl("layouts/**/customlayout.html")

    C --- Cn[No]
          Cn --> Default("layouts/**/single.html")
    

    classDef thick stroke-width:4px, stroke:#91C7B1;
    class Default,pcl,dcl,ctype,Both thick;

    style A1 stroke-width:4px, stroke:#6153CC;
    style A2 stroke-width:4px, stroke:#6153CC;

{{</mermaid>}}

---


```
<customtype>    / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>
                / <customlayout>                     . <suffix>  <-- Note 4
                /  single                            . <suffix>  <-- Note 1


<type>          / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>
                / <customlayout>                     . <suffix>  <-- Note 2
                /  single                            . <suffix>  <-- Note 3
                  
_default        / <customlayout>    . <outputformat> . <suffix>
                /  single           . <outputformat> . <suffix>
                / <customlayout>                     . <suffix>  
                /  single                            . <suffix>  <-- Note 5

```


Notes:

1. [content/trees/acacia.md](acacia) has type set:
```
<customtype> / single . <suffix> => customtype/single.html
```

2. [content/trees/fig.md](fig) has layout set:
```
<type> / <customlayout> . <suffix> => trees/customlayout.html
```

3. [content/trees/mahogany.md](mahogany) has neither type nor layout set:
```
<type> / single . <suffix> => trees/single.html
```

4. [content/trees/pine.md](pine) has both type and layout set:
```
<customtype> / <customlayout> . <suffix> => custompine/customlayout.html
```

5. `_default/single.html` exists, but is ignored since there exists a higher priority layout for each case.

---


{{< back >}}
