/**
 * RandomCard.js
 *
 * @description
 * Returns a random card in string format.
 */

export default function randomCard() {
  const cards = ['mario', 'luigi', 'star', 'mushroom', 'fireflower', 'cloud'];
  return cards[Math.floor(Math.random() * cards.length)];
}
