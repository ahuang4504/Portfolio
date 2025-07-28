"use client";

import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="py-8">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-end items-center">
          <div className="flex space-x-8">
            <Link href="/" className="nav-link text-sm text-[#2F4156]">
              Home
            </Link>
            <Link href="/about" className="nav-link text-sm text-[#2F4156]">
              About Me
            </Link>
            <Link href="/projects" className="nav-link text-sm text-[#2F4156]">
              Projects
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-sm text-[#2F4156]"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
