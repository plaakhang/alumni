import { Elysia } from "elysia";
import { prisma } from "./lib/prisma";
import { jwt } from "@elysiajs/jwt";
import {
  ACCESS_TOKEN_EXP,
  JWT_NAME,
  REFRESH_TOKEN_EXP,
} from "./config/constant";
import { getExpTimestamp } from "./lib/util";

export const authRoutes = new Elysia({ prefix: "/auth"})
    .post(
        "/sign-in",
        async(c) =>{
            return{
                message: "Sig-in successfully",
            };
        },
)
.post(
    "/sign-up",
    async (c) =>{
        return{
            message:"Account created successfully",
        };
    },
)
.post(
    "/refresh",
    async (c) => {
      return {
        message: "Access token generated successfully",
      };
    }
  )
  .post("/logout", async (c) => {
    return {
      message: "Logout successfully",
    };
  })
  .get("/me", (c) => {
    return {
      message: "Fetch current user",
    };
  });


