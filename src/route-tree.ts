import {createRootRoute, createRoute, createRouter} from "@tanstack/react-router";
import App from "@/App.tsx";
import Home from "@/components/home/Home.tsx";
import Members from "@/components/members/Members.tsx";
import OfficeBearers from "@/components/office-bearers/OfficeBearers.tsx";
import CustomerRights from "@/components/customer-rights/CustomerRights.tsx";
import HowToChoose from "@/components/how-to-choose/HowToChoose.tsx";
import UsefulLinks from "@/components/useful-links/UsefulLinks.tsx";
import NotFound from "@/not-found.tsx";

const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const officeBearersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tisztsegviseloink',
  component: OfficeBearers,
});

const customerRightsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ugyfel-jogok',
  component: CustomerRights,
});

const howToChooseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hogyan-valasszunk-ugyvedet',
  component: HowToChoose,
});

const usefulLinksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/hasznos-linkek',
  component: UsefulLinks,
});

const membersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ugyvedkereso',
  component: Members,
});

const routeTree = rootRoute.addChildren([indexRoute, officeBearersRoute, customerRightsRoute, howToChooseRoute, usefulLinksRoute, membersRoute]);
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

export default router;

