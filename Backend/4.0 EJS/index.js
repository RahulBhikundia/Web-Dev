import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    console.log(day);
    var type = "";
    var message = "";
    if( day == 0 || day == 6){
        type = "the weekend";
        message = "have fun";
    }
    else{
        type = "a weekday";
        message = "work hard";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: message,
    });
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});