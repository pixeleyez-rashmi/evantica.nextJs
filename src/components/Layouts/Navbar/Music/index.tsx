"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiMenu2Line,
  RiCloseLine,
  RiAddLine,
  RiSubtractLine,
} from "@remixicon/react";
import { navigationData } from "../../../../data/navbar/NavigationData";
import type {
  NavMenu,
  HomeMegaMenuItem,
  NavMenuItem,
} from "../../../../types/navigation";

import musicLogoLight from "../../../../assets/images/music/music-logo-light.png";
import musicLogoDark from "../../../../assets/images/music/music-logo-dark.png";

export default function MusicNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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

  // Render menu item link with underline effect
  const renderMenuItem = (item: NavMenuItem, isMobile: boolean = false) => (
    <Link
      href={item.href}
      className={`${isMobile ? "block relative px-4 py-2 text-gray-600" : "relative flex items-center gap-3 px-5 py-2 text-black"} font-medium text-[18px] transition-all duration-300 hover:text-[#00b4d8] group/underline hover:translate-x-2`}
    >
      <span
        className={`before:content-[''] before:absolute ${isMobile ? "before:left-2" : "before:left-3"} before:top-1/2 before:h-0 before:w-[3px] before:bg-[#00b4d8] before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-300 group-hover/underline:before:h-5`}
      ></span>
      {item.label}
    </Link>
  );

  // Filter out Contact from Pages menu items for desktop (it's standalone)
  const getPagesMenuItems = () => {
    const pagesMenu = navigationData.menus.find(
      (menu) => menu.label === "Pages",
    );
    if (pagesMenu && pagesMenu.items) {
      return pagesMenu.items.filter((item) => item.label !== "Contact");
    }
    return [];
  };

  // Get menus BEFORE logo (Home, Events)
  const getMenusBeforeLogo = () => {
    return navigationData.menus.filter(
      (menu) => menu.label === "Home" || menu.label === "Events",
    );
  };

  return (
    <>
      {/* Music header */}
      <nav className="font-chakra h-22 transition-all duration-500 ease-out absolute w-full top-0 left-0 z-50 ">
        <div className="container px-4 mx-auto h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between py-5 xl:hidden">
            {/* Logo */}
            <Link href="/">
              <Image
                src={musicLogoLight.src}
                alt="logo"
                width={musicLogoLight.width}
                height={musicLogoLight.height}
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
          </div>

          {/* Desktop Menu */}
          <ul className="hidden items-center justify-center gap-12 font-medium xl:flex">
            {/* Render ONLY Home and Events before logo */}
            {getMenusBeforeLogo().map((menu: NavMenu, index: number) => (
              <li key={index} className="group relative">
                {/* Menu Link */}
                <a
                  href="#!"
                  className="flex items-center gap-1 h-22 text-white text-[18px] font-medium hover:text-[#00b4d8] transition-all duration-300"
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
                                  <Image
                                    src={item.image}
                                    alt={item.imageAlt}
                                    width={300}
                                    height={160}
                                    className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:scale-105"
                                  />
                                </Link>
                                <p className="mt-3 text-center">
                                  <Link
                                    href={item.href}
                                    className="relative flex items-center gap-3 px-5 py-2 font-medium text-[18px] transition-all duration-300 hover:text-[#00b4d8] group/underline hover:translate-x-2"
                                  >
                                    <span className="before:content-[''] before:absolute before:left-3 before:top-1/2 before:h-0 before:w-[3px] before:bg-[#00b4d8] before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-300 group-hover/underline:before:h-5"></span>
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

                {/* Regular Dropdown Menu for Events */}
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

            {/* Pages Menu (without Contact) */}
            <li className="group relative">
              <a
                href="#!"
                className="flex items-center gap-1 h-22 text-white text-[18px] font-medium hover:text-[#00b4d8] transition-all duration-300"
              >
                Pages
                <RiAddLine className="text-sm transition-transform group-hover:hidden" />
                <RiSubtractLine className="text-sm hidden group-hover:inline-block" />
              </a>
              <div className="dropdown-menu absolute top-full rounded-lg text-black w-48 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible scale-y-0 origin-top transition-all duration-500 ease-out z-50">
                <ul className="py-3">
                  {getPagesMenuItems().map(
                    (item: NavMenuItem, itemIndex: number) => (
                      <li key={itemIndex}>{renderMenuItem(item)}</li>
                    ),
                  )}
                </ul>
              </div>
            </li>

            {/* Logo in Center */}
            <li className="relative">
              <Link href="/">
                <Image
                  src={musicLogoLight.src}
                  alt="logo"
                  width={musicLogoLight.width}
                  height={musicLogoLight.height}
                  className="md:h-10 h-8 object-cover w-auto"
                />
              </Link>
            </li>

            {/* Speakers Menu */}
            <li className="group relative">
              <a
                href="#!"
                className="flex items-center gap-1 h-22 text-white text-[18px] font-medium hover:text-[#00b4d8] transition-all duration-300"
              >
                Speakers
                <RiAddLine className="text-sm transition-transform group-hover:hidden" />
                <RiSubtractLine className="text-sm hidden group-hover:inline-block" />
              </a>
              <div className="dropdown-menu absolute top-full rounded-lg text-black w-48 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible scale-y-0 origin-top transition-all duration-500 ease-out z-50">
                <ul className="py-3">
                  {navigationData.menus
                    .find((menu) => menu.label === "Speakers")
                    ?.items?.map((item: NavMenuItem, itemIndex: number) => (
                      <li key={itemIndex}>{renderMenuItem(item)}</li>
                    ))}
                </ul>
              </div>
            </li>

            {/* Blog Menu */}
            <li className="group relative">
              <a
                href="#!"
                className="flex items-center gap-1 h-22 text-white text-[18px] font-medium hover:text-[#00b4d8] transition-all duration-300"
              >
                Blog
                <RiAddLine className="text-sm transition-transform group-hover:hidden" />
                <RiSubtractLine className="text-sm hidden group-hover:inline-block" />
              </a>
              <div className="dropdown-menu absolute top-full rounded-lg text-black w-48 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible scale-y-0 origin-top transition-all duration-500 ease-out z-50">
                <ul className="py-3">
                  {navigationData.menus
                    .find((menu) => menu.label === "Blog")
                    ?.items?.map((item: NavMenuItem, itemIndex: number) => (
                      <li key={itemIndex}>{renderMenuItem(item)}</li>
                    ))}
                </ul>
              </div>
            </li>

            {/* Contact - Standalone */}
            <li className="relative">
              <Link
                href="/contact"
                className="h-22 text-white text-[18px] font-medium hover:text-[#00b4d8] transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-80 bg-white transition-transform duration-300 ease-in-out -translate-x-full xl:hidden ${
            isMobileMenuOpen ? "translate-x-0" : ""
          }`}
        >
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 p-5">
              <Link href="/">
                <Image
                  src={musicLogoDark.src}
                  alt="logo"
                  width={musicLogoDark.width}
                  height={musicLogoDark.height}
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
                        className="mobile-dropdown-btn flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium hover:text-[#00b4d8] transition-all duration-300"
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
                                <Link
                                  href={item.href}
                                  className="block relative px-4 py-2 text-gray-600 font-medium text-[18px] transition-all duration-300 hover:text-[#00b4d8] group/underline hover:translate-x-2"
                                >
                                  <span className="before:content-[''] before:absolute before:left-2 before:top-1/2 before:h-0 before:w-[3px] before:bg-[#00b4d8] before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-300 group-hover/underline:before:h-5"></span>
                                  {item.label}
                                </Link>
                              </li>
                            ),
                          )}

                        {/* Render regular menu items */}
                        {menu.items &&
                          menu.items.map(
                            (item: NavMenuItem, itemIndex: number) => (
                              <li key={itemIndex}>
                                <Link
                                  href={item.href}
                                  className="block relative px-4 py-2 text-gray-600 font-medium text-[18px] transition-all duration-300 hover:text-[#00b4d8] group/underline hover:translate-x-2"
                                >
                                  <span className="before:content-[''] before:absolute before:left-2 before:top-1/2 before:h-0 before:w-[3px] before:bg-[#00b4d8] before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-300 group-hover/underline:before:h-5"></span>
                                  {item.label}
                                </Link>
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
