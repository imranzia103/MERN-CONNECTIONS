import User from "../model/Schema.js";

const createUser = async(req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    await newUser.save();
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid User Data");
  }
};

export { createUser };
