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
import { useStaticQuery, graphql } from "gatsby";

export function themeUseNavItems() {
  const {
    allNavItemsYaml: { edges },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useStaticQuery(graphql`
    query LEFT_NAV_QUERY1 {
      allNavItemsYaml {
        edges {
          node {
            title
            pages {
              title
              path
            }
          }
        }
      }
    }
  `);

  const navItems = edges.map(({ node }) => node);
  return navItems;
}

// add nav items
export function useNavItems() {
  const navItems = themeUseNavItems();
  // return navItems.concat({
  //   title: 'Additional Nav Item',
  //   pages: [
  //     { path: '/page1', title: 'New Page 1' },
  //     { path: '/page2', title: 'New Page 2' },
  //   ],
  // });
  return navItems;
}
