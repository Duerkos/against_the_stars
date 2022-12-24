function gameLoop(that){
    let diff = (Date.now() - that.player.lastUpdate)/1000
    that.player.clicks += that.player.requests[0].amount * that.player.requests[0].mult * diff
    that.player.lastUpdate = Date.now()
}