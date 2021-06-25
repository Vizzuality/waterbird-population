import React from 'react';

const ThresholdInfo = [
  {
    title: '1% Thresholds for use in site designation and conservation.',
    description: (
      <div>
        <p><span>1% and the Ramsar Convention -</span>A 1% threshold is used to inform the designation of Ramsar sites under Ramsar Criterion 6. This criterion states: “A wetland should be considered internationally important if it regularly supports 1% of the individuals in a biogeographic population of one species or subspecies of waterbird.” Additionally, Ramsar Criterion 5 states:<q>A wetland should be considered internationally important if it regularly supports 20,000 or more waterbirds.</q></p>
        <p>Note that until WPE4, for all populations of 2,000,000 or more individuals, the 1% threshold was set at 20,000, as all sites which regularly hold 20,000 or more waterbirds of any species qualify as wetlands of international importance under Ramsar Criterion 5. This cap has been removed in WPE5, to make a clear distinction between the 1% threshold (Ramsar Criterion 6) and the 20,000 threshold (Ramsar Criterion 5).</p>
        <p><span>Other applications of the 1% criterion -</span>Besides the Ramsar Convention, the 1% level is also applied for identification of sites of international importance for waterbirds by the <a href="https://www.unep-aewa.org/sites/default/files/document/aewa_tc15_17_preliminary_proposal_inventory_framework_internationally_and_nationally_important_sites_en.pdf" target="_blank">AEWA Action Plan</a>, the <a href="http://www.cms.int/species/siberian_crane/wcasn.htm" target="_blank">Central/West Asian Site Network</a> for Siberian Cranes and Other Waterbirds established under CMS, <a href="http://www.eaaflyway.net/" target="_blank">East Asian - Australasian Flyway (EAAF) Site Network</a> established under the EAAF Partnership, under the European Union’s Birds Directive and the <a href="http://www.coe.int/t/dg4/cultureheritage/nature/EcoNetworks/Emeraldnetwork_en.asp" target="_blank">EMERALD Network</a> under the Convention on the Conservation of European Flora and Fauna, and for shorebirds under the <a href="http://www.whsrn.org/" target="_blank">Western Hemisphere Shorebird Reserve Network</a> (WHSRN).</p>
      </div>
    ),
  },
  {
    title: 'Calculating one percent thresholds.',
    description: (
      <div>
        <p>Until WPE4, virtually all estimates given as a single figure or numerical range, used a 1% threshold equal to 1% of the estimate or 1% of the mid-point of the range. In WPE5 the geometric mean has been used instead of arithmetic mean to calculate 1% thresholds, which is usually a smaller value than the arithmetic mean. Using the geometric provides a less biased estimation of the 1% threshold than the arithmetic mean when the population size estimate is available as a maximum and minimum size range. This method of calculating a 1% threshold follows the standard practices in AEWA (<a href="http://www.unep-aewa.org/sites/default/files/document/res3_3_guidelines_criteria_0.pdf" target="_blank">Resolution 3.3</a> and reports on the implementation of single species action plans) and elsewhere such as the <a href="https://www.ebba2.info/" target="_blank"> European Bird Atlas</a> and the <a href="https://www.cms.int/sites/default/files/document/inf_doc_issap.pdf" target="_blank">CMS Aquatic Warbler Action Plan</a>.</p>
        <p>For populations with coded range data (up to WPE4) that have been converted into minimum and maximum estimate in WPE5, the geometric mean is not used to generate the 1%. Instead, the 1% is based on the 1% of the maximum estimate. Except estimations when the upper estimate is expressed as >1 million individuals. In such cases, the 1% threshold is set at 20,000 individuals.</p>
        <p>Changes to the 1% threshold of a population estimate will only be proposed when a change of the 1% threshold equals or exceeds 20% in line with the <a href="https://www.researchgate.net/profile/David-Stroud-2/publication/296331451_Estimating_international_waterbird_populations_use_of_Criterion_3c_Proceedings_of_Ramsar_CoP_6_1996/links/56d45b8d08aefd177b0f4c6e/Estimating-international-waterbird-populations-use-of-Criterion-3c-Proceedings-of-Ramsar-CoP-6-1996.pdf" target="_blank">Ramsar Convention</a>.</p>
      </div>
    )
  },
  {
    title: 'Rounding of one percent thresholds.',
    description: (
      <div>
        <p>1% thresholds have been rounded according to the following standard:</p>
        <ul>
          <li>- 1% thresholds between 1 and 10 : rounded to nearest 1</li>
          <li>- 1% thresholds between 11 and 100 : rounded to nearest 5</li>
          <li>- 1% thresholds between 101 and 1,000 : rounded to nearest 10</li>
          <li>- 1% thresholds over 1,000 : rounded to nearest 100</li>
        </ul>
      </div>
    ),
  }
];

export default ThresholdInfo;
