// When the client is ready, run this code (only once)
module.exports = {
    name: "ready",
    once: true,
    execute(client){
        console.log('[Notice] Ready.')

        client.user.setActivity({
            name: "그루밍"
        })
    }
}