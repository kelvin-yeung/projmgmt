import { NextRequest, NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { initAdminApp } from "@/lib/firebase-admin";
import { getAuth } from "firebase-admin/auth";

// Initialize the Firebase Admin SDK every time the server is called
initAdminApp();

// Check if user is signed in
export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value || "";

  // Validate if the cookie exists in the request
  if (!session) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  // Use Firebase Admin to validate the session cookie
  const decodedClaims = await getAuth().verifySessionCookie(session, true); // https://youtu.be/kRszxpeTnW0?si=lIuPEiIDetwgk6u6&t=622, https://firebase.google.com/docs/auth/admin/manage-cookies

  if (!decodedClaims) {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }

  return NextResponse.json({ isLogged: true }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const headersList = await headers(); // https://nextjs.org/docs/app/api-reference/functions/headers
  const authorization = headersList.get("authorization");

  if (authorization?.startsWith("Bearer ")) {
    // https://youtu.be/kRszxpeTnW0?si=NolHcfclsY5Ww3F_&t=460, check JSON structure of authorization via console.log()
    const idToken = authorization?.split("Bearer ")[1];
    const decodedIdToken = await getAuth().verifyIdToken(idToken); //

    if (decodedIdToken) {
      // https://youtu.be/kRszxpeTnW0?si=pLkv3Nad2coqLTXj&t=622, https://firebase.google.com/docs/auth/admin/manage-cookies
      const expiresIn = 60 * 60 * 24 * 30;
      const sessionCookie = await getAuth().createSessionCookie(idToken, {
        expiresIn,
      });
      const options = {
        // https://nextjs.org/docs/app/api-reference/functions/cookies
        name: "session",
        value: sessionCookie,
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
      };

      // Add the cookie to the browser
      const cookieStore = await cookies();
      cookieStore.set(options);
    }
  }

  return NextResponse.json({}, { status: 200 });
}
