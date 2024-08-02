import { StaticImageData } from "next/image";

import propertyThumb_1 from "@/assets/images/listing/img_01.jpg";
import propertyThumb_2 from "@/assets/images/listing/img_02.jpg";
import propertyThumb_3 from "@/assets/images/listing/img_03.jpg";
import propertyThumb_4 from "@/assets/images/listing/img_04.jpg";
import propertyThumb_5 from "@/assets/images/listing/img_05.jpg";
import propertyThumb_6 from "@/assets/images/listing/img_06.jpg";

import property2Thumb_1 from "@/assets/images/listing/img_07.jpg";
import property2Thumb_2 from "@/assets/images/listing/img_08.jpg";
import property2Thumb_3 from "@/assets/images/listing/properties/siolim/IRIS Siolim/3bhk Siolim locations-02.png";

import property3Thumb_1 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (3).jpeg";
import property3Thumb_2 from "@/assets/images/listing/properties/candolim/6BHK-CASA-ZAIN/6BHK-CASA-ZAIN (2).jpeg";
import property3Thumb_3 from "@/assets/images/listing/properties/vagator/3BHK-VAGATOR/3BHK-VAGATOR (27).jpg";
import property3Thumb_4 from "@/assets/images/listing/properties/vagator/Casa Royale/5BHK-VAGATOR (34).jpg";

import propertyLargThumb_1 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (10).jpeg";
import propertyLargThumb_2 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (11).jpeg";
import propertyLargThumb_3 from "@/assets/images/listing/properties/candolim/3BHK-CASA-MARY/3BHK-CASA-MARY (11).jpeg";
import propertyLargThumb_4 from "@/assets/images/listing/properties/vagator/3BHK-VAGATOR/3BHK-VAGATOR (1).jpg";
import propertyLargThumb_5 from "@/assets/images/listing/img_large_05.jpg";
import propertyLargThumb_6 from "@/assets/images/listing/img_large_06.jpg";

import propertyIcon_1 from "@/assets/images/icon/icon_04.svg";
import propertyIcon_2 from "@/assets/images/icon/icon_05.svg";
import propertyIcon_3 from "@/assets/images/icon/icon_06.svg";

interface DataType {
   id: number;
   page: string;
   tag: string;
   tag_bg?: string;
   thumb?:StaticImageData
   carousel_thumb: {
      id?:string;
      img: StaticImageData;
      active?: string;
   }[];
   title: string;
   address: string;
   property_info: {
      icon: StaticImageData;
      feature: string;
      total_feature: number;
   }[];
   data_delay_time?: string;
   price: number;
   price_text?: string;
   carousel?: string;
}[];

