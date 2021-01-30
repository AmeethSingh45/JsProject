const errorMessage = (message, type)=>{
    document.querySelector(`#${type === "userName"?"userNameErrorMsg":"passwordErrorMsg"}`).innerHTML = message;
}

const inputFieldValidation = (e,inputType)=>{
    const userInput = e.target.value;
    if(!userInput){
        errorMessage(`please enter ${inputType ==="userName"?"user name":"password"}`,inputType);
    } else if(userInput && userInput.length < 6 ){
        errorMessage(`${inputType ==="userName"?"user name":"password"} must be minimum 6 characters`,inputType);
    } else{
        errorMessage("",inputType)
    }
}


const onLoadCheck = ()=>{
  const userName=  document.querySelector("#userName").value;
   const password =  document.querySelector("#password").value;
   const btnElm = document.querySelector("#saveBtn");
    if(btnElm){
       if(userName.length  < 6 || password.length < 6){
        btnElm.disabled = true ;
       } else {
        btnElm.disabled = false ;
       }
    }
}
window.onload = onLoadCheck();