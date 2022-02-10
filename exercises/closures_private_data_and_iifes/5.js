let Account = (function () {
  const INVALID_PASSWORD_MESSAGE = 'Invalid Password';
  let privateEmail;
  let privatePassword;
  let privateFirstName;
  let privateLastName;

  function validCharacterCode(code) {
    return (code >= 48 && code <= 57) ||
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122);
  }

  function anonymize() {
    let displayName = '';

    for (let index = 0; index < 16; index += 1) {
      let characterCode;
      while (!validCharacterCode(characterCode)) {
        characterCode = Math.ceil(Math.random() * 122);
      }
      displayName += String.fromCharCode(characterCode);
    }

    return displayName;
  }

  function returnIfAuthorized(password, returned) {
    if (password === privatePassword) {
      return returned;
    } else {
      return INVALID_PASSWORD_MESSAGE;
    }
  }

  return {
    init(email, password, firstName, lastName) {
      privateEmail = email;
      privatePassword = password;
      privateFirstName = firstName;
      privateLastName = lastName;
      this.displayName = anonymize();

      return this;
    },
    reanonymize(password) {
      if (password === privatePassword) {
        this.displayName = anonymize();
        return true;
      } else {
        return INVALID_PASSWORD_MESSAGE;
      }
    },
    resetPassword(password, newPassword) {
      if (password === privatePassword) {
        privatePassword = newPassword;
        return true;
      } else {
        return INVALID_PASSWORD_MESSAGE;
      }
    },
    firstName(password) {
      return returnIfAuthorized(password, privateFirstName);
    },
    lastName(password) {
      return returnIfAuthorized(password, privateLastName);
    },
    email(password) {
      return returnIfAuthorized(password, privateEmail);
    },
  };
})();


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'