"use client";

type Props = { value: number };

export function CurrentCount({ value }: Props) {
  return <p>Current: {value}</p>;
}
export default CurrentCount;
