"use server"
import User from '@/model/User';
import connectDB from '@/db/connectdb';

export const fetchuser = async (givenemail) => {
    await connectDB();
    let u = await User.findOne({ email: givenemail })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const updatedata = async (data) => {
    await connectDB();
    await User.findOneAndUpdate({ email: data.email }, data, { new: true })

}

export const fetchusername = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}
