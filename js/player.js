var player = {
    clicks : 0,
    manhours : 1,
    flighthours : 1,
    requests : [],
    engineers : [],
    aircrafts :[],
    lastUpdate : Date.now()
}

var tiers = ["tier1","tier2","tier3"];
var tier = 1;

var first_request = {
    cost : 10,
    mult : 1,
    amount : 0,
    bought : 0,
    name: "Informative Service Request",
    desc: "The most basic SR"
}

var second_request = {
    cost : 10,
    mult : 1,
    amount : 0,
    bought : 0,
    name: "In Service Event Report",
    desc: "Sometimes requires answer"
}

var first_engineer = {
    cost : 10,
    mult : 1,
    amount : 0,
    bought : 0,
}

player.requests.push(new Generator(first_request))
player.engineers.push(new Generator(first_engineer))