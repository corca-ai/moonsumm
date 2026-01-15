'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith('/')) {
      return pathname === href || pathname.startsWith(href + '/');
    }
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 md:py-4 z-50 shadow-sm">
      {/* Logo */}
      <div className="flex gap-2 md:gap-3 items-center">
        <Image
          src="/assets/product/icons/moonlight-logo.svg"
          alt="Moonlight Logo"
          width={32}
          height={32}
          className="w-8 h-8 md:w-9 md:h-9"
        />
        <p className="font-semibold text-base md:text-lg lg:text-xl text-[#605070]">
          Moonlight
        </p>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden md:flex gap-6 lg:gap-8 items-center text-[16px] font-medium text-[#181818]">
        <a href="#home" className="hover:text-[#8F5BB7] transition-colors">Home</a>
        <a href="#product" className="hover:text-[#8F5BB7] transition-colors">제품 소개</a>
        <a href="/product/features" className={`pb-1 transition-colors ${isActive('/product/features') ? 'text-[#8F5BB7] border-b-2 border-[#8F5BB7]' : 'hover:text-[#8F5BB7]'}`}>기능 소개</a>
        <a href="#cases" className="hover:text-[#8F5BB7] transition-colors">도입 사례</a>
        <a href="#pricing" className="hover:text-[#8F5BB7] transition-colors">사용 요금제</a>
        <a href="#faq" className="hover:text-[#8F5BB7] transition-colors">FAQ</a>
      </nav>

      {/* Hamburger Menu - Mobile */}
      <button
        className="md:hidden flex flex-col gap-1.5 items-center justify-center w-6 h-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-[#605070] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#605070] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#605070] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Profile Icon - Desktop */}
      <div className="hidden md:block w-10 h-10 md:w-12 md:h-12">
        <Image
          src="/assets/product/icons/profile-icon.svg"
          alt="Profile"
          width={48}
          height={48}
          className="w-full h-full"
        />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white flex flex-col gap-3 p-4 md:hidden shadow-md">
          <a href="#home" className="text-[16px] text-[#181818] hover:text-[#8F5BB7] transition-colors">Home</a>
          <a href="#product" className="text-[16px] text-[#181818] hover:text-[#8F5BB7] transition-colors">제품 소개</a>
          <a href="/product/features" className={`text-[16px] pb-1 transition-colors ${isActive('/product/features') ? 'text-[#8F5BB7] border-b-2 border-[#8F5BB7]' : 'text-[#181818] hover:text-[#8F5BB7]'}`}>기능 소개</a>
          <a href="#cases" className="text-[16px] text-[#181818] hover:text-[#8F5BB7] transition-colors">도입 사례</a>
          <a href="#pricing" className="text-[16px] text-[#181818] hover:text-[#8F5BB7] transition-colors">사용 요금제</a>
          <a href="#faq" className="text-[16px] text-[#181818] hover:text-[#8F5BB7] transition-colors">FAQ</a>
          <div className="border-t pt-3 mt-2">
            <Image
              src="/assets/product/icons/profile-icon.svg"
              alt="Profile"
              width={40}
              height={40}
            />
          </div>
        </nav>
      )}
    </header>
  );
}
