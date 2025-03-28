import { cors } from "hono/cors";
import { Hono } from "hono/quick";
import { handle } from "hono/vercel";

import { countBlogHandler } from "./handlers/blogs/count";
import { getBlogHandler } from "./handlers/blogs/get";
import { listBlogsHanlder } from "./handlers/blogs/list";
import { getBlogMetadataHandler } from "./handlers/blogs/metadata/get";
import { putBlogMetadataHandler } from "./handlers/blogs/metadata/put";
import { patchBlogHanlder } from "./handlers/blogs/patch";
import { putBlogPlaceholderImages } from "./handlers/blogs/placeholder-images/put";
import { postBlogHandler } from "./handlers/blogs/post";
import { publishBlogHandler } from "./handlers/blogs/publish";
import { getOrgDomainHandler } from "./handlers/domain/get";
import { requestVerificationOrgDomainHandler } from "./handlers/domain/request-verification";
import { verifyOrgDomainHandler } from "./handlers/domain/verify";
import { verifyCnameOrgDomainHandler } from "./handlers/domain/verify-cname";
import { countOrganizationHandler } from "./handlers/organizations/count";
import { getOrganizationHandler } from "./handlers/organizations/get";
import { listOrganizationHanlder } from "./handlers/organizations/list";
import { patchOrganizationHandler } from "./handlers/organizations/patch";
import { postOrganizationHanlder } from "./handlers/organizations/post";
import { getProfileHandler } from "./handlers/profile/get";
import aiRouter from "./routes/ai";
import polarRouter from "./routes/polar";
import { deleteBlogHandler } from "./handlers/blogs/delete";
import { addMemberHandler } from "./handlers/organizations/member-add";
import { getMemberHandler } from "./handlers/organizations/member-get";
import { deleteMemberHandler } from "./handlers/organizations/member-delete";
import { getAllMembersHandler } from "./handlers/organizations/member-getall";
import { updateMemberHandler } from "./handlers/organizations/member-update";
import { updateProfileHandler } from "./handlers/profile/patch";

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
  .patch("/profile/update", ...updateProfileHandler)

  .get("/blogs", ...listBlogsHanlder)
  .post("/blogs", ...postBlogHandler)
  .get("/blogs/count", ...countBlogHandler)

  .put("/blogs/placeholder-images", ...putBlogPlaceholderImages)
  .get("/blogs/:id", ...getBlogHandler)
  .patch("/blogs/:id", ...patchBlogHanlder)
  .delete("/blogs/:id", ...deleteBlogHandler)

  .put("/blogs/:id/metadata", ...putBlogMetadataHandler)
  .get("/blogs/:id/metadata", ...getBlogMetadataHandler)
  .post("/blogs/:id/publish", ...publishBlogHandler)

  .get("/organizations", ...listOrganizationHanlder)
  .post("/organizations", ...postOrganizationHanlder)
  .get("/organizations/count", ...countOrganizationHandler)

  .get("/organizations/:id", ...getOrganizationHandler)
  .patch("/organizations/:id", ...patchOrganizationHandler)

  .post("/organization/add-member", ...addMemberHandler)
  .get("/organization/member/:id", ...getMemberHandler)
  .patch("/organization/member/:id", ...updateMemberHandler)
  .delete("/organization/member/:id", ...deleteMemberHandler)
  .get("/organization/members", ...getAllMembersHandler)

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

  .route("/polar", polarRouter)
  .route("/ai", aiRouter);

export default handle(app);
export type AppType = typeof app;
