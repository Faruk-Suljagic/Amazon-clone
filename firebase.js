var firebaseConfig = {
  apiKey: "AIzaSyCO3AEBzzO5vRpGyipUoFQf2wb8Xpc46cs",
  authDomain: "clone-8d861.firebaseapp.com",
  projectId: "clone-8d861",
  storageBucket: "clone-8d861.appspot.com",
  messagingSenderId: "46083431476",
  appId: "1:46083431476:web:b514af05bf84652e35fe61",
  measurementId: "G-7Z65PLJTV4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();
