import Dashboard from "../components/svgs/sidebar/dashboard.svg";
import Orders from "../components/svgs/sidebar/orders.svg";
import Menu from "../components/svgs/sidebar/menu.svg";
import Reviews from "../components/svgs/sidebar/reviews.svg";
import Dispatchers from "../components/svgs/sidebar/dispatchers.svg";
import Support from "../components/svgs/sidebar/support.svg";
import Store from "../components/svgs/sidebar/storemanagement.svg";
import Settings from "../components/svgs/sidebar/settings.svg";

export const navItems = [
  {
    name: "Dashboard",
    link: "/",
    Icon: Dashboard,
  },
  {
    name: "Orders",
    link: "/orders",
    Icon: Orders,

  },
  {
    name: "Menu",
    link: "/menu",
    Icon: Menu,

  },
  {
    name: "Reviews",
    link: "/reviews",
    Icon: Reviews,
  },
  {
    name: "Dispatchers",
    link: "/dispatchers",
    Icon: Dispatchers,
  },
  {
    name: "Support Chat",
    link: "/support",
    Icon: Support,
  },
  {
    name: "Store Management",
    link: "/store",
    Icon: Store,
  },
  {
    name: "Settings",
    link: "/settings",
    Icon: Settings,
  },
];
