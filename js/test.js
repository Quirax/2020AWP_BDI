function refreshView(title, question) {
    $("#ques_no").text(title);
    $("#ques_desc").text(question);
    $("input[name='value'][value=0]").prop("checked", true).change();
}
onLoad(function() {
    
});