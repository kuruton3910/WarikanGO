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
  const saveProject = (newProject: Project) => {
    try {
      const projectJson = JSON.stringify(newProject);
      localStorage.setItem("warikan-go-project", projectJson);
      setProject(newProject);
    } catch (error) {
      console.error("LocalStorageへのプロジェクト保存に失敗しました", error);
    }
  };
  return { project, saveProject };
};
