const { networks } = require("../../truffle-config");
const { RelayProvider } = require('@opengsn/provider')
const Web3 = require("web3")
ethers = require("ethers")

App = {
  web3Provider: null,
  election: null,
  account: "",
  election_old: null,
  testapp: "this is a test message",

  init: async function () {
    return await App.initWeb3();
  },

  initWeb3: async function () {
    const conf = {
      ourContract: '0x40376aa2891436dd7EBc305b2041939ECd98d515',
      paymaster: '0x9e59f087129F92ddDe8Ce90c204fec6423897199',
      forwarder: '0x83A54884bE4657706785D7309cf46B58FE5f6e8a',
      gasPrice: 16000000000   // 16 Gwei
    }
    const config = {
      paymasterAddress: '0x9e59f087129F92ddDe8Ce90c204fec6423897199'
    }

    let origProvider = networks.rinkerby.provider();

    App.web3Provider = await RelayProvider.newProvider({ provider: origProvider, config }).init()
    App.account = origProvider.addresses[0];

    return await App.initContract();
  },

  initContract: async function () {
    let elec = await fetch('Election.json');
    election = await elec.json();
      //truffle-less way of getting contract, to avoid error when calling donnerDroitDeVote()
      const web3 = new Web3(App.web3Provider);
      App.election_old = new web3.eth.Contract(
        election.abi,
        election.networks[4].address
      );
      // Instantiate a new truffle contract from the artifact
      App.election = TruffleContract(election);
      // Connect provider to interact with contract
      App.election.setProvider(App.web3Provider);

      //resolve sendAsync error
      if (typeof  App.election.currentProvider.sendAsync !== "function") {
        App.election.currentProvider.sendAsync = function() {
          return App.election.currentProvider.send.apply(
            App.election.currentProvider,
                arguments
          );
        };
      }
      return await App.getInfos();
  },

  getInfos: async function () {
    let instance = await App.election.deployed();
    let cpt = await instance.nbrCandidats();

    let candidats = [];
    for (let i = 1; i <= cpt; i++) {
      let cd = await instance.candidats(i);
      candidats[i - 1] = cd[1];
    }
    console.log(candidats);
    // App.voter(1);
    
    return candidats;
  },

  getResultats: async function () {
    let instance = await App.election.deployed();
    let total = await instance.totalVotes();
    let cpt = await instance.nbrCandidats();
    let resultat = { nom: ['total'], nbrVotes: [total.toNumber()] };
    for (let i = 1; i <= cpt; i++) {
      let cd = await instance.candidats(i);
      resultat.nom[i] = cd[1]
      resultat.nbrVotes[i] = cd[2].toNumber();
    }
    console.log(resultat);
    return resultat;
  },

  voter: async function (bulletinNum) {
    let instance = await App.election.deployed();

    //preparing to vote with new account
    provider = new ethers.providers.Web3Provider(App.web3Provider);
    acct = provider.provider.newAccount();
    signer = provider.getSigner(acct.address, acct.privateKey); 
    contract = await new ethers.Contract(instance.address, instance.abi, signer)

    let receipt1 = await App.election_old.methods.donnerDroitDeVote(acct.address).send({ from: App.account, useGSN: false });
    console.log(receipt1)

    transaction = await contract.voter(bulletinNum)
    receipt = await provider.waitForTransaction(transaction.hash)
    console.log(receipt)

    // App.getResultats();
    return {adresse: acct.address, vote: bulletinNum}

  },

};

// export default App;
module.exports = App;

// $(function () {
//   $(window).load(function () {
//     App.init();
//   });
// });
