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
import { Link } from "gatsby";
import { Location } from "@reach/router";
import cx from "classnames";
import { SideNavLink, SideNavMenu, SideNavMenuItem } from "carbon-components-react";
=======
import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import cx from 'classnames';
import useNetwork from 'react-use/lib/useNetwork';

import {
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react';
>>>>>>> main

import styles from "gatsby-theme-carbon/src/components/LeftNav/LeftNav.module.scss";

<<<<<<< HEAD
import NavContext from "gatsby-theme-carbon/src/util/context/NavContext";
import usePathprefix from "gatsby-theme-carbon/src/util/hooks/usePathprefix";
=======
import NavContext from '../../util/context/NavContext';
import usePathprefix from '../../util/hooks/usePathprefix';
import useMetadata from '../../util/hooks/useMetadata';

export const SERVICE_WORKER_UPDATE_FOUND = 'GTC-ServiceWorkerUpdateFound';
>>>>>>> main

const LeftNavItem = props => {
  const { items, category, hasDivider, isSpace } = props;
  const { toggleNavState } = useContext(NavContext);
<<<<<<< HEAD
  const closeLeftNav = () => {
    toggleNavState(`leftNavIsOpen`, `close`);
=======
  const { isServiceWorkerEnabled } = useMetadata();
  const isOnline = useNetwork();

  const handleClick = (event, to) => {
    toggleNavState('leftNavIsOpen', 'close');
    if (isServiceWorkerEnabled) {
      if (isOnline && window[SERVICE_WORKER_UPDATE_FOUND] === true) {
        event.preventDefault();
        window.location.href = to;
      }
    }
>>>>>>> main
  };

  const pathPrefix = usePathprefix();

  return (
    <Location>
      {({ location }) => {
        if (isSpace) {
          return <hr className={styles.divider} />;
        }
        const pathname = pathPrefix ? location.pathname.replace(pathPrefix, ``) : location.pathname;

        const isActive = items.some(item => item.path.split(`/`)[1] === pathname.split(`/`)[1]);

        if (items.length === 1) {
          const to = items[0].path;
          return (
            <>
              <SideNavLink
                onClick={(e) => handleClick(e, to)}
                icon={<span>dummy icon</span>}
                element={Link}
                className={cx({
                  [styles.currentItem]: isActive,
                })}
                isActive={isActive}
<<<<<<< HEAD
                to={`${items[0].path}`}
              >
=======
                to={to}>
>>>>>>> main
                {category}
              </SideNavLink>
              {hasDivider && <hr className={styles.divider} />}
            </>
          );
        }
        return (
          <>
            <SideNavMenu
              icon={<span>dummy icon</span>}
              isActive={isActive} // TODO similar categories
              defaultExpanded={isActive}
<<<<<<< HEAD
              title={category}
            >
              <SubNavItems onClick={closeLeftNav} items={items} pathname={pathname} />
=======
              title={category}>
              <SubNavItems
                onClick={handleClick}
                items={items}
                pathname={pathname}
              />
>>>>>>> main
            </SideNavMenu>
            {hasDivider && <hr className={styles.divider} />}
          </>
        );
      }}
    </Location>
  );
};

const SubNavItems = ({ items, pathname, onClick }) =>
  items.map((item, i) => {
    const hasActiveTab =
<<<<<<< HEAD
      `${item.path.split(`/`)[1]}/${item.path.split(`/`)[2]}` ===
      `${pathname.split(`/`)[1]}/${pathname.split(`/`)[2]}`;
=======
      `${item.path.split('/')[1]}/${item.path.split('/')[2]}` ===
      `${pathname.split('/')[1]}/${pathname.split('/')[2]}`;
    const to = item.path;
>>>>>>> main
    return (
      <SideNavMenuItem
        to={to}
        className={cx({
          [styles.linkText__dark]: pathname === `/`,
        })}
        onClick={(e) => onClick(e, to)}
        element={Link}
        isActive={hasActiveTab}
        key={i}
      >
        <span
          className={cx(styles.linkText, {
            [styles.linkText__active]: hasActiveTab,
          })}
        >
          {item.title}
        </span>
      </SideNavMenuItem>
    );
  });

export default LeftNavItem;
