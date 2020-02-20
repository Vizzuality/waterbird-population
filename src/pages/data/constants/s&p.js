import React from 'react';

export const speciesPopulationInfo = [
  {
    title: 'Taxonomy & Nomenclature.',
    description: (
      <div>
        <p>The taxonomy and nomenclature applied in the Waterbird Population Estimates online application follows the one adopted by BirdLife International, the IUCN Red List authority on birds. This decision is driven by practical conservation and data management considerations. These include making it possible to use the data from the Waterbird Population Estimates in the Red List assessments and also to apply both sources consistently in conservation decision-making including the identification and designation of key sites for waterbirds. The BirdLife Checklist (http://www.birdlife.org/datazone/info/taxonomy) provides detailed taxonomic notes and cross references to other taxonomic sources. Therefore, these are not repeated in this database.</p>
      </div>
    )
  },
  {
    title: 'Populations.',
    description: (
      <div>
        <p>The population column contains the name of the subspecies concerned and/or a brief geographical description to separate the population from other populations of the same subspecies (or other populations of a monotypic species). The primary source for treatment of species at subspecific level has been the Handbook of the Birds of the World (del Hoyo et al. 1992, 1996). However, the treatment of the grebes follows O’Donnell & Fjeldså 1995, and the herons follow Hafner et al. 2003 (see above). Some additional subspecies that are recognised by other sources but not listed in the Handbook of the Birds of the World have been included in brackets, as have newly recognised subspecies. Subspecies that are considered by most modern authorities to be invalid are omitted.</p>
        <p>Populations that have been identified primarily on the basis of their breeding ranges have been identified with the suffix (bre); those identified primarily on the basis of their non-breeding (‘wintering’) ranges with the suffix (non-bre).</p>
        <p>In case of populations, an agreement (e.g. AEWA) operates with standard lists of populations and the list can be only changed after the proposal has been adopted by the MOP. Similarly, Wetlands International provides waterbird population estimates to other flyway instruments (such as the East Asian – Australasian Flyway Partnership and Western Hemisphere Shorebird Reserve Network) and their processes would in the future guide us in splitting or merging populations otherwise we may have compatibility issues.</p>
        <p>The division of species into populations should not be regarded as definitive. When a population is defined and an estimate given, we consider the population to be a valid unit for the species concerned. The consequences of this approach will be that populations might be split into smaller geographical units in future editions of Waterbird Population Estimates, but would be less likely to be merged into larger units. For waterbird populations in the African-Eurasian region, maps that define flyways or other biogeographic populations are available in the <a href="http://dev.unep-wcmc.org/csn/default.html#state=home">Critical Site Network Tool</a>. It is expected that development of a global Critical Site Network Tool will allow for maps for all waterbird populations worldwide to be available online. For more information on the definition of populations in this website, see <a href="http://wpe.wetlands.org/Iwhatrwb">"What is a waterbird population?"</a></p>
      </div>
    )
  },
  {
    title: 'Breeding & Non-Breeding Range.',
    description: (
      <div>
        <p>Two columns define the main breeding range and core non-breeding (‘wintering’ or ‘contranuptial’) range of every recognised population of a species or subspecies. Many migratory species, especially the long-distance migrants, sometimes stray far outside their normal ranges. The occurrence of these vagrants has not been taken into account in the range descriptions, which are intended to indicate where the great bulk of the population occurs during its normal annual cycle. In the case of sedentary species, a single entry in the Breeding range column describes the overall range of the population concerned.</p>
        <p>It will be noticed that in many cases there is considerable similarity between the breeding ranges or non-breeding ranges of two or more populations of the same species. In some cases, this is because of a genuine overlap in the distribution of the populations. Thus, many populations defined on the basis of their breeding ranges are known to mix extensively with other populations of the same species in their non-breeding (‘wintering’) range, while many populations defined on the basis of their non-breeding ranges are known to overlap extensively with other populations on their breeding grounds. In many other cases, however, the main reason for an apparent similarity in ranges during the non-breeding season is uncertainty as to the limits of the non-breeding range of a particular population within the non-breeding range of the species or subspecies as a whole. In these cases, the non-breeding range is given only in very general terms, and will need refining as further information becomes available.</p>
        <p>The larger geographical regions most commonly used to describe the ranges of populations in the range description columns are listed below alongside the range states that they usually encompass. This list does not attempt to conform to any other definitions of these regions, and the groupings of states have been defined with no purpose other than to describe the boundaries of waterbird populations. Furthermore, these groupings are intended only as a guideline to the countries in which the population in question may occur. Depending on the species concerned, a minority of countries might be excluded from each region, or one or more additional countries might be added. In many cases, the geographical division of populations is discussed more fully in the source references.</p>
      </div>
    )
  },
];

export const speciesPopulationLocations = [
  {
    location: 'North North Africa ',
    countries: 'Algeria, Egypt, Libya, Morocco, Tunisia.'
  },
  {
    location: 'North-west Africa ',
    countries: 'Morocco, Algeria and Tunisia.'
  },
  {
    location: 'West Africa ',
    countries: "Benin, Burkina Faso, Cameroon, Cape Verde, Chad, Côte d'Ivoire, the Gambia, Ghana, Guinea, Guinea-Bissau, Liberia, Mali, Mauritania, Niger, Nigeria, Senegal, Sierra Leone, Togo."
  },
  {
    location: 'North-east Africa ',
    countries: 'Djibouti, Egypt, Eritrea, Ethiopia, Somalia, South Sudan, Sudan.'
  },
  {
    location: 'Eastern Africa ',
    countries: 'Burundi, Djibouti, Eritrea, Ethiopia, Kenya, Rwanda, Somalia, South Sudan, Sudan, Uganda, the United Republic of Tanzania.'
  },
  {
    location: 'Central Africa ',
    countries: 'Cameroon, Central African Republic, Congo, Democratic Republic of the Congo, Equatorial Guinea, Gabon, Sao Tome and Principe.'
  },
  {
    location: 'Sub-Saharan Africa ',
    countries: 'All African states south of the Sahara.'
  },
  {
    location: 'Tropical Africa ',
    countries: 'Sub-Saharan Africa excluding Lesotho, Namibia, South Africa and Swaziland.'
  },
  {
    location: 'Southern Africa ',
    countries: 'Angola, Botswana, Lesotho, Malawi, Mozambique, Namibia, South Africa, Swaziland, Zambia, Zimbabwe.'
  },
  {
    location: 'North Atlantic ',
    countries: 'Faroes, Greenland, Iceland, Ireland, Norway, the north-west coast of the Russian Federation, Svalbard, the United Kingdom of Great Britain and Northern Ireland.'
  },
  {
    location: 'East Atlantic ',
    countries: 'Atlantic seaboard of Europe and North Africa from northern Norway to Morocco.'
  },
  {
    location: 'North-west Europe ',
    countries: 'Belgium, Denmark, Finland, France, Germany, Iceland, Ireland, Luxembourg, the Netherlands, Norway, Sweden, the United Kingdom of Great Britain and Northern Ireland.'
  },
  {
    location: 'North-east Europe ',
    countries: 'The northern part of the Russian Federation west of the Urals.'
  },
  {
    location: 'North Europe ',
    countries: 'North-west Europe and North-east Europe, as defined above.'
  },
  {
    location: 'Western Europe ',
    countries: 'North-west Europe with Portugal and Spain.'
  },
  {
    location: 'Central Europe ',
    countries: 'Austria, the Czech Republic, Estonia, Germany, Hungary, Latvia, Liechtenstein, Lithuania, Poland, the Russian Federation around the Gulf of Finland and Kaliningrad, Slovakia, Switzerland.'
  },
  {
    location: 'Eastern Europe ',
    countries: 'Belarus, the Russian Federation west of the Urals, Ukraine.'
  },
  {
    location: 'Western Siberia ',
    countries: 'The Russian Federation east of the Urals to the Yenisey River and south to the Kazakhstan border.'
  },
  {
    location: 'Central Siberia ',
    countries: 'The Russian Federation from the Yenisey River to the eastern boundary of the Taimyr Peninsula and south to the Altai Mountains.'
  },
  {
    location: 'West Mediterranean ',
    countries: 'Algeria, France, Italy, Malta, Monaco, Morocco, Portugal, San Marino, Spain, Tunisia.'
  },
  {
    location: 'East Mediterranean ',
    countries: 'Albania, Bosnia and Herzegovina, Croatia, Cyprus, Egypt, Greece, Israel, Lebanon, Libya, Montenegro, Serbia, Slovenia, the Syrian Arab Republic, The Former Yugoslav Republic of Macedonia, Turkey.'
  },
  {
    location: 'South-west Europe ',
    countries: 'Mediterranean France, Italy, Malta, Monaco, Portugal, San Marino, Spain.'
  },
  {
    location: 'South-east Europe ',
    countries: 'Albania, Armenia, Bosnia & Herzegovina, Bulgaria, Croatia, Cyprus, Georgia, Greece, Republic of Moldova, Montenegro, Romania, Serbia, Slovenia, The Former Yugoslav Republic of Macedonia and Tukey.'
  },
  {
    location: 'South Europe ',
    countries: 'South-west Europe and South-east Europe, as defined above.'
  },
  {
    location: 'Black Sea ',
    countries: 'Armenia, Bulgaria, Georgia, Republic of Moldova, Romania, the Russian Federation, Turkey, Ukraine.'
  },
  {
    location: 'Caspian ',
    countries: 'Azerbaijan, Islamic Republic of Iran, Kazakhstan, Russian Federation,Turkmenistan, Uzbekistan.'
  },
  {
    location: 'Gulf ',
    countries: 'The Persian Gulf, Gulf of Oman and Arabian Sea west to the Gulf of Aden.'
  },
  {
    location: 'South-west Asia ',
    countries: 'Bahrain, Iraq, Islamic Republic of Iran, Israel, Jordan, Kazakhstan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, the Syrian Arab Republic, eastern Turkey, Turkmenistan, the United Arab Emirates, Uzbekistan, Yemen.'
  },
  {
    location: 'Western Asia ',
    countries: 'Western parts of the Russian Federation east of the Urals and the Caspian countries.'
  },
  {
    location: 'Central Asia ',
    countries: 'Afghanistan, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, Uzbekistan'
  },
  {
    location: 'Western Palearctic ',
    countries: 'As defined in Handbook of the Birds of Europe, the Middle East and North Africa (Cramp & Simmons 1977).'
  },
  {
    location: 'Indian Ocean ',
    countries: 'Comoros, Madagascar, Mauritius, Seychelles.'
  },
  {
    location: 'South Asia ',
    countries: 'Bangladesh, Bhutan, India, Maldives, Myanmar, Nepal, Pakistan, Sri Lanka.'
  },
  {
    location: 'Eastern Asia ',
    countries: 'China (Mainland and Taiwan Island), Democratic People’s Republic of Korea, Japan, Mongolia, Republic of Korea, Russian Federation from the eastern edge of the Taimyr to the Sea of Okhotsk and the Bering Sea.'
  },
  {
    location: 'South-east Asia ',
    countries: 'Brunei Darussalam, Cambodia, Indonesia, Lao People’s Democratic Republic, Malaysia, Myanmar, the Philippines, Singapore, Thailand, Timor Leste, Vietnam.'
  },
  {
    location: 'Australasia ',
    countries: 'Australia, New Zealand, New Guinea and outlying islands, Solomon Islands.'
  },
  {
    location: 'Oceania ',
    countries: 'Australasia (as defined above) and Pacific island states and dependencies including Hawaii.'
  },
  {
    location: 'North America ',
    countries: 'Canada, Greenland, Mexico, United States of America.'
  },
  {
    location: 'Central America ',
    countries: 'Belize, Costa Rica, El Salvador, Guatemala, Honduras, Nicaragua, Panama.'
  },
  {
    location: 'South America ',
    countries: 'All states of the South American continent, Falklands/Malvinas, Netherlands Antilles, Trinidad and Tobago.'
  },
  {
    location: 'Caribbean ',
    countries: 'Caribbean island states and dependencies (excluding Netherlands Antilles and Trinidad and Tobago).'
  },
  {
    location: 'NW South America ',
    countries: 'Bolivia, north-western Brazil, Colombia, Ecuador, Peru, Venezuela.'
  },
  {
    location: 'NE South America ',
    countries: 'North-eastern Brazil, French Guiana, Guyana, Suriname, Venezuela.'
  },
  {
    location: 'Southern South America ',
    countries: 'Argentina, southern Brazil, Chile, Paraguay, Uruguay.'
  },
  {
    location: 'Neotropics ',
    countries: 'South American states, Caribbean island states and dependencies, Central American states.'
  }
];
