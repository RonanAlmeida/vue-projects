const app = Vue.createApp({
  data() {
    return {
      id: 1,
      name: "Cowboy Bebop",
      score: "88.55",
      popularity: "10",
      poster: "https://media.kitsu.io/anime/poster_images/1/medium.jpg?",
      cover: "https://media.kitsu.io/anime/cover_images/1/large.jpg?141",
      summary:
        "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind.",
    };
  },
  methods: {
    async getUser() {
      var request = new XMLHttpRequest();

      request.open("GET", "https://kitsu.io/api/edge/anime");

      request.onreadystatechange = function () {
        if (this.readyState === 4) {
          console.log("Body:", this.responseText);

          this.name = this.responseText;
        }
      };

      request.onload = () => {
        const data = JSON.parse(request.response);
        const attr = data.data[this.id].attributes;
        this.id+=1

        console.log(attr);
        this.name = attr.canonicalTitle;
        this.score = attr.averageRating;
        this.popularity = attr.popularityRank;
        this.poster = attr.posterImage.medium;
        this.cover = attr.coverImage.original;
        this.summary = attr.synopsis;

      };

      request.send();
      console.log("thisi s");
      console.log(request);
    },
  },
});

app.mount("#app");
