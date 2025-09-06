import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../constants/index.js";
import ApiError from "../utils/apiError.util.js";

// extend Express Request type
declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    // 1. Extract token from cookies
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized - No token found" });
    }

    // 2. Verify token
    
    const decoded = jwt.verify(token, JWT_SECRET!);

    // 3. Attach decoded user data
    req.user = decoded;

    // Continue request
    next();
  } catch (err) {
    console.error("JWT verification failed:", err);
    throw new ApiError(404, "jwt verification failed");
  }
}
