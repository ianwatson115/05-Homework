$(document).ready(function(){

    const descriptionEl = $(".description");

    const saveBtn1 = $(".saveBtn1");
    const saveBtn2 = $(".saveBtn2");
    const saveBtn3 = $(".saveBtn3");
    const saveBtn4 = $(".saveBtn4");
    const saveBtn5 = $(".saveBtn5");
    const saveBtn6 = $(".saveBtn6");
    const saveBtn7 = $(".saveBtn7");
    const saveBtn8 = $(".saveBtn8");
    const saveBtn9 = $(".saveBtn9");

    $("#currentDay").text(moment().format("dddd Do MMMM YYYY"));

    const restoreText = () => {
        for(var i = 1; i < 10; i++) {
            if (localStorage.getItem("description" + [i]) != null){
                const strNoQuotes = localStorage.getItem("description" + [i]).replace(/"/g, '');
                $(descriptionEl[i-1]).append(strNoQuotes);
            }
        }
    }

    const checkTime = () => {
        const timeBlock = $(".time-block");
        const hourBlocks = jQuery.makeArray(timeBlock);

        //for the time blocks before the current hour is 
        for(var i = 0; i < hourBlocks.length; i ++) {
            if (moment().isAfter(moment().hour(i+9))) {
                $(hourBlocks[i]).find(descriptionEl).addClass("past");
            } else if(moment().isSame(moment().hour(i+9))) {
                $(hourBlocks[i]).find(descriptionEl).addClass("present");
            } else { 
                $(hourBlocks[i]).find(descriptionEl).addClass("future");
            }
        }
    }
    
     restoreText();
    checkTime();
    
    $(saveBtn1).click(function(){
        const serializedDescription = JSON.stringify(descriptionEl[0].value);
        localStorage.setItem("description1", serializedDescription); 
    });

    $(saveBtn2).click(function(){
        const serializedDescription = JSON.stringify(descriptionEl[1].value);
        localStorage.setItem("description2", serializedDescription); 
    });

    $(saveBtn3).click(function(){
        const serializedDescription = JSON.stringify(descriptionEl[2].value);
        localStorage.setItem("description3", serializedDescription); 
    });

    $(saveBtn4).click(function(){
        const serializedDescription = JSON.stringify(descriptionEl[3].value);
        localStorage.setItem("description4", serializedDescription); 
    });

    $(saveBtn5).click(function(){
        const serializedDescription = JSON.stringify(descriptionEl[4].value);
        localStorage.setItem("description5", serializedDescription); 
    });

    $(saveBtn6).click(function(){
        const serializedDescription = JSON.stringify(descriptionEl[5].value);
        localStorage.setItem("description6", serializedDescription); 
    });

    $(saveBtn7).click(function(){
        const serializedDescription = JSON.stringify(descriptionEl[6].value);
        localStorage.setItem("description7", serializedDescription); 
    });

    $(saveBtn8).click(function(){
        const serializedDescription = JSON.stringify(descriptionEl[7].value);
        localStorage.setItem("description8", serializedDescription); 
    });

    $(saveBtn9).click(function(){
        const serializedDescription = JSON.stringify(descriptionEl[8].value);
        localStorage.setItem("description9", serializedDescription); 
    });

});