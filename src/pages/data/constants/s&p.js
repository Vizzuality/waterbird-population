import React from 'react';

const speciesPopulationInfo = [
  {
    title: 'Taxonomy & Nomenclature.',
    description: (
      <div>
        <p>
          The taxonomy and nomenclature applied in the Waterbird Populations Portal follows the latest adopted by <a href="https://datazone.birdlife.org/userfiles/file/Species/Taxonomy/HBW-BirdLife_Checklist_v5_Dec20.zip" target="_blank">Handbook of the Birds of the World and BirdLife International (2020)</a>. This provides detailed taxonomic notes and cross references to other taxonomic sources. Therefore, these are not repeated in our Portal. This taxonomy is also adopted by BirdLife International, the IUCN Red List authority on birds. This decision is driven by practical conservation and data management considerations. These include making it possible to use the data from the WPP in the Red List assessments and also to apply both sources consistently in conservation decision-making including the identification and designation of key sites for waterbirds. Additionally, this taxonomy is followed by the Ramsar Convention, Convention on Migratory Species and various flyway frameworks.
        </p>
      </div>
    ),
  },
  {
    title: 'Populations.',
    description: (
      <div>
        <p>
          The population column contains the name of the subspecies concerned and/or a brief geographical description to separate the population from other populations of the same subspecies (or other populations of a monotypic species). The primary source for treatment of species at subspecific level has been the <a href="https://datazone.birdlife.org/userfiles/file/Species/Taxonomy/HBW-BirdLife_Checklist_v5_Dec20.zip" target="_blank">Handbook of the Birds of the World and BirdLife International (2020)</a>.
        </p>
        <p>
          Populations that have been identified primarily on the basis of their breeding ranges have been identified with the suffix (bre); those identified primarily on the basis of their non-breeding (‘wintering’) ranges with the suffix (non-bre).
        </p>
        <p>
          In case of populations, an agreement, e.g. African Eurasian Waterbird Agreement (AEWA), operates with standard lists of populations and the list can be only changed after the proposal has been adopted by the Meeting Of Parties (MoP). Similarly, Wetlands International provides waterbird population estimates to other flyway instruments (such as the East Asian – Australasian Flyway Partnership and Western Hemisphere Shorebird Reserve Network) and their processes would in the future guide us in splitting or merging populations, otherwise we may have compatibility issues.
        </p>
        <p>
          The division of species into populations should not be regarded as definitive. When a population is defined and an estimate given, we consider the population to be a valid unit for the species concerned. The consequences of this approach will be that populations might be split into smaller geographical units in future editions of Waterbird Population Estimates, but would be less likely to be merged into larger units. For more information on the definition of populations in this Portal, see <a href="/background/WIWP">What is a waterbird population?</a>.
        </p>
      </div>
    ),
  },
  {
    title: 'Breeding & Non-Breeding Range.',
    description: (
      <div>
        <p>
          Two columns define the main breeding range and core non-breeding (‘wintering’ or ‘contranuptial’) range of every recognised population of a species or subspecies. Many migratory species, especially the long-distance migrants, sometimes stray far outside their normal ranges. The occurrence of these vagrants has not been taken into account in the range descriptions, which are intended to indicate where the great bulk of the population occurs during its normal annual cycle. In the case of sedentary species, a single entry in the Breeding range column describes the overall range of the population concerned.
        </p>
        <p>
          It will be noticed that in many cases there is considerable similarity between the breeding ranges or non-breeding ranges of two or more populations of the same species. In some cases, this is because of a genuine overlap in the distribution of the populations. Thus, many populations defined on the basis of their breeding ranges are known to mix extensively with other populations of the same species in their non-breeding (‘wintering’) range, while many populations defined on the basis of their non-breeding ranges are known to overlap extensively with other populations on their breeding grounds. In many other cases, however, the main reason for an apparent similarity in ranges during the non-breeding season is uncertainty as to the limits of the non-breeding range of a particular population within the non-breeding range of the species or subspecies as a whole. In these cases, the non-breeding range is given only in very general terms, and will need refining as further information becomes available.
        </p>
        <p>
          The larger geographical regions most commonly used to describe the ranges of populations in the range description columns are listed below alongside the range states that they usually encompass. This list does not attempt to conform to any other definitions of these regions, and the groupings of states have been defined with no purpose other than to describe the boundaries of waterbird populations. Furthermore, these groupings are intended only as a guideline to the countries in which the population in question may occur. Depending on the species concerned, a minority of countries might be excluded from each region, or one or more additional countries might be added. In many cases, the geographical division of populations is discussed more fully in the source references.
        </p>
      </div>
    ),
  },
  {
    description: (
      <ul>
        <li>
          <strong>North North Africa - </strong>Algeria, Egypt, Libya, Morocco, Tunisia.
        </li>
        <li>
          <strong>North-west Africa - </strong>Morocco, Algeria and Tunisia.
        </li>
        <li>
          <strong>West Africa - </strong>Benin, Burkina Faso, Cameroon, Cape Verde, Chad, Côte
          d&apos;Ivoire, the Gambia, Ghana, Guinea, Guinea-Bissau, Liberia, Mali, Mauritania, Niger,
          Nigeria, Senegal, Sierra Leone, Togo.
        </li>
        <li>
          <strong>North-east Africa - </strong>Djibouti, Egypt, Eritrea, Ethiopia, Somalia, South
          Sudan, Sudan.
        </li>
        <li>
          <strong>Eastern Africa - </strong>Burundi, Djibouti, Eritrea, Ethiopia, Kenya, Rwanda,
          Somalia, South Sudan, Sudan, Uganda, the United Republic of Tanzania.
        </li>
        <li>
          <strong>Central Africa - </strong>Cameroon, Central African Republic, Congo, Democratic
          Republic of the Congo, Equatorial Guinea, Gabon, Sao Tome and Principe.
        </li>
        <li>
          <strong>Sub-Saharan Africa - </strong>All African states south of the Sahara.
        </li>
        <li>
          <strong>Tropical Africa - </strong>Sub-Saharan Africa excluding Lesotho, Namibia, South
          Africa and Swaziland.
        </li>
        <li>
          <strong>Southern Africa - </strong>Angola, Botswana, Lesotho, Malawi, Mozambique, Namibia,
          South Africa, Swaziland, Zambia, Zimbabwe.
        </li>
        <li>
          <strong>North Atlantic - </strong>Faroes, Greenland, Iceland, Ireland, Norway, the
          north-west coast of the Russian Federation, Svalbard, the United Kingdom of Great Britain
          and Northern Ireland.
        </li>
        <li>
          <strong>East Atlantic - </strong>Atlantic seaboard of Europe and North Africa from
          northern Norway to Morocco.
        </li>
        <li>
          <strong>North-west Europe - </strong>Belgium, Denmark, Finland, France, Germany, Iceland,
          Ireland, Luxembourg, the Netherlands, Norway, Sweden, the United Kingdom of Great Britain
          and Northern Ireland.
        </li>
        <li>
          <strong>North-east Europe - </strong>The northern part of the Russian Federation west of
          the Urals.
        </li>
        <li>
          <strong>North Europe - </strong>North-west Europe and North-east Europe, as defined above.
        </li>
        <li>
          <strong>Western Europe - </strong>North-west Europe with Portugal and Spain.
        </li>
        <li>
          <strong>Central Europe - </strong>Austria, the Czech Republic, Estonia, Germany, Hungary,
          Latvia, Liechtenstein, Lithuania, Poland, the Russian Federation around the Gulf of
          Finland and Kaliningrad, Slovakia, Switzerland.
        </li>
        <li>
          <strong>Eastern Europe - </strong>Belarus, the Russian Federation west of the Urals,
          Ukraine.
        </li>
        <li>
          <strong>Western Siberia - </strong>The Russian Federation east of the Urals to the Yenisey
          River and south to the Kazakhstan border.
        </li>
        <li>
          <strong>Central Siberia - </strong>The Russian Federation from the Yenisey River to the
          eastern boundary of the Taimyr Peninsula and south to the Altai Mountains.
        </li>
        <li>
          <strong>West Mediterranean - </strong>Algeria, France, Italy, Malta, Monaco, Morocco,
          Portugal, San Marino, Spain, Tunisia.
        </li>
        <li>
          <strong>East Mediterranean - </strong>Albania, Bosnia and Herzegovina, Croatia, Cyprus,
          Egypt, Greece, Israel, Lebanon, Libya, Montenegro, Serbia, Slovenia, the Syrian Arab
          Republic, The Former Yugoslav Republic of Macedonia, Turkey.
        </li>
        <li>
          <strong>South-west Europe - </strong>Mediterranean France, Italy, Malta, Monaco, Portugal,
          San Marino, Spain.
        </li>
        <li>
          <strong>South-east Europe - </strong>Albania, Armenia, Bosnia & Herzegovina, Bulgaria,
          Croatia, Cyprus, Georgia, Greece, Republic of Moldova, Montenegro, Romania, Serbia,
          Slovenia, The Former Yugoslav Republic of Macedonia and Tukey.
        </li>
        <li>
          <strong>South Europe - </strong>South-west Europe and South-east Europe, as defined above.
        </li>
        <li>
          <strong>Black Sea - </strong>Armenia, Bulgaria, Georgia, Republic of Moldova, Romania, the
          Russian Federation, Turkey, Ukraine.
        </li>
        <li>
          <strong>Caspian - </strong>Azerbaijan, Islamic Republic of Iran, Kazakhstan, Russian
          Federation,Turkmenistan, Uzbekistan.
        </li>
        <li>
          <strong>Gulf - </strong>The Persian Gulf, Gulf of Oman and Arabian Sea west to the Gulf of
          Aden.
        </li>
        <li>
          <strong>South-west Asia - </strong>Bahrain, Iraq, Islamic Republic of Iran, Israel,
          Jordan, Kazakhstan, Kuwait, Lebanon, Oman, Qatar, Saudi Arabia, the Syrian Arab Republic,
          eastern Turkey, Turkmenistan, the United Arab Emirates, Uzbekistan, Yemen.
        </li>
        <li>
          <strong>Western Asia - </strong>Western parts of the Russian Federation east of the Urals
          and the Caspian countries.
        </li>
        <li>
          <strong>Central Asia - </strong>Afghanistan, Kazakhstan, Kyrgyzstan, Tajikistan,
          Turkmenistan, Uzbekistan
        </li>
        <li>
          <strong>Western Palearctic - </strong>As defined in Handbook of the Birds of Europe, the
          Middle East and North Africa (Cramp & Simmons 1977).
        </li>
        <li>
          <strong>Indian Ocean - </strong>Comoros, Madagascar, Mauritius, Seychelles.
        </li>
        <li>
          <strong>South Asia - </strong>Bangladesh, Bhutan, India, Maldives, Myanmar, Nepal,
          Pakistan, Sri Lanka.
        </li>
        <li>
          <strong>Eastern Asia - </strong>China (Mainland and Taiwan Island), Democratic People’s
          Republic of Korea, Japan, Mongolia, Republic of Korea, Russian Federation from the eastern
          edge of the Taimyr to the Sea of Okhotsk and the Bering Sea.
        </li>
        <li>
          <strong>South-east Asia - </strong>Brunei Darussalam, Cambodia, Indonesia, Lao People’s
          Democratic Republic, Malaysia, Myanmar, the Philippines, Singapore, Thailand, Timor Leste,
          Vietnam.
        </li>
        <li>
          <strong>Australasia - </strong>Australia, New Zealand, New Guinea and outlying islands,
          Solomon Islands.
        </li>
        <li>
          <strong>Oceania - </strong>Australasia (as defined above) and Pacific island states and
          dependencies including Hawaii.
        </li>
        <li>
          <strong>North America - </strong>Canada, Greenland, Mexico, United States of America.
        </li>
        <li>
          <strong>Central America - </strong>Belize, Costa Rica, El Salvador, Guatemala, Honduras,
          Nicaragua, Panama.
        </li>
        <li>
          <strong>South America - </strong>All states of the South American continent,
          Falklands/Malvinas, Netherlands Antilles, Trinidad and Tobago.
        </li>
        <li>
          <strong>Caribbean - </strong>Caribbean island states and dependencies (excluding
          Netherlands Antilles and Trinidad and Tobago).
        </li>
        <li>
          <strong>NW South America - </strong>Bolivia, north-western Brazil, Colombia, Ecuador,
          Peru, Venezuela.
        </li>
        <li>
          <strong>NE South America - </strong>North-eastern Brazil, French Guiana, Guyana, Suriname,
          Venezuela.
        </li>
        <li>
          <strong>Southern South America - </strong>Argentina, southern Brazil, Chile, Paraguay,
          Uruguay.
        </li>
        <li>
          <strong>Neotropics - </strong>South American states, Caribbean island states and
          dependencies, Central American states.
        </li>
      </ul>
    ),
  },
];

export default speciesPopulationInfo;
