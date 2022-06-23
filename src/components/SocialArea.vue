<template>
	<footer class="social-area">
		<ul class="social-area__list container">
			<li v-for="(value, key) in socialList" :key="key">
				<a class="link" :href="value.link" :title="value.title">
					<Icon :icon="value.icon" />
				</a>
			</li>
		</ul>
	</footer>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { socialList } from "@/helpers/const";

/*
    Social links
*/

export default {
	name: "SocialArea",
	components: {
		Icon: FontAwesomeIcon,
	},
	data() {
		return {
			socialList,
		};
	},
};
</script>
