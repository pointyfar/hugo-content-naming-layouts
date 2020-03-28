---
title: "Fruit"
type: customtype
---

Frontmatter: 

```
type: {{< param "type">}}
```

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-section-pages)

From higher priority to lower priority:

```
<customtype>    / <type> . <outputformat>. <suffix>
                / <kind> . <outputformat>. <suffix>
                /  list  . <outputformat>. <suffix>
<customtype>    / <type>                 . <suffix>
                / <kind>                 . <suffix>
                /  list                  . <suffix>    <-- this page example

<type>          / <type> . <outputformat>. <suffix>
                / <kind> . <outputformat>. <suffix>
                /  list  . <outputformat>. <suffix>
<type>          / <type>                 . <suffix>
                / <kind>                 . <suffix>
                /  list                  . <suffix>

<kind>          / <type> . <outputformat>. <suffix>
                / <kind> . <outputformat>. <suffix>
                /  list  . <outputformat>. <suffix>
<kind>          / <type>                 . <suffix>
                / <kind>                 . <suffix>
                /  list                  . <suffix>

<_default>      / <type> . <outputformat>. <suffix>
                / <kind> . <outputformat>. <suffix>
                /  list  . <outputformat>. <suffix>
<_default>      / <type>                 . <suffix>
                / <kind>                 . <suffix>
                /  list                  . <suffix>    <-- present, ignored

```
- `layouts/blog/posts.html.html`
- `layouts/blog/section.html.html`
- `layouts/blog/list.html.html`
- `layouts/blog/posts.html`
- `layouts/blog/section.html`
- `layouts/blog/list.html`
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

{{< back >}}
