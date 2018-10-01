(function() {
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var input = document.getElementById('search-input');
  var logo = document.getElementById('navLogo');

  if (w <= 576) {
    input.addEventListener('focus', function() {
      logo.classList.add('hide');
    });
    input.addEventListener('blur', function() {
      logo.classList.remove('hide');
    });
  }
  if (w >= 576) {
    $('.remove')
      .removeClass('collapse')
      .removeAttr('id');
  }
})();
