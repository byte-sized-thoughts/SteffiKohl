document.addEventListener('DOMContentLoaded', function() {
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  const filterWrap = document.querySelector('[data-filter-tags]');
  if (filterWrap) {
    const buttons = filterWrap.querySelectorAll('button[data-tag]');
    const cards = document.querySelectorAll('[data-tags]');
    const apply = () => {
      const active = [...buttons].filter(x => x.getAttribute('aria-pressed') === 'true').map(x => x.getAttribute('data-tag'));
      window.history.replaceState({}, '', active.length ? `?tags=${encodeURIComponent(active.join(','))}` : window.location.pathname);
      cards.forEach(c => {
        const ct = (c.getAttribute('data-tags') || "").split(',').map(s => s.trim());
        const show = active.length === 0 || active.some(t => ct.includes(t));
        c.style.display = show ? "" : "none";
      });
    };
    buttons.forEach(b => b.addEventListener('click', () => {
      b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
      apply();
    }));
  }
});
