import { defineMcp } from "@lovable.dev/mcp-js";
import listProjects from "./tools/list-projects";
import getProject from "./tools/get-project";
import listServices from "./tools/list-services";
import getProfile from "./tools/get-profile";

export default defineMcp({
  name: "my-portfolio-hub",
  title: "My Portfolio Hub",
  version: "0.1.0",
  instructions:
    "Public portfolio of Shahida Akter Rimu, UI/UX designer and frontend developer. Use `get_profile` for her bio, timeline and contact links, `list_projects` / `get_project` for project case studies, and `list_services` for the services she offers.",
  tools: [listProjects, getProject, listServices, getProfile],
});
