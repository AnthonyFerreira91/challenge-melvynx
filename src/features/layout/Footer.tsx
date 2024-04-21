import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { SiteConfig } from "@/site-config";

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Layout className="mt-12 py-12">
        <LayoutContent className="flex justify-between max-lg:flex-col">
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <Typography variant="base">{SiteConfig.company.name}</Typography>
            </div>
            <Typography variant="muted" className="italic">
              © {new Date().getFullYear()} {SiteConfig.company.name} - All
              rights reserved.
            </Typography>
          </div>
        </LayoutContent>
      </Layout>
    </footer>
  );
};
