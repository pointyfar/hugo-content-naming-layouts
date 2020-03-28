---
title: "Homepage"
#type: customtype          # uncomment line #1
#layout: customlayout      # uncomment line #2
outputs:
- html
- json
- amp
- rss
---

Best viewed on desktop. Click <span style="padding: 5px; font-size: 20px; border-radius: 5px 0 0 5px; background-color: #9A348E; color: #eee">«</span> 
on the right to expand info panel.

- [What to name your content files? `foo.md` vs `index.md` vs `_index.md`.](/single-vs-list/)
- [What layout files will be used?](/layout-lookup/)    
- [What about Page Resources?](/page-resources/)

---

Scroll down for lookup rules for homepage.

<div style="height:300px;"></div>

---

Lookup Rules for homepage:

{{<mermaid>}}
graph TD
    A("homepage: example.com/") --> B
    
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


```

<customtype>    / <customlayout> . <outputformat> . <suffix>    
                / <index>        . <outputformat> . <suffix>
                / <kind>         . <outputformat> . <suffix>
                /  list          . <outputformat> . <suffix>

<customtype>    / <customlayout>                  . <suffix>    
                / <index>                         . <suffix>
                / <kind>                          . <suffix>  <-- uncomment frontmatter line #1 (and/or #2)
                /  list                           . <suffix>

<type>          / <customlayout> . <outputformat> . <suffix>
                / <type>         . <outputformat> . <suffix>
                / <kind>         . <outputformat> . <suffix>
                /  list          . <outputformat> . <suffix>

<type>          / <customlayout>                  . <suffix>  <-- uncomment frontmatter line #2
                / <type>                          . <suffix>
                / <kind>                          . <suffix>
                /  list                           . <suffix>


                  <index>     . <outputformat> . <suffix>
                  <kind>      . <outputformat> . <suffix>   <-- see note A
                   list       . <outputformat> . <suffix>

                  <index>                      . <suffix>   <-- this layout in use, see note B
                  <kind>                       . <suffix>   <-- this layout in use, see note A
                   list                        . <suffix>


<_default>      / <index>     . <outputformat> . <suffix>
                  <kind>      . <outputformat> . <suffix>   
                   list       . <outputformat> . <suffix>

<_default>      / <index>                      . <suffix>
                  <kind>                       . <suffix>
                   list                        . <suffix>   <-- present, ignored

```

Notes:

Note A. 
- [amp](/amp/) output using `layouts/index.html` (See Note B)
- [json](/index.json) output using `layouts/home.json` = `<kind>.<suffix>`
- [html](/index.html) output using `layouts/index.html`
- [rss](/index.xml) output using `layouts/list.rss.xml` = `<list>.<outputformat>.<suffix>` (note description tag)


Note B. The homepage is also configured to generate an AMP page. However, no `**.amp.html` layout files are found,
that match the lookup order, so it uses `layouts/index.html` as instead.


