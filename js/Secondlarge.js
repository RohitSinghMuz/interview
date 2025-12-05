function secondLargest(arr) {
    let uniq = [...new Set(arr)];
    uniq.sort((a,b) => b - a);
    return uniq[1];
  }
  console.log(secondLargest([1,2,3,4,5,6,7,8]));