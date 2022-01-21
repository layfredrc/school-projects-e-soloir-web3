<template>
  <div class="container8">
    <h1 class="header-title5">Voter</h1>
    <div v-if="loading" class="flex">
      <div class="card-loading">
        <h1>
          Votre vote est en cours de traitement veuillez patienter un instant..
        </h1>
        <div class="loader"></div>
      </div>
    </div>
    <div v-if="candidates_loading" class="flex">
      <div class="card-loading">
        <h1>Les candidats chargent..</h1>
        <div class="loader"></div>
      </div>
    </div>
    <div v-if="hasvoted">
      <h1 style="color: white; margin-top: 50px">Vous avez déjà voté</h1>
    </div>
    <div v-if="!hasvoted & !loading" class="candidats">
      <div
        class="cards-vote"
        v-for="(name, index) in candidats"
        :name="name"
        :key="index"
      >
        <vote-card :name="name" :index="index" @clicked="voter(index + 1)" />
      </div>
    </div>
  </div>
</template>

<script type="module">
// import App from "../js/bundle";
const { App } = require("../js/bundle");
</script>

<script>
const VoteCard = httpVueLoader("../components/VoteCard.vue");

module.exports = {
  name: "Voter",

  components: {
    VoteCard: VoteCard,
  },

  data() {
    return {
      hasvoted: false,
      candidates_loading: false,
      loading: false,
      appweb3: App.testapp,
      candidats: [],
    };
  },

  methods: {
    voter(candidatId) {
      this.loading = true;
      App.voter(candidatId).then((res) => {
        this.loading = false;
        alert("Votre vote a été pris en compte");

        var id_user = this.$attrs.user.id;
        console.log("id user : " + id_user);
        axios
          .post("http://localhost:5000/voter", {
            id_user,
          })
          .then((response) => {
            console.log(response);
          });

        this.$router.push("/resultat");
      });
    },
  },

  async mounted() {
    var url = "http://localhost:5000/hasvoted";
    const response = await axios.get(url, { withCredentials: true });
    console.log(response);
    this.hasvoted = response.data.hasvoted;
    console.log(this.hasvoted);
    if (!this.hasvoted) {
      this.candidates_loading = true;
      const res = await App.init();

      for (r of res) {
        this.candidats.push(r);
      }
      this.candidates_loading = false;
    }
  },
};
</script>

<style scoped>
.container8 {

	 margin-top: 15px;
    padding: 20px;
    background: #005C97;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #363795, #005C97);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #363795, #005C97); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.header-title5 {
  text-transform: uppercase;
    letter-spacing: .35rem;
    margin-left: 205px;
    color: white;
    line-height: 2.5;
    border-bottom: 3px solid white;
    display: inline-block;
    width: 150px;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

.flex {
  display: flex;
  justify-content: center;
}

.card-loading {
  height: 400px;
  width: 500px;
  padding: 50px;
  margin-top: 50px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  border-radius: 30px;
  background-color: white;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}

.card-loading h1 {
  font-weight: 400;
  font-size: 32px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 575.98px) { /*on applique les classes present dans medias sous la contrainte de la taille indiquer par max width*/

  .header-title5{
    font-size: 3vw!important;
    width: 80px!important;
    margin: auto!important;
  }
}
</style>
