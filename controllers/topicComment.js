import Topic from "../models/topic.js";
import TopicComment from "../models/topicComments.js";

export const getTopicDetailsById = async (req, res) => {
  try {
    const topicComments = await TopicComment.find({
      topicId: req.params.id,
    }).sort({
      _id: -1,
    });

    res.status(200).json({
      data: topicComments,
      IsSuccess: true,
      Message: "TopicDetails Get Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const addNewMessage = async (req, res) => {
  const body = req.body;

  const newComment = new TopicComment({
    ...body,
    createdAt: new Date().toISOString(),
  });

  try {
    await newComment.save();

    const topicComments = await TopicComment.find({
      topicId: req.body.topicId,
    }).sort({
      _id: -1,
    });

    res.status(200).json({
      data: topicComments,
      IsSuccess: true,
      Message: "Comment Added Successfully",
    });
  } catch (error) {
    res.status(409).json({ TopicComment: error.message });
  }
};

export const addLikeOrDislike = async (req, res) => {
  const body = req.body;
  try {
    if (body.purpose === "Like") {
      await TopicComment.findOneAndUpdate(
        { _id: body?.commentId },
        {
          $push: { likes: body?.pressedBy },
        },
        {
          new: true,
        }
      );
    } else {
      await TopicComment.findOneAndUpdate(
        { _id: body?.commentId },
        {
          $pullAll: {
            likes: [body?.pressedBy],
          },
        },
        {
          new: true,
        }
      );
    }

    const topicComments = await TopicComment.find({
      topicId: body.topicId,
    }).sort({
      _id: -1,
    });

    res.status(200).json({
      data: topicComments,
      IsSuccess: true,
      Message: body?.purpose === "Like" ? "Liked" : "Disliked",
    });
  } catch (error) {
    res.status(409).json({ TopicComment: error.message });
  }
};
