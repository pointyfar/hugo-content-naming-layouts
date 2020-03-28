---
title: "Layout Lookup Order"
---

[Docs ref](https://gohugo.io/templates/lookup-order/)

Hugo considers several factors in determining what layout files to use in rendering each page.

The least specific criteria which Hugo uses is what `.Kind` a page is. 

With just these two default layout files, Hugo will already be able to render your site:

- `layouts/_default/list.html`
    - `home` `.Kind`  (`example.com/index.html`)
    - `section` `.Kind` pages (`example.com/posts/`)
    - `taxonomyTerm` `.Kind` pages (`example.com/tags/`)
    - `taxonomy` `.Kind` pages (`example.com/tags/awesome/`)
- `layouts/_default/single.html` 
    - `page` `.Kind` (regular content) (`example.com/posts/lorem-ipsum/`)

But what if you want to use different layouts for different pages? This is where the layout lookup rules come in.

The other criteria that affect the layout used to generate pages are:
- value of `layout` in frontmatter 
- output format to render
- language used
- page `.Type` value
- page `.Section` value

Below are some examples of the effects of values of the above criteria on the layout template used.

Click <span style="padding: 5px; font-size: 20px; border-radius: 5px 0 0 5px; background-color: #9A348E; color: #eee">«</span> 
on the right to expand the info panel to see these values.

---

- for `homepage` `.Kind` (`example.com/`)
    - [flowchart](/#lookup-rules-for-homepage)
    
- for `page` `.Kind` (single pages, ie `example.com/posts/lorem-ipsum/`)
    - [main flowchart](/trees/)
    - [custom type set](/trees/acacia/)
    - [custom layout set](/trees/fig/)
    - [no custom type or layout set](/mahogany/)
    - [both custom type and layout set](/pine/)

- for `section` `.Kind` (list pages, ie `example.com/posts/`)
    - [main flowchart / discussion](/clouds/)
    - [custom type set](/fruit/)
    - [custom layout set](/metals/)
    - [no custom type or layout set](/clouds/)
    - [both custom type and layout set](/colors/)

- Other examples
    - for single pages (top level, ie `example.com/lorem/`)
        - [main flowchart](/square/)
        - [custom type set](/rectangle/)
        - [custom layout set](/rhombus/)
        - [no custom type or layout set](/square/)
        - [both custom type and layout set](/oval/)
    - [single page with `amp` output format](/amp/metals/silver/) #1
    - [single page with `amp` output format](/amp/circle/) #2


Some scenarios:

- Section `lorem/_index.md` has `customtype`
    - child pages `lorem/ipsum.md` will have `.Type` = `lorem` [^1]

        See examples:
        - [`content/fruit/_index.md`](/fruit/): `type: customtype` => `.Type` = `customtype`
        - [`content/fruit/banana.md`](/fruit/banana): `.Type` = `fruit`

    - child section `lorem/ipsum/_index.md` will have `.Type` = `lorem` [^1]

        See examples:
        - [`content/fruit/_index.md`](/fruit/): `type: customtype` => `.Type` = `customtype`
        - [`content/fruit/berries/_index.md`](/fruit/berries/): `.Type` = `fruit`
    

- Section `lorem/_index.md` has `customlayout`
    - child pages `lorem/ipsum.md` will not use `customlayout` [^1]

        See examples:
        - [`content/metals/_index.md`](/metals/): `layout: customlayout` => layout = `metals/customlayout.html`
        - [`content/metals/gold.md`](/metals/gold/): layout = `_default/single.html`


[^1]: unless cascaded from parent or otherwise configured.