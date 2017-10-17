function postComment(){
  event.preventDefault()
  let bodyText = event.srcElement.commentText.value 
  let commenter = event.srcElement.commenterName.value 
  
  let commentBody = createCommentBody(bodyText)
  let commenterLabel = createCommenterLabel(commenter)
 
  addToDom(commentBody, commenterLabel)
}

function createCommentBody(comment){
  let commentDiv = document.createElement('div')
  let commentPara = document.createElement('p')
  commentPara.innerHTML = comment
  commentDiv.appendChild(commentPara)
  return commentDiv
}

function createCommenterLabel(commenter){
  let commenterDiv = document.createElement('div')
  let commenterPara = document.createElement('p')

  let date = new Date()
  let yyyy = date.getFullYear()
  let mm = date.getMonth()
  let dd = date.getDay()
  let commentDate = (mm + '-' + dd + '-' + yyyy)

  commenterPara.innerHTML = `This was posted on ${commentDate} by: ${commenter}`
  commenterDiv.appendChild(commenterPara)
  return commenterDiv
}

function addToDom(commentDiv, commenterDiv){
  let comment = document.getElementById('comments')
  let commenter = document.getElementById('comments')
  commenter.appendChild(commenterDiv)
  comment.appendChild(commentDiv)
}
