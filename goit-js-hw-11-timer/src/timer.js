

const refs = { 
   days: document.querySelector('span[data-value="days"]'),
   hours: document.querySelector('span[data-value="hours"]'),
   mins: document.querySelector('span[data-value="mins"]'),
   secs: document.querySelector('span[data-value="secs"]'),
   timer:document.querySelector('#timer-1') 
  
}

class CountdownTimer {

  constructor({ selector, targetDate, intervalId=null }) {
   this.selector = selector;
   this.targetDate = targetDate;
    this.intervalId = intervalId;
    this.deltaTimer();
    this.start();
  } 
  selector() { 
   this.selector= refs.timer}
  start() {     
   
   this.intervalId = setInterval(() => { this.deltaTimer()  
    }, 1000) 
  }
  deltaTimer() {  const currentTime = Date.now();
      const delta = this.targetDate - currentTime;
      this.updateTimer(delta);
   if (delta <= 0) {
    this.stop();
       return;
    }
  }
  stop() { 
  clearInterval(this.intervalId);
 this.intervalId = null;
 this.updateTimer(0);
  }

updateTimer(time) {
const day = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hour = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const min = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const sec = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.days.textContent = `${day}`;
  refs.hours.textContent = `${hour}`;
  refs.mins.textContent = `${min}`;
  refs.secs.textContent = `${sec}`; 
}

 pad(value) { 
   return String(value).padStart(2, '0');
}}

  
  const timerRev = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('April, 18, 2021 0:00:00'),
  });

