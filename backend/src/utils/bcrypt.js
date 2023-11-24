import bcrypt from 'bcrypt'

const saltRounds = 10

export default {
  generate: (text) => {
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(text, salt)
    return hash
  },
  compare: (text, hash) => {
    return bcrypt.compareSync(text, hash)
  }
}
