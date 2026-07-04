import { redirect } from "next/navigation";
import { getUser, rolesForUser } from "@platform/auth/next";
import { doSignOut } from "./actions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await getUser();
  if (!user) redirect("/signin");
  const roles = await rolesForUser(user);
  return (
    <main>
      <h1>DP Demo</h1>
      <p>Signed in as <strong>{user.name || user.email}</strong>{user.role === "owner" ? " (owner)" : ""}.</p>
      <p style={{ color: "#8a8178" }}>Your roles here: {roles.length ? roles.join(", ") : "(none yet)"}. Sign-in is Google via the platform relay; this page is only visible after you sign in.</p>
      {user.role === "owner" && <p><a href="/settings">Manage who can do what</a></p>}
      <form action={doSignOut}><button type="submit">Sign out</button></form>
    </main>
  );
}
