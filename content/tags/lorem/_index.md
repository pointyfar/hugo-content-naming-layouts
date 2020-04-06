---
title: "Lorem"

#layout: customlayout   # uncomment line (Note 5, 6)

#type: taxo             # uncomment line (Note 4, 6)


---

```
<type>          / <customlayout> . <outputformat>  . <suffix>   <-- see note 1
<type>          / <singular>     . <outputformat>  . <suffix>
<type>          /  taxonomy      . <outputformat>  . <suffix>
<type>          /  list          . <outputformat>  . <suffix>

<type>          / <customlayout>                   . <suffix>
<type>          / <singular>                       . <suffix>
<type>          /  taxonomy                        . <suffix>
<type>          /  list                            . <suffix>   <-- see note 2


taxonomy        / <customlayout> . <outputformat>  . <suffix>
taxonomy        / <singular>     . <outputformat>  . <suffix>
taxonomy        /  taxonomy      . <outputformat>  . <suffix>
taxonomy        /  list          . <outputformat>  . <suffix>

taxonomy        / <customlayout>                   . <suffix>
taxonomy        / <singular>                       . <suffix>
taxonomy        /  taxonomy                        . <suffix>
taxonomy        /  list                            . <suffix>


<singular>      / <customlayout> . <outputformat>  . <suffix>
<singular>      / <singular>     . <outputformat>  . <suffix>
<singular>      /  taxonomy      . <outputformat>  . <suffix>
<singular>      /  list          . <outputformat>  . <suffix>

<singular>      / <customlayout>                   . <suffix>
<singular>      / <singular>                       . <suffix>
<singular>      /  taxonomy                        . <suffix>
<singular>      /  list                            . <suffix>   <-- see note 6


_default        / <customlayout> . <outputformat>  . <suffix>
_default        / <singular>     . <outputformat>  . <suffix>
_default        /  taxonomy      . <outputformat>  . <suffix>
_default        /  list          . <outputformat>  . <suffix>

_default        / <customlayout>                   . <suffix>   <-- see note 3
_default        / <singular>                       . <suffix>
_default        /  taxonomy                        . <suffix>   <-- see note 4
_default        /  list                            . <suffix>   <-- see note 5

```

Notes:

1. Unless explicitly set, a `taxonomy`'s `type` is its `taxonomyTerm`'s plural, ie for `tags/lorem/` its `type` is `tags`.

2. Un-comment line in frontmatter `type: taxo` in `content/tags/lorem/_index.md` to see in this effect.

3. Un-comment line in frontmatter `layout: customlayout` in `content/tags/lorem/_index.md` to see in this effect.

4. This layout in use.

5. This layout present but ignored.

6. See [`/taxos/`](/taxos/) and [`/taxos/a/`](/taxos/a/), which use `<singular> / list . html` => `taxo/list.html` layout.


- layouts/categories/category.html.html
- layouts/categories/taxonomy.html.html
- layouts/categories/list.html.html

- layouts/categories/category.html
- layouts/categories/taxonomy.html
- layouts/categories/list.html

- layouts/taxonomy/category.html.html
- layouts/taxonomy/taxonomy.html.html
- layouts/taxonomy/list.html.html

- layouts/taxonomy/category.html
- layouts/taxonomy/taxonomy.html
- layouts/taxonomy/list.html

- layouts/category/category.html.html
- layouts/category/taxonomy.html.html
- layouts/category/list.html.html

- layouts/category/category.html
- layouts/category/taxonomy.html
- layouts/category/list.html

- layouts/_default/category.html.html
- layouts/_default/taxonomy.html.html
- layouts/_default/list.html.html

- layouts/_default/category.html
- layouts/_default/taxonomy.html
- layouts/_default/list.html]