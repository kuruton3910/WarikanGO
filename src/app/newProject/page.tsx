"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useState } from "react";

export default function NewProject() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <main>
      <h1>ここに新規プロジェクト</h1>
      <Input
        placeholder="タイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-4 text-lg"
      ></Input>
      <Button onClick={increment}>+</Button>
      <h1>{count}</h1>
      <h1>{title}</h1>
    </main>
  );
}
