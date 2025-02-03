import mongoose, { Schema, model } from 'mongoose';

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		preparation: {
			type: String,
			enum: ['Interview', 'Competition'],
			default: 'Interview',
		},
	},
	{ timestamps: true }
);

userSchema.index({ username: 1, email: 1 });

const UserModel = mongoose.models.users || model('users', userSchema);
console.log(mongoose.models['users'], 'This is model from usermodel');

export default UserModel;
