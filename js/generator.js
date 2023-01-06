class Generator{
    constructor(props){
        this.name = props.name
        this.cost = props.cost
        this.production = props.production
        this.mult = props.mult
        this.amount = props.amount
        this.bought = props.bought
    }
    get canBuy() {
        for (let x in this.cost){
            if(this.cost[x] > player.money[x]){
                return false
            }
        }
        return true
    }
    buy(){
        if (this.canBuy == false) return
        for (let x in this.cost){
            player.money[x] -= this.cost[x]
            this.cost[x] *=1+(1+this.amount)*0.25
        }
        this.amount +=1
        this.bought +=1
        if (this.bought%100==0) this.mult *= 5
        else if (this.bought%25==0) this.mult *=3
    }

    get productionPerSecond(){
        let multiplier = this.amount * this.mult
        let produce = []
        for (let x in this.production){
            produce[x] =this.production[x] * multiplier
        }
        return produce
    }
}

const energy_names = ["Solar panels", "Solar extractors"]
const resources_names = ["Basic tools", "Factories"]
const terraform_names = ["Water electrolysis", "Biomass greenhouses"]

function generateGeneratorName(type){
    switch (type){
        case "energy":
            return energy_names[0]
        case "resources":
            return resources_names[0]
        case "terraform":
            return terraform_names[0]
    }
}

function generateGeneratorCost(type){
    let cost = []
    cost[type] = 10
    return cost
}

function generateGeneratorProduction(type){
    let production = []
    production[type] = 1
    return production
}
'this function assigns things automatically, we might want to tweak everything later'
function createGenerator(type){

    const g = {
        name : generateGeneratorName(type),
        cost : generateGeneratorCost(type),
        production : generateGeneratorProduction(type),
        mult:1,
        amount:0,
        bought:0,
    }
    return new Generator(g)
}


