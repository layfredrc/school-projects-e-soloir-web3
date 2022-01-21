# E-soloir - frontend

## Description
E-soloir is a Web Application that will allow citizens to vote remotely when an election is taking place.
We used [Ethereum](https://ethereum.org/fr/)'s blockchain to provide full transparency and anonymity for users. (The contracts are currently deployed on the [rinkerby ethereum testet](https://www.rinkeby.io/).   
In order to use E-soloir the user will have to register and provide his ID card, his Electoral card and a selfie with his cards.
Then, administrators can login and verify the files provided by the users.
Users that are verified will receive a confirmation email and will be able to vote.

The Front-End has been build on [Vue JS](https://vuejs.org/)   
The Back-End has been build on [Node.JS](https://nodejs.org/en/) with[ PostGreSQL](https://www.postgresql.org/) as the database   
The BlockChain and Smart Contracts have been written in [Solidy](https://docs.soliditylang.org/en/v0.8.6/#)   
Connection between the Front-End and the Blockchain has been made with [Truffle.js](https://www.trufflesuite.com/)   


## Project setup :
In order to run the project you will also need to run [the server side of this project](https://github.com/e-soloir/backend/tree/master)
> npm install -g truffle   
> npm install

### Run
> npm run dev

### Interract with the migrated contracts :
> truffle console

## Contributors

[Vincent NGUYEN VAN NGUYEN](https://github.com/vichi06)\
[Jade LIMACHER](https://github.com/Grandkhan)\
[Frédéric LAY](https://github.com/layfredrc)\
Bastien TROUBAT\
Philip KIRBY   
Thomas VIDAL   

## License
[MIT](https://choosealicense.com/licenses/mit/)
