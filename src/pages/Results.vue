<template>
  <section class="section">
		<div class="container">

			<Tile :users="users" />

		</div>
	</section>
</template>

<script>
import axios from 'axios';
import Tile from '@/components/Tile.vue'

export default {
  name: "Results",
  components: {
    Tile
  },
  data() {
		return {
			page: 1,
			users: []
		}
	},
  methods: {
    async getUsers() {
			const { data: { results } } = await axios.get(`https://randomuser.me/api/?page=${this.page}&results=10&seed=random`);
			this.users = results;
		}
  },
  async created() {
		await this.getUsers();
  }
}
</script>