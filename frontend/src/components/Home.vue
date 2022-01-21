<template>
    <div>
    <div class="container2">
        <p class="taille1">E-soloir est une plateforme sécurisée pour effectuer votre <strong>vote électoral</strong></p>
        <p class="taille2"> <strong> E-soloir</strong>, c'est la solution proposée par l’État pour sécuriser et simplifier le vote électoral en ligne.</p>

       <div class="icon-container">
            <div class="contenu2">
                <img src="./images/fusee.png" alt="fusée" class="icon">
                <p class="taille2">Gagnez du temps</p>
            </div>
            <div class="contenu2">
                <img src="./images/bouclier.png" alt="fusée" class="icon">
                <p class="taille2">Sécurisez vos informations</p>
            </div>
            <div class="contenu2">
                <img src="./images/compte.png" alt="fusée" class="icon">
                <p class="taille2">Consulter les résultats</p>
            </div>
        </div>
        
        <div class="video-container">
            <div class="contenu3">
                <iframe class="video" src="https://www.youtube.com/embed/gEatS_HOWnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        
        <section id="comment-ca-marche">
            <div class="steps-container">
            <p class="taille3">Comment ça marche&nbsp;?</p>

            <div class="step">
            <div class="step-container">
                <div class="step-info">
                    <h5 class="gradient">1</h5>
                    <p class="taille4">
                       Pour créer un compte utilisateur, vous allez devoir saisir vos informations et <br> 
                      <strong>fournir les pièces nécessaires(carte d'identité, carte électorale, selfie avec les cartes)</strong>
                    </p>
                </div>
                <div class="image">
                    <img src="../images/account.png" data-lz-src="/images/img-bouton@2x.png" alt="Clic sur le bouton S'identifier avec FranceConnect" title="Clic sur le bouton S'identifier avec FranceConnect">
                </div>
            </div>
            </div>

            <div class="step">
                <div class="step-container">
                    <div class="step-info">
                        <h5 class="gradient">2</h5>
                        <p class="taille4">
                           Nous allons ensuite proccéder à la vérification de vos pièces d'identité et vos informations saisies lors de l'inscription <strong>pour valider votre compte utilisateur</strong>
                        </p>
                    </div>
                    <div class="image">
                        <img src="../images/approve.png" data-lz-src="/images/img-fi@2x.png" alt="Choix d'un compte - de multiples services sont disponibles via FranceConnect" title="Choix d'un compte - de multiples services sont disponibles via FranceConnect">
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-container">
                    <div class="step-info">
                        <h5 class="gradient">3</h5>
                        <p class="taille4">
                            Une fois votre compte valider vous pourrez <strong>vous connecter et voter !</strong>
                        </p>
                    </div>
                    <div class="image">
                        <img src="../images/voting-box.png" data-lz-src="/images/img-champs@2x.png" alt="Espace de connexion - saisie d'identifiants" title="Espace de connexion - saisie d'identifiants">
                    </div>
                </div>
            </div>

            <div class="step">
                <div class="step-container">
                    <div class="step-info">
                        <h5 class="gradient">4</h5>
                        <p class="taille4">
                            <strong>Consulter les résultats de l'élection en direct!</strong>
                        </p>
                        <p class="info-complement desktop taille4">
                            Il ne vous reste plus qu’à cliquer pour accéder à votre espace et poursuivre votre démarche.
                        </p>
                    </div>
                        <div class="image">
                            <img src="../images/stats.png" data-lz-src="/images/img-connecte@2x.png" alt="Clic sur le bouton &quot;J'accède à mon service&quot;" title="Clic sur le bouton &quot;J'accède à mon service&quot;">
                        </div>
                </div>
        </section>
    </div>

    <section id="aide"  class="fullwidth-section">
        <div class="aide-container">
            <p class="taille5">Besoin d’aide ?</p>
            <router-link to="/aide" class="button">Consultez notre FAQ</router-link>
        </div>
    </section>

    <section id="services" class="fullwidth-section">
        <div class="section-outter">
            <div class="section-inner">
                <p class="taille5">Commencer à voter</p>
                <div class="flex">
                    <router-link to="/connexion" class="button">Se connecter</router-link>
                    <router-link to="/inscription" class="button">S'inscrire</router-link>
                </div>
            </div>
        </div>
    </section>
</div>
</template>


<script>
module.exports = {
    name:'Home',
    props:{
        users:{type:String,default:''},
    },
    data(){
       return{
           test:''
       }
   }
  
}
</script>

<style scoped>

.container2{
    margin-top: 1%;
	padding: 16px 15%;
} 

.taille1{
    font-size: 3vw;
    font-weight: 600;
    color: #3E4553;
}

.taille2{
    font-size: 1vw;;
}

.taille3{
    font-size: 3vw;
    font-weight: 600;

    color: #034ea2;
    line-height: 1.05;
    font-weight: 800;
    margin-bottom: 50px;
    margin-top: 50px;
}

.taille4{
    font-size: 2vw!important;
    margin-top: 10px;
}

.taille5{
    font-size: 2.5vw;
    font-weight: 600;
    color: #034ea2;
    margin-bottom: 50px;
}

strong{
    color: #034EA2;
}

.text-container{
    text-align: center;
    display: flex;
    padding: 3% 12%;
    flex-direction: column;
    justify-content: space-around;
}

.icon-container{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
}

.contenu2{
    text-align: center;
    max-width: 200px;
}

.icon-container p{
    text-align: center;
    width: 200px;
    color: #3E4553;
    font-weight: bold;
    font-size: 2vw;
}

.contenu3{
    height: 500px;
}

.video{
    height: 100%;
    width: 100%
}

.icon{
    width: 200px;
}

.video-container{
    margin-top: 80px;
    text-align: center;
}

#comment-ca-marche .step .step-info {
    display: flex;
    margin-bottom: 16px;
}

