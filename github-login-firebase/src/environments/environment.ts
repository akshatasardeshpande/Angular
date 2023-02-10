// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyC9Rbxg-EsRsJs0VR8ci-nhpAhzIItdPGU",
  authDomain: "github-finder-app-f5d51.firebaseapp.com",
  projectId: "github-finder-app-f5d51",
  storageBucket: "github-finder-app-f5d51.appspot.com",
  messagingSenderId: "501715762765",
  appId: "1:501715762765:web:b5764b44cca1b490a06604",
  measurementId: "G-ZJMNLB633E"
  }
  
}
// const firebaseConfig = {
//   apiKey: "AIzaSyC9Rbxg-EsRsJs0VR8ci-nhpAhzIItdPGU",
//   authDomain: "github-finder-app-f5d51.firebaseapp.com",
//   projectId: "github-finder-app-f5d51",
//   storageBucket: "github-finder-app-f5d51.appspot.com",
//   messagingSenderId: "501715762765",
//   appId: "1:501715762765:web:b5764b44cca1b490a06604",
//   measurementId: "G-ZJMNLB633E"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
