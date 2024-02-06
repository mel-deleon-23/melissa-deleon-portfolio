// window.onload = entryLoaded; 

// var userComment = document.getElementById("comment");
// var userInput = document.getElementById("in_comment");
// var entryMsg = document.getElementById("userEntry");

// var textInput = localStorage.getItem("in_comment");
// var store = localStorage.getItem("b_store");
// var entryMsg = localStorage.getItem("userEntry");

// if(textInput !== null){
//     entryMsg.innerHTML = textInput;
// }

// function entryLoaded() {

//     var formHandle = document.forms.overwhelmText;

//     //onsubmit Function

//     formHandle.onsubmit = overwhelmText;

//     function overwhelmText() {
//         var textInput = formHandle.in_comment;

//         //get values from form
//         var userComment = document.getElementById("comment");
//         var entryMsg = document.getElementById("userEntry");


//         var textInput = localStorage.getItem("in_comment", textInput.value);


//         //console.log the form values
//         console.log(userComment);
        
//         //store values
//         var textInput = localStorage.getItem("in_comment");

//         if(textInput !== null){
//             entryMsg.innerHTML = textInput;
//         }

//         return false;

//     }

//     var deleteEntry = document.getElementById("destroyBtn");
//     deleteEntry.onclick = Delete;

//     function Delete(){
//         localStorage.clear();
//         window.location.reload();
//     }

// }

jQuery(window).on("load", function () {
    
    // STORE USER INPUT
    
        $('#storeBtn').on("click", function(){
            var getData = $('#comment').val();
            $('#userEntry').append("<div class='outbox'>" + getData + "<br><button class='bDestroy'>DESTROY</button></div>");

            $('#userEntry').css({"background-color": "#f0e68c", "color": "black", "font-family": "Kanit", "font-weight": "300", 
            "display": "block", "text-align": "center"});

            $('.outbox').css({"padding-top": "20px", "padding-bottom": "20px"});

            // $(button).css({"padding-top": "20px"});

            return false;
        });

    // DESTROY STORED INPUT
        // $('.bDestroy').on("click", function() {
        //     $(this).remove();
        // });

        // $('#userEntry').on("click", function() {
        //     $('#userEntry').remove();
        // });

        $(document).on("click", ".bDestroy", function() {
            // Remove the parent element of the clicked "DESTROY" button
            $(this).parent().remove();
        });
        

});