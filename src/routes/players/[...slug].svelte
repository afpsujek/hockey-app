<script context="module">
	export async function preload({ params }) {
		let routeVals = { id: params.slug[0], season: params.slug[1] }
		const res = await this.fetch(`players/${routeVals.id}/${routeVals.season}.json`)
		const respJson = await res.json()
		return { player: respJson.playerData, goals: respJson.goalData }
    }
</script>


<script>
	export let player;
	export let goals;
</script>

<svelte:head>
	<title></title>
</svelte:head>

<h1>
    {player.fullName}
</h1>
{#each goals as goal}
	<li>
		<a rel="prefetch" href="goals/{player.id}/{goal.game.gamePk}">{goal.date}</a>
	</li>
{/each}