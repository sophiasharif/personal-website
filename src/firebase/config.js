// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { analytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1t4kxlQVtvQFFYmEpTBiU5ffWJzFk8XI",
  authDomain: "personal-webs-5c6c7.firebaseapp.com",
  projectId: "personal-webs-5c6c7",
  storageBucket: "personal-webs-5c6c7.appspot.com",
  messagingSenderId: "127536681633",
  appId: "1:127536681633:web:42bad58ed5b46678ec16e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
