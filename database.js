var mangoose = require('mongoose');

//connection à la base de données
mangoose.Mongoose.connect('mongodb://localhost/personneDb', function(err){
    if(err){
        throw err;
    }
})

//définition d'un shéma

var persnoSchema = new mangoose.Schema({
    name: {type: String, required: true},
    age: Number,
    favoriteFood : [String]
})

//création du module

var personModel = mangoose.model('person', persnoSchema)

//création d'une personne

var person1 = new personModel({
    id:1,
    name: 'Aubrey MBOLO',
    age:24,
    favoriteFood : ['Saka', 'poulet']
});

//enregistriment dans la bases de données

person1.save(function(err){
    if(err){
        throw err;
    }
    console.log('personne ajouté');
});

//création de plusieurs personnes

var arrayOfPersons = [
    {
        id:2,
        name:'Victor MBOLO',
        age:60,
        favoriteFood: ['poisson']
    },
    {
        id:3,
        name:'Farlene MBOLO',
        age:30,
        favoriteFood: ['yassa']
    }
]
Model.create(arrayOfPersons, (err, data) =>{
    if(err){
        throw err;
    }
    else
        console.log('ajouté...');
})

//recherhcer toutes les personnes 

personModel.find(null, function(err,comms){
    if(err){
        throw err
    }
    console.log(comms);
})

//les personne dont le plet prefere est le yassa

personModel.find({favoriteFood: {"$in" : ["yassa"]}})

//recherche sur id

personModel.findById(personModel.id, (err, data) => err ?
console.log(err) : console.log(data))


personModel.findById(personModel.id, (err, data) => {
if (err) { throw err }
else {data.favoriteFood.push('hamburger')
data.save()
}})

//mise à jour
personModel.findOneAndUpdate(personModel.id, (err, data) => err ?
console.log(err) : console.log('mise a jour'))

//suppresion
personModel.findByIdAndRemove(personModel.id, (err, data) => err ?
console.log(err) : console.log('removed'))


personModel.remove({name : "Aubrey MBOLO"}, (err, data) => err ?
console.log(err) : console.log(data))


personModel.find({favoriteFood : { "$in" : ["saka"]} })
.sort('name').limit(2).select().exec((err,data)=>{
    err ?
console.log(err) : console.log(data)
})