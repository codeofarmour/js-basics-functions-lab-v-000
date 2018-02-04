function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42;
  } else {
    return 42 - blocks;
  }
}
function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}
function distanceTravelledInFeet(beginning, destination) {
  if (beginning > destination) {
    return (beginning - destination) * 264;
  } else {
    return (destination - beginning) * 264;
  }
}
