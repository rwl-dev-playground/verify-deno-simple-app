import { type VNode } from "preact";

export interface PageOptions {
  title: string;
}

interface LayoutProps {
  sitename: string;
  options: PageOptions;
  children: VNode;
}

export const Layout = ({ sitename, options, children }: LayoutProps) => {
  const pageTitle = options.title ? `${options.title} | ${sitename}` : sitename;
  return (
    <html>
      <head>
        <title>{pageTitle}</title>
      </head>
      <body>
        <header>
          <h1>{options.title}</h1>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};
