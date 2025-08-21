"use client";
import React from "react";
export type CurrentCountProps = {value: number};
export function CurrentCount({value}: CurrentCountProps) {
  return <p>Current: {value}</p>;
}
export default CurrentCount;
