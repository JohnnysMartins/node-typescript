import { Schema, model } from 'mongoose';
import * as mongoose from 'mongoose';

mongoose.pluralize(null);

const databaseSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: { type: String, required: true },
	password: { type: String, required: true },
	created_at: { type: Date, default: Date.now }
});

const UserModel = model('User', databaseSchema);

export default UserModel;