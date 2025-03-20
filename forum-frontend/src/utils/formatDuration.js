export default class FormatDuration {
  constructor(duration) {
    this.duration = duration;
  }

  format = (timestamp) => {
    if (this.duration[timestamp]) {
      if (this.duration[timestamp] > 1) {
        return `${this.duration[timestamp]} ${timestamp} ago`;
      } else {
        return `${this.duration[timestamp]}  ${timestamp.slice(0, -1)} ago`;
      }
    }
  };
}
