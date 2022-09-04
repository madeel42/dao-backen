import Topic from "../models/topic.js";

export const getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find({ status: "unActive" }).sort({
      _id: -1,
    });
    console.log(topics);
    res.status(200).json({
      data: topics,
      IsSuccess: true,
      Message: "Topic Get Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const updateTopicStatus = async (req, res) => {
  try {
    const topic = await Topic.findByIdAndUpdate(
      req.body.topicId,
      {
        $set: {
          status: req.body.status,
        },
      },
      {
        new: true,
      }
    );

    const topics = await Topic.find({ status: "unActive" }).sort({
      _id: -1,
    });

    res.status(200).json({
      data: topics,
      IsSuccess: true,
      Message: "Topic Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export const getTopicsById = async (req, res) => {
  try {
    const topics = await Topic.find({
      spaceId: req.params.id,
      status: "Approve",
    }).sort({
      _id: -1,
    });
    console.log(topics);
    res.status(200).json({
      data: topics,
      IsSuccess: true,
      Message: "Topic Get Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createTopic = async (req, res) => {
  const body = req.body;

  const newTopic = new Topic({
    ...body,
    createdAt: new Date().toISOString(),
  });

  try {
    await newTopic.save();

    const topics = await Topic.find({ spaceId: body.spaceId , status: "Approve", }).sort({
      _id: -1,
    });

    res.status(201).json({
      data: topics,
      Message: "Topic Created Successfully",
      IsSuccess: true,
    });
  } catch (error) {
    res.status(409).json({ Message: error.message });
  }
};
