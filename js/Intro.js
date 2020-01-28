class Intro {
    constructor() {
        this.button = createButton('Play');
        this.title = createElement('h2');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
    }

    display(){
        this.title.html("SURVIVAL");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.button.position(displayWidth/2 -30, displayHeight/2);
    
        this.button.mousePressed(()=>{
          this.button.hide();
          this.title.hide();
          game.update(2);
        });
    }
}