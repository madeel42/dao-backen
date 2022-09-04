import express from "express";
import { createSpace, getSpaces } from "../controllers/createSpace.js";
import { createProposal, getProposalById } from "../controllers/proposal.js";
import {
  createTopic,
  getAllTopics,
  getTopicsById,
  updateTopicStatus,
} from "../controllers/topic.js";
import {
  addLikeOrDislike,
  addNewMessage,
  getTopicDetailsById,
} from "../controllers/topicComment.js";

const router = express.Router();

router.get("/Get", getSpaces);
router.post("/Add", createSpace);
router.post("/Proposal/Add", createProposal);
router.get("/Proposal/Get/:id", getProposalById);
router.post("/Topic/Add", createTopic);
router.get("/Topic/Get/:id", getTopicsById);
router.get("/Topic/GetAll", getAllTopics);
router.put("/Topic/Update", updateTopicStatus);
router.get("/Topic/Details/Get/:id", getTopicDetailsById);
router.post("/Topic/Details/Add", addNewMessage);
router.put("/Topic/Details/Update/:id", addLikeOrDislike);

export default router;
