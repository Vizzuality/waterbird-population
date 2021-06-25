import React from 'react';

const PopulationEstimatesInfo = [
  {
    title: 'Population Estimates.',
    description: (
      <div>
        <p>All estimates refer to the total number of individuals in the population, including immature birds, and are the most recent estimates available. In most cases, the estimates given in the tables are taken directly from the source references. However, all estimates have been rounded to a maximum of two significant figures, and rough estimates, particularly those given as a broad range, have been rounded as shown here <10,000 to nearest 500; 10,000 - 25,000 nearest 1,000; 25,000 - 100,000 nearest 5,000; 100,000 - 250,000 nearest 10,000.</p>
        <p>Most population estimates included in this Portal have been derived from censuses made in January or from estimations of breeding pairs. Waterbird populations tend to be at their lowest and most stable at these times. Individual numbers usually peak after the breeding season due to first year recruitment and suffer high and variable mortality over the non-breeding season making these times unsuitable for population estimation. To allow for the element of immature or non-breeding birds in each population, estimates given by original sources in the form of number of breeding pairs (or males or females if only these were counted) have been multiplied by three to give the total population size, as suggested by <a href="https://www.researchgate.net/publication/323995944_Meininger_PL_Schekkerman_H_van_Roomen_MWJ_1995_Populatieschattingen_en_1-normen_van_in_Nederland_voorkomende_watervogelsoorten_voorstellen_voor_standaardisatie_Limosa_68_41-48_Population_estimates_and" target="_blank">Meininger et al. (1995)</a>. Estimates given in the form of breeding adults or mature individuals (i.e. twice the number of breeding pairs) have been multiplied by a factor of 1.5. There is no intentional overlap between the populations of a species, and therefore all estimates for the populations of a species can be summed to produce a species total.</p>
        <p>Letter codes applied in earlier editions are replaced by numeric ranges. The range 1,000,000 – 1,000,001 individuals shall be interpreted as being equivalent to the former letter code E, i.e. more than 1 million individuals. Similarly for instances where no upper estimate is given, the lower estimate + 1 is provided e.g. >25,000 is presented as 25,000-25,001. In cases where there is no lower estimate available, the range given is 1 to upper estimate e.g. 1-10,000.</p>
      </div>
    )
  },
  {
    title: 'Start & End Year.',
    description: (
      <div>
        <p>All population size estimates require a start and end year that determines the period when the estimate was calculated. The methods/means by which the estimate is calculated may vary, so the following conventions were used:</p>
      </div>
    )
  },
  {
    description: (
      <ul>
        <li>Same start and end year, if the whole population has been censused in the same year. If the source of information is a boreal winter census (Dec-Feb) and covers two years, add the first year as the start and the next year as end year.</li>
        <li>Start and end year different, and this may due to different reasons. One, if the population has been censused/estimated in different years during a longer period. The start year will be year in which the first part of the population was censused/estimated and the end year will be year in which the last part of the population was censused/estimated. The other situation is when the estimate is based on annual censuses. In this case the start and end years indicate the first and last years of the period (typically five-years).</li>
        <li>If the estimate comes from a publication but it is not clear when the estimate was made, use the year of the publication and subtract 1 year for both start and end year.</li>
        <li>If the estimate comes from a number of publications or from a review of publications but it is not clear when the estimate was made, use the year of the earliest publication – 1 as start year and the year of the last publication – 1 as the end year.</li>
      </ul>
    )
  },
  {
    title: 'Minimum & Maximum.',
    description: (
      <div>
        <p>All populations are given number to represent a minimum and maximum estimate. The system of use of Coded Ranges used in previous editions of the WPE has been discontinued. For some populations the same value has been entered for minimum and maximum, if the population is well-monitored and consistently increasing or decreasing. This may also be applied if a statistically adequate census is undertaken, although even these include errors of estimate. For extinct species, a zero is entered as min and max. A minimum and maximum of -1 indicates that the size of the population is unknown.</p>
      </div>
    )
  },
  {
    title: 'Estimate Quality',
    description: (
      <div>
        <p>From the AEWA Conservation Status Review (CSR) 5 and Waterbird Population Estimates (WPE) 5 onwards, four categories of quality assessments are used:</p>
        <ol>
          <li><span>No estimate: </span> No population estimate is available;</li>
          <li><span>Best guess: </span> Population estimate is only possible with large or uncertain ranges;</li>
          <li><span>Expert opinion: </span> Population estimate is based on incomplete survey and monitoring data and population size has been developed employing some expert opinion for extrapolating from this data with more accuracy than a best guess;</li>
          <li><span>Census based: </span> Population estimate is based on almost complete census or statistically adequate sampling.</li>
        </ol>
      </div>
    )
  },
  {
    title: 'References for population estimates.',
    description: (
      <div>
        <p>In cases where numerous sources have been used to calculate the estimate, all sources are given, and explanation is provided in the Notes.</p>
      </div>
    )
  },
  {
    title: 'Notes.',
    description: (
      <div>
        <p>More information concerning how the population size estimate was derived from the available sources is provided here if necessary.</p>
      </div>
    )
  },
];

export default PopulationEstimatesInfo;
