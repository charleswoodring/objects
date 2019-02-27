/*
DOT NOTATION / output each of the values to the console using dot notation
*/
//
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log(`height: ${wardrobe.height}`)
console.log(`manufacturer: ${wardrobe.manufacturer}`)
console.log(`contents: ${wardrobe.contents}`)
console.log(`depth: ${wardrobe.depth}`)
console.log(`width: ${wardrobe.width}`)

// add a new key to the object stored in the wardrobe variable. output it to the console
wardrobe.material = "Cedar"
console.log(wardrobe)
//
/*
SQUARE BRACKET NOTATION
*/
//
const lassie = {
    age: 7,
    breed: "Collie",
    color: "White and Brown"
}
// Breed is the key you want to get the value of in the object below
const keyToLookup = "breed"

// First, make JavaScript evaluate the variable and give us its value
console.log(keyToLookup) //value is "breed"

// Use the value of `keyToLookup` to get the value you want
const lassiesBreed = lassie[keyToLookup]
console.log(lassie) //value is object with keys
console.log(lassiesBreed) // Collie
//
/*
EMPIRE STATE
*/
//
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
//
// Use dot notation to output all of the dimensions of the Empire State Building to the console.
console.log(`Stories: ${empireStateBuilding.stories} stories`)
console.log(`Height: ${empireStateBuilding.height} ft`)
console.log(`Square Feet: ${empireStateBuilding.squareFeet} sq ft`)
console.log(`East/West Length: ${empireStateBuilding.eastWestLength} ft`)
console.log(`North/South Length: ${empireStateBuilding.northSouthLength} ft`)

//Use square bracket notation to output the remaining 5 properties to the console.
//Create 5 variables first with the keys as their values. Use those variables to look up the values.
const keyAddress = "address"
const keyConstDate = "constructionDate"
const keyCost = "cost"
const keyOwner = "owner"
const keyArchitect = "architect"
const empireAddress = empireStateBuilding[keyAddress]
const empireConstDate = empireStateBuilding[keyConstDate]
const empireCost = empireStateBuilding[keyCost]
const empireOwner = empireStateBuilding[keyOwner]
const empireArchitect = empireStateBuilding[keyArchitect]
console.log(`Address: ${empireAddress}`)
console.log(`Construction: ${empireConstDate}`)
console.log(`Total Cost: ${empireCost} dollars`)
console.log(`Owner: ${empireOwner}`)
console.log(`Architect: ${empireArchitect}`)
//
/*
ARRAYS AS VALUES
*/
//
const kennel = {
    name: "Nashville North Kennels",
    address: "100 Demonbreun Road",
    manager: "Harper Frankstone",
    capacity: 50,
    currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}

///to display all of the animals that are currently being boarded, you first have to access the array
const boardedAnimals = kennel.currentAnimals

for (let i = 0; i < boardedAnimals.length; i++) {
    console.log(boardedAnimals[i])
    // console.log(boardedAnimals[3])
}
//
/*
NASHVILLE SOFTWARE SCHOOL
*/
//
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
//Output the names of the part-time instructors followed by the names of the full-time instructors
const ptInstructors = nashvilleSoftwareSchool.instructors.partTime
const ftInstructors = nashvilleSoftwareSchool.instructors.fullTime
for (let i = 0; i < ptInstructors.length; i++) {
    console.log(ptInstructors[i])
}
for (let i = 0; i < ftInstructors.length; i++) {
    console.log(ftInstructors[i])
}
//Output only Andy and Zoe in the console.
for (let i = 0; i < ftInstructors.length; i++) {
    console.log(ftInstructors[4])
}
for (let i = 0; i < ptInstructors.length; i++) {
    console.log(ptInstructors[0])
}
//
/*
Accessing Property Values / Beatles
*/
//
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
//Output the following "Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album."
const paul = beatles.members[1].name
for (let i = 0; i < paul.length; i++) {
    // console.log(paul[0])
}
const bandStart = beatles.history.formed
const bandEnd = beatles.history.disbanded
const birthYear = beatles.members[1].birth
for (let i = 0; i < birthYear.length; i++) {
    // console.log(birthYear[1])
}
const album = beatles.albums[3]

console.log(`${paul} was in the Beatles from ${bandStart} to ${bandEnd}. He was born in ${birthYear}. He contributed heavily to the ${album} Album.`)