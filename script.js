$(document).ready(function(){

    var descriptionEl = document.getElementsByClassName("description")
    var saveBtn = document.getElementsByClassName("saveBtn");
    console.log(saveBtn);
    console.log(descriptionEl);

    $("#currentDay").text(moment());
    
    // $(saveBtn).click(function(){


    //     for (var i = 0; i < descriptionEl.length; i++) {
    //         localStorage.setItem("input", descriptionEl[i]);
    //     }
    //     console.log($("textarea").val());
    //     // localStorage.setItem("description", descriptionEl);
        
    // })













});