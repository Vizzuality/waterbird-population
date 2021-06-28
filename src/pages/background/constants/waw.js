import React from 'react';
import Image from 'images/background-tab/duck.png';
import Image2 from 'images/background-tab/red-breasted-merganser.jpg';

const WAWInfo = [
  {
    id: 'WAWInfo',
    description: (
      <div className="l-waw-card">
        <div className="intro-container">
          <h2>What are Waterbirds?</h2>
          <img src={Image} className="intro-image" alt="Waterfowl species" />
        </div>
        <p className="text-image">
          The Ramsar Convention defines ‘waterfowl’ as species of birds that are “ecologically
          dependent upon wetlands” and has defined “waterbird” as being synonymous with “waterfowl”
          for the purposes of the application of the Convention.{' '}
        </p>
        <p className="text-image">
          However, in the second edition of Waterfowl Population Estimates, ‘waterfowl’ were defined
          more precisely as all species of the families Gaviidae, Podicipedidae, Pelecanidae,
          Phalacrocoracidae, Anhingidae, Ardeidae, Balaenicipitidae, Scopidae, Ciconiidae,
          Threskiornithidae, Phoenicopteridae, Anhimidae, Anatidae, Pedionomidae, Gruidae, Aramidae,
          Rallidae, Heliornithidae, Eurypygidae, Jacanidae, Rostratulidae, Dromadidae,
          Haematopodidae, Ibidorhynchidae, Recurvirostridae, Burhinidae, Glareolidae, Charadriidae,
          Scolopacidae, Thinocoridae, Laridae, Sternidae and Rynchopidae.{' '}
        </p>
        <p>
          Only a minority of wetland bird populations are excluded by this approach. Conversely, the
          inclusion of whole families resulted in the waterfowl list containing a few non-wetland
          species such as some seabirds and stone curlews. These rather minor anomalies were thought
          to be outweighed by the convenience of a whole-taxon approach to the definition of
          ‘waterfowl’ and, in particular, considering the complications that would arise from
          applying the definition rigidly to every species.
        </p>
        <figure className="image-container">
          <img src={Image2} className="full-width" alt="Red-breasted Merganser, by John Anderson" />
          <figcaption>Red-breasted merganser, by John Anderson</figcaption>
        </figure>
        <p>
          The 5th edition of Waterbird Population Estimates considers the same families of birds as
          were covered in the earlier editions. However, the term ‘waterbird’ implies a broader
          meaning than the strict definition of ‘waterfowl’ given in the second edition, and more in
          keeping with the Ramsar definition of ‘waterfowl’, i.e. birds that are ecologically
          dependent on wetlands. Many participants in the{' '}
          <a
            href="https://www.wetlands.org/knowledge-base/international-waterbird-census/"
            target="_blank"
            rel="noopener noreferrer"
          >
            International Waterbird Census
          </a>
          , coordinated by Wetlands International, already submit counts of wetland birds additional
          to the families listed above, and it has been proposed that future editions of Waterbird
          Population Estimates should include population estimates for these, wherever possible.
        </p>

        <p>
          One of the most logical expansions would be to include additional families of birds
          traditionally regarded as seabirds. Many of the species of ‘waterbirds’ currently included
          in Waterbird Population Estimates series are strictly marine species that would equally
          merit the name ‘seabird’, notably many species of cormorants (Phalacrocoracidae), gulls
          (Laridae) and terns (Sternidae), while many of the ‘seabirds’, currently excluded, might
          equally be termed ‘waterbirds’, as they make extensive use of shallow, inshore waters. Of
          the seabird groups, perhaps only the four families of Procellariiformes (Diomedeidae,
          Procellariidae, Hydrobatidae and Pelecanoididae) do not include any species that can be
          regarded as waterbirds. A majority of species in these families are exclusively pelagic
          away from the breeding sites, rarely straying into inshore waters except when storm
          driven. At least some of the species in the other ‘seabird’ families (Spheniscidae,
          Phaethontidae, Sulidae, Fregatidae, Stercorariidae and Alcidae) make use of shallow,
          inshore waters, and could therefore be considered ‘waterbirds’ appropriate for inclusion
          in Waterbird Population Estimates. It has therefore been proposed that, for the sake of
          consistency, future editions of Waterbird Population Estimates should include at least
          these groups of seabirds where they are covered by a regional conservation framework.
          Based on the{' '}
          <a
            href="https://www.unep-aewa.org/sites/default/files/document/res4_11_amendments_aewa_annexes_final_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            AEWA Resolution 4.11
          </a>{' '}
          to include migratory seabird populations, populations included since the 4th edition of
          the AEWA Conservation Status Review (CSR) are accessible through the Portal.
        </p>
        <p>
          The first five editions of Waterbird Population Estimates were restricted to native
          populations of waterbirds occurring in a natural, wild state, and did not include those
          populations of waterbirds that have been introduced outside their natural range, either
          deliberately or accidentally, by humans. However, it is recognised that some artificially
          introduced populations of waterbirds can have a negative impact on native populations of
          other species. The accidental introduction of the North American Ruddy Duck Oxyura
          jamaicensis into the wild in Europe and the threat which this is now posing to the already
          Globally Threatened White-headed Duck Oxyura leucocephala has been well documented. It has
          therefore been proposed that future editions of Waterbird Population Estimates may include
          established populations of non-native waterbirds, so that their status can be monitored
          more closely. Established populations of non-native species could be defined as those
          populations that have been self-supporting in the wild state for at least 10–15
          generations, to exclude those frequent but unsuccessful breeding attempts by recent
          escapes from captivity. Additionally, resident populations of (re-)introduced populations
          are only recognised if they are recognised as a native species by the official checklist
          of the country.
        </p>
        <p>
          All participants in the International Waterbird Census are encouraged to submit counts of
          non-native waterbirds, and contributors to a future edition of Waterbird Population
          Estimates will be requested to provide estimates for these populations. For such
          populations, however, 1% thresholds will not be published, since the Ramsar Convention has
          indicated (
          <a
            href="https://www.ramsar.org/sites/default/files/documents/library/key_res_vii.11e.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resolution VII 11
          </a>
          ) that such non-native species should not be used as part of a supporting case for
          classification of a wetland of international importance. Similarly, non-native species are
          not subject to the conservation regime under flyway frameworks, such as the{' '}
          <a
            href="https://www.unep-aewa.org/sites/default/files/document/aewa_stc_12_11_guidance_populations_0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            African Eurasian Waterbird Agreement.
          </a>
        </p>
      </div>
    ),
  },
];

export default WAWInfo;
