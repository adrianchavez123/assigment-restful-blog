
const getComments = function getComments(req, res){
  const postId = req.params.postId;
  let posts = req.store.posts;
  posts.forEach( post =>{
    if(post.id == postId){
      console.log(post);
      if( post.comments)
        res.status(200).send(post);

    }
  });
  res.status(404).send();
};

const addComments = function addComments(req, res){
  const postId = req.params.postId;
  let comment = req.body;
  if( comment.text && comment.text.trim() ){
    let posts = req.store.posts;
    posts.forEach( post =>{
      if(post.id == postId){
        if(post.comments){
          post.comments.push(comment);
        }else{
          post.comments = [];
          post.comments.push(comment);
        }
        res.status(201).send(comment);
      }
    });
  }
  res.status(404).send();
};

const updateComment = function updateComment(req, res){
  const postId = req.params.postId;
  const commentId = req.params.commentId;
  const comment = req.body;

  if( comment.text && comment.text.trim() ){
    let posts = req.store.posts;
    posts.forEach( post =>{
      if(post.id == postId){
        if( post.comments ){
          post.comments[commentId] = Object.assign(post.comments[commentId],comment);
          res.status(200).send(post.comments[commentId]);
        }
      }
    });
  }
  res.status(404).send();
};

const removeComment = function removeComment(req, res){
  const postId = req.params.postId;
  const commentId = req.params.commentId;

  let posts = req.store.posts;
  posts.forEach( post =>{
    if(post.id == postId){
      if( post.comments ){
        req.store.posts[postId].comments.splice(commentId,1);
        res.status(204).send();
      }
    }
  });

  res.status(404).send();
};

module.exports = {
  getComments :getComments,
  addComments : addComments,
  updateComment : updateComment,
  removeComment : removeComment
};
