import Character from '../Character';

export default class Bowerman extends Character {
    constructor(name, type, health, level, attack = 10, defence = 40) {
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
        super(name, type);
    }
}