import React from 'react';
import AEWAImage from '../images/AEWA.png';
import CMSImage from '../images/CMS.png';
import EAAFImage from '../images/EAAF.png';
import EUBDImage from '../images/EUBD.png';
import WHSRNImage from '../images/WHSRN.png';
import RamsarImage from '../images/Ramsar.png';
import CBDImage from '../images/CBD.png';
import CAFFImage from '../images/CAFF.png';

const conservationFrameworkInfo = [
  {
    id: 'conservationFrameworkInfo',
    description: (
      <>
        <p>
          Filters allow users to access information on waterbird population estimates, trends and 1%
          thresholds linked to the Ramsar Convention to support its Criterion 6 and priorities of
          the Ramsar Strategic Plan 2016-2024 (Target 6), the Central Asian Flyway Action Plan of
          the Convention on Migratory Species (and links to The Strategic Plan for Migratory Species
          2015-2023, Goal 3), the AEWA Strategic Plan 2019-2027, the East Asian – Australasian
          Flyway Partnership (EAAFP) Strategic Plan 2019-2028, Western Hemisphere Shorebird Reserve
          Network (WHSRN) Strategic Plan, and others.
        </p>
        <ul className="l-conservation-card">
          <li>
            <img src={AEWAImage} alt="African-Eurasian Waterbird Agreement" />
            <p>
              <strong>AEWA,</strong>
              <a href="https://www.unep-aewa.org/en" target="_blank" rel="noopener noreferrer">
                {' '}
                African-Eurasian Waterbird Agreement.
              </a>
            </p>
          </li>
          <li>
            <img src={WHSRNImage} alt="Western Hemisphere Shorebird Reserve Network." />
            <p>
              <strong>WHSRN,</strong>
              <a href="https://whsrn.org/" target="_blank" rel="noopener noreferrer">
                {' '}
                Western Hemisphere Shorebird Reserve Network.
              </a>
            </p>
          </li>
          <li>
            <img src={CMSImage} alt="East Asian-Australasian Flyway Partnership" />
            <p>
              <strong>EAAF Partnership,</strong>
              <a href="https://www.eaaflyway.net/" target="_blank" rel="noopener noreferrer">
                {' '}
                East Asian-Australasian Flyway Partnership.
              </a>
            </p>
          </li>
          <li>
            <img src={CMSImage} alt="Convention on Migratory Species" />
            <p>
              <strong>CMS,</strong>
              <a
                href="https://www.cms.int/newsroom/?title=cop13"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                Convention on Migratory Species.
              </a>
            </p>
          </li>
          <li>
            <img src={EAAFImage} alt="East Asian-Australasian Flyway Partnership" />
            <p>
              <strong>EAAF Partnership,</strong>
              <a href="https://www.eaaflyway.net/" target="_blank" rel="noopener noreferrer">
                {' '}
                East Asian-Australasian Flyway Partnership.
              </a>
            </p>
          </li>
          <li>
            <img src={EUBDImage} alt="European Union Birds Directive" />
            <p>
              <strong>EUBD,</strong>
              <a
                href="https://ec.europa.eu/environment/nature/legislation/birdsdirective/index_en.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                European Union Birds Directive.
              </a>
            </p>
          </li>
          <li>
            <img src={RamsarImage} alt="Ramsar Convention on Wetlands" />
            <p>
              <strong>Ramsar,</strong>{' '}
              <a href="https://www.ramsar.org" target="_blank" rel="noopener noreferrer">
                Ramsar Convention on Wetlands
              </a>
            </p>
          </li>
          <li>
            <img src={CBDImage} alt="Convention on Biological Diversity" />
            <p>
              <strong>Ramsar,</strong>{' '}
              <a href="https://www.cbd.int" target="_blank" rel="noopener noreferrer">
                Convention on Biological Diversity
              </a>
            </p>
          </li>
          <li>
            <img src={CAFFImage} alt="Conservation of Arctic Flora and Fauna" />
            <p>
              <strong>CAFF,</strong>{' '}
              <a href="https://www.caff.is" target="_blank" rel="noopener noreferrer">
                Conservation of Arctic Flora and Fauna
              </a>
            </p>
          </li>
        </ul>
      </>
    ),
  },
];

export default conservationFrameworkInfo;
