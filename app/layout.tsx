import "./globals.css";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getData } from "@/lib/data";
import MyProvider from "@/components/Provider";

export async function generateMetadata() {
  const c = await getData();

  return {
    title:
      c.data.title === "" ? "Welcome to " + c.data.domainName : c.data.title,
    description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author,
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