.gradient{
    font-size: 64px;
    line-height: 1;
    font-weight: 800;
    color: #034EA2;
}

#comment-ca-marche .step img {
    width: 65%;
    margin: 0 auto;
    display: block;
    margin-bottom: 16px;
}

section.fullwidth-section {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    background-color: #E5EDF5;
    padding: 50px 230px;
}

.flex{
    display: flex;
}

.flex a{
    margin-right: 50px;
}

a.button, a.button-link, a:visited {
    padding: 18px 24px;
    display: table;
    border-radius: 4px;
    color: #fff !important;
    background-color: #034ea2;
    font-size: 18px;
    line-height: 1.4;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.2s linear, text-decoration 0.2s linear;
}

a.button:hover{
    background-color:#159bda ;
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}

@media (max-width: 575.98px) { /*on applique les classes present dans medias sous la contrainte de la taille indiquer par max width*/
	
    .container2{
        margin-top: 0%;
	    padding: 16px 15%;
    } 

    .icon{
        width: 50px!important;
    }

    .icon-container p{
        width: 50px!important;
        font-size: 1vw;
    }

    .icon-container{
        margin-top: 10px!important;
    }

    .contenu2{
        max-width: 50px!important;
    }

    .contenu3{
        height: 200px!important;
    }

    .video-container{
        margin-top: 30px!important;
        text-align: center;
    }

    a.button, a.button-link, a:visited {
        padding: 5px 9px!important;
        display: table;
        border-radius: 4px;
        /*color: #fff !important;*/
        background-color: #034ea2;
        font-size: 1vw!important;
        line-height: 1.4;
        font-weight: 700;
        text-align: center;
        text-decoration: none;
        transition: background-color 0.2s linear, text-decoration 0.2s linear;
    }

    section.fullwidth-section {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        background-color: #E5EDF5;
        padding: 0px 0px!important;
    }

    .taille5{
        font-size: 4vw!important;
        font-weight: 600;
        color: #034ea2;
        margin-bottom: 10px!important;
    }

    .gradient{
        font-size: 8vw!important;
        line-height: 1;
        font-weight: 800;
        color: #034EA2;
    }

    .image{
        width: 75%;
    }

    .step-container{
        margin-bottom: 30px;
    }

    #comment-ca-marche .step .step-info {
        flex-flow: column wrap;
    }

    .taille3{
        font-size: 5vw!important;
        margin-bottom: 30px!important;
        margin-top: 30px!important;
    }

}

@media (min-width: 992px){
    #comment-ca-marche .step .step-container .step-info {
    width: 54%;
    }

    #comment-ca-marche .step .step-container .step-info p {
    font-size: 20px;
    margin-bottom: 16px;
}
}

@media (min-width: 768px){
    #comment-ca-marche .step:nth-child(2n) .step-container {
        flex-direction: row-reverse;
    }

    #comment-ca-marche .step .step-container {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }

    #comment-ca-marche .step{
        margin-bottom: 32px;
    }

    #comment-ca-marche .step .step-container .step-info {
        width: 50%;
        flex-direction: column;
        flex-shrink: 0;
    }
    #comment-ca-marche .step .step-container .step-info p {
    font-size: 22px;
    }
}

</style>