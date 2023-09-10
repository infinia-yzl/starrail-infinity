import { Resource } from "./Mechanic.type.ts";

export interface PlayerDetails {
  uuid: string;
  nickname: string;
  level: number;
  worldLevel: number;
  friendCount: number;
  avatar: Resource;
  signature: string;
  spaceInfo: SpaceInfo;
}

export interface SpaceInfo {
  challengeData: ChallengeData;
  passAreaProgress: number;
  lightConeCount: number;
  avatarCount: number;
  achievementCount: number;
}

export interface ChallengeData {
  mazeGroupId: number;
  mazeGroupIndex: number;
  preMazeGroupIndex: number;
}

export class Player {
  readonly uuid: string;
  readonly nickname: string;
  readonly level: number;
  readonly worldLevel: number;
  readonly friendCount: number;
  readonly avatar: Resource;
  readonly signature: string;
  readonly spaceInfo: SpaceInfo;

  constructor(details: PlayerDetails) {
    this.uuid = details.uuid;
    this.nickname = details.nickname;
    this.level = details.level;
    this.worldLevel = details.worldLevel;
    this.friendCount = details.friendCount;
    this.avatar = details.avatar;
    this.signature = details.signature;
    this.spaceInfo = details.spaceInfo;
  }
}
