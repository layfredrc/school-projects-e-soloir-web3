<template>
  <div class="container5">
    <h1 class="header-titl">Election en cours</h1>
    <div class="thumbnail">
      <img src="../images/election.png" alt="election en cours" />
    </div>

    <h1 class="header-titl">Résultat en cours</h1>

    <div class="chart" id="chart">
      <div v-if="!loaded" class="loader"></div>
      <my-bar-chart class="taille_chart" v-if="loaded" :chartdata="chartdata" :options="options" />
    </div>

    <h1 class="header-title-2">Candidats</h1>

    <div class="candidats">
      <div class="cards">
        <div
          v-for="candidat in candidats"
          :candidat="candidat"
          :key="candidat.id"
        >
          <Card :candidat="candidat" class="card-spacing" />
        </div>
      </div>
    </div>
  </div>
</template>

<script type="module">
// import App from "../js/bundle";
const { App } = require("../js/bundle");
</script>

<script>
const Card = httpVueLoader("../components/Card.vue");

module.exports = {
  name: "Resultat",
  components: {
    Card: Card,
  },
  props: {
    appweb3: App.testapp,
  },
  data() {
    return {
      loaded: false,
      chartdata: null,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "Présidentielle 2022",
          fontSize: 25,
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              categoryPercentage: 0.5,
              scaleLabel: {
                display: true,
                labelString: "Candidat",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Pourcentage",
              },
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                max: 100,
              },
            },
          ],
        },
      },
      noms: [],
      votes: [],
      candidats: [
        {
          id: 0,
          urlImg:
            "https://www.footamateur.fr/wp-content/uploads/2021/03/Emmanuel-Macron.jpg",
          name: "Emmanuel Macron",
          parti: "LREM",
          link: "https://en-marche.fr/emmanuel-macron",
        },
        {
          id: 1,
          urlImg:
            "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/125856117_4128252757191017_8781051623533867258_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=qpykKgxmoi8AX83IA1F&_nc_ht=scontent-cdg2-1.xx&oh=761b201e5777f1e10004aee123b88f61&oe=60EA8D28",
          name: "Marine Le Pen",
          parti: "RN",
          link: "https://rassemblementnational.fr/author/marinelepen/",
        },
      ],
    };
  },

  async mounted() {
    this.loaded = false;
    await App.init();
    const resultats = await App.getResultats();

    var noms = [];
    noms.push(resultats.nom[0]);
    noms.push(resultats.nom[1]);
    noms.push(resultats.nom[2]);

    var nbrVotes = [];
    nbrVotes.push(resultats.nbrVotes[0]);
    nbrVotes.push(resultats.nbrVotes[1]);
    nbrVotes.push(resultats.nbrVotes[2]);

    this.noms = noms;
    this.nbrVotes = nbrVotes;

    this.chartdata = {
      labels: noms,
      datasets: [
        {
          label: "Total des voix",
          data: nbrVotes,
          backgroundColor: [
            "rgba(255,99,132,1)",
            "rgba(54,162,235,1)",
            "rgba(255,206,86,1)",
          ],
          borderWidth: 1,
          borderColor: "#777",
          hoverBorderWidth: 3,
        },
      ],
    };

    this.loaded = true;
  },
};
</script>

<style scoped>
.header-title {
  width: 450px;
  margin-left: 235px;
  text-transform: uppercase;
  letter-spacing: 0.35rem;
  line-height: 2.5;

  color: #0b6ba8;
  border-bottom: 4px solid #0b6ba8;
}
.header-title-2 {
  width: 250px;
  margin-left: 235px;
  text-transform: uppercase;
  letter-spacing: 0.35rem;
  line-height: 2.5;

  color: #0b6ba8;
  border-bottom: 4px solid #0b6ba8;
}

.thumbnail {
  display: flex;
  justify-content: center;
}

.thumbnail img {
  width: 1200px;

  margin: 40px;
}

.cards {
  padding: 50px 100px;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
}
.card-spacing {
  margin: 50px;
}

.chart {
  padding: 100px 230px;
  text-align: -webkit-center;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 100px 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.container5{
    margin-top: 1%;
    margin-left: 5%;
}

.header-titl{
    width: 450px;
    margin-left: 15%;
    text-transform: uppercase;
    letter-spacing: .35rem;
    line-height: 2.5;

    color: #0B6BA8;
    border-bottom: 4px solid #0B6BA8;

}

.header-title-2{
    width: 250px;
    margin-left: 235px;
    text-transform: uppercase;
    letter-spacing: .35rem;
    line-height: 2.5;

    color: #0B6BA8;
    border-bottom: 4px solid #0B6BA8;

}

.thumbnail{
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.thumbnail img{
  width: 1200px;
  margin: 30px;
}

.cards{
  padding: 45px 0px;
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
}
.card-spacing{
  margin: 50px;
}

.chart{
  padding-left: 7%;
  padding-top: 5%;
  padding-bottom: 5%;
}

@media (max-width: 575.98px) { /*on applique les classes present dans medias sous la contrainte de la taille indiquer par max width*/

  .header-titl{
    font-size: 20px!important;
    width: 325px!important;
    margin: auto!important;
  }

  .header-title-2{

    font-size: 20px!important;
    width: 175px!important;
    margin: auto!important;
  }

  .candidats{
    align-content: center;
  }

  .taille_chart{
    display: block;
    height: 300px!important;
    width: 300px!important;
    margin-bottom: 30px;;
  }

  .thumbnail img{
    width: 100%!important;
    margin: 20px!important;
  }

  .cards{
    padding: 0px 0px;
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
  }

}

</style>
