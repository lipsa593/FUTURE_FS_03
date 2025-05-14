import React from "react";

const Footer =() =>{
    return (
    <div className="w-full h-20 bg-amazon_light text-gray-400 flex items-center justify-center gap-4">
        <span className="text-2xl font-bold text-amazon_yellow">TechVibe</span>
        <p className="text-sm -mt-4">
            All rights reserved {" "}
            <a className="hover:text-white hover:underline decoration-[1px]
            cursor-pointer duration-250" href="https://govardhan-portfolio.vercel.app/" target="_blank">
            @TechVibe 2023</a>
        </p>
    </div>
    );
};

export default Footer;