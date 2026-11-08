import { Helmet } from "react-helmet-async";

const SITE = "https://sllaunchers.com";
const DEFAULT_DESC =
  "SL Launchers builds websites, grows your traffic, and engineers AI and blockchain products — one accountable team for startups, businesses and enterprises.";

export default function Seo({ title, description = DEFAULT_DESC, path = "/" }) {
  const fullTitle = path === "/" ? title : `${title} | SL Launchers`;
  const url = `${SITE}${path}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
