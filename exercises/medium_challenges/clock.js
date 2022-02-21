class Clock {
  constructor(hours, minutes) {
    this.totalMinutes = minutes + (hours * 60);
  }

  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  toString() {
    return `${this.addLeadingZero(this.getHours())}:${this.addLeadingZero(this.getMinutes())}`;
  }

  getHours() {
    return Math.floor(this.totalMinutes / 60);
  }

  getMinutes() {
    return this.totalMinutes - (this.getHours() * 60);
  }

  add(minutes) {
    this.totalMinutes += minutes;
    this.fixTotalMinutesRange();

    return this;
  }

  subtract(minutes) {
    this.totalMinutes -= minutes;
    this.fixTotalMinutesRange();

    return this;
  }

  isEqual(clock) {
    return this.totalMinutes === clock.totalMinutes;
  }

  fixTotalMinutesRange() {
    if (this.totalMinutes >= 1440) this.totalMinutes %= 1440;
    else if (this.totalMinutes < 0) this.totalMinutes += Math.ceil(Math.abs(this.totalMinutes / 1440)) * 1440;
  }

  addLeadingZero(time) {
    return String(time).padStart(2, '0');
  }
}

module.exports = Clock;