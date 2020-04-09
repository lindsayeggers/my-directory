<template>
	<div class="columns is-centered has-text-centered">
		<nav class="is-centered" role="navigation" aria-label="pagination">
			<button class="button is-primary is-size-6" @click="prevPage" :disabled="isDisabled">
				Previous
			</button>

			<button class="button is-primary is-size-6" @click="nextPage">
				Next page
			</button>
		</nav>
	</div>
</template>

<script>
export default {
	Name: 'Pagination',
	props: {
		page: {
			type: Number,
			required: true
		}
	},
	computed: {
		isDisabled() {
			return this.page == 1;
		}
	},
	methods: {
		nextPage() {
			this.$emit('nextPage');
		},
		prevPage() {
			this.$emit('prevPage');
		}
	}
}
</script>