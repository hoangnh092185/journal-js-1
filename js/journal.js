function Entry(title, body) {
  this.title = title;
  this.body = body;
}

var wordCount;

Entry.prototype.wordCount = function() {
  var wordArray = [];
  // var words;
  // var spaceSplit =  words.split(" ");
  wordArray = this.body.split(" ");
  return wordArray.length;
};
