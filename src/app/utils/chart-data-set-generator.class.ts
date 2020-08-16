import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { RandomGenerator } from './random.class';

export class ChartDataSetGenerator {
  min: number;
  max: number;

  constructor (min?: number, max?: number) {
    if (min >= max) { throw  'Illegal Argument'; }
  }

  makeRadarLabels(): Label[] {
    return [
      'Strength',
      'Defense',
      'Dexterity',
      'Constitution',
      'Intelligence',
      'Wisdom',
      'Charisma',
      'Fortitude',
      'Reflex',
      'Will'
    ];
  }

  makeRadarDataSet(labels: Label[], n: number): ChartDataSets[] {
    const randy: RandomGenerator = new RandomGenerator(1, 100);

    const dataSet: ChartDataSets[] = [];
    for (let i = 0; i < n; i++) {
      const name = names[randy.getRandomPositiveInt()];
    }
  }
}

const names = [
  'Kylo Ren',
  'Ben Solo',
  'Luke Skywalker',
  'Rey Skywalker',
  'Ashoka',
  'Obi-Wan Kenobi',
  'Darth Maul',
  'Anakin Skywalker',
  'Darth Vader',
  'Emperor Palpatine',
  'Darth Revan',
  'Qui-Gon Jinn',
  'Master Yoda',
  'Mace Windu'
];
