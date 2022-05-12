
//Example

var currentWord = 'ooooksasasalk';

console.log('Current Word: ' + currentWord)
console.log('Result: ' + calculateWord(currentWord));


//Function Calulate Word

//Description: return the first letter + number of distinct characters between first and last character + the last letter
//Example: "Smooth"  - Return: "S3h"

function calculateWord(currentWord){
	
	var result = '';//result expect of function
	
	if (currentWord.length > 0) {//validate length of currentWord is > 0
		
		if (!(/[^a-zA-Z]/).test(currentWord)){ //validate if the Words only is composed of alphabetic characters.

			var newWordArray = [];//var Array add each characters of the Word
			var newWord = '';//var of new Word
			var character = '';//character of the current Word

			for (var i = 1; i <= currentWord.length - 2; i++) {

				character = currentWord.charAt(i);//get the current character one by one
				
				if (newWordArray.indexOf(character) === -1) {//validate if character is repeat

				  newWordArray.push(character);//if the character is not repeat, this character add to var array 'newWordArray'
				  newWord+=character;//count character not repeat

				}
			}
			
			//when is finish, the var 'result' concats:
			
			result += currentWord.charAt(0);//First character of 'currentWord'
			result += newWord.length;//count character not repeat
			result += currentWord.charAt(currentWord.length-1);//The Last character of  'currentWord'			
			
		}
		else{
			
			result = 'The Words only can be composed of alphabetic characters';
		}
	}
	else{
		result = 'The Words is less that 2 characters';
	}
	
	return result;//return the result
	
}

