$(function() {
  //讀取檔案
  $.ajax({url:'data.json', dataType: 'json'})
  .done(function(data) {
    $(data).each(function() {
      if (this.crowded === 'yes') {
        var idName = '#' + this.id;
        $(idName).find('.check').addClass('crowded');
      };
    });
  });
  //點擊之後顯示剩餘空位狀況
  $('.check').on('click', function() {
    if ($(this).hasClass('crowded')) {
      $(this).text('剩餘空位極少').addClass('red');
    } else {
      $(this).text('尚有不少空位').addClass('green');
    };
  });
});
