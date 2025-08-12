---
layout: page
title: "Research"
subtitle: "Selected projects in human‑data interaction, participatory methods, and open science."
permalink: /research/
---
<div data-filter-tags class="grid" style="margin-bottom: var(--size-6)">
  <div role="group" aria-label="Filter by tag" class="grid" style="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));">
    {% assign tags = "HCI,Open Science,Data Ethics,Participatory Design" | split: "," %}
    {% for tag in tags %}
      <button class="button" data-tag="{{ tag | strip }}" aria-pressed="false">{{ tag | strip }}</button>
    {% endfor %}
  </div>
</div>
<div class="grid auto">
  {%- for p in site.projects -%}
    <div data-tags="{{ p.tags | join: ',' }}">
      {%- include card.html title=p.title summary=p.summary href=p.url tags=p.tags -%}
    </div>
  {%- endfor -%}
</div>
