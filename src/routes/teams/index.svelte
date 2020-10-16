<script context="module">
	export async function preload() {
		return await this.fetch('teams.json')
							.then(resp => resp.json())
							.then(teams => {
								return { teams }
							});
	}
</script>

<script>
	export let teams = [];
</script>

<svelte:head>
	<title>Teams</title>
</svelte:head>

<ul>
	{#each teams as team}
		<li><a rel="prefetch" href="teams/{team.id}">{team.name}</a></li>
	{/each}
</ul>

