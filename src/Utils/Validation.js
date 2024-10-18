export const checkValidData = (email, password, fname) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isFullNameValid = /[A-Za-z]+$/.test(fname);

  if (!isEmailValid) return "Enter a valid email address";
  if (!isPasswordValid) return "Enter a valid Password";
  if (!isFullNameValid) return "Enter the Fullname";

  return null;
};
