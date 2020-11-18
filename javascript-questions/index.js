const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  const MarvelHeroes = heroes.filter(hero => hero.publisher.indexOf('Marvel') > -1)
  return MarvelHeroes;
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  const newHeroes = []
  heroes.forEach(hero => {
      const obj = Object.assign({}, hero, {characters: hero.characters.split(',')})
      newHeroes.push(obj)
  })
  return newHeroes;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  const groupedHeroes = heroes.reduce((r, a) => {
    r[a.publisher] = r[a.publisher] || [];
    r[a.publisher].push(a);
    return r;
  }, Object.create(null));

  return groupedHeroes;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string, 
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  const newHeroes = heroes.filter(hero => hero.characters.split(",").length > 1)
  return newHeroes;
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
