---
title: "Single vs List"
---

Or what to name your content files: `foo.md` vs `index.md` vs `_index.md`.

{{< toc >}}


## Top level page (`example.com/lorem/`)

{{<mermaid>}}
graph TD
    A("example.com/lorem/") --> C
    
    C{"Does this page <br/>have child pages <br/> (ie /lorem/ipsum/)?<br/>"}
    C --- D[Yes]
    C --- E[No]
        E --> F

        F{"Does this page <br/> have Page Resources <br/> (ie lorem/photo.jpg)?"}
        F ---G
        F ---H

            G["No"] --> indexmd
            G["No"] --> ipsummd

            H["Yes"] --> indexmd

            indexmd("content/lorem/index.md")
            ipsummd("content/lorem.md")

            ipsummd -.- slayout
            indexmd -.- slayout

            slayout["Default layout file used"]
            slayout --> single("single.html")

    D --> lindex("content/lorem/_index.md")

          lindex -.- llayout["Default layout file used"]
          llayout --> list("list.html")


    click indexmd "/circle/" "Example"
    click ipsummd "/square/" "Example"
    click lindex "/clouds/" "Example"

    style lindex stroke-width:4px, stroke:#91C7B1;
    style indexmd stroke-width:4px, stroke:#91C7B1;
    style ipsummd stroke-width:4px, stroke:#91C7B1;
    style A stroke-width:4px, stroke:#6153CC;
    style single stroke-width:4px, stroke:#336699;
    style list stroke-width:4px, stroke:#336699;


{{</mermaid>}}

---

## Page nested one level (`example.com/lorem/ipsum/`)

This assumes that `content/lorem/` is a list page.

---


{{<mermaid>}}
graph TD
    A("example.com/lorem/ipsum/") --> C
    
    C{"Does this page <br/>have child pages <br/> (ie /lorem/ipsum/dolor/)?<br/>"}
    C --- D[Yes]
    C --- E[No]
        E --> F

        F{"Does this page have <br> Page Resources <br/> (ie ipsum/photo.jpg)?"}
        F ---G
        F ---H

            G["No"] --> indexmd
            G["No"] --> ipsummd

            H["Yes"] --> indexmd

            indexmd("content/lorem/ipsum/index.md")
            ipsummd("content/lorem/ipsum.md")

    ipsummd -.- slayout
    indexmd -.- slayout

    slayout["Default layout file used"]
    slayout --> single("single.html")


    D --> lindex("content/lorem/ipsum/_index.md")

    lindex -.- llayout["Default layout file used"]
    llayout --> list("list.html")

    click indexmd "/colors/yellow/" "Example"
    click ipsummd "/colors/green/" "Example"
    click lindex "/colors/" "Example"

    style A stroke-width:4px, stroke:#6153CC;
    style indexmd stroke-width:4px, stroke:#91C7B1;
    style ipsummd stroke-width:4px, stroke:#91C7B1;
    style lindex stroke-width:4px, stroke:#91C7B1;
    style single stroke-width:4px, stroke:#336699;
    style list stroke-width:4px, stroke:#336699;

{{</mermaid>}}

---
