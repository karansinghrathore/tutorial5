const express = require('express')
const app = express()
const port = 3001
const fileName = 'data.json';

// using express json middleware which parses incoming json payloads
// https://expressjs.com/en/api.html
app.use(express.json()); 

let allUsersData = {users:[{email:"abc@abc.ca",firstName:"ABC",id:"5abf6782"},{id:"5abf6783",email:"emailemail@email.com",firstName:"Alexsss"},{id:"d6aeaac",email:"email2@email.com",firstName:"James"},{id:"j4i7ja",email:"email3@email.com",firstName:"Maya"}]}


app.get('/users', (req, res) => {
    res.status(200).json({message : 'Users retrieved', success : true, users: allUsersData.users});
});

app.get('/user/:id', (req, res) => {

    var userIdReceived = req.params['id'];
    var usersData = allUsersData.users;
    const userIndex = usersData.findIndex(({ id }) => id === userIdReceived);
    if(userIndex == -1)
    {
        res.status(404).json({message : 'User not found', success : false});
    }

    res.status(200).json({ success : true, user: usersData[userIndex]});
});

app.post('/add', function(req,res){
    var randomId = Math.random().toString(20).substring(7);
    allUsersData.users.push({id:randomId, email:req.body.email, firstName: req.body.firstName});
    res.status(200).json({message : 'User added', success : true});
});



app.put('/update/:id', (req, res) => {
    var userIdReceived = req.params['id'];
    const userIndex = allUsersData.users.findIndex(({ id }) => id === userIdReceived);
    if(userIndex == -1)
    {
        res.status(404).json({message : 'User not found', success : false});
    }
    allUsersData.users.splice(userIndex,1);
    console.log("index found is "+userIndex);
    const updatedUser = {"id": userIdReceived, "email":req.body?.email, "firstName": req.body?.firstName};
    allUsersData.users.push(updatedUser);
    res.status(200).json({message : 'User updated', success : true}); 
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
