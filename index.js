// code your solution here
function saturdayFun(Saturday = "roller-skate"){
    return `This Saturday, I want to ${Saturday}!`;
    }
    saturdayFun("bathe my dog")
    
    function mondayWork(work = "go to the office"){
        return `This Monday, I will ${work}.`;
    }
    mondayWork("work from home");
    
    
    function wrapAdjective(wrapper){
        return function(adjective) {
            return `You are ${wrapper}${adjective}${wrapper}!`;
        };
    }
    