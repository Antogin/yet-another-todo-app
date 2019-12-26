import { connect } from 'mongoose';

const dbUrl = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PWD;

connect(`mongodb+srv://${dbUser}:${dbPass}@${dbUrl}/test?retryWrites=true&w=majority`, {
	useNewUrlParser: true
});
