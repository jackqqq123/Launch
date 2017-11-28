enum GAME_STATE {
    TITLE,
    GAMEING,
}

interface GameInfo {
    GameState: GAME_STATE;
}
    
class Game {
    private gameInfo: GameInfo;

    constructor() {
        this.gameInfo.GameState = GAME_STATE.TITLE;
    }

    Main(): void {

    }

    Draw(): void {

    }

    UpdateGameState(): void {
        switch (this.gameInfo.GameState)
        {
            case GAME_STATE.TITLE:
            break;
            case GAME_STATE.GAMEING:
            break;
        }
    }
}