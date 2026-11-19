export interface NavLink {
  label: string;
  /** Internal Angular route. */
  route?: string;
  /** External address (opens in a new tab). */
  href?: string;
}

/** Items of the header "More" dropdown (and the mobile menu). */
export const MORE_LINKS: NavLink[] = [
  { label: 'Become a Seller', route: '/dashboard' },
  { label: 'Notification Preferences', href: 'https://www.flipkart.com/communication-preferences/email' },
  { label: '24x7 Customer Care', href: 'https://www.flipkart.com/helpcentre' },
  { label: 'Advertise', href: 'https://advertising.flipkart.com' },
  { label: 'Download App', href: 'https://www.flipkart.com/mobile-apps' },
];

/** Service tabs next to the logo. `search` / `category` tell the home page what to show. */
export const SERVICE_TABS: { label: string; sub: string; category?: string; search?: string }[] = [
  { label: 'Minutes', sub: '10-min delivery', category: 'food' },
  { label: 'Travel', sub: 'Travel essentials', search: 'travel' },
  { label: 'Grocery', sub: 'Daily essentials', category: 'food' },
];
