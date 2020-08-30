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
import { Row, Column } from "gatsby-theme-carbon";

import { column, row, grid } from "./Banner.module.scss";

const HomepageBanner = ({ image, position, renderText }) => (
  <div className={grid} position={position}>
    <Row className={row}>
      <Column className={column} colMd={5} colLg={5}>
        {renderText()}
      </Column>
      <Column className={column} colMd={1} colLg={1} />
      <Column className={column} colMd={6} colLg={6}>
        {image && (
          <img alt='img' src={image} href='https://freight.page.link/request-information' />
        )}
      </Column>
    </Row>
  </div>
);

export default HomepageBanner;
