function newFullCharacter(){
    newRace();
    newSkinColor();
    newEyeColor();
    newHairColor();
    newHairStyle();
    newPlaceOfBirth();
    newCaretaker();
    newChildhood();
    newTattoo();
    newCharacterFlaw();
    newPhobia();
    newAppearanceTrait();
    newOccupation();
    newGoalDesireSecret();
    newRandomEncounter();
    newWineLiquor();
    newTavernInnFood();
    newMiscTreasureItem();
    newWound();
    newMisfortune();
    newDeath();
    newSocialStatus();
    newHobby();
    newScent();
}

var races = ['Human', 'Dwarf', 'High Elf', 'Wood Elf', 'Half Elf', 'Drow', 'Halfling', 'Gnome', 'Dragonkin', 
    'Half-orc', 'Genasi', 'Tiefling'];

function newRace(){
    var race = Math.floor(Math.random() * races.length);
    document.getElementById('raceDisplay').innerHTML = races[race];
}

var skin_colors = ['Ivory', 'Pale', 'Bone white', 'Weathered', 'Tanned', 'Rosy', 'Olive', 
    'Caramel', 'Deep brown', 'Gray', 'Silvery', 'Sunwarmed copper', 'Mahogany', 'Porcelain', 'Espresso', 
    'Chestnut', 'Deep Bronze', 'Golden Bronze', 'Golden Beige', 'Medium Beige', 'Apricot', 'Neutral', 
    'Fair with pink undertone', 'Fair with yellow undertone', 'Amber', 'Chocolate', 'Russet'];

function newSkinColor(){
    var skin_color = Math.floor(Math.random() * skin_colors.length);
    document.getElementById('skinColorDisplay').innerHTML = skin_colors[skin_color];
}

var eye_colors = ['Clear blue', 'Bright blue', 'Pale green', 'Cold blue', 'Shining blue', 
    'Milky blue', 'Sky blue', 'Fierce blue', 'Piercing blue', 'Cobalt', 'Cerulean', 'Ice blue', 'Deep blue',
    'Ocean blue', 'Sapphire', 'Topaz blue', 'Beryl', 'Deep blue with silver flecks', 
    'Bright blue with golden flecks', 'Shimmering blue', 'Sapphire with silvery flecks', 
    'Sapphire with golden flecks', 'Laughing sky blue', 'Cornflower blue', 'Periwinkle blue', 
    'Smoky blue', 'Azure', 'Eerie blue', 'Calculating blue', 'Clear green', 'Bright green', 'Pale green', 
    'Cold green', 'Shining green', 'Milky jade', 'Forest green', 'Spring leaf green', 'Fierce green', 
    'Emerald', 'Piercing green', 'Muddy green', 'Hazel', 'Treefrog green', 'Bright green with silvery flecks', 
    'Milky jade with golden flecks', 'Deep green with golden flecks', 'Shimmering green', 
    'Emerald with golden flecks', 'Emerald with silvery flecks', 'Sorrowful deep green', 
    'Laughing bright green', 'Eerie green', 'Calculating green', 'Deep brown', 'Light brown', 
    'Caramel brown', 'Cold brown', 'Whiskey brown', 'Golden brown', 'Tawny brown', 'Muddy brown', 
    'Chocolate brown', 'Coffee brown', 'Toffee brown', 'Reddish brown', 'Copper brown', 'Sandy brown', 
    'Deep brown with golden flecks', 'Shimmering copper', 'Shimmering bronze', 'Sorrowful deep brown', 
    'Laughing bright brown', 'Shining bronze', 'Eerie brown', 'Calculating brown', 'Clear gray', 'Bright gray', 
    'Pale gray', 'Milky gray', 'Cold gray', 'Storm gray', 'Ocean gray', 'Fierce gray', 'Piercing gray', 'Gray-blue',
    'Gray-green', 'Green-gray', 'Blue-gray', 'Iron gray', 'Steel gray', 'Silver', 'Shimmering silver', 'Silvery gray',
    'Iron gray with silvery flecks', 'Steel gray with golden flecks', 'Sorrowful deep green', 
    'Laughing clear gray', 'Smoky gray', 'Eerie gray', 'Calculating gray', 'Violet', 'Deep purple', 
    'Shimmering lilac', 'Deep blue with purple centers', 'Ice blue with violet flecks', 
    'Sorrowful deep violet', 'Laughing deep violet', 'Smoky orchid', 'Eerie violet', 'Calculating violet', 
    'Cold violet', 'Gunmetal blue', 'Amber', 'Chestnut', 'Cognac', 'Russet', 'Nut brown', 'Honey', 'Bottle green',
    'Sea green', 'Electric blue', 'Cornflower', 'Baby blue'];

function newEyeColor(){
    var eye_color = Math.floor(Math.random() * eye_colors.length);
    document.getElementById('eyeColorDisplay').innerHTML = eye_colors[eye_color];
}

var hair_styles = ['Cropped short', 'Stylish bob', 'Tight curl shorn close to the scalp', 
    'Tumbling curly locks', 'Thick braid', 'Elaborate braids', 'Multitude of thin braids', 
    'Simple ponytail', 'Tousled long', 'Windswept medium length', 'Wispy short', 'Glossy and straight', 
    'Tangled and unkempt', 'Tightly wound bun', 'Medium and caught in a jewelled barette', 
    'Braided with ribbons or beads', 'Long and held back by a braided length of leather', 
    'Messy braid with tendrils escaping', 'Loose and luxurious cascade of curls', 'Shaggy mane', 
    'Thick mane', 'Dreadlocks', 'Braided into an intricate crown']

