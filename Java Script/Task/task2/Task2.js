function gmete(parameter,spnid){
    console.log(parameter);
    console.log(parameter.value);
    if (parameter.value == "") {
       
         document.getElementById(spnid).innerHTML="<b>This Field is required</b>"
    } else {
      
         document.getElementById(spnid).innerHTML=""
    }
}