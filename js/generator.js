class Generator{
    constructor(props){
        this.name = props.name
        this.cost = props.cost
        this.mult = props.mult
        this.amount = props.amount
        this.bought = props.bought
    }
    get canBuy() {
        return this.cost <= player.money
    }
    buy(){
        if (this.canBuy) return
        player.money -= this.cost
        this.cost *=1 (i+1)*0.25
        this.amount +=1
        this.bought +=1
        if (this.bought%100==0) this.mult *= 5
        else if (this.bought%25==0) this.mult *=3
    }

    get productionPerSecond(){
        let ret = this.amount * this.mult
        if (this.tier != 0) ret /= 5
        return ret
    }
}

const request_names = []
const engineer_names = []
const aircraft_names = []

function getColumn(type){
    switch(type){
        case "request":
            return 1
        case "engineer":
            return 2
        case "aircraft":
            return 3
    }
}
function generateGeneratorName(tier, type){
    switch (type){
        case "request":
            return request_names[tier%request_names.length]
        case "engineer":
            return engineer_names[tier%engineer_names.length]
        case "aircraft":
            return aircraft_names[tier%aircraft_names.length]
    }
}
function createGenerator(tier, type){
    let col = getColumn(type)

    const g = {
        name : generateGeneratorName(tier, type),
        cost : Math.pow(10, tier*(col+1)),
        mult:1,
        amount:0,
        bought:0,
        tier:tier
    }
    return new Generator(g)
}


