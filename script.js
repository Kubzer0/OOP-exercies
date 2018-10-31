function Dog(){
    this.sound ='Woof'
}
Dog.prototype.makeSound= function(){
    console.log(this.sound)
}
const dog0 = Dog()
const dog1 = new Dog()

dog1.makeSound()