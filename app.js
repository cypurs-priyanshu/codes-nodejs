var express = require("express");
var app = express();
var PORT = 5555;
var dataSet = []

dataSet.push({ name: "Priyanshu", city: "New York" });
dataSet.push({ name: "Avinash", city: "Los Angeles" });

app.use(express.json());

app.get('/user', function (req, res) {
    console.log("You requested for a user");
    res.json(dataSet)
    res.send(dataSet);
    // res.sendStatus(200);
})
app.get('/count', function (req, res) {
    let count = dataSet.length
    console.log(count);
    res.send(count + "");
    // res.end(count)
}
)
app.get('/user/:id', function (req, res) {
    let tempData = dataSet[parseInt(req.params.id)];
    console.log("dataset ", tempData);
    try {
        if (tempData != undefined && tempData != null) {
            res.json(tempData)
        } else {
            res.sendStatus(404);
            // res.send("No Data Available");

        }
    }
    catch (err) {
        res.send(err);
        res.sendStatus(500);
    }
})

// app.post("/user", function (req, res) {
//     console.log("You inserted a user")
//     console.log(req.body);
// })

app.listen(PORT, function () {
    console.log("Server running...")
})
/*app.post('/user', function (req, res) {
    let data = req.body

    if (data != undefined && data != null) {
        dataSet.push(data)
        console.log(dataSet);
        res.json(dataSet)
    }
    else {
        res.sendStatus(500)
    }
}
)*/
app.post('/user', function (req, res) {
    let info = req.body;
    console.log(info);
    if (info != undefined && info != null) {
        if (Array.isArray(info)) // if the requested data is array.
        {
            console.log("block array")
            for (var i = 0; i < info.length; i++) {
                console.log("block loop")
                var v = info[i];
                dataSet.push(v)

                console.log("you are in the block")


            }
            console.log(dataSet);
            res.json(dataSet)
            // send.req(dataSet);
        }
       else  if ( typeof info == "object") {
            console.log("out")
            var v;
                //when data is object 
            {   
                console.log("data is object")
                // var v = info(req.body);
                dataSet.push(info);
                console.log(dataSet);
                res.json(dataSet);      //if the requested data is object.
            }
            
          /*  if (   toString(info))         // when data is string or other

            {

                console.log("Error in your requested data")
            }
                else
                {
                    return "not"

                }
                */
        }
        else{
            res.send("INVALID INPUT DATA");
        }
    }
    })