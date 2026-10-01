// Catalogue filter: show only products tagged with the selected category
(function () {
  var filter = document.querySelector('[data-filter]');
  if (!filter) return;
  filter.hidden = false;

  var buttons = filter.querySelectorAll('[data-filter-value]');
  var items = document.querySelectorAll('[data-tags]');

  function apply(value) {
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.filterValue === value));
    });
    items.forEach(function (item) {
      var tags = item.dataset.tags.split(',');
      item.hidden = value !== '' && tags.indexOf(value) === -1;
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      apply(button.dataset.filterValue);
    });
  });
})();
