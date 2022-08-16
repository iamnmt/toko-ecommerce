import z from 'zod'
export const getSingleBookSchema = z.object({
  bookId: z.string().uuid()
})
