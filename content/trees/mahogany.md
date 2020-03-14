---
title: "Mahogany"
---


From higher priority to lower priority:

```
<type>          /  single   . <outputformat> . html
                /  single                    . html  <-- this page example
                  
<_default>      /  single   . <outputformat> . html
                /  single                    . html  <-- present, ignored
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

