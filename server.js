
const express = require("express"); //create an Express application
const faker = require("faker")
const app = express();

class User {
    constructor() {
        this.name = faker.name.findName();
        this.quote = faker.lorem.sentence();
        this.number = faker.phone.phoneNumber();
    }
}
console.log(new User());

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.phrase = faker.company.catchPhrase();
        this.noun = faker.company.bsNoun();
    }
}
console.log(new Company());


// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
    res.json({ data: new User() });
});
//POSTMAN RESULT: Notice the difference with res.json( new Company() );
// {
//     "data": {
//         "name": "Joseph Fisher",
//         "quote": "Deleniti quod inventore assumenda libero suscipit fugit dolores molestiae.",
//         "number": "782.282.7304"
//     }
// }


app.get("/api/companies/new", (req, res) => {
    res.json( new Company() );
});

//POSTMAN RESULT:
// {
//     "name": "Nolan, Roob and Goodwin",
//     "phrase": "Decentralized global migration",
//     "noun": "solutions"
// }

app.get("/api/user/company", (req, res) => {
    const user = new User();
    const company = new Company;
   // res.json([ {data:user}, {data:company}]); //data format [ {},{},{} ]
    res.json([ user, company ]); //data format[ ]
});


// this needs to below the other code blocks
app.listen( 8000, () => console.log(`Listening on port 8000`) );
