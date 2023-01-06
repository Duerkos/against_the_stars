function producePrevious(generatorArray, diff){
    for (let i=1; i < generatorArray.lenght; i++){
        let g = generatorArray[i]
        generatorArray[i-1].amount += g.productionPerSecond*diff
    }
}

const score_display = document.getElementById("score_display")
const energy_display = document.getElementById("energy_display")
const resources_display = document.getElementById("resources_display")
const terraform_display = document.getElementById("terraform_display")

function gameLoop(that){
    let diff = (Date.now() - that.player.lastUpdate)/1000
    for (let gen in that.generators){
        for (let x in that.generators[gen].production){
            that.player.money[x] +=  that.generators[gen].productionPerSecond[x] * diff
        }
    }
    that.player.lastUpdate = Date.now()
    that.player.score = that.player.money.energy * that.player.money.resources * that.player.money.terraform
    document.getElementById('score_display').innerHTML = format(that.player.score)
    document.getElementById('energy_display').innerHTML = format(that.player.money.energy)
    document.getElementById('resources_display').innerHTML = format(that.player.money.resources)
    document.getElementById('terraform_display').innerHTML = format(that.player.money.terraform)
}