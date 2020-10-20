<script context="module">
	export async function preload({ params }) {
		return await this.fetch(`teams/${params.id}.json`)
							.then(resp => resp.json())
							.then(team => {
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

<svelte:head>
	<title>{team.name}</title>
</svelte:head>

<h1>
    {team.name}
</h1>

{#each roster as player}
	<li>
		{player.person.fullName}
		<a rel="prefetch" href="players/{player.person.id}">{player.person.id}</a>
	</li>
{/each}

