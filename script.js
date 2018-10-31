
const growJSskill = function(){
    this.JSskill=this.JSskill +1
};

const makePerson = function(name,initialSkill){
    return ({
        name: name,
        JSskill: initialSkill,
        growJSskill: growJSskill,
    })
};



const brothers= Array(100).fill(0).map((e,i) => makePerson(i,0));


