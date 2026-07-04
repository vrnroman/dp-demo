"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { signOut, createGroup, deleteGroup, addPersonToGroup, removePersonFromGroup, setGroupRoles } from "@platform/auth/next";

export async function doSignOut(): Promise<void> { await signOut(); redirect("/signin"); }

export async function makeGroup(fd: FormData): Promise<void> {
  const name = String(fd.get("name") ?? "").trim();
  if (name) await createGroup(name);
  revalidatePath("/settings"); redirect("/settings");
}
export async function removeGroup(fd: FormData): Promise<void> {
  const id = String(fd.get("groupId") ?? ""); if (id) await deleteGroup(id);
  revalidatePath("/settings"); redirect("/settings");
}
export async function addToGroup(fd: FormData): Promise<void> {
  const id = String(fd.get("groupId") ?? ""); const email = String(fd.get("email") ?? "").trim();
  if (id && email) await addPersonToGroup(id, email);
  revalidatePath("/settings"); redirect("/settings");
}
export async function takeFromGroup(fd: FormData): Promise<void> {
  const id = String(fd.get("groupId") ?? ""); const email = String(fd.get("email") ?? "");
  if (id && email) await removePersonFromGroup(id, email);
  revalidatePath("/settings"); redirect("/settings");
}
export async function chooseGroupRoles(fd: FormData): Promise<void> {
  const id = String(fd.get("groupId") ?? ""); const roles = fd.getAll("role").map((r) => String(r));
  if (id) await setGroupRoles(id, roles);
  revalidatePath("/settings"); redirect("/settings");
}
