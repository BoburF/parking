// const start_btn = document.querySelector('.start_btn');
// const end_btn = document.querySelector('.end_btn');
// const count = document.querySelector('.result_btn');
// const p = document.querySelector('.p');
// const cnt = document.querySelector('.result');

// let i = 0

// // function time() {

// // }
// start_btn.addEventListener('click', () => {
//     start_btn.disabled = true
//     let time = setInterval(function () {
//         let po = p.innerHTML = `${i++} min`
//     }, 100)
//     end_btn.addEventListener('click', () => {
//         clearInterval(time)
//         start_btn.disabled = false
//     })

//     count.addEventListener('click', () => {
//         let num = +p.innerHTML.slice(0,-3)
//         if(num < 1){
//             cnt.innerHTML = `2$`
//         }else if(num > 1 && num < 60){
//             cnt.innerHTML = `5$`
//         }else if(num > 60){
//             let count = (num - 60) / 60
//             cnt.innerHTML = `${5 + ((Math.floor(count)) + 4)}$`
//             console.log(Math.ceil(count));
//         }
//     })
// })