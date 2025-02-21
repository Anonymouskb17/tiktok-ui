import config from "~/config";

import { HeaderOnly } from "~/components";

import Home from "../pages/Home/index.js";
import Following from "../pages/Following/index";
import Profile from "~/pages/Profile/index.js";
import Upload from "~/pages/Upload/index.js";
import Search from "~/pages/Search/index.js";
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
