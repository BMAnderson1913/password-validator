function isLowerCase(password, index) {
  return password.charCodeAt(index) >= 97 && password.charCodeAt(index) <= 122

}

function isUpperCase(password, index) {
  return password.charCodeAt(index) >= 65 && password.charCodeAt(index) <= 90

}

function isNum(password, index) {
  return !isNaN(password[index])
}

function validatePassword(password) {
  if (password.length < 8) return false

  let lowerCase = 0

  let upperCase = 0

  let Num = 0

  let constSpecial = 0

  for (let i = 0; i < password.length; i++) {
    if (isLowerCase(password, i)) {
      lowerCase++
    } else if (isUpperCase(password, i)) {
      upperCase++
    } else if (isNum(password, i)) {
      Num++
    } else {
      constSpecial++
    }
  }
  return lowerCase > 0 && upperCase > 0 && Num > 0 && constSpecial > 0
}


module.exports = validatePassword