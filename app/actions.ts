"use server";
import { redirect } from "next/navigation";
import { signOut } from "@platform/auth/next";
export async function doSignOut(): Promise<void> {
  await signOut();
  redirect("/signin");
}
