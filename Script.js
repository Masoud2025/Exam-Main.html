var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "وسیع ترین قاره جهان کدام است؟",
		"options" : [
			{"a": "آسیا", 
			 "b":"اروپا", 
			 "c":"آمریکا", 
			 "d":"آفریقا"}
			],
		"answer":"آسیا",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "ایران چند استان دارد؟",
		"options" : [
			{"a": "28", 
			 "b":"29", 
			 "c":"31"}
			],
		"answer":"31",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "هیتلر کجا بدنیا آمده است؟",
		"options" : [
			{"a": "ایران", 
			 "b":"المان", 
			 "c":"امریکا"}
			],
		"answer":"المان",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "تقریبا چند درصد مردم جهان چپ دست هستند؟",
		"options" : [
			{"a": "30", 
			 "b":"15"
			}
			],
		"answer":"15",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "دوران حاملگی فیل چند ماه است؟",
		"options" : [
			{"a": "15", 
			 "b":"22",
			 "c":"30",
			 "d":"9",
			}
			],
		"answer":"22",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "چند درصد بدن ما آب است؟",
		"options" : [
			{"a": "30", 
			 "b":"80",
			 "c":"60",
			}
			],
		"answer":"60",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "پایتخت کشور استرالیا کدام است؟",
		"options" : [
			{"a": "ملبورن", 
			 "b":"سیدنی",
			 "c":"کنبرا",
			}
			],
		"answer":"کنبرا",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "وسیع ترین صحرای جهان کدام است؟",
		"options" : [
			{"a": "صحرای بزرگ آفریقا", 
			 "b":"زاپالانکا",
			 "c":"گوبی",
			 "d":"موهاوی",
			}
			],
		"answer":"صحرای بزرگ آفریقا",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "چند سیاره در منظومه شمسی ما وجود دارد؟",
		"options" : [
			{"a": "5", 
			 "b":"9",
			 "c":"8",
			 "d":"4"
			}
			],
		"answer":"8",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "کشور مصر در کدام قاره است؟",
		"options" : [
			{"a": "افریقا", 
			 "b":"اسیا",
			 "c":"امریکای شمالی",
			 "d":"امریکای جنوبی",
			}
			],
		"answer":"افریقا",
		"score":0,
		"status": ""
	},
	]
}
var quizApp = function() {
	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>نمره شما: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b id = answer>جواب صحیح:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>نمره:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}
var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	
