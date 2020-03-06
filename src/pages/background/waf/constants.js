import React from 'react';
import Flyway1Image from './images/map_01.png';
import Flyway2Image from './images/map_02.png';
import Flyway3Image from './images/map_03.png';


import './styles.scss';

const WAFInfo = [
  {
    description: (
      <div className="l-waf-card">
        <div>
          <h2>This website distinguishes between “flyways” and “biogeographic realms”. The demarcation of biogeographic realms (which are divisions of the land masses of the world according to their distinctive floras and faunas) follows WWF.</h2>

          <p>With the additional distinction between the east and west Palearctic realms. The term flyway is used in various contexts. Boere & Stroud defined the broad concept of flyways as: “…the biological systems of migration paths that directly link sites and ecosystems in different countries and continents”. More specifically, they define a flyway as “the entire range of a migratory bird species (or groups of related species or distinct populations of a single species) through which it moves on an annual basis from the breeding grounds to non-breeding areas, including intermediate resting and feeding places as well as the area within which the birds migrate.” This website follows the definition of the nine major waterbird flyways</p>
          </div>
          <div className="image-container">
            <img src={Flyway1Image} alt="Biogeographic Realms of the world" />
            </div>
            <div className="image-container">
            <img src={Flyway2Image} alt="The nine major waterbird flyways of the world" />
          </div>
          <div>
          <p>However, against this simplified generalisation, some flyways are oriented more east-west. For example, in Eurasia, many species which breed in the eastern Palearctic move west to spend the northern hemisphere winter in the Western Palearctic. Similar examples occur where populations migrate between the Nearctic and the Eastern Palearctic or between the Nearctic and the Western Palearctic. Consequently, populations have been assigned to the zone (realm or flyway) where they spend the longer part of their annual cycle. In this respect, the widely used lists of populations in each flyway may differ slightly from those presented here. The approach used for WPE should not be considered as the definitive portrayal of the boundaries of flyways for all purposes. Nonetheless, it has proved to be useful in structuring elements for our analyses.</p>
          <p>Finally, for some analyses in reports, we have implemented a high-level aggregation of populations where either actual or potential multilateral agreements for the conservation of migratory waterbirds are underway and where the finer detail is not needed. Biogeographic realms and flyways were also grouped into major flyway administrative regions, namely: Africa-Eurasia, the Americas and Asia-Pacific (Figure 3).</p>
          </div>
          <div className="image-container">
            <img src={Flyway3Image} alt="The three major flyway administrative regions" />
          </div>

      </div>
    ),
  }
];

export default WAFInfo;
