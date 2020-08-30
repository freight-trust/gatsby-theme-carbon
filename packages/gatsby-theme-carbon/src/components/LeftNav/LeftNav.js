/* eslint-disable import/no-unresolved */
// TODO: FIX ESLINT RULE FOR NO UN-RESOLVED
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
import classnames from "classnames";
import { SideNav, SideNavItems } from "carbon-components-react";
import { useNavItems } from "gatsby-theme-carbon/src/components/LeftNav/LeftNavItemProvider";

import NavContext from "gatsby-theme-carbon/src/util/context/NavContext";
import LeftNavItem from "gatsby-theme-carbon/src/components/LeftNav/LeftNavItem";
import LeftNavResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";

import LeftNavWrapper from "gatsby-theme-carbon/src/components/LeftNav/LeftNavWrapper";
import { sideNavDark } from "gatsby-theme-carbon/src/components/LeftNav/LeftNav.module.scss";

const LeftNav = props => {
  const { leftNavIsOpen } = useContext(NavContext);

  const defaultNavItems = useNavItems();

  const { isCustomNav, customNavItems } = props;

  const navItems = isCustomNav ? customNavItems : defaultNavItems;

  // TODO: replace old addon website styles with sass modules, move to wrapper
  return (
    <LeftNavWrapper expanded={leftNavIsOpen}>
      <SideNav
        expanded
        defaultExpanded
        aria-label='Side navigation'
        className={classnames({
          [sideNavDark]: props.theme === `dark` || props.homepage,
          "bx--side-nav--website": true,
          "bx--side-nav--website--dark": props.theme === `dark` || props.homepage,
          "bx--side-nav--website--light": props.theme !== `dark` && !props.homepage,
        })}
      >
        <SideNavItems>
          {navItems.map((item, i) => (
            <LeftNavItem items={item.pages} category={item.title} isSpace={item.isSpace} key={i} />
          ))}
          {props.noResourceLinks ? null : <LeftNavResourceLinks />}
        </SideNavItems>
      </SideNav>
    </LeftNavWrapper>
  );
};

export default LeftNav;
