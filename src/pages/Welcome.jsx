import React from "react";
import LayoutStructure from "../components/LayoutStructure/LayoutStructure";
import Logo from "../components/Logo";
import Button from "../components/Button";
function Welcome() {
    return (
        <>
            <LayoutStructure customClass="items-center flex justify-center relative">
                <div className="flex flex justify-center flex-wrap pb-5">
                    <div className="mb-6">
                        <Logo />
                    </div>
                    <div className="text-center text-lg w-full ">Enjoy youwr</div>
                    <div className="text-orange text-[42px] font-black">LUCKY MEAL</div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                    <Button path="/Home"/>
                </div>
            </LayoutStructure>
        </>
    );
}

export default Welcome;
