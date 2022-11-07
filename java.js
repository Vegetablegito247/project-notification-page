let notNum = document.querySelector('.notNum');
let mark = document.querySelector('.mark');

// notification
let not_1 = document.querySelector('.not-1');
let not_2 = document.querySelector('.not-2');
let not_3 = document.querySelector('.not-3');
let not_4 = document.querySelector('.not-4');
let not_5 = document.querySelector('.not-5');
let not_6 = document.querySelector('.not-6');
let not_7 = document.querySelector('.not-7');

// circle
let not_1_circle = document.querySelector('.not-1 .fa-circle');
let not_2_circle = document.querySelector('.not-2 .fa-circle');
let not_3_circle = document.querySelector('.not-3 .fa-circle');
let not_4_circle = document.querySelector('.not-4 .fa-circle');
let not_5_circle = document.querySelector('.not-5 .fa-circle');
let not_6_circle = document.querySelector('.not-6 .fa-circle');
let not_7_circle = document.querySelector('.not-7 .fa-circle');

let num = 7;
notNum.innerHTML = num;
console.log(notNum);

mark.addEventListener('click', () => {
    not_1.style.backgroundColor = 'white';
    not_2.style.backgroundColor = 'white';
    not_3.style.backgroundColor = 'white';
    not_4.style.backgroundColor = 'white';
    not_5.style.backgroundColor = 'white';
    not_6.style.backgroundColor = 'white';
    not_7.style.backgroundColor = 'white';

    not_1_circle.style.display = 'none';
    not_2_circle.style.display = 'none';
    not_3_circle.style.display = 'none';
    not_4_circle.style.display = 'none';
    not_5_circle.style.display = 'none';
    not_6_circle.style.display = 'none';
    not_7_circle.style.display = 'none';
    num = 0;
    notNum.innerHTML = 0;
    console.log(mark)
})

// not_1.addEventListener('click', () => {
//     not_1.style.backgroundColor = 'white';
//     not_1_circle.style.display = 'none';
//     if (num > 1 && num <=2) {
//         num--
//         notNum.innerHTML = num;
//     }
//     else if (num > 2 && num <=3) {
//         num--
//         notNum.innerHTML = num;
//     }
//     else if (num > 3 && num <=4) {
//         num--
//         notNum.innerHTML = num;
//     }
//     else if (num > 4 && num <=5) {
//         num--
//         notNum.innerHTML = num;
//     }
//     else if (num > 5 && num <=6) {
//         num--
//         notNum.innerHTML = num;
//     }
//     else if (num > 6 && num <= 7) {
//         num--
//         notNum.innerHTML = num;
//     }
// });

// not_2.addEventListener('click', () => {
//     not_2.style.backgroundColor = 'white';
//     not_2_circle.style.display = 'none';
//     notNum.innerHTML = num--;
// });

// not_3.addEventListener('click', () => {
//     not_3.style.backgroundColor = 'white';
//     not_3_circle.style.display = 'none';
//     notNum.innerHTML = num--;
// });

// not_4.addEventListener('click', () => {
//     not_4.style.backgroundColor = 'white';
//     not_4_circle.style.display = 'none';
//     notNum.innerHTML = num--;
// });

// not_5.addEventListener('click', () => {
//     not_5.style.backgroundColor = 'white';
//     not_5_circle.style.display = 'none';
//     notNum.innerHTML = num--;
// });

// not_6.addEventListener('click', () => {
//     not_6.style.backgroundColor = 'white';
//     not_6_circle.style.display = 'none';
//     notNum.innerHTML = num--;
// });

// not_7.addEventListener('click', () => {
//     not_7.style.backgroundColor = 'white';
//     not_7_circle.style.display = 'none';
//     notNum.innerHTML = 6;
// });

let not_num = []
let not_Array = [not_1, not_2, not_3, not_4, not_5, not_6, not_7];

for (let i = 0; i < not_Array.length; i++) {
    const element = not_Array[i];
    not_num.push(element);
    not_num[0].addEventListener('click', () => {
        not_1.style.backgroundColor = 'white';
        not_1_circle.style.display = 'none';
        num--;
        notNum.innerHTML = num;
    });
    console.log(element);
};
console.log(not_num);