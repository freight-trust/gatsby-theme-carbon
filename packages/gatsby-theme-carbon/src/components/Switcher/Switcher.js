<<<<<<< HEAD
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
=======
import React, {
  useContext,
  useRef,
  useLayoutEffect,
  useEffect,
  useState,
} from 'react';
import cx from 'classnames';
import useMedia from 'use-media';
import NavContext from '../../util/context/NavContext';
import { nav, open, divider, link, linkDisabled } from './Switcher.module.scss';

const Switcher = ({ children }) => {
  const lgBreakpoint = useMedia('min-width: 1056px');
  const { switcherIsOpen, toggleNavState } = useContext(NavContext);
  const listRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const collapseOpenNavs = function (e) {
      if (e.which === 27) {
        toggleNavState('switcherIsOpen', 'close');
      }
    };

    document.addEventListener('keyup', collapseOpenNavs);

    return function cleanup() {
      document.removeEventListener('keyup', collapseOpenNavs);
    };
  }, [toggleNavState]);

  // calculate and update height
  useLayoutEffect(() => {
    if (switcherIsOpen) {
      setHeight(listRef.current.offsetHeight + 40);
    } else {
      setHeight(0);
    }
  }, [listRef, switcherIsOpen]);

  const maxHeight = !lgBreakpoint && switcherIsOpen ? '100%' : `${height}px`;
>>>>>>> main

  return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    <nav
      className={cx(nav, { [open]: switcherIsOpen })}
<<<<<<< HEAD
      aria-label='Freight Trust & Clearing'
      aria-expanded={switcherIsOpen}
      tabIndex='-1'
    >
      <ul>{children}</ul>
=======
      aria-label="IBM Design ecosystem"
      tabIndex="-1"
      style={{ maxHeight }}>
      <ul ref={listRef}>{children}</ul>
>>>>>>> main
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
<<<<<<< HEAD
    <SwitcherLink href='#top'>Trade Compliance</SwitcherLink>
    <SwitcherLink href='#top'>Trade Messages</SwitcherLink>
    <SwitcherLink href='#top'>Trade Finance</SwitcherLink>
    <SwitcherLink href='#top'>Corporate</SwitcherLink>
    <SwitcherLink href='#top'>Support</SwitcherLink>
    <SwitcherLink href='#top'>Contact</SwitcherLink>
=======
    <SwitcherLink href="https://ibm.com/design">IBM Design</SwitcherLink>
    <SwitcherLink href="https://ibm.com/design/language">
      IBM Design Language
    </SwitcherLink>
    <SwitcherLink href="https://ibm.com/brand">IBM Brand Center</SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/able/">
      IBM Accessibility
    </SwitcherLink>
    <SwitcherDivider>Design disciplines</SwitcherDivider>
    <SwitcherLink href="https://www.carbondesignsystem.com/">
      Product
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/standards/web/ibm-dotcom-library/">
      Digital
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/design/event/">Event</SwitcherLink>
    <SwitcherLink disabled>Workplace</SwitcherLink>
    <SwitcherDivider>Design practices</SwitcherDivider>
    <SwitcherLink href="https://www.ibm.com/design/thinking/">
      Enterprise Design Thinking
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/design/research/">
      IBM Design Research
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/design/ai">
      IBM Design for AI
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/services/ibmix/">
      IBM iX
    </SwitcherLink>
>>>>>>> main
  </>
);

Switcher.defaultProps = {
  children: <DefaultChildren />,
};

export default Switcher;
