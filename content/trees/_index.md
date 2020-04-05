---
title: "Trees"
cascade:
      categories:
            - alive
---

Single page under a Section

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-regular-pages)

```
<type>          / <customlayout>    . <outputformat> . <suffix>
<type>          /  single           . <outputformat> . <suffix>
<type>          / <customlayout>                     . <suffix>  <-- #2, #4
<type>          /  single                            . <suffix>  <-- #3, #1
                  
_default        / <customlayout>    . <outputformat> . <suffix>
_default        /  single           . <outputformat> . <suffix>
_default        / <customlayout>                     . <suffix>  
_default        /  single                            . <suffix>  <-- #5

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
