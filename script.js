const makeSound = function(name, lastname){
    console.log(this.sound +' ' + name + ' ' +lastname)
}

const cat = {
    name: 'fluffy',
    sound: 'meow',
    makeSound: makeSound,
}

makeSound('jakub','gryka')

const bindedToCatMakeSound= makeSound.bind(cat)

bindedToCatMakeSound('jakub', 'gryka')