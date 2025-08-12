---
layout: page
title: "Home"
---
<section class="hero">
  <h1><span class="underline">I help organisations turn complex data into humane, legible decisions.</span></h1>
  <p class="lede">Senior researcher in human‑centred systems & data — I study and design how people interact with data and technology.</p>
  <p><a class="button" href="{{ '/contact/' | relative_url }}">Book me to speak</a></p>
</section>
<section class="grid auto">
  {%- assign featured_talks = site.talks | slice: 0, 2 -%}
  {%- for t in featured_talks -%}
    {%- include card.html title=t.title summary=t.abstract href=t.url tags=t.format cta={{'label':'Invite me','href':'/contact/'}} -%}
  {%- endfor -%}
</section>
<section class="grid auto">
  {%- assign featured_projects = site.projects | slice: 0, 2 -%}
  {%- for p in featured_projects -%}
    {%- include card.html title=p.title summary=p.summary href=p.url tags=p.tags -%}
  {%- endfor -%}
</section>
