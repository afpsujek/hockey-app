<script context="module">
	export async function preload({ params }) {
		return await this.fetch(`players/${params.id}.json`)
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