var express = require('express'); 
var app = express();
app.use(express.static(__dirname + '/src'));
const { ThirdwebSDK } = require("@3rdweb/sdk");

const module = sdk.getTokenModule("0x9b9Bc3EEFa9165CD93eE2f438F70933aC03EDaB7");

app.listen(process.env.PORT || 3000,()=>{
    console.log('\x1b[32m'," WEBAPP STARTED AT http://localhost:"+(process.env.PORT||3000));
});
