var form = document.getElementById("fom");
var user = document.getElementById("username");
var user_m = document.getElementById("u_msg");
var pass = document.getElementById("password");
var pass_m = document.getElementById("p_msg");

form.onsubmit = function()
{
  if(user.value == "" && pass.value == "")
    {
      user_m.innerHTML = "Empty Field";
      pass_m.innerHTML = "Empty Field";
      return false 
    }
  if(user.value == "")
  {
    user_m.innerHTML = "Empty Field";
    return false;
  }
  if(pass.value == ""){
    pass_m.innerHTML = "Empty Field";
    return false;
  }
  if(user.value == "amit" && pass.value == "123")
  {
    window.location = "https://www.google.com";
    return false;
  }
  if(user.value!= "amit")
  {
    user_m.innerHTML = "User Not Found";
    return false;
  }
  if(pass.value != "123")
  {
    pass_m.innerHTML = "Password does Not Match";
    return false;
  }
 
}