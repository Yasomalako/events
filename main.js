// function some(){
//     // alert("Hi there");
//     var x = document.getElementById('para').innerHTML= 'itzlahti';}
//    document.getElementById("para").style.color="blue"
// function boss(){
//     var x = document.getElementsByClassName('.xox').innerHTML= 'yaso the boss';}
// function beast(){
//     document.getElementsByTagName('h2').innerHTML= 'is the beast';}
//1/
// function printAlert(){
//     alert("u made it")
// }
//2//
// function printMyname(){
//     console.log("yaso")
// }
//3//
// function printMyname(){
//     var color = document.getElementById("blue");
//     color.style.color="blue"
// }
//4//
// function chengeh1(){
// var size = document.getElementById('blu');
// size.style.height='100px'
// }
//5//
// function popay(){
//     var chenge = document.getElementById('first');
//     chenge.innerText= 'shalom'
//     console.log('nnqw')
// }
//6//
// function printUserName(){
// var printer = document.getElementById("put");
// var parag = document.getElementById("par")
// parag.innerHTML= printer.value

// };

// function name(){
// var button = document.getElementById("btn");

// }
//7//
// window.onload = () => {
//     
//     var myDate = new Date("2022-05-01T11:00+10:00");
//     if (myDate.getTime() < 12) {
//         document.body.style.backgroundColor = "yellow";
//         document.getElementById("para").innerText = 'have a good day';

//     }
//     else {
//         document.body.style.backgroundColor = "blue";
//         document.getElementById("para").innerText = 'have agood afternoon';
//     }
// }
//8//
window.onload = function () {
    var userAeg = prompt('add your age please')
}
function print(){
    
    if(userAeg<18){
        document.getElementsById('para').innerText = 'wellcome';
        document.body.style.backgroundColor = 'red';
    }
    else{
        document.getElementById('para').innerText = 'wellcome';
        document.body.style.backgroundColor = 'blue'
    }
}


