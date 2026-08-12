import { defineTool } from "@lovable.dev/mcp-js";
import { contact, timeline } from "@/lib/portfolio-data";

const bio =
  "Shahida Akter Rimu is a final-year Computer Science & Engineering student at the University of Information Technology and Sciences (UITS), Bangladesh. She designs user-centered interfaces and builds them for the web, working across UI/UX design, frontend development and graphic design.";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Get Shahida's bio, education/experience timeline and public contact links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Shahida Akter Rimu",
      role: "UI/UX Designer & Frontend Developer",
      location: "Bangladesh",
      availability: "Available for jobs & freelance",
      bio,
      timeline,
      contact,
    };
    return {
      content: [{ type: "text" as const, text: JSON.stringify(profile, null, 2) }],
      structuredContent: { profile },
    };
  },
});
