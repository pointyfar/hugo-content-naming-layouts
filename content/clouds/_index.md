---
title: "Clouds"
---


[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-section-pages)

{{<mermaid>}}
graph TD
    A("content/lorem/_index.md") --> B
    
    B{Type Set}
    B --- By[Yes]
          By --> ctype("layouts/customtype/**.html")
    

    Both("Example showing precedence <br/> when both are set")

    B --- Bn[No]
          Bn --> C{"Layout set"}

    C --- Cy[Yes]
          Cy --> pcl("layouts/**/customlayout.html")


    C --- Cn[No]
          Cn --> Default("** See list below **")
    

    classDef thick stroke-width:4px, stroke:#91C7B1;
    class Default,pcl,dcl,ctype,Both thick;

    style Both stroke-dasharray:5, 5 stroke:#91C7B1;
    style A stroke-width:4px, stroke:#6153CC;

    click ctype "/fruit/" "Example"
    click Both "/colors/" "Example"
    click pcl "/metals/" "Example"



{{</mermaid>}}

---

```
<type>          / <type>         . <outputformat>. <suffix>
                / <kind>         . <outputformat>. <suffix>
                /  list          . <outputformat>. <suffix>
<type>          / <type>                         . <suffix>
                / <kind>                         . <suffix>
                /  list                          . <suffix>    <-- this page example

<kind>          / <type>         . <outputformat>. <suffix>
                / <kind>         . <outputformat>. <suffix>
                /  list          . <outputformat>. <suffix>
<kind>          / <type>                         . <suffix>
                / <kind>                         . <suffix>
                /  list                          . <suffix>

<_default>      / <type>         . <outputformat>. <suffix>
                / <kind>         . <outputformat>. <suffix>
                /  list          . <outputformat>. <suffix>
<_default>      / <type>                         . <suffix>
                / <kind>                         . <suffix>
                /  list                          . <suffix>    <-- present, ignored

```

- `layouts/posts/posts.html.html`
- `layouts/posts/section.html.html`
- `layouts/posts/list.html.html`   
- `layouts/posts/posts.html`       
- `layouts/posts/section.html`     
- `layouts/posts/list.html`        
- `layouts/section/posts.html.html`
- `layouts/section/section.html.html` 
- `layouts/section/list.html.html`    
- `layouts/section/posts.html`        
- `layouts/section/section.html`      
- `layouts/section/list.html`         
- `layouts/_default/posts.html.html`  
- `layouts/_default/section.html.html`
- `layouts/_default/list.html.html`   
- `layouts/_default/posts.html`       
- `layouts/_default/section.html`     
- `layouts/_default/list.html`        

---

{{< back >}}