export interface NavigationItem {
  label: string;
  link: string;
  external?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}