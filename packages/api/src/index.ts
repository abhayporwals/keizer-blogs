import { cors } from "hono/cors";
import { Hono } from "hono/quick";
import { handle } from "hono/vercel";

import { getOrgDomainHandler } from "./handlers/domain/get";
import { requestVerificationOrgDomainHandler } from "./handlers/domain/request-verification";
import { verifyOrgDomainHandler } from "./handlers/domain/verify";
import { verifyCnameOrgDomainHandler } from "./handlers/domain/verify-cname";
import { countOrganizationHandler } from "./handlers/organizations/count";
import { getOrganizationHandler } from "./handlers/organizations/get";
import { listOrganizationHanlder } from "./handlers/organizations/list";
import { patchOrganizationHandler } from "./handlers/organizations/patch";
import { postOrganizationHanlder } from "./handlers/organizations/post";
import getProfileHandler from "./handlers/profile/get";
import aiRouter from "./routes/ai";
import blogsRouter from "./routes/blogs";
import polarRouter from "./routes/polar";

const app = new Hono()
  .basePath("/api")
  .use(
    process.env.NODE_ENV === "production"
      ? async (_, next) => next()
      : cors({
          origin: "*",
          allowMethods: ["POST", "GET", "OPTIONS", "PUT", "PATCH", "DELETE"],
          credentials: false,
        }),
  )
  .get("/profile", ...getProfileHandler)

  .get("/organizations", ...listOrganizationHanlder)
  .post("/organizations", ...postOrganizationHanlder)
  .get("/organizations/count", ...countOrganizationHandler)

  .get("/organizations/:id", ...getOrganizationHandler)
  .patch("/organizations/:id", ...patchOrganizationHandler)

  .get("/organizations/:id/domain", ...getOrgDomainHandler)
  .post("/organizations/:id/domain/verify", ...verifyOrgDomainHandler)
  .post(
    "/organizations/:id/domain/verify-cname",
    ...verifyCnameOrgDomainHandler,
  )
  .post(
    "/organizations/:id/domian/request-verification",
    ...requestVerificationOrgDomainHandler,
  )

  .route("/blogs", blogsRouter)
  .route("/polar", polarRouter)
  .route("/ai", aiRouter);

export default handle(app);
export type AppType = typeof app;
