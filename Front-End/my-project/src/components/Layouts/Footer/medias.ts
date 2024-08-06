import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram , FaLinkedin } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";

export const medias = [
    {
        id:1,
        logo:AiFillInstagram,
        link:'https://www.instagram.com'

    },
    {
        id:2,
        logo:FaTelegram,
        link:'https://www.telegram.com'
    },
    {
        id:3,
        logo:FaLinkedin,
        link:'https://www.linkedin.com'
    },
    {
        id:4,
        logo:FaPhoneSquareAlt,
        link:'tel:+989108841417'
    }
]

export const quickLinks = [
    { id: 1, name: 'خانه', path: '/' },
    { id: 2, name: 'درباره ما', path: '/about' },
    { id: 3, name: 'تماس با ما ', path: '/contact' },
    { id: 4, name: 'محصولات', path: '/shop' }
  ];