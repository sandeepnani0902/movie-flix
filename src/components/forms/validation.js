// const pattern = {
//   required: {
//     regex: /./,
//     error: "This field is required",
//   },

//   FIRSTNAME: {
//     regex: /^[A-Za-z]{2,}$/, // only letters, at least 2 characters
//     error: "Enter a valid first name (letters only)",
//   },

//   LASTNAME: {
//     regex: /^[A-Za-z]{2,}$/, // only letters, at least 2 characters
//     error: "Enter a valid last name (letters only)",
//   },

//   EMAIL: {
//     regex: /^[a-zA-Z]{1}[a-zA-Z0-9._%+-]{1,}@[a-zA-Z]{1,}\.[a-zA-Z]{2,3}$/,
//     error: "Enter a valid email",
//   },

//   MOBILE: {
//     regex: /^[6-9]\d{9}$/,
//     error: "Enter a valid 10-digit mobile number",
//   },

//   PASSWORD: {
//     regex: /^.{5,}$/, // at least 5 characters
//     error: "Password must be at least 5 characters",
//   },

//   CONFIRMPASSWORD: {
//     regex: /^.{5,}$/,
//     error: "Passwords do not match",
//   },
// };

// export default function validateinput(form) {
//   const {
//     firstname,
//     lastname,
//     email,
//     mobile,
//     password,
//     confirmpassword,
//   } = form;

//   const result = {};

//   // First name
//   if (!pattern.required.regex.test(firstname)) {
//     result.firstname = pattern.required.error;
//   } else if (!pattern.FIRSTNAME.regex.test(firstname)) {
//     result.firstname = pattern.FIRSTNAME.error;
//   }

//   // Last name
//   if (!pattern.required.regex.test(lastname)) {
//     result.lastname = pattern.required.error;
//   } else if (!pattern.LASTNAME.regex.test(lastname)) {
//     result.lastname = pattern.LASTNAME.error;
//   }

//   // Email
//   if (!pattern.required.regex.test(email)) {
//     result.email = pattern.required.error;
//   } else if (!pattern.EMAIL.regex.test(email)) {
//     result.email = pattern.EMAIL.error;
//   }

//   // Mobile
//   if (!pattern.required.regex.test(mobile)) {
//     result.mobile = pattern.required.error;
//   } else if (!pattern.MOBILE.regex.test(mobile)) {
//     result.mobile = pattern.MOBILE.error;
//   }

//   // Password
//   if (!pattern.required.regex.test(password)) {
//     result.password = pattern.required.error;
//   } else if (!pattern.PASSWORD.regex.test(password)) {
//     result.password = pattern.PASSWORD.error;
//   }

//   // Confirm Password
//   if (!pattern.required.regex.test(confirmpassword)) {
//     result.confirmpassword = pattern.required.error;
//   } else if (confirmpassword !== password) {
//     result.confirmpassword = pattern.CONFIRMPASSWORD.error;
//   }

//   handleerror(result);
// }

//  export function handleerror(result){
    
// }



