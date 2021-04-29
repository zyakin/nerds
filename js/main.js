$(document).ready(function () {
  $('nav.header__nav a').each(function () {
    if (this.href == location.href) {
      $(this).parent().addClass('active-page');
      $(this).removeAttr('href');
    }
  });
});