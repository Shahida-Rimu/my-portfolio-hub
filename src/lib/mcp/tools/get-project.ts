import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/lib/portfolio-data";

export default defineTool({
  name: "get_project",
  title: "Get project case study",
  description: "Get the full case study (problem, solution, design process) for one portfolio project by slug.",
  inputSchema: {
    slug: z.string().trim().min(1).describe("Project slug, e.g. 'autotrace-ai' from list_projects."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const found = projects.find((p) => p.slug === slug);
    if (!found) {
      throw new ToolError(`No project with slug "${slug}". Use list_projects to see valid slugs.`);
    }
    const { image: _image, ...project } = found;
    return {
      content: [{ type: "text" as const, text: JSON.stringify(project, null, 2) }],
      structuredContent: { project },
    };
  },
});
