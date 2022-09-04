import mongoose from "mongoose";

const proposalSchema = mongoose.Schema({
  proposalName: {
    type: String,
    required: true,
  },
  proposalImageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  discussion: {
    type: String,
  },
  proposalSpace: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var Proposal = mongoose.model("Proposal", proposalSchema);

export default Proposal;