function newHairStyle(){ 
    var hair_style = Math.floor(Math.random() * hair_styles.length);
    document.getElementById('hairStyleDisplay').innerHTML = hair_styles[hair_style];
}

var hair_colors = ['White', 'Gray', 'Silver', 'Platinum', 'Sandy blonde', 'Sandy brown', 'Caramel brown',
    'Coffee brown', 'Auburn', 'Chestnut', 'Mahogany', 'Sable', 'Blue black', 'Coppery', 'Bright red', 
    'Flame red', 'Deep copper', 'Turquoise', 'Midnight blue', 'Spring green', 'Forest green', 'Rose pink', 
    'Lavender', 'Aqua']

function newHairColor(){ 
    var hair_color = Math.floor(Math.random() * hair_colors.length);
    document.getElementById('hairColorDisplay').innerHTML = hair_colors[hair_color];
}

var places_of_birth = ['Floating Shanty Town', 'Haunted Forest', 'Pirate Infested Islands', 'Slums Of Port City', 
    'Mage Academy Of Cloud Spires', 'Fortress deep under the mountaIns', 'Cursed Palace or Fallen Kingdom', 
    'City of Ten Thousand Flags', 'Conquered city in the shifting sands', 'Forgotten Elven Monastery', 
    'Remote Keep in Northern Icelands', 'Silk and spices trade galley', 'Fishing village', 'Fey Wilds', 
    'Moving island', 'Plague ridden city', 'High Class brothel', 'Thriving Seaport Town', 
    'Cliffside Village Of Griffon Riders', 'Doomed Dwarven Fortress']

function newPlaceOfBirth(){ 
    var place_of_birth = Math.floor(Math.random() * places_of_birth.length);
    document.getElementById('placeOfBirthDisplay').innerHTML = places_of_birth[place_of_birth];
}

var caretakers = ['Original parents', 'Aunt', 'Uncle', 'Distant relative from far off land', 
    'One parent alive & other misfortune', 'One parent alive & other dead', 'Grandparent', 
    'Grandparents', 'Adopted by alien race', 'Adopted by same race', 'Orphanage', 'Monastery', 'Master', 
    'Owner', 'On your own']

function newCaretaker(){ 
    var caretaker = Math.floor(Math.random() * caretakers.length);
    document.getElementById('caretakerDisplay').innerHTML = caretakers[caretaker];
}

var childhoods = ['Caretaker in prison', 'Caretaker a street rat', 'Caretaker a hermit',  
    'Sheltered and overprotected', 'Fierce sibling rivalry', 'Abusive parent', 
    'Abusive sibling', 'Abusive Master', 'Kind Master', 'Military structure', 
    'Businesslike Owner', 'Apprenticed to Entertainer', 'Apprenticed to Crafstman', 
    'Apprenticed to magic user', 'Apprenticed to Scholar', 'Intense schooling of the right kind', 
    'Intense schooling of the wrong kind', 'Caretaker for diseased relative', 
    'Caretaker for crazy relative', 'Groomed for marriage', 'Groomed for ruling']

function newChildhood() {
    var childhood = Math.floor(Math.random() * childhoods.length);
    document.getElementById('childhoodDisplay').innerHTML = childhoods[childhood];
}

var tattoos = ['Fading snake around arm', 
    'Colorful serpent around leg', 
    'Delicate serpent around wrist', 
    'Coiled serpent biting its own tail on chest', 
    'Pair of twining serpents across back', 
    'Fiery serpent along forearm', 
    'Rampant lion across left side of chest', 
    'Rampant gryphon across back', 
    'Sly dragon coiled around shoulder and upper arm', 
    'Bright smiling sun on shoulder', 
    'Fierce falcon on calf', 
    'Mischievous squirrel on calf', 
    'Shrouded figure with a scythe on shoulderblade', 
    'Rusted hourglass on ankle', 
    'Grinning skull resting on ruby roses across right side of chest', 
    'Sorrowful fox beneath a golden harvest moon', 
    'Brightly colored lizard scampering up shoulder', 
    'Holly bough with bright red berries on wrist', 
    'Eagle clutching three arrows on one shoulderblade', 
    'Raven with outstretched wings across back', 
    'Fierce-eyed falcon with outstretched wings across chest', 
    'Sultry mermaid amidst a school of dolphins across thigh', 
    'Red-furred fox grinning slyly on shoulder', 
    'Elegant sunflower twined with an emerald ribbon across shoulderblade', 
    'Golden-eyed owl gazing solemnly from shoulder', 
    'Proud stag with antlers stretched across both shoulders and back', 
    'Delicate strand of ivory and blossoms around wrist', 
    'Sinuous strand of thorned branches around upper arm', 
    'Tawny furred lioness reclining across shoulderblade', 
    'Ship with tattered black sails on calf', 
    'Ornate Oak tree with stylized branches on chest', 
    'Intricate Tiger Lily with a single honeybee on one petal across calf', 
    'Band of flames writhing around upper arm'];

function newTattoo() {
    var tattoo = Math.floor(Math.random() * tattoos.length);
    document.getElementById('tattooDisplay').innerHTML = tattoos[tattoo];
}

