import Loki from 'lokijs'
import data from './db.json'
import type { Supe } from '~/typings'

let sup
const supes = () => {
  if (!sup) {
    const db = new Loki('db')
    db.loadJSONObject(data as any)
    sup = db.getCollection<Supe>('supes')
  }
  return sup
}

export default {
  supes,
}
