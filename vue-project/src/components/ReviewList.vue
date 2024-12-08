<template>
    <div>
      <h1>Reviews</h1>
      <input v-model="searchQuery" placeholder="Search reviews" />
      <ul>
        <li v-for="review in filteredReviews" :key="review.id">
          <a @click="selectReview(review)">{{ review.title.rendered }}</a>
        </li>
      </ul>
      <div v-if="selectedReview">
        <h2>{{ selectedReview.title.rendered }}</h2>
        <p v-html="selectedReview.content.rendered"></p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        reviews: [],
        searchQuery: '',
        selectedReview: null,
      };
    },
    computed: {
      filteredReviews() {
        return this.reviews.filter((review) =>
          review.title.rendered.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      selectReview(review) {
        this.selectedReview = review;
      },
    },
    created() {
      axios
        .get('https://live-reviewmattcms.pantheonsite.io/')
        .then((response) => {
          this.reviews = response.data;
        })
        .catch((error) => {
          console.error('Error fetching reviews:', error);
        });
    },
  };
  </script>
  