import React from "react";
import back from "../assets/images/icon/back.png";
import {motion} from "framer-motion";
import { useNavigate } from "react-router";

export default function Backbutton({ }) {
    const navigate = useNavigate();
    return (
        <motion.div className="aspect-square bg-[#fff] w-10 rounded-md flex items-center justify-center"
            onClick={()=>navigate(-1)}
        >   
            <img src={back} alt="" 
                className="w-9/12"
            />
        </motion.div>
    );
}