import { Character, characterType} from '../../Character';
import Bowerman from '../../characters/Bowerman';

test('test class Bowerman', () => {
    let person = new Bowerman('name', 'Bowman', 100, 1);
    expect([
        person.name,
        person.type,
        person.health,
        person.level,
        person.attack,
        person.defence
    ]).toEqual([
        'name',
        'Bowman',
        100,
        1,
        25,
        25
    ]);

    person.damage(10);
    expect(person.health).toBe(92.5);

    person.levelUp();
    expect(person.health).toBe(192.5);

});

test('test exeption class Character', () => {
    expect(() => {
        new Character('n');
    }).toThrow('the name property must be less than 2');
    
    expect(() => {
        new Character('ndghdsfasddgfgda');
    }).toThrow('the name property must be greater than 10');

    expect(() => {
        new Character('name', 'Bowerman');
    }).toThrow('the type property must be one of: ' + characterType.join(', '));
    
    expect(() => {
        let person = new Bowerman('name', 'Bowman', 0, 1);
        person.levelUp();
    }).toThrow('You can\'t level up a dead person');
    
    expect(() => {
        let person = new Bowerman('name', 'Bowman', 0, 1);
        person.damage(1);
    }).toThrow('The character is dead');
})