window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "rgb(101, 221, 165)",
        "rgb(69, 182, 219)",
        "lawngreen",
        "indigo",
        "red",
        "#ffeb3b"

    ]

    console.log(sounds);

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //Function for bubbles

    function createBubbles(index) {
        var bubbles = document.createElement("div");
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = `jump ${time}s ease`;
        bubbles.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    }
});

// time change
let time = 1;
let header = document.getElementById('header');

let timeChange = document.createElement('h3');
timeChange.className = 'time-change';
timeChange.textContent = `Time:${time}s`;
header.appendChild(timeChange);

//speed and slow
const speedBtn = document.querySelector('#speed');
const slowBtn = document.querySelector('#slow');
console.log(speedBtn,slowBtn);

const speed=()=> {
    time+=1;
    timeChange.innerHTML= `Time:${time}s`;
    console.log(time);
}
const slow=()=> {
    if(time>1) {
        time-=1;
    }
    timeChange.innerHTML= `Time:${time}s`;
    console.log(time);
}
speedBtn.addEventListener('click',speed)
slowBtn.addEventListener('click',slow)

