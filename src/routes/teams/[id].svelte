<script context="module">
	export async function preload({ params }) {
		return await this.fetch(`teams/${params.id}.json`)
							.then(resp => resp.json())
							.then(team => {
								return { team }
							});
	}
</script>

<script>
    export let team;
</script>

<h1>
    {team.name}
</h1>

