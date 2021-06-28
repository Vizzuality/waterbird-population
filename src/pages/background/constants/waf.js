import React from 'react';
import Flyway1Image from '../images/map_01.png';
import Flyway2Image from '../images/map_02.png';
import Flyway3Image from '../images/map_03.png';

const WAFInfo = [
  {
    id: 'WAFInfo',
    description: (
      <div className="l-waf-card">
        <div>
          <h2>What are Flyways</h2>
          <p>
            We adopt the definition of the broad concept of flyways by{' '}
            <a
              href="https://hub.jncc.gov.uk/assets/08cfb4da-4c5a-4bef-b45d-8f2f87dc8070"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boere & Stroud (2006)
            </a>{' '}
            as:{' '}
            <q>
              …the biological systems of migration paths that directly link sites and ecosystems in
              different countries and continents
            </q>
            , and more specifically:
          </p>
          <blockquote>
            A flyway is the entire range of a migratory bird species (or groups of related species
            or distinct populations of a single species) through which /it moves on an annual basis
            from the breeding grounds to non-breeding areas, including intermediate resting and
            feeding places as well as the area within which the birds migrate.
          </blockquote>
          <h3 id="majorflyways">Major waterbird flyways</h3>
          <p>
            This Portal follows the definition of the nine major waterbird flyways (Figure 1), based
            on the definition of flyways for shorebirds (some of the longest distance migrants)
            developed by the International Wader Study Group with the addition of the Central
            Pacific Flyway that is important for a limited number of migratory populations of
            waterbirds.
          </p>
          <div className="image-container">
            <img src={Flyway2Image} alt="The nine major waterbird flyways of the world" />
            <figcaption>1. The nine major waterbird flyways of the world</figcaption>
          </div>
          <h3 id="realms">Biogeographic realms</h3>
          <p>
            The Portal also distinguishes between “flyway regions” and “biogeographic realms”. The
            demarcation of biogeographic realms (which are divisions of the land masses of the world
            according to their distinctive floras and faunas) follows WWF (Figure 2) with the
            additional distinction between the east and west Palearctic realms. A population is
            assigned to a flyway if the majority of the population performs regular latitudinal
            migrations stretching through two or more biogeographic realms, a classification which
            works well for a majority of waterbirds that migrate in the Americas, Asia-Pacific and
            Africa-Eurasia regions.
          </p>
          <div className="image-container">
            <img src={Flyway1Image} alt="Biogeographic Realms of the world" />
            <figcaption>2. Biogeographic Realms of the world</figcaption>
          </div>
          <p>
            Against this simplified generalisation, some flyways are oriented more east-west. For
            example, in Eurasia, many species which breed in the eastern Palearctic move west to
            spend the northern winter in the Western Palearctic. Similar examples occur where
            populations migrate between the Nearctic and the Eastern Palearctic or between the
            Nearctic and the Western Palearctic. Consequently, populations have been assigned to the
            zone (realm or flyway) where they spend the longer part of their annual cycle. In this
            respect, the widely used lists of populations in each flyway may differ slightly from
            those presented here. The approach used for WPP should not be considered as the
            definitive portrayal of the boundaries of flyways for all purposes. Nonetheless, it has
            proved to be useful in structuring elements for our analyses.
          </p>
          <h3 id="flywayadminregions">Flyway administrative regions</h3>
          <p>
            Finally, for some analyses in reports, we have implemented a high-level aggregation of
            populations where either actual or potential multilateral agreements for the
            conservation of migratory waterbirds are underway (“political flyways”). Biogeographic
            realms and flyways were also grouped into major flyway administrative regions, namely:
            Africa-Eurasia, the Americas and Asia-Pacific (Figure 3).
          </p>
          <div className="image-container">
            <img src={Flyway3Image} alt="The three major flyway administrative regions" />
            <figcaption>3. The three major flyway administrative regions</figcaption>
          </div>
          <h3 id="ramsarregions">Ramsar regions</h3>
          <p>The Ramsar Convention’s latest system of regionalization for technical and administrative purposes and as followed in the Portal : Africa, Asia, Europe, Latin America and the Caribbean (formerly Neotropics), North America (Canada, Mexico, and the United States) and Oceania. Regionalization is a significant factor in the operation of the Convention, in terms of the structure of the Standing Committee, the organization of Secretariat staff and duties, and the ways in which Contracting Parties cooperate through regional representation and meetings.
          </p>
        </div>
      </div>
    ),
  },
];

export default WAFInfo;
