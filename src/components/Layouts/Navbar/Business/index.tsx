"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiMenu2Line,
  RiCloseLine,
  RiAddLine,
  RiSubtractLine,
  RiSearchLine,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterLine,
} from "@remixicon/react";
import { navigationData } from "../../../../data/navbar/NavigationData";
import type {
  SocialLink,
  NavMenu,
  HomeMegaMenuItem,
  NavMenuItem,
} from "../../../../types/navigation";

// Icon mapping for social links
const iconMap = {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterLine,
};

export default function BusinessNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle search toggle
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (menu: string) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Handle search overlay click
  useEffect(() => {
    if (isSearchOpen) {
      const timer = setTimeout(() => {
        const searchBox = document.getElementById("searchBox");
        if (searchBox) {
          searchBox.classList.remove("scale-50", "opacity-0");
          searchBox.classList.add("scale-100", "opacity-100");
        }
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isSearchOpen]);

  // Render social icon
  const renderSocialIcon = (socialLink: SocialLink) => {
    const IconComponent = iconMap[socialLink.icon as keyof typeof iconMap];
    return <IconComponent />;
  };

  // Render menu item link with underline effect
  const renderMenuItem = (item: NavMenuItem, isMobile: boolean = false) => (
    <Link
      href={item.href}
      className={`${isMobile ? "block relative px-4 py-2 text-gray-600" : "relative flex items-center gap-3 px-5 py-2 text-black"} font-medium text-[18px] transition-all duration-300 hover:text-[#c0f037] group/underline hover:translate-x-2`}
    >
      <span
        className={`before:content-[''] before:absolute ${isMobile ? "before:left-2" : "before:left-3"} before:top-1/2 before:h-0 before:w-[3px] before:bg-[#c0f037] before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-300 group-hover/underline:before:h-5`}
      ></span>
      {item.label}
    </Link>
  );

  return (
    <>
      {/* Business header */}
      <nav className="h-22 transition-all duration-500 ease-out absolute w-full top-0 left-0 z-50 border-b border-white/20">
        <div className="container flex items-center px-4 justify-between mx-auto h-full">
          {/* Logo */}
          <Link href="/">
            <Image
              src={navigationData.logo.light}
              alt={navigationData.logo.alt}
              width={navigationData.logo.width}
              height={navigationData.logo.height}
              className="md:h-10 h-8 object-cover w-auto"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            className="xl:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <RiMenu2Line className="text-xl" />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-12 font-medium xl:flex">
            {navigationData.menus.map((menu: NavMenu, index: number) => (
              <li key={index} className="group relative">
                {/* Menu Link */}
                <a
                  href="#!"
                  className="flex items-center gap-1 h-22 text-white text-[18px] font-medium hover:text-[#c0f037] transition-all duration-300"
                >
                  {menu.label}
                  {/* PLUS icon */}
                  <RiAddLine className="text-sm transition-transform group-hover:hidden" />
                  {/* MINUS icon */}
                  <RiSubtractLine className="text-sm hidden group-hover:inline-block" />
                </a>

                {/* MEGA MENU for Home */}
                {menu.megaMenu && (
                  <div className="dropdown-menu absolute top-full ltr:-translate-x-1/5 rtl:translate-x-1/5 w-[950px] bg-white rounded-xl shadow-xl text-black opacity-0 invisible scale-y-0 origin-top group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 transition-all duration-500 ease-out z-50">
                    <ul className="py-6 px-8">
                      <li>
                        <div className="grid grid-cols-12 gap-6">
                          {menu.megaMenu.map(
                            (item: HomeMegaMenuItem, itemIndex: number) => (
                              <div
                                key={itemIndex}
                                className="col-span-12 sm:col-span-6 lg:col-span-4"
                              >
                                <Link
                                  href={item.href}
                                  className="block rounded-lg overflow-hidden h-40"
                                >
                                  <div className="relative w-full h-40 overflow-hidden rounded-lg">
                                    <Image
                                      src={item.image}
                                      alt={item.imageAlt}
                                      fill
                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                      className="object-cover transition-all duration-300 hover:scale-105"
                                    />
                                  </div>
                                </Link>
                                <p className="mt-3 text-center">
                                  <Link
                                    href={item.href}
                                    className="relative flex items-center gap-3 px-5 py-2 font-medium text-[18px] transition-all duration-300 hover:text-[#c0f037] group/underline hover:translate-x-2"
                                  >
                                    <span className="before:content-[''] before:absolute before:left-3 before:top-1/2 before:h-0 before:w-[3px] before:bg-[#c0f037] before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-300 group-hover/underline:before:h-5"></span>
                                    {item.label}
                                  </Link>
                                </p>
                              </div>
                            ),
                          )}
                        </div>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Regular Dropdown Menu */}
                {menu.items && !menu.megaMenu && (
                  <div className="dropdown-menu absolute top-full rounded-lg text-black w-48 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible scale-y-0 origin-top transition-all duration-500 ease-out z-50">
                    <ul className="py-3">
                      {menu.items.map(
                        (item: NavMenuItem, itemIndex: number) => (
                          <li key={itemIndex}>{renderMenuItem(item)}</li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="flex gap-3 items-center">
            {/* Search Icon */}
            <button
              id="openSearch"
              className="text-white hover:text-[#c0f037] transition-all duration-300"
              onClick={toggleSearch}
              aria-label="Open search"
            >
              <RiSearchLine className="text-xl" />
            </button>

            {/* Search Bar Overlay */}
            <div
              id="searchBar"
              className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-500 ${
                isSearchOpen ? "opacity-100" : "opacity-0 hidden"
              }`}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsSearchOpen(false);
                }
              }}
            >
              <div
                id="searchBox"
                className={`bg-white flex items-center gap-3 px-5 py-3 rounded-full shadow-lg w-[90%] max-w-xl transition-all duration-500 ${
                  isSearchOpen ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <RiSearchLine className="text-black text-2xl" />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full outline-none text-black text-lg"
                />
                <button
                  id="closeSearch"
                  className="text-black text-xl"
                  onClick={toggleSearch}
                  aria-label="Close search"
                >
                  <RiCloseLine />
                </button>
              </div>
            </div>

            <div className="border border-white/50 h-8 hidden md:block"></div>

            <div className="md:flex gap-2 hidden">
              {navigationData.socialLinks.map(
                (socialLink: SocialLink, index: number) => (
                  <a
                    key={index}
                    href={socialLink.href}
                    className="bg-white/20 backdrop-blur-sm size-10 text-lg flex items-center justify-center rounded-full text-white hover:bg-[#c0f037] hover:text-black transition-all duration-300"
                    aria-label={socialLink.ariaLabel}
                  >
                    {renderSocialIcon(socialLink)}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-80 bg-white transition-transform duration-300 ease-in-out xl:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 p-5">
              <Link href="/">
                <Image
                  src={navigationData.logo.dark}
                  alt={navigationData.logo.alt}
                  width={navigationData.logo.width}
                  height={navigationData.logo.height}
                  className="md:h-10 h-8 object-cover w-auto"
                />
              </Link>

              <button
                id="mobile-close-btn"
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
              >
                <RiCloseLine className="text-xl" />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto py-6">
              <ul className="space-y-2 px-6">
                {navigationData.menus.map((menu: NavMenu, index: number) => {
                  const menuKey = menu.label.toLowerCase().replace(/\s+/g, "-");
                  const isOpen = openMobileDropdown === menuKey;

                  return (
                    <li key={index}>
                      <button
                        className="mobile-dropdown-btn flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium hover:text-[#c0f037] transition-all duration-300"
                        onClick={() => toggleMobileDropdown(menuKey)}
                      >
                        {menu.label}
                        {isOpen ? (
                          <RiSubtractLine className="text-md" />
                        ) : (
                          <RiAddLine className="text-md transition-transform" />
                        )}
                      </button>

                      <ul
                        className={`mobile-dropdown-content overflow-hidden transition-all duration-500 ease-in-out pl-4 pt-2 space-y-1 ${
                          isOpen ? "max-h-[500px]" : "max-h-0"
                        }`}
                      >
                        {/* Render mega menu items as regular links in mobile */}
                        {menu.megaMenu &&
                          menu.megaMenu.map(
                            (item: HomeMegaMenuItem, itemIndex: number) => (
                              <li key={itemIndex}>
                                {renderMenuItem(
                                  { label: item.label, href: item.href },
                                  true,
                                )}
                              </li>
                            ),
                          )}

                        {/* Render regular menu items */}
                        {menu.items &&
                          menu.items.map(
                            (item: NavMenuItem, itemIndex: number) => (
                              <li key={itemIndex}>
                                {renderMenuItem(item, true)}
                              </li>
                            ),
                          )}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}
