function producePrevious(generatorArray, diff){
    for (let i=1; i < generatorArray.lenght; i++){
        let g = generatorArray[i]
        generatorArray[i-1].amount += g.productionPerSecond*diff
    }
}

function gameLoop(that){
    let diff = (Date.now() - that.player.lastUpdate)/1000
    that.player.clicks += that.player.requests[0].amount * that.player.requests[0].mult * diff
    that.player.manhours += that.player.engineers[0].amount * that.player.engineers[0].mult * diff
    that.player.flighthours += that.player.aircrafts[0].amount * that.player.aircrafts[0].mult * diff
    producePrevious(that.player.requests, diff)
    producePrevious(that.player.aircrafts, diff)
    producePrevious(that.player.engineers, diff)
    that.player.lastUpdate = Date.now()
}