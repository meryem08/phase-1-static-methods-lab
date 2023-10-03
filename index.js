class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-'\s]/g, '');
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');
    const result = [];
    
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i === 0 || !exceptions.includes(word)) {
        word = this.capitalize(word);
      }
      result.push(word);
    }
    
    return result.join(' ');
  }
}


const string1 = 'hello world';
const string2 = 'some#string@with$special^characters';
const string3 = 'the quick brown fox jumps over the lazy dog';

console.log(Formatter.capitalize(string1)); 
console.log(Formatter.sanitize(string2)); 
console.log(Formatter.titleize(string3)); 
