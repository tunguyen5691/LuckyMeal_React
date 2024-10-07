import React, { useEffect, useState } from "react";
import Menu from "../Menu";

export default function LayoutStructure({ children, customClass, isMenu }) {
    return (
        <div className={` h-screen-h p-4  font-primary font-medium bg-background text-text ${customClass}`}>
            {children}
            {
                isMenu && (
                    <div className="absolute bottom-4 left-4 right-4">
                        <Menu />

                    </div>)
            }
        </div>
    );
}
