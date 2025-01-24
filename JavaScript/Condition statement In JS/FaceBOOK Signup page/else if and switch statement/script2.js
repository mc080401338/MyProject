var input = document.getElementById("box");
var form = document.getElementById("frm");

form.onsubmit = function ()
{
  switch(input.value)
  {
    case 'a' : {window.alert("vowel")};
    break;
    case 'e' : {window.alert("vowel")};
    break;
    case 'i' : {window.alert("vowel")};
    break;
    case 'o' : {window.alert("vowel")};
    break;
    case 'u' : {window.alert("vowel")};
    default: {window.alert("Consonent")};
  }
}