import jwt from 'jsonwebtoken';

import User from '../model/Schema.js';

import asyncHandler from './asyncHandler';

const atuhinicate = asyncHandler(async(req, res, next)  => {
    let token;
    
})