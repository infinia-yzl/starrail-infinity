import {PathResource, Attribute} from "./Mechanic.types.ts";

export interface LightCone {
    id:         string;
    name:       string;
    rarity:     number;
    rank:       number;
    level:      number;
    promotion:  number;
    icon:       string;
    preview:    string;
    portrait:   string;
    path:       PathResource;
    attributes: Attribute[];
    properties: Attribute[];
}

export interface Relic {
    id:         string;
    name:       string;
    setId:     string;
    setName:   string;
    rarity:     number;
    level:      number;
    icon:       string;
    mainAffix: Attribute;
    subAffix:  Attribute[];
}

// Don't think this is necessary
// export class LightCone {
//     id:         string;
//     name:       string;
//     rarity:     number;
//     rank:       number;
//     level:      number;
//     promotion:  number;
//     icon:       string;
//     preview:    string;
//     portrait:   string;
//     path:       PathResource;
//     attributes: Attribute[];
//     properties: Attribute[];
//
//     constructor(lightCone: LightConeDetails) {
//         this.id = lightCone.id;
//         this.name = lightCone.name;
//         this.rarity = lightCone.rarity;
//         this.rank = lightCone.rank;
//         this.level = lightCone.level;
//         this.promotion = lightCone.promotion;
//         this.icon = lightCone.icon;
//         this.preview = lightCone.preview;
//         this.portrait = lightCone.portrait;
//         this.path = lightCone.path;
//         this.attributes = lightCone.attributes;
//         this.properties = lightCone.properties;
//     }
// }

export class Equipment {
    constructor(lightCone: LightCone, relics: Relic[]) {}
}
