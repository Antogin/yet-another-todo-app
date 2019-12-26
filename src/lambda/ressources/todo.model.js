import { Schema, model } from 'mongoose';

const todoSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
			maxlength: 50
		},
		done: {
			type: Boolean,
			required: true,
			default: false
		}
		/*
		createdBy: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'user',
			required: true
		},
		list: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: 'list',
			required: true
		}
		*/
	},
	{ timestamps: true }
);

todoSchema.index({ name: 1 }, { unique: true });

export const TodoModel = model('todo', todoSchema);
