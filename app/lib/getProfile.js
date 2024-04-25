import { get, getDatabase, ref } from "firebase/database"
import app from "../firebaseConfig"

//  grab the data from getDatabase
// take reference from db users
// get the snaoshot from the ref

const getProfile = async (firebaseId) => {
   const db = getDatabase(app)
   const dbRef = ref(db, `users/${firebaseId}`)
   const snapshot = await get(dbRef)
   if (snapshot.exists()) {
      const targetedUser = await snapshot.val()
      return targetedUser
   }

}

export default getProfile