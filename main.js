class Name {
  constructor() {
    this.nameNodes = []
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

    return div
  }
  
  appendLetters(word) {
    word = word.split('')
    
    word.forEach(letter => {
      const { x, y } = this.randomLocationInViewport() 
  
      const div = this.createLetterDiv(letter, x, y)
      const parentDiv = document.getElementById('name')

      this.nameNodes.push(div)
      parentDiv.appendChild(div)
    })
  }
}

new Name()