var character_flaws = ['Spitefulness', 'Pettiness', 'Cowardice', 'Dishonesty', 
    'Cruelty', 'Self denial', 'Naivete', 'Gullibility', 'Messiness', 'Insincerity', 
    'Arrogance', 'Vengefulness', 'Delusion', 'Rage', 'Self pity', 'Selfishness', 
    'Hypocrisy', 'Laziness', 'Entitlement', 'Prejudice', 'Defensiveness', 'Prudishness', 
    'Unfairness', 'Tactlessness', 'Paranoia', 'Gruff', 'Bad habit', 'Hedonistic', 'Humorless', 
    'Idealist', 'Impatient', 'Illiterate', 'Avoidant', 'Careless', 'Chatter box', 'Competitive', 
    'Cold', 'Cynical', 'Deceptive', 'Defiant', 'Distracted easily', 'Forgetful', 'Greedy', 
    'Impressionable', 'Impulsive', 'Indulgent', 'Kleptomaniac', 'Messy', 'Mischievious', 
    'Nosy', 'Pyromaniac', 'Quick tempered', 'Reckless', 'Rebellious', 'Sarcastic', 'Sneaky', 
    'Spoiled', 'Superstitious', 'Temperamental', 'Vain'];

function newCharacterFlaw(){
    var character_flaw = Math.floor(Math.random() * character_flaws.length);
    document.getElementById('characterFlawDisplay').innerHTML = character_flaws[character_flaw];
}

var phobias = ['Darkness', 'Heights', 'Vomiting secondary to airsickness', 'Cats', 'Chickens', 
    'Garlic', 'Amnesia secondary to Concussion', 'Choking', 'Needles', 'Pickpockets', 'Thunder', 
    'Lightning strike', 'Zombies', 'Ghosts', 'Drow', 'The Underdark', 'Spiders', 'Floods', 
    'Venomous snakes', 'Scent of decomposition', 'Toads', 'Slime', 'Mirrors', 'Bats', 
    'Enclosed spaces', 'Wasps', 'Freezing to death', 'Demons', 'Plague', 'Ents', 'Crossroads curses', 
    'Being kicked by a mule', 'Choking on a fish bone', 'Leprosy', 'Rodents', 'Ravens', 
    'Death portents', 'Curses', 'Tunnels', 'Goblins', 'Sea travel'];

function newPhobia(){
    var phobia = Math.floor(Math.random() * phobias.length);
    document.getElementById('phobiaDisplay').innerHTML = phobias[phobia];
}

var appearance_traits = ['Facial scar', 'Faded tattoo', 'Missing a finger', 'One arm made of iron', 
    'Wild bird on shoulder', 'Accosted by cats', 'Missing an ear', 'Graceful bearing', 
    'Chemical burns on hand', 'Smells like horses', 'Squirrel in pocket', 'Harp case on back', 
    'Feathered cloak', 'Tattered rags', 'Tangled hair'];

function newAppearanceTrait(){
    var appearance_trait = Math.floor(Math.random() * appearance_traits.length);
    document.getElementById('appearanceTraitDisplay').innerHTML = appearance_traits[appearance_trait];
}

var occupations = ['Gold miner', 'Blacksmith', 'Innkeeper', 'Traveling trader', 'Estranged noble', 
    'Traveling bard', 'Harper spy', 'Cleric of Light', 'Cleric of Dark', 'Healer', 'Tanner', 'Guardsman', 
    'Soldier', 'Apothecary', 'Wizard', 'Baker', 'Stonemason', 'Farmer', 'Cobbler', 'Hunter', 'Servant, Scout', 
    'Haughty noble', 'Hermit', 'Ranger', 'Entertainer', 'Slave', 'Guild artisan', 'Monk', 'Scholar', 'Soldier', 
    'Mercenary', 'Mage', 'Apprentice Mage', 'Hedgewitch', 'Hedgewizard', 'Archmagus', 'Thief', 'Forger', 'Jeweler', 
    'Minor noble', 'Major noble', 'Royalty', 'Service to Dark', 'Service to Light', 'Brewer', 'Bookbinder', 
    'Luthier', 'Cook', 'Barbarian tribe leader', 'Executioner', 'Bounty hunter', 'Dragon Scholar', 
    'Dragon Cultist', 'Gryphon trainer', 'Genasi ambassador', 'Horse trainer']

function newOccupation(){
    var occupation = Math.floor(Math.random() * occupations.length);
    document.getElementById('occupationDisplay').innerHTML = occupations[occupation];
}



