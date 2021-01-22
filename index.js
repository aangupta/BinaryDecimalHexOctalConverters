const readLineSync = require('readline-sync');
console.log("Welcome to Binary Decimal Hex Octal Converters Utility App\n");

function binaryToDecimal(input){
  return(parseInt(input,2));

}
function binaryToOctal(input){
  let decimalVal = parseInt(input,2);
  return decimalVal.toString(8);
  
}
function binaryToHexaDecimal(input){
  decimalVal = parseInt(input,2);
  return decimalVal.toString(16);
}

function decimalToBinary(input){
  return input.toString(2);
  
}
function decimalToOctal(input){
   return input.toString(8);
}
function decimalToHexadecimal(input){
   return input.toString(16);
}

function octalToBinary(input){
  decimalVal = parseInt(input,8);
  return decimalVal.toString(2);
  
}
function octalToDecimal(input){
  return parseInt(input,8);
}
function octalToHexaDecimal(input){
  decimalVal = parseInt(input,8);
  return decimalVal.toString(16);
}

function hexadecimalToBinary(input){
  decimalVal = parseInt(input,16);
  return decimalVal.toString(2);

}
function hexadecimalToDecimal(input){
  return parseInt(input,16);

}
function hexadecimalToOctal(input){
  decimalVal = parseInt(input,16);
  return decimalVal.toString(8);

}

function startConverter(){
  let selectedOption = parseInt(readLineSync.question("Option 1 : Convert Binary to Decimal.\nOption 2 : Binary to Octal\nOption 3 : Binary to HexaDecimal\nOption 4 : Decimal to Binary\nOption 5 : Decimal to Octal\nOption 6 : Decimal to Hexadecimal\nOption 7 : Octal to Binary\nOption 8 : Octal to Decimal\nOption 9 : Octal to HexaDecimal\nOption 10 : HexaDecimal to Binary\nOption 11 : HexaDecimal to Decimal\nOption 12 : HexaDecimal to Octal\nPlease provide your input\n"));

  console.log(`Hi, you have selected option: ${selectedOption}\n`);

  if(selectedOption==0){
     return selectedOption;
  }

  while(selectedOption){

    switch(selectedOption){
      case 1:
      const input1 = readLineSync.question("Enter your input in Binary\n");
      console.log("Output : " + binaryToDecimal(input1));
      break;
      case 2:
      const input2 = readLineSync.question("Enter your input in Binary\n");
      console.log("Output : " + binaryToOctal(input2));
      break;
      case 3:
      const input3 = readLineSync.question("Enter your input in Binary\n");
      console.log("Output : " + binaryToHexaDecimal(input3));
      break;
      case 4:
      const input4 = parseInt(readLineSync.question("Enter your input in Decimal\n"));
      console.log("Output : " + decimalToBinary(input4));
      break;
      case 5:
      const input5 = parseInt(readLineSync.question("Enter your input in Decimal\n"));
      console.log("Output : " + decimalToOctal(input5));
      break;
      case 6:
      const input6 = parseInt(readLineSync.question("Enter your input in Decimal\n"));
      console.log("Output : " + decimalToHexadecimal(input6));
      break;
      case 7:
      const input7 = readLineSync.question("Enter your input in Octal\n");
      console.log("Output : " + octalToBinary(input7));
      break;
      case 8:
      const input8 = readLineSync.question("Enter your input in Octal\n");
      console.log("Output : " + octalToDecimal(input8));
      break;
      case 9:
      const input9 = readLineSync.question("Enter your input in Octal\n");
      console.log("Output : " + octalToHexaDecimal(input9));
      break;
      case 10:
      const input10 = readLineSync.question("Enter your input in Hexadecimal\n");
      console.log("Output : " + hexadecimalToBinary(input10));
      break;
      case 11:
      const input11 = readLineSync.question("Enter your input in Hexadecimal\n");
      console.log("Output : " + hexadecimalToDecimal(input11));
      break;
      case 12:
      const input12 = readLineSync.question("Enter your input in Hexadecimal\n");
      console.log("Output : " + hexadecimalToOctal(input12));
      break;
      default:
      console.log("Invalid Input\n");
      break;
    }

    selectedOption = parseInt(readLineSync.question("Please provide your input\n"));
    console.log(`Hi, you have selected option: ${selectedOption}\n`);



  }

}

const val = startConverter();
console.log("Thank you for using Converter Utility App\n");

