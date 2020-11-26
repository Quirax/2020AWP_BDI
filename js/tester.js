onLoad(function() {
    var score = new Array();
    var sum = 0;

    var no = 0;
    $("#prev_button").click(function() {
        score.pop();
        console.log(score);
        $("#next_button").text("다음 →");
        if (no == 1) $("#prev_button").hide();
        refreshView("질문 " + ((--no) + 1), no + "번째 질문입니다.");
    });
    $("#next_button").click(function() {
        $("#prev_button").show();
        score.push(parseInt($("input[name='value']:checked").val()));
        console.log(score);
        if (no == 8) $("#next_button").text("결과 보기");
        else if (no == 9) {
            for(i = 0; i < score.length; i++) sum += score[i];
            alert(sum);
            location.href = "result.html";
            return;
        } else $("#next_button").text("다음 →");
        refreshView("질문 " + ((++no) + 1), no + "번째 질문입니다.");
    });
    refreshView("질문 " + (no + 1), no + "번째 질문입니다.");
    $("#prev_button").hide();
});