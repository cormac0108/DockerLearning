

// app.post('/register', (req, res) => {
//     const { email,name, password } = req.body;
//     db('userssmartbrain')
//     .returning('*') //special returning method Knex
//     .insert({
//         email: email,
//         name: name,
//         joined: new Date()
//     }).then(user => {
//         res.json(user[0]); //returns user object
//     })
//     .catch(err => res.status(400).json('unable to register')) //if an error
// })

// function person (first, last,age,eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyecolor= eyecolor;
// }
// var myFather = new person ("John", "Doe", 50, "blue");

// 13/ 09 / 2020 notes
const app = require('http')
    .createServer((req,res) => res.send('oh hi there!'));

// app.listen(3000, () => {
//     console.log('server is listening on port 3000')
// })

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

// const DATABASE_URL = process.env.DATABASE_URL
// app.listen(3000, () => {
//     console.log(`server is running on port ${DATABASE_URL}`);
// })

//really important for things that should be kept secret. 
//in bash  PORT= ... node filename


console.log(PORT)
// console.log(DATABASE_URL)