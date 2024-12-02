function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function(j){
        setTimeout(() => {
            console.log(j);
        }, 1000);
    })(i);
  }
}

printNumbers2(5); //This will print 1 to 5 with delay due to IIFE

function printNumbers3(n: number): void {
    for (let i = 1; i <= n; i++) {
      setTimeout(() => {
          console.log(i);
      }, 1000);
    }
  }
  
printNumbers3(5); //This will also print 1 to 5 with delay because of let keyword