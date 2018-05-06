
const getPosts = function getPosts(req, res){
  const posts = req.store.posts;
  res.status(200).send(posts);
};

const addPost = function addPost(req, res){
  let post = req.body;
  const postId = req.store.posts.length;
  if( post.name && post.name.trim() && post.url && post.url.trim()){
    post.id= postId;
    req.store.posts.push(post);
    res.status(201).send(post);
  }
  res.status(404).send();
};

const updatePost = function updatePost(req, res){
  const postId = req.params.postId;
  let post = req.body;
  let posts = req.store.posts;

  posts.forEach( post =>{
    if(post.id == postId){
      req.store.posts[postId] = Object.assign(req.store.posts[postId],post);
      res.status(200).send(req.store.posts[postId]);
    }
  });
  res.status(404).send();
};

const removePost = function removePost(req, res){
  const postId = req.params.postId;
  let posts = req.store.posts;

  posts.forEach( post =>{
    if(post.id == postId){
      if( post.name && post.name.trim() && post.url && post.url.trim()){
        req.store.posts.splice(postId,1);
        res.status(204).send();
      }
      res.status(404).send();
    }
  });
  res.status(404).send();

};

module.exports ={
  getPosts : getPosts,
  addPost : addPost,
  updatePost : updatePost,
  removePost : removePost
};
