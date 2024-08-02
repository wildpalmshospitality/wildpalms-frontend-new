import Image from "next/image"
import Link from "next/link"

import titleShape from "@/assets/images/shape/title_shape_06.svg";
import Count from "@/components/common/Count";

interface ContentType {
   sub_title: string;
   desc_1: JSX.Element;
   title_1: string;
   title_2: string;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
}

const feature_content: ContentType = {
   sub_title: "About us",
   desc_1: (<>Wildpalms Hospitality was founded by Ashish Thakwani and Nikhil Gupta, who met through mutual friends. Identifying the unique challenges faced by backpackers in Goa, they launched Wildpalms Hospitality in 2022 with a single property. Today, our portfolio has expanded to 30 properties, consistently delivering exceptional hospitality experiences.</>),
   title_1: "Who we are?",
   title_2: "Our Mission",
   desc_2: (<>We are a team of dedicated professionals committed to revolutionizing the hospitality industry. Our founders, Ashish Thakwani and Nikhil Gupta, are driven by their vision to provide top-notch accommodations for a diverse clientele, from backpackers to affluent travelers, with a range of luxury properties designed to meet various needs and preferences.</>),
   desc_3: (<>Our mission is to offer seamless and enjoyable hospitality experiences. We aim to provide comfortable, affordable, and accessible accommodations, ensuring that every guest enjoys a memorable stay. Additionally, we offer serene and luxurious stays for affluent travelers seeking peace and comfort.</>),
}

const { sub_title, desc_1, title_1, title_2, desc_2, desc_3 } = feature_content;

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-two mt-150 xl-mt-100">
         <div className="container">
            <div className="row gx-xl-5">
               <div className="col-lg-6 wow fadeInLeft">
                  <div className="me-xxl-4">
                     <div className="title-one mb-60 lg-mb-40">
                        <div className="upper-title">{sub_title}</div>
                        <h3>Secure your <span>family&apos;s<Image src={titleShape} alt="" className="lazy-img" /></span> Dream home.</h3>
                        <p className="fs-22">{desc_1}</p>
                     </div>
                     <Link href="/contact" className="btn-two">Contact Us</Link>
                     <div className="counter-wrapper border-top pt-40 md-pt-10 mt-65 md-mt-40">
                        <div className="row">
                           <div className="col-xxl-6 col-sm-5">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark"><span className="counter"><Count number={1.2} /></span>%</div>
                                 <span>Low interest rate</span>
                              </div>
                           </div>
                           <div className="col-xxl-6 col-sm-7">
                              <div className="counter-block-one mt-20">
                                 <div className="main-count fw-500 color-dark">$<span className="counter"><Count number={1.3} /></span>b+</div>
                                 <span>Cumulative trading volume</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="col-lg-6 wow fadeInRight">
                  <div className="block-two md-mt-40">
                     <div className="bg-wrapper">
                        <h5>{title_1}</h5>
                        <p className="fs-22 lh-lg mt-20">{desc_2}</p>
                        <h5 className="top-line">{title_2} </h5>
                        <p className="fs-22 lh-lg mt-20">{desc_3}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
