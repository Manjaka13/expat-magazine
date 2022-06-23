<template>
	<div id="home">
		<Navbar />
		<div class="container">
			<router-view>
				<router-link to="/"> Home </router-link>
				<router-link to="/article"> ArticleDisplay </router-link>
			</router-view>
		</div>
		<SocialArea />
	</div>
</template>

<script>
import SocialArea from "@/components/SocialArea.vue";
import Navbar from "@/components/Navbar.vue";

export default {
	components: {
		Navbar,
		SocialArea,
	},
};
</script>
