<script context="module">
	export async function preload({ params }) {
		let routeVals = { id: params.slug[0], season: params.slug[1] }
		return await this.fetch(`players/${routeVals.id}/${routeVals.season}.json`)
							.then(resp => resp.json())
							.then(player => {
								return { 
									player: player.playerData
								}
							});
    }
</script>


<script>
	export let player;
</script>

<svelte:head>
	<title></title>
</svelte:head>

<h1>
    {player.fullName}
</h1>