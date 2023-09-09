// export interface UserInfo {
//     characters: Character[];
//     player:     Player;
// }
//
// export interface Character {
//     id:          string;
//     name:        string;
//     rarity:      number;
//     rank:        number;
//     level:       number;
//     promotion:   number;
//     icon:        string;
//     preview:     string;
//     portrait:    string;
//     rank_icons:  string[];
//     path:        Avatar;
//     element:     Avatar;
//     skills:      Skill[];
//     skill_trees: SkillTree[];
//     light_cone:  LightCone;
//     relics:      Relic[];
//     relic_sets:  RelicSet[];
//     attributes:  Addition[];
//     additions:   Addition[];
//     properties:  Addition[];
// }
//
// export interface Addition {
//     field:   Field;
//     name:    Name;
//     icon:    Icon;
//     value:   number;
//     display: string;
//     percent: boolean;
//     type?:   string;
//     count?:  number;
//     step?:   number;
// }
//
// export enum Field {
//     AllDmg = "all_dmg",
//     Atk = "atk",
//     BreakDmg = "break_dmg",
//     CritDmg = "crit_dmg",
//     CritRate = "crit_rate",
//     Def = "def",
//     EffectHit = "effect_hit",
//     EffectRes = "effect_res",
//     HP = "hp",
//     IceDmg = "ice_dmg",
//     ImaginaryDmg = "imaginary_dmg",
//     LightningDmg = "lightning_dmg",
//     Spd = "spd",
//     WindDmg = "wind_dmg",
// }
//
// export enum Icon {
//     IconPropertyIconAttackPNG = "icon/property/IconAttack.png",
//     IconPropertyIconBreakUpPNG = "icon/property/IconBreakUp.png",
//     IconPropertyIconCriticalChancePNG = "icon/property/IconCriticalChance.png",
//     IconPropertyIconCriticalDamagePNG = "icon/property/IconCriticalDamage.png",
//     IconPropertyIconDefencePNG = "icon/property/IconDefence.png",
//     IconPropertyIconIceAddedRatioPNG = "icon/property/IconIceAddedRatio.png",
//     IconPropertyIconImaginaryAddedRatioPNG = "icon/property/IconImaginaryAddedRatio.png",
//     IconPropertyIconMaxHPPNG = "icon/property/IconMaxHP.png",
//     IconPropertyIconSpeedPNG = "icon/property/IconSpeed.png",
//     IconPropertyIconStatusProbabilityPNG = "icon/property/IconStatusProbability.png",
//     IconPropertyIconStatusResistancePNG = "icon/property/IconStatusResistance.png",
//     IconPropertyIconThunderAddedRatioPNG = "icon/property/IconThunderAddedRatio.png",
//     IconPropertyIconWindAddedRatioPNG = "icon/property/IconWindAddedRatio.png",
// }
//
// export enum Name {
//     Atk = "ATK",
//     BreakEffect = "Break Effect",
//     CRITRate = "CRIT Rate",
//     CritDmg = "CRIT DMG",
//     DMGBoost = "DMG Boost",
//     Def = "DEF",
//     EffectHitRate = "Effect Hit Rate",
//     EffectRES = "Effect RES",
//     HP = "HP",
//     IceDMGBoost = "Ice DMG Boost",
//     ImaginaryDMGBoost = "Imaginary DMG Boost",
//     LightningDMGBoost = "Lightning DMG Boost",
//     Spd = "SPD",
//     WindDMGBoost = "Wind DMG Boost",
// }
//
// export interface Avatar {
//     id:     string;
//     name:   string;
//     color?: Color;
//     icon:   string;
// }
//
// export enum Color {
//     F4D258 = "#F4D258",
//     The00Ff9C = "#00FF9C",
//     The47C7Fd = "#47C7FD",
//     The8872F1 = "#8872F1",
// }
//
// export interface LightCone {
//     id:         string;
//     name:       string;
//     rarity:     number;
//     rank:       number;
//     level:      number;
//     promotion:  number;
//     icon:       string;
//     preview:    string;
//     portrait:   string;
//     path:       Avatar;
//     attributes: Addition[];
//     properties: Addition[];
// }
//
// export interface RelicSet {
//     id:         string;
//     name:       string;
//     icon:       string;
//     num:        number;
//     desc:       string;
//     properties: Addition[];
// }
//
// export interface Relic {
//     id:         string;
//     name:       string;
//     set_id:     string;
//     set_name:   string;
//     rarity:     number;
//     level:      number;
//     icon:       string;
//     main_affix: Addition;
//     sub_affix:  Addition[];
// }
//
// export interface SkillTree {
//     id:        string;
//     level:     number;
//     anchor:    string;
//     max_level: number;
//     icon:      string;
//     parent:    null | string;
// }
//
// export interface Skill {
//     id:          string;
//     name:        string;
//     level:       number;
//     max_level:   number;
//     element:     Avatar | null;
//     type:        string;
//     type_text:   string;
//     effect:      Effect;
//     effect_text: string;
//     simple_desc: string;
//     desc:        string;
//     icon:        string;
// }
//
// export enum Effect {
//     AoEAttack = "AoEAttack",
//     Blast = "Blast",
//     Enhance = "Enhance",
//     MazeAttack = "MazeAttack",
//     SingleAttack = "SingleAttack",
// }
//
// export interface Player {
//     uid:          string;
//     nickname:     string;
//     level:        number;
//     world_level:  number;
//     friend_count: number;
//     avatar:       Avatar;
//     signature:    string;
//     is_display:   boolean;
//     space_info:   SpaceInfo;
// }
//
// export interface SpaceInfo {
//     challenge_data:     ChallengeData;
//     pass_area_progress: number;
//     light_cone_count:   number;
//     avatar_count:       number;
//     achievement_count:  number;
// }
//
// export interface ChallengeData {
//     maze_group_id:        number;
//     maze_group_index:     number;
//     pre_maze_group_index: number;
// }
