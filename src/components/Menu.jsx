import React, { useState } from "react";
import { useNavigation } from "react-router";
import home from "../assets/images/icon/home.png";
import store from "../assets/images/icon/shop.png";
import newspaper from "../assets/images/icon/newspaper.png";
import user from "../assets/images/icon/user.png";
import cart from "../assets/images/icon/cart_2.png";
import { Link } from "react-router-dom";
const MenuList = [
    {
        id: 1,
        icon: home,
        path: "/Home",
    },
    {
        id: 2,
        icon: store,
        path: "StorePage",
    },
    {
        id: 3,
        icon: newspaper,
        path: "NewsPage",
    },
    {
        id: 4,
        icon: cart,
        path: "Cart",
    },
    {
        id: 5,
        icon: user,
        path: "PersonalPage",
    }
]


export default function Menu({ }) {
    return (
        <div className="flex bg-orange rounded-[15px] ">
            {
                MenuList.map((item, i) => (
                    <Link to={"/" + item.path} className="flex h-[60px] flex-1 justify-center items-center" key={item.id}>
                        <img src={item.icon} alt="" className="w-5" />
                    </Link>
                ))
            }
        </div>
    )
}