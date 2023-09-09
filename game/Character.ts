export enum Path {
    "The Destruction",
    "The Hunt",
    "The Erudition",
    "The Harmony",
    "The Nihility",
    "The Preservation",
    "The Abundance"
}

export enum Element {
    "Physical",
    "Fire",
    "Ice",
    "Lightning",
    "Wind",
    "Quantum",
    "Imaginary"
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
