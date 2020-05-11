const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			minlength: 3,
		},
		comment: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
