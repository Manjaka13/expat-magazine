<template>
	<div class="news-list">
		<!-- Filtered news card list -->
		<ul v-if="filteredNews.length > 0" class="news-list__list">
			<li v-for="(value, key) in filteredNews" :key="key">
				<NewsCard
					:id="value.id"
					:title="value.title"
					:description="value.introduction"
					:image="value.images"
					:type="value.type"
					:date="value.date"
					:color="types[value.type].color"
					:icon="types[value.type].icon"
				/>
			</li>
		</ul>
		<!-- When no articles meet the selected filters -->
		<div v-if="news && filteredNews.length === 0" class="news-list__empty">
			<div class="box">
				<Icon class="icon" :icon="['fas', 'warning']" />
				<p class="caption">No articles</p>
			</div>
		</div>
		<!-- Loading news list -->
		<LoadingNews />
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import NewsCard from "@/components/NewsCard.vue";
import LoadingNews from "@/components/LoadingNews.vue";

/*
    Displays news list according to applied filters
*/

export default {
	name: "NewsList",
	components: {
		NewsCard,
		Icon: FontAwesomeIcon,
		LoadingNews,
	},
	// Get store variables we use here
	computed: mapGetters(["news", "filteredNews", "types"]),
};
</script>
