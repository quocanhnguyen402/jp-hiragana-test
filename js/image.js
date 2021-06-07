$(document).ready(function(){
    $("#suffle_button").on("click",function(){
        if(current_quiz.length !== 0){
            var index = random_index(current_index);
            var current_word = current_quiz[index];

            if(current_word == "white"){
                var string = "<img src = 'assets/white.png' class='bordered_image'>";
            } else {
                var string = "<img src = '"+folder_name+"/"+ current_word +".png' class='bordered_image'>";
            }
            
            $("#image_display_area").html(string);

            $("#answer").html(current_word.split('.')[0]);
            $("#answer").hide();
            $("#image_list_area").html('');

            current_quiz = current_quiz.filter(item => item !== current_word)
        }
    });

    $("#answer_button").on("click",function(){
        $("#answer").show();
    });
});