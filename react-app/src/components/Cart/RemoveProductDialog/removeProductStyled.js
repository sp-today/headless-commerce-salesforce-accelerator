/*
 * Copyright 2020 EPAM Systems, Inc. (https://www.epam.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from "styled-components";

import { DialogContentText, DialogContent } from "@material-ui/core";

export const StyledDialogContentText = styled(DialogContentText)`
  font: ${({ theme }) => theme.font("regular", 14, 24)};
  color: ${({ theme }) => theme.colors.black};
`;

export const StyledDialogContent = styled(DialogContent)`
  padding: 16px 24px 88px;
`;