<script>
	import {styled} from '../styletron-svelte.js'

	const Heading1 = styled('h1', {
		color: 'red'
	})

	const Paragraph = styled('p', {
		color: 'blue'
	})
</script>

<main>
	<Heading1>Red Heading1</Heading1>
	<Paragraph>Blue paragraph!</Paragraph>
</main>

<style></style>