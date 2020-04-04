---
title: "Tags"

outputs:
- html
- amp

#layout: customlayout   # uncomment line (Note 5, 6)

#type: taxo             # uncomment line (Note 4, 6)

---

From the highest priority to the lowest:

```
<customtype>    / <customlayout>        . <outputformat>  . <suffix>
<customtype>    / <singular> . terms    . <outputformat>  . <suffix>
<customtype>    /  terms                . <outputformat>  . <suffix>
<customtype>    /  list                 . <outputformat>  . <suffix>

<customtype>    / <customlayout>                          . <suffix>    <-- see note 6
<customtype>    / <singular> . terms                      . <suffix>
<customtype>    /  terms                                  . <suffix>
<customtype>    /  list                                   . <suffix>    <-- see note 4

<type>          / <customlayout>        . <outputformat>  . <suffix>    <-- see note 1
<type>          / <singular> . terms    . <outputformat>  . <suffix>
<type>          /  terms                . <outputformat>  . <suffix>
<type>          /  list                 . <outputformat>  . <suffix>

<type>          / <customlayout>                          . <suffix>    <-- see note 1
<type>          / <singular> . terms                      . <suffix>
<type>          /  terms                                  . <suffix>
<type>          /  list                                   . <suffix>

taxonomy        / <customlayout>        . <outputformat>  . <suffix>
taxonomy        / <singular> . terms    . <outputformat>  . <suffix>
taxonomy        /  terms                . <outputformat>  . <suffix>
taxonomy        /  list                 . <outputformat>  . <suffix>

taxonomy        / <customlayout>                          . <suffix>
taxonomy        / <singular> . terms                      . <suffix>    <-- see note 2
taxonomy        /  terms                                  . <suffix>
taxonomy        /  list                                   . <suffix>  

<singular>      / <customlayout>        . <outputformat>  . <suffix>
<singular>      / <singular> . terms    . <outputformat>  . <suffix>
<singular>      /  terms                . <outputformat>  . <suffix>
<singular>      /  list                 . <outputformat>  . <suffix>

<singular>      / <customlayout>                          . <suffix>
<singular>      / <singular> . terms                      . <suffix>
<singular>      /  terms                                  . <suffix>
<singular>      /  list                                   . <suffix>    <-- see note 2

_default        / <customlayout>        . <outputformat>  . <suffix>
_default        / <singular> . terms    . <outputformat>  . <suffix>
_default        /  terms                . <outputformat>  . <suffix>
_default        /  list                 . <outputformat>  . <suffix>

_default        / <customlayout>                          . <suffix>    <-- see note 5
_default        / <singular> . terms                      . <suffix>
_default        /  terms                                  . <suffix>    <-- see note 3
_default        /  list                                   . <suffix>    <-- see note 3

```
Notes:

1. Unless explicitly set, a `taxonomyTerm`'s `type` is its plural form.

2. Taxonomy [`taxo = "taxos"`](/taxos/) uses `<singular> / list . <suffix>` => `layouts/taxo/list.html`
    
    Rename `layouts/taxonomy/__taxo.terms.html` to `layouts/taxonomy/taxo.terms.html` to see `taxonomy / <singular> . terms . html` take precedence.

3. Both are present, but ignored as there exists a higher-priority layout.

4. Un-comment line in frontmatter `type: taxo` in `content/tags/_index.md` to see this in effect.

5. Un-comment line in frontmatter `layout: customlayout` in `content/tags/_index.md` to see this in effect.

6. Un-comment both `type` and `layout` in frontmatter in `content/tags/_index.md`

---

