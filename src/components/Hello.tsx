"use client";
export default function Hello({ name = "World" }: { name?: string }) {
  return <div>Hello {name}</div>;
}
