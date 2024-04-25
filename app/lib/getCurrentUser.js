import { getDatabase } from "firebase/database"
import getAllProfies from "./getAllProfiles"
import app from "../firebaseConfig"


export const getCurrentUser = async () => {
   try {
      const user = localStorage.getItem('user')
      const currentUser = JSON.parse(user)
      const { email } = currentUser
      const usersData = await getAllProfies()
      const userArray = usersData.filter((profile) => profile.email === email)
      const sourceObj = userArray[0]
      const userObject = Object.assign({}, sourceObj)
      return { userObject: userObject, id: userObject.id }

   } catch (error) {
      console.log(error)

   }

}




