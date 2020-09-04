
//----------------------------------------------------//
let l = document.getElementById("level");// DOM cấp
let q = document.getElementById("display_Question"); // DOM Câu hỏi
let a = document.getElementById("0");// DOM đáp án A
let b = document.getElementById("1");// DOM đáp án B
let c = document.getElementById("2");// DOM đáp án C
let d = document.getElementById("3");// DOM đáp án D

var count = 0;
let score = 0;
let money = 0;
let level = 1;

function star_Game() { //khi nhấn bắt đầu
    document.getElementById("table").style.background = "blue";
    display_Question();
}

function display_Question() { // Hiển thị câu hỏi
    q.innerHTML = question[count];

    a.innerHTML = answers[count][0];
    b.innerHTML = answers[count][1];
    c.innerHTML = answers[count][2];
    d.innerHTML = answers[count][3];    

    document.getElementById("s").innerHTML = "Good look!";
}

function _answer(index) {// lấy giá trị và so sánh
    let str_Answer = document.getElementById(index).textContent;
   
    for (let i = 0; i < answer.length;i++) {
        if (answer[i] == str_Answer) {
            count++;
            score++;
            money = money + 100 + 50*i;
            document.getElementById("score").innerHTML = "Score: " + score;
            document.getElementById("money").innerHTML = money +"$";
            
            if(i == answer.length -1){ // hết câu hỏi reload lại trang web
                document.getElementById("score").innerHTML = "Score: " + score;
                document.getElementById("money").innerHTML = money +"$";
                alert("My score: " + score + ", money "+ money+"$");
                window.location.reload();
            }

            if(score == 5){ // tăng level
                l.innerHTML = "Level :" + (level + 1);
            }else if(score == 10){
                l.innerHTML = "Level :" + (level + 1);
            }
        }
         
    }
    display_Question();   
}
function _reload(){// chơi lại
    window.location.reload();
}
 