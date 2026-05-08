import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export function Footer() {
    return (
      <footer className="mt-24">
          <div className="bottomBanner flex items-center justify-center gap-5">
              <a href="https://www.linkedin.com/in/patrick-stephens-ab283630/" target="_blank" rel="noreferrer"><FaLinkedin className="size-6" /></a>
              <a href="https://github.com/pstephens2601" target="_blank" rel="noreferrer"><FaGithub className="size-6" /></a>
          </div>
          <div className="flex items-center justify-center w-full h-[150px] bg-[#e4e5cd]">
              <p>Copyright © Patrick Stephens</p>
          </div>
      </footer>
    );
}
