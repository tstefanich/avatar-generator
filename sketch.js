var head,neck,body,legs;  // image storage vars
var randHead = 1
var randNeck = 1
var randBody = 1
var randLegs = 1
var pRandHead, pRandNeck, pRandBody, pRandLegs // rand chooser storage (previous)
var totalHead = 3
var totalNeck = 3
var totalBody = 3
var totalLegs = 3

var headArray = ['1','2','3'];
var neckArray = ['1','2','3'];
var bodyArray = ['1','2','3'];
var legsArray = ['1','2','3'];
var allArrays = [headArray, neckArray, bodyArray, legsArray];
function preload() {
  for (var i = 0; i < headArray; i++) {
    loadImage("assets/head_" + headArray[i] + ".png");
  }
  for (var i = 0; i < neckArray; i++) {
    loadImage("assets/head_" + neckArray[i] + ".png");
  }
  for (var i = 0; i < bodyArray; i++) {
    loadImage("assets/head_" + bodyArray[i] + ".png");
  }
  for (var i = 0; i < legsArray; i++) {
    loadImage("assets/head_" + legsArray[i] + ".png");
  }

}
var uniqueCombinations;
var i = 0;
function setup() {
  createCanvas(200, 600);
  // imageMode(CENTER)
  getRandomAvatar()
  frameRate(1)
  uniqueCombinations = allPossibleCases(allArrays);
  console.log(uniqueCombinations);
  setTimeout(function(){
    setBodyPart()
  }, 2000);
}

function draw() {
  clear();
  image(head, width/2 - head.width/2, 100);
  image(neck, width/2 - neck.width/2, 100+ head.height);
  image(body, width/2 - body.width/2, 100+head.height+neck.height);
  image(legs, width/2- legs.width/2, 100+head.height+neck.height+body.height-2);
  //background(77)



  // if(randHead<=3){
  //   randHead++
  // }else{
  //   randHead = 1
  //   if(randNeck <=3){
  //     randNeck++
  //   }else{
  //     randNeck = 1
  //     if(randBody <= 3){
  //       randody++
  //     }else{
  //       randBody = 1
  //       if(randLegs <= 3){
  //         randLegs++
  //       }else{
  //         noLoop()
  //       }
  //     }
  //   }
  // }
  // saveCanvas('ava', 'png');


}
function keyPressed(){
  if(key == 'S'){
    saveCanvas('test', 'png');
  }
  if(key == 'N'){
    getRandomAvatar()
  }
  if(key == 'A'){
    // getAllAvatars()
  }
}


function getRandomAvatar(){
  // randHead = floor( random(1,totalHead) ) //might not need this...
  while(randHead == pRandHead){
    randHead = ceil( random(0,totalHead) )
  }
  pRandHead = randHead

  while(randNeck == pRandNeck){
    randNeck = ceil( random(0,totalNeck) )
  }
  pRandNeck = randNeck

  while(randBody == pRandBody){
    randBody = ceil( random(0,totalBody) )
  }
  pRandBody = randBody

  while(randLegs == pRandLegs){
    randLegs = ceil( random(0,totalLegs) )
  }
  pRandLegs = randLegs

  head = loadImage("assets/head_" + randHead + ".png");
  neck = loadImage("assets/neck_" + randNeck + ".png");
  body = loadImage("assets/body_" + randBody + ".png");
  legs = loadImage("assets/legs_" + randLegs + ".png");
  console.log(randHead)
  console.log(randNeck);
  console.log(randBody);
  console.log(randLegs);
  console.log('+~+~+~');
}



// function getNextAvatar(){
//   if(randHead >= 3){
//     randHead = 3
//     neck = loadImage("assets/neck_" + randNeck + ".png");
//     randNeck++
//     saveCanvas('avatar_n', 'png');
//     if(randNeck >= 3){
//       randNeck = 3
//       body = loadImage("assets/body_" + randBody + ".png");
//       randBody ++
//       saveCanvas('avatar_b', 'png');
//       if(randBody >= 3){
//         randBody = 3
//         randLegs++
//         legs = loadImage("assets/legs_" + randLegs + ".png");
//         saveCanvas('avatar_l', 'png');
//         if(randLegs >= 3){
//           randLegs = 3;
//         }
//       }
//     }
//   }else{
//     randHead++
//     head = loadImage("assets/head_" + randHead + ".png");
//     saveCanvas('avatar_h', 'png');
//   }
//
// }

function drawAvatar(){
  image(head, width/2 - head.width/2, 100);
  image(neck, width/2 - neck.width/2, 100+ head.height)
  image(body, width/2 - body.width/2, 100+head.height+neck.height)
  image(legs, width/2- legs.width/2, 100+head.height+neck.height+body.height-2)
}


function setBodyPart(){
  var tempParts = uniqueCombinations[i].split('');
  console.log(tempParts);
  head = loadImage("assets/head_" + tempParts[0] + ".png");
  neck = loadImage("assets/neck_" + tempParts[1] + ".png");
  body = loadImage("assets/body_" + tempParts[2] + ".png");
  legs = loadImage("assets/legs_" + tempParts[3] + ".png");

  var filename = 'avatar_'+i;
  saveCanvas(filename, 'png');
  
  i++;
  setTimeout(function(){
    setBodyPart()
  }, 1500);
}


 function allPossibleCases(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length ===1){
    return arr[0];
  } else {
    var result = [];
    var allCasesOfRest = allPossibleCases(arr.slice(1));  // recur with the rest of array
    for (var c in allCasesOfRest) {
      for (var i = 0; i < arr[0].length; i++) {
        result.push(arr[0][i] + allCasesOfRest[c]);
      }
    }
    return result;
  }
}
