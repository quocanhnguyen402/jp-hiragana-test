$(document).ready(function(){
    $(".alphabet_checkboxes").change(function (e) { 
        update_quiz()
    });

    $("#alphabet_checkboxes_all").change(function (e) {
        var state = $("#alphabet_checkboxes_all").prop("checked");
        for (let index = 0; index < $(".alphabet_checkboxes").length; index++) {
            var check_box = $(".alphabet_checkboxes")[index];
            $(check_box).prop('checked', state);
        }
        update_quiz()
    });
});