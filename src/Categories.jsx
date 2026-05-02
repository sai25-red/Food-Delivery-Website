import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiBowlOfRice } from "react-icons/gi";
import { FaPlateWheat } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { PiHamburgerDuotone } from "react-icons/pi";
const Categories=[ 
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline className="w-35 h-8 text-blue-500" />,
    },
    {
        id:2,
        name:"breakfast",
        icon:<MdOutlineFreeBreakfast  className="w-35 h-8 text-blue-500"/>,
    },
    {
        id:3,
        name:"soups",
        icon:<GiBowlOfRice className="w-35 h-8 text-blue-500" />,
    },
    {
        id:4,
        name:"pasta",
        icon:<FaPlateWheat className="w-35 h-8 text-blue-500" />,
    },
    {
        id:5,
        name:"main_course",
        icon:<GiForkKnifeSpoon className="w-35 h-8 text-blue-500" />,
    },
    {
        id:6,
        name:"burger",
        icon:<PiHamburgerDuotone className="w-35 h-8 text-blue-500" />
    }
]

export default Categories