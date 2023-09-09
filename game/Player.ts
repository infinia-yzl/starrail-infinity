export interface PlayerDetails {
    uuid: string;
    nickname: string;
    level: number;
    worldLevel: number;
    friendCount: number;
    avatarName: string;
    signature: string;
    lightConeCount: number;
    avatarCount: number;
    achievementCount: number;
}

export class Player {
    readonly uuid: string;
    readonly nickname: string;
    readonly level: number;
    readonly worldLevel: number;
    readonly friendCount: number;
    readonly avatarName: string;
    readonly signature: string;
    readonly lightConeCount: number;
    readonly avatarCount: number;
    readonly achievementCount: number;

    constructor(details: PlayerDetails) {
        this.uuid = details.uuid;
        this.nickname = details.nickname;
        this.level = details.level;
        this.worldLevel = details.worldLevel;
        this.friendCount = details.friendCount;
        this.avatarName = details.avatarName;
        this.signature = details.signature;
        this.lightConeCount = details.lightConeCount;
        this.avatarCount = details.avatarCount;
        this.achievementCount = details.achievementCount;
    }
}
