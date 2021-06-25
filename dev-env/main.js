// default requires



// default vars

var encoders = [];
var fileContent = null;
var files = null;
var finalFile = null;

// default functions

function newFile(var fileContent, encoding, error) {
    
    if (encoding in encoders) {
        
        if (fileContent.fileText = null || fileContent.fileText = 0 || fileContent.fileText = "") {
            
            error = '{"done": 0, "errorType": 3, "error": 2, "message": "There is no content on the file ' +fileContent.fileName +'"}';
            return(error);
            
        } else {
            
            files = files + fileContent.fileText;
            
        };
        
    } else {
        
        Console.writeLine("An error has occured, the encoder is not in the list !");
        error = '{"done": 0, "errorType": 3, "error": 1, "message": "The encoder is not in the list !"}';
        return(error);
        
    };
    
};
