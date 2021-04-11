const shuffle = (arr) =>{
    const ran = arr.slice(0)
    for (let i = 0; i < arr.length - 1; i++){
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = ran[i]
        ran[i] = ran[randomIndex]
        ran[randomIndex] = temp
    }
    return ran
}
export const createDeck = () => {
    let id = 0
    const cards = ['mario', 'fireflower', 'mushroom', 'cloud', 'luigi', 'star'].reduce((accumulator, icon) => {
        accumulator.push({
            id: id++,
            icon
        })
        accumulator.push({
            id: id++,
            icon
        })
        return accumulator;
    }, [])
    return shuffle(cards);
}