var professions = ["Priest or Priestess of Auril", "goddess of winter", "Priest or Priestess of Azuth", 
    "god of wizards", "Priest or Priestess of Bane", "god of tyranny", "Priest or Priestess of Beshaba", 
    "goddess of misfortune", "Priest or Priestess of Bhaal", "god of murder", 
    "Priest or Priestess of Chauntea", "goddess of agriculture", "Priest or Priestess of Deneir", 
    "god of writing", "Priest or Priestess of Eldath", "goddess of peace", "Priest or Priestess of Gond", 
    "god of craft", "Priest or Priestess of Helm", "god of protection", "Priest or Priestess of Kelemvor", 
    "god of the dead", "Priest or Priestess of Lathander", "god of birth and renewal", 
    "Priest or Priestess of Leira", "goddess of illusion", "Priest or Priestess of Liira", 
    "goddess of joy", "Priest or Priestess of Loviatar", "goddess of pain", "Priest or Priestess of Malar", 
    "god of the hunt", "Priest or Priestess of Mask", "god of thieves", "Priest or Priestess of Mielikk", 
    "goddess of forests", "Priest or Priestess of Milil", "god of poetry and song", 
    "Priest or Priestess of Mystr", "goddess of magic", "Priest or Priestess of Myrkul", 
    "god of death", "Priest or Priestess of Oghma", "god of knowledge", "Priest or Priestess of Silvanus", 
    "god of wild nature", "Priest or Priestess of Talos", "god of storms", "Priest or Priestess of Tempus", 
    "god of war", "Priest or Priestess of Tymora", "goddess of good fortune", "Priest or Priestess of Tyr", 
    "god of justice", "Priest or Priestess of Umberlee", "goddess of the sea", 
    "Priest or Priestess of Torm", "god of courage and self sacrifice", "Apprenticed to Kind Baker", 
    "Apprenticed to Kind Cook", "Apprenticed to Kind Brewer", "Apprenticed to Kind Alchemist", 
    "Apprenticed to Kind Healer", "Apprenticed to Kind Smith", "Apprenticed to Kind Luthier", 
    "Apprenticed to Kind Bookbinder", "Apprenticed to Kind Jeweler", "Apprenticed to Kind Bard", 
    "Apprenticed to Kind Scholar", "Apprenticed to Kind Knight", "Apprenticed to Kind Mage", 
    "Page to Minor Noble", "Page to Major Noble", "Page to Royalty", "Apprenticed to Kind Gambler", 
    "Apprenticed to Kind Carpenter", "Apprenticed to Kind Armorer", "Apprenticed to Kind Weaponsmith", 
    "Apprenticed to Kind Ship's Captain", "Apprenticed to Kind Dungeoneer", 
    "Apprenticed to Kind Explorer", "Apprenticed to Kind Lore keeper", 
    "Apprenticed to Kind Tale spinner", "Apprenticed to Kind Ranger", 
    "Apprenticed to Kind Horsebreeder", "Apprenticed to Kind Thief", 
    "Apprenticed to Kind Con Artist", "Apprenticed to Kind Archmage", 
    "Apprenticed to Kind Gate Mage", "Apprenticed to Kind Silversmith", 
    "Apprenticed to Kind Undead Hunter", "Apprenticed to Kind Dragon Cultist", 
    "Apprenticed to Kind Zhentarim", "Apprenticed to Kind Harper", "Apprenticed to Kind Druid", 
    "Apprenticed to Kind Pirate", "Apprenticed to Kind Madam", 
    "Apprenticed to Kind Silk and Spices Trader", "Apprenticed to Cruel Baker", 
    "Apprenticed to Cruel Cook", "Apprenticed to Cruel Brewer", "Apprenticed to Cruel Alchemist", 
    "Apprenticed to Cruel Healer", "Apprenticed to Cruel Smith", "Apprenticed to Cruel Luthier", 
    "Apprenticed to Cruel Bookbinder", "Apprenticed to Cruel Jeweler", "Apprenticed to Cruel Bard", 
    "Apprenticed to Cruel Scholar", "Apprenticed to Cruel Knight", "Apprenticed to Cruel Mage", 
    "Page to Minor Noble", "Page to Major Noble", "Page to Royalty", "Apprenticed to Cruel Gambler", 
    "Apprenticed to Cruel Carpenter", "Apprenticed to Cruel Armorer", "Apprenticed to Cruel Weaponsmith", 
    "Apprenticed to Cruel Ship's Captain", "Apprenticed to Cruel Dungeoneer", 
    "Apprenticed to Cruel Explorer", "Apprenticed to Cruel Lore keeper", 
    "Apprenticed to Cruel Tale spinner", "Apprenticed to Cruel Ranger", 
    "Apprenticed to Cruel Horsebreeder", "Apprenticed to Cruel Thief", 
    "Apprenticed to Cruel Con Artist", "Apprenticed to Cruel Archmage", 
    "Apprenticed to Cruel Gate Mage", "Apprenticed to Cruel Silversmith", 
    "Apprenticed to Cruel Undead Hunter", "Apprenticed to Cruel Dragon Cultist", 
    "Apprenticed to Cruel Zhentarim", "Apprenticed to Cruel Harper", "Apprenticed to Cruel Druid", 
    "Apprenticed to Cruel Pirate", "Apprenticed to Cruel Madam", 
    "Apprenticed to Cruel Silk and Spices Trader", "Slave of Cruel Baker", "Slave of Cruel Cook", 
    "Slave of Cruel Brewer", "Slave of Cruel Alchemist", "Slave of Cruel Healer", 
    "Slave of Cruel Smith", "Slave of Cruel Luthier", "Slave of Cruel Bookbinder", 
    "Slave of Cruel Jeweler", "Slave of Cruel Bard", "Slave of Cruel Scholar", "Slave of Cruel Knight", 
    "Slave of Cruel Mage", "Page to Minor Noble", "Page to Major Noble", "Page to Royalty", 
    "Slave of Cruel Gambler", "Slave of Cruel Carpenter", "Slave of Cruel Armorer", 
    "Slave of Cruel Weaponsmith", "Slave of Cruel Ship's Captain", "Slave of Cruel Dungeoneer", 
    "Slave of Cruel Explorer", "Slave of Cruel Lore keeper", "Slave of Cruel Tale spinner", 
    "Slave of Cruel Ranger", "Slave of Cruel Horsebreeder", "Slave of Cruel Thief", 
    "Slave of Cruel Con Artist", "Slave of Cruel Archmage", "Slave of Cruel Gate Mage", 
    "Slave of Cruel Silversmith", "Slave of Cruel Undead Hunter", "Slave of Cruel Dragon Cultist", 
    "Slave of Cruel Zhentarim", "Slave of Cruel Harper", "Slave of Cruel Druid", "Slave of Cruel Pirate", 
    "Slave of Cruel Madam", "Slave of Cruel Silk and Spices Trader", "Slave of Kind Baker", 
    "Slave of Kind Cook", "Slave of Kind Brewer", "Slave of Kind Alchemist", "Slave of Kind Healer", 
    "Slave of Kind Smith", "Slave of Kind Luthier", "Slave of Kind Bookbinder", "Slave of Kind Jeweler", 
    "Slave of Kind Bard", "Slave of Kind Scholar", "Slave of Kind Knight", "Slave of Kind Mage", 
    "Page to Minor Noble", "Page to Major Noble", "Page to Royalty", "Slave of Kind Gambler", 
    "Slave of Kind Carpenter", "Slave of Kind Armorer", "Slave of Kind Weaponsmith", 
    "Slave of Kind Ship's Captain", "Slave of Kind Dungeoneer", "Slave of Kind Explorer", 
    "Slave of Kind Lore keeper", "Slave of Kind Tale spinner", "Slave of Kind Ranger", 
    "Slave of Kind Horsebreeder", "Slave of Kind Thief", "Slave of Kind Con Artist", 
    "Slave of Kind Archmage", "Slave of Kind Gate Mage", "Slave of Kind Silversmith", 
    "Slave of Kind Undead Hunter", "Slave of Kind Dragon Cultist", "Slave of Kind Zhentarim", 
    "Slave of Kind Harper", "Slave of Kind Druid", "Slave of Kind Pirate", "Slave of Kind Madam", 
    "Slave of Kind Silk and Spices Trader", "Servant of Cruel Baker", "Servant of Cruel Cook", 
    "Servant of Cruel Brewer", "Servant of Cruel Alchemist", "Servant of Cruel Healer", 
    "Servant of Cruel Smith", "Servant of Cruel Luthier", "Servant of Cruel Bookbinder", 
    "Servant of Cruel Jeweler", "Servant of Cruel Bard", "Servant of Cruel Scholar", 
    "Servant of Cruel Knight", "Servant of Cruel Mage", "Page to Minor Noble", "Page to Major Noble", 
    "Page to Royalty", "Servant of Cruel Gambler", "Servant of Cruel Carpenter", 
    "Servant of Cruel Armorer", "Servant of Cruel Weaponsmith", "Servant of Cruel Ship's Captain", 
    "Servant of Cruel Dungeoneer", "Servant of Cruel Explorer", "Servant of Cruel Lore keeper", 
    "Servant of Cruel Tale spinner", "Servant of Cruel Ranger", "Servant of Cruel Horsebreeder", 
    "Servant of Cruel Thief", "Servant of Cruel Con Artist", "Servant of Cruel Archmage", 
    "Servant of Cruel Gate Mage", "Servant of Cruel Silversmith", "Servant of Cruel Undead Hunter", 
    "Servant of Cruel Dragon Cultist", "Servant of Cruel Zhentarim", "Servant of Cruel Harper", 
    "Servant of Cruel Druid", "Servant of Cruel Pirate", "Servant of Cruel Madam", 
    "Servant of Cruel Silk and Spices Trader", "Servant of Kind Baker", "Servant of Kind Cook", 
    "Servant of Kind Brewer", "Servant of Kind Alchemist", "Servant of Kind Healer", 
    "Servant of Kind Smith", "Servant of Kind Luthier", "Servant of Kind Bookbinder", 
    "Servant of Kind Jeweler", "Servant of Kind Bard", "Servant of Kind Scholar", 
    "Servant of Kind Knight", "Servant of Kind Mage", "Page to Minor Noble", "Page to Major Noble", 
    "Page to Royalty", "Servant of Kind Gambler", "Servant of Kind Carpenter", 
    "Servant of Kind Armorer", "Servant of Kind Weaponsmith", "Servant of Kind Ship's Captain", 
    "Servant of Kind Dungeoneer", "Servant of Kind Explorer", "Servant of Kind Lore keeper", 
    "Servant of Kind Tale spinner", "Servant of Kind Ranger", "Servant of Kind Horsebreeder", 
    "Servant of Kind Thief", "Servant of Kind Con Artist", "Servant of Kind Archmage", 
    "Servant of Kind Gate Mage", "Servant of Kind Silversmith", "Servant of Kind Undead Hunter", 
    "Servant of Kind Dragon Cultist", "Servant of Kind Zhentarim", "Servant of Kind Harper", 
    "Servant of Kind Druid", "Servant of Kind Pirate", "Servant of Kind Madam", 
    "Servant of Kind Silk and Spices Trader", "Baker", "Cook", "Brewer", "Alchemist", "Healer", 
    "Smith", "Luthier", "Bookbinder", "Jeweler", "Bard", "Scholar", "Knight", "Mage", 
    "Courtesan to Minor Noble", "Courtesan to Major Noble", "Courtesan to Royalty", "Gambler", 
    "Carpenter", "Armorer", "Weaponsmith", "Ship's Captain", "Dungeoneer", "Explorer", "Lore keeper", 
    "Tale spinner", "Ranger", "Horsebreeder", "Thief", "Con Artist", "Archmage", "Gate Mage", 
    "Silversmith", "Undead Hunter", "Dragon Cultist", "Zhentarim", "Harper", "Druid", "Pirate", 
    "Madam", "Silk and Spices Trader", "Soldier to Wealthy Baker", "Soldier to Wealthy Cook", 
    "Soldier to Wealthy Brewer", "Soldier to Wealthy Alchemist", "Soldier to Wealthy Healer", 
    "Soldier to Wealthy Smith", "Soldier to Wealthy Luthier", "Soldier to Wealthy Bookbinder", 
    "Soldier to Wealthy Jeweler", "Soldier to Wealthy Bard", "Soldier to Wealthy Scholar", 
    "Soldier to Wealthy Knight", "Soldier to Wealthy Mage", "Page to Minor Noble", 
    "Page to Major Noble", "Page to Royalty", "Soldier to Wealthy Gambler", 
    "Soldier to Wealthy Carpenter", "Soldier to Wealthy Armorer", "Soldier to Wealthy Weaponsmith", 
    "Soldier to Wealthy Ship's Captain", "Soldier to Wealthy Dungeoneer", "Soldier to Wealthy Explorer", 
    "Soldier to Wealthy Lore keeper", "Soldier to Wealthy Tale spinner", "Soldier to Wealthy Ranger", 
    "Soldier to Wealthy Horsebreeder", "Soldier to Wealthy Thief", "Soldier to Wealthy Con Artist", 
    "Soldier to Wealthy Archmage", "Soldier to Wealthy Gate Mage", "Soldier to Wealthy Silversmith", 
    "Soldier to Wealthy Undead Hunter", "Soldier to Wealthy Dragon Cultist", 
    "Soldier to Wealthy Zhentarim", "Soldier to Wealthy Harper", "Soldier to Wealthy Druid", 
    "Soldier to Wealthy Pirate", "Soldier to Wealthy Madam", 
    "Soldier to Wealthy Silk and Spices Trader", "Soldier to Noble Baker", "Soldier to Noble Cook", 
    "Soldier to Noble Brewer", "Soldier to Noble Alchemist", "Soldier to Noble Healer", 
    "Soldier to Noble Smith", "Soldier to Noble Luthier", "Soldier to Noble Bookbinder", 
    "Soldier to Noble Jeweler", "Soldier to Noble Bard", "Soldier to Noble Scholar", 
    "Soldier to Noble Knight", "Soldier to Noble Mage", "Page to Minor Noble", "Page to Major Noble", 
    "Page to Royalty", "Soldier to Noble Gambler", "Soldier to Noble Carpenter", 
    "Soldier to Noble Armorer", "Soldier to Noble Weaponsmith", "Soldier to Noble Ship's Captain", 
    "Soldier to Noble Dungeoneer", "Soldier to Noble Explorer", "Soldier to Noble Lore keeper", 
    "Soldier to Noble Tale spinner", "Soldier to Noble Ranger", "Soldier to Noble Horsebreeder", 
    "Soldier to Noble Thief", "Soldier to Noble Con Artist", "Soldier to Noble Archmage", 
    "Soldier to Noble Gate Mage", "Soldier to Noble Silversmith", "Soldier to Noble Undead Hunter", 
    "Soldier to Noble Dragon Cultist", "Soldier to Noble Zhentarim", "Soldier to Noble Harper", 
    "Soldier to Noble Druid", "Soldier to Noble Pirate", "Soldier to Noble Madam", 
    "Soldier to Noble Silk and Spices Trader"]

