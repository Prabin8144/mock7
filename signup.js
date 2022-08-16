var btn = document.querySelector(".signbtn")
  var btn1 = document.querySelector(".loginbtn")
  var data = document.querySelector(".data")
  var logdata = document.querySelector(".logdata")
 
  btn1.addEventListener("click",function(){
    btn1.classList.add("signbtn")
    btn.classList.remove("signbtn")
    data.classList.add("sig")
    logdata.classList.remove("log")
  
  })
  btn.addEventListener("click",function(){
    btn1.classList.remove("signbtn")
    btn.classList.add("signbtn")
    logdata.classList.add("log")
    data.classList.remove("sig")
    
  })

  function signup(){
  
    var userDetails = JSON.parse(localStorage.getItem("userDetails")) || []


        let name  = document.getElementById("name").value
        let mail  = document.getElementById("mail").value
        let password  = document.getElementById("password").value
        let cpassword  = document.getElementById("cpassword").value
       let userObj = {
        name,
        mail,
        password,
        cpassword
       }

    userDetails.push(userObj);
    console.log(userDetails)
    
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    document.getElementById('name').value = ""
    
    document.getElementById('mail').value =""
    document.getElementById('password').value ="" 
    document.getElementById('cpassword').value ="" 

    alert(" signup successful.");  
}
  
 


// login


function checkLogin(){

    var userDetails = JSON.parse(localStorage.getItem("userDetails")) 


 
       let  email = document.getElementById("mail1").value
      let  password = document.getElementById("password1").value
       
    
    if(userDetails && userDetails.mail === email && userDetails.password === password){
        window.location = "../mock7/admin.html"
            return alert("Login successful.");
    }
            else if(email=="admin@gmail.com" && password=="masai"){
                window.location = "../mock7/admin.html"
                return alert("Login successful.");
            }
            else{
               return alert ("login failed")
            }
        }
