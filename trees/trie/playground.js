/**
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
*/

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node.containsKey(char)) {
      // add the letter attach 26 alphabet letter slots
      node.put(char, new TrieNode());
    }
    node = node.get(char);
  }
  node.setEnd();
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const node = this.startsWith(word);
  return node !== null && node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let char of prefix) {
    if (!node.containsKey(char)) return null;
    node = node.get(char);
  }
  return node;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class TrieNode {
  constructor() {
    this.links = new Array(26).fill('');
    this.isEnd = false;
  }

  containsKey(char) {
    // remove charcode num to get index
    const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
    return this.links[charIndex] !== '';
  }

  get(char) {
    const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
    return this.links[charIndex];
  }

  put(char, node) {
    const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
    this.links[charIndex] = node;
  }

  setEnd() {
    this.isEnd = true;
  }

  isEnd() {
    return this.isEnd;
  }
}
