import firebase from 'firebase'

const config = {
  projectId: 'vue-firebase-memo-app'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export default firebase
