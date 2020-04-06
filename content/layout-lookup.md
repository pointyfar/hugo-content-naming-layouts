---
title: "Layout Lookup Order"
---

[Docs ref](https://gohugo.io/templates/lookup-order/)


Looking at the extensive list of examples in the docs might be a bit overwhelming to new Hugo users, but it is not that complicated once we break it down.

Layout files are generally in the pattern:

```
    1            2           3         4           5             6
layoutDir / [directory] / filename . [lang] . [outputformat] . suffix
```


---

Let's look at each page `.Kind` to see how the values of these parts are affected.


### `home`

`example.com/index.html`

1. `layoutDir`: By default, the value is `layouts`. You can configure this value, but for the examples we will assume this default value is used.

2. `[directory]`: its value can be
    1. derived from `type`
        - From the docs:
            > Is value of `type` if set in front matter, else it the name of the root section (e.g. "blog"). It will always have a value, so if not set, the value is "page".
        - So in the case of the homepage, the value will be either what is set on the frontmatter, or `"page"`.
        
    1. `-`: For the homepage, the layout file can be located just below `layouts/`.
    1. `"_default"`: fallback

3. `filename`: its value can be
    1. derived from `layout` set in the frontmatter.
    1. `"index"`
    1. derived from the value of `.Kind`: `"home"`
    1. `"list"`: default

4. `[lang]`
    1. language code, eg `"en"`, `"fr"`, etc.

5. `[outputformat]`
    1. the output format name (eg `"amp"`)

6. `suffix`
    1. the output format suffix (eg `"html"`)

---

Items #1, #4, #5, #6 are the same for the below.

---

### `section`

`example.com/posts/`

2. `[directory]`: its value can be
    1. derived from `type`: see details in the docs
    1. derived from `.Kind`: `"section"`
    1. `"_default"`: fallback

3. `filename`: its value can be
    1. derived from `layout` set in the frontmatter.
    1. derived from its `.Section`, eg `"posts"`. Not to be confused with 2.b or 3.c, which is the actual string `"section"`, 
    this is the value of the top-level directory under `content`. See [docs](https://gohugo.io/content-management/sections/) for details.
    1. derived from `.Kind`: `"section"`. Not to be confused with 3.b, this is the actual string `"section"`.
    1. `"list"`: default


---

### `page`

`example.com/posts/post-one/`


2. `[directory]`: its value can be
    1. derived from `type`: see details in the docs
    1. `"_default"`: fallback

3. `filename`: its value can be
    1. derived from `layout` set in the frontmatter.
    1. `"single"`: default

---

### `taxonomyTerm`

`example.com/tags/`
```
[taxonomies]
tag = "tags"
```

2. `[directory]`: its value can be
    1. derived from `type`: see details in the docs
    1. `"taxonomy"`: the actual string `"taxonomy"`
    1. derived from its singular form (eg `"tag"` for above configuration)
    1. `"_default"`: fallback

3. `filename`: its value can be
    1. derived from `layout` set in the frontmatter.
    1. derived from `<singular> . terms` (eg `"tag.terms"` for above config)
    1. `"terms"`: the string `"terms"`
    1. `"list"`: default

---

### `taxonomy`

`example.com/tags/foo/`
```
[taxonomies]
tag = "tags"
```

2. `[directory]`: its value can be
    1. derived from `type`: see details in the docs
    1. `"taxonomy"`: the actual string `"taxonomy"`
    1. derived from the singular form of its term (eg `"tag"` for above configuration)
    1. `"_default"`: fallback

3. `filename`: its value can be
    1. derived from `layout` set in the frontmatter.
    1. derived from `<singular>` term (eg `"tag"` for above config)
    1. `"taxonomy"`: the string `"taxonomy"`
    1. `"list"`: default


---

### Some examples

Below are some examples of the effects of values of the above criteria on the layout template used.

Click <span style="padding: 5px; font-size: 20px; border-radius: 5px 0 0 5px; background-color: #9A348E; color: #eee">«</span> 
on the right to expand the info panel to see these values.

---

- for `homepage` `.Kind` (`example.com/`)
    - [example](/#lookup-rules-for-homepage-kind)
    
- for `page` `.Kind` (single pages, ie `example.com/posts/lorem-ipsum/`)
    - [main example](/trees/)
    - [custom type set](/trees/acacia/)
    - [custom layout set](/trees/fig/)
    - [no custom type or layout set](/mahogany/)
    - [both custom type and layout set](/pine/)

- for `section` `.Kind` (list pages, ie `example.com/posts/`)
    - [main example](/clouds/)
    - [custom type set](/fruit/)
    - [custom layout set](/metals/)
    - [no custom type or layout set](/clouds/)
    - [both custom type and layout set](/colors/)

- for `taxonomyTerm` `.Kind` (ie `example.com/tags/`)
    - [example](/tags/)

- for `taxonomy` `.Kind` (ie `example.com/tags/tag-one/`)
    - [example](/tags/lorem/)

- Other examples
    - for single pages (top level, ie `example.com/lorem/`)
        - [main example](/square/)
        - [custom type set](/rectangle/)
        - [custom layout set](/rhombus/)
        - [no custom type or layout set](/square/)
        - [both custom type and layout set](/oval/)
    - [single page with `amp` output format](/amp/metals/silver/) #1
    - [single page with `amp` output format](/amp/circle/) #2


### Minimum example

Hugo can generate your entire site with just two template files:
    - `_default/list.html`
    - `_default/single.html`

You can see this in action by running Hugo with the included `minconfig.toml` configuration:

```
hugo server --config minconfig
```

### Extra scenarios

- Section `lorem/_index.md` has `customtype`
    - child pages `lorem/ipsum.md` will have `.Type` = `lorem` [^1]

        See examples:
        - [`content/fruit/_index.md`](/fruit/): `type: customtype` => `.Type` = `customtype`
        - [`content/fruit/banana.md`](/fruit/banana): `.Type` = `fruit`

    - child section `lorem/ipsum/_index.md` will have `.Type` = `lorem` [^1]

        See examples:
        - [`content/fruit/_index.md`](/fruit/): `type: customtype` => `.Type` = `customtype`
        - [`content/fruit/berries/_index.md`](/fruit/berries/): `.Type` = `fruit`
    

- Section `lorem/_index.md` has `customlayout`
    - child pages `lorem/ipsum.md` will not use `customlayout` [^1]

        See examples:
        - [`content/metals/_index.md`](/metals/): `layout: customlayout` => layout = `metals/customlayout.html`
        - [`content/metals/gold.md`](/metals/gold/): layout = `_default/single.html`


[^1]: unless cascaded from parent or otherwise configured.