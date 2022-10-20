// We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.
const team = {
    _players: [
        {firstName: 'Marc-Andre',  lastName: 'Ter-Stegen', age: 27},  
        {firstName: 'Joules',  lastName: 'Kounde', age: 23},  
        {firstName: 'Ansu', lastName: 'Fati', age: 21}
    ], 
    _games: [
        {opponent: 'Bayern Munich', teamPoints: 0, opponentPoints: 2},  
        {opponent: 'Inter Milan', teamPoints: 3, opponentPoints: 3}, 
        {opponent: 'Viktoria Plzen', teamPoints: 5, opponentPoints: 1}
    ],

    get players() {
        return this._players;
    }, 

    get games() {
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge) {
        let newPlayer = {
           firstName: newFirstName, 
           lastName: newLastName,
           age: newAge
        }
        this.players.push(newPlayer);
    }, 

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let newGAme = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        }
        this.games.push(newGAme);
    }
}

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
console.log(team.players);
console.log(team.games);

