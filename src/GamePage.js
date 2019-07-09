class GamePage {
    constructor() {

        this.render()
        
    }

    render() {
        
        let game_page_div = document.querySelector('#game_page_div');
        game_page_div.innerText = '';
        main_page_div.innerText = '';



        let game_title_div = document.createElement('div');
        game_title_div.setAttribute('id', 'game_title_div');

        let h1 = document.createElement('h1');
        h1.innerText = 'Good Luck';
        game_title_div.append(h1);

        let h3 = document.createElement('h3');
        h3.innerText = 'focus!!!';
        game_title_div.append(h3);

        let back_to_home = document.createElement('button');
        back_to_home.innerText = 'Home Page';
        back_to_home.setAttribute('id', 'back_to_home');
        back_to_home.addEventListener('click' , () => {
            new HomePage()
        })
        game_title_div.append(back_to_home);

        let div_flex = document.createElement('div');
        div_flex.setAttribute('class', 'flex-wrap');
        game_page_div.append(game_title_div, div_flex);

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

        // Toy Card Array to Create New Cards
        get_cards(deck) {
            deck.sort(()=>Math.random()-0.5)
            for (let i =0; i < deck.length; i++) {
                new Card(deck[i].name, deck[i].image, deck[i].id)
            }
    
        }

        match_cards(card1, card2) {
            if (card1 == card2) {
                
            }

        }


        
        
    }

    // new GamePage()
