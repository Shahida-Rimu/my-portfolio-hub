import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectToggle({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  const Icon = expanded ? ChevronUp : ChevronDown;
  return (
    <Button variant="outline" onClick={onToggle} aria-expanded={expanded} aria-controls="project-grid" className="shrink-0 border-primary/40 bg-card/60 text-foreground hover:border-primary hover:text-primary">
      {expanded ? "View less" : "View all projects"}
      <Icon aria-hidden="true" />
    </Button>
  );
}