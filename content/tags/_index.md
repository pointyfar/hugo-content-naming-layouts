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
[directory]     / filename              .  [<lang>] . [<outputformat>] . suffix

<type>          / <customlayout>        .  [<lang>] . [<outputformat>] . <suffix>    <-- see note 1, 6
<type>          / <singular> . terms    .  [<lang>] . [<outputformat>] . <suffix>
<type>          /  terms                .  [<lang>] . [<outputformat>] . <suffix>
<type>          /  list                 .  [<lang>] . [<outputformat>] . <suffix>    <-- see note 4

taxonomy        / <customlayout>        .  [<lang>] . [<outputformat>] . <suffix>
taxonomy        / <singular> . terms    .  [<lang>] . [<outputformat>] . <suffix>    <-- see note 2
taxonomy        /  terms                .  [<lang>] . [<outputformat>] . <suffix>
taxonomy        /  list                 .  [<lang>] . [<outputformat>] . <suffix>

<singular>      / <customlayout>        .  [<lang>] . [<outputformat>] . <suffix>
<singular>      / <singular> . terms    .  [<lang>] . [<outputformat>] . <suffix>
<singular>      /  terms                .  [<lang>] . [<outputformat>] . <suffix>
<singular>      /  list                 .  [<lang>] . [<outputformat>] . <suffix>    <-- see note 2

_default        / <customlayout>        .  [<lang>] . [<outputformat>] . <suffix>    <-- see note 5
_default        / <singular> . terms    .  [<lang>] . [<outputformat>] . <suffix>
_default        /  terms                .  [<lang>] . [<outputformat>] . <suffix>
_default        /  list                 .  [<lang>] . [<outputformat>] . <suffix>    <-- see note 3

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

