function refreshView(title, question) {
    $("#ques_no").text(title);
    $("#ques_desc").text(question);
    $("input[name='value'][value=0]").prop("checked", true).change();
}
onLoad(function() {
    var no = 0;
    $("#prev_button").click(function() {
        $("#next_button").text("다음 →");
        if (no == 1) $("#prev_button").hide();
        refreshView("질문 " + (--no), no + "번째 질문입니다.");
    });
    $("#next_button").click(function() {
        $("#prev_button").show();
        if (no == 8) $("#next_button").text("결과 보기");
        else if (no == 9) return;
        else $("#next_button").text("다음 →");
        refreshView("질문 " + (++no), no + "번째 질문입니다.");
    });
    refreshView("질문 " + no, no + "번째 질문입니다.");
    $("#prev_button").hide();
});