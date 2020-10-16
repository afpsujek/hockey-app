import axios from 'axios';

export async function get(req, res, next) {
    var teamData;

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const resp = await axios.get('https://statsapi.web.nhl.com/api/v1/teams');
    teamData = resp.data.teams;

    var json = JSON.stringify(teamData.map(team => {
        return {
            id: team.id,
            name: team.name
        }
    }))
    
    res.end(json);
}