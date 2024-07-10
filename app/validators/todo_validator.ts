import vine from '@vinejs/vine'

export const TodoValidator = vine.compile(
  vine.object({
    note: vine.string().trim().escape()
  })
)
