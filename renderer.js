
const printer = require('printer');
const util = require('util');
const os = require('os');

const printers = printer.getPrinters();
for (let i = 0; i < printers.length; i++) {

  let printer = printers[i];
  document.getElementById('selectPrinter').innerHTML += '<option value="' + printer.name + '">' + printer.name + '</option>'

}

btnPrint = document.getElementById('btnPrint');
btnInfo = document.getElementById('btnInfo');

btnInfo.addEventListener('click', () => {

  alert(`The application is working on node ${process.versions.node},
  Chrome ${process.versions.chrome},
  Electron ${process.versions.electron}
  and Platform ${os.platform()}`);

});


btnPrint.addEventListener('click', function () {

  var text = document.getElementById('textareaContent').value;
  var selectedPrinter = document.getElementById('selectPrinter').value;

  if (selectedPrinter === 'select-a-printer') {

    alert('You should select a printer');

  } else {

    alert('The next text will be printed by ' + selectedPrinter);
    alert(text);

    printer.printDirect({
      data: text,
      printer: selectedPrinter,
      type: 'RAW',
      success: function (jobID) {
        console.log("sent to printer with ID: " + jobID);
        alert('Printing');
      },
      error: function (err) {
        console.log(err);
        alert('There was an error to complete the operation');
      }
    });

  }

});
