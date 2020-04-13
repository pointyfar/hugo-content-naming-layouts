---
title: "Trees"
cascade:
      categories:
            - alive
---

Single page under a Section

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-regular-pages)

```
[directory] / filename       .  [<lang>] . [<outputformat>] . suffix

<type>          / <customlayout>    .  [<lang>] . [<outputformat>] . <suffix>  <-- #2, #4
<type>          /  single           .  [<lang>] . [<outputformat>] . <suffix>  <-- #3, #1
                  
_default        / <customlayout>    .  [<lang>] . [<outputformat>] . <suffix>
_default        /  single           .  [<lang>] . [<outputformat>] . <suffix>  <-- #5

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
