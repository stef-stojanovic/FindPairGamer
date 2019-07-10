class GamePage {
    constructor(userName) {
        
        this.userName = userName
        this.render()
        this.timer()
        
        
    }
    
    render() {

        let total_moves = 0;
        
        // Locate game_page_div and clear contents, hide main_page_div display
        let game_page_div = document.querySelector('#game_page_div');
        game_page_div.innerText = '';
        main_page_div.style.display = 'none';

        // Create div to place title, back button, and score
        let game_div_row = document.createElement('div');
        game_div_row.setAttribute('class', 'row')
    
        // Create div and assign id game_title_div
        let game_title_div = document.createElement('div');
        game_title_div.setAttribute('id', 'game_title_div');
        game_title_div.setAttribute('class', 'col');

        // Create headers
        let h1 = document.createElement('h1');
        h1.innerText = `Good Luck ${this.userName}`;
        game_title_div.append(h1);
        
        let h3 = document.createElement('h3');
        h3.setAttribute('id', 'focus')
        h3.innerText = 'focus!!!';
        game_title_div.append(h3);

        // Back to Home Page Button
        let back_to_home = document.createElement('button');
        back_to_home.innerText = 'Home Page';
        back_to_home.setAttribute('id', 'back_to_home');
        back_to_home.addEventListener('click' , () => {
            new HomePage()
        })
        game_title_div.append(back_to_home);

        // Create Flex-Wrap div to put cards in
        let div_flex = document.createElement('div');
        div_flex.setAttribute('class', 'flex-wrap');
        game_page_div.append(game_div_row, div_flex);
        game_div_row.append(game_title_div);

        // Create # of moves element
        let total_moves_div = document.createElement('div');
        total_moves_div.setAttribute('id', 'total_moves_div');
        total_moves_div.setAttribute('class', 'col');

        let total_moves_num = document.createElement('h3');
        total_moves_num.setAttribute('id', 'total_moves_num');
        total_moves_num.innerText = `moves: ${total_moves}`;
        total_moves_div.append(total_moves_num);
        game_div_row.append(total_moves_div);

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
        
        
        this.get_cards(toy_cards);
            
        }

        // Method to shuffle and create card instances
        get_cards(deck) {
            deck.sort(()=>Math.random()-0.5)
            for (let i =0; i < deck.length; i++) {
                new Card(deck[i].name, deck[i].image, deck[i].id)
            }
    
        }

        // Timer on Game Page
        timer() {
            let timer;
            let timerDiv = document.createElement('div')
            timer = 0; 
            game_title_div.append(timerDiv)
            let x = setInterval(function () { 
                timer += 1   
                console.log(timer)
                timerDiv.innerHTML = `<h2>${timer}<h2>`
            }, 1000)
        }
        
    }

