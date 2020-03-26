## What is this

A (hopefully) helpful guide to users new to Hugo about what the differences are 
between `index.md`, `_index.md` and `lorem-ipsum.md`, and how these relate to 
what layout files are being used.

I like to start with the question: Where will this page live in my site? 

Take a common example: an `"About Us"` page. I want it to live in `yoursite.com/about-us/`. 

Any of these three options[^1] will generate a page at `yoursite.com/about-us/`:

- `content/about-us.md`
- `content/about-us/index.md`
- `content/about-us/_index.md`

But which one should I use? 

1. Does this page have child pages? For example, do you want to have pages at 

- `yoursite.com/about-us/`
- `yoursite.com/about-us/blue-team/`
- `yoursite.com/about-us/orange-team/`
- `yoursite.com/about-us/yellow-team/`

If the answer is **YES**, then `about-us` needs to be named `content/about-us/_index.md`. This tells Hugo that `about-us` is a list page. [Docs ref](https://gohugo.io/content-management/organization/#index-pages-_indexmd).

As a list page, it will consequently use a `list.html`.

If the answer is **NO**, the next question is:

2. Do you have resources you want to bundle with your page?

For example, maybe you want to organise your `"About Us"` page into several sections, one for each team. Each team has a photo, a description, and other attachments, but you don't want a separate page at all.

If the answer is **YES** you will want to take advantage of Hugo's Page Bundles feature. You need to have your content file at `content/about-us/index.md`, with the Page Resources under it as well:

```
content
├── about-us
│   ├── index.md
│   ├── blue-team
│   │   ├── attachment.pdf
│   │   ├── img.jpg
│   │   └── members.md
│   ├── orange-team
│   │   ├── attachment.pdf
│   │   ├── img.jpg
│   │   └── members.md
│   └── yellow-team
│       └── ...
```

If the answer is **NO**, you have the option of simply creating your file at `content/about-us.md`. Note that you can still choose to organise it like a Page bundle (`content/about-us/index.md`) regardless.

Either option (`about-us/index.md` or `about-us.md`) will use a `single.html` template.


![site/lorem/](https://raw.githubusercontent.com/pointyfar/hugo-content-naming-layouts/master/static/yoursite-lorem.png)

It's a similar flowchart even for nested pages, for example a page at `yoursite.com/galleries/cats/`:

![site/lorem/ipsum](https://raw.githubusercontent.com/pointyfar/hugo-content-naming-layouts/master/static/yoursite-lorem-ipsum.png)




[^1]: excluding aliases, permalinks, custom urls

-----

## On Hugo's Layout Lookup Order




## See in action

demo: https://cocky-aryabhata-833924.netlify.com/

source: https://github.com/pointyfar/hugo-content-naming-layouts/


## License 

MIT


## Attributions

Made with Hugo. 

Styled with Bulma.

Charted with Mermaid.