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