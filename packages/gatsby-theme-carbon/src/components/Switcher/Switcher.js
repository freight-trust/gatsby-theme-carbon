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
import cx from "classnames";
import NavContext from "gatsby-theme-carbon/src/util/context/NavContext";
import { nav, open, divider, link, linkDisabled } from "./Switcher.module.scss";

const Switcher = ({ children }) => {
  const { switcherIsOpen } = useContext(NavContext);

  return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    <nav
      className={cx(nav, { [open]: switcherIsOpen })}
      aria-label='Freight Trust & Clearing'
      aria-expanded={switcherIsOpen}
      tabIndex='-1'
    >
      <ul>{children}</ul>
    </nav>
  );
};

export const SwitcherDivider = props => (
  <li className={divider}>
    <span {...props} />
  </li>
);

export const SwitcherLink = ({ disabled, children, href: hrefProp, ...rest }) => {
  const href = disabled || !hrefProp ? undefined : hrefProp;
  const className = disabled ? linkDisabled : link;
  const { switcherIsOpen } = useContext(NavContext);

  return (
    <li>
      <a
        aria-disabled={disabled}
        role='button'
        tabIndex={switcherIsOpen ? 0 : `-1`}
        className={className}
        href='https://freight.page.link/request-information'
        {...rest}
      >
        {children}
      </a>
    </li>
  );
};

// https://css-tricks.com/using-css-transitions-auto-dimensions/
// Note: if you change this, update the max-height in the switcher stylesheet
const DefaultChildren = () => (
  <>
    <SwitcherLink href='#top'>Trade Compliance</SwitcherLink>
    <SwitcherLink href='#top'>Trade Messages</SwitcherLink>
    <SwitcherLink href='#top'>Trade Finance</SwitcherLink>
    <SwitcherLink href='#top'>Corporate</SwitcherLink>
    <SwitcherLink href='#top'>Support</SwitcherLink>
    <SwitcherLink href='#top'>Contact</SwitcherLink>
  </>
);

Switcher.defaultProps = {
  children: <DefaultChildren />,
};

export default Switcher;
