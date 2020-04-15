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

    // const restoreText = () => {

    // }
    
    localStorage.getItem("description1");

    // $("#currentDay").text(moment(MM/DD));
    
    $(saveBtn1).click(function(){
        var serializedDescription = JSON.stringify(descriptionEl[0].value);
        localStorage.setItem("description1", serializedDescription); 
    })

    $(saveBtn2).click(function(){
        var serializedDescription = JSON.stringify(descriptionEl[1].value);
        localStorage.setItem("description2", serializedDescription); 
    })

    console.log(localStorage);
});