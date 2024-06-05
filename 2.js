function manipulateString (inputString,callback)
{
    const manipulateString = inputString.topperCase();

    callback(manipulateString)
}

function logString(manipulateString){
    console.log(`The manipulated string is : $(manipulatedString)`);
}

manipulateString("hello world", logString)