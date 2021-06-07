var alphabet = [
    ["a","i", "u","e","o"],
    ["ka","ki", "ku","ke","ko"],
    ["sa","shi", "su","se","so"],
    ["ta","chi", "tsu","te","to"],
    ["na","ni", "nu","ne","no"],
    ["ha","hi", "fu","he","ho"],
    ["ma","mi", "mu","me","mo"],
    ["ra","ri", "ru","re","ro"],
    ["ya","white", "yu","white","yo"],
    ["wa","white", "white","white","wo"],
    ["white","white", "un","white","white"],
];

var special = [
    ["chi","sa","so","to"]
];

var folder_name = "assets/gray_pics";

var current_quiz_list = [];
var current_quiz = []; 
var current_index = -1;

function update_quiz(){
    current_quiz = [];
    for (let index = 0; index < $(".alphabet_checkboxes").length; index++) {
        const element = $(".alphabet_checkboxes")[index];
        if($(element).prop('checked')){
            var alphabet_subset = alphabet[index];
            for (let j = 0; j < alphabet_subset.length; j++) {
                const word = alphabet_subset[j];
                current_quiz.push(word);
                
            }
        }
    }
    current_quiz_list = current_quiz;
}

function random_index(index){
    if(current_quiz.length == 1){
        return 0;
    } else {
        var random = index;
        while (random === index)
        {    
            random = Math.floor( Math.random() * current_quiz.length );
        }
        current_index = random;

        return random;
    }
}

$(document).ready(function(){
    $("#list_button").on("click",function(){
        $("#image_display_area").html('');
        $("#answer").hide();

        var string = '';
        for (let index = 0; index < current_quiz_list.length; index++) {
            if(index % 5 == 0){
                if(index != 0){
                    string += "</div>";
                }
                string += "<div class='row'>";
            }
            const current_word = current_quiz_list[index];


            string += '<div class="col-md-2">';
            
            
            if(current_word == "white"){
                string += "<img style='max-width:100%' src = 'assets/white.png' class='bordered_image'>";
                string += "<div class='image_name'></div>";
            } else {
                string += "<img style='max-width:100%' src = '" + folder_name + "/" + current_word +".png' class='bordered_image'>";
                string += "<div class='image_name'>" + current_word + "</div>";
            }
            
            string += "</div>";
        }
        string += '</div>';

        $("#image_list_area").html(string);
    });
});