function newProfession(){
    var profession = Math.floor(Math.random() * professions.length);
    document.getElementById("professionDisplay").innerHTML = professions[profession];
}



var goal_desire_secrets = ['Missing relative', 'Unrequited romance', 'Missing lover', 
    'Secret shapeshifter', 'Trying to find lost heirloom', 'Escaping an enemy', 
    'Running from the law', 'Recovering from illness', 'Wants to be famous', 
    'Needs help with monster', 'Completely drunk', 'Selling something', 
    'Love potion targeted on PC', 'Carries a cryptic treasure map they won in a tavern bet', 
    'Who is a recovering gambling addiction and lost minor appendages to it', 
    'In way too deep with the wrong people', 'Failed to protect the royal family', 
    'Left homeland in disgrace', 'Posing as someone else', 'Has been on the run for more than 3 years',  
    'Can\'t silence the voices', 'Searching for the knowledge of true immortality', 
    'Expelled from the royal guards', 'Makes all minor decisions by flipping a coin', 
    'Framed for the murder of a well loved innkeeper', 'Responsible for their sister\'s death', 
    'Knows that they are the incarnation of a legendary warrior', 'Isn\'t technically alive anymore', 
    'On the run after having an affair with a Noble\'s daughter', 
    'Haunted by the ghosts of their forefathers', 'Knows seven dangerous secrets', 
    'Trapped in a Faustian bargain', 'Is a recovering cannibal', 'Was born in a different body', 
    'Started a rebellion in the northern mountains'];

