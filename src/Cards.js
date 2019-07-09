class Card {
    
    constructor(name, image, id){
        this.name = name;
        this.image = image;
        this.id = id

        this.create_card()

    }

    create_card() {
        
        let game_page_div = document.getElementById('game_page_div');
        let div_row = document.querySelector('div.row');


        let div = document.createElement('div');
        div.setAttribute('class', 'col-2');
        div.setAttribute('id', this.id)
        div.setAttribute('style', 'justify-content: center; width: 50%; margin: auto;')

        let img = document.createElement('img');
        img.src = "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200181/49319355-playing-cards-back.jpg";
        img.setAttribute('class', 'toy-avatar');
        

        img.addEventListener('click', () => {
            img.src = this.image
            setTimeout( ()=>{
                img.src = "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200181/49319355-playing-cards-back.jpg"
            }, 2000)
        })
        div.append(img)

        div_row.append(div)
        
        game_page_div.append(div_row);

    }

}