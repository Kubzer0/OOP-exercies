const Person =function(name) {
    this.name = name
}
Person.prototype.sayHello = function(){
    console.log(`hi i'm ${this.name}`)
}

const me = new Person('kuba')

me.sayHello()
