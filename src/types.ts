import { z } from "zod"

export type State = {
    start : number
}

export const logZodSchema = z.object({
    code: z.string(),
    type: z.string().optional(),
    content: z.string()
})

export type Log = z.infer<typeof logZodSchema>