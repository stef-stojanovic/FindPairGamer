class HomePage {
  constructor() {
    this.render()
  }

  render =() => {

    
    // API request to get games
      fetch(`http://localhost:3000/games`)
      .then(function(response) {
        return response.json();
      })
      .then((result) => {
        high_score_games = result.sort((a,b)=>{
          return b.score - a.score
        })
      }).then(()=>{
        // this.fetchUsers(high_score_games)
        this.everything_else(high_score_games)
      })
      }

    // fetchUsers() {
    //   fetch(`http://localhost:3000/users`)
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then((result) => {
    //     high_scoring_users = result;
    //   })
    // }

  everything_else() {
    points = 0;
    // Front Page
    let main_page_div = document.querySelector('#main_page_div');
    main_page_div.innerText = '';
    game_page_div.innerText = '';
    main_page_div.style.display = 'block';
    
    
    let title_div = document.createElement('div');
    title_div.setAttribute('id', 'home_page_title_div')
    main_page_div.append(title_div);
    
    let title_img = document.createElement('img');
    title_img.src = 'card_match.png';
    title_div.append(title_img);
    
    let memory_img = document.createElement('img');
    memory_img.src = 'memory_game.png';
    title_div.append(memory_img);
    
    // Start Button
    let startButton = document.createElement('button')
    startButton.setAttribute('id', 'start_game')
    startButton.innerHTML = "Start New Game"
    title_div.append(startButton)
    startButton.addEventListener('click', () => {
      this.typeInUser(title_div)
    })

    // High Score Table
    let highScoreDiv = document.createElement('div')
    let highScoreList = document.createElement('ol')
    let highScoreHeader = document.createElement('h2')
    highScoreHeader.innerHTML = "High Scores"
    for(let i = 0; i < Math.min(5, high_score_games.length); i++){
      let score = document.createElement('li')
      score.innerHTML = `Username : ${high_score_games[i].user.name} --- Score:${high_score_games[i].score}`
      highScoreList.append(score)
    }
    highScoreDiv.setAttribute('class', 'high_score_container')
    highScoreDiv.append(highScoreHeader, highScoreList)
    main_page_div.append(document.createElement('br'))
    main_page_div.append(highScoreDiv)
  }
  
  // Registering User
  typeInUser(title_div){
    let signInDiv;
    if(document.getElementById('sign_in_div') == null)
    {
      signInDiv = document.createElement('div')
      signInDiv.setAttribute('id', 'sign_in_div');
      }  
    else{
      signInDiv = document.getElementById('sign_in_div') 
      signInDiv.innerHTML= ""
    }
    // Creating Form
    let signInForm = document.createElement('form')
    signInForm.setAttribute('class', "user_form")
    signInDiv.append(document.createElement('br'))
    signInDiv.append(signInForm)
    
    // Creating Text Field and Line Break 
    let signInInput = document.createElement('input')
    signInInput.setAttribute('placeholder', "Enter your Username")
    signInInput.setAttribute('value', "")
    signInInput.setAttribute('type', "text")
    signInForm.append(signInInput)
    signInForm.append(document.createElement('br'))
    signInForm.append(document.createElement('br'))
    
    // Creating Submit Button
    let signInButton = document.createElement('input')
    signInButton.setAttribute('placeholder', "Enter your Username")
    signInButton.setAttribute('type', "submit")
    signInForm.append(signInButton)
    title_div.append(signInDiv)
    
    // Starting Game Page
    signInButton.addEventListener('click', (e)=>{
      e.preventDefault()
      userName = signInInput.value
      new GamePage(userName)
    })
  }
}

// Starting Home Page
document.addEventListener('DOMContentLoaded', () => {
  new HomePage()
})