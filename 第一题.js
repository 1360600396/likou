

 
function isClosedString(s) {
    const stack = [];
    const map = {
        '{': '}',
        '(': ')',
        '[': ']',
    };
    let unmatchedLeft = false;

    for (let char of s) {
        if (char === '{' || char === '(' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || map[stack.pop()] !== char) {
                return false;
            }
        }

        // Check if the last character on the stack is not a closing bracket
        if (stack.length > 0 && !map[stack[stack.length - 1]]) {
            unmatchedLeft = true;
        }
    }

    return stack.length === 0;
}

console.log(isClosedString("()()")); // Expected output: false
 

function reverseWords(s) {
    const words = s.match(/[a-zA-Z]+/g) || []; // 匹配字符串中的单词
  
    let result = '';
    
    words.forEach((word, index) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase(); // 只保留字母并转为小写
      
      if (cleanWord.length > 0 && cleanWord.length <= 8) {
        const reversedWord = cleanWord.split('').reverse().join('');
        result += `${index + 1}: ${reversedWord}\n`;
      }
    });
  
    return result.trim(); // 去除末尾换行符并返回结果
  }
  