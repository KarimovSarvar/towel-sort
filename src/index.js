
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix) return [];
    else {
        const newMatrix =  matrix.map(function(item,index) {
            if(index%2 == 0) {
                return item
            } else return item.reverse()
        } )
        return newMatrix.flat()
    }
    /*if (matrix == undefined) return [];
    else {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            newMatrix = newMatrix.concat(matrix[i]);
        }
        else  {
            newMatrix = newMatrix.concat(matrix[i].reverse());
        }
    }
    return newMatrix
 }*/
}
