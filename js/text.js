$(document).ready(function(){
    $("#suffle_text_button").on("click",function(){
        if(current_quiz.length !== 0){
            var index = random_index(current_index);
            var current_word = current_quiz[index];

            var string = "<img src = 'assets/white.png' class='bordered_image'>";
            $("#image_display_area").html(string);

            $("#answer").html(current_word.split('.')[0]);
            $("#answer").show();
            $("#image_list_area").html('');
        }
    });

    $("#answer_text_button").on("click",function(){
        $("#image_display_area").show();

        var string = "<img src = '" + folder_name + "/" + current_quiz[current_index] +".png' class='bordered_image'>";
        $("#image_display_area").html(string);
        $("#image_display_area").show();
    });
});