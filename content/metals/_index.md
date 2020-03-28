---
title: "Metals"
layout: customlayout
---

Frontmatter: 

```
layout: {{< param "layout">}}
```

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-section-pages)

From higher priority to lower priority:

```
<type>          / <customlayout> . <outputformat> . <suffix>
                / <type>         . <outputformat> . <suffix>
                / <kind>         . <outputformat> . <suffix>
                /  list          . <outputformat> . <suffix>
<type>          / <customlayout>                  . <suffix>    <-- this page example
                / <type>                          . <suffix>
                / <kind>                          . <suffix>
                /  list                           . <suffix>

<kind>          / <customlayout> . <outputformat> . <suffix>
                / <type>         . <outputformat> . <suffix>
                / <kind>         . <outputformat> . <suffix>
                /  list          . <outputformat> . <suffix>
<kind>          / <customlayout>                  . <suffix>
                / <type>                          . <suffix>
                / <kind>                          . <suffix>
                /  list                           . <suffix>

<_default>      / <customlayout> . <outputformat> . <suffix>
                / <type>         . <outputformat> . <suffix>
                / <kind>         . <outputformat> . <suffix>
                /  list          . <outputformat> . <suffix>
<_default>      / <customlayout>                  . <suffix>
                / <type>                          . <suffix>
                / <kind>                          . <suffix>
                /  list                           . <suffix>    <-- present, ignored

```
- `layouts/posts/demolayout.html.html`
- `layouts/posts/posts.html.html`
- `layouts/posts/section.html.html`
- `layouts/posts/list.html.html`
- `layouts/posts/demolayout.html`
- `layouts/posts/posts.html`
- `layouts/posts/section.html`
- `layouts/posts/list.html`
- `layouts/section/demolayout.html.html`
- `layouts/section/posts.html.html`
- `layouts/section/section.html.html`
- `layouts/section/list.html.html`
- `layouts/section/demolayout.html`
- `layouts/section/posts.html`
- `layouts/section/section.html`
- `layouts/section/list.html`
- `layouts/_default/demolayout.html.html`
- `layouts/_default/posts.html.html`
- `layouts/_default/section.html.html`
- `layouts/_default/list.html.html`
- `layouts/_default/demolayout.html`
- `layouts/_default/posts.html`
- `layouts/_default/section.html`
- `layouts/_default/list.html`