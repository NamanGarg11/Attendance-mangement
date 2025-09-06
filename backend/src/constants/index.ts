import dotenv from "dotenv";
dotenv.config();

const {
  NODE_ENV,
  ADMIN_EMAIL,
  ORIGIN,
  GOOGLE_CLIENT_ID,
  JWT_SECRET,
  JWT_EXPIRY,
} = process.env;

if (!ADMIN_EMAIL || !ORIGIN || !GOOGLE_CLIENT_ID) {
  throw new Error("env var are missing");
}

console.log({
    NODE_ENV,
  ADMIN_EMAIL,
  ORIGIN,
  GOOGLE_CLIENT_ID,
  JWT_SECRET,
  JWT_EXPIRY,
})

export {
  NODE_ENV,
  ADMIN_EMAIL,
  ORIGIN,
  GOOGLE_CLIENT_ID,
  JWT_SECRET,
  JWT_EXPIRY,
};
