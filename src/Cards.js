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
        img.setAttribute('id', this.id)

        
        img.addEventListener('click', () => {
            
            let dealt_cards = document.querySelectorAll(`img.toy-avatar`)
            let total_moves_num = document.getElementById('total_moves_num');
            if (clicked_cards.length == 2) {
                total_moves++
                console.log(total_moves);
                if (clicked_cards[0].id == clicked_cards[1].id) {
                    points+=2
                    clicked_cards = [];
                }
                else {
                    let unmatched_cards = document.querySelectorAll
                    clicked_cards = [];
                }
            }


            
        
            
        })
        
        div.append(img);

        div_flex.append(div);
        
        game_page_div.append(div_flex);
    
        

    }
}