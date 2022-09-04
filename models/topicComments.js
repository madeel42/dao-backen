import mongoose from "mongoose";

const topicCommentsSchema = mongoose.Schema({
  commentCreator: {
    type: String,
    // required: true,
  },
  message: {
    type: String,
    required: true,
  },
  topicId: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var TopicComment = mongoose.model("TopicComment", topicCommentsSchema);

export default TopicComment;
