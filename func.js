
const validatePassword=(password)=>{
        const minlength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);

        if (password.length < minlength) {
            return "password must be at least 8 characters long.";
        }
        if (!hasUppercase) {
            return "password must contain at least one uppercase letter.";
        }
        if (!hasLowercase) {
            return "password must contain at least one lowercase letter.";
        }
        if (!hasNumber) {
            return "paswword must contain at least one number.";
        }
        if (!hasSpecialChar) {
            return "password must contain at least one special character.";
        }
        return "password is valid.";
}

// use process.argv to get command line arguments
const args = process.argv.slice(2);
console.log(args);
const password = args[0];
console.log(validatePassword(password));


