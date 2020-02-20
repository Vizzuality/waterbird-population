const estimatesInfo = [
  {
    title: '1% and the Ramsar Convention.',
    description: [
      { p: 'A 1% threshold is used to inform the designation of Ramsar sites under Ramsar Criterion 6. This criterion states: “A wetland should be considered internationally important if it regularly supports 1% of the individuals in a biogeographic population of one species or subspecies of waterbird.” Additionally, Ramsar Criterion 5 states: “A wetland should be considered internationally important if it regularly supports 20,000 or more waterbirds.”' },
      { p: 'Note that until WPE4, for all populations of 2,000,000 or more individuals, the 1% threshold was set at 20,000, as all sites which regularly hold 20,000 or more waterbirds of any species qualify as wetlands of international importance under Ramsar Criterion 5. This cap has been removed in WPE5, to make a clear distinction between the 1% threshold (Ramsar Criterion 6) and the 20,000 threshold (Ramsar Criterion 5).' }
    ]
  },
  {
    title: 'Other applications of the 1% criterion.',
    description: [
      { p: 'Besides the Ramsar Convention, the 1% level is also applied for identification of sites of international importance for waterbirds by the Central/West Asian Site Network for Siberian Cranes and Other Waterbirds established under CMS, East Asian - Australasian Flyway (EAAF) Site Network established under the EAAF Partnership, under the European Union’s Birds Directive and the EMERALD Network under the Convention on the Conservation of European Flora and Fauna, and for shorebirds under the Western Hemisphere Shorebird Reserve Network (WHSRN).' },
    ],
  },
  {
    title: 'Calculating one percent thresholds.',
    description: [
      { p: 'Until WPE4, virtually all estimates given as a single figure or numerical range, used a 1% threshold equal to 1% of the estimate or 1% of the mid-point of the range. In WPE5 the geometric mean has been used instead of arithmetic mean to calculate 1% thresholds, which is usually a smaller value than the arithmetic mean. Using the geometric provides a less biased estimation of the 1% threshold than the arithmetic mean when the population size estimate is available as a maximum and minimum size range. This method of calculating a 1% threshold follows the standard practices in AEWA (AEWA Resolution 3.3, AEWA report on the implementation of single species action plans) and elsewhere such as the European Bird Atlas, Birds in Europe 2 and the CMS Aquatic Warbler Action Plan.' },
      { p: 'For populations with coded range data (up to WPE4) that have been converted into minimum and maximum estimate in WPE5, the geometric mean is not used to generate the 1%. Instead, the 1% is based on the 1% of the maximum estimate. Except estimations when the upper estimate is expressed as >1 million individuals. In such cases, the 1% threshold was set at 20,000 individuals.' },
      { p: 'Changes to the 1% threshold of a population estimate will only be proposed when a change of the 1% threshold equals or exceeds 10%.' }
    ]
  },
  {
    title: 'Rounding of one percent thresholds.',
    description: [
      { p: 'All From CSR5 and WPE5 onwards, four categories of quality assessments are used:' }
    ],
    list: [
      { item: '- 1% thresholds have been rounded according to the following standard:' },
      { item: '1% thresholds between 1 and 10 : rounded to nearest 1' },
      { item: '1% thresholds between 101 and 1,000 : rounded to nearest 10' },
      { item: '1% thresholds over 1,000 : rounded to nearest 100' },

      { itemNumbered: '<span>Expert opinion: </span> Population estimate is based on incomplete survey and monitoring data and population size has been developed employing some expert opinion for extrapolating from this data with more accuracy than a best guess;' },
      { itemNumbered: '<span>Census based: </span> Population estimate is based on almost complete census or statistically adequate sampling.' }
     ]
  },
  {
    title: 'References for population estimates.',
    description: [
      { p: 'In cases where numerous sources have been used to calculate the estimate, all sources are given, and explanation is provided in the Notes.' },
      { p: 'The larger geographical regions most commonly used to describe the ranges of populations in the range description columns are listed below alongside the range states that they usually encompass. This list does not attempt to conform to any other definitions of these regions, and the groupings of states have been defined with no purpose other than to describe the boundaries of waterbird populations. Furthermore, these groupings are intended only as a guideline to the countries in which the population in question may occur. Depending on the species concerned, a minority of countries might be excluded from each region, or one or more additional countries might be added. In many cases, the geographical division of populations is discussed more fully in the source references.' }
    ]
  },
  {
    title: 'Notes.',
    description: [
      { p: 'More information concerning how the population size estimate was derived from the available sources is provided here if necessary.' },
    ]
  },
];

export default estimatesInfo;
