<template>
	<div :class="`navbar-filter ${trigger ? 'navbar-filter--shown' : ''}`">
		<form class="navbar-filter__form">
			<!-- Article order -->
			<div class="group">
				<label class="label">
					<Icon :icon="['fas', 'arrow-down-a-z']" /> Order by:
				</label>
				<select
					class="select"
					@change="(e) => updateField('order', e.target.value)"
				>
					<option
						v-for="(value, key) in orderList"
						:key="key"
						:value="value"
						:selected="value === order"
					>
						{{ value }}
					</option>
				</select>
			</div>
			<!-- Article type -->
			<div class="group">
				<label class="label">
					<Icon :icon="['fas', 'arrow-down-short-wide']" /> Type:
				</label>
				<select class="select" @change="(e) => updateField('type', e.target.value)">
					<option
						v-for="(value, key) in types"
						:key="key"
						:value="key"
						:selected="key === type"
					>
						{{ key }}
					</option>
				</select>
			</div>
			<!-- Article keyword search -->
			<div class="group">
				<label class="label"> <Icon :icon="['fas', 'search']" /> Search: </label>
				<div class="navbar-filter__input">
					<input
						class="input"
						type="text"
						placeholder="Keyword(s)"
						v-model="search"
					/>
					<Icon
						v-if="search.length > 0"
						class="icon icon--remove"
						:icon="['fas', 'times-circle']"
						@click.prevent="flushSearch"
					/>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
	sortNewsDate,
	sortNewsType,
	sortNewsKeyword,
	sortNewsTitle,
} from "@/helpers/utils";
import { defaultType, dateOrderList, titleOrderList } from "@/helpers/const";

/*
    Filters
*/

export default {
	name: "NavbarFilter",
	components: {
		Icon: FontAwesomeIcon,
	},
	props: {
		trigger: {
			type: Boolean,
			require: false,
		},
	},
	data() {
		return {
			dateOrder: [...dateOrderList],
			titleOrder: [...titleOrderList],
			orderList: [...dateOrderList, ...titleOrderList],
			order: dateOrderList[0],
			type: defaultType,
			search: "",
		};
	},
	created() {
		if (this.news.length > 0) this.filterNews();
	},
	methods: {
		// Get store actions
		...mapActions(["updateFilteredNews"]),
		// Flush keyword search bar
		flushSearch() {
			this.search = "";
		},
		// Updates a filter field
		updateField(field, data) {
			if (field === "type") this.type = data;
			else if (field === "order") this.order = data;
			// Apply these filters
			this.filterNews();
		},
		// Sort news list
		filterNews() {
			let filtered = [...this.news];
			// Keyword sort
			if (this.search.length > 0)
				filtered = sortNewsKeyword(filtered, this.search);
			// News type sort
			filtered = sortNewsType(filtered, this.type);
			// Order date sort
			if (this.dateOrder.includes(this.order))
				filtered = sortNewsDate(filtered, this.order);
			// Order title sort
			else if (this.titleOrder.includes(this.order))
				filtered = sortNewsTitle(filtered, this.order);
			// Update store
			this.updateFilteredNews(filtered);
		},
	},
	// Store variables that will be used here
	computed: mapGetters(["types", "news", "filteredNews"]),
	watch: {
		// On search keyword update, apply all filters
		search() {
			this.filterNews();
		},
	},
};
</script>
