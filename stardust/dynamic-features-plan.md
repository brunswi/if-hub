# Dynamic features plan — if-hub.de

| phase | deliverable | authoring contract | verification | owner decision | effort |
|---|---|---|---|---|---|
| capture (done) | hub + login content as authored documents, media + fonts self-hosted | blocks per archetype | gate content-diff 0 | none | in recreation |
| interactive | terms dialog (runtime JS, localStorage acceptance), header menus + mobile drawer, search overlay | header nav document; dialog copy in a fragment or block | header contract compare; parity.json modal-open check | none | S |
| search | query-index (helix-query.yaml) over the migrated pages; overlay results | page metadata title/description | search-query check | none | S |
| media | hero video autoplay muted loop | hero block video link | parity media-plays | none | XS |
| forms/auth | SSO link kept to source OIDC endpoint (interim) | link in login block | link check | access control for new host | owner |
| tags | martech scaffold, everything disabled (scripts/martech.js) | martech-contract.json | dynamics-check martech feature | enable parts | owner |
