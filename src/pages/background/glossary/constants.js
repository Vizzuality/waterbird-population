import React from 'react';
import AEWAImage from './images/AEWA.png';
import CMSImage from './images/CMS.png';
import EAAFImage from './images/EAAF.png';
import EUBDImage from './images/EUBD.png';
import WHSRNImage from './images/WHSRN.png';

const glossaryInfo = [
  {
    description: (
      <ul className="l-glossary-card">
        <li>
          <img src={AEWAImage} alt="African-Eurasian Waterbird Agreement" />
          <p><strong>AEWA,</strong><a href="https://www.unep-aewa.org/en"> African-Eurasian Waterbird Agreement.</a></p>
        </li>
        <li>
          <img src={WHSRNImage} alt="Western Hemisphere Shorebird Reserve Network." />
          <p><strong>WHSRN,</strong><a href="https://whsrn.org/"> Western Hemisphere Shorebird Reserve Network.</a></p>
        </li>
        <li>
          <img src={CMSImage} alt="East Asian-Australasian Flyway Partnership" />
          <p><strong>EAAF Partnership,</strong><a href="https://www.eaaflyway.net/"> East Asian-Australasian Flyway Partnership.</a></p>
        </li>
        <li>
          <img src={CMSImage} alt="Convention on Migratory Species" />
          <p><strong>CMS,</strong><a href="https://www.cms.int/newsroom/?title=cop13"> Convention on Migratory Species.</a></p>
        </li>
        <li>
          <img src={AEWAImage} alt="Conservation Status Review, a report made for AEWA" />
          <p><strong>CSR,</strong><a href="https://www.unep-aewa.org/en/document/7th-edition-conservation-status-report-csr7-including-annexes-1"> Conservation Status Review, a report made for AEWA.</a></p>
        </li>
        <li>
          <img src={EAAFImage} alt="East Asian-Australasian Flyway Partnership" />
          <p><strong>EAAF Partnership,</strong><a href="https://www.eaaflyway.net/"> East Asian-Australasian Flyway Partnership.</a></p>
        </li>
        <li>
          <img src={EUBDImage} alt="European Union Birds Directive" />
          <p><strong>EUBD,</strong><a href="https://ec.europa.eu/environment/nature/legislation/birdsdirective/index_en.htm"> European Union Birds Directive.</a></p>
        </li>
      </ul>
    )
  }
];

export default glossaryInfo;
