import React from 'react';

import Image from 'images/background-tab/duckWIWP.png';
import Image2 from 'images/background-tab/milky-stork.png';
import Image3 from 'images/background-tab/aewa-populations.png';

const WIWPInfo = [
  {
    id: 'WIWPInfo',
    description: (
      <div className="l-wiwp-card">
        <h2>What is a waterbird population?</h2>
        <p>
          Ideally, a waterbird biological population can be defined as a distinct assemblage of
          individuals which does not experience significant emigration or immigration. This
          definition can only be fulfilled if the interchange of individuals between populations
          remains at a low level. The degree to which exchange of individuals occurs will determine
          gene flow and hence the justification for recognising subspecies or merely populations. In
          practice, it is impossible to define biological populations for most widely distributed
          waterbird species. Instead, biogeographic units are used for conservation and management
          purposes.
        </p>
        <p>
          The definition of biogeographic population has been refined by the AEWA Technical
          Committee, and as is used for this Portal globally, is as follows:
        </p>
        <p>
          <strong>
            A waterbird biogeographical population is a population of a species or a sub-species
            that is either geographically discrete from other populations at all times of the year,
            or at some times of the year only, or is a specified part of a continuous distribution
            so defined for the purposes of conservation management.
          </strong>
        </p>
        <p>
          So biogeographic populations are rather practical management units than distinct
          biological populations with considerable exchange of individuals although they always
          belong to a single subspecies of the species. Biogeographic populations are usually
          defined by their unique breeding or non-breeding area but may extensively overlap with
          other populations during other stages of its annual cycle.
        </p>
        <div className="img-container">
          <img src={Image} alt="Northern Pintail, by Neil Fifer" />
          <div className="image-text-container">
            <p>
              <strong>Northern Pintail,</strong> by Neil Fifer.
            </p>
            <p className="img-text">
              A globally distributed species with less clearly defined populations.
            </p>
          </div>
        </div>
        <p>
          Given the current information available for waterbirds, it is rarely possible to define
          ideal populations. There is often overlap of populations at some stage of the annual
          cycle, and it is even possible for populations to mix yet maintain independence through
          behavioural isolating mechanisms. Many species have a limited geographical range and can
          be considered as one population, while others have a cosmopolitan distribution making the
          consideration of one population inappropriate for conservation and management purposes.
          For these species, biogeographic units have to be defined taking into consideration all
          aspects of biology and the practicalities of conserving the populations. In these cases it
          is often beneficial to use a particular geographic region for more than one species (e.g.
          East Asia/Australasia, Northwest Europe, Southern Africa).
        </p>
        <div className="img-container">
          <img src={Image2} alt="Milky Stork, by Lim Kim Chye" />
          <div className="image-text-container">
            <p>
              <strong>Milky Stork,</strong> by Lim Kim Chye.
            </p>
            <p className="img-text">
              The Malaysian population of the Milky Stork is a discrete population limited to the
              west coast of Peninsular Malaysia.
            </p>
          </div>
        </div>
        <p>
          To date, the term ‘flyway’ has most commonly been used to describe zones common to many
          species, based on the approximate separation of biogeographic populations - see the page{' '}
          <a href="/background/WAF">What are Flyways?</a> for a more detailed discussion. For this
          site, biogeographic populations have been defined, as far as possible, on the basis of the
          biology of each species, although it has been necessary to present data using traditional
          ‘flyway’ boundaries where more precise information is lacking.
        </p>
        <p>
          For sedentary species it becomes more difficult to apply the definitions suggested for
          populations. It is often possible to demonstrate that the dynamics of almost every smaller
          part of a population is relatively independent of each other. This is especially true for
          sedentary island populations. In such situations, these smaller populations are best
          considered as part of a more extensive meta-population. The alternative is to treat every
          sedentary species as one population which is often equally difficult to justify. In the
          absence of practical guidelines or principles for defining populations of sedentary
          species, decisions have been made according to subspecific divisions (usually following
          the{' '}
          <a
            href="http://datazone.birdlife.org/userfiles/file/Species/Taxonomy/HBW-BirdLife_Checklist_v5_Dec20.zip"
            target="_blank"
            rel="noopener noreferrer"
          >
            Handbook of the Birds of the World and BirdLife International, 2020
          </a>
          ) and with respect to practical implementation of the 1% thresholds. Some anomalies still
          occur in the treatment of sedentary waterbird species in this publication because of
          differences between species in morphological variation and consequent taxonomic treatment.
          For example, the Green-backed Heron Butorides striata is a sedentary species that exhibits
          a high degree of morphological variation over its very wide range. Over 30 subspecies have
          been described, and 23 of these are widely recognised. In this case, estimates (where
          available) have been provided for each distinct subspecies and population in line with
          current taxonomic understanding.
        </p>
        <h3>Summary of different types of biogeographical populations</h3>
        <p>
          Several types of ‘populations’ of waterbirds were recognized by{' '}
          <a
            href="https://www.wetlands.org/publications/atlas-of-anatidae-populations-in-africa-and-western-eurasia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scott & Rose (1996)
          </a>
          :
          <ol>
            <li>the entire population of a monotypic species</li>
            <li>the entire population of a recognized subspecies</li>
            <li>
              a discrete migratory population of a species or subspecies, i.e., a population which
              rarely if ever mixes with other populations of the same species or subspecies
            </li>
            <li>
              that ‘population’ of birds from one hemisphere which spend the non-breeding season in
              a relatively discrete portion of another hemisphere or region. In many cases, these
              ‘populations’ may mix extensively with other populations on the breeding grounds, or
              mix with sedentary populations of the same species during the migration seasons and/or
              on the non-breeding grounds
            </li>
            <li>
              a regional group of sedentary, nomadic or dispersive birds with an apparently rather
              continuous distribution and no major gaps between breeding units sufficient to
              prohibit interchange of individuals during their normal nomadic wanderings and/or
              post-breeding dispersal
            </li>
          </ol>
          These definitions were adopted by the Ramsar CoP9 in the glossary of terms of the
          Resolution XI.8 Annex 2 Strategic Framework and guidelines for the future development of
          the List of Wetlands of International Importance of the Convention on Wetlands (Ramsar,
          Iran, 1971) – 2014 revision.
        </p>
        <p>
          However, these definitions mix concepts of taxonomy (species/sub-species/populations); and
          dispersion (populations separate all the year/part of the year/arbitrary splits of
          continuously distributed waterbirds); see figure below.
        </p>
        <figure>
          <img
            src={Image3}
            alt="The basis for defining different types of biogeographical populations, as per AEWA"
          />
          <figcaption>
            The basis for defining different types of biogeographical populations, as per AEWA
          </figcaption>
        </figure>

        <p>
          An important consequence of the above definition is that one biogeographical population
          may consist of only one subspecies.
        </p>
        <p>
          It has been recognised that biogeographical populations are not static. Their range and
          migratory behaviour may change due to a number of factors. Guidance developed by the{' '}
          <a
            href="https://www.unep-aewa.org/sites/default/files/document/aewa_stc_12_11_guidance_populations_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            AEWA Technical Committee
          </a>{' '}
          provides a basis for reflecting changes in their treatment.
        </p>
        <h2>Population boundaries</h2>
        <p>
          For each species with one or more biogeographic populations presented in this Portal, a
          simple map (polygon) provides the geographic limits of each population. Population
          boundaries are delineated following the range definition of the Convention on Migratory
          Species{' '}
          <a
            href="https://www.cms.int/en/convention-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            (Article I.1.h)
          </a>
          :
        </p>
        <blockquote>
          &quot;Range means all the areas of land or water that a migratory species inhabits, stays
          in temporarily, crosses or overflies at any time on its normal migration route&quot;.
        </blockquote>
        <p>
          As it is also stated in the flyway definition for populations, the range includes the
          breeding, moulting and non-breeding (wintering) areas as well as all other areas passed
          between these. This definition is also applicable to sedentary or dispersive species and
          their populations.
        </p>
        <p>
          The population boundaries encompass areas where the species normally occurs, and vagrants
          are not included into the range of the population. Additionally, areas used during cold or
          dry weather movements are included as those areas are a critical part of the species
          ecology and survival strategy.
        </p>
        <p>
          In the Portal, population boundaries are shown as solid lines. The population limits
          indicate the main range of the population in question and do not necessarily indicate the
          total range of all the individuals in that population. In this way, these maps may differ
          slightly from species distribution maps in other publications.
        </p>
        <p>
          For clarity, the populations of each species are identified by boundary lines in different
          colours. The overlap of boundaries indicate either that there is a considerable degree of
          overlap between different “populations” on their breeding grounds or staging/migration
          areas or uncertainties concerning the separation of the populations.
        </p>
        <p>
          The delineation of biogeographic populations supports conservation and management.
          Therefore, it is more important to capture the main distribution areas rather than
          exceptions.. For a majority of the worlds’ waterbird species, this Portal provides the
          first biogeographic boundary maps. These will be reviewed as new information becomes
          available.
        </p>
        <p>
          Population maps have been produced through an international consultation process with
          experts around the world. Species distribution maps from the{' '}
          <a
            href="https://www.birdlife.org/datazone/species/search"
            target="_blank"
            rel="noopener noreferrer"
          >
            BirdLife International Data Zone
          </a>{' '}
          and{' '}
          <a href="https://www.iucnredlist.org/" target="_blank" rel="noopener noreferrer">
            IUCN Red List
          </a>
          , have been used as a starting point for determining the boundaries of species and
          populations. Local publications provide more detailed distribution information that will
          help distinguish populations. Data has also been used from tracking studies involving
          colour marking of birds, tracking by satellite tracking and geolocators, stable isotope
          studies, and observational data such as{' '}
          <a
            href="https://datazone.birdlife.org/site/search"
            target="_blank"
            rel="noopener noreferrer"
          >
            Important Bird and Biodiversity Areas{' '}
          </a>
          for the species,{' '}
          <a href="http://www.wetlands.org/IWC" target="_blank" rel="noopener noreferrer">
            International Waterbird Census (IWC)
          </a>{' '}
          data and online observation portals.
        </p>
      </div>
    ),
  },
];

export default WIWPInfo;
