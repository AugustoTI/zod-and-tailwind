import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Esse campo não está preenchido',
    })
    .email('Deve ser um email válido'),
  password: z
    .string({
      required_error: 'Esse campo não está preenchido',
    })
    .min(1, 'Esse campo não está preenchido'),
  rememberUser: z.boolean(),
})

export type LoginFields = z.infer<typeof loginFormSchema>
