const form =document.getElementById('form');


form.addEventListener('submit',e=>{
	e.preventDefault();


// check for email validation
	const emailValue=form['email'].value;

	if (!emailValue){
		// empty message
	}else if(!isValidEmail(emailValue)){
		// not valid email
	}else{
		//submit it
	}
});



// function
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());