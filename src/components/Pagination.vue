<template>
	<div class="columns has-text-centered">
    <div class="column is-offset-three-fifths is-one-fifth">
      <button class="button is-primary is-size-6 is-fullwidth" @click="prevPage" :disabled="isDisabled">
				Previous
			</button>
    </div>
    <div class="column is-one-fifth">
      <button class="button is-primary is-size-6 is-fullwidth" @click="nextPage">
				Next
			</button>
    </div>
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