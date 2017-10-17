// using Lodash to create template, but passing string (commentTemplate)
// function postComment() {
//   var commenter = document.getElementById("commenterName").value;
//   var comment = document.getElementById("commentText").value;
//   //insert comment into "comments" div in this format:
//   //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>
 
//   //create template string
//   var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';

//   //create template function
//   var templateFn = _.template(commentTemplate);

//   // create div placeholder for the new comment
//   var commentsDiv = document.getElementById('comments')

//   // create variable, using Lodash Fn, passing key/value pairs of the data
//   var templateHTML = templateFn({ 'comment': comment, 'commenter': commenter })
  
//   // append to the commentsDiv placeholder, += adds it
//   // why not '.appendChild' ?  because we don't have a child object, we have a string: commentTemplate
//   commentsDiv.innerHTML += templateHTML
// }



// using Lodash, and passing template from HTML page, referencing it // by ID: 'comment-template' within the script: 
// <script id="comment-template" type="text/x-lodash-template">
function postComment() {
  var commenter = document.getElementById("commenterName").value
  var comment = document.getElementById("commentText").value
  var commentTemplate = document.getElementById('comment-template').innerHTML

  var commentsDiv = document.getElementById('comments')
  var commentDate = new Date()

// we create a Lodash template, based on the innerHTML of 'comment-template' (which lives in our script on the HTML page) 
// it has <%= placeholders %>
  var templateFn = _.template(commentTemplate);

// we associate our local variables with the Lodash templaete <%= placeholders %> as JSON key/value pairs. 
// ie...this variable in my JS function goes in the placeholder
  var dataPairs = templateFn({ 'comment': comment, 'commenter': commenter, 'commentDate': commentDate })

// += appends to existing, instead of replacing innerHTML
  commentsDiv.innerHTML += dataPairs
}