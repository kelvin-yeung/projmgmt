import { getApps, initializeApp, cert } from "firebase-admin/app";

const serviceAccount = JSON.parse(process.env.FIREBASE_SECRET_KEY);
const firebaseAdminConfig = { credential: cert(serviceAccount) };

export function initAdminApp() {
  if (!getApps().length) {
    initializeApp(firebaseAdminConfig);
  }
}
