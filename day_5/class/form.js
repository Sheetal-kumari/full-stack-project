
let form=document.getElementById("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let username=document.getElementById("username").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value
let conformpassword=document.getElementById("conformpassword").value

    if(password!==conformpassword){
        return alert("conform password not match")
    }
    if(password<"8"){
        return alert("password should bemore then 8")
    }

    let obj={
        username,email,password,conformpassword,
    };

    let userData =document.getElementById("userData")
    userData.style.width="60%"
    userData.style.height="200px"
    userData.style.padding="10px"
    userData.style.margin="auto"
    userData.style.border="2px solid black"
    userData.style.borderRadius="10px"

    let h2= document.createElement("h2");
    h2.innerText=obj.username

    let P1= document.createElement("p");
   P1 .innerText=obj.email

    let P2= document.createElement("p");
    P2.innerText=obj.password

    let P3= document.createElement("p");
    P3.innerText=obj.conformpassword

userData.append(h2,P1,P2,P3)
form.reset;
});
