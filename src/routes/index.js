import Home from "~/pages/home/index.js";
import Follow from "~/pages/following/index.js";
import Profile from "~/pages/profile/index.js";
import Upload from "~/pages/upload/index.js";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Follow },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
