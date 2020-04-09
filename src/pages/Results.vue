<template>
  <section class="section">
		<div class="container">

			<Tile />

		</div>
	</section>
</template>

<script>
import Tile from '@/components/tile.vue'

export default {
  name: "Results",
  components: {
    Tile
  }
}
</script>