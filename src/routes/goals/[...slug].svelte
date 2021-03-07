<script context="module">
	export async function preload({ params }) {
		let routeVals = { id: params.slug[0], game: params.slug[1] }
		const res = await this.fetch(`players/${routeVals.id}/${routeVals.game}.json`)
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