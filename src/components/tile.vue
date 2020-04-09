<template>
	<div class="columns is-centered">
		<div class="column tile is-parent is-vertical is-three-fifths">
			<div class="columns tile is-child box has-text-centered-touch" v-for="user in users" :key="user.id.value">
				<div class="column is-narrow">
					<img :alt="`${user.name.first} ${user.name.last} Image`"
					:src="user.picture.large"/>
				</div>

				<article class="column">
					<p class="capitalize"><strong>{{ user.name.first }} {{ user.name.last }}</strong></p>
					<p class="capitalize">Age: {{ user.dob.age }}</p>
					<p class="capitalize">Gender: {{ user.gender }}</p>
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