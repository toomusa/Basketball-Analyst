//Manual implementation:
const TrieNode = function(key) {
  this.key = key;
  this.parent = null;
  this.children = {};
  this.end = false;
}

TrieNode.prototype.getWord = function() {
  let output = [];
  let node = this;

  while (node !== null) {
    output.unshift(node.key);
    node = node.parent;
  }
  return output.join('');
};

//first Trie implementation
const Trie = function() {
  this.root = new TrieNode(null);
}

Trie.prototype.insert = function(word) {
  let node = this.root;
  for(let i=0; i<word.length; i++) {
    if(!node.children[word[i]]) {
      node.children[word[i]] = new TrieNode(word[i]);
      node.children[word[i]].parent = node;
    }
    node = node.children[word[i]];
    if (i == word.length - 1) {
      node.end = true;
    }
  }
};

Trie.prototype.contains = function(word) {
  let node = this.root;
  for(let i=0;i<word.length; i++) {
    if(node.children[word[i]]) {
      node = node.children[word[i]];
    } else {
      return false;
    }
  }
  return node.end;
};

Trie.prototype.find = function(prefix) {
  let node = this.root;
  let output = [];
  for(let i=0; i<prefix.length; i++) {
    if(node.children[prefix[i]]) {
      node = node.children[prefix[i]];
    } else {
      return output;
    }
  }
  findAllWords(node, output);
  return output;
};

const findAllWords = function(node, arr) {
  if(node.end) {
    arr.unshift(node.getWord());
  }
  for(let child in node.children) {
    findAllWords(node.children[child], arr);
  }
}

//==============================================
//instantiate

let playerTrie = new Trie;
let lastFirstTrie = new Trie;
const trieMaker = (array) => {
  array.forEach(item => {
    playerTrie.insert(item);
    lastFirstTrie.insert(item.split(' ').reverse().join(', '));
  });
};

let testArr1 = ["Tyler Atkins", "Mattie Ellis", "Chad Morris", "Sylvia Pope", "Stella Murray", "Antonio Evans", "Lina Lucas", "Alex Tran", "Lura Ryan", "Addie Walters", "Charlotte Newton", "Amanda Blake", "Irene Young", "May Williams", "Abbie Diaz", "Harriett Douglas", "Brent Becker", "Mildred Hodges", "Chase Kennedy", "Leona Huff", "Nina Zimmerman", "Myrtie Goodman", "Nancy Lyons", "Ricky Baldwin", "Teresa Payne", "Scott Watts", "Esther Castillo", "Madge Medina", "Clarence Jennings", "Mable Jenkins", "Edna Manning", "Oscar Simmons", "Lillian Howard", "Steve Sims", "Sarah Phillips", "Bobby Conner", "Vernon Blake", "Steven Stevenson", "Helen Wagner", "Willie McCoy", "Patrick Lloyd", "Harriett Shelton", "Sallie Douglas", "Dollie Joseph", "Calvin Baker", "Tommy Garcia", "Jayden Cruz", "Eliza Kelley", "Donald Morris", "Christopher Simmons", "Anne Sanchez", "Alvin Duncan", "Ruby Copeland", "Dorothy Holt", "Georgie Watson", "Helen Green", "Sue Jensen", "Gregory Mann", "Jean Johnson", "Arthur Fowler", "Jean Perez", "Linnie Vargas", "Tom Yates", "Laura Clarke", "Stella Sutton", "Albert Matthews", "Thomas Chandler", "Maurice Medina", "Elizabeth Hamilton", "Johnny Brooks", "Jesse Gross", "Harold Hall", "Bernice Jackson", "Rena Powell", "Edward King", "Callie Harrington", "Alberta Roberson", "Eva Clark", "Hulda Wright", "Hester Lee", "Lola Dennis", "Lois Andrews", "Bill Gonzalez", "Jackson Manning", "Gordon Marsh", "Jimmy Hamilton", "Kyle Bridges", "Jim Gordon", "Edith Wade", "Jackson Hall", "Lydia Thompson", "Lottie Burton", "Martin McDaniel", "Jennie Townsend", "Lida Ward", "William Aguilar", "Lee Barber", "Estelle Boyd", "Johanna Evans", "Angel Higgins"];
trieMaker(testArr1);

const convert = (array) => {
  let array2 = [];
  array.forEach(item => {
    array2.push(item.split(', ').reverse().join(' '));
  });
  return array2;
}

function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

//function for checking search value
$(document).on('keyup','#playerSearch', () => {
  let prefix = $('#playerSearch').val().trim();
  prefix = toTitleCase(prefix);
  console.log(prefix);
  if (prefix.length === 0) {
    $('#playerDropdown').empty();
    $('#playerDropdown').append(
    `<option value="Kevin Durant">
    <option value="Stephen Curry">
    <option value="James Harden">
    <option value="Chris Paul">
    <option value="Dwight Howard"></option>`);
  } if (prefix.length >= 2) {
    $('#playerDropdown').empty();
    trieSearchPlayer(prefix);
  };
});

const trieSearchPlayer = function(str) {
  console.log(convert(lastFirstTrie.find(str)));
  console.log(playerTrie.find(str));
  let resultArr = [...new Set([...playerTrie.find(str), ...convert(lastFirstTrie.find(str))])];
  console.log(resultArr);
  for (let i=0; i<resultArr.length; i++) {
      let newOption = `<option value="${resultArr[i]}">`;
      $('#playerDropdown').append(newOption);
  }
};
