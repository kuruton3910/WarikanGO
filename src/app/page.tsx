"use client";
import { useProject } from "@/hooks/useProject";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { project } = useProject();
  const router = useRouter();
  useEffect(() => {
    if (project === null) {
      router.push("/newProject");
    }
  }, [project, router]);
  return (
    <main>
      <h1>ここに割り勘画面</h1>
    </main>
  );
}
