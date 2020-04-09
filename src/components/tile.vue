<template>
	<div class="columns is-multiline">
		<div class="column is-half tile" v-for="user in users" :key="user.id.value">
			<div class="columns tile box is-gapless">
				<div class="column is-one-third">
					<img :alt="`${user.name.first} ${user.name.last} Image`"
					:src="user.picture.large"/>
				</div>

				<article class="column">
					<p><strong>{{ user.name.first }} {{ user.name.last }}</strong></p>
					<p>Age: {{ user.dob.age }}</p>
					<p>Gender: {{ user.gender }}</p>
					<p>Email: {{ user.email }}</p>
					<p>Phone: {{ user.phone }}</p>
				</article>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Tile',
	props: {
		users: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
</style>