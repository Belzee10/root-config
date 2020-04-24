import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "navbar-ui",
  app: () => System.import("navbar-ui"),
  activeWhen: isActive.navbar,
});

start();
