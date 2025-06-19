import User from '../model/Schema.js';
import bcrypt from 'bcryptjs';
import createToken from '../utils/createToken.js';


const createUser = async (req, res) => {
    const { username, email, password} = req.body;

    if(!username || !email || !password) {
        throw new Error("pleae Fill All The Feields");
    }

    const existingUser = await User.findOne({email});
    if (existingUser) res.status(400).send('User Already Taken');
    
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);




    const newUser = new User({
        username, 
        email,
        password : hashedPassword,
    });


    try {
        await newUser.save();
        createToken (res, newUser._id);
        res.status(201).json({
         _id : newUser._id,
         username : newUser.username,
         email : newUser.email,
         password: newUser.hashedPassword,
         isAdmin : newUser.isAdmin

        });
        
    } catch (error) {
        throw new Error('Invalid User Data');
        
    };


};

export  {createUser};
