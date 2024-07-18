

const Solutions = () => {
  return (
    <div className="solutions-container">
      <div className="solutions-heading">
        <h1>Explore More with PDFNinja Desktop, Mobile, and Ninja-IMG</h1>
      </div>
      <div className="items-container">
        <div className="item">
          <h2 className="item-h2">PDFNinja Desktop</h2>
          <p className="item-p">
            Download the <span className="item-span"><a href="PdfNinjaDesktop/download" style={{color:"red"}}>PDFNinja Desktop</a></span> App to work with your favorite PDF
            tools on your Mac or Windows PC. Get a lightweight PDF app that
            helps you process heavy PDF tasks offline in seconds.
          </p>
        </div>
        <div className="item">
          <h2 className="item-h2">PDFNinja Mobile</h2>
          <p className="item-p">
            Get the <span className="item-span"><a href="/PdfNinjaMobile/download" style={{color:"red"}}>PDFNinja Mobile</a></span> App to manage documents remotely or on the
            move. Turn your Android or iPhone device into a PDF Editor & Scanner
            to annotate, sign, and share documents with ease.
          </p>
        </div>
        <div className="item">
          <h2 className="item-h2">PDFNinjaIMG</h2>
          <p className="item-p">
            <span className="item-span"><a href="/Ninja-Img.com" style={{color:"red"}}>PDFNinjaIMG</a></span> is the web app that helps you modify images in bulk for
            free. Crop, resize, compress, convert, and more. All the tools you
            need to enhance your images in just a few clicks..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
