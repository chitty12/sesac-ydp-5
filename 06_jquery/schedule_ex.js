let td;

$('td').click(function () {
  const date = $(this).text();

  $('#date').val(`2023.07.${date}`);
  $('#subs').select();

  return (td = $(this));
});

$('.submit').click(function (e) {
  e.preventDefault();

  const subs = $('#subs').val().trim();
  td.append(`<li>${subs}</li>`);
  $('li').css({ listStyleType: 'none' });

  $('#subs').val('');
  $('#date').val('');
});
