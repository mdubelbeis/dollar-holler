<script lang="ts">
	import Dashboard from '$lib/layouts/Dashboard.svelte';

	export let data;

	console.log(data);
</script>

<Dashboard>
	<h1>Invoices</h1>
	<p>Invoice ID: {data.id}</p>
</Dashboard>
