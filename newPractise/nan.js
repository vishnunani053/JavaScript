// function email(){
//    let name=document.getElementById("abc").value

//     if(name=="" && name.length<=5){
//         document.getElementById("emsg").innerHTML="enter email"
//     }
//     let pass=document.getElementById("efg").value
//     if(pass="" && pass.length<=5){
//       document.getElementById("pmsg").innerHTML="enter password"
//     }
// }



function email() {
    let name = document.getElementById('abc').value
    if (name == "" && name.length <= 5) {
        document.getElementById('emsg').innerHTML = "plss enter email ra lovday"
    }


    let pass = document.getElementById('efg').value
    document.getElementById('pmsg').innerHTML = "pls enter password"
}
