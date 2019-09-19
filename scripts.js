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

var goal_desire_secrets = ['Missing relative', 'Unrequited romance', 'Missing lover', 
    'Secret shapeshifter', 'Trying to find lost heirloom', 'Escaping an enemy', 
    'Running from the law', 'Recovering form illness', 'Wants to be famous', 
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
