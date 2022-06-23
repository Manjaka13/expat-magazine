<template>
	<div class="article-display">
		<div v-if="article">
			<div class="article-display__head">
				<h2 class="article-display__title">{{ article.title }}</h2>
				<figure class="article-display__image">
					<img class="image" v-lazy="article.image" :alt="article.title" />
				</figure>
			</div>
			<p class="article-display__intro" v-html="processDescription()"></p>
			<p class="article-display__body" v-html="processBody()"></p>
		</div>
		<LoadingNews :id="id" @finish="finishedLoading" />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import LoadingNews from "@/components/LoadingNews.vue";
import {
	extractDescription,
	extractDate,
	extractBody,
} from "@/helpers/utils.js";

/*
	Article page
*/

export default {
	name: "ArticleDisplay",
	components: {
		LoadingNews,
	},
	data() {
		return {
			article: null,
			id: this.$route.params.id,
		};
	},
	// Get store variables we use here
	computed: mapGetters(["news"]),
	methods: {
		// Callback when loading finished
		finishedLoading(article) {
			this.article = article;
		},
		// Extract description content
		processDescription() {
			return extractDescription(this.article.introduction);
		},
		// Only display date, not time
		processDate() {
			return extractDate(this.article.date);
		},
		// Extracts body content
		processBody() {
			return extractBody(this.article.body);
		},
	},
};
</script>
