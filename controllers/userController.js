
import User from "../model/Schema.js";

const createUser = (async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        throw new error("please fill all the fields");
    }
    const userReapted = await User.findOne({ email });
    if (userReapted) {
        throw new error("User already exists");

    }
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
        throw new error("Invalid User Data");
    }

});

export { createUser };

    