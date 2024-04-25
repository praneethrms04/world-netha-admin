

export const genderOptions = [
   { key: 'male', value: 'Male' },
   { key: 'female', value: 'Female' },
]

export const searchGenderOptions = [
   { value: 'select', key: 'no' },
   { value: 'Male', key: 'male' },
   { value: 'Female', key: 'female' },
]

export const maritalOptions = [
   { key: 'unMarried', value: 'Unmarried' },
   { key: 'secondMarriage', value: 'Secondmarriage' }
];

export const searchMaritalOptions = [
   { value: 'select', key: 'no' },
   { value: 'UnMarried', key: 'unmarried' },
   { value: 'SecondMarriage', key: 'secondmarriage' }
];

const heightData = [
   150, 152, 155, 157, 160, 162, 165, 167, 170, 172,
   175, 177, 180, 182, 185, 187, 190, 192, 195, 197,
   200, 202, 205, 207, 210, 212, 215, 217, 220, 222
]

const resHeightOptions = heightData.map((height, index) => ({
   key: height,
   value: `${height} cm`,
}));

resHeightOptions.unshift({ key: 'no', value: "select" })
export const heightOptions = resHeightOptions

export const timeOfBirthOptions = [
   { value: 'select', key: 'no' },
   { value: '9 AM', key: '9am' },
   { value: '10 AM', key: '10am' },
   { value: '11 AM', key: '11am' },
   { value: '12 PM', key: '12pm' },
]

export const placeOfBirthOptions = [
   { value: 'select', key: 'no' },
   { value: 'Vizag', key: 'vizag' },
   { value: 'Anatapur', key: 'anantapur' },
   { value: 'Puttaparthy', key: 'buttaparthy' },
   { value: 'Bangolore', key: 'bangalore' },
]

const nakshatras = [
   "Ashwini", "Bharani", "Kruthika", "Rohini", "Mrigashira", "Arudra",
   "Punarvasu", "Pushyami", "Ashlesha", "Makha", "Pubba (Purva Phalguni)",
   "Uttara (Uttara Phalguni)", "Hastha", "Chittha", "Swathi", "Vishaka",
   "Anuradha", "Jyesta", "Moola", "Purvashada", "Uttarashada", "Shravana",
   "Dhanishta", "Shatabhisha", "Purvabhadra", "Uttarabhadra", "Revati"
];

const resNakshatrasOptions = nakshatras.map(nakshatra => {
   return {
      key: nakshatra.toLowerCase(),
      value: nakshatra
   };
});
resNakshatrasOptions.unshift({ key: 'no', value: "select" })

export const nakshatrasOptions = resNakshatrasOptions


const padams = ["1", "2", "3", "4"]

const resPadam = padams.map((pad) => ({
   key: pad,
   value: pad,
}))
resPadam.unshift({ key: 'no', value: 'select' })
export const padamOptions = resPadam

const raashiData = [
   "Mesham",
   "Vrushabam",
   "Midhunam",
   "Karkatakam",
   "Simham",
   "Kanya",
   "Tula",
   "Vruchikam",
   "Dhanusu",
   "Makaram",
   "Kumbam",
   "Meenam",
]

const resRaashiOptions = raashiData.map((raashi) => {
   return {
      key: raashi.toLocaleLowerCase(),
      value: raashi
   }
})

resRaashiOptions.unshift({ key: "no", value: "select" })
export const raashiOptions = resRaashiOptions

export const kujaDosamOptions = [
   { key: 'yes', value: 'Yes' },
   { key: 'no', value: 'No' },
   { key: "donotknow", value: "Don't Know" }
]

export const complexionOptions = [
   { key: 'veryFair', value: 'Veryfair' },
   { key: 'fair', value: 'Fair' },
   { key: 'whitish', value: 'Whitish' },
   { key: 'dark', value: 'Dark' },
]


const motherTonguedata = [
   "Arabic",
   "Bengali",
   "Bhojpuri",
   "English",
   "French",
   "Gujarati",
   "Hausa",
   "Hindi",
   "Iranian Persian",
   "Italian",
   "Japanese",
   "Javanese",
   "Korean",
   "Mandarin Chinese",
   "Marathi",
   "Portuguese",
   "Russian",
   "Spanish",
   "Standard German",
   "Tamil",
   "Telugu",
   "Turkish",
   "Urdu",
   "Vietnamese",
   "Western Punjabi",
   "Wu Chinese",
   "Yue Chinese",
]

const resMotherTongueOptions = motherTonguedata.map((motherTongue) => {
   return {
      value: motherTongue,
      key: motherTongue.toLocaleLowerCase()
   }
})
resMotherTongueOptions.unshift({ key: 'no', value: "select" })
export const motherTongueOptions = resMotherTongueOptions


const religionData = ["Hindu", "Muslim", "Christian"]

const resReligionOptions = religionData.map((religion) => {
   return {
      value: religion,
      key: religion.toLocaleLowerCase()
   }
})
resReligionOptions.unshift({ key: 'no', value: "select" })
export const religionOptions = resReligionOptions

const casteData = ["Padmashali", "Yadav", "Reddy"]

const resCasteDataOptions = casteData.map((caste) => {
   return {
      value: caste,
      key: caste.toLocaleLowerCase()
   }
})
resCasteDataOptions.unshift({ key: 'no', value: "select" })
export const casteDataOptions = resCasteDataOptions

export const physicalStatusOptions = [
   { key: 'normal', value: 'Normal' },
   { key: 'physicallyChallenged', value: 'Physically Challenged' }
]

const qualificationData = [
   "SSC (10th Grade)",
   "Intermediate (12th Grade)",
   "Undergraduate (Bachelor's Degree)",
   "Postgraduate (Master's Degree)",
   "Doctorate (Ph.D.)"
]

const resQualificationDataOptions = qualificationData.map((qualificationData) => {
   return {
      value: qualificationData,
      key: qualificationData.toLowerCase()
   }
})
resQualificationDataOptions.unshift({ key: "no", value: "select" })
export const qualificationDataOptions = resQualificationDataOptions

const occupationData = [
   "Govt Employee",
   "Private Employeee",
   "MNC",
   "Business",
   "BPO",
   "Banking Services",
   "Manager",
   "Asst Manager",
   "Associate",
   "Sr Associate",
   "Team Leader",
   "Data Analyst",
   "Doctor",
   "Dentist",
   "Physitherapist",
   "Engineer",
   "Data Engineer",
   "Machine Learning Engineer",
   "Human Resources",
   "IT",
   "Software Engineer",
   "Self Employed",
   "Student",
   "Teacher",
   "Professor",
   "Lecturer",
   "Digital Marketing",
   "Quality Analyst",
   "Quality Assurance Specialist",
]

const resOccupationDataOptions = occupationData.map((occupation) => {
   return {
      value: occupation,
      key: occupation.toLocaleLowerCase()
   }
})

resOccupationDataOptions.unshift({ key: 'no', value: "select" })
export const occupationDataOptions = resOccupationDataOptions

const annualIncomeData = ["300000-400000", "400000-500000", "500000-600000", "500000 < above"]
const resAnnualIncomeDataOptions = annualIncomeData.map((income) => {
   return {
      value: income,
      key: income.toLocaleLowerCase()
   }
})
resAnnualIncomeDataOptions.unshift({ key: 'no', value: 'select' })
export const annualIncomeDataOptions = resAnnualIncomeDataOptions

const citizenshipData = ["Indian"]
const resCitizenshipData = citizenshipData.map((citizen) => {
   return {
      value: citizen,
      key: citizen.toLocaleLowerCase()
   }
})
resCitizenshipData.unshift({ key: "no", value: "select" })

export const citizenshipDataOptions = resCitizenshipData

const statesData = [
   "Andhra Pradesh",
   "Arunachal Pradesh",
   "Assam",
   "Bihar",
   "Chhattisgarh",
   "Goa",
   "Gujarat",
   "Haryana",
   "Himachal Pradesh",
   "Jharkhand",
   "Karnataka",
   "Kerala",
   "Madhya Pradesh",
   "Maharashtra",
   "Manipur",
   "Meghalaya",
   "Mizoram",
   "Nagaland",
   "Odisha",
   "Punjab",
   "Rajasthan",
   "Sikkim",
   "Tamil Nadu",
   "Telangana",
   "Tripura",
   "Uttar Pradesh",
   "Uttarakhand",
   "West Bengal",
   "Andaman and Nicobar Islands",
   "Chandigarh",
   "Dadra and Nagar Haveli and Daman and Diu",
   "Lakshadweep",
   "Delhi",
   "Puducherry",
]

// export const stateDataOptions = statesData.map(state => {
//    return {
//       value: state,
//       key: state.toLocaleLowerCase()
//    }
// })


const resStateDataOptions = statesData.map(state => {
   return {
      value: state,
      key: state.toLocaleLowerCase()
   }
})

resStateDataOptions.unshift({ key: "no", value: "select" })

export const stateDataOptions = resStateDataOptions



const brothersdata = [0, 1, 2, 3, 4]
const resBrothersDataOptions = brothersdata.map((brother) => {
   return {
      value: brother,
      key: brother.toString()
   }
})
resBrothersDataOptions.unshift({ key: "no", value: "select" })
export const brothersDataOptions = resBrothersDataOptions

const sistersdata = [0, 1, 2, 3, 4]
export const resSistersDataOptions = sistersdata.map((sister) => {
   return {
      value: sister,
      key: sister.toString()
   }
})
resSistersDataOptions.unshift({ key: "no", value: "select" })

export const sistersDataOptions = resSistersDataOptions