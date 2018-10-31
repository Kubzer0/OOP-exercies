
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



const brothers=[];
for(let i=0;i<100;i++){
    brothers[i]= makePerson(i,0)
}


