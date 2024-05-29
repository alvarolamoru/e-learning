function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);
    setTimeout(totalTime, totalPeriod);
}

numCounter("Hours",31,100);
numCounter("StudentsYear",750,100);
numCounter("reenrollmentrate",76,50);