function clock() {
    const hoursBlock = document.querySelector('.hours');
    const minutesBlock = document.querySelector('.minutes');
    const secondsBlock = document.querySelector('.seconds');
    const deg = 6;

    setInterval(() => {
        const day = new Date()
        const hours = day.getHours() * 30
        const minutes = day.getMinutes() * deg
        const seconds = day.getSeconds() * deg


        hoursBlock.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
        minutesBlock.style.transform = `rotate(${minutes}deg)`;
        secondsBlock.style.transform = `rotateZ(${seconds}deg)`
    }, 0)
}

clock()


