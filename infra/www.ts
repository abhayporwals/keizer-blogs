import { auth } from "./auth";
import { valkey } from "./cache";
import { domain } from "./dns";
import { email } from "./email";
import { secrets } from "./secrets";
import { bucket, NEXT_PUBLIC_S3_DOMAIN, postgres } from "./storage";
import { vpc } from "./vpc";

export const www = new sst.aws.Nextjs("www", {
  path: "apps/www",
  vpc: $app.stage === "production" ? vpc : undefined,
  environment: {
    NEXT_PUBLIC_S3_DOMAIN,
    AUTH_URL: $interpolate`${auth.url}`,
  },
  domain:
    $app.stage === "production"
      ? {
          name: domain,
          dns: sst.cloudflare.dns({ proxy: true }),
        }
      : undefined,
  link: [
    bucket,
    postgres,
    email,
    valkey,
    auth,
    secrets.langdbProjectId,
    secrets.langdbApiKey,
    secrets.langdbOpenAIBaseUrl,
    secrets.CloudfrontWWWUrl,
    secrets.CloudfrontDistributionID,
  ],
  server: { runtime: "nodejs22.x" },
  permissions: [
    {
      resources: ["*"],
      actions: ["cloudfront:GetDistribution", "cloudfront:UpdateDistribution"],
      effect: "allow",
    },
    {
      resources: ["*"],
      actions: [
        "acm:RequestCertificate",
        "acm:DeleteCertificate",
        "acm:DescribeCertificate",
        "acm:ListCertificates",
      ],
      effect: "allow",
    },
  ],
});
