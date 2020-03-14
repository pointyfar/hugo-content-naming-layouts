---
title: "Fig"
layout: customlayout
---


Frontmatter:
```
layout: customlayout
```

From higher priority to lower priority:

```
<type>          / <customlayout>    . <outputformat> . html
                /  single           . <outputformat> . html
                / <customlayout>                     . html  <-- this page example
                /  single                            . html
                  
<_default>      
                / <customlayout>    . <outputformat> . html
                /  single           . <outputformat> . html
                / <customlayout>                     . html  
                /  single                            . html  <-- present, ignored
```

- `layouts/customtype/demolayout.html.html`
- `layouts/posts/single.html.html `
- `layouts/posts/single.html`
- `layouts/posts/demolayout.html.html`
- `layouts/posts/single.html.html `
- `layouts/posts/single.html`
- `layouts/_default/demolayout.html.html`
- `layouts/_default/single.html.html`
- `layouts/_default/demolayout.html`
- `layouts/_default/single.html`

