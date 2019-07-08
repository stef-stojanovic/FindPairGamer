class Card {
    
    constructor(name, image, id){
        this.name = name;
        this.image = image;
        this.id = id

        this.create_card()

    }

    create_card() {
        let card_div = document.getElementById('card-area');

        let div = document.createElement('div');
        div.setAttribute('class', 'col-4');
        div.setAttribute('id', this.id)
        let img = document.createElement('img');
        img.src = "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200181/49319355-playing-cards-back.jpg";
        img.setAttribute('class', 'toy-avatar');
        div.append(img)
        img.addEventListener('click', () => {
            img.src = this.image
            setTimeout( ()=>{
                img.src = "https://previews.123rf.com/images/rlmf/rlmf1512/rlmf151200181/49319355-playing-cards-back.jpg"
            }, 2000)
            })         
        
        card_div.append(div);

    }

}