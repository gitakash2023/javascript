const reverseString = (str) => {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revStr += str[i];
    }
    return revStr;
  };
  const myStr = "AKASH";
  console.log(reverseString(myStr));
  