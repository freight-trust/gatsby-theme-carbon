/**
 *   SPDX-License-Identifier: Apache-2.0
 *   SPDXVersion: SPDX-2.2
 *   SPDX-FileCopyrightText: Copyright 2020 FreightTrust and Clearing Corporation
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import React from "react";
import { Button } from "carbon-components-react";
import { Row, Column } from "gatsby-theme-carbon";
import { useAuth } from "react-use-auth";
import cx from "classnames";
import {
  footerContent,
  footerContentDefault,
  footerRow,
  footerLinkCol,
  footerButtonCol,
  footerLastRow,
  // TODO: Misspelling? '  footerDiectoryRow, '
  footerDiectoryRow,
  footerFollowSection,
  footerLinkColMobile,
  hideOnMobile,
} from "./Footer.module.scss";

const ProductFooter = (
  <div>
    <h5>Quick Links</h5>
    <a href='https://drewry.co.uk'>Partners</a>
    <a href='https://freight.page.link/request-information'>Integrations</a>
    <a href='https://ft-docs.netlify.app'>API</a>
    <a href='https://ft-docs.netlify.app'>ABI</a>
    <a href='https://ft-docs.netlify.app'>Rulebook</a>
    <a href='https://ft-docs.netlify.app'>Omnibus</a>
  </div>
);

const CoporateFooter = (
  <div>
    <h5>Corporate</h5>
    <a href='https://ft-docs.netlify.app'>About Us</a>
    <a href='https://freight.page.link/request-information'>Press</a>
    <a href='https://github.com/freight-trust/branding'>Branding</a>
    <a href='https://freight.page.link/request-information'>Compliance</a>
  </div>
);

const SolutionsFooter = (
  <div>
    <h5>Solutions</h5>
    <a href='https://freight.page.link/request-information'>For Trucking</a>
    <a href='https://freight.page.link/request-information'>For Maritime</a>
    <a href='https://freight.page.link/request-information'>For Intermodal</a>
    <a href='https://freight.page.link/request-information'>For Finance</a>
  </div>
);

const ResourcesFooter = (
  <div>
    <h5>Resources</h5>
    <a href='https://ft-docs.netlify.app'>Documentation</a>
    <a href='https://github.com/freight-trust'>Open Source</a>
    <a href='https://github.com/freight-chain'>Community</a>
    <a href='https://github.com/freight-trust/editoken'>$EDI Token</a>
    <a href='https://github.com/freight-trust/security'>Security</a>
  </div>
);

const CustomFooter = ({ homepage }) => {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <div className={cx(footerContent, { [footerContentDefault]: !homepage })}>
      <Row className={footerRow}>
        <Column colSm={12} colMd={3} colLg={3} colXl={3} className={footerLinkCol}>
          <h1>Freight Trust & Clearing</h1>
        </Column>

        <Column colSm={12} colMd={7} colLg={7} colXl={8}>
          <div className={footerLinkCol}>
            {ProductFooter}
            {CoporateFooter}
            <div className={hideOnMobile}>{SolutionsFooter}</div>
            <div className={hideOnMobile}>{ResourcesFooter}</div>
          </div>
        </Column>

        <Column colSm={12} colMd={0} colLg={0} colXl={0} className={footerLinkColMobile}>
          <div className={footerLinkCol}>
            {SolutionsFooter}
            {ResourcesFooter}
          </div>
        </Column>

        <Column colSm={12} colMd={2} colLg={2} colXl={1} className={footerButtonCol}>
          {/* <div>
            <Button>Register</Button>
          </div> */}
          <div>
            {isAuthenticated() ? (
              <Button kind='tertiary' onClick={logout}>
                Log Out
              </Button>
            ) : (
              <Button kind='tertiary' onClick={login}>
                Log In
              </Button>
            )}
          </div>
        </Column>
      </Row>

      <Row className={footerDiectoryRow}>
        <Column colMd={6} colLg={6}>
          <p />
          <p>LEI: 254900C9UJMDGJ0ILK56</p>
          <p>support@freight.zendesk.com</p>
          <p />
        </Column>

        <Column colMd={2} colLg={2} />

        <Column colMd={2} colLg={2}>
          <a href='https://twitter.com/freighttrustnet'>Twitter</a>
          <a href='#top'>Instagram</a>
          <a href='https://medium.com/freighttrust'>Medium</a>
          <a href='https://t.me/freighttrust'>Telegram</a>
        </Column>

        <Column colMd={2} colLg={2}>
          <a href='https://github.com/freight-trust'>GitHub</a>
          <a href='https://github.com/freight-trust/releases'>Releases</a>
          <a href='https://github.com/freight-trust/core'>Hyperledger</a>
          <a href='https://hub.docker.com/r/freightcorp'>RSS</a>
        </Column>
      </Row>

      <Row className={footerLastRow}>
        <Column colMd={6} colLg={6}>
          <div className={footerFollowSection}>
            <span>
              <a href='https://github.com/freight-trust/legal/blob/master/src/terms-of-service.md'>
                Terms of Service{` `}
              </a>
            </span>
            <span>
              <a href='https://github.com/freight-trust/legal/blob/master/src/privacy-policy.md'>
                Privacy Policy{` `}
              </a>
            </span>
            <span>
              <a href='https://github.com/freight-trust/legal/blob/master/src/data-breach-response-policy.md'>
                Security
              </a>
            </span>
          </div>
        </Column>

        <Column colMd={6} colLg={6}>
          <div className={footerFollowSection}>
            <p>(C) 2020 FreightTrust and Clearing Corporation</p>
          </div>
        </Column>
      </Row>
    </div>
  );
};

export default CustomFooter;
