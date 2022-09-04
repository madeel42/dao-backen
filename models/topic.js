import mongoose from "mongoose";

const topicSchema = mongoose.Schema({
  topicName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  spaceId: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    // required: true,
  },
  status: {
    type: String,
    default: "unActive",
  },
  comments: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var Topic = mongoose.model("Topic", topicSchema);

export default Topic;
