var twoSum = function (nums, target) {
  var result = [];
  var r = [];
  for (var i = 0; i < nums.length; ) {
    if (nums[i] >= target) {
      nums.splice(i, 1);
      continue;
    } else {
      var candidate1 = nums[i];
      var required = target - candidate1;
      for (var j = i + 1; j <= arr.length; ) {
        if (nums[j] >= target) {
          nums.splice(j, 1);
          continue;
        } else if (nums[j] === required) {
          result = [i, j];
          r = [nums[i], nums[j]];
          break;
        } else {
          j++;
          continue;
        }
      }

      if (result.length === 2) {
        break;
      } else {
        i++;
        continue;
      }
    }
  }

  return [result, r];
};
