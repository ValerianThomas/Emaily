const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport'); //needs to be required after model/users as we are using it inside the passport (needs to be declare first)
const keys = require('./config/keys');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
		cookieSession({
			maxAge: 30 * 24 * 60 * 60 * 1000, //set the cookie for the deserialize User
			keys:[keys.cookieKey]
		})
	);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000 ; //heroku Dynamic Port Binding providing root and if undefined => 5000
app.listen(PORT,console.log("running"));

