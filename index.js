// Write your solution here!

const cats = [`Milo`, `Otis`, `Garfield`]
console.log(cats);

function fixCats() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}


function destructivelyAppendCat(){
    cats.push('Ralph')
    console.log(cats);
}

fixCats();

function destructivelyPrependCat(){
    cats.unshift(`Bob`)
    console.log(cats);
}

fixCats();

function destructivelyRemoveLastCat(){
    cats.pop()
    console.log(cats);
}

fixCats();

function destructivelyRemoveFirstCat(){
    cats.shift()
    console.log(cats);
}

fixCats();

function appendCat(){
    const cats2 = [...cats, `Broom`]
    return cats2;
    // console.log(cats2);
    // // console.log(`test2`, cats);
}

fixCats();

function prependCat(){
    const cats3 = [`Arnold`, ...cats]
    return cats3;
    // console.log(cats3);
    // console.log(`test3`, cats);
}

fixCats();

function removeLastCat(){
    const cats4 = cats.slice(0, -1);
    return cats4;
}

function removeFirstCat(){
    const cats5 = cats.slice(1)
    return cats5;
}

