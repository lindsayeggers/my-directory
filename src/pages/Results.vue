<template>
  <section class="section">
		<div class="container">

      <Export :page="page" />

			<Tile :users="users" />

      <Pagination
				:page="page"
				@nextPage="getNextPage"
				@prevPage="getPrevPage"
			/>

		</div>
	</section>
</template>

<script>
import axios from 'axios';
import Export from '@/components/Export.vue';
import Pagination from '@/components/Pagination.vue'
import Tile from '@/components/Tile.vue'

export default {
  name: "Results",
  components: {
    Export,
    Pagination,
    Tile
  },
  data() {
		return {
			page: 1,
			users: []
		}
	},
  methods: {
    async getNextPage() {
			this.page += 1;
			if (this.page == 0) this.page = 1;
			await this.getUsers();
		},
		async getPrevPage() {
			this.page -= 1;
			if (this.page == 0) this.page = 1;
			await this.getUsers();
		},
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