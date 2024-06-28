import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <h1 className={cn("text-4xl", "font-extrabold", "mt-8")}>Create viral Shorts. Instantly.</h1>
      <p className="mb-96">Clipmagic Landing Page</p>
    </>


  );
}