function newGoalDesireSecret(){
    var goal_desire_secret = Math.floor(Math.random() * goal_desire_secrets.length);
    document.getElementById('goalDesireSecretDisplay').innerHTML = goal_desire_secrets[goal_desire_secret];
}

var random_encounters = ['Seasonal festival', 'Funeral', 'Evil creatures breeding', 
    'Traveling minstrels', 'Traveling tinkers', 'Escaped criminal', 'Wizard spell gone awry', 
    'Find an egg from a dragon', 'Find an egg from a gryphon', 'Earthquake', 'Severe winter storm', 
    'Severe thunderstorm', 'Lame horse', 'Forest fire', 'Bandits', 'Black eyed children', 
    'Lost child', 'Cult ambush', 'Plague stricken farm', 'Plague stricken village', 'Cursed item', 
    'Vengeful ex lover', 'Lost hatchling', 'Strayed monster youngling', 'Swarms of vermin', 
    'Farmhouse on fire', 'Waystation on fire', 'Orc raid on farm', 'Tornado', 'Enormous sinkhole', 
    'Chasm with broken bridge'];

function newRandomEncounter(){
    var random_encounter = Math.floor(Math.random() * random_encounters.length);
    document.getElementById('randomEncounterDisplay').innerHTML = random_encounters[random_encounter];
}

