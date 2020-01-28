class Game {
    constructor() {
        this.currentState = 1; // we will have 3 states:- 1} intro 2} start 3} pause 4} end
    }

    getState() {
        return this.currentState;
    }

    update(state) {
        this.currentState = state;
    }

    start() {
        if (this.currentState == 1) {
            console.log("Show the start button to start the game");
            intro = new Intro()
            intro.display();
        }

        background_value = createSprite(600,200,20,20);
        var random_no = getRndInteger(1, 4);
        var background_image;

        switch (random_no) {
            case 1:
                background_image = background_image_one;
                break;
            case 2:
                background_image = background_image_two;
                break;
            case 3:
                background_image = background_image_three;
                break;
            default:
                background_image = background_image_four;
                break;
        }
        background_value.addImage("background",background_image);
        background_value.scale = 1;

        player = createSprite(200,358,20,20);
        player.addAnimation("running",player_animation);

    }

    play() {
        background("white");
        drawSprites();
    }

    end() {
        console.log("Game Ended");
    }

}