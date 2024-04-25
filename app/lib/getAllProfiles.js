import { get, getDatabase, ref } from "firebase/database"
import app from "@/app/firebaseConfig"

const getAllProfies = async () => {
   const db = getDatabase(app)
   const dbRef = ref(db, 'users')
   const snapshot = await get(dbRef)
   if (snapshot.exists()) {
      const profilesData = snapshot.val()
      const tempArray = Object.keys(profilesData).map((id) => {
         return {
            ...profilesData[id],
            id
         }
      })
      return tempArray
   } else {
      console.log("error getting users ")
   }
}

export default getAllProfies