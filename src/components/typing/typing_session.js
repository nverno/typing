export default class TypingSession {
  constructor(elementId) {
    this.elementId = elementId;
    this.nodes = null;
    this.activeIndex = 0;
    this.incorrect = 0;
    this.collateral = 0;
    this.handleInput = this.handleInput.bind(this);
  }

  start() {
    this.nodes = document.getElementById(this.elementId).childNodes;
    window.addEventListener('keydown', this.handleInput);
  }

  handleInput({ key }) {
    const target = this.nodes[this.activeIndex].innerText;
    if (key === target) {
      console.log(`Correct: ${key} === ${target}`);
    } else console.log(`'${key}' is incorrect`);
  }
}
