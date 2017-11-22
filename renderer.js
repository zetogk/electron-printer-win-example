btnPrint = document.getElementById('btnPrint');
btnPrint.addEventListener('click', function () {

  var text = document.getElementById('textareaContent').value;
  alert('The content of textarea will be printed');
  alert(text);

});
