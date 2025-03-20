import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getAuth } from "firebase-admin/auth";

export const isAuthenticated = async () => {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value || "";
  
  try {
    const decodedClaims = await getAuth().verifySessionCookie(session, true);
    console.log("GOOD: ", decodedClaims)
  } catch (e) {
    redirect("/signin")
  }
}

export function sum(a, b) {
  return a + b;
}
