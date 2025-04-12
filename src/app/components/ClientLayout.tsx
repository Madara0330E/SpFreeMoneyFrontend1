"use client";

import { useEffect } from "react";
import { initSPWorlds } from "@/lib/spworlds";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initSPWorlds();
  }, []);

  return <>{children}</>;
}
