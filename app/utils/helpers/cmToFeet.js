export const cmToFeetAndInches = (cm) => {
   console.log(cm)
   const totalInches = cm / 2.54;
   const feet = Math.floor(totalInches / 12);
   const inches = Math.round(totalInches % 12);
   return `${feet}'${inches}`
}

