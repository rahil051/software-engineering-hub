const fs = require('fs')

fs.readFile('/Users/rahil/Documents/Labs/software-engineering-hub/README.md', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
