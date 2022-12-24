const { createApp } = Vue
createApp({
    data() {
        return {
            player: player
        }
    },    
    methods: {
        clickManually() {
            this.player.clicks+=1
        },
        buyEngineerGenerator(i) {
            let g = this.player.engineers[i]
            if (g.cost > this.player.clicks) return
            this.player.clicks -= g.cost
            this.player.engineers[i].cost *= 1 + (i+1)*0.25
            this.player.engineers[i].amount += 1
            this.player.engineers[i].bought += 1
        },
        buyCustomerGenerator(i) {
            let g = this.player.customers[i]
            if (g.cost > this.player.clicks) return
            this.player.clicks -= g.cost
            this.player.customers[i].cost *= 1 + (i+1)*0.25
            this.player.customers[i].amount += 1
            this.player.customers[i].bought += 1
        },
        buyRequestGenerator(i) {
            let g = this.player.requests[i]
            if (g.cost > this.player.clicks) return
            this.player.clicks -= g.cost
            this.player.requests[i].cost *= 1 + (i+1)*0.25
            this.player.requests[i].amount += 1
            this.player.requests[i].bought += 1
        },
        format(amount) {
            return format(amount)
        },
        gameLoop() {
            gameLoop(this)
        }
    },
    mounted() {
        setInterval(this.gameLoop, 50)
    }
}).mount("#app")