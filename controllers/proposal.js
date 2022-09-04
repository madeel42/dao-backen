import Proposal from "../models/proposal.js";

export const getProposalById = async (req, res) => {
  try {
    const proposals = await Proposal.find({
      proposalSpace: req.params.id,
    }).sort({
      _id: -1,
    });
    res.status(200).json({
      data: proposals,
      IsSuccess: true,
      Message: "Proposal Get Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createProposal = async (req, res) => {
  const body = req.body;
  const newProposal = new Proposal({
    ...body,
    createdAt: new Date().toISOString(),
  });

  try {
    await newProposal.save();
    const proposals = await Proposal.find({
      proposalSpace: body.proposalSpace,
    }).sort({
      _id: -1,
    });

    res.status(201).json({
      data: proposals,
      Message: "Proposal Created Successfully",
      IsSuccess: true,
    });
  } catch (error) {
    res.status(409).json({ Message: error.message });
  }
};
