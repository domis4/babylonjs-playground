const clock = {
  before: performance.now(),
  getDelta: function () {
    var now = performance.now()
    var delta = now - this.before
    this.before = now
    return delta
  }
}
export default clock
