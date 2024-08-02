interface DataType {
   id: number;
   page: string
   question: string;
   answer: string;
   showAnswer: boolean;
}

const faq_data:DataType[] = [
   {
      id: 1,
      page: "home_2_faq_1",
      question: "Advance Search",
      answer: "It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_2_faq_1",
      question: "Exert Agents for any help",
      answer: "It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_2_faq_1",
      question: "Protected payments, every time",
      answer: "It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.",
      showAnswer: false,
   },

   // home_2_faq_2

   {
      id: 1,
      page: "home_2_faq_2",
      question: "How does the free trial work?",
      answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_2_faq_2",
      question: "How find different criteria in your process?",
      answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_2_faq_2",
      question: "What do you look for in a founding team?",
      answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.",
      showAnswer: false,
   },
   {
      id: 4,
      page: "home_2_faq_2",
      question: "Do you recommend Pay as you go or Pre pay?",
      answer: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute in voluptate nulla pariatur.",
      showAnswer: false,
   },

   // home_six
   
   {
      id: 1,
      page: "home_six",
      question: "About Us",
      answer: "Wildpalms Hospitality was founded by Ashish Thakwani and Nikhil Gupta, who met through mutual friends. Recognizing the unique challenges faced by backpackers in Goa, they launched Wildpalms Hospitality in 2022 with a single property. Today, our portfolio has expanded to 30 properties, consistently delivering exceptional hospitality experiences.",
      showAnswer: false,
   },
   {
      id: 2,
      page: "home_six",
      question: "Who we are?",
      answer: "We provide top-notch accommodations for a diverse clientele, from backpackers to affluent travelers, with a range of luxury properties designed to meet various needs and preferences.",
      showAnswer: false,
   },
   {
      id: 3,
      page: "home_six",
      question: "Our Mission",
      answer: "Our mission is to offer seamless and enjoyable hospitality experiences. We aim to provide comfortable, affordable, and accessible accommodations, ensuring that every guest enjoys a memorable stay. Additionally, we offer serene and luxurious stays for affluent travelers seeking peace and comfort.",
      showAnswer: false,
   },
];

export default faq_data;