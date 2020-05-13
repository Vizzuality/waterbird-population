import React from 'react';

const FaqInfo = [
  {
    title: 'Do I need to register to use the website?',
    description: (
      <div>
        <p>No, the information on the WPE website is open access and freely available to all parties. Registration is only required for a limited number of invited persons acting as coordinators or editors for a region or taxonomic group. For general users, registration will provide no additional benefits.</p>
      </div>
    )
  },
  {
    title: 'I have registered for the website. Why can’t I log in?',
    description: (
      <div>
        <p>Both username and password are case sensitive. If you continue to have problems logging in, contact Wetlands International staff: wpe@wetlands.org</p>
      </div>
    ),
  },
  {
    title: 'How do I cite information from the WPE website?',
    description: (
      <div>
        <p>Details on how to cite the website are provided at the bottom of the page.</p>
      </div>
    )
  },
  {
    title: 'Can I get a hard copy of WPE editions?',
    description: (
      <div>
        <p>Earlier editions of the WPE are now out of print. All editions of WPE are now only available through this website. You can export information from this site to a pdf by using the print options in the bottom left corner of the search results and population detail screens.</p>
      </div>
    ),
  },
  {
    title: 'What do all these acronyms mean?',
    description: (
      <div>
        <p>Please see our glossary for full descriptions of acronyms and terms.</p>
      </div>
    ),
  },
  {
    title: 'Why can’t I find the species/populations I am looking for.',
    description: (
      <div>
        <ol type="i">Please consider the following:
          <li>We provide information on waterbirds as defined in the section "What are waterbirds?". Under the African-Eurasian Waterbird Agreement we also provide trends and estimates for some seabird populations in later CSR editions. Please ensure you are searching an appropriate publication for your species.</li>
          <li>We follow the species taxonomic definitions set by the BirdLife Taxonomic Working Group (BTWG). Please ensure you are using the names recognised by the BTWG. Please note that earlier editions of WPE may use species or population definitions that are no longer in use.</li>
          <li>The species search field recognises partial string searches for both the BTWG recognised common (English) and scientific name. Try searching for the genus or a part of the species name e.g. “Scoter” or “Larus”.</li>
          <li>The population search field recognises partial string searches. Try searching for a part of the population name.</li>
          <li>Please ensure you do not have other search criteria selected that may be restricting your search.</li>
        </ol>
      </div>
        ),
      },
  {
          title: 'How can I report an error or provide updated information?',
        description: (
      <div>
          <p>Please provide full details, including references to wpe@wetlands.org. We will then submit this information for review to our specialist network. Please note that changes to estimates, trends and 1% thresholds are only published in new editions.</p>
        </div>
        ),
      },
  {
          title: 'Why is there a limit to the number of records I can export in one batch?',
        description: (
      <div>
          <p>Selecting a very large number of populations to export will cause the system to slow down and your download would either crash or take a very long time to complete. We therefore limit the number of records that can be downloaded in a single batch to improve the speed and efficiency of downloads for all users.</p>
        </div>
        ),
      }
    ];

    export default FaqInfo;
