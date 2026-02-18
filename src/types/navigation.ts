export interface NavMenuItem {
  label: string;
  href: string;
}

export interface HomeMegaMenuItem {
  image: string;
  imageAlt: string;
  label: string;
  href: string;
}

export interface NavMenu {
  label: string;
  href?: string;
  items?: NavMenuItem[];
  megaMenu?: HomeMegaMenuItem[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: 'RiFacebookFill' | 'RiInstagramLine' | 'RiTwitterLine';
  ariaLabel: string;
}

export interface NavbarConfig {
  logo: {
    light: string;
    dark: string;
    alt: string;
    width: number;
    height: number;
  };
  menus: NavMenu[];
  socialLinks: SocialLink[];
}

