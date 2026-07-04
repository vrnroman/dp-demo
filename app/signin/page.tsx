export const dynamic = "force-dynamic";
export default function SignIn() {
  return (
    <main style={{ textAlign: "center", paddingTop: 80 }}>
      <h1>DP Demo</h1>
      <p style={{ color: "#8a8178" }}>Please sign in to continue.</p>
      <a href="/auth/google" style={{ display: "inline-block", padding: "13px 22px", borderRadius: 12, background: "#2b2620", color: "#faf6ef", textDecoration: "none", fontWeight: 600 }}>Continue with Google</a>
    </main>
  );
}
