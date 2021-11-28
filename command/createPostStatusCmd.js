const createPostStatusUpdate = (service, status) => {
  let postId = null

  //the command
  return {
    run: () => service.postUpdate(status),
    undo: () => {
      if (postId) {
        service.destroyUpdate(postId)
        postId = null
      }
    },
    serialize: () => ({ type: "status", action: "post", status }),
  }
}
