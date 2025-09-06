import jwt from "jsonwebtoken";
import { JWT_EXPIRY, JWT_SECRET } from "../constants/index.js";
export default function jwtSign(jwtPayload: object) {
  return jwt.sign(jwtPayload, JWT_SECRET!, { expiresIn: "7d" });
}
