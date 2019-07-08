class HomePage {
  constructor() {
    
    this.loadHomePage()
  }
  
  loadHomePage() {
    
    let startButton = document.getElementById("new-toy-btn")
    startButton.addEventListener('click', () => {
      let startForm = document.querySelector('.container')
      startForm.style.display = 'block'
      let form = document.querySelector("input.submit")
      form.addEventListener('click', (e) => {
        e.preventDefault()
        new GamePage()
      })

      // form.addEventListener('click', startGame)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new HomePage()
})
