import CreateSpace from "../models/createSpace.js";

export const getSpaces = async (req, res) => {
  try {
    const spaces = await CreateSpace.find().sort({ _id: -1 });

    res.status(200).json({
      data: spaces,
      IsSuccess: true,
      Message: "Spaces Get Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createSpace = async (req, res) => {
  const body = req.body;
  const newSpace = new CreateSpace({
    ...body,
    createdAt: new Date().toISOString(),
  });

  try {
    await newSpace.save();
    const spaces = await CreateSpace.find().sort({ _id: -1 });

    res.status(201).json({
      data: spaces,
      Message: "Space Created Successfully",
      IsSuccess: true,
    });
  } catch (error) {
    res.status(409).json({ Message: error.message });
  }
};
