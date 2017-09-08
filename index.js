import Youtube from 'youtube-api'

export class Sukoer {
    constructor (clientId, clientSecret) {
        this.clientId = clientId
        this.clientSecret = clientSecret
        this.oauth = Youtube.authenticate({
            type: 'oauth',
            client_id: clientId,
            client_secret: clientSecret,
            redirect_url: redirectUrl
        })
        this.authUrl = this.oauth.generateAuthUrl({
            access_type: 'online',
            scope: ['https://www.googleapis.com/auth/youtube']
        })
    }
    sukos (channel, max, tokens){
        this.oauth.setCredentials(tokens);
        const listReq=[]
        Youtube.search.list({
            type: 'video',
            part: 'snippet',
            pageToken: pageToken,
            maxResults: 50,
            channelId: channel,
        }, (err, data)=>{
            if (err){
                return console.log('error: ' + err);
            }

            for (var x in data.items) {
                listReq.push(data.items[x]);
            }
        })


    }
}
