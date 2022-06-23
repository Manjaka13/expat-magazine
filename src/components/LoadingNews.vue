<template>
	<div :class="`loading-news ${loaded ? 'loading-news--finished' : ''}`">
		<LoadingSpinner />
		<p class="loading-news__caption">Please wait...</p>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

/*
	Component that fetches news and shows loading spinner
*/

export default {
	name: "LoadingNews",
	components: {
		LoadingSpinner,
	},
	props: {
		id: {
			type: String,
			required: false,
		},
	},
	data() {
		return {
			loaded: false,
		};
	},
	// Get store actions
	methods: { ...mapActions(["getNews"]) },
	// Get store variable
	computed: mapGetters(["news"]),
	created() {
		// Fetch news if not done yet
		if (!this.news || this.news.length === 0) this.getNews();
	},
	watch: {
		// Finished fetching news
		news() {
			let article = null;
			if (this.news.length > 0) {
				// If id passed, get the corresponding article
				if (this.id) {
					for (let i = 0; i < this.news.length; i++)
						if (this.news[i].id === parseInt(this.id)) {
							article = { ...this.news[i] };
							break;
						}
				}
				// Tell upper component loading is finished
				this.$emit("finish", article);
				// Vanish loading
				this.loaded = true;
			}
		},
	},
};
</script>
