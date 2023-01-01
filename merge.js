const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePDF= async (p1, p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2);  

  // to give distinct file name
  let d= new Date().getTime();
  //save under given name and reset the internal document await to first add p1 and p2 in uploads
  await merger.save(`public/Merged${d}.pdf`);
  return d

}

 module.exports= {mergePDF};

