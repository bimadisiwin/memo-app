import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '../firebase'
import { firestoreAction } from 'vuexfire'

const db = firebase.firestore()
const memosRef = db.collection('memos')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memos: [],
    memo: ""
  },
  actions: {
    init: firestoreAction(({ bindFirestoreRef }) => {
      bindFirestoreRef('memos', memosRef)
    }),
    add: firestoreAction((context, value) => {
      if (value.trim()) {
        memosRef.add({
          name: value
        })
      }
    }),
    remove: firestoreAction((context, id) => {
      memosRef.doc(id).delete()
    }),
    update: firestoreAction((context, value) => {
      memosRef.doc(value).update({
        name: value
      })
    })
  }
})
