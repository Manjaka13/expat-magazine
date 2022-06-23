<template>
	<article class="news-card">
		<!-- Representation image -->
		<a class="news-card__link" :href="`/article/${id}`" :title="title">
			<figure class="news-card__image">
				<img class="image" v-lazy="image" :alt="title" />
			</figure>
			<!-- Article type -->
			<div class="news-card__tag" :style="{ background: color }">
				<Icon :icon="['fas', icon]" /> {{ type }}
			</div>
			<!-- Release date -->
			<div class="news-card__date">
				<Icon :icon="['fas', 'calendar-alt']" /> <span>{{ processDate() }}</span>
			</div>
			<div class="news-card__overlay"></div>
		</a>
		<!-- Title -->
		<h2 class="news-card__title">
			<a class="link" :href="`/article/${id}`" :title="title">{{ this.title }}</a>
		</h2>
		<div class="news-card__separator"></div>
		<!-- Introduction -->
		<p class="news-card__description" v-html="processDescription()"></p>
	</article>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { extractDescription, extractDate } from "@/helpers/utils.js";

/*
    Displays a news in a card
*/

export default {
	name: "NewsCard",
	components: {
		Icon: FontAwesomeIcon,
	},
	props: {
		id: {
			type: Number,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
	},
	methods: {
		// Extract description content
		processDescription() {
			return extractDescription(this.description);
		},
		// Only display date, not time
		processDate() {
			return extractDate(this.date);
		},
	},
};
</script>
