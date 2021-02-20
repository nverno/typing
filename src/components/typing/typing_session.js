export default class TypingSession {
  constructor(elementId) {
    this.elementId = elementId;
    this.nodes = null;
    this.activeIndex = 0;
    this.incorrect = 0;
    this.collateral = 0;
    this.backtrack = false;
    this.handleInput = this.handleInput.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.stop();
    this.setBacktrack(false);
    if (this.nodes) {
      Array.from(this.nodes).forEach(node => {
        node.classList.remove('active', 'incorrect', 'collateral');
        node.classList.add('pending');
      });
    }
    this.activeIndex = 0;
    this.incorrect = 0;
    this.collateral = 0;
  }

  // Manage classes of letter nodes
  addClass(cls) {
    let clist = this.nodes[this.activeIndex].classList;
    if (!clist.contains(cls)) clist.add(cls);
  }

  removeClass(cls) {
    this.nodes[this.activeIndex].classList.remove(cls);
  }

  updateClasses({ add, remove }) {
    for (const cls of remove) {
      this.removeClass(cls);
    }
    for (const cls of add) {
      this.addClass(cls);
    }
  }

  contains(cls) {
    return this.nodes[this.activeIndex].classList.contains(cls);
  }

  // Toggle b/w 'backtrack' state - this is turned on after typing errors
  setBacktrack(on) {
    console.log('backtrack on: ', on);
    this.backtrack = on;
    let ele = document.getElementById(this.elementId);
    ele.classList.remove('backtrack');
    if (on) ele.classList.add('backtrack');
  }

  // mark the letter node at point as active, removing previous states
  markActive() {
    this.updateClasses({
      add: ['active'],
      remove: ['pending', 'incorrect', 'collateral'],
    });
  }

  // called prior to incrementing cursor after incorrect input
  // marks cursor node as either incorrect or collateral
  // if this is the first incorrect input in sequence, toggles backtrack state
  markIncorrect() {
    if (this.backtrack) {
      this.addClass('collateral');
    } else {
      this.addClass('incorrect');
      this.setBacktrack(true);
    }
  }

  // TODO: needs to handle timer
  start() {
    this.nodes = document.getElementById(this.elementId).childNodes;
    this.reset();
    this.markActive();
    window.addEventListener('keydown', this.handleInput);
  }

  stop() {
    window.removeEventListener('keydown', this.handleInput);
  }

  // TODO: toggle timer
  pause() {}

  // TODO: return session statistics
  report() {}

  // move the cursor
  step({ newline, backspace }) {
    this.removeClass('active');
    do {
      if (backspace) {
        // if cursor has moved back past start of error, switch backtrack
        if (this.backtrack && this.contains('incorrect'))
          this.setBacktrack(false);
        this.updateClasses({
          add: ['pending'],
          remove: ['collateral', 'incorrect'],
        });
        if (this.activeIndex > 0) --this.activeIndex;
      } else ++this.activeIndex;
    } while (
      this.contains('skip') ||
      (newline && this.nodes[this.activeIndex].innerText.match(/\s/))
    );

    if (this.backtrack && this.contains('incorrect')) {
      this.setBacktrack(false);
    }
    this.markActive();
  }

  // Main event handler to process typing input
  handleInput(event) {
    if (event.ctrlKey || event.altKey || event.metaKey || event.key === 'Shift')
      return;
    event.preventDefault();

    const key = event.key;
    if (key === 'Backspace') {
      this.step({ backspace: true });
    } else {
      const target = this.nodes[this.activeIndex].innerText;
      const isNewline = key === 'Enter';
      if (
        !this.backtrack &&
        (key === target || (isNewline && target === '\n'))
      ) {
        console.log(`Correct: ${key} === ${target}`);
        if (this.backtrack) this.setBacktrack(false);
        this.step({ newline: isNewline });
      } else {
        console.log(`'${key}' is incorrect`);
        this.markIncorrect();
        this.step({ newline: isNewline });
      }
    }
  }
}
