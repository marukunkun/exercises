function StopWatch() {
    let timeStart = 0
    let timeStop = 0

    this.start = function () {
        if(timeStart === 0) {
            timeStart = new Date()
        } else {
            console.log('The chrono has already started')
        }
    }

    this.stop = function () {
        if(timeStart !== 0) {
            timeStop = new Date()            
        } else {
            console.log('The chrono is already stopped')
        }
    }

    this.duration = function () {
        if(timeStop !== 0) {
            console.log(((timeStop - timeStart) / 1000).toFixed(1) + ' seconds')
        } else {
            console.log('You have to start or stop the chrono!')
        }
    }

    this.reset = function () {
        timeStart = 0
        timeStop = 0
    }
}

let chrono = new StopWatch