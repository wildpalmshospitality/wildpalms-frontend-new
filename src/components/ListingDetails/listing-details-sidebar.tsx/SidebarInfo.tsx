import Image from "next/image"
import Link from "next/link"

import infoAvatar from "@/assets/images/agent/img_06.jpg"

const SidebarInfo = () => {
   return (
      <>
         <Image src={infoAvatar} alt=""
            className="lazy-img rounded-circle ms-auto me-auto mt-3 avatar" />
         <div className="text-center mt-25">
            <h6 className="name">Nikhil Gupta</h6>
            <p className="fs-16">Owner, Wildpalms Hospitality</p>
            <ul className="style-none d-flex align-items-center justify-content-center social-icon">
               <li><Link href="https://www.facebook.com/profile.php?id=100007195029825&mibextid=LQQJ4d"><i className="fa-brands fa-facebook-f"></i></Link></li>
               <li><Link href="https://x.com/nikhil191199?s=11&t=HAu-T7CCBULCT00M6mAoMw"><i className="fa-brands fa-twitter"></i></Link></li>
               <li><Link href="https://www.instagram.com/nikhilgupta.eth?igsh=cmtiYmNoZjhlcHV5"><i className="fa-brands fa-instagram"></i></Link></li>
               <li><Link href="https://www.linkedin.com/in/nikhil-gupta-ba2672102?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa-brands fa-linkedin"></i></Link></li>
            </ul>
         </div>
         <div className="divider-line mt-40 mb-45 pt-20">
            <ul className="style-none">
               <li>Location: <span>Goa, India</span></li>
               <li>Email: <span><Link href="mailto:akabirr770@gmail.com">Nikhil191199@gmail.com</Link></span>
               </li>
               <li>Phone: <span><Link href="tel:+12347687565">+91 87578 50115</Link></span></li>
            </ul>
         </div>
         <Link href="/contact" className="btn-nine text-uppercase rounded-3 w-100 mb-10">CONTACT AGENT</Link>
      </>
   )
}

export default SidebarInfo
