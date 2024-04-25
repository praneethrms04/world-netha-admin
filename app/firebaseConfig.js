
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
   apiKey: "AIzaSyCibmPR8rUGwYC5gD8Nu7rDNk_f-rtrGwg",
   authDomain: "web-netha.firebaseapp.com",
   projectId: "web-netha",
   databaseURL: "https://web-netha-default-rtdb.firebaseio.com/",
   storageBucket: "web-netha.appspot.com",
   messagingSenderId: "434502225658",
   appId: "1:434502225658:web:814a226f6fd241ecf94343",
   measurementId: "G-LLMNY9TW19"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()
export default app