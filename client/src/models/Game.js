import { CurrentUser } from "./Users";

export const Players = [
    { Name: 'Bernie', Score: 0, isDealer: false }
];

export const MyCards = [];

export const PictureDeck = [
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-147-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-146-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-131-750x280.jpg'
];

export const CaptionsDeck = [
    'Enjoy at least one sunset per day!',
    'My bed is a magical place I suddenly remember everything I had to do',
    'They say don’t try this at home… so I went to my friend’s home!',
    'Wine + dinner = winner',
    'Friday, my second favorite F word',
    'Stomach: I will now demonstrate a blue whale’s mating call',
    'I don’t care what people think of me. Mosquitos find me attractive!',
    'If there would be an award for being lazy, I would send someone to pick it up for me.'
];

export let CurrentPicture = "";

export const CardsInPlay = [];

export function Init(){
    Players.push( {Name: CurrentUser.Name, Score: 0, isDealer: true})

    MyCards.push(CaptionsDeck[0])
    MyCards.push(CaptionsDeck[1]);

    CurrentPicture = PictureDeck[0];
}

