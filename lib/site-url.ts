function normalizeSiteUrl(value: string | undefined) {
  const candidate = value?.trim();
  if (!candidate) return null;

  try {
    return new URL(candidate).toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

const configuredSiteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const siteUrl = configuredSiteUrl ?? (process.env.NODE_ENV === "development" ? "http://localhost:3000" : null);
export const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
