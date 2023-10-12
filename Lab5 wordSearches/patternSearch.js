function search(pattern) {
  var puzzle2D = document.getElementById("puzzleTable");
  height = puzzle2D.rows.length;
  width = puzzle2D.rows[0].cells.length;
  patternLength = pattern.length;
  // alert(height + " " + width + " " + patternLength);
  foundAt = "Not Found";
  for (let row = 0; row < height; row++) {
    for (let column = 0; column < width; column++) {
      //case 1 from left to right
      if (column <= width - patternLength) {
        let j = 0;
        while (
          j < patternLength &&
          pattern.charAt(j) == puzzle2D.rows[row].cells[column + j].innerHTML
        ) {
          j++;
        }
        if (j == patternLength) {
          foundAt = "[" + row + "," + column + "] to the right";
          break;
        }
      }
        //case 2 from right to left
        if(column >=  patternLength - 1){
            let j =0;
            while(j < patternLength && pattern.charAt(j) == puzzle2D.rows[row].cells[column - j].innerHTML){
                j++;
            }
            if (j == patternLength) {
                foundAt = "[" + row + "," + column + "] to the left";
                break;
              }
        }
        //case 3 from top to bottom
        if(row <= height - patternLength){
            let j = 0;
            while(j < patternLength && pattern.charAt(j) == puzzle2D.rows[row + j].cells[column].innerHTML){
                j++;
            }
            if (j == patternLength) {
                foundAt = "[" + row + "," + column + "] to the bottom";
                break;
              }
        }
        //case 4 from bottom to top
        if(row >= patternLength - 1){
            let j = 0;
            while(j < patternLength && pattern.charAt(j) == puzzle2D.rows[row - j].cells[column].innerHTML){
                j++;
            }
            if (j == patternLength) {
                foundAt = "[" + row + "," + column + "] to the top";
                break;
              }
        }
        //case 5 diagonal from bottom left to top right
        if(row >= patternLength - 1 && column <= width - patternLength){
            let j = 0;
            while(j < patternLength && pattern.charAt(j) == puzzle2D.rows[row - j].cells[column + j].innerHTML){
                j++;
            }
            if (j == patternLength) {
                foundAt = "[" + row + "," + column + "] to the top right";
                break;
              }
        }
        //case 6 diagonal from bottom right to top left
        if(row >= patternLength - 1 && column >= patternLength - 1){
            let j = 0;
            while(j < patternLength && pattern.charAt(j) == puzzle2D.rows[row - j].cells[column - j].innerHTML){
                j++;
            }
            if (j == patternLength) {
                foundAt = "[" + row + "," + column + "] to the top left";
                break;
              }
        }
        //case 7 diagonal from current to bottom right
        if(row <= height - patternLength && column <= width - patternLength){
            let j = 0;
            while(j < patternLength && pattern.charAt(j) == puzzle2D.rows[row + j].cells[column + j].innerHTML){
                j++;
            }
            if (j == patternLength) {
                foundAt = "[" + row + "," + column + "] to the bottom right";
                break;
              }
        }
        //case 8 diagonal from current to bottom left
        if(row <= height - patternLength && column >= patternLength - 1){
            let j = 0;
            while(j < patternLength && pattern.charAt(j) == puzzle2D.rows[row + j].cells[column - j].innerHTML){
                j++;
            }
            if (j == patternLength) {
                foundAt = "[" + row + "," + column + "] to the bottom left";
                break;
              }
        }
    }
    if (foundAt != "Not Found") {
      break;
    }
  }
  alert(foundAt);
}
