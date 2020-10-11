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
import styled from "@emotion/styled";
import { Grid, Column, Row } from "gatsby-theme-carbon";

import { grid, row, firstColumn, secondColumn } from "./Callout.module.scss";

const StyledGrid = styled(Grid)`
  background-color: ${props =>
    props.theme.colors[props.backgroundColor] ||
    props.backgroundColor ||
    props.theme.colors.interactive02};
  color: ${props =>
    props.theme.colors[props.color] || props.color || props.theme.colors.inverse01}};
  width: 100%;
  max-width: 100%;
`;

const HomepageCallout = ({ leftText, rightText, ...rest }) => (
  <StyledGrid className={grid} {...rest}>
    <Row className={row}>
      <Column colLg={2} colMd={2} />
      <Column colLg={4} colMd={4} className={firstColumn}>
        {leftText()}
      </Column>
      <Column colLg={1} colMd={1} />
      <Column colLg={4} colMd={4} className={secondColumn}>
        {rightText()}
      </Column>
      <Column colLg={1} colMd={1} />
    </Row>
  </StyledGrid>
);

HomepageCallout.defaultProps = {
  leftText: function renderLeftText() {
    return (
      <>
        Freight <strong>Trust & Clearing</strong>
      </>
    );
  },
  rightText: function renderRightText() {
    return (
      <p>
        <strong>Freight Trust Network</strong>
        <br />
      </p>
    );
  },
};

export default HomepageCallout;
