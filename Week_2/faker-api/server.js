const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

//Needed for post -------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//-----------------------------

class User{
    constructor(){
        this.firstName = faker.name.firstName(),
        this.lastName = faker.name.lastName(),
        this.email = faker.internet.email(),
        this.phone = faker.phone.phoneNumber(),
        this.password = faker.internet.password(),
        this.id = faker.database.mongodbObjectId()
    }
}

class Company{
    constructor(){
        this.id = faker.database.mongodbObjectId(),
        this.company = faker.company.companyName(),
        this.street = faker.address.streetName(),
        this.city = faker.address.citySuffix(),
        this.state = faker.address.state(),
        this.zipCode = faker.address.zipCode(),
        this.county = faker.address.county()
    }
}

app.get("/api/users/new", (req, res)=>{
    let newUser = new User();
    res.json(newUser)
})

app.get("/api/company/new", (req, res)=>{
    let newComp = new Company();
    res.json(newComp)
})

app.get("/api/company", (req, res)=>{
    let newComp = new Company();
    let newUser = new User();
    res.json({newUser, newComp})
})

app.listen(port, () => console.log(`Listing on port ${port}`))