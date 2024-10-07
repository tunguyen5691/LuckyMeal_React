import React from "react";
import { useNavigate } from "react-router";
export default function Button({ path , functionC }) {
    const navigate = useNavigate();
    console.log(path,)
    const buttonHandleClick = () => {
        if( path) {
            navigate(path);
        } else {
            functionC();
        }
    }
    return (
        <div className="h-[46px]
        bg-orange flex  items-center justify-center rounded-[5px]"
            onClick={buttonHandleClick}
        >
            <div className="text-center font-bold tracking-[2px] font-2xl">START NOW</div>
        </div>
    );
}