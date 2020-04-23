import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  connection: null as MongoClient,
  async connect (uri: string): Promise<void> {
    console.log('[URI]', uri)

    this.connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },
  async disconnect (): Promise<void> {
    await this.connection.close()
  },
  getCollection (name: string): Collection {
    return this.connection.db().collection(name)
  },
  formatResponse: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection

    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
