var Entry = requre('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#term-paper').submit(function(event){
    debugger;
    event.preventDefault();
    var title = $('#title').val();
    var words = $('#body').val();
    // var SpaceSplit = words.split(" ");
    var myEntry = new Entry(title, words);
    var result = myEntry.wordCount();
    console.log(result);
  });
});
