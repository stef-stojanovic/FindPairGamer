class Card {
    
    constructor(name, image, id){
        this.name = name;
        this.image = image;
        this.id = id

        this.create_card()

    }


    create_card() {
        

        let game_page_div = document.getElementById('game_page_div');
        let div_flex = document.querySelector('div.flex-wrap');


        let div = document.createElement('div');
        div.setAttribute('class', 'x');
        div.setAttribute('id', this.id)
        // div.setAttribute('style', 'justify-content: center; width: 50%; margin: auto;')

        let img = document.createElement('img');
        img.src = "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200181/49319355-playing-cards-back.jpg";
        img.setAttribute('class', 'toy-avatar');
        
        img.addEventListener('click', () => {
            
            if (clicked_cards.length == 2) {
                clicked_cards.forEach((clicked_card) => {
                    clicked_card.image = "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200181/49319355-playing-cards-back.jpg"
                })
                console.log(clicked_cards)
                clicked_cards = []
                
                return 
            }
            else {
            // Moves Counter
            let total_moves_num = document.getElementById('total_moves_num');
            total_moves++
            total_moves_num.innerText = `Moves: ${total_moves}`;
            img.src = this.image;
            clicked_cards.push(this);
            console.log(clicked_cards);
            if (clicked_cards.length == 2){     
                if (clicked_cards[0].id == clicked_cards[1].id) {
                    points += 2;
                    console.log(points);
                    clicked_cards.forEach((clicked_card)=>{
                        clicked_card.image = 'gray.png'
                    })
                }
                else {
                    clicked_cards.forEach((clicked_card) => {
                        setTimeout( ()=>{
                        clicked_card.image = "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200181/49319355-playing-cards-back.jpg"
                    }, 2000)
                })
                    // clicked_cards = []
                }
            }
            else {
                return
            }
            }
            })
            
            div.append(img)
        
        div_flex.append(div)
        
        game_page_div.append(div_flex);
        
    }
    
    flipped_cards() {
    }
        

}