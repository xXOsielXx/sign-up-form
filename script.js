const pswdInput = document.querySelector("#password");
const verifyPswdInput = document.querySelector("#verify-password");

pswdInput.addEventListener("input", () => {
	let pswdValidEntries = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	if (!pswdInput.value.match(pswdValidEntries)) {
		pswdInput.classList.remove("valid");
    	pswdInput.classList.add("invalid");
    	pswdInput.setCustomValidity(`
    		Invalid password

    		It must contain:
    		• 8-15 characters
    		• At least one lowercase letter
    		• At least one uppercase letter
    		• At least one numeric digit
    		• At least one special character
    	`);
	}
	else {
		pswdInput.classList.remove("invalid");
    	pswdInput.classList.add("valid");
    	pswdInput.setCustomValidity("");
	};
	pswdInput.reportValidity();
})

verifyPswdInput.addEventListener("input", () => {
  if (pswdInput.value !== verifyPswdInput.value) {
    verifyPswdInput.classList.remove("valid");
    verifyPswdInput.classList.add("invalid");
    verifyPswdInput.setCustomValidity("Passwords do not match");
  } else {
    verifyPswdInput.classList.remove("invalid");
    verifyPswdInput.classList.add("valid");
    verifyPswdInput.setCustomValidity("");
  };
  verifyPswdInput.reportValidity();
});