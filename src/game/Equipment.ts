import { PathResource, Attribute } from "./Mechanic.type.ts";

export interface LightCone {
  id: string;
  name: string;
  rarity: number;
  rank: number;
  level: number;
  promotion: number;
  icon: string;
  preview: string;
  portrait: string;
  path: PathResource;
  attributes: Attribute[];
  properties: Attribute[];
}

export interface Relic {
  id: string;
  name: string;
  setId: string;
  setName: string;
  rarity: number;
  level: number;
  icon: string;
  mainAffix: Attribute;
  subAffix: Attribute[];
}

export class Equipment {
  constructor(
    public lightCone: LightCone,
    public relics: Relic[],
  ) {}
}
