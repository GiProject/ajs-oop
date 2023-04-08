import Character from '../Character';

export default class Bowerman extends Character {
    constructor(name, type, health, level, attack = 40, defence = 10) {
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
        super(name, type);
    }
}