export enum Path {
    "Warrior" = "The Destruction",
    "Rogue" = "The Hunt",
    "UNKNOWN1" = "The Erudition",
    "UNKNOWN2" = "The Harmony",
    "UNKNOWN3" = "The Nihility",
    "UNKNOWN4" = "The Preservation",
    "UNKNOWN5" = "The Abundance",
}

export enum Element {
    "Physical" = "Physical",
    "Fire" = "Fire",
    "Ice" = "Ice",
    "Thunder" = "Lightning",
    "Wind" = "Wind",
    "Quantum" = "Quantum",
    "Imaginary" = "Imaginary",
}

export interface Character {
    id: string,
    name: string,
    rarity: number,    // Rank (4* / 5*)
    rank: number,      // Eidolon
    level: number,
    promotion: number, // Ascension
    path: Path,
    element: Element,
}

export class Character {
    constructor(data: Character) {
        Object.assign(this, data);
    }
}
