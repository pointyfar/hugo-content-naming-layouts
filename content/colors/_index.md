---
title: "Colors"
date: 2020-03-13T16:37:24+10:00
layout: customlayout
type: customtype
---

Both layout and type set.

Frontmatter:

```
layout: {{< param "layout">}}
type: {{< param "type">}}
```


```
<customtype>    / <type> . <outputformat> . html
                / <kind> . <outputformat> . html
                /  list  . <outputformat> . html

<customtype>    / <customlayout>    . html    <-- see note
                / <type>            . html
                / <kind>            . html
                /  list             . html    <-- this page example

<type>          / <customlayout>    . <outputformat> . html
                / <type>            . <outputformat> . html
                / <kind>            . <outputformat> . html
                /  list             . <outputformat> . html
<type>          / <customlayout>    . html    <-- present, ignored
                / <type>            . html
                / <kind>            . html
                /  list             . html

<kind>          / <customlayout>    . <outputformat> . html
                / <type>            . <outputformat> . html
                / <kind>            . <outputformat> . html
                /  list             . <outputformat> . html
<kind>          / <type>            . html
                / <kind>            . html
                /  list             . html

<_default>      / <customlayout>    . <outputformat> . html
                / <type>            . <outputformat> . html
                / <kind>            . <outputformat> . html
                /  list             . <outputformat> . html
<_default>      / <customlayout>    . html
                / <type>            . html
                / <kind>            . html
                /  list             . html    <-- present, ignored

```

Note:

renaming file at `layouts/customtype/__customlayout.html` to `customlayout.html` 
will show priority.


{{< back >}}