---
title: "Metals"
date: 2020-03-14T10:45:22+10:00
layout: customlayout
---

Frontmatter: 

```
layout: {{< param "layout">}}
```

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-section-pages)

From higher priority to lower priority:

```
<type>          / <customlayout> . <outputformat> . html
                / <type>         . <outputformat> . html
                / <kind>         . <outputformat> . html
                /  list          . <outputformat> . html
<type>          / <customlayout>                  . html    <-- this page example
                / <type>                          . html
                / <kind>                          . html
                /  list                           . html

<kind>          / <customlayout> . <outputformat> . html
                / <type>         . <outputformat> . html
                / <kind>         . <outputformat> . html
                /  list          . <outputformat> . html
<kind>          / <customlayout>                  . html
                / <type>                          . html
                / <kind>                          . html
                /  list                           . html

<_default>      / <customlayout> . <outputformat> . html
                / <type>         . <outputformat> . html
                / <kind>         . <outputformat> . html
                /  list          . <outputformat> . html
<_default>      / <customlayout>                  . html
                / <type>                          . html
                / <kind>                          . html
                /  list                           . html    <-- present, ignored

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