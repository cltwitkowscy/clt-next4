"use client";

type Props = { name?: string };

export function Hello({ name = "World" }: Props) {
  return <div>Hello {name}</div>;
}
export default Hello;
