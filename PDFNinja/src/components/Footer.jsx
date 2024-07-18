import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer>
        <div className="download-store">
            <a href=""><img src="https://www.ilovepdf.com/img/logos/google_play.svg" alt="" /></a>
            <a href=""><img src="https://www.ilovepdf.com/img/logos/app_store.svg" alt="" /></a>
        </div>
        <div className="social-links">
        <p style={{lineHeight:"10px"}}>© PDFNinja 2024 ® - Your PDF Editor</p>
        <div className="icons">
            <XIcon style={{margin:"2px"}}/>
            <FacebookIcon style={{margin:"2px"}}/>
            <LinkedInIcon style={{margin:"2px"}}/>
            <InstagramIcon style={{margin:"2px"}}/>
            </div>
            </div>
            </footer>
  )
}
export default Footer;