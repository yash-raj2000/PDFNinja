
const Achievement = () => {
  return (
    <div className="achievement-container">
      <div className="achievement-heading">
        <h1>The PDF software trusted by millions of users</h1>
        <p className="achievement-p" style={{fontSize:"1.2rem"}}>
          PDFNinja is your number one web app for editing PDF with ease. Enjoy
          all the tools you need to work efficiently with your digital documents
          while keeping your data 100% safe and secure.
        </p>
        <div className="logo-container-achievement">
          <div className="logo"><img src="https://www.ilovepdf.com/img/logos/pdf-association-logo.svg" alt="Logo1"/></div>
          <div className="logo"><img src="https://www.ilovepdf.com/img/logos/iso-logo.svg" alt="logo2" /></div>
          <div className="logo"><img src="https://www.ilovepdf.com/img/logos/ssl-encrypted-logo.svg" alt="logo3" /></div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
