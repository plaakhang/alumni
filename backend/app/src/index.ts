import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia")
.get("/login", () => "Login path Elysia")



.listen(3100);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname ?? "My name is Phubeth"}:${app.server?.port}`
);
