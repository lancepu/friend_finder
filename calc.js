function calcScore(arr1, arr2) {
  const tempArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (parseInt(arr1[i]) !== parseInt(arr2[i])) {
      tempArr.push(Math.abs(parseInt(arr1[i]) - parseInt(arr2[i])));
    }
  }

  return (sum = tempArr.reduce((a, b) => a + b, 0));
}

module.exports = function findMatch(friendObj, friendArr) {
  const friendScore = friendObj.scores;
  let bestMatchScore;
  let matchIndex = 0;
  for (let i = 0; i < friendArr.length; i++) {
    const matchScore = friendArr[i].scores;
    const currentMatchScore = calcScore(friendScore, matchScore);
    if ((bestMatchScore = "")) bestMatchScore = currentMatchScore;
    if (currentMatchScore <= bestMatchScore) {
      bestMatchScore = currentMatchScore;
      matchIndex = i;
    }
  }
  return friendArr[matchIndex];
};
