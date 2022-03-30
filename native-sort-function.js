// ---------------------
// NATIVE SORT FUNCTION
// ---------------------

/* -------
sortFn(1st,2nd,3rd) 
1st param : array that will be sorted;
2nd param : direction of sorting on string 'up' or 'down';
3rd param : if the array consist of objects pass nested propert on string 
ex:[{id:5},{name:mohamed}] 3rd param will be => 'id'
*/
// sortFn(example,'up')



/* -------
sortFn Prototype(1st,2nd) 
(Array.sortFn(1st,2nd))
1nd param : direction of sorting on string 'up' or 'down';
2rd param : if the array consists of objects pass nested propert on string 
ex:[{id:5},{name:mohamed}] 2nd param will be => 'id'
*/
//  exampleArrObj.sortFn('up','id')


// uncomment to test
// test arrays
// var example = [1,50,3,20,4,6,112,103,19,105,230,205]
// var exampleArrObj = [{id:1},{id:50},{id:3},{id:20},{id:4},{id:6},{id:112},{id:103},{id:19},{id:105},{id:230},{id:205}]

// sortFn Prototype(1st,2nd) 
// exampleArrObj.sortFn('up','id')

// normal sortFn
// sortFn(example,'up')


// normal function
function sortFn(arr,sortOrder,property = null) {
  var arrBefore = arr.slice()
  var arrBeforeAfter = []
  var checked = 0;
  var up;
  var down;
  for(var i=0;i<= arrBefore.length - 1 ;i++) {
    for(var x=0;x <= arrBefore.length - 1 ;x++) {

      if(Boolean(property)) {
        up = (arrBefore[x][property] >= arrBefore[i][property]);
        down = (arrBefore[x][property] <= arrBefore[i][property]);  
      }else {
        up = (arrBefore[x] >= arrBefore[i]);
        down = (arrBefore[x] <= arrBefore[i]);
      }
      
      if (sortOrder != 'up' && sortOrder != 'down') {
        alert('invalid sorting order it must be "up" or "down" in string quotes');
        return
      }
      if (sortOrder == 'up' ? up : down) {
        checked++      
        if((arrBefore.length - 1) === checked ) {
          arrBeforeAfter.push(arrBefore[i])
          arrBefore.splice(i,1)
          i= 0;
          x=0;
          checked = 0;
        }
        if(arrBefore.length <= 1) {
          arrBeforeAfter.push(arrBefore[i])
        }
      }else {
          checked = 0;
          i++;
          x=0;   
      }
    }
  }
  console.log(arrBeforeAfter)
  return arrBeforeAfter
  }
// add functional sort to Array prototype
Object.defineProperty(Array.prototype, 'sortFn', {
  value: function (sortOrder,property = null) {
    var arrBefore = this.slice()
    var arrBeforeAfter = []
    var checked = 0;
    var up;
    var down;
    for(var i=0;i<= arrBefore.length - 1 ;i++) {
      for(var x=0;x <= arrBefore.length - 1 ;x++) {

        if(Boolean(property)) {
          up = (arrBefore[x][property] >= arrBefore[i][property]);
          down = (arrBefore[x][property] <= arrBefore[i][property]);  
        }else {
          up = (arrBefore[x] >= arrBefore[i]);
          down = (arrBefore[x] <= arrBefore[i]);
        }
        
        if (sortOrder != 'up' && sortOrder != 'down') {
          alert('invalid sorting order it must be "up" or "down" in string quotes');
          return
        }
        if (sortOrder == 'up' ? up : down) {
          checked++      
          if((arrBefore.length - 1) === checked ) {
            arrBeforeAfter.push(arrBefore[i])
            arrBefore.splice(i,1)
            i= 0;
            x=0;
            checked = 0;
          }
          if(arrBefore.length <= 1) {
            arrBeforeAfter.push(arrBefore[i])
          }
        }else {
            checked = 0;
            i++;
            x=0;   
        }
      }
    }
    console.log(arrBeforeAfter)
    return arrBeforeAfter
    }
});