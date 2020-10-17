<script context="module">
	export async function preload({ params }) {
		return await this.fetch(`teams/${params.id}.json`)
							.then(resp => resp.json())
							.then(team => {
								console.log(team)
								return { 
									team: team.teamData,
									roster: team.teamRoster 
								}
							});
	}
</script>

<script>
	export let team;
	export let roster;
</script>

<h1>
    {team.name}
</h1>

{#each roster as player}
	<li>
		{player.person.fullName}
		{player.person.id}
	</li>
{/each}