var wine_liquors = ['Grog', 'Goblin spit ale', 'Orc Kragg', 'Turnip wine', 'Miller\'s moonshine', 
    'Dwarven ale', 'Moon Mountain ale', 'Lotus leaf wine', 'Dragonhead stout', 'Elven Mead', 'Berry brandy',
    'Fireweed whiskey', 'Scorpionweed Reserve', 'Bacon beer', 'Crowberry cider', 'Brandy laced goatsmilk', 
    'Swamplight spirits', 'Wild Orchid wine', 'Frenzywater', 'Halfling brown ale'];

function newWineLiquor(){
    var wine_liquor = Math.floor(Math.random() * wine_liquors.length);
    document.getElementById('wineLiquorDisplay').innerHTML = wine_liquors[wine_liquor];
}

var tavern_inn_foods = ['Acorn soup', 'Frogs on skewers', 'Lizard gruel with grilled snake', 
    'Leg of mutton with goose eggs', 'Beef stew and sourdough', 'Rabbit and baked pumpkin', 
    'Bog-beetle dumplings', 'Wren pie and cattail soup', 'Thistle salad with roasted grubs', 
    'Grilled wild boar chips', 'Roast chicken and potatoes', 'Roasted cod and mashed taters', 
    'Beef steak and kidney pie', 'Baked pheasant w/ juniper', 'Smoked salmon & wild berries', 
    'Stuffed trout w/ cabbage', 'Braised beef & onion soup', 'Roast stag and plum pudding', 
    'Fried ostrich and egg omelet', 'Lettuce', 'Liver', 'Lung pie'];

function newTavernInnFood(){
    var tavern_inn_food = Math.floor(Math.random() * tavern_inn_foods.length);
    document.getElementById('tavernInnFoodDisplay').innerHTML = tavern_inn_foods[tavern_inn_food];
}

var misc_treasure_items = ['Sack of gold', 'Chest of silver', 'Leather bag of gems', 
    'Jeweled tiara', 'Ancient weapon', 'Old spellbook', 'Treasure map', 'Jeweled dagger', 
    'Jade animal', 'Magical music box', 'Jeweled ring', 'Otherworldly statue', 'Carved twisted horn', 
    'Onyx dragonskull', 'Unknown egg', 'Inscribed tankard', 'Ancient scrolls', 'Speaking skull', 
    'Mysterious key', 'Everfilling tankard'];

function newMiscTreasureItem(){
    var misc_treasure_item= Math.floor(Math.random() * misc_treasure_items.length);
    document.getElementById('miscTreasureItemDisplay').innerHTML = misc_treasure_items[misc_treasure_item];
}

var wounds = ['Deep facial cut', 'Ear cut off', 'Blinded eye', 'Deep cut across chest', 
    'Broken rib', 'Slice across back', 'Deep gash in arm', 'Shattered wrist', 'Broken ankle', 
    'Broken leg', 'Shoulder dislocated'];

function newWound(){
    var wound = Math.floor(Math.random() * wounds.length);
    document.getElementById('woundDisplay').innerHTML = wounds[wound];
}

var misfortunes = ['Tormenting prophetic visions', 'Hunted by Reaper', 'Generational curse', 
    'Haunted by Ghost', 'Possessed by demon', 'Taken by slavers', 'Kidnapped by barbarians', 
    'Conscripted into army', 'Polymorphed', 'Lost everything and now a beggar', 
    'Lost everything and now a servant', 'Madness', 'Imprisoned for a crime they committed', 
    'Imprisoned for a crime they didn\'t commit', 'Imprisoned for offending a royal', 
    'Fallen into Cult\'s sway', 'Missing a limb', 'Blinded', 'Turned into a vampire', 
    'Turned into a werewolf', 'On the run from crime lord', 'Kidnapped by bandits', 
    'Unwilling necromancer', 'Uncontrolled pyromancer'];

function newMisfortune(){
    var misfortune = Math.floor(Math.random() * misfortunes.length);
    document.getElementById('misfortuneDisplay').innerHTML = misfortunes[misfortune];
}

var deaths = ['Warfare as a participant',  'Warfare as collateral damage', 
    'Magical accident of their own', 'Magical accident of another', 'Street accident', 
    'Earthquake', 'Tornado', 'Frozen in blizzard', 'Starved in famine', 'Caught a disease', 
    'Died in plague', 'Barbarian raid', 'Bandit raid', 'Monster attack', 
    'Executed for another\'s crime', 'Executed for offending royalty', 
    'Murdered by family member', 'Murdered and culprit unknown', 'Death ordered by crime lord', 
    'Murdered by jealous lover', 'Sacrificed by a cult', 'Kidnapped by a dragon', 
    'Enslaved to an Archmagus because of magical talent', 'Conscripted by pirates'];

function newDeath(){
    var death = Math.floor(Math.random() * deaths.length);
    document.getElementById('deathDisplay').innerHTML = deaths[death];
}

var social_statuses = ['Slave', 'Petty criminal', 'Major criminal', 'Wealthy landowner', 
    'Craftsman', 'Scholar', 'Soldier or Mercenary', 'Crime lord', 'Minor mage', 'Demon hunter', 
    'Minor noble', 'Major Noble', 'Archmage', 'High Priest or Priestess', 'Acolyte or Monk', 
    'Connected to the Dark', 'Connected to the Light', 'Royalty'];

