import { createRouter } from "../createRouter";
import { bookRouter } from "./book.router";

export const appRouter = createRouter()
  .merge('books.', bookRouter)

export type AppRouter = typeof appRouter

