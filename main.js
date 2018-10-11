class Name {
  constructor() {
    this.letterNodes = []
    this.appendLetters('emilymalecbrown')
  }

  randomLocationInViewport() {
    return { x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 100)}
  }

  createLetterDiv(letter, x, y) {
    const div = document.createElement('div')

    div.className = letter
    div.innerHTML = letter
    div.style.position = 'absolute'
    div.style.left = x + '%'
    div.style.top = y + '%'
    div.style.transition = 'top 3.5s';
    div.style.transition = 'left 3.5s';

    return div
  }

  appendLetters(word) {
    word = word.split('')

    word.forEach(letter => {
      const { x, y } = this.randomLocationInViewport()

      const div = this.createLetterDiv(letter, x, y)
      const parentDiv = document.getElementById('name')

      this.letterNodes.push(div)
      parentDiv.appendChild(div)
    })

    setTimeout(() => this.centerLetters(), 2000)
  }

  centerLetters() {
    let percentageTop = 50;
    let percentageLeft = 15;

    this.letterNodes.forEach(letter => {
      letter.style.top = percentageTop + '%'
      letter.style.left = percentageLeft + '%'

      percentageLeft = percentageLeft + 5
    })
  }
}

new Name()
