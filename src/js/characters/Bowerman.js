import { Character } from '../Character';

export default class Bowerman extends Character {
    constructor(name, type, health, level, attack = 25, defence = 25) {
        super(name, type);
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}