import { Decimal } from '@prisma/client/runtime'
import z from 'zod'

export const getSingleBookSchema = z.object({
  bookId: z.string().uuid()
})

export const getAllBooksOutputSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  rating: z.number(),
  price: z.number(),
  sold: z.number(),
  discountPercent: z.instanceof(Decimal)
}).array()