const property_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_1, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_3 }],
      title: "Blueberry villa",
      address: "Mirpur 10, Stadium dhaka 1208",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1370 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o3 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      price: 3280,
      price_text: "m",
      carousel: "1",
   },
   {
      id: 2,
      page: "home_1",
      tag: "FOR SELL",
      tag_bg: "sale",
      carousel_thumb: [{ img: propertyThumb_2, active: "active" }, { img: propertyThumb_3 }, { img: propertyThumb_1 }],
      title: "White House villa",
      address: "Muza link road, ca, usa",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.1s",
      price: 28100,
      carousel: "2",
   },
   {
      id: 3,
      page: "home_1",
      tag: "FOR SELL",
      tag_bg: "sale",
      carousel_thumb: [{ img: propertyThumb_3, active: "active" }, { img: propertyThumb_2 }, { img: propertyThumb_1 }],
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.2s",
      price: 42500,
      carousel: "3",
   },
   {
      id: 4,
      page: "home_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_4, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_6 }],
      title: "Blueberry villa",
      address: "Mirpur 10, Stadium dhaka 1208",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1370 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o3 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      price: 3280,
      price_text: "m",
      carousel: "4",
   },
   {
      id: 5,
      page: "home_1",
      tag: "FOR SELL",
      tag_bg: "sale",
      carousel_thumb: [{ img: propertyThumb_5, active: "active" }, { img: propertyThumb_4 }, { img: propertyThumb_6 }],
      title: "White House villa",
      address: "Muza link road, ca, usa",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.1s",
      price: 28100,
      carousel: "5",
   },
   {
      id: 6,
      page: "home_1",
      tag: "FOR RENT",
      carousel_thumb: [{ img: propertyThumb_6, active: "active" }, { img: propertyThumb_5 }, { img: propertyThumb_4 }],
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.2s",
      price: 42500,
      price_text: "m",
      carousel: "6",
   },

   // home two
   
   {
      id: 1,
      page: "home_2",
      tag: "FOR RENT",
      carousel_thumb: [{ img: property2Thumb_1, active: "active" }, { img: property2Thumb_2 }, { img: property2Thumb_3 }],
      title: "Blueberry villa.",
      address: "Mirpur 10, Stadium dhaka 1208",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1370 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o3 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      price: 34900.00,
      carousel: "1",
   },
   {
      id: 2,
      page: "home_2",
      tag: "FOR SELL",
      carousel_thumb: [{ img: property2Thumb_2, active: "active" }, { img: property2Thumb_1 }, { img: property2Thumb_2 }],
      title: "White House villa",
      address: "Muza link road, ca, usa",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.1s",
      price: 28100.00,
      carousel: "2",
   },
   {
      id: 3,
      page: "home_2",
      tag: "FOR SELL",
      carousel_thumb: [{ img: property2Thumb_3, active: "active" }, { img: property2Thumb_2 }, { img: property2Thumb_1 }],
      title: "Luxury villa in Dal lake.",
      address: "Mirpur 10, Stadium",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 1270 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o2 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o2 },],
      data_delay_time: "0.2s",
      price: 42500.00,
      carousel: "3",
   },

   // home_3_property_2

   {
      id: 1,
      page: "home_3_property_2",
      tag: "FOR RENT",
      thumb:property3Thumb_1,
      carousel_thumb: [{id:"1", img: propertyLargThumb_1}, {id:"2", img: propertyLargThumb_2 }, {id:"3", img: propertyLargThumb_3 }],
      title: "WP-CM-Candolim",
      address: "Candolim, Goa",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2000 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o3 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
      price: 25000,
      carousel:"03",
   },
   {
      id: 2,
      page: "home_3_property_2",
      tag: "FOR RENT",
      thumb:property3Thumb_2,
      carousel_thumb: [{id:"4", img: propertyLargThumb_4}, {id:"5", img: propertyLargThumb_5 }, {id:"6", img: propertyLargThumb_6 }],
      title: "WP-CZ-Candolim",
      address: "Candolim, Goa",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 4500 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o6 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o4 },],
      price: 25000,
      carousel:"03",
   },
   {
      id: 3,
      page: "home_3_property_2",
      tag: "FOR RENT",
      thumb:property3Thumb_3,
      carousel_thumb: [{id:"1", img: propertyLargThumb_1}, {id:"5", img: propertyLargThumb_5 }, {id:"3", img: propertyLargThumb_3 }, {id:"2", img: propertyLargThumb_2 }],
      title: "3BHK Vagator",
      address: "Vagator, Goa",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 3554 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o3 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
      price: 28500,
      carousel:"04",
   },
   {
      id: 4,
      page: "home_3_property_2",
      tag: "FOR RENT",
      thumb:property3Thumb_4,
      carousel_thumb: [{id:"4", img: propertyLargThumb_4}, {id:"6", img: propertyLargThumb_6 }, {id:"3", img: propertyLargThumb_3 }, {id:"2", img: propertyLargThumb_2 }],
      title: "Casa Royal",
      address: "Vagator, Goa",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 4523 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o5 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o4 },],
      price: 55000,
      carousel:"04",
   },
   {
      id: 5,
      page: "home_3_property_2",
      tag: "FOR SELL",
      thumb:property2Thumb_3,
      carousel_thumb: [{id:"4", img: propertyLargThumb_4}, {id:"5", img: propertyLargThumb_5 }, {id:"6", img: propertyLargThumb_6 }],
      title: "Iris Siolim",
      address: "Siolim, Goa",
      property_info: [{ icon: propertyIcon_1, feature: "sqft", total_feature: 2340 }, { icon: propertyIcon_2, feature: "bed", total_feature: 0o3 }, { icon: propertyIcon_3, feature: "bath", total_feature: 0o3 },],
      price: 22100,
      carousel:"03",
   },

   // home_5
]

export default property_data;