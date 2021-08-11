export class Deck {
    _id?: number;
    name: string;
    colors: string;
    dynamic: string;
    planeswalker: boolean;
    name_planeswalker: string;

    constructor(name: string, colors: string, dynamic: string, planeswalker: boolean, name_planeswalker: string) {
        this.name = name;
        this.colors = colors;
        this.dynamic = dynamic;
        this.planeswalker = planeswalker;
        this.name_planeswalker = name_planeswalker;
    }
}