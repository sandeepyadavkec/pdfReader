//import modules
const fs = require("fs");
const pdf = require("pdf-parse");

exports.PdfHelper = class PdfHelper {
  async readPDF(pdfFile) {
    let dataBuffer = fs.readFileSync(pdfFile);
    let options = {
      version: "v2.0.550",
    };

    await pdf(dataBuffer, options).then(function (data) {
      fs.writeFileSync(`${pdfFile}.txt`, data.text, {
        encoding: "utf8",
        flag: "w",
      });

      return data.text;
    });

    pdf(dataBuffer).then(function (data) {
      // number of pages
      console.log("Total pages: " + data.numpages);
    });
  }
};
