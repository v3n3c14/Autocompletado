$(function () {

  $('.script').each(function () {
    eval($(this).text());
  })

  var setText = function ($textarea, text) {
    var range, textarea = $textarea.get(0);
    textarea.focus();
    if (typeof textarea.selectionStart === 'number') {
      textarea.value = text;
      textarea.selectionStart = textarea.selectionEnd = text.length;
      return;
    }
    range = textarea.createTextRange();
    range.text = text
    range.select();
  }

  var $textarea = $('#textarea2');
  var textarea = $textarea.get(0);
  $textarea.focus();
  if (typeof textarea.selectionStart === 'number') {
    textarea.selectionStart = textarea.selectionEnd = $textarea.val().length;
  } else {
    var range = textarea.createTextRange();
    range.select();
  }
  $textarea.keyup();


var elements = ['span', 'div', 'h1', 'h2', 'h3'];
$('#textarea2').textcomplete([
    { // html
       match: /<(\w*)$/,
        search: function (term, callback) {
            callback($.map(elements, function (element) {
                return element.indexOf(term) === 0 ? element : null;
            }));
        },
        index: 1,
        replace: function (element) {
            return ['<' + element + '>', '</' + element + '>'];
        }
    }
]);

});

