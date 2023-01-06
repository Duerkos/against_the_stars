var player = {
    money: {
        energy: 1,
        resources: 1,
        terraform: 1
    },
    score: 10,
    lastUpdate : Date.now()
}

var generators = [];

var tiers = ["tier1"];
var tier = 0;

generators.push(createGenerator("energy"))
generators[0].amount=10