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

import styles from "gatsby-theme-carbon/src/components/LeftNav/LeftNav.module.scss";

import NavContext from "gatsby-theme-carbon/src/util/context/NavContext";
import usePathprefix from "gatsby-theme-carbon/src/util/hooks/usePathprefix";

const LeftNavItem = props => {
  const { items, category, hasDivider, isSpace } = props;
  const { toggleNavState } = useContext(NavContext);
  const closeLeftNav = () => {
    toggleNavState(`leftNavIsOpen`, `close`);
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
          return (
            <>
              <SideNavLink
                onClick={closeLeftNav}
                icon={<span>dummy icon</span>}
                element={Link}
                className={cx({
                  [styles.currentItem]: isActive,
                })}
                isActive={isActive}
                to={`${items[0].path}`}
              >
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
              title={category}
            >
              <SubNavItems onClick={closeLeftNav} items={items} pathname={pathname} />
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
      `${item.path.split(`/`)[1]}/${item.path.split(`/`)[2]}` ===
      `${pathname.split(`/`)[1]}/${pathname.split(`/`)[2]}`;
    return (
      <SideNavMenuItem
        to={`${item.path}`}
        className={cx({
          [styles.linkText__dark]: pathname === `/`,
        })}
        onClick={onClick}
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
