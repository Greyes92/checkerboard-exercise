// Your JS goes here


// CHECKERBOARD ======================================================================

// let body = document.body

// function createCheckerBoard(){

// for(var i = 0; i < 63; i++){
//   let checker = document.createElement('div');
//   checker.style.width = "11.1%";
//   checker.style.float = "left";
//   checker.style.paddingBottom = "11.1%";
//   document.body.appendChild(checker);

//   if (i % 2 !== 0) {
//     checker.style.backgroundColor = 'red';;
//   } else {
//     checker.style.backgroundColor = 'black';;
//   }
//  }      
// }
    
// createCheckerBoard();

// CHECKERBOARD =======================================================================





//RANDOM COLORS=======================================================================

// let body = document.body

// function getRandomColor() {
//   var values = '0123456789ABCDEF';
//   var hex = '#';
//   for (var i = 0; i < 6; i++) {
//     hex += values[Math.floor(Math.random() * 16)];
//     }
//     return hex;
// } 

// function randomColorBoard() {
//  for(var i = 0; i < 36; i++) {  
//     let rainbowTile = document.createElement('div');
//     rainbowTile.style.width = "11.1%";
//     rainbowTile.style.float = "left";
//     rainbowTile.style.paddingBottom = "11.1%";
//     rainbowTile.style.backgroundColor = getRandomColor();
//     document.body.appendChild(rainbowTile);

//    if (i % 2 !== 0) {
//      rainbowTile;
//     } else {
//      rainbowTile;
//     }
//   }   
// }    
     
//  randomColorBoard()

//  let btn = document.createElement('button')
// document.body.appendChild(btn)

// RANDOM COLORS ======================================================================



// GRADIENT ===========================================================================
// function createGradient(){
//   var body = document.body
//   body.style.background = "linear-gradient(135deg, black, white)";
//   for (var i = 1; i <= 63; i++) {
    
//     let div = document.createElement('div');
//     div.style.float = "left";
//     div.style.width = "11.1%";
//     div.style.paddingBottom = "11.1%";
    
//     if (i % 2 !== 0) {
//       div.style.backgroundColor = "rgba(0, 0, 0, " + (.015 * i) + ")";
//     } else {
//       div.style.backgroundColor = "rgba(255, 255, 255, " + (.015 * i) + ")";
//     }
//     body.appendChild(div);
//    }
//   }
  
//   createGradient();
//GRADIENT ============================================================================



//FLASHING COLORS =====================================================================

// function getRandomColor() {

//   var values = '0123456789ABCDEF';
//   var hex = '#';
//   for (var i = 0; i < 6; i++) {
//     hex += values[Math.floor(Math.random() * 16)];
//     }
//     return hex;
// } 
////create divs
// var body = document.body
// for (var i = 0; i < 63; i++) {
//   let div = document.createElement('div');
//   div.style.float = "left";
//   div.style.width = "11.1%";
//   div.style.paddingBottom = "11.1%";
//   div.style.backgroundColor = getRandomColor();
//   body.appendChild(div);
// }

// function flashingColors() {
//   for (var i = 0; i < body.children.length; i++) {
//     body.children[i].style.backgroundColor = getRandomColor()
//   }
// }

// setInterval(flashingColors, 2000);

//FLASHING COLORS ========================================================================






// OTHER SOLUTIONS ====================================================================
 //For Gradient
// const body = document.body
// let rgbVal = 0
// for(let i = 0; i < 45; i++) {
//     let cell = document.createElement('div')
//     body.append(cell)
//     let color = `rgb(${rgbVal},${rgbVal},${rgbVal})`
//     cell.style.backgroundColor = color
//     cell.style.width = '11.1%'
//     cell.style.height = '11.1%'
//     cell.style.float = 'left'
//     cell.style.paddingBottom = '11.1%'
//     rgbVal += 5
// }


/*
function checkerBoard(){
  const body = document.body
  for (var i = 0; i < 72; i++) {
      let box = document.createElement('div')
      box.classList.add('checker');
      body.appendChild(box);
      if (i%2!==0) {
          box.style.backgroundColor = randomColor()
      } else {
          box.style.backgroundColor = randomColor()
      }
      box.style.float = 'left';
      box.style.height = '11.1%'
      box.style.width = '11.1%'
      box.style.paddingBottom = '11.1%'
  }
  return body;
  }
  checkerBoard()
  

  randomColor()
  function randomColor() {
      var getDivEle = document.querySelectorAll('.checker');
      for (var i = 0; i < getDivEle.length; i++) {
          getDivEle[i].style.backgroundColor = '#' + Math.floor(Math.random() * 16777217)
      }
  }
  */
/*
  for(let i = 0; i < 72; i++) {
    let tile = document.createElement('div'); 
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    // if(i % 2 !== 0) {
    //     tile.style.backgroundColor = 'black';
    // }else{
    //     tile.style.backgroundColor = 'red';
    // }
    tile.style.backgroundColor = "#" + randomColor;
    tile.style.width = "11.1%";
    tile.style.float = 'left';
    tile.style.paddingBottom = "11.1%";
    

    document.body.appendChild(tile);
}
*/