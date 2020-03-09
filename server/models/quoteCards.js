const quoteCards = [
    'Enjoy at least one sunset per day!',
    'My bed is a magical place I suddenly remember everything I had to do',        'They say don’t try this at home… so I went to my friend’s home!',
    'Wine + dinner = winner',
    'Friday, my second favorite F word',
    'Stomach: I will now demonstrate a blue whale’s mating call',
    'I don’t care what people think of me. Mosquitos find me attractive!',
    'If there would be an award for being lazy, I would send someone to pick it up for me.'
];

function add(text) {
    quoteCards.push(text);
};

//part of commonjs
module.exports = {
    list: quoteCards, //this is a default export
    add: add
}
