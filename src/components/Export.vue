<template>
	<div class="columns">
		<button class="button is-primary is-size-6" v-on:click="exportCSV">
			Export to CSV
		</button>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'ExportUsers',
	props: {
		page: {
			type: Number,
			required: true
		}
	},
	methods: {
		async exportCSV() {
			const { data } = await axios.get(`https://randomuser.me/api/?page=${this.page}&results=10&seed=random&exc=login,nat,cell,registered,location&format=csv&dl`);
			const a = document.createElement("a");
			a.style.display = "none";
			document.body.appendChild(a);
			a.href = window.URL.createObjectURL(
				new Blob([data], { type: "text/plain;charset=utf-8" })
			);
			a.setAttribute("download", "users.txt");
			a.click();
			window.URL.revokeObjectURL(a.href);
			document.body.removeChild(a);
		}
	}
}
</script>