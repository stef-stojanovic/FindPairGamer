class GamePage {
    constructor() {

        this.createGamePage()
    }

    createGamePage() {
        
        body.innerText = ''
        

        let title_div = document.createElement('div');
        title_div.setAttribute('id', 'title');

        let card_area_container = document.createElement('div');
        card_area_container.setAttribute('class', 'card-area-container');
        card_area_container.setAttribute('style', 'text-align: center;');

        let card_area = document.createElement('div');
        card_area.setAttribute('style', 'justify-content: center; width: 50%; margin: auto;')
        card_area.setAttribute('id', 'card-area');
        card_area.setAttribute('class', 'row');

        let back_button = document.createElement('button');
        back_button.innerText = 'Back to Home Page';
        back_button.addEventListener('click', ()=> {
            
        })

        body.append(title_div, card_area_container, card_area);




        let title = document.getElementById('title')
        let header = document.createElement('h1'); 
        header.innerText = 'MATCH THE CARDS';
        title.append(header);
        let toy_cards = [
        
            {
              "id": 1,
              "name": "Woody",
              "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
            },
            {
              "id": 2,
              "name": "Buzz Lightyear",
              "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
            },
            {
              "id": 3,
              "name": "Mr. Potato Head",
              "image": "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
            },
            {
              "id": 4,
              "name": "Slinky Dog",
              "image": "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
            },
            {
              "id": 5,
              "name": "Rex",
              "image": "http://umich.edu/~chemh215/W11HTML/SSG5/ssg5.2/FRex.png",
            },
            {
              "id": 6,
              "name": "Bo Peep",
              "image": "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
            },
            {
              "id": 7,
              "name": "Hamm",
              "image": "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
            },
            {
              "id": 8,
              "name": "Little Green Men",
              "image": "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
            },
            {
              "id": 9,
              "name": "Lotso",
              "image": "https://vignette.wikia.nocookie.net/pixar/images/4/49/A61F0EF0-83A8-4E0D-B616-2E1ECE5C9062.png/revision/latest?cb=20181126205424",
            },
            {
                "id": 1,
                "name": "Woody",
                "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
              },
              {
                "id": 2,
                "name": "Buzz Lightyear",
                "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
              },
              {
                "id": 3,
                "name": "Mr. Potato Head",
                "image": "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
              },
              {
                "id": 4,
                "name": "Slinky Dog",
                "image": "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
              },
              {
                "id": 5,
                "name": "Rex",
                "image": "http://umich.edu/~chemh215/W11HTML/SSG5/ssg5.2/FRex.png",
              },
              {
                "id": 6,
                "name": "Bo Peep",
                "image": "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
              },
              {
                "id": 7,
                "name": "Hamm",
                "image": "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
              },
              {
                "id": 8,
                "name": "Little Green Men",
                "image": "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
              },
              {
                "id": 9,
                "name": "Lotso",
                "image": "https://vignette.wikia.nocookie.net/pixar/images/4/49/A61F0EF0-83A8-4E0D-B616-2E1ECE5C9062.png/revision/latest?cb=20181126205424",
              }
          ]
        
        function get_cards(deck) {
            deck.sort(()=>Math.random()-0.5)
            for (let i =0; i < deck.length; i++) {
              new Card(deck[i].name, deck[i].image, deck[i].id)
          }
        
        }
        
        
        get_cards(toy_cards);
    }
}

// Hard Code Card Decks
startButton = document.getElementById("new-toy-btn")
startButton.addEventListener('click', () => {
    new GamePage()
})
