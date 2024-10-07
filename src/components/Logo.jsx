import React from "react";
import logoImg from "../assets/images/logo.png";
export default function Logo({ }) {
    return (
        <div className="spect-square  rounded-full size-52 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${logoImg})`,
            }}
        >
        </div>
    );
}