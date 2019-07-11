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
        
        let card_id = this.id
        let card_image = this.image
        let card_name = this.name
        // div.setAttribute('style', 'justify-content: center; width: 50%; margin: auto;')
        
        let img = document.createElement('img');
        img.src = "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200181/49319355-playing-cards-back.jpg";
        img.setAttribute('class', 'toy-avatar');
        img.setAttribute('id', card_id)
        img.setAttribute('name', card_name)
        
        img.addEventListener('click', displayCard);
        img.addEventListener('click', openCard)
        img.addEventListener('click', gameOver)

        function displayCard() {
            let total_moves_num = document.getElementById('total_moves_num');
            total_moves++
            total_moves_num.innerText = `Moves: ${total_moves}`;
            img.src = card_image;
            img.classList.add('turned_over')


        }
        
        function openCard() {
                clicked_cards.push(this);
                if (clicked_cards.length == 2){
                    if (clicked_cards[0].id == clicked_cards[1].id) {
                        points += 2;
                        let card1 = Array.prototype.slice.call(document.getElementsByName(`${clicked_cards[0].name}`))[0]
                        card1.classList.add("matched")
                        let card2 = Array.prototype.slice.call(document.getElementsByName(`${clicked_cards[1].name}`))[1]
                        card2.classList.add("matched")
                        clicked_cards = []
                        }
                    else {
                        setTimeout(function(){
                            let card1 = Array.prototype.slice.call(document.getElementsByName(`${clicked_cards[0].name}`))
                            console.log(card1)
                            card1.forEach((card)=>{
                                card.src =  "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200181/49319355-playing-cards-back.jpg"
                                card.classList.remove('turned_over')
                            })
                            let card2 = Array.prototype.slice.call(document.getElementsByName(`${clicked_cards[1].name}`))
                            card2.forEach((card)=>{
                                card.src =  "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200181/49319355-playing-cards-back.jpg"
                                card.classList.remove('turned_over')
                            })
                            clicked_cards = []
                        }, 1500)
                        }
                    }
                }


            function gameOver() {
                if (points == 18){
                    let finalPoints = points
                    let finalTime = timer
                    // post request to Database for points
                    fetch(users_path, {
                        method: "POST",
                        headers: {
                            "Content-Type":"application/json", 
                            "Accept":"application/json"
                        },
                        body: JSON.stringify({
                            name: userName
                        })
                    })
                    alert('You Win!')
                    new HomePage()
                }

            }
            
            div.append(img)
            
            div_flex.append(div)
            
            game_page_div.append(div_flex);
            
    }
}