class Card {
    
    constructor(name, image){
        this.name = name;
        this.image = image;

        this.create_card()

    }

    create_card() {
        let card_div = document.getElementById('card-div');

        let div = document.createElement('div');
        div.setAttribute('class', 'col');

        card_div.append(div);



    }

}