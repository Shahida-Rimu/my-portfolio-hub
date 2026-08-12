import { defineTool } from "@lovable.dev/mcp-js";
import { projects } from "@/lib/portfolio-data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "List Shahida Akter Rimu's portfolio projects with slug, name, tagline and tags.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = projects.map(({ slug, name, tagline, tags }) => ({ slug, name, tagline, tags }));
    return {
      content: [{ type: "text" as const, text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});
