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
    'Mage Academy Of Cloud Spires', 'Fortress deep under the mountaIns', 'Cursed Palace or Fallen KIngdom', 
    'City Of Ten Thousand Flags', 'Conquered city In the shifting sands', 'Forgotten Elven Monastery', 
    'Remote Keep In Northern Icelands', 'Silk and spices trade galley', 'Fishing village', 'Fey Wilds', 
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





