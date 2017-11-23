
const printer = require('printer');
const util = require('util');
const os = require('os');

const printFromText = (printer, text) => {

  printer.printDirect({
    data: text,
    printer: pritner,
    type: 'RAW',
    success: (jobID) => {
      operationLog.append('Printing in '+ selectedPrinter +' \n');
    },
    error: (err) => {
      operationLog.append('There was an error to complete the operation \n');
    }
  });

};

const printFromFile = (printer, file) => {

  printer.printFile({
    filename: file,
    printer: printer,
    success: function (jobID) {
      operationLog.append('Printing in '+ selectedPrinter +' \n');
    },
    error: function (err) {
      operationLog.append('There was an error to complete the operation \n');
    }
  });

};

const printers = printer.getPrinters();
for (let i = 0; i < printers.length; i++) {

  let printer = printers[i];
  document.getElementById('selectPrinter').innerHTML += '<option value="' + printer.name + '">' + printer.name + '</option>'

}

btnPrintWin = document.getElementById('btnPrintWin');
btnPrintMac = document.getElementById('btnPrintMac');
btnInfo = document.getElementById('btnInfo');
ulLog = document.getElementById('operationLog');

btnInfo.addEventListener('click', () => {

  alert(`The application is working on node ${process.versions.node},
  Chrome ${process.versions.chrome},
  Electron ${process.versions.electron}
  and Platform ${os.platform()}`);

});


btnPrintWin.addEventListener('click', function () {

  var text = document.getElementById('textareaContent').value;
  var selectedPrinter = document.getElementById('selectPrinter').value;
  var typePrinting = document.getElementById('selectTypePrinting').value;

  if (selectedPrinter === 'select-a-printer') {

    operationLog.append('Your should select a printer \n');

  } else {

    if (typePrinting === 'text') {

      printFromText(selectedPrinter, text);

    } else {

      operationLog.append('Your should select a printer \n');
      alert('Is not possible print from files to Windows');

    }

  }

});

btnPrintMac.addEventListener('click', function () {

  var text = document.getElementById('textareaContent').value;
  var typePrinting = document.getElementById('selectTypePrinting').value;
  var selectedPrinter = document.getElementById('selectPrinter').value;
  var filePath = document.getElementById('inputFilePath').value;

  if (selectedPrinter === 'select-a-printer') {

    operationLog.append('Your should select a printer \n');

  } else {

    if (typePrinting === 'text') {

      printFromText(selectedPrinter, text);

    } else {

      printFromFile(selectedPrinter, filePath);

    }

  }

});
