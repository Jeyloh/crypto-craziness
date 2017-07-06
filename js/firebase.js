import * as firebase from 'firebase'

// TODO: Attach to a proper Firebase
var config = {
  apiKey: 'AIzaSyAzRzVoVgSz8W_kvFiryuuHaJIBIdA6tLI',
  authDomain: 'familiekalenderen-295e8.firebaseapp.com',
  databaseURL: 'https://familiekalenderen-295e8.firebaseio.com',
  projectId: 'familiekalenderen-295e8',
  storageBucket: 'familiekalenderen-295e8.appspot.com',
  messagingSenderId: '383956279999'
}

firebase.initializeApp(config)

export default firebase
