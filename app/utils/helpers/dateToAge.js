
export const dateToAge = (date) => {
   if (date === undefined || date === null) {
      return null; 
   }
   let dob = date.replace(/-/g, '')
   let year = Number(dob.substr(0, 4))
   let month = Number(dob.substr(4, 2))
   let day = Number(dob.substr(6, 2))
   let today = new Date()
   let age = today.getFullYear() - year
   return age
}