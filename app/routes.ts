import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("contact", "routes/contact.tsx"),
  ...prefix("projects", [
    index("routes/projects.tsx"),
    route("/:slug", "routes/project.tsx"),
  ]),
] satisfies RouteConfig;
