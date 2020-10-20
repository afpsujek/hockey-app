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
	import { season } from "../../stores/season";
</script>

<svelte:head>
	<title>Teams</title>
</svelte:head>

<h1>
	Season
</h1>
<form>
	<label>Start</label>
	<input type="text" bind:value={$season.startSeason}>
	<label>End</label>
	<input type="text" bind:value={$season.endSeason}>
</form>

<ul>
	{#each teams as team}
		<li><a rel="prefetch" href="teams/{team.id}">{team.name}</a></li>
	{/each}
</ul>

