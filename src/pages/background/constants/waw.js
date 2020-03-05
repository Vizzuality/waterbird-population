import React from 'react';
import Image from 'images/background-tab/duck.png';

const WAWInfo = [
  {
    intro: (
      <div className="card-hero">
        <h2>The Ramsar Convention defines ‘waterfowl’ as species of birds that are “ecologically dependent upon wetlands” and has defined “waterbird” as being synonymous with “waterfowl” for the purposes of the application of the Convention.</h2>
        <img src={Image} alt="Waterfowl specie" />
      </div>
    ),
    description: (
      <div className="card-description">
        <p>The 3rd, 4th and 5th editions of Waterbird Population Estimates considers the same families of birds as were covered in the earlier editions. However, the term ‘waterbird’ implies a broader meaning than the strict definition of ‘waterfowl’ given in the second edition, and more in keeping with the Ramsar definition of ‘waterfowl’, i.e. birds that are ecologically dependent on wetlands. Many participants in the International Waterbird Census, coordinated by Wetlands International, already submit counts of wetland birds additional to the families listed above, and it has been proposed that future editions of Waterbird Population Estimates should include population estimates for these, wherever possible.</p>
        <p>One of the most logical expansions would be to include additional families of birds traditionally regarded as seabirds. Many of the species of ‘waterbirds’ currently included in Waterbird Population Estimates series are strictly marine species that would equally merit the name ‘seabird’, notably many species of cormorants (Phalacrocoracidae), gulls (Laridae) and terns (Sternidae), while many of the ‘seabirds’, currently excluded, might equally be termed ‘waterbirds’, as they make extensive use of shallow, inshore waters. Of the seabird groups, perhaps only the four families of Procellariiformes (Diomedeidae, Procellariidae, Hydrobatidae and Pelecanoididae) do not include any species that can be regarded as waterbirds. A majority of species in these families are exclusively pelagic away from the breeding sites, rarely straying into inshore waters except when storm driven. At least some of the species in the other ‘seabird’ families (Spheniscidae, Phaethontidae, Sulidae, Fregatidae, Stercorariidae and Alcidae) make use of shallow, inshore waters, and could therefore be considered ‘waterbirds’ appropriate for inclusion in Waterbird Population Estimates. It has therefore been proposed that, for the sake of consistency, future editions of Waterbird Population Estimates should include at least these groups of seabirds. A proposal was also made in the 4th edition of the AEWA Conservation Status Review to include migratory seabird populations, and these populations have since been included in subsequent publications of the CSR.</p>
      </div>
    )
  }
];

export default WAWInfo;


