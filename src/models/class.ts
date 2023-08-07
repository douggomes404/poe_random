export type CharacterClass = {
    class: string;
    ascendancy: string[];
  };
  
const poeClasses: CharacterClass[] = [
    {
      class: "Marauder",
      ascendancy: ["Juggernaut", "Berserker", "Chieftain"],
    },
    {
      class: "Ranger",
      ascendancy: ["Deadeye", "Raider", "Pathfinder"],
    },
    {
      class: "Witch",
      ascendancy: ["Necromancer", "Elementalist", "Occultist"],
    },
    {
      class: "Duelist",
      ascendancy: ["Slayer", "Gladiator", "Champion"],
    },
    {
      class: "Templar",
      ascendancy: ["Inquisitor", "Hierophant", "Guardian"],
    },
    {
      class: "Shadow",
      ascendancy: ["Assassin", "Saboteur", "Trickster"],
    },
    {
      class: "Scion",
      ascendancy: ["Scion"],
    },
];

const getRandomAscendancyByClass = (userClass: string): string | null => {
    const lowerCaseUserClass = userClass.toLowerCase();
    const classEntry = poeClasses.find((characterClass) => characterClass.class.toLowerCase() === lowerCaseUserClass);
  
    if (classEntry) {
      const randomAscendancyIndex = Math.floor(Math.random() * classEntry.ascendancy.length);
      return classEntry.ascendancy[randomAscendancyIndex];
    }
  
    return null;
  };

  const randomClass = {
    getClass: (): CharacterClass => {
        const randomIndex = Math.floor(Math.random() * poeClasses.length);
        return poeClasses[randomIndex];
    },

    getRandomAscendancyByClass: getRandomAscendancyByClass,

  };
  
  export default randomClass;