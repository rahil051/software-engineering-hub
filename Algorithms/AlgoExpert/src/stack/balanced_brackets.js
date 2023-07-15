function balancedBrackets(string) {
    // Write your code here.
    // rahil solution
    const brcktOpen = '[({';
    const brcktClose = '})]';
    const brcktHash = {
      ']':'[',
      ')':'(',
      '}':'{'
    };
  
    const stack = [];
    for (let c of string) {
      if (brcktOpen.indexOf(c) > -1) {
        stack.push(c);
      } else if (brcktClose.indexOf(c) > -1) {
        if (stack.length === 0) {
          return false;
        }
        if (stack[stack.length - 1] === brcktHash[c]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Do not edit the line below.
  exports.balancedBrackets = balancedBrackets;