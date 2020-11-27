onLoad(function() {
    var score = new Array();
    var sum = 0;

    var no = 0;
    $.getJSON("data/test.json", function(data) {
        $("#prev_button").click(function() {
            score.pop();
            console.log(score);
            $("#next_button").text("다음 →");
            if (no == 1) $("#prev_button").hide();
            refreshView("질문 " + ((--no) + 1), data.questions[no].title);
        });
        $("#next_button").click(function() {
            $("#prev_button").show();
            s = parseInt($("input[name='value']:checked").val());
            if (data.questions[no].isReverse) s = (data.options.length - 1) - s;
            score.push(s);
            console.log(score);
            if (no == data.questions.length - 2) $("#next_button").text("결과 보기");
            else if (no == data.questions.length - 1) {
                for(i = 0; i < score.length; i++) sum += score[i];
                location.href = "result.html";
                return;
            } else $("#next_button").text("다음 →");
            refreshView("질문 " + ((++no) + 1), data.questions[no].title);
        });
        
        for(i = 0; i < data.options.length; i++) {
            i_str = Number(i).toString();
            $("#answer_radios").append('<input type="radio" name="value" value="' + i_str + '" id="value_' + i_str + '" />');
            $("#answer_labels").append('<label for="value_' + i + '">' + data.options[i].replace(/\n/g, "<br/>") + '</label>');
        }
        refreshView("질문 1", data.questions[0].title);
        $("#prev_button").hide();
    });
});