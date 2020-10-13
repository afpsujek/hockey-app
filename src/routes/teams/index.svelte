<script context="module">
	export async function preload() {
		const resp = await this.fetch('teams')
		const data = await resp.json();
		return {teams: data}
	}
</script>

<script>
	export let teams;
</script>

<svelte:head>
	<title>Teams</title>
</svelte:head>

<ul>
	{#each teams as team}
		<li>{team.name}</li>
	{/each}
</ul>

