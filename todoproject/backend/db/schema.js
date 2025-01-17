import mongoose, { Schema } from "mongoose";


const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        // trim: true,
    },
    lastname: {
        type: String,
        required: true,
        // trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        // match: [/.+@.+\..+/, 'please enter the valid email address'],
    },
    password: {
        type: String,
        required: true,
        // minlength: 8,
        // select: false
    },

}, { timestamps: true })

const permissionsSchema = new Schema(
    {
        canManageUsers: { type: Boolean, default: false },
        canManageTodos: { type: Boolean, default: false },
        canViewLogs: { type: Boolean, default: false },
        canModerateComments: { type: Boolean, default: false },
    },
    { _id: false }
);

const AdminSchema = new Schema({
    firsname: {
        type: String,
        required: true,
        trim: true,
    },
    secondname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        match: [/.+@.+\..+/, 'please enter the valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
    },
    profilePicture: {
        type: String,
        default: "https://pngimg.com/uploads/doge_meme/small/doge_meme_PNG9.png"
    },
    permission: permissionsSchema,
},
    { timestamps: true });


const TodoSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed', 'archived'],
        default: 'pending'
    },
    priority: {
        type: String,
        default: null
    },
    changeLog: [
        {
            change: String,
            changedAt: { type: Date, default: Date.now },
            changedBy: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },

}, { timestamps: true });

export const User = mongoose.model('User', UserSchema);
export const Admin = mongoose.model('Admin', AdminSchema);
export const Todo = mongoose.model('Todo', TodoSchema);

