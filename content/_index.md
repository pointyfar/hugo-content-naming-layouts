---
title: "Homepage"
#type: customtype          # uncomment line #1
#layout: customlayout      # uncomment line #2
xoutputs:
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

<div style="height:400px;"></div>

---

### Lookup Rules for `homepage` `.Kind`:

```
[directory] / filename       .  [<lang>] . [<outputformat>] . suffix

<type>      / <customlayout> .  [<lang>] . [<outputformat>] . <suffix>  <-- uncomment frontmatter line #2
<type>      /  index         .  [<lang>] . [<outputformat>] . <suffix>
<type>      / <kind>         .  [<lang>] . [<outputformat>] . <suffix>  <-- uncomment frontmatter line #1 (and/or #2)
<type>      /  list          .  [<lang>] . [<outputformat>] . <suffix>

               index         .  [<lang>] . [<outputformat>] . <suffix>   <-- see note A.1, A.3, B
              <kind>         .  [<lang>] . [<outputformat>] . <suffix>   <-- see note A.2
               list          .  [<lang>] . [<outputformat>] . <suffix>   <-- see note A.4

_default    /  index         .  [<lang>] . [<outputformat>] . <suffix>
_default    / <kind>         .  [<lang>] . [<outputformat>] . <suffix>   
_default    /  list          .  [<lang>] . [<outputformat>] . <suffix>   <-- present, ignored

```

Notes:

Note A. 
1. [amp](/amp/) output using `layouts/index.html` (Also See Note B)
2. [json](/index.json) output using `layouts/home.json` = `<kind>.<suffix>`
3. [html](/index.html) output using `layouts/index.html`
4. [rss](/index.xml) output using `layouts/list.rss.xml` = `<list>.<outputformat>.<suffix>` (note description tag)


Note B. The homepage is also configured to generate an AMP page. However, no `**.amp.html` layout files are found,
that match the lookup order, so it uses `layouts/index.html` as instead.


