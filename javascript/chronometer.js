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
  twoDigitsNumber(number) {
    
    number = number <  10  ? "0" + number : number.toString();

    return number;
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
    const time = this.twoDigitsNumber();
    console.log(time);
  }
}

const test = new Chronometer 
test.currentTime = 301
test.getSeconds 
console.log(test.twoDigitsNumber());
console.log(test.splitClick());
