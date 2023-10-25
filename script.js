let obj = {
    ings: ["Jumping", "Whispering", "Exploring", "Laughing", "Dancing", "Solving"],
    nouns: ["Orchids", "Periwinkle", "Marigold", "Lotus", "Calendula", "Dragons", "Phoenix", "Stars", "Voyage", "Dreams", "Specters", "Sirens", "Nebula", "Rebels", "Legends"],
    adverbs: ["Joyful", "Melancholic", "Anxious", "Grateful", "Content", "Turquoise", "Indigo", "Coral", "Lavender", "Chartreuse"],
    conj: ["and", "but", "or", "so", "yet", ","],
}

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

let bandName = ""
function randomBandName() {
    let randomArray = randomNumber(0, 2)
    if (randomArray === 0) {
        return bandName += obj.ings[randomNumber(0, obj.ings.length - 1)] + " " + obj.nouns[randomNumber(0, obj.nouns.length - 1)]
    } else if (randomArray === 1) {
        return bandName += obj.nouns[randomNumber(0, obj.nouns.length - 1)] + " " + "and" + " " + obj.nouns[randomNumber(0, obj.nouns.length - 1)]
    } else if (randomArray === 2) {
        return bandName += obj.adverbs[randomNumber(0, obj.adverbs.length - 1)] + " " + obj.nouns[randomNumber(0, obj.nouns.length - 1)]
    }
}
// console.log(randomBandName())
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
let albumTitle = "";
function createAlbumTitle() {
    let char = bandName[0]

    let randomIngs = obj.ings[Math.floor(Math.random() * obj.ings.length)]
    let randomNouns = obj.nouns[Math.floor(Math.random() * obj.nouns.length)]
    let randomAdverbs = obj.adverbs[Math.floor(Math.random() * obj.adverbs.length)]
    let randomConj = obj.conj[Math.floor(Math.random() * obj.conj.length)]
        if (vowels.indexOf(char === 1)) {
        return albumTitle += obj.adverbs[Math.floor(Math.random() * obj.adverbs.length)] + " " + randomConj + " " + obj.adverbs[Math.ceil(Math.random() * obj.adverbs.length)]
       } else  if (vowels.indexOf(randomBandName([3]) === 1)) {
        return albumTitle += randomAdverbs + " " + randomNouns
       } else {
        return albumTitle += randomIngs + " " + randomAdverbs
       }
    }
// console.log(createAlbumTitle());
function createDescription(genres) {
    return `${albumTitle} is the newest album of ${bandName}. It's a great ${genres} album, and a real best seller.`
}
// console.log(createDescription("rock"));

function createYear() {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let result = 1900;
    let albumTitle = createAlbumTitle();
    let firstLetter = albumTitle[0].toLowerCase();
    return result + alphabet.indexOf(firstLetter) / 2 * 10 + albumTitle.length
}

// console.log(createYear());

function createAlbum (genres) {
    album = {
        band: randomBandName(), 
        album: createAlbumTitle(),
        description: createDescription(genres),
        year: createYear()
        }
        return album
    }
console.log(createAlbum("rock"))
    