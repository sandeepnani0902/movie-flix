export const patterns = {
  firstname: /^[A-Za-z]{2,}$/,
  lastname: /^[A-Za-z]{1,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  mobile: /^[0-9]{10}$/,
  password: /^.{6,}$/,
  confirmpassword: null,
};


/* -------------------- REAL-TIME VALIDATION -------------------- */
export function validateforminput(
  name,
  value,
  form,
  setForm,
  setError,
  setValid
) {
  const updatedForm = { ...form, [name]: value };
  setForm(updatedForm);

  // Required Check
  if (value.trim() === "") {
    setError(prev => ({ ...prev, [name]: `Please enter ${name}` }));
    setValid(prev => ({ ...prev, [name]: false }));
    return;
  }

  // Confirm Password
  if (name === "confirmpassword") {
    const match = value === updatedForm.password;

    setError(prev => ({
      ...prev,
      confirmpassword: match ? "" : "Passwords do not match"
    }));

    setValid(prev => ({ ...prev, confirmpassword: match }));
    return;
  }

  // Pattern Validation
  const valid = patterns[name]?.test(value);

  setError(prev => ({
    ...prev,
    [name]: valid ? "" : `Invalid ${name}`
  }));

  setValid(prev => ({ ...prev, [name]: valid }));
}


/* -------------------- PASSWORD STRENGTH -------------------- */
export function checkPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 6) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  return strength; // 0–4
}
















//   const patterns = {
//     firstname: /^[A-Za-z]{2,}$/,
//     lastname: /^[A-Za-z]{1,}$/,
//     email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//     mobile: /^[0-9]{10}$/,
//     password: /^.{6,}$/,
//     confirmpassword: null
//   };

// export  function validateforminput(name, value,form, setForm, setError) {


//   setForm(prev => ({ ...prev, [name]: value }));

//   if (name == "confirmpassword") {
//     setError(prev => ({
//       ...prev,
//       [name]: value == form.password ? "" : "Passwords do not match"
//     }));
//     return;
//   }

//   const valid = patterns[name]?.test(value);
//   setError(prev => ({
//     ...prev,
//     [name]: valid ? "" : `Invalid ${name}`
//   }));
// }

// export function validateform(form, setForm, setError){
//    return console.log(form.password)
  
 

// }   