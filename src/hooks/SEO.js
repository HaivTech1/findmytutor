import Head from "next/head";
import { useRouter } from "next/router";

import siteSettings from "./siteSettings";

export const CommonSEO = ({
  title,
  description,
  ogType,
  ogImage,
  twImage,
  canonicalUrl,
}) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${siteSettings.siteUrl}${router.asPath}`}
      />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteSettings.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImage.constructor.name === "Array" ? (
        ogImage.map(({ url, index }) => (
          <meta property="og:image" content={url} key={index + 1} />
        ))
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteSettings.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
      <link rel="shortcut icon" href="favicon.ico" />
      <link
        rel="canonical"
        href={
          canonicalUrl
            ? canonicalUrl
            : `${siteSettings.siteUrl}${router.asPath}`
        }
      />
    </Head>
  );
};

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = siteSettings.siteUrl + siteSettings.socialBanner;
  const twImageUrl = siteSettings.siteUrl + siteSettings.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  );
};

export const TagSEO = ({ title, description }) => {
  const ogImageUrl = siteSettings.siteUrl + siteSettings.socialBanner;
  const twImageUrl = siteSettings.siteUrl + siteSettings.socialBanner;
  const router = useRouter();
  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteSettings.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  );
};

export const ProductSEO = ({
  title,
  meta,
  thumbnail,
  createdAt,
  url,
  canonicalUrl,
}) => {
  const postDateTemplate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const router = useRouter();
  const publishedAt = new Date(createdAt).toLocaleDateString(
    siteSettings.locale,
    postDateTemplate
  );
  const modifiedAt = new Date(createdAt || createdAt).toLocaleDateString(
    siteSettings.locale,
    postDateTemplate
  );

  let image = thumbnail ?? [siteSettings.socialBanner];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    image: image,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    publisher: {
      "@type": "Organization",
      name: siteSettings.author,
      logo: {
        "@type": "ImageObject",
        url: `${siteSettings.siteUrl}${siteSettings.siteLogoColor}`,
      },
    },
    description: title,
  };

  const twImageUrl = image;

  return (
    <>
      <CommonSEO
        title={title}
        description={meta}
        ogType="product"
        ogImage={image}
        twImage={image}
        canonicalUrl={canonicalUrl}
      />
      <Head>
        {createdAt && (
          <meta property="product:published_time" content={publishedAt} />
        )}
        {createdAt && (
          <meta property="product:modified_time" content={modifiedAt} />
        )}
      </Head>
    </>
  );
};
