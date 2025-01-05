var hours = document.querySelector(".hh");
var min = document.querySelector(".mm");
var sec = document.querySelector(".sec");
var id;


var start = document.querySelector("#start");
var resume = document.querySelector("#resume");
var stop = document.querySelector("#stop");
var reset = document.querySelector("#reset");

resume.style.display = "none";
stop.style.display = "none";
reset.style.display = "none";

function watchStartKara(){

    start.style.display="none";
    stop.style.display="inline";
    resume.style.display="inline";

    id=setInterval(()=>{
        updateSec();
    },1000);
}

function watchStopKara()
{
    stop.style.display="none";
    reset.style.display="inline";

    clearInterval(id);
}

function resumeWatchKara()
{
    stop.style.display = "inline";
    reset.style.display = "none";

    id = setInterval(() => {
    updateSec();
  }, 1000);
}

function resetWatchKara(){

    sec.innerText ="00";
    min.innerText ="00";
    hours.innerText ="00";

    resume.style.display="none";
    reset.style.display="none";
    start.style.display="inline";
}
function updateSec()
{
    var s = sec.innerText;
    s++;
    if(s < 10){
        sec.innerText = "0" + s;
    }
    else if(s < 60){
        sec.innerText = s;
    }
    else if(s == 60){
        sec.innerText = "00";
        updateMin();
    }
}

    function updateMin(){
        var m = sec.innerText;
        m++;
        if(m < 10){
            min.innerText = "0" + m;
        }
        else if(m < 60){
            min.innerText = m;
        }
        else if(m == 60)
            {
                min.innerText = "00";
                updateHours();
    
        }

        function updateHours()
        {
            var h = sec.innerText;
            h++;
            if(h < 10){
                hours.innerText = "0" + h;
            }
            else if(h < 24){
                hours.innerText = h;
            }
            else if(h == 24)
            {
                    hours.innerText = "00";
            }
        }
 }