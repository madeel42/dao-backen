import mongoose from "mongoose";

const spaceSchema = mongoose.Schema({
  spaceMembers: {
    type: Number,
    default: 0,
  },
  spaceName: {
    type: String,
    required: true,
  },
  spaceImageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var CreateSpace = mongoose.model("CreateSpace", spaceSchema);

export default CreateSpace;
