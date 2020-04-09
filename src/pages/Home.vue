<template>
	<section class="section">
		<div class="container">
			<div class="rows has-text-centered">
				<article class="introduction row is-full">
					<p><strong>Welcome to My Directory</strong>, a directory of users.</p>
				</article>

        <div class="row is-full">
					<router-link class="capitalize button is-light is-size-6" to="/results">
						View Results
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Home'
}
</script>

<style scoped>
.introduction {
	padding-bottom: 3rem;
}
</style>