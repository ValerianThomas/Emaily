// dev.js don't commit this
const ClientID = "1085057275129-9pneh2kuis3cj6por98psui0vjv6fscb.apps.googleusercontent.com";
const ClientSecret = "1gG27URdfs-1H7xSmm-wLwhn";
const mLabConnection = 'mongodb://val:motdepasse@ds255319.mlab.com:55319/val-emaily-dev';
const cookieKey = "dkmfjdmkfmdsknlksdnvdurpthnvhaoshnbfjd";
module.exports = {
	googleClientID:ClientID,
	googleCLientSecret:ClientSecret,
	mongoURI:mLabConnection,
	cookieKey:cookieKey,
	stripePublishableKey: 'pk_test_Qc5GtRfsDZ7vwRWmbRu5OnFp',
	stripeSecretKey: 'sk_test_gCyre5lGWy5jVPX7O93hmcPI'
};

