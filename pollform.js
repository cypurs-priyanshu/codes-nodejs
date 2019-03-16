var express = require("express");
var app = express();
var PORT = 6666;
var dataSet = []
var pollresponse = []
var poll = []
poll.push({"question":"What to have for dinner?", "options":['Pizza','Maggi','Vada Pav']});
dataSet.push({ name: "Priyanshu", city: "New York" });
dataSet.push({ name: "Avinash", city: "Los Angeles" });

pollresponse.push({ pollid: "2", response: "pizza" });
app.use(express.json());


app.get('/poll', function (req, res) {
    console.log("You requested for a user");
    console.log(poll);
    // req.send(dataSet);

    //  res.sendStatus(200);
    res.json(poll);
})



app.post('/insert-new-poll', function (req, res) {
    let data = req.body

    if (data != undefined && data != null) {
        poll.push(data)
        console.log(poll);
        res.json(poll)
    }
}
)

app.post('/insert-poll-resp', function (req, res) {           //INSERT NEW FEEDBACK

    let data = req.pollresponse
    pollresponse.push(data);
    // pollresponse.push(response);
    console.log(pollresponse);
    // dataSet.push(data);
    res.send("Poll inserted")

}
)
app.get('/count', function (req, res) {
    let count = pollresponse.length
    console.log(count);
    res.send(count + "");
    // res.end(count)
})
app.listen(PORT, function () {
    console.log("working...");

})
