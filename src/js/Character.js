export const characterType = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie'
];
export class Character { 

    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.characterType = characterType;
        this.createValidate();
    }

    createValidate() {
        if (2 > this.name.length) {
            throw new Error('the name property must be less than 2');
        }
        if (this.name.length > 10) {
            throw new Error('the name property must be greater than 10');
        }
        if (!this.characterType.includes(this.type)) {
            throw new Error('the type property must be one of: ' + this.characterType.join(', '));
        }
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('You can\'t level up a dead person');
        }
        this.level++;
        this.attack *= 1.2;
        this.health += 100;
    }

    damage(points) {
        if (this.health === 0) {
            throw new Error('The character is dead');
        }
        this.health -= points * (1 - this.defence / 100);
        this.health = this.health < 0 ? 0 : this.health;
    }
}