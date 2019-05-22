let character = {
    name: "",
    level: 0,
    life: 0,
    weapon: {
        name: "",
        damage: 0,
    },
    attack: function(target){
        console.log(`${this.name} attaque ${target.name}`);
        console.log(`avec l'arme ${this.weapon.name}`);
        console.log(`et lui inflige ${this.weapon.damage * this.level} de dégats`);
        target.receiveDamage(this.weapon.damage * this.level);
        console.log(`${target.name} a maintenant ${target.life} de vie`);
    },
    receiveDamage: function(damage){
        this.life -= damage;
    },
}
let opponentCharacter = Object.create(character);
opponentCharacter.weapon.name = "Sword";
opponentCharacter.weapon.damage = 10;
opponentCharacter.life = 100;
opponentCharacter.level = 2;
opponentCharacter.name = "michel";

let mainCharacter = Object.create(character);
mainCharacter.weapon.name = "Sceptre";
mainCharacter.weapon.damage = 20;
mainCharacter.level = 4;
mainCharacter.name = "Jean";
mainCharacter.life = 100;

mainCharacter.attack(opponentCharacter);