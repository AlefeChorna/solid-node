import { MongoClient } from 'mongodb'

export const MongoHelper = {
  connection: null as MongoClient,
  async connect (uri: string): Promise<void> {
    this.connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },
  async disconnect (): Promise<void> {
    await this.connection.close()
  }
}
