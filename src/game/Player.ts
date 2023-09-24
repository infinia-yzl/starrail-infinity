import { Resource } from "./Mechanic.type.ts";

/**
 * Detailed information about a Star Rail player.
 */
export interface PlayerDetails {
  /** The unique identifier (UUID) of the player. */
  uuid: string;
  /** The nickname or display name of the player. */
  nickname: string;
  /** The current level of the player. */
  level: number;
  /** The world or game level in which the player is currently active. */
  worldLevel: number;
  /** The number of friends the player has. */
  friendCount: number;
  /** The avatar or icon representing the player. */
  avatar: Resource;
  /** The signature or personal message set by the player. */
  signature: string;
  /** Information about the player's game space. */
  spaceInfo: SpaceInfo;
}

/**
 * Information about the progress and achievements in a player's game space.
 */
export interface SpaceInfo {
  /** Data related to challenges faced by the player. */
  challengeData: ChallengeData;
  /** The progress made in the pass area by the player. */
  passAreaProgress: number;
  /** The number of LightCones owned by the player. */
  lightConeCount: number;
  /** The number of avatars unlocked by the player. */
  avatarCount: number;
  /** The number of achievements earned by the player. */
  achievementCount: number;
}

/**
 * Data about the maze challenges encountered by the player.
 */
export interface ChallengeData {
  /** Identifier of the maze group. */
  mazeGroupId: number;
  /** Index or position of the maze group. */
  mazeGroupIndex: number;
  /** Index or position of the previous maze group. */
  preMazeGroupIndex: number;
}

/**
 * Class representation of a Star Rail player.
 */
export class Player {
  readonly uuid: string;
  readonly nickname: string;
  readonly level: number;
  readonly worldLevel: number;
  readonly friendCount: number;
  readonly avatar: Resource;
  readonly signature: string;
  readonly spaceInfo: SpaceInfo;

  /**
   * Constructor to create a Player instance.
   * @param {PlayerDetails} details - The detailed information of the player.
   */
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
