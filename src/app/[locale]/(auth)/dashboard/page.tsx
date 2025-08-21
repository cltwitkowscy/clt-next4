import Hello, { Hello as HelloNamed } from "@/components/Hello";

export default function Page() {
  return (
    <div className="p-6">
      <Hello name="User" />
      <div className="mt-2"><HelloNamed name="Again" /></div>
    </div>
  );
}
