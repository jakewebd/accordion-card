let button = document.querySelectorAll('.show-content');
let answer = document.querySelectorAll('.answer');
let question = document.querySelectorAll('.question');
let item = document.querySelectorAll('.accordion-item');
for (let i = 0; i < item.length; i++) {
    document.body.addEventListener('click', function (e) {
        if (e.target == item[i] | e.target == button[i] | e.target == question[i] ) {
            answer[i].classList.toggle('active');
            question[i].classList.toggle('qactive');
            button[i].classList.toggle('bactive');
        }
        else {
            answer[i].classList.remove('active');
            question[i].classList.remove('qactive');
            button[i].classList.remove('bactive');
        }

    })
}



