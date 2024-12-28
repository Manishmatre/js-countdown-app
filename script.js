
const endDate = "01 Jan 2025 00:00 AM";
// time 

document.getElementById("time").innerText = endDate;
 const inputs = document.querySelectorAll("input");
function clock(){


    const end = new Date(endDate);
    const now = new Date();

    // console.log(end);
    // console.log(now);

    const diff =( end - now)/1000;
    console.log(diff);

    if(diff < 0){
        
        return
    } ;
 
    // Days 
      let days = Math.floor(diff/3600/24) ;
          console.log(days);

          inputs[0].value = days;
      

    //hours

    let hours =  Math.floor((diff/3600) % 24 ) ;
    console.log(hours);

          inputs[1].value = hours;

    //Minutes
    let minutes =  Math.floor((diff/60) % 60) ;
    console.log(minutes);

            inputs[2].value = minutes;
    //sec

    let secound =  Math.floor((diff)% 60) ;
    console.log(secound);

             inputs[3].value = secound;
}

clock();

setInterval(
    () => {
        clock()

    }
    ,
    1000
)