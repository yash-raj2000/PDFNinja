import { BiMerge } from "react-icons/bi";
import { RiSplitCellsHorizontal } from "react-icons/ri";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { FaRegFileWord } from "react-icons/fa";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa6";
import { BiSolidFileJpg } from "react-icons/bi";
import { FaFileSignature } from "react-icons/fa6";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { RxRotateCounterClockwise } from "react-icons/rx";
import { BiSolidFileHtml } from "react-icons/bi";
import { AiFillUnlock } from "react-icons/ai";
import { AiOutlineFileProtect } from "react-icons/ai";
import { LuFileScan } from "react-icons/lu";
import { MdCompare } from "react-icons/md";
import { PiListNumbersFill } from "react-icons/pi";


const Tools = () => {
  return (
    <div className="tools-container-section">
        <div className="tools-container">

            <div className="tool">
              <BiMerge className="tool-icon" size={"4rem"}/>
              <h3 className="tool-h3">Merge PDF</h3>
              <p className="tool-p">Combine PDFs in the order you want with the easiest PDF merger available.</p>
            </div>

            <div className="tool">
            <RiSplitCellsHorizontal  className="tool-icon" size={"4rem"}/>
            <h3 className="tool-h3">Split PDF</h3>
              <p className="tool-p">Separate one page or a whole set for easy conversion into independent PDF files.</p>
            </div>

            <div className="tool">
            <FaCompressArrowsAlt className="tool-icon" color="lightGreen" size={"3.5rem"}/>
            <h3 className="tool-h3">Compress PDF</h3>
              <p className="tool-p">Reduce file size while optimizing for maximal PDF quality.</p>
            </div>

            <div className="tool">
            <FaFileWord  className="tool-icon" color="blue" size={"3.5rem"} style={{marginTop:"25px"}}/>
            <h3 className="tool-h3">PDF to Word</h3>
              <p className="tool-p">Easily convert your PDF files into easy to edit DOC and DOCX documents. The converted WORD document is almost 100% accurate. .</p>
            </div>

            <div className="tool">
            <PiMicrosoftPowerpointLogoFill className="tool-icon" size={"4rem"}/>
            <h3 className="tool-h3">PDF to PowerPoint</h3>
              <p className="tool-p">Turn your PDF files into easy to edit PPT and PPTX slideshows.</p>
            </div>

            <div className="tool">
            <PiMicrosoftExcelLogoFill  className="tool-icon" color="lightGreen"  size={"4rem"}/>
            <h3 className="tool-h3">PDF to Excel</h3>
              <p className="tool-p">Pull data straight from PDFs into Excel spreadsheets in a few short seconds.</p>
            </div>

            <div className="tool">
            <FaRegFileWord  className="tool-icon" color="lightBlue" size={"4rem"}/>
            <h3 className="tool-h3">Word to PDF</h3>
              <p className="tool-p">Make DOC and DOCX files easy to read by converting them to PDF.</p>
            </div>

            <div className="tool">
            <PiMicrosoftPowerpointLogo  className="tool-icon" size={"4rem"}/>
            <h3 className="tool-h3">Powerpoint to PDF</h3>
              <p className="tool-p">Make PPY and PPTX slideshows easy to view by converting them to PDF </p>
            </div>

            <div className="tool">
            <SiMicrosoftexcel  className="tool-icon" color="lightGreen" size={"4rem"}/>
            <h3 className="tool-h3">Excel to PDF</h3>
              <p className="tool-p">Make EXCEL spreadsheets easy to read by converting them to PDF.</p>
            </div>

            <div className="tool">
            <FaRegFilePdf  className="tool-icon" color="purple" style={{marginTop:"25px", marginLeft:"10px"}} size={"4rem"}/>
            <h3 className="tool-h3">Edit PDF</h3>
              <p className="tool-p">Add text, images, shapes or freehand annotations to a PDF document. Edit the size, font and color of the added content.</p>
            </div>

            <div className="tool">
            <BiSolidFileJpg  className="tool-icon" color="gray" size={"4rem"}/>
            <h3 className="tool-h3">PDF to JPG</h3>
              <p className="tool-p">Convert each PDF page into a JPG or extract all images contained in a PDF.</p>
            </div>

            <div className="tool">
            <FaFileSignature  className="tool-icon" color="#BF6451" size={"4rem"}/>
            <h3 className="tool-h3">Sign PDF</h3>
              <p className="tool-p">Sign yourself or request electronic signatures from others.</p>
            </div>

            <div className="tool">
            <MdOutlineBrandingWatermark  className="tool-icon" color="#CBBB6D" size={"4rem"}/>
            <h3 className="tool-h3">Watermark</h3>
              <p className="tool-p">Stamp an image or text over your PDF in seconds.</p>
            </div>

            <div className="tool">
            <RxRotateCounterClockwise  className="tool-icon"  color="purple" size={"4rem"}/>
            <h3 className="tool-h3">Rotate PDF</h3>
              <p className="tool-p">Rotate your PDFs the way you need them.</p>
            </div>

            <div className="tool">
            <BiSolidFileHtml  className="tool-icon" color="#6DC0CB" size={"4rem"}/>
            <h3 className="tool-h3">HTML to PDF</h3>
              <p className="tool-p">Just copy paste the URL of the webpages and convert in HTML to PDF.</p>
            </div>

            <div className="tool">
            <AiFillUnlock  className="tool-icon" color="#406A85" size={"4rem"}/>
            <h3 className="tool-h3">Unlock PDF</h3>
              <p className="tool-p">Remove PDF password security, giving you the freedom to use your PDFs as you want.</p>
            </div>

            <div className="tool">
            <AiOutlineFileProtect  className="tool-icon" color="#1547AE" size={"4rem"}/>
            <h3 className="tool-h3">Protect PDF</h3>
              <p className="tool-p">Protect PDF files with a password. Encrypt PDF documents to prevent unauthorized access.</p>
            </div>

            <div className="tool">
            <LuFileScan className="tool-icon" color="#9432CE" size={"4rem"}/>
            <h3 className="tool-h3">Scan to PDF</h3>
              <p className="tool-p">Capture documents scans from your mobile device and send them instantly to your browser.</p>
            </div>

            <div className="tool">
            <MdCompare  className="tool-icon" color="#B712A8" size={"4rem"}/>
            <h3 className="tool-h3">Compare PDF</h3>
              <p className="tool-p">Sow a side-by-side document comparison and easily spot changes between different file versions. </p>
            </div>

            <div className="tool">
            <PiListNumbersFill className="tool-icon" color="#CD1F48" size={"4rem"}/>
            <h3 className="tool-h3">Page Numbers</h3>
              <p className="tool-p">Add page numbers into PDFs with ease. Choose your positions, dimensions, typography.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Tools