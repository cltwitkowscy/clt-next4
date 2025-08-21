"use client";
import React from "react";
export type HelloProps = {name?: string};
export function Hello({name = "World"}: HelloProps) {
  return <div>Hello {name}</div>;
}
export default Hello;
