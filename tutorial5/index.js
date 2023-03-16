const express = require('express')
const app = express()
const port = 3001
const fileName = 'data.json';

// using express json middleware which parses incoming json payloads
// https://expressjs.com/en/api.html
app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    const fs = require('fs')
    const path = './'+ fileName;  
    const fileData = JSON.parse(fs.readFileSync(path,'utf8'));
    res.status(200).json({message : 'Users retrieved', success : true, users: fileData.users}); 
});

app.get('/user/:id', (req, res) => {
    const fs = require('fs')
    const path = './'+ fileName;  
    const fileData = JSON.parse(fs.readFileSync(path,'utf8'));
    var userIdReceived = req.params['id'];
    var usersData = fileData.users;
    const userIndex = usersData.findIndex(({ id }) => id === userIdReceived);
    if(userIndex == -1)
    {
        res.status(404).json({message : 'User not found', success : false}); 
    }
    
    res.status(200).json({ success : true, user: usersData[userIndex]}); 
});

app.post('/add', function(req,res){

    const path = './'+ fileName;
    const fs = require('fs');
    const fileData = JSON.parse(fs.readFileSync(path,'utf8'));
    var usersData = fileData.users;
    var randomId = Math.random().toString(20).substring(7);
    usersData.push({id:randomId, email:req.body.email, firstName: req.body.firstName});
    const usersJSONString = JSON.stringify({"users": usersData});
    console.log(usersJSONString);
    fs.writeFileSync(path, usersJSONString);
    res.status(200).json({message : 'User added', success : true}); 
});



app.put('/update/:id', (req, res) => {
    var userIdReceived = req.params['id'];
    console.log("id received for put request is "+userIdReceived);
    console.log("request body received is "+ req.body);
    const fs = require('fs')
    const path = './'+ fileName;  
    const fileData = JSON.parse(fs.readFileSync(path,'utf8'));
    var usersData = fileData.users;
    const userIndex = usersData.findIndex(({ id }) => id === userIdReceived);
    if(userIndex == -1)
    {
        res.status(404).json({message : 'User not found', success : false}); 
    }
    usersData = usersData.slice(userIndex, userIndex+1);
    console.log("index found is "+userIndex);
    const updatedUser = {"id": userIdReceived, "email":req.body?.email, "firstName": req.body?.firstName};
    usersData.push(updatedUser);
    const usersJSONString = JSON.stringify({"users": usersData});
    console.log(usersJSONString);
    fs.writeFileSync(path, usersJSONString);
    res.status(200).json({message : 'User updated', success : true}); 
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})