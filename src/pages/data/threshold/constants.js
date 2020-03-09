import React from 'react';

const ThresholdInfo = [
  {
    title: '1% and the Ramsar Convention.',
    description: (
      <div>
        <p>A 1% threshold is used to inform the designation of Ramsar sites under Ramsar Criterion 6. This criterion states: “A wetland should be considered internationally important if it regularly supports 1% of the individuals in a biogeographic population of one species or subspecies of waterbird.” Additionally, Ramsar Criterion 5 states: “A wetland should be considered internationally important if it regularly supports 20,000 or more waterbirds.”</p>
        <p>Note that until WPE4, for all populations of 2,000,000 or more individuals, the 1% threshold was set at 20,000, as all sites which regularly hold 20,000 or more waterbirds of any species qualify as wetlands of international importance under Ramsar Criterion 5. This cap has been removed in WPE5, to make a clear distinction between the 1% threshold (Ramsar Criterion 6) and the 20,000 threshold (Ramsar Criterion 5).</p>
      </div>
    )
  },
  {
    title: 'Other applications of the 1% criterion.',
    description: (
      <div>
        <p>Besides the Ramsar Convention, the 1% level is also applied for identification of sites of international importance for waterbirds by the Central/West Asian Site Network for Siberian Cranes and Other Waterbirds established under CMS, East Asian - Australasian Flyway (EAAF) Site Network established under the EAAF Partnership, under the European Union’s Birds Directive and the EMERALD Network under the Convention on the Conservation of European Flora and Fauna, and for shorebirds under the Western Hemisphere Shorebird Reserve Network (WHSRN).</p>
      </div>
    ),
  },
  {
    title: 'Calculating one percent thresholds.',
    description: (
      <div>
        <p>Until WPE4, virtually all estimates given as a single figure or numerical range, used a 1% threshold equal to 1% of the estimate or 1% of the mid-point of the range. In WPE5 the geometric mean has been used instead of arithmetic mean to calculate 1% thresholds, which is usually a smaller value than the arithmetic mean. Using the geometric provides a less biased estimation of the 1% threshold than the arithmetic mean when the population size estimate is available as a maximum and minimum size range. This method of calculating a 1% threshold follows the standard practices in AEWA (AEWA Resolution 3.3, AEWA report on the implementation of single species action plans) and elsewhere such as the European Bird Atlas, Birds in Europe 2 and the CMS Aquatic Warbler Action Plan.</p>
        <p>For populations with coded range data (up to WPE4) that have been converted into minimum and maximum estimate in WPE5, the geometric mean is not used to generate the 1%. Instead, the 1% is based on the 1% of the maximum estimate. Except estimations when the upper estimate is expressed as >1 million individuals. In such cases, the 1% threshold was set at 20,000 individuals.</p>
        <p>Changes to the 1% threshold of a population estimate will only be proposed when a change of the 1% threshold equals or exceeds 10%.</p>
      </div>
    )
  },
  {
    title: 'Rounding of one percent thresholds.',
    description: (
      <ul><p>1% thresholds have been rounded according to the following standard:</p>
        <li>- 1% thresholds between 1 and 10 : rounded to nearest 1</li>
        <li>- 1% thresholds between 101 and 1,000 : rounded to nearest 10</li>
        <li>- 1% thresholds over 1,000 : rounded to nearest 100</li>
      </ul>
    ),
  }
];

export default ThresholdInfo;
