	// LOGIN PAGE

	let name=document.getElementById('name');
	let password=document.getElementById('password');
	let error=document.getElementById('error');
	let login=document.getElementById('login');
	let pass=document.getElementById('pas');


	pass.addEventListener("click",()=>{
		if(!password.value==""){
			if(password.type=="password"){
				password.type="text"
				pass.classList.remove("pas")
			}else{
				password.type="password"
				pass.classList.add("pas")
			}
		}
	})


   
    login.addEventListener("click",Login)

    function Login(e) {
    	e.preventDefault()

    	    if( name.value=="" || password.value==""){
    	    	error.classList.remove("hidde");
		        error.innerHTML="Fill all fields";

    	    } else if(name.value=="sharkz" && password.value=="1234"){
    			 error.classList.remove("hidde");
		        error.innerHTML="login succefull";
		        window.location="home.html";

			}else{
		        error.classList.remove("hidde");
		        error.innerHTML="Incorrect username or password ";
			}
    
    }


