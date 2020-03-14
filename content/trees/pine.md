---
title: "Pine"
layout: customlayout
type: custompine
---

Frontmatter:
```
layout: custompine
type: customtype
```

From higher priority to lower priority:

```
<customtype>    
                / <customlayout>    . <outputformat> . html
                /  single           . <outputformat> . html
                / <customlayout>                     . html  <-- this page example  
                /  single                            . html

<type>          
                / <customlayout>    . <outputformat> . html
                /  single           . <outputformat> . html
                / <customlayout>                     . html  <-- present, ignored
                /  single                            . html  <-- present, ignored
                  
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

