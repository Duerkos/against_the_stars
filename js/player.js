var player = {
    clicks : 0,
    manhours : 1,
    accounts : 1,
    requests : [],
    engineers : [],
    customers :[],
    lastUpdate : Date.now()
}

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

player.requests.push(first_request)
player.requests.push(second_request)