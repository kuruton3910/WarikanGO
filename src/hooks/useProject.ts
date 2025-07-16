import { useEffect, useState } from "react";
import type { Project } from "@/types";

export const useProject = () => {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const saveDate = localStorage.getItem("warikan-go-project");
    if (saveDate) {
      setProject(JSON.parse(saveDate));
    }
  }, []);
  return { project };
};
