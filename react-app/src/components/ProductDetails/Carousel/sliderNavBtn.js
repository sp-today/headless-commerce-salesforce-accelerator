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

import React from "react";
import PropTypes from "prop-types";
import CarouselArrowIcon from "../../core/CarouselArrowIcon";

const SliderNavBtn = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{ ...style, display: "flex" }}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    tabIndex="0"
  >
    <CarouselArrowIcon />
  </div>
);

SliderNavBtn.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({
    display: PropTypes.string,
  }),
  onClick: PropTypes.func,
};

export default SliderNavBtn;