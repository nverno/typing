export default class TypingSession {
  constructor(elementId) {
    this.elementId = elementId;
    this.nodes = null;
    this.activeIndex = 0;
    this.incorrect = 0;
    this.collateral = 0;
    this.misses = {};
    this.backtrack = false;
    this.seconds = 0;
    this.timer = null;
    this.paused = true;
    this.finished = false;
    this.handleInput = this.handleInput.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.stop();
    this.setBacktrack(false);
    this.setFinished(false);
    if (this.nodes) {
      Array.from(this.nodes).forEach(node => {
        node.classList.remove(
          'active',
          'incorrect',
          'collateral',
          'wasincorrect',
          'wascollateral'
        );
        node.classList.add('pending');
      });
    }
    this.misses = {};
    this.activeIndex = 0;
    this.incorrect = 0;
    this.collateral = 0;
    this.seconds = 0;
    this.paused = true;
    this.finished = false;
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
    if (remove)
      for (const cls of remove) {
        this.removeClass(cls);
      }
    if (add)
      for (const cls of add) {
        this.addClass(cls);
      }
  }

  activeChar() {
    return this.nodes[this.activeIndex].innerText;
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
      this.updateClasses({ add: ['collateral', 'wascollateral'] });
      ++this.collateral;
    } else {
      const c = this.activeChar();
      this.updateClasses({ add: ['incorrect', 'wasincorrect'] });
      ++this.incorrect;
      if (this.misses[c]) ++this.misses[c];
      else this.misses[c] = 1;
      this.setBacktrack(true);
    }
  }

  startTimer() {
    this.paused = false;
    this.timer = setInterval(() => {
      ++this.seconds;
    }, 1000);
  }

  stopTimer() {
    this.paused = true;
    clearInterval(this.timer);
  }

  start() {
    this.nodes = document.getElementById(this.elementId).childNodes;
    this.reset();
    this.startTimer();
    this.markActive();
    window.addEventListener('keydown', this.handleInput);
  }

  stop() {
    window.removeEventListener('keydown', this.handleInput);
    this.stopTimer();
  }

  pause() {
    if (this.paused) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  // session statistics
  report() {
    return {
      incorrect: this.incorrect,
      collateral: this.collateral,
      misses: this.misses,
    };
  }

  isFinished() {
    return !this.backtrack && this.activeIndex === this.nodes.length - 1;
  }

  setFinished(on) {
    this.finished = on;
    let cl = document.getElementById(this.elementId).classList;
    cl.remove('finished');
    if (on) {
      cl.add('finished');
      this.removeClass('active');
    }
  }

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
      } else {
        if (this.activeIndex < this.nodes.length - 1) ++this.activeIndex;
        else break;
      }
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
        if (this.isFinished()) {
          this.setFinished(true);
          this.stop();
          console.log(this.report());
        } else this.step({ newline: isNewline });
      } else {
        this.markIncorrect();
        this.step({ newline: isNewline });
      }
    }
  }
}
