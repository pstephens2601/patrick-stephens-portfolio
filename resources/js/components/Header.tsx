import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export function Header() {
    return <header className="header">
        <div className="topBanner flex justify-end items-center pr-5 gap-3">
            <a href="https://www.linkedin.com/in/patrick-stephens-ab283630/" target="_blank" rel="noreferrer"><FaLinkedin className="size-5"/></a>
            <a href="https://github.com/pstephens2601" target="_blank" rel="noreferrer"><FaGithub className="size-5"/></a>
        </div>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[20%_1fr] bg-white pt-8 header-grid">
                <div className="logo">
                    <img src="images/patrick_stephens_web.png" alt="Me" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                    <div className="header-top">
                        <h1 className="w-full text-center md:text-left md:pl-6">PATRICK STEPHENS</h1>
                    </div>
                    <hr className="h-[5px] bg-[#18314F] border-0" />
                    <div>
                        <p className="p-12 text-center italic text-xl">
                            Full-stack software engineer with 12+ years of experience building and scaling production web applications using PHP.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>
}
