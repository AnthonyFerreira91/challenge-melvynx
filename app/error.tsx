"use client";

import { HeaderBase } from "@/features/layout/HeaderBase";

export default function ErrorPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <HeaderBase />
      <div className="flex flex-1 items-center justify-center">
        <p>ERROR 400 ?</p>
      </div>
    </div>
  );
}
