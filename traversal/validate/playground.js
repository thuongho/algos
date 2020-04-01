// i: node o: boolean
function validateBST(node, min=null, max=null) {
  if (max !== null && node.left > max) return false;

  if (min !== null && node.right < min) return false;

  if (node.left && !validateBST(node.left, min, node.data)) return false;

  if (node.right && !validateBST(node.right, node.data, max)) return false;

  return true;
}
// O(2^n) O(1)