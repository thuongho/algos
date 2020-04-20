// i: number arr, arr, arr o: boolean
const isFirstComeFirstServed = (takeOutOrders, dineInOrders, servedOrders) => {
  // check input
  if (!takeOutOrders || !dineInOrders || !servedOrders) return;
  // check for extra orders
  if ((takeOutOrders.length + dineInOrders.length) !== servedOrders.length) return false;
  // trackers
  let takeOutIndex = 0;
  let dineInIndex = 0;
  // loop servered orders
  for (let order of servedOrders) {
    // check against trackers to return false
    if (order === takeOutOrders[takeOutIndex]) {
      takeOutIndex++;
    } else if (order === dineInOrders[dineInIndex]) {
      dineInIndex++;
    } else {
      return false;
    }
  }
  // return true
  return true;
};
// O(n) O(1)
