class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    setInterval(()=> {
      this.currentTime++;
      //check if callback throw error
    }, 1000);
  }
  getMinutes() {
    return Number(Math.floor(this.currentTime / 60).toFixed(0)) ;
  }
  getSeconds() {
    if(this.currentTime === 0) return 0;
    const seconds = (this.getMinutes())*60;
    return this.currentTime - seconds;
    
  }
  twoDigitsNumber() {

  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}

const test = new Chronometer 
test.currentTime = 500
test.getSeconds 
console.log(typeof test.getSeconds());
