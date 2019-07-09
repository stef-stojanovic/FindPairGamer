// class HomePage {
//   constructor() {
    
//     this.loadHomePage()
//   }
  
//   loadHomePage() {
    
//     let startButton = document.getElementById("new-toy-btn")
//     startButton.addEventListener('click', () => {
//       let startForm = document.querySelector('.container')
//       startForm.style.display = 'block'
//       let form = document.querySelector("input.submit")
//       form.addEventListener('click', (e) => {
//         e.preventDefault()
//         new GamePage()
//       })
      
//       // form.addEventListener('click', startGame)
//     })
//   }
// }


class HomePage {
  constructor() {
    this.render()
  }

  render() {
    
    let main_page_div = document.querySelector('#main_page_div');
    main_page_div.innerText = '';
    game_page_div.innerText = '';
    
    let title_div = document.createElement('div');
    title_div.setAttribute('id', 'home_page_title_div')
    main_page_div.append(title_div);
    
    let title_img = document.createElement('img');
    title_img.src = 'card_match.png';
    title_div.append(title_img);
    
    let memory_img = document.createElement('img');
    memory_img.src = 'memory_game.png';
    title_div.append(memory_img);
    
    // Hard Code Card Decks
    let startButton = document.createElement('button')
    startButton.setAttribute('id', 'start_game')
    startButton.innerHTML = "Start New Game"
    main_page_div.append(startButton)
    startButton.addEventListener('click', () => {
        new GamePage()
    })

    // let signInDiv = document.createElement('div')
    // let signInInput = document.createElement('input')
    // signInInput.setAttribute('value', "Submit")
    // signInInput.setAttribute('type', "text")
    // let signInButton = document.createElement('input')
    // signInInput.setAttribute('value', "Submit")
    // signInInput.setAttribute('type', "text")
    // signInDiv.append(signInInput)
    // main_page_div.append(signInDiv)



    
  //   <!-- <div class="container">
  //   <form class="add-toy-form" style="">
  //     <h3>Create a toy!</h3>

  //     <input type="text" name="name" value="" placeholder="Enter your username" class="input-text">
  //     <br>
  //     <input type="submit" name="submit" value="Create New Toy" class="submit">
  //   </form>
  // </div>
  // <p style='text-align:center'> <button id='new-toy-btn'>Start a new game!</button></p> -->


  }
}

document.addEventListener('DOMContentLoaded', () => {
  new HomePage()
})