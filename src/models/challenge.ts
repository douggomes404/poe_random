export type BossInfo = {
    name: string;
    type: string;
    location: string;
    difficulty: string;
  };
  
  export const endGameBosses: Record<string, BossInfo> = {
    shaper: {
      name: 'Shaper',
      type: 'Elder Deity',
      location: 'The Shaper\'s Realm',
      difficulty: 'High',
    },
    elder: {
      name: 'Elder',
      type: 'Elder Deity',
      location: 'Atlas of Worlds',
      difficulty: 'High',
    },
    atziri: {
      name: 'Atziri, Queen of the Vaal',
      type: 'Vaal High Priestess',
      location: 'The Apex of Sacrifice',
      difficulty: 'High',
    },
    uberAtziri: {
      name: 'Uber Atziri',
      type: 'Vaal High Priestess',
      location: 'The Alluring Abyss',
      difficulty: 'Very High',
    },
    sirius: {
      name: 'Sirius, The Awakener',
      type: 'Elder Deity',
      location: 'Citadel of the Awakener',
      difficulty: 'Very High',
    },
    elderGuardians: {
      name: 'Elder Guardians',
      type: 'Elders Minions',
      location: 'Atlas of Worlds',
      difficulty: 'High',
    },
    conquerors: {
      name: 'Conquerors of the Atlas',
      type: 'Powerful Exiles',
      location: 'Atlas of Worlds',
      difficulty: 'High',
    },
    cortex: {
      name: 'Cortex',
      type: 'Human Boss',
      location: 'The Cortex',
      difficulty: 'Very High',
    },
    sirus8: {
      name: 'Sirus',
      type: 'Elder Deity',
      location: 'Citadel of the Awakener',
      difficulty: 'Extreme',
    },
    // Adicione mais bosses conforme necessário
  };

  const randomChallange = {
    getChallenge: (): BossInfo => {
        const bossNames = Object.keys(endGameBosses);
        const randomIndex = Math.floor(Math.random() * bossNames.length);
        return endGameBosses[randomIndex];
    },
  };
  
  export default randomChallange;