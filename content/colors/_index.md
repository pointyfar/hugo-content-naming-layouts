---
title: "Colors"
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
<customtype>    / <type> . <outputformat>. <suffix>
                / <kind> . <outputformat>. <suffix>
                /  list  . <outputformat>. <suffix>

<customtype>    / <customlayout>   . <suffix>    <-- see note
                / <type>           . <suffix>
                / <kind>           . <suffix>
                /  list            . <suffix>    <-- this page example

<type>          / <customlayout>    . <outputformat>. <suffix>
                / <type>            . <outputformat>. <suffix>
                / <kind>            . <outputformat>. <suffix>
                /  list             . <outputformat>. <suffix>
<type>          / <customlayout>   . <suffix>    <-- present, ignored
                / <type>           . <suffix>
                / <kind>           . <suffix>
                /  list            . <suffix>

<kind>          / <customlayout>    . <outputformat>. <suffix>
                / <type>            . <outputformat>. <suffix>
                / <kind>            . <outputformat>. <suffix>
                /  list             . <outputformat>. <suffix>
<kind>          / <type>           . <suffix>
                / <kind>           . <suffix>
                /  list            . <suffix>

<_default>      / <customlayout>    . <outputformat>. <suffix>
                / <type>            . <outputformat>. <suffix>
                / <kind>            . <outputformat>. <suffix>
                /  list             . <outputformat>. <suffix>
<_default>      / <customlayout>   . <suffix>
                / <type>           . <suffix>
                / <kind>           . <suffix>
                /  list            . <suffix>    <-- present, ignored

```

Note:

renaming file at `layouts/customtype/__customlayout.html` to `customlayout.html` 
will show priority.


{{< back >}}