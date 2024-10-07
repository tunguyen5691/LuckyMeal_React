import React from "react";
import LayoutStructure from "../components/LayoutStructure/LayoutStructure";
import icon1 from "../assets/images/icon/dice.png";
import icon2 from "../assets/images/icon/healthy-food.png";
import {motion} from "framer-motion";
import { useNavigate } from "react-router";

const option = [
    {
        id: 1,
        icon: icon1,
        label: "Random",
        path: "/RecipeList",
    },
    {
        id: 2,
        icon: icon2,
        label: "Ingredients",
        path: "",
    }
]
function Home() {
    const navigate = useNavigate();
    
    const handleSelect = (pathname) => {
        navigate(pathname);
    }
    return (
        <>
            <LayoutStructure isMenu customClass="flex justify-center items-center ">
                <div className="flex w-full items-baseline gap-3 pb-[76px]">
                    {
                        option.map((item, i) => (
                            <motion.div 
                                key={item.id}
                                onClick={()=>handleSelect(item.path)}
                                whileTap ={{scale: .95}}
                                className="aspect-square bg-[rgba(81,59,35,.8)] w-full rounded-lg flex items-center justify-center">
                                <div className="w-full">
                                    <img src={item.icon}
                                        className="block w-2/6 mx-auto mb-3"
                                        alt="" />
                                    <span className="block text-center  text-orange">{item.label}</span>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </LayoutStructure >
        </>
    );
}

export default Home;
