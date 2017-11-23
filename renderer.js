
const printer = require('printer');
const util = require('util');
const os = require('os');

const printFromText = (printer, text) => {

  printer.printDirect({
    data: text,
    printer: pritner,
    type: 'RAW',
    success: (jobID) => {
      operationLog.append(`ID: ${jobID} Printing in ${selectedPrinter} \n`);
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
      operationLog.append(`ID: ${jobID} Printing in ${selectedPrinter} \n`);
    },
    error: function (err) {
      operationLog.append('There was an error to complete the operation \n');
    }
  });

};

const printers = printer.getPrinters();
for (let i = 0; i < printers.length; i++) {

  let printer = printers[i];
  document.getElementById('selectPrinter').innerHTML += `<option value="${printer.name}">${printer.name}</option>`;

}

btnPrint = document.getElementById('btnPrint');
btnInfo = document.getElementById('btnInfo');
ulLog = document.getElementById('operationLog');

btnInfo.addEventListener('click', () => {

  alert(`The application is working on node ${process.versions.node},
  Chrome ${process.versions.chrome},
  Electron ${process.versions.electron}
  and Platform ${os.platform()}`);

});

btnPrint.addEventListener('click', function () {

  const platform = os.platform();
  const selectedPrinter = document.getElementById('selectPrinter').value;
  const typePrinting = document.getElementById('selectTypePrinting').value;

  if (selectedPrinter === 'select-a-printer') {

    operationLog.append('WARNING: Your should select a printer \n');
    return;

  }

  if (typePrinting === 'text') {

    const text = document.getElementById('textareaContent').value;
    printFromText(selectedPrinter, text);

  }

  if (typePrinting === 'file') {

    if (platform === 'win32') {

      operationLog.append('WARNING: Is not possible print files from Windows :( \n');
      return;

    } else {

      const filePath = document.getElementById('inputFilePath').value;
      printFromFile(selectedPrinter, filePath);

    }

  }

});
