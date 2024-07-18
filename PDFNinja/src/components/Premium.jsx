import logo from '../Images/Notes.png'

const Premium = () => {
  return (
    <div className="premium-container">
      <div className="premium-text">
        <h1 className="premium-h1 color">Unlock More Features with Premium</h1>

        <p className="premium-p color">
          Complete projects faster with batch file processing, convert scanned
          documents with OCR and e-sign your business agreements.
        </p>

        <button className='btn-premium'>Get Premium</button>
      </div>
      <div className="premium-ad-img">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Premium;
