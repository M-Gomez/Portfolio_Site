import { BiHomeAlt2 } from "react-icons/bi";
import {FaBookBible, FaBookJournalWhills, FaBookOpenReader, FaChalkboardUser} from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa6";


export const routes = [
    {
        title: "Home",
        href: "/",
        Icon: BiHomeAlt2,
    },
    {
        title: "Portfolio",
        href: "/portfolio/software",
        Icon: FaChalkboardUser,
    },
    {
        title: "Case Studies",
        href: "casestudies",
        Icon: FaBookOpenReader,
    },
   /** {
        title: "Contact",
        href: "contact",
        Icon: FaMessage,
    },*/
    {
        title: "About",
        href: "about",
        Icon: FaInfo,
    },

];
