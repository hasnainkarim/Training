




var i=1;
var items = [];

function adddiv(){

  var newname = document.getElementById("npname").value;

  //var clsname= document.getElementById(i);
 
  i++;
  
  /*var f = document.getElementsByClassName("container");
  f[i].attr("id", "100" + i);
var z = document.getElementById ("Result");
z.innerHTML="jh";


 */

var textname = document.getElementById(100);

textname.innerHTML = newname;

  var elmnt = document.getElementById("-250");
  var cln = elmnt.cloneNode(true);
  var nm = document.getElementById("cont").appendChild(cln);



console.log(i);
var ii = parseInt(i);
console.log(ii);
var ulup = document.getElementById("ul"+(ii-1));
console.log(ulup);

ulup.setAttribute("id","ul"+i);

  
  nm.setAttribute("id",(i-1));
 
 nm.setAttribute("class","c"+(i-1))

nm.style["display"]="block";
var z = document.getElementById ("result");
z.innerHTML ='#'+i;

var getsb = document.getElementById('listadd');
var cln2 = getsb.cloneNode(true);
var  nm2 = document.getElementById("smcolorid").appendChild(cln2);
//nm2.innerHTML=newname;
nm2.setAttribute("id","-"+(i-1));
nm2.style["display"]="initial";
var listitem = document.getElementById("-"+(i-1));

var anchor = document.createElement('a');

anchor.href = "#"+(i-1);
anchor.innerText=(i-1)+".  "+newname;
listitem.appendChild(anchor);
listitem.removeChild(listitem.childNodes[0]);



 var ln1 = document.getElementById("ul"+(i-1)).querySelectorAll("li");
 console.log(ln1);

 for(d=0;d<=16;d++){
ln1[d].setAttribute("id",(i-1)+"."+(d+1));
 }
 /*
 var tln1 = document.ul.getElementById("1.1x");
 console.log(tln1); 
 tln1.setAttribute("id",i+".1");
 */

/*
 var ln2 = document.getElementById("1.2");
 ln2.setAttribute("id",i+".2");
 var ln3 = document.getElementById("1.3");
 ln3.setAttribute("id",i+".3");
 var ln4 = document.getElementById("1.4");
 ln4.setAttribute("id",i+".4");
 var ln5 = document.getElementById("1.5");
 ln5.setAttribute("id",i+".5");
 var ln6 = document.getElementById("1.6");
 ln6.setAttribute("id",i+".6");
 var ln7 = document.getElementById("1.7");
 ln7.setAttribute("id",i+".7");
 var ln8 = document.getElementById("1.8");
 ln8.setAttribute("id",i+".8");
 var ln9 = document.getElementById("1.9");
 ln9.setAttribute("id",i+".9");
 var ln10 = document.getElementById("1.10");
 ln10.setAttribute("id",i+".10");
 var ln11 = document.getElementById("1.11");
 ln11.setAttribute("id",i+".11");
 var ln12 = document.getElementById("1.12");
 ln12.setAttribute("id",i+".12");
 var ln13 = document.getElementById("1.13");
 ln13.setAttribute("id",i+".13");
 var ln14 = document.getElementById("1.14");
 ln14.setAttribute("id",i+".14");
 var ln15 = document.getElementById("1.15");
 ln15.setAttribute("id",i+".15");
 var ln16 = document.getElementById("1.16");
 ln16.setAttribute("id",i+".16");
 var ln17 = document.getElementById("1.17");
 ln17.setAttribute("id",i+".17");


 */

}


function removediv(){
  

  var toX = document.getElementById("npnameX").value;

  var textnameX = document.getElementById(100).textContent;
  //console.log(textnameX);

  var toXX = parseInt(toX);
  var stoX= "-"+toXX;
  //toX=toX+1;
 //var parent = document.getElementById("cont");
 var child = document.getElementById(toXX);
 var schild = document.getElementById(stoX);
 //parent.removeChild(toX);
console.log(child);
alert("Do you want to remove the project : "+ textnameX+" ?");
child.remove();
schild.remove();
// document.getElementById(toX).remove();



}

/*function remove(){

  var list = document.getElementById("j");   // Get the <ul> element with id="myList"
list.remove(list.lastChild); 
}*/

function openform() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openformX() {
  document.getElementById("myFormX").style.display = "block";
}

function closeFormX() {
  document.getElementById("myFormX").style.display = "none";
}
function loginremove() {
  document.getElementById("loginform").style.display = "none";
  document.getElementById("addbtn").style.display = "inline-block";
  document.getElementById("removebtn").style.display = "inline-block";
  document.getElementById("searchbtn").style.display = "inline-block";
  document.getElementById("inp").style.display = "initial";
  document.getElementById("uparrow").style.display = "initial";


}

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("sidenavcloser").style.display = "initial";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sidenavcloser").style.display = "none";

}
