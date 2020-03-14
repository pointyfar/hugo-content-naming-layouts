---
title: "Fruit"
date: 2020-03-14T10:44:45+10:00
type: customtype
---

Frontmatter: 

```
type: {{< param "type">}}
```

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-section-pages)

From higher priority to lower priority:

```
<customtype>    / <type> . <outputformat> . html
                / <kind> . <outputformat> . html
                /  list  . <outputformat> . html
<customtype>    / <type>                  . html
                / <kind>                  . html
                /  list                   . html    <-- this page example

<type>          / <type> . <outputformat> . html
                / <kind> . <outputformat> . html
                /  list  . <outputformat> . html
<type>          / <type>                  . html
                / <kind>                  . html
                /  list                   . html

<kind>          / <type> . <outputformat> . html
                / <kind> . <outputformat> . html
                /  list  . <outputformat> . html
<kind>          / <type>                  . html
                / <kind>                  . html
                /  list                   . html

<_default>      / <type> . <outputformat> . html
                / <kind> . <outputformat> . html
                /  list  . <outputformat> . html
<_default>      / <type>                  . html
                / <kind>                  . html
                /  list                   . html    <-- present, ignored

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
