---
title: "Clouds"
---

Section pages

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-section-pages)

{{<mermaid>}}
graph TD
    A("content/lorem/_index.md") --> B
    
    B{Type Set}
    B --- By[Yes]
          By --> ctype("layouts/customtype/**.html")
    

    B --- Bn[No]
          Bn --> C{"Layout set"}

    C --- Cy[Yes]
          Cy --> pcl("layouts/**/customlayout.html")


    C --- Cn[No]
          Cn --> Default("** See list below **")
    

    classDef thick stroke-width:4px, stroke:#91C7B1;
    class Default,pcl,dcl,ctype,Both thick;

    style A stroke-width:4px, stroke:#6153CC;



{{</mermaid>}}

---

```
<customtype>    / <customlayout>    . <outputformat>  . <suffix>
                / <section>         . <outputformat>  . <suffix>
                / <kind>            . <outputformat>  . <suffix>
                /  list             . <outputformat>  . <suffix>  

<customtype>    / <customlayout>                      . <suffix>  <-- see note 1
                / <section>                           . <suffix>  <-- see note 2
                / <kind>                              . <suffix>
                /  list                               . <suffix>  <-- see note 2

<type>          / <customlayout>    . <outputformat>  . <suffix>
                / <section>         . <outputformat>  . <suffix>
                / <kind>            . <outputformat>  . <suffix>
                /  list             . <outputformat>  . <suffix>  <-- see note 3

<type>          / <customlayout>                      . <suffix>  <-- see note 3
                / <section>                           . <suffix>
                / <kind>                              . <suffix>
                /  list                               . <suffix>  <-- see note 4

<kind>          / <customlayout>    . <outputformat>  . <suffix>
                / <section>         . <outputformat>  . <suffix>
                / <kind>            . <outputformat>  . <suffix>
                /  list             . <outputformat>  . <suffix>

<kind>          / <type>                              . <suffix>
                / <section>                           . <suffix>
                / <kind>                              . <suffix>
                /  list                               . <suffix>

_default        / <customlayout>    . <outputformat>  . <suffix>
                / <section>         . <outputformat>  . <suffix>
                / <kind>            . <outputformat>  . <suffix>
                /  list             . <outputformat>  . <suffix>

_default        / <customlayout>                      . <suffix>
                / <section>                           . <suffix>
                / <kind>                              . <suffix>
                /  list                               . <suffix>  <-- note 5

```

Notes:

1. [`content/colors/_index.md`](/colors/) has both type and layout specified. 
```
<customtype> / list . <suffix> => customtype/list.html
```

Rename `layouts/customtype/__customlayout.html` to `layouts/customtype/customlayout.html` to make page use a more specific layout.


2. [`content/fruit/_index.md`](/fruit/) has type specified.
```
<customtype> / list . <suffix> => customtype/list.html
```

Rename `layouts/customtype/__fruit.html` to `layouts/customtype/fruit.html` to make page use a more specific layout.


3. [`content/metals/_index.md`](/metals/) has layout specified. It also has `json` output configured.
      - See [json](/metals/index.json) output.
```
<type> / customlayout . <suffix> => metals/customlayout.html
<type> / list . <suffix> => metals/list.json
```


4. [`content/trees/_index.md`](/trees/) has neither type nor layout specified. However, there does exist a `type`-specific layout file,
which has a higher priority, so it uses that.
```
<type> / list . <suffix> => trees/list.html
```

5. [`content/letters/_index.md`] has no custom front matter configuration. There are no layout files with a higher priority, so it uses the default list file.
```
_default / list . <suffix> => _default_/list.html

```

---

{{< back >}}