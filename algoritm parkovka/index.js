const enter_btn = document.querySelector('.enter_btn');
const exit_btn = document.querySelector('.exit_btn');

let enterTime = null
let exitTime = null
let sum = 2

enter_btn.addEventListener('click', () => {

    const entrTime = new Date()

    enterTime = Math.abs((entrTime.getHours() * 60 + entrTime.getMinutes()))

})

exit_btn.addEventListener('click', () => {

    const extTime = new Date()

    exitTime = Math.abs((extTime.getHours() * 60 + extTime.getMinutes()))

    console.log(enterTime, exitTime);

    let parkingTime = exitTime - enterTime

    let parkingHours = Math.abs(Math.floor(parkingTime / 60))
    let parkingMinuts = Math.abs(parkingTime % 60)

    if (parkingMinuts > 1 && parkingHours >= 1) {
        for (let i = 0; i < parkingHours; i++) {
            sum += 4
        }
    }

    if (parkingMinuts >= 1) {
        sum += 3
    }
    console.log(parkingHours, parkingMinuts);
    console.log(sum);

})

