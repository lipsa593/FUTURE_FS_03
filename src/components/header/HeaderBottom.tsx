import React from "react";
import {LuMenu} from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { stateProps } from "../../../type";
import { signOut } from "next-auth/react";
import { removeUser } from "@/store/nextSlice";

const HeaderBottom = () =>{
    const { userInfo} = useSelector(
        (state:stateProps)=>state.next);
        const dispatch = useDispatch();
        const handleSignOut=()=>{
            signOut();
            dispatch(removeUser());
        }
    return <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
        <p className="flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            <LuMenu/>Browse
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Featured Tech
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            AI Gadgets
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Smart Home  
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Wearables
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Best Sellers
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Mobiles
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Customer Service
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Electronics
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            New Releases
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Home & Kitchen
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Fashion
        </p>
        <p className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
            Amazon Pay
        </p>
        {userInfo && (
        <button onClick={handleSignOut} className="hidden md:flex items-center gap-1 h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-500 text-amazon_yellow cursor-pointer duration-300">
            Sign Out
        </button>
        )}
    </div>
};

export default HeaderBottom;