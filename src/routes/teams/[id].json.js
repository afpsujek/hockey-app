import axios from 'axios';

export async function get(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const resp = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${req.params.id}`);

    var json = JSON.stringify(resp.data.teams[0])
    
    res.end(json);
}