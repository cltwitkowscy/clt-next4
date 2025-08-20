"use client";

type Props = { value: number };

export default function CurrentCount({ value }: Props) {
  return <p>Current: {value}</p>;
}
