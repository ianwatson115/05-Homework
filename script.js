$(document).ready(function(){

    var descriptionEl = $(".description");

    var saveBtn1 = $(".saveBtn1");
    var saveBtn2 = $(".saveBtn2");
    var saveBtn3 = $(".saveBtn3");
    var saveBtn4 = $(".saveBtn4");
    var saveBtn5 = $(".saveBtn5");
    var saveBtn6 = $(".saveBtn6");
    var saveBtn7 = $(".saveBtn7");
    var saveBtn8 = $(".saveBtn8");
    var saveBtn9 = $(".saveBtn9");

    const restoreText = () => {
        for(var i = 1; i < 10; i++) {
            var strNoQuotes = localStorage.getItem("description" + [i]).replace(/"/g, '');
            $(descriptionEl[i-1]).append(strNoQuotes);
        }
    }
    
    restoreText();
    
    $(saveBtn1).click(function(){
        var serializedDescription = JSON.stringify(descriptionEl[0].value);
        localStorage.setItem("description1", serializedDescription); 
    });

    $(saveBtn2).click(function(){
        var serializedDescription = JSON.stringify(descriptionEl[1].value);
        localStorage.setItem("description2", serializedDescription); 
    });

    $(saveBtn3).click(function(){
        var serializedDescription = JSON.stringify(descriptionEl[2].value);
        localStorage.setItem("description3", serializedDescription); 
    });

    $(saveBtn4).click(function(){
        var serializedDescription = JSON.stringify(descriptionEl[3].value);
        localStorage.setItem("description4", serializedDescription); 
    });

    $(saveBtn5).click(function(){
        var serializedDescription = JSON.stringify(descriptionEl[4].value);
        localStorage.setItem("description5", serializedDescription); 
    });

    $(saveBtn6).click(function(){
        var serializedDescription = JSON.stringify(descriptionEl[5].value);
        localStorage.setItem("description6", serializedDescription); 
    });

    $(saveBtn7).click(function(){
        var serializedDescription = JSON.stringify(descriptionEl[6].value);
        localStorage.setItem("description7", serializedDescription); 
    });

    $(saveBtn8).click(function(){
        var serializedDescription = JSON.stringify(descriptionEl[7].value);
        localStorage.setItem("description8", serializedDescription); 
    });

    $(saveBtn9).click(function(){
        var serializedDescription = JSON.stringify(descriptionEl[8].value);
        localStorage.setItem("description9", serializedDescription); 
    });

});