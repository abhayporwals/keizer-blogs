import { factory } from "@plobbo/api/factory";
import { enforeAuthMiddleware } from "@plobbo/api/middleware/auth";
import { OrganizationMember } from "@plobbo/db/organization/member";

export const deleteMemberHandler = factory.createHandlers(
  enforeAuthMiddleware,
  async (c) => {
    const memberId = c.req.param("id");
    const organizationId = c.req.query("organizationId");

    if (!memberId || !organizationId) {
      return c.json({ error: "Member ID and organizationId are required" }, 400);
    }

    await OrganizationMember.remove({ id: memberId, organizationId });

    return c.json({ message: "Member removed successfully" });
  }
);
