
const printer = require('printer');
const util = require('util');
const os = require('os');
const fs = require('fs');

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

  let text = document.getElementById('textareaContent').value;
  let selectedPrinter = document.getElementById('selectPrinter').value;

  if (selectedPrinter === 'select-a-printer') {

    alert('You should select a printer');

  } else {

    const dataEmf = fs.readFileSync('./print.emf');
    
    console.log(dataEmf);

    printer.printDirect({
      data: dataEmf,
      type: 'EMF',
      success: function(id) {
          console.log('printed with id ' + id);
      },
      error: function(err) {
          console.error('error on printing: ' + err);
      }
    });

  }

});
