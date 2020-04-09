<template>
	<div id="app">
		<header class="header">
			<nav class="container navbar">
        <div class="navbar-brand">
          <router-link class="router-link" to="/">
            <img alt="People Finder Logo" src="./assets/logo.png" class="header-logo">
            <strong class="header-name">People Finder</strong>
          </router-link>
				</div>
			</nav>
		</header>

		<main class="main">
			<router-view></router-view>
		</main>

		<footer class="footer">
			<div class="content has-text-centered">
				<p>&copy; {{ new Date().getFullYear() }} Lindsay Eggers</p>
			</div>
		</footer>
	</div>
</template>

// <script>
// export default {
//   computed: {
//     currentYear() {
//       return new Date().getFullYear()
//     }
//   }
// }
// </script>

<style lang="scss">
button,
#app {
	font-family: 'Quicksand', sans-serif;
}
#app {
	display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.header {
	border-bottom: 1px solid #eee;
}
.header-logo {
  height: 2.5rem;
  width: auto;
}
.header-name {
  padding-top: .75rem;
  padding-left: .5rem;
}
.main {
	flex: 1;
}
.router-link {
  color: black;
}
.footer {
	background-color: #eee;
}
.button {
	font-weight: 700;
}
</style>