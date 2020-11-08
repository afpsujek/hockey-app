import axios from 'axios';

export async function get(req, res, next) {
    let routeVals = { id: req.params.slug[0], season: req.params.slug[1] }
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const playerResp = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${routeVals.id}`);
    const statsResp = await axios.get(`https://statsapi.web.nhl.com/api/v1/people/${routeVals.id}/stats?stats=gameLog&season=${routeVals.season}`);

    var gamesWithGoals = statsResp.data.stats[0].splits.filter(game => game.stat.goals > 0);

    var json = JSON.stringify({
        playerData: playerResp.data.people[0],
        goalData: gamesWithGoals,
    });

    res.end(json);
}