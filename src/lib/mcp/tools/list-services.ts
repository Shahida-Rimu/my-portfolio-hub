import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "@/lib/portfolio-data";

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the services Shahida offers (UI/UX design, frontend development, graphic design) and what each includes.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text" as const, text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
