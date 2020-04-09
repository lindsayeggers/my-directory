<template>
	<div id="app">
		<header class="header">
			<nav class="container navbar">
			</nav>
		</header>

		<main class="main">
			<router-view></router-view>
		</main>

		<footer class="footer">
			<div class="content has-text-centered">
				<p>&copy; Lindsay Eggers</p>
			</div>
		</footer>
	</div>
</template>

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
.main {
	flex: 1;
}
.footer {
	background-color: #eee;
}
.button {
	font-weight: 700;
}
.capitalize {
	text-transform: capitalize;
}
</style>