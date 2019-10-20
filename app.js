// let date=new Date();
// var year=date.getFullYear();
// var month=date.getMinutes();
// var hours=date.getHours();
// var minutes=getMinutes();
// var seconds=date.getSeconds();
// var milliseconds=date.getMilliseconds();
// var time=date.getTime();
// var now=date.now();
// document.write(`${hours} :${minutes} :${seconds}`);
// document.write(time);
// document.write(now);



// create a clock

// var date =new Date();
// var h=date.getHours();
// var m=date.getMinutes();
// var s=date.getSeconds();
// document.getElementById("clock").innerHTML=`${h}:${m}:${s}`;

// setInterval( () =>{
//     var date=new Date;
//     var h=date.getHours();
//     var m=date.getMonth();
//     var s=date.getSeconds();
//    
//     // var format=date.Format()<12?'am':'pm';
//     document.getElementById("clock").innerHTML=`${h}:${m}:${s}:${format}`;
// },1000);

var username="pavan";
setTimeout(()=>{
    document.write(username);
},1000)          //it excute only onetime

//inbuilt function
setInterval(()=>{
    var date=new Date();
    var time=date.toLocaleTimeString();
    var d=date.toLocaleDateString();
    document.getElementById("clock").innerHTML=`${time}<br>${d}`
},1000);