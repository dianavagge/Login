const Sign_up=()=>
{

let uname=document.getElementById("t1").value;

let email=document.getElementById("t3").value;

let upass=document.getElementById("t2").value;
let cpass=document.getElementById("t4").value;

if(upass===cpass)
  { 
   localStorage.setItem(uname,upass,email)
   
   sessionStorage.setItem(uname,upass,email)
   Swal.fire('Success!', 'You have successfully signed up.', 'success');

  }
  else{
    Swal.fire('Oops!', 'Password does not match. Please try again.', 'error');
  }


}

const login=()=>
{
  location.href="login.html"
}