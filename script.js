
const growJSskill = function(){
    this.JSskill=this.JSskill +1
}

const makePerson = function(name,initialSkill){
    return ({
        name: name,
        JSskill: initialSkill,
        growJSskill: growJSskill,
    })
}

const me = makePerson('kuba', 0)
me.growJSskill()

