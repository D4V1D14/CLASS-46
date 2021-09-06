class Game {
    constructor() {}
      getState(){
          var gamestateref=database.ref("gameState")
          gamestateref.on("value",function(data){
              gameState=data.val()
          })

    
          
      }
      update(state){
          database.ref("/").update({
              gameState:state
          })
      }
    async  start(){
        if(gameState===0){
            player=new Player()
            var playerCountref=await database.ref("playerCount").once("value")
            if (playerCountref.exists()){
                playerCount=playerCountref.val()
            
            player.getCount()
            }
            form=new Form()
            form.display()
        
    }
    }
    play(){
        form.hide()
Player.getPlayerinfo()
if (allplayers!==undefined){
    Image(track,0,displayHeight/2,displayWidth,displayHeight)
}

    }
}