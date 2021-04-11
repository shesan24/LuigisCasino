export function bestHand(usersHand, luigisHand) {
  const uv = handValue(genHandValues(usersHand));
  const lv = handValue(genHandValues(luigisHand));
  if (uv[0] > lv[0]) return ['user', uv];
  if (uv[0] < lv[0]) return ['luigi', lv];
  if (uv[0] === lv[0]) {
    return [tieBreaker(uv, lv), 5];
  }
}

function isFlush(hand) {
  return hand.reduce((acc, current) => acc && current === hand[0], true);
}

function isFourOfAKind(hand) {
  const sorted = hand.sort();
  return sorted[0] === sorted[3] || sorted[1] === sorted[4];
}

function isFullHouse(hand) {
  const s = hand.sort();
  return (
    (s[0] === s[1] && s[1] === s[2] && s[3] === s[4]) ||
    (s[0] === s[1] && s[2] === s[3] && s[3] === s[4])
  );
}

function isThreeOfAKind(hand) {
  const s = hand.sort();
  return (
    (s[0] === s[1] && s[1] === s[2]) ||
    (s[1] === s[2] && s[2] === s[3]) ||
    (s[2] === s[3] && s[3] === s[4])
  );
}

function isTwoPair(hand) {
  const s = hand.sort();
  return (
    (s[0] === s[1] && s[2] === s[3]) ||
    (s[1] === s[2] && s[3] === s[4]) ||
    (s[0] === s[1] && s[3] === s[4])
  );
}

function isOnePair(hand) {
  return [...new Set(hand)].length === 4;
}

function handValue(hand) {
  if (isFlush(hand)) return [16, 'flush'];
  if (isFourOfAKind(hand)) return [8, 'four of a kind'];
  if (isFullHouse(hand)) return [6, 'full house'];
  if (isThreeOfAKind(hand)) return [4, 'three of a kind'];
  if (isTwoPair(hand)) return [3, 'two pair'];
  if (isOnePair(hand)) return [2, 'one pair'];
  else return [0, 'nothing'];
}

function tieBreaker(userHand, luigiHand) {
  const ranks = {
    star: 6,
    mario: 5,
    luigi: 4,
    fireflower: 3,
    mushroom: 2,
    cloud: 1
  };
  const us = userHand.reduce((acc, curr) => acc + ranks[curr], 0);
  const ls = luigiHand.reduce((acc, curr) => acc + ranks[curr], 0);
  return us > ls ? 'user' : 'luigi';
}

function genHandValues(hand) {
  return hand.map((elem) => elem[0]);
}
// ['mario', 'mario', 'luigi', 'luigi', 'start']
