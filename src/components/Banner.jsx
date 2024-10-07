import React from "react";
import banner from "../assets/images/banner.jpg";

export default function Banner({ }) {
    return (
        <div className="aspect-[16/9] bg-red w-[100dvw]
            bg-center bg-cover bg-no-repeat;
            ml-[-16px]
            mt-[-16px]
            rounded-br-2xl
            rounded-bl-2xl
        "
            style={{
                backgroundImage: `url(${banner})`
            }}
        >

        </div>
    );
}