---
layout: page
title: "Speaking"
subtitle: "Keynotes and workshops on human‑centred data, open science, and responsible AI."
permalink: /speaking/
---
<div class="grid auto">
  {%- for talk in site.talks -%}
    {%- include card.html title=talk.title summary=talk.abstract href=talk.url tags=talk.format cta={{'label':talk.cta_label | default:'Invite me to speak','href':talk.cta_href | default:'/contact/'}} -%}
  {%- endfor -%}
</div>
<section>
  <h2>Logistics</h2>
  <ul>
    <li>Formats: keynotes (30–45 min) and workshops (2–3h).</li>
    <li>Available onsite in EU/UK; remote friendly.</li>
    <li>AV needs: projector, mic, HDMI/USB‑C.</li>
  </ul>
  <p><a class="button" href="{{ '/contact/' | relative_url }}">Invite me to speak</a></p>
</section>
