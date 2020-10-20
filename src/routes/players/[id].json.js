import axios from 'axios';

export async function get(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const playerResp = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${req.params.id}`);

    var json = JSON.stringify({
        playerData: playerResp.data.people[0],
    });

    
    
    res.end(json);
}