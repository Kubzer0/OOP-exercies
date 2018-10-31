const makeSound = function(name, lastname){
    console.log(this.sound +' ' + name + ' ' +lastname)
}

const cat = {
    name: 'fluffy',
    sound: 'meow',
    makeSound: makeSound,
}

cat.makeSound('jakub', 'gryka')

makeSound.apply(cat, ['jakub', 'gryka'])
makeSound.call(cat, 'jakub', 'gryka')

makeSound.apply({sound:'woof'}, ['jakub', 'gryka'])
makeSound.call({sound: 'woof'},'jakub', 'gryka')