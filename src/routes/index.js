import { HeaderOnly } from "~/components";

import Home from "../pages/Home/index.js";
import Following from "../pages/Following/index";
import Profile from "~/pages/profile/index.js";
import Upload from "~/pages/Upload/index.js";
import Search from "~/pages/Search/index.js";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
