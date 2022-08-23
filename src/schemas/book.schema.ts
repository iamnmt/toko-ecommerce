import z from 'zod'

export const getSingleBookSchema = z.object({
  id: z.string().uuid()
})
