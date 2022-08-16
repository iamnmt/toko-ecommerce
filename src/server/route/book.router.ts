import { getAllBooksOutputSchema, getSingleBookSchema } from "../../schemas/book.schema";
import { createRouter } from "../createRouter";

export const bookRouter = createRouter()
  .query('books', {
    output: getAllBooksOutputSchema,
    resolve({ ctx }) {
      return ctx.prisma.book.findMany()
    }
  })
  .query('single-book', {
    input: getSingleBookSchema,
    resolve({ ctx, input }) {
      return ctx.prisma.book.findUnique({
        where: {
          id: input.bookId
        }
      })
    }
  })
