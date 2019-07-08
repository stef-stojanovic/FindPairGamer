class Card {
    
    constructor(name, image){
        this.name = name;
        this.image = image;

        this.create_card()

    }

    create_card() {
        let card_div = document.getElementById('card-area');

        let div = document.createElement('div');
        div.setAttribute('class', 'col');
        let img = document.createElement('img');
        img.src = this.image;
        img.setAttribute('class', 'toy-avatar');
        div.append(img)

        card_div.append(div);



    }

}