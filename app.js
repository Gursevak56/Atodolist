const express = require("express");

const bodyParser = require('body-parser');

const app = express();
app.set('view engine','ejs');
app.get('/' , (req,res) => {
    const today = new Date();
    const currentDay = today.getDay();
    switch (currentDay) {
        case 0:
            day="sunday"
            break;
            case 1:
                day="monday"
            break;
            case 2:
                day="tuesday"
            break;
            case 3:
                day="wenesday"
            break;
            case 4:
                day="Thursday"
            break;
            case 5:
                day="friday"
            break;
            case 6:
                day="saturday"
            break;
    
        default:"this is not a vaild day"
            break;
    }
    res.render('list',{day:day})
})
app.listen(1000 ,() => {
    console.log('this app is running on port 1000');
})