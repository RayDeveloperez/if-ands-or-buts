const prompt = require('prompt-sync')({sigint: true});
let pinCode = "1234"
let passcode = prompt(`Enter Pin: `)

if (passcode === pinCode)
{
    console.log("SUCCESFUL")
}

if (passcode !== pinCode)
{
    console.log("FAILURE")
}