function newSocialStatus(){
    var social_status = Math.floor(Math.random() * social_statuses.length);
    document.getElementById('socialStatusDisplay').innerHTML = social_statuses[social_status];
}

var hobbies = ['Music', 'Woodcarving', 'Sketching', 'Painting', 'Gambling', 'Brewing liquor', 
    'Training animals', 'Sewing or embroidery', 'Minor necromancy', 'Minor earthmagic', 
    'Ghost hunting', 'Acrobatics', 'Prestidigitation', 'Carving gemstones', 'Alchemy', 
    'Collecting fables or legends', 'Baking', 'Cookery', 'Travel to and study alien races', 
    'Explore the Underdark', 'Amateur sleuth', 'Making candy', 'Ghost writing love letters'];

function newHobby(){
    var hobby = Math.floor(Math.random() * hobbies.length);
    document.getElementById('hobbyDisplay').innerHTML = hobbies[hobby];
}

var scents = ['Absinthe, Allspice', 'Amber', 'Ambergris', 'Apple', 'Apricot', 'Ashes', 
    'Autumn leaves', 'Autumn spices', 'Baby Powder', 'Baking cookies', 'Balsam Wood', 
    'Bamboo', 'Basil', 'Bay Leaf', 'Bay Rum', 'Berries', 'Blackberry', 'Black Currant', 
    'Black Pepper', 'Black Raspberry', 'Black vetiver', 'Blue cypress', 'Boiled cabbage', 
    'Bourbon vanilla', 'Burnt Sugar', 'Butter', 'Buttercream', 'Buttery suede', 'Cactus', 
    'Cantaloupe', 'Caramel', 'Caramelized sugar', 'Cardamom', 'Carnation', 'Casa Blanca Lily', 
    'Cashmere wood (yes wood)', 'Cedarwood', 'Chamomile', 'Champagne', 'Cheap perfume', 
    'Cherry Blossom', 'Cherry Vanilla', 'Cherrywood', 'Chocolate', 'Cigars', 'Cilantro', 'Cinnamon', 
    'Clove', 'Clover', 'Coconut', 'Coconut milk', 'Coffee', 'Coriander', 'Cornmeal', 'Cranberry', 
    'Cucumber', 'Cumin', 'Cypress', 'Daffodils', 'Dark chocolate', 'Driftwood', 'Dry wood', 'Earth', 
    'Earthy heart of patchouli', 'Ebony wood', 'Eucalyptus', 'Fern', 'Fig', 'Forest Rain', 'Vanilla', 
    'Fresh bread', 'Fresh Cut Grass', 'Fresh Laundry', 'Fresh rainfall', 'Gardenia', 'Garlic', 'Geranium', 
    'Ginger', 'Gingerbread', 'Grapefruit', 'Grass', 'Grassy vetiver', 'Green Tea', 'Hazelnuts', 
    'Heart of juniper', 'Hibiscus', 'Honey', 'Honeydew', 'Honeysuckle', 'Incense', 'Ink', 'Iris', 'Iron', 
    'Ivy', 'Jade', 'Jasmine', 'Juniper', 'Juniper berries', 'Kiwi', 'Lavender', 'Leather', 'Leather polish', 
    'Lemon', 'Lemon grass', 'Lilac', 'Lilly of the valley', 'Lily', 'Lime', 'Linen', 'Magnolia', 'Mandarin', 
    'Mango', 'Maple sugar', 'Medicine', 'Melon', 'Mocha', 'Molasses', 'Moonlight', 'Moss', 'Musk', 
    'Musty books', 'Nectar', 'Nectarine', 'Oak', 'Oakmoss', 'Oats', 'Old parchment', 'Opium', 'Orange', 
    'Orange Blossom', 'Orchid', 'Orchid smoke', 'Oregano', 'Oriental musk', 'Papyrus extract', 
    'Papyrus juice', 'Passion Flower', 'Passion Fruit', 'Patchouli', 'Peach', 'Pear', 'Peony', 'Peppermint', 
    'Pineapple', 'Pine Needles', 'Pink pepper', 'Plum', 'Pomegranate', 'Praline', 'Prune', 'Pumpkin', 
    'Rain', 'Raisins', 'Raspberry', 'Red wine', 'River mud', 'River water', 'Rose', 'Rosemary', 'Rosewood', 
    'Rusted metal', 'Sage', 'Sandalwood', 'Scotch', 'Sea amber', 'Seabreeze', 'Sea Mist', 'Sea salt', 'Seawater', 
    'Seaweed', 'Snowberry', 'Snow drifts', 'Stale beer', 'Stale sweat', 'Straw', 'Strawberry', 'Sugar', 
    'Sugared almonds/pecans', 'Sunlight', 'Sweet Pea', 'Sweetshrub', 'Sweet smoke', 'Tangerine', 'Tarragon', 
    'Tea Leaves', 'Tea Rose', 'Thyme', 'Spices', 'Tobacco', 'Tonka bean', 'Tonkin musk', 'Vanilla', 'Vetiver', 
    'Violet', 'Violet leaf', 'Virginia cedar', 'Water Lily', 'Watermelon', 'White bergamot', 'White Ginger', 
    'White Peach', 'White pepper', 'White Tea', 'White wine', 'Woodsmoke', 'Ylang ylang'];

function newScent(){
    var scent = Math.floor(Math.random() * scents.length);
    document.getElementById('scentDisplay').innerHTML = scents[scent];
}
