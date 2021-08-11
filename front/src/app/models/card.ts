export class Card {
    _id?: number;
    name: string;
    // colour: Array<Colour>;
    color: string;
    mana: string;
    type: string;
    expansion: string;
    // skills: Array<Skills>;
    skill: string;
    power: number;
    toughness: number;

    constructor(name: string, color: string, mana: string, type: string, expansion: string, skill: string, power: number, toughness: number) {
        this.name = name;
        this.color = color;
        this.mana = mana;
        this.type = type;
        this.expansion = expansion;
        this.skill = skill;
        this.power = power;
        this.toughness = toughness;
    }
}

