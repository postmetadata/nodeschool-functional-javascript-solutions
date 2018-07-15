function repeat(operation, num) {

    for (i = 0; i < num; i++) {
        return operation();
    }
}


// Do not remove the line below
module.exports = repeat

// function repeat(operation, num) {
//     if (num <= 0) return
//     operation()
//     return repeat(operation, --num)
//   }
  
//   module.exports = repeat