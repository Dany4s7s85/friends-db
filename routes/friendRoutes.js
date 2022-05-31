const friendController = require('../controlers/friendControler');
const express = require('express');
const router = express.Router();


router
  .route('/')
  .get(friendController.getAllFriend)
  .post(friendController.createFrient);
  router
  .route('/:id')
  .get(friendController.getOneFriend)
  .patch(friendController.getOneFriendAndUpdate)
  .delete(friendController.getOneFriendAndDelete)

module.exports = router;