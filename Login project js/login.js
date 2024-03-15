
const login=()=>
{
let uname=document.getElementById("t1").value;


let upass=document.getElementById("t2").value;


let p=localStorage.getItem(uname);
let p1=sessionStorage.getItem(uname);
if(p==upass || p1==upass)
{
  Swal.fire('Welcome!', 'You have successfully logged in.', 'success');

}
else{
  Swal.fire('Oops!', 'Invalid details. Please try again.', 'error');

}

}

 