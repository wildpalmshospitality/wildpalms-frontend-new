import { StaticImageData } from "next/image";

import feedbackThumb_1 from "@/assets/images/media/img_01.jpg";
import feedbackThumb_2 from "@/assets/images/media/anmol.jpeg";
import feedbackThumb_3 from "@/assets/images/media/img_03.jpg";

import feedback3Thumb_1 from "@/assets/images/media/sparsh.jpeg";
import feedback3Thumb_2 from "@/assets/images/media/utkarsh.jpeg";
import feedback3Thumb_3 from "@/assets/images/media/Niharika.jpeg";

import quoteIcon from "@/assets/images/icon/icon_29.svg";

interface DataType {
   id: number;
   page: string;
   desc: string;
   title: string;
   country: string;
   thumb: StaticImageData;
   quote_icon: StaticImageData;
}

const feedback_data: DataType[] = [
   {
      id: 1,
      page: "home_3",
      desc: "Wildpalms Hospitality provided an exceptional experience during my stay in North Goa. The villa's design was charming and the private pool added a special touch. The staff's dedication to service made my stay extremely comfortable and memorable. This location is a hidden gem, offering tranquility and convenience. I can’t wait to return!",
      title: "Sparsh",
      country: "Sydney, Australia",
      thumb: feedback3Thumb_1,
      quote_icon: quoteIcon,
   },
   {
      id: 2,
      page: "home_3",
      desc: "I had an incredible stay at Wildpalms Hospitality in North Goa. The villa's Indo-Portuguese architecture was stunning, and the private pool was a perfect retreat. The staff was attentive and made sure every need was met. It was a truly luxurious and serene escape, ideal for anyone looking to unwind. Highly recommended!",
      title: "Utkarsh Choubey",
      country: "Bangalore, India",
      thumb: feedback3Thumb_2,
      quote_icon: quoteIcon,
   },
   {
      id: 3,
      page: "home_3",
      desc: "I recently enjoyed a fantastic stay at Wildpalms Hospitality in North Goa. The experience was nothing short of exceptional.  Special thanks to our hosts, Ashish and Nikhil, who went above and beyond to ensure our comfort. Located conveniently near beaches and markets, yet offering a serene escape, Wildpalms Hospitality is a gem. I highly recommend it for a luxurious and peaceful getaway!",
      title: "Niharika",
      country: "Jaipur, India",
      thumb: feedback3Thumb_3,
      quote_icon: quoteIcon,
   },
   {
      id: 4,
      page: "home_3",
      desc: "Staying at Wildpalms Hospitality was a fantastic experience. The villa’s Indo-Portuguese design immediately caught my eye, and the private pool was a delightful addition. The staff's attention to detail ensured a comfortable stay. The serene environment coupled with its proximity to beaches and markets made it an ideal retreat. Highly recommended for those seeking luxury and relaxation!",
      title: "Amol Sachdeva.",
      country: "Jaipur, India",
      thumb: feedbackThumb_2,
      quote_icon: quoteIcon,
   },

   // home_5

   {
      id: 1,
      page: "home_5",
      desc: "I loved my stay at Wildpalms Hospitality. The villa’s Indo-Portuguese design and private pool were wonderful. The staff’s attentiveness and the hosts' hospitality ensured a memorable experience. Definitely recommended!",
      title: "Utkarsh Choubey,",
      country: "Bangalore, India",
      thumb: feedbackThumb_1,
      quote_icon: quoteIcon,
   },
   {
      id: 2,
      page: "home_5",
      desc: "Found our dream home. Great Business with them. simplified tasks, and saved time. Thank You",
      title: "Jannat Ferdu,",
      country: "Claifornia",
      thumb: feedbackThumb_2,
      quote_icon: quoteIcon,
   },
   {
      id: 3,
      page: "home_5",
      desc: "Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!",
      title: "Jubayer Hasan,",
      country: "Claifornia",
      thumb: feedbackThumb_3,
      quote_icon: quoteIcon,
   },
]

export default feedback_data;