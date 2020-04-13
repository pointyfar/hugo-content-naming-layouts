---
title: "Clouds"
---

Section pages

[Docs reference](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-section-pages)

```
[directory]     / filename          .  [<lang>] . [<outputformat>] . suffix

<type>          / <customlayout>    .  [<lang>] . [<outputformat>] . <suffix>  <-- see note 1, 3
<type>          / <section>         .  [<lang>] . [<outputformat>] . <suffix>  <-- see note 2
<type>          / <kind>            .  [<lang>] . [<outputformat>] . <suffix>
<type>          /  list             .  [<lang>] . [<outputformat>] . <suffix>  <-- see note 2, 3, 4

<kind>          / <customlayout>    .  [<lang>] . [<outputformat>] . <suffix>
<kind>          / <section>         .  [<lang>] . [<outputformat>] . <suffix>
<kind>          / <kind>            .  [<lang>] . [<outputformat>] . <suffix>
<kind>          /  list             .  [<lang>] . [<outputformat>] . <suffix>

_default        / <customlayout>    .  [<lang>] . [<outputformat>] . <suffix>
_default        / <section>         .  [<lang>] . [<outputformat>] . <suffix>
_default        / <kind>            .  [<lang>] . [<outputformat>] . <suffix>
_default        /  list             .  [<lang>] . [<outputformat>] . <suffix>  <-- note 5

```

Notes:

1. [`content/colors/_index.md`](/colors/) has both type and layout specified. However, no `customtype/customlayout.html` is found.
```
<customtype> / list . <suffix> => customtype/list.html
```

Rename `layouts/customtype/__customlayout.html` to `layouts/customtype/customlayout.html` to make page use a more specific layout.


2. [`content/fruit/_index.md`](/fruit/) has type specified.
```
<customtype> / list . <suffix> => customtype/list.html
```

Rename `layouts/customtype/__fruit.html` to `layouts/customtype/fruit.html` to make page use a more specific layout.


3. [`content/metals/_index.md`](/metals/) has layout specified. It also has `json` output configured.
      - See [json](/metals/index.json) output.
```
<type> / customlayout . <suffix> => metals/customlayout.html
<type> / list . <suffix> => metals/list.json
```


4. [`content/trees/_index.md`](/trees/) has neither type nor layout specified. However, there does exist a `type`-specific layout file,
which has a higher priority, so it uses that.
```
<type> / list . <suffix> => trees/list.html
```

5. [`content/letters/_index.md`] has no custom front matter configuration. There are no layout files with a higher priority, so it uses the default list file.
```
_default / list . <suffix> => _default_/list.html

```

---

{{< back >}}