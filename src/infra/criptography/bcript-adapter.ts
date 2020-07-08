import bcrypt from 'bcrypt'
import { Encrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number

  constructor (salt?: number) {
    const defaultSalt = 12
    this.salt = salt || defaultSalt
  }

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)

    return hash
  }
}
