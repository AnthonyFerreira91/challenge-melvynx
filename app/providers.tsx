"use client";

import { Toaster } from "@/components/ui/sonner";
import { DialogRenderer } from "@/features/dialogs-provider/DialogProvider";
import { SiteConfig } from "@/site-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PlausibleProvider from "next-plausible";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PlausibleProvider domain={SiteConfig.domain}>
          <QueryClientProvider client={queryClient}>
            <Toaster />
            <DialogRenderer />
            {children}
          </QueryClientProvider>
      </PlausibleProvider>
    </ThemeProvider>
  );
};
