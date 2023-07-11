const isValidPhoneNumber = (input) => {
  if (input.length == 10) {
    return " namber is valid ";
  } else {
    return " please ! Enter a valid phone number. ";
  }
};
console.log(isValidPhoneNumber("786786778"));
   