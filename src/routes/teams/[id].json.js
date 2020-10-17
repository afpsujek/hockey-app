import axios from 'axios';

export async function get(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const teamResp = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${req.params.id}`);
    const rosterResp = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${req.params.id}/roster`)

    var json = JSON.stringify({
        teamData: teamResp.data.teams[0],
        teamRoster: rosterResp.data.roster,
    });
    
    res.end(json);
}