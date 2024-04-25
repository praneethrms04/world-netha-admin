import { redirect } from "next/navigation"
import { userAuth } from "./userAuth"


const useProtected = ({ children }) => {
   const isAuthenticated = userAuth()

   if (isAuthenticated) {
      return children
   } else {
      return redirect("/")
   }
}

export default useProtected
