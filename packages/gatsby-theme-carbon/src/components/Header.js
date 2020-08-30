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
import React, { useContext } from "react";
import { Link } from "gatsby";
import {
  Header as ShellHeader,
  HeaderMenuButton,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from "carbon-components-react";
import { AppSwitcher20, Close20 } from "@carbon/icons-react";
import cx from "classnames";

import HeaderNav from "gatsby-theme-carbon/src/components/HeaderNav/HeaderNav";
import NavContext from "gatsby-theme-carbon/src/util/context/NavContext";
import useMetadata from "gatsby-theme-carbon/src/util/hooks/useMetadata";

import {
  header,
  switcherButtonOpen,
  skipToContent,
  headerName,
  headerButton,
  switcherButton,
} from "gatsby-theme-carbon/src/components/Header/Header.module.scss";

import { navLists, navLeftBorder, navLink, globalBar } from "./Header.module.scss";
// href="https://freight.page.link/request-information"
const Header = ({ children }) => {
  const { leftNavIsOpen, toggleNavState, switcherIsOpen } = useContext(NavContext);
  const { navigationStyle } = useMetadata();

  return (
    <ShellHeader
      href='https://freight.page.link/request-information'
      aria-label='Header'
      className={header}
    >
      <SkipToContent
        href='https://freight.page.link/request-information'
        className={skipToContent}
      />

      <HeaderMenuButton
        className={cx(`bx--header__action--menu`, headerButton)}
        aria-label='Open menu'
        onClick={() => {
          toggleNavState(`leftNavIsOpen`);
          toggleNavState(`switcherIsOpen`, `close`);
        }}
        isActive={leftNavIsOpen}
      />
      {/** 
TODO: Fix NAVIGATION ITEMS HERE 
*/}
      <Link className={headerName} to='https://freight.page.link/request-information'>
        Freight Trust
      </Link>

      <div className={navLists}>
        <div className={navLeftBorder} />
        <Link className={navLink} to='/features'>
          Solutions
        </Link>
        <Link className={navLink} to='https://freight.page.link/request-information'>
          Vehicles
        </Link>
        <Link className={navLink} to='https://freight.page.link/request-information'>
          Trade Finance
        </Link>
        <Link className={navLink} to='/dashboard'>
          Trade Network
        </Link>
        <Link className={navLink} to='/trading'>
          Protocol
        </Link>
      </div>

      {navigationStyle && <HeaderNav />}

      <HeaderGlobalBar className={globalBar}>
        <HeaderGlobalAction
          className={cx(headerButton, switcherButton, {
            [switcherButtonOpen]: switcherIsOpen,
          })}
          aria-label='Switch'
          onClick={() => {
            toggleNavState(`switcherIsOpen`, `close`);
            toggleNavState(`searchIsOpen`, `close`);
            toggleNavState(`leftNavIsOpen`, `close`);
          }}
        >
          {switcherIsOpen ? <Close20 /> : <AppSwitcher20 />}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </ShellHeader>
  );
};

export default Header;
