module Actor {
    export interface ActorInfo {
        pos: util.Point;
        rotate: number;
        id: number;
        visible: boolean;
        alive: boolean;
    }

    export abstract class ActorBase implements Base.BaseLogic {
        constructor(protected actorInfo: ActorInfo) {
        }

        abstract Init(): void;
        abstract Main(): void;
        abstract Draw(): void;
        abstract Destroy(): void;

        get pos(): util.Point {
            return this.actorInfo.pos;
        }

        set pos(pos: util.Point) {
            this.actorInfo.pos = pos;
        }

        get rotate(): number {
            return this.actorInfo.rotate;
        }

        set rotate(rot: number) {
            this.actorInfo.rotate = rot;
        }

        get visible(): boolean {
            return this.actorInfo.visible;
        }

        set visible(visible: boolean) {
            this.actorInfo.visible = visible;
        }

        get id(): number {
            return this.actorInfo.id;
        }

        set id(id: number) {
            this.actorInfo.id = id;
        }

        get alive(): boolean {
            return this.actorInfo.alive;
        }

        set alive(alive: boolean) {
            this.actorInfo.alive = alive;
        }
    }
}