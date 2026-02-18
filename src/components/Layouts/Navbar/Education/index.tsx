"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiMenu2Line,
  RiCloseLine,
  RiAddLine,
  RiSubtractLine,
  RiArrowRightLongFill,
  RiMoonLine,
  RiSunLine,
} from "@remixicon/react";
import { navigationData } from "../../../../data/navbar/NavigationData";
import type {
  NavMenu,
  HomeMegaMenuItem,
  NavMenuItem,
} from "../../../../types/navigation";
import educationLogoLight from "../../../../assets/images/education/education-logo-light.png";
import educationLogoDark from "../../../../assets/images/education/education-logo-dark.png";
import { useTheme } from "next-themes";

export default function EducationNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (menu: string) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
  };

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />; // Placeholder

  // Render menu item link with underline effect
  const renderMenuItem = (item: NavMenuItem, isMobile: boolean = false) => (
    <Link
      href={item.href}
      className={`${isMobile ? "block relative px-4 py-2 text-gray-600 dark:text-gray-400" : "relative flex items-center gap-3 px-5 py-2 text-black"} font-medium text-[18px] transition-all duration-300 hover:text-[#481938] group/underline hover:translate-x-2`}
    >
      <span
        className={`before:content-[''] before:absolute ${isMobile ? "before:left-2" : "before:left-3"} before:top-1/2 before:h-0 before:w-[3px] before:bg-[#481938] before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-300 group-hover/underline:before:h-5`}
      ></span>
      {item.label}
    </Link>
  );

  return (
    <>
      {/* Education header */}
      <nav className="h-22 transition-all duration-500 ease-out absolute w-full top-0 left-0 z-50">
        <div className="2xl:px-30 px-5 flex items-center px-4 justify-between mx-auto h-full">
          <div className="flex items-center xl:gap-18 gap-7">
            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              className="xl:hidden text-black"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <RiMenu2Line className="text-xl" />
            </button>

            {/* Logo */}
            <Link href="/">
              <Image
                src={educationLogoDark.src}
                alt="logo"
                width={educationLogoDark.width}
                height={educationLogoDark.height}
                className="md:h-10 h-8 object-cover w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden items-center gap-12 font-medium xl:flex">
              {navigationData.menus.map((menu: NavMenu, index: number) => (
                <li key={index} className="group relative">
                  {/* Menu Link */}
                  <a
                    href="#!"
                    className="flex items-center gap-1 text-black h-22 text-[18px] font-medium hover:text-[#481938] transition-all duration-300"
                  >
                    {menu.label}
                    {/* PLUS icon */}
                    <RiAddLine className="text-sm transition-transform group-hover:hidden" />
                    {/* MINUS icon */}
                    <RiSubtractLine className="text-sm hidden group-hover:inline-block" />
                  </a>

                  {/* MEGA MENU for Home */}
                  {menu.megaMenu && (
                    <div className="dropdown-menu absolute top-full ltr:-translate-x-1/5 rtl:translate-x-1/5 w-[950px] border-b-4 ltr:border-r-4 rtl:border-l-4 bg-white rounded-xl shadow-xl text-black opacity-0 invisible scale-y-0 origin-top group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 transition-all duration-500 ease-out z-50">
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
                                      className="relative flex items-center gap-3 px-5 py-2 font-medium text-[18px] transition-all duration-300 hover:text-[#481938] group/underline hover:translate-x-2"
                                    >
                                      <span className="before:content-[''] before:absolute before:left-3 before:top-1/2 before:h-0 before:w-[3px] before:bg-[#481938] before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-300 group-hover/underline:before:h-5"></span>
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
                    <div className="dropdown-menu absolute top-full rounded-lg text-black w-48 border-b-4 ltr:border-r-4 rtl:border-l-4 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible scale-y-0 origin-top transition-all duration-500 ease-out z-50">
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
          </div>

          {/* Desktop CTA */}
          <div className="flex items-center gap-2">
            <Link
              href="#!"
              className="btn uppercase text-lg font-bold border bg-white text-black border-black rounded-full border-b-5 px-10 py-3 group relative overflow-hidden z-10 hidden md:block"
            >
              <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#f5e900] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-[562px] group-hover:h-[562px] -z-10"></span>
              <span>
                {" "}
                Join Now <RiArrowRightLongFill className="inline ms-1" />
              </span>
            </Link>
            <button
              id="darkModeToggle"
              className="group relative overflow-hidden flex flex-col items-center justify-center gap-2 font-bold border bg-white text-black border-black rounded-full border-b-4 border-r-4 size-13 z-10"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
            >
              <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#f5e900] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-[200px] group-hover:h-[200px] -z-10"></span>

              {theme === "dark" ? (
                <RiSunLine className="moonIcon text-xl transition-transform duration-300 group-hover:rotate-12" />
              ) : (
                <RiMoonLine className="sunIcon text-xl transition-transform duration-300 group-hover:rotate-12" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-black transition-transform duration-300 ease-in-out -translate-x-full xl:hidden ${
            isMobileMenuOpen ? "translate-x-0" : ""
          }`}
        >
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 p-5">
              <div>
                <Link href="/">
                  <Image
                    src={educationLogoDark.src}
                    alt="logo"
                    width={educationLogoDark.width}
                    height={educationLogoDark.height}
                    className="md:h-10 h-8 object-cover w-auto dark:hidden"
                  />
                </Link>
                <Link href="/">
                  <Image
                    src={educationLogoLight.src}
                    alt="logo"
                    width={educationLogoLight.width}
                    height={educationLogoLight.height}
                    className="md:h-10 h-8 object-cover w-auto dark:block hidden"
                  />
                </Link>
              </div>
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
                        className="mobile-dropdown-btn flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium hover:text-[#481938] transition-all duration-300"
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
