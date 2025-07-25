import "./globals.css";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getData } from "@/lib/data";
import MyProvider from "@/components/Provider";

export async function generateMetadata() {
  const c = await getData();

  const domain = c.data.domainName;

  const title = c.data.title?.trim() ? c.data.title : `Welcome to ${domain}`;

  const description = c.data.description?.trim()
    ? c.data.description
    : `Join a vibrant community of developers, influencers, and entrepreneurs on ${domain}, all using the versatile CONTRIB token to power their token economies!`;

  const keywords = c.data.keywords?.trim()
    ? c.data.keywords.split(",").map((k: string) => k.trim())
    : ["website"];

  const author = c.data.author?.trim() || "contrib";

  const ogImage = `https://${domain}/images/og-image.jpg`;
  const twitterImage = `https://${domain}/images/twitter-image.jpg`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      siteName: domain,
      type: "website",
      locale: "en_US",
      url: `https://${domain}`,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImage],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MyProvider>
          <div className="mainOnboardingContainer">{children}</div>
        </MyProvider>
      </body>
    </html>
  );
}
