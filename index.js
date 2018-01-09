const twitter = require('twitter');
 
const twitter_client = new twitter({
    consumer_key: 'your_consumer_key',
    consumer_secret: 'your_consumer_secret_key',
    access_token_key: 'your_access_token_key',
    access_token_secret: 'your_access_token_secret'
});
 
twitter_client.post('statuses/update', {status: 'auto tweet test' + date},  function(error, tweet, response){
    if(error) {
		console.log('error')
    }
});
