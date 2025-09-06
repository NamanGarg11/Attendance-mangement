import * as jose from 'jose'
import { GOOGLE_CLIENT_ID } from '../constants/index.js';
const GOOGLE_JWKS_URL = "https://www.googleapis.com/oauth2/v3/certs";

export default async function authUtil(id_token: string) {
  try {
    const JWKS = jose.createRemoteJWKSet(new URL(GOOGLE_JWKS_URL));

    const { payload } = await jose.jwtVerify(id_token, JWKS, {
      issuer: ["https://accounts.google.com", "accounts.google.com"],
      audience: GOOGLE_CLIENT_ID!,
    });
    return payload;
  } catch (err) {
    throw err;
  }
}