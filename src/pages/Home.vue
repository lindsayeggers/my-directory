<template>
	<section class="section hero is-fullheight">
		<div class="container hero-body">
			<div class="rows box has-text-centered">
				<article class="introduction row is-full">
					<p class="is-size-2">Welcome to <strong>People Finder</strong>, a directory of users</p>
				</article>
        <div class="row is-full">
					<router-link class="capitalize button is-primary is-size-6" to="/results">
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
.section {
  background-image: url('../assets/social-media.png');
}
</style>