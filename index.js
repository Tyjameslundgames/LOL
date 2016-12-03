// Grab some Linux C files from the Linux repository 

// The key press function looks for a keypress on the html element (while page loaded)
$("html").keypress(function() {
  // use a loop to add on to the $('.output') element a word of the C files, use the split(" ") function to split the string into words
  console.log("Handler for .keypress() called.");
});



