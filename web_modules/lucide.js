/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const createElement = (tag, attrs, children = []) => {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.keys(attrs).forEach((name) => {
    element.setAttribute(name, String(attrs[name]));
  });
  if (children.length) {
    children.forEach((child) => {
      const childElement = createElement(...child);
      element.appendChild(childElement);
    });
  }
  return element;
};
var createElement$1 = ([tag, attrs, children]) => createElement(tag, attrs, children);

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
  attrs[attr.name] = attr.value;
  return attrs;
}, {});
const getClassNames = (attrs) => {
  if (typeof attrs === "string")
    return attrs;
  if (!attrs || !attrs.class)
    return "";
  if (attrs.class && typeof attrs.class === "string") {
    return attrs.class.split(" ");
  }
  if (attrs.class && Array.isArray(attrs.class)) {
    return attrs.class;
  }
  return "";
};
const combineClassNames = (arrayOfClassnames) => {
  const classNameArray = arrayOfClassnames.flatMap(getClassNames);
  return classNameArray.map((classItem) => classItem.trim()).filter(Boolean).filter((value, index, self) => self.indexOf(value) === index).join(" ");
};
const toPascalCase = (string) => string.replace(/(\w)(\w*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
const replaceElement = (element, { nameAttr, icons, attrs }) => {
  const iconName = element.getAttribute(nameAttr);
  if (iconName == null)
    return;
  const ComponentName = toPascalCase(iconName);
  const iconNode = icons[ComponentName];
  if (!iconNode) {
    return console.warn(
      `${element.outerHTML} icon name was not found in the provided icons object.`
    );
  }
  const elementAttrs = getAttrs(element);
  const [tag, iconAttributes, children] = iconNode;
  const iconAttrs = {
    ...iconAttributes,
    "data-lucide": iconName,
    ...attrs,
    ...elementAttrs
  };
  const classNames = combineClassNames(["lucide", `lucide-${iconName}`, elementAttrs, attrs]);
  if (classNames) {
    Object.assign(iconAttrs, {
      class: classNames
    });
  }
  const svgElement = createElement$1([tag, iconAttrs, children]);
  return element.parentNode?.replaceChild(svgElement, element);
};

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AArrowDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3.5 13h6" }],
    ["path", { d: "m2 16 4.5-9 4.5 9" }],
    ["path", { d: "M18 7v9" }],
    ["path", { d: "m14 12 4 4 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AArrowUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3.5 13h6" }],
    ["path", { d: "m2 16 4.5-9 4.5 9" }],
    ["path", { d: "M18 16V7" }],
    ["path", { d: "m14 11 4-4 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ALargeSmall = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 14h-5" }],
    ["path", { d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" }],
    ["path", { d: "M4.5 13h6" }],
    ["path", { d: "m3 16 4.5-9 4.5 9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Accessibility = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "16", cy: "4", r: "1" }],
    ["path", { d: "m18 19 1-7-6 1" }],
    ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5" }],
    ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6" }],
    ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Activity = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AirVent = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M6 8h12" }],
    ["path", { d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" }],
    ["path", { d: "M6.6 15.6A2 2 0 1 0 10 17v-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Airplay = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }],
    ["path", { d: "m12 15 5 6H7Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlarmClockCheck = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "13", r: "8" }],
    ["path", { d: "M5 3 2 6" }],
    ["path", { d: "m22 6-3-3" }],
    ["path", { d: "M6.38 18.7 4 21" }],
    ["path", { d: "M17.64 18.67 20 21" }],
    ["path", { d: "m9 13 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlarmClockMinus = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "13", r: "8" }],
    ["path", { d: "M5 3 2 6" }],
    ["path", { d: "m22 6-3-3" }],
    ["path", { d: "M6.38 18.7 4 21" }],
    ["path", { d: "M17.64 18.67 20 21" }],
    ["path", { d: "M9 13h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlarmClockOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26" }],
    ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15" }],
    ["path", { d: "m22 6-3-3" }],
    ["path", { d: "M6.26 18.67 4 21" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M4 4 2 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlarmClockPlus = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "13", r: "8" }],
    ["path", { d: "M5 3 2 6" }],
    ["path", { d: "m22 6-3-3" }],
    ["path", { d: "M6.38 18.7 4 21" }],
    ["path", { d: "M17.64 18.67 20 21" }],
    ["path", { d: "M12 10v6" }],
    ["path", { d: "M9 13h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlarmClock = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "13", r: "8" }],
    ["path", { d: "M12 9v4l2 2" }],
    ["path", { d: "M5 3 2 6" }],
    ["path", { d: "m22 6-3-3" }],
    ["path", { d: "M6.38 18.7 4 21" }],
    ["path", { d: "M17.64 18.67 20 21" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlarmSmoke = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 21c0-2.5 2-2.5 2-5" }],
    ["path", { d: "M16 21c0-2.5 2-2.5 2-5" }],
    ["path", { d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" }],
    ["path", { d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" }],
    ["path", { d: "M6 21c0-2.5 2-2.5 2-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Album = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["polyline", { points: "11 3 11 11 14 8 17 11 17 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignCenterHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 12h20" }],
    ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }],
    ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" }],
    ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignCenterVertical = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2v20" }],
    ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }],
    ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }],
    ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }],
    ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignCenter = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "21", x2: "3", y1: "6", y2: "6" }],
    ["line", { x1: "17", x2: "7", y1: "12", y2: "12" }],
    ["line", { x1: "19", x2: "5", y1: "18", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignEndHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2" }],
    ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2" }],
    ["path", { d: "M22 22H2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignEndVertical = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2" }],
    ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2" }],
    ["path", { d: "M22 22V2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignHorizontalDistributeCenter = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
    ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
    ["path", { d: "M17 22v-5" }],
    ["path", { d: "M17 7V2" }],
    ["path", { d: "M7 22v-3" }],
    ["path", { d: "M7 5V2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignHorizontalDistributeEnd = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
    ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
    ["path", { d: "M10 2v20" }],
    ["path", { d: "M20 2v20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignHorizontalDistributeStart = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2" }],
    ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2" }],
    ["path", { d: "M4 2v20" }],
    ["path", { d: "M14 2v20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignHorizontalJustifyCenter = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }],
    ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }],
    ["path", { d: "M12 2v20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignHorizontalJustifyEnd = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2" }],
    ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2" }],
    ["path", { d: "M22 2v20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignHorizontalJustifyStart = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2" }],
    ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2" }],
    ["path", { d: "M2 2v20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignHorizontalSpaceAround = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2" }],
    ["path", { d: "M4 22V2" }],
    ["path", { d: "M20 22V2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignHorizontalSpaceBetween = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2" }],
    ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2" }],
    ["path", { d: "M3 2v20" }],
    ["path", { d: "M21 2v20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignJustify = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "3", x2: "21", y1: "6", y2: "6" }],
    ["line", { x1: "3", x2: "21", y1: "12", y2: "12" }],
    ["line", { x1: "3", x2: "21", y1: "18", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignLeft = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "21", x2: "3", y1: "6", y2: "6" }],
    ["line", { x1: "15", x2: "3", y1: "12", y2: "12" }],
    ["line", { x1: "17", x2: "3", y1: "18", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignRight = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "21", x2: "3", y1: "6", y2: "6" }],
    ["line", { x1: "21", x2: "9", y1: "12", y2: "12" }],
    ["line", { x1: "21", x2: "7", y1: "18", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignStartHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2" }],
    ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2" }],
    ["path", { d: "M22 2H2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignStartVertical = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2" }],
    ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2" }],
    ["path", { d: "M2 2v20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignVerticalDistributeCenter = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 17h-3" }],
    ["path", { d: "M22 7h-5" }],
    ["path", { d: "M5 17H2" }],
    ["path", { d: "M7 7H2" }],
    ["rect", { x: "5", y: "14", width: "14", height: "6", rx: "2" }],
    ["rect", { x: "7", y: "4", width: "10", height: "6", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignVerticalDistributeEnd = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }],
    ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }],
    ["path", { d: "M2 20h20" }],
    ["path", { d: "M2 10h20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignVerticalDistributeStart = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2" }],
    ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2" }],
    ["path", { d: "M2 14h20" }],
    ["path", { d: "M2 4h20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignVerticalJustifyCenter = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }],
    ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }],
    ["path", { d: "M2 12h20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignVerticalJustifyEnd = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2" }],
    ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2" }],
    ["path", { d: "M2 22h20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignVerticalJustifyStart = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2" }],
    ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2" }],
    ["path", { d: "M2 2h20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignVerticalSpaceAround = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2" }],
    ["path", { d: "M22 20H2" }],
    ["path", { d: "M22 4H2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AlignVerticalSpaceBetween = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2" }],
    ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2" }],
    ["path", { d: "M2 21h20" }],
    ["path", { d: "M2 3h20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ambulance = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 10H6" }],
    ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }],
    [
      "path",
      {
        d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"
      }
    ],
    ["path", { d: "M8 8v4" }],
    ["path", { d: "M9 18h6" }],
    ["circle", { cx: "17", cy: "18", r: "2" }],
    ["circle", { cx: "7", cy: "18", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ampersand = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
      }
    ],
    ["path", { d: "M16 12h3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ampersands = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }
    ],
    [
      "path",
      { d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Amphora = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" }],
    ["path", { d: "M10 5H8a2 2 0 0 0 0 4h.68" }],
    ["path", { d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" }],
    ["path", { d: "M14 5h2a2 2 0 0 1 0 4h-.68" }],
    ["path", { d: "M18 22H6" }],
    ["path", { d: "M9 2h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Anchor = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 22V8" }],
    ["path", { d: "M5 12H2a10 10 0 0 0 20 0h-3" }],
    ["circle", { cx: "12", cy: "5", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Angry = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }],
    ["path", { d: "M7.5 8 10 9" }],
    ["path", { d: "m14 9 2.5-1" }],
    ["path", { d: "M9 10h.01" }],
    ["path", { d: "M15 10h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Annoyed = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 15h8" }],
    ["path", { d: "M8 9h2" }],
    ["path", { d: "M14 9h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Antenna = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 12 7 2" }],
    ["path", { d: "m7 12 5-10" }],
    ["path", { d: "m12 12 5-10" }],
    ["path", { d: "m17 12 5-10" }],
    ["path", { d: "M4.5 7h15" }],
    ["path", { d: "M12 16v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Anvil = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" }],
    ["path", { d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" }],
    ["path", { d: "M9 12v5" }],
    ["path", { d: "M15 12v5" }],
    ["path", { d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Aperture = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m14.31 8 5.74 9.94" }],
    ["path", { d: "M9.69 8h11.48" }],
    ["path", { d: "m7.38 12 5.74-9.94" }],
    ["path", { d: "M9.69 16 3.95 6.06" }],
    ["path", { d: "M14.31 16H2.83" }],
    ["path", { d: "m16.62 12-5.74 9.94" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AppWindowMac = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
    ["path", { d: "M6 8h.01" }],
    ["path", { d: "M10 8h.01" }],
    ["path", { d: "M14 8h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AppWindow = [
  "svg",
  defaultAttributes,
  [
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }],
    ["path", { d: "M10 4v4" }],
    ["path", { d: "M2 8h20" }],
    ["path", { d: "M6 4v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Apple = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
      }
    ],
    ["path", { d: "M10 2c1 .5 2 2 2 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArchiveRestore = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2" }],
    ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "m9 15 3-3 3 3" }],
    ["path", { d: "M12 12v9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArchiveX = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
    ["path", { d: "m9.5 17 5-5" }],
    ["path", { d: "m9.5 12 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Archive = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1" }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }],
    ["path", { d: "M10 12h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Armchair = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }],
    [
      "path",
      {
        d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
      }
    ],
    ["path", { d: "M5 18v2" }],
    ["path", { d: "M19 18v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowBigDownDash = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 5H9" }],
    ["path", { d: "M15 9v3h4l-7 7-7-7h4V9z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowBigDown = [
  "svg",
  defaultAttributes,
  [["path", { d: "M15 6v6h4l-7 7-7-7h4V6h6z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowBigLeftDash = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M19 15V9" }],
    ["path", { d: "M15 15h-3v4l-7-7 7-7v4h3v6z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowBigLeft = [
  "svg",
  defaultAttributes,
  [["path", { d: "M18 15h-6v4l-7-7 7-7v4h6v6z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowBigRightDash = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 9v6" }],
    ["path", { d: "M9 9h3V5l7 7-7 7v-4H9V9z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowBigRight = [
  "svg",
  defaultAttributes,
  [["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowBigUpDash = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 19h6" }],
    ["path", { d: "M9 15v-3H5l7-7 7 7h-4v3H9z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowBigUp = [
  "svg",
  defaultAttributes,
  [["path", { d: "M9 18v-6H5l7-7 7 7h-4v6H9z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDown01 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 16 4 4 4-4" }],
    ["path", { d: "M7 20V4" }],
    ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }],
    ["path", { d: "M17 20v-6h-2" }],
    ["path", { d: "M15 20h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDown10 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 16 4 4 4-4" }],
    ["path", { d: "M7 20V4" }],
    ["path", { d: "M17 10V4h-2" }],
    ["path", { d: "M15 10h4" }],
    ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDownAZ = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 16 4 4 4-4" }],
    ["path", { d: "M7 20V4" }],
    ["path", { d: "M20 8h-5" }],
    ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }],
    ["path", { d: "M15 14h5l-5 6h5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDownFromLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M19 3H5" }],
    ["path", { d: "M12 21V7" }],
    ["path", { d: "m6 15 6 6 6-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDownLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 7 7 17" }],
    ["path", { d: "M17 17H7V7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDownNarrowWide = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 16 4 4 4-4" }],
    ["path", { d: "M7 20V4" }],
    ["path", { d: "M11 4h4" }],
    ["path", { d: "M11 8h7" }],
    ["path", { d: "M11 12h10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDownRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m7 7 10 10" }],
    ["path", { d: "M17 7v10H7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDownToDot = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2v14" }],
    ["path", { d: "m19 9-7 7-7-7" }],
    ["circle", { cx: "12", cy: "21", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDownToLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 17V3" }],
    ["path", { d: "m6 11 6 6 6-6" }],
    ["path", { d: "M19 21H5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDownUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 16 4 4 4-4" }],
    ["path", { d: "M7 20V4" }],
    ["path", { d: "m21 8-4-4-4 4" }],
    ["path", { d: "M17 4v16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDownWideNarrow = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 16 4 4 4-4" }],
    ["path", { d: "M7 20V4" }],
    ["path", { d: "M11 4h10" }],
    ["path", { d: "M11 8h7" }],
    ["path", { d: "M11 12h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDownZA = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 16 4 4 4-4" }],
    ["path", { d: "M7 4v16" }],
    ["path", { d: "M15 4h5l-5 6h5" }],
    ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }],
    ["path", { d: "M20 18h-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 5v14" }],
    ["path", { d: "m19 12-7 7-7-7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowLeftFromLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m9 6-6 6 6 6" }],
    ["path", { d: "M3 12h14" }],
    ["path", { d: "M21 19V5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowLeftRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 3 4 7l4 4" }],
    ["path", { d: "M4 7h16" }],
    ["path", { d: "m16 21 4-4-4-4" }],
    ["path", { d: "M20 17H4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowLeftToLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 19V5" }],
    ["path", { d: "m13 6-6 6 6 6" }],
    ["path", { d: "M7 12h14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m12 19-7-7 7-7" }],
    ["path", { d: "M19 12H5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowRightFromLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 5v14" }],
    ["path", { d: "M21 12H7" }],
    ["path", { d: "m15 18 6-6-6-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowRightLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m16 3 4 4-4 4" }],
    ["path", { d: "M20 7H4" }],
    ["path", { d: "m8 21-4-4 4-4" }],
    ["path", { d: "M4 17h16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowRightToLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 12H3" }],
    ["path", { d: "m11 18 6-6-6-6" }],
    ["path", { d: "M21 5v14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 12h14" }],
    ["path", { d: "m12 5 7 7-7 7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUp01 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 8 4-4 4 4" }],
    ["path", { d: "M7 4v16" }],
    ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2" }],
    ["path", { d: "M17 20v-6h-2" }],
    ["path", { d: "M15 20h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUp10 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 8 4-4 4 4" }],
    ["path", { d: "M7 4v16" }],
    ["path", { d: "M17 10V4h-2" }],
    ["path", { d: "M15 10h4" }],
    ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUpAZ = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 8 4-4 4 4" }],
    ["path", { d: "M7 4v16" }],
    ["path", { d: "M20 8h-5" }],
    ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }],
    ["path", { d: "M15 14h5l-5 6h5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUpDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m21 16-4 4-4-4" }],
    ["path", { d: "M17 20V4" }],
    ["path", { d: "m3 8 4-4 4 4" }],
    ["path", { d: "M7 4v16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUpFromDot = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m5 9 7-7 7 7" }],
    ["path", { d: "M12 16V2" }],
    ["circle", { cx: "12", cy: "21", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUpFromLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m18 9-6-6-6 6" }],
    ["path", { d: "M12 3v14" }],
    ["path", { d: "M5 21h14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUpLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 17V7h10" }],
    ["path", { d: "M17 17 7 7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUpNarrowWide = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 8 4-4 4 4" }],
    ["path", { d: "M7 4v16" }],
    ["path", { d: "M11 12h4" }],
    ["path", { d: "M11 16h7" }],
    ["path", { d: "M11 20h10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUpRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 7h10v10" }],
    ["path", { d: "M7 17 17 7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUpToLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 3h14" }],
    ["path", { d: "m18 13-6-6-6 6" }],
    ["path", { d: "M12 7v14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUpWideNarrow = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 8 4-4 4 4" }],
    ["path", { d: "M7 4v16" }],
    ["path", { d: "M11 12h10" }],
    ["path", { d: "M11 16h7" }],
    ["path", { d: "M11 20h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUpZA = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 8 4-4 4 4" }],
    ["path", { d: "M7 4v16" }],
    ["path", { d: "M15 4h5l-5 6h5" }],
    ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }],
    ["path", { d: "M20 18h-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m5 12 7-7 7 7" }],
    ["path", { d: "M12 19V5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ArrowsUpFromLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m4 6 3-3 3 3" }],
    ["path", { d: "M7 17V3" }],
    ["path", { d: "m14 6 3-3 3 3" }],
    ["path", { d: "M17 17V3" }],
    ["path", { d: "M4 21h16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Asterisk = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 6v12" }],
    ["path", { d: "M17.196 9 6.804 15" }],
    ["path", { d: "m6.804 9 10.392 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AtSign = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "4" }],
    ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Atom = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "1" }],
    [
      "path",
      {
        d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
      }
    ],
    [
      "path",
      {
        d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AudioLines = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 10v3" }],
    ["path", { d: "M6 6v11" }],
    ["path", { d: "M10 3v18" }],
    ["path", { d: "M14 8v7" }],
    ["path", { d: "M18 5v13" }],
    ["path", { d: "M22 10v3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const AudioWaveform = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Award = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
      }
    ],
    ["circle", { cx: "12", cy: "8", r: "6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Axe = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" }],
    ["path", { d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Axis3d = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 4v16h16" }],
    ["path", { d: "m4 20 7-7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Baby = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 12h.01" }],
    ["path", { d: "M15 12h.01" }],
    ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }],
    [
      "path",
      {
        d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Backpack = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }],
    ["path", { d: "M8 10h8" }],
    ["path", { d: "M8 18h8" }],
    ["path", { d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" }],
    ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeAlert = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeCent = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { d: "M12 7v10" }],
    ["path", { d: "M15.4 10a4 4 0 1 0 0 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeCheck = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { d: "m9 12 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeDollarSign = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
    ["path", { d: "M12 18V6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeEuro = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { d: "M7 12h5" }],
    ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeHelp = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
    ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeIndianRupee = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { d: "M8 8h8" }],
    ["path", { d: "M8 12h8" }],
    ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeInfo = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["line", { x1: "12", x2: "12", y1: "16", y2: "12" }],
    ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeJapaneseYen = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { d: "m9 8 3 3v7" }],
    ["path", { d: "m12 11 3-3" }],
    ["path", { d: "M9 12h6" }],
    ["path", { d: "M9 16h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeMinus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgePercent = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { d: "m15 9-6 6" }],
    ["path", { d: "M9 9h.01" }],
    ["path", { d: "M15 15h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgePlus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "16" }],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgePoundSterling = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { d: "M8 12h4" }],
    ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0" }],
    ["path", { d: "M8 16h7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeRussianRuble = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { d: "M9 16h5" }],
    ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeSwissFranc = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { d: "M11 17V8h4" }],
    ["path", { d: "M11 12h3" }],
    ["path", { d: "M9 16h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BadgeX = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }],
    ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Badge = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BaggageClaim = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }],
    ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }],
    ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1" }],
    ["circle", { cx: "18", cy: "20", r: "2" }],
    ["circle", { cx: "9", cy: "20", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ban = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m4.9 4.9 14.2 14.2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Banana = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" }],
    [
      "path",
      {
        d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bandage = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 10.01h.01" }],
    ["path", { d: "M10 14.01h.01" }],
    ["path", { d: "M14 10.01h.01" }],
    ["path", { d: "M14 14.01h.01" }],
    ["path", { d: "M18 6v11.5" }],
    ["path", { d: "M6 6v12" }],
    ["rect", { x: "2", y: "6", width: "20", height: "12", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Banknote = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }],
    ["circle", { cx: "12", cy: "12", r: "2" }],
    ["path", { d: "M6 12h.01M18 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Barcode = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 5v14" }],
    ["path", { d: "M8 5v14" }],
    ["path", { d: "M12 5v14" }],
    ["path", { d: "M17 5v14" }],
    ["path", { d: "M21 5v14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Baseline = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 20h16" }],
    ["path", { d: "m6 16 6-12 6 12" }],
    ["path", { d: "M8 12h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bath = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
      }
    ],
    ["line", { x1: "10", x2: "8", y1: "5", y2: "7" }],
    ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }],
    ["line", { x1: "7", x2: "7", y1: "19", y2: "21" }],
    ["line", { x1: "17", x2: "17", y1: "19", y2: "21" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BatteryCharging = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" }],
    ["path", { d: "m11 7-3 5h4l-3 5" }],
    ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BatteryFull = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
    ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }],
    ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "13" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BatteryLow = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
    ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }],
    ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BatteryMedium = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
    ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }],
    ["line", { x1: "6", x2: "6", y1: "11", y2: "13" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BatteryWarning = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 17h.01" }],
    ["path", { d: "M10 7v6" }],
    ["path", { d: "M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M22 11v2" }],
    ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Battery = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2" }],
    ["line", { x1: "22", x2: "22", y1: "11", y2: "13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Beaker = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4.5 3h15" }],
    ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }],
    ["path", { d: "M6 14h12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BeanOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" }],
    ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" }],
    ["path", { d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bean = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"
      }
    ],
    ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BedDouble = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }],
    ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }],
    ["path", { d: "M12 4v6" }],
    ["path", { d: "M2 18h20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BedSingle = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }],
    ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }],
    ["path", { d: "M3 18h18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bed = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 4v16" }],
    ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10" }],
    ["path", { d: "M2 17h20" }],
    ["path", { d: "M6 8v9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Beef = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12.5", cy: "8.5", r: "2.5" }],
    [
      "path",
      {
        d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"
      }
    ],
    [
      "path",
      {
        d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BeerOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 13v5" }],
    ["path", { d: "M17 11.47V8" }],
    ["path", { d: "M17 11h1a3 3 0 0 1 2.745 4.211" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" }],
    ["path", { d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" }],
    [
      "path",
      {
        d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"
      }
    ],
    ["path", { d: "M9 14.6V18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Beer = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1" }],
    ["path", { d: "M9 12v6" }],
    ["path", { d: "M13 12v6" }],
    [
      "path",
      {
        d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
      }
    ],
    ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BellDot = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3" }],
    ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
    ["circle", { cx: "18", cy: "8", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BellElectric = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18.8 4A6.3 8.7 0 0 1 20 9" }],
    ["path", { d: "M9 9h.01" }],
    ["circle", { cx: "9", cy: "9", r: "7" }],
    ["rect", { width: "10", height: "6", x: "4", y: "16", rx: "2" }],
    ["path", { d: "M14 19c3 0 4.6-1.6 4.6-1.6" }],
    ["circle", { cx: "20", cy: "16", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BellMinus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2" }],
    ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
    ["path", { d: "M15 8h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BellOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" }],
    ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" }],
    ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BellPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7" }],
    ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
    ["path", { d: "M15 8h6" }],
    ["path", { d: "M18 5v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BellRing = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }],
    ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }],
    ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8" }],
    ["path", { d: "M22 8c0-2.3-.8-4.3-2-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bell = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }],
    ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BetweenHorizontalEnd = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "13", height: "7", x: "3", y: "3", rx: "1" }],
    ["path", { d: "m22 15-3-3 3-3" }],
    ["rect", { width: "13", height: "7", x: "3", y: "14", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BetweenHorizontalStart = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1" }],
    ["path", { d: "m2 9 3 3-3 3" }],
    ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BetweenVerticalEnd = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "7", height: "13", x: "3", y: "3", rx: "1" }],
    ["path", { d: "m9 22 3-3 3 3" }],
    ["rect", { width: "7", height: "13", x: "14", y: "3", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BetweenVerticalStart = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1" }],
    ["path", { d: "m15 2-3 3-3-3" }],
    ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BicepsFlexed = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"
      }
    ],
    ["path", { d: "M15 14a5 5 0 0 0-7.584 2" }],
    ["path", { d: "M9.964 6.825C8.019 7.977 9.5 13 8 15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bike = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "18.5", cy: "17.5", r: "3.5" }],
    ["circle", { cx: "5.5", cy: "17.5", r: "3.5" }],
    ["circle", { cx: "15", cy: "5", r: "1" }],
    ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Binary = [
  "svg",
  defaultAttributes,
  [
    ["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2" }],
    ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2" }],
    ["path", { d: "M6 20h4" }],
    ["path", { d: "M14 10h4" }],
    ["path", { d: "M6 14h2v6" }],
    ["path", { d: "M14 4h2v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Binoculars = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 10h4" }],
    ["path", { d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }],
    [
      "path",
      {
        d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"
      }
    ],
    ["path", { d: "M 22 16 L 2 16" }],
    [
      "path",
      {
        d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"
      }
    ],
    ["path", { d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Biohazard = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "11.9", r: "2" }],
    ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" }],
    ["path", { d: "m8.9 10.1 1.4.8" }],
    ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" }],
    ["path", { d: "m15.1 10.1-1.4.8" }],
    ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" }],
    ["path", { d: "M12 13.9v1.6" }],
    ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0" }],
    ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5" }],
    ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bird = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 7h.01" }],
    ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }],
    ["path", { d: "m20 7 2 .5-2 .5" }],
    ["path", { d: "M10 18v3" }],
    ["path", { d: "M14 17.75V21" }],
    ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bitcoin = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Blend = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "9", cy: "9", r: "7" }],
    ["circle", { cx: "15", cy: "15", r: "7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Blinds = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3h18" }],
    ["path", { d: "M20 7H8" }],
    ["path", { d: "M20 11H8" }],
    ["path", { d: "M10 19h10" }],
    ["path", { d: "M8 15h12" }],
    ["path", { d: "M4 3v14" }],
    ["circle", { cx: "4", cy: "19", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Blocks = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
    [
      "path",
      {
        d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BluetoothConnected = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }],
    ["line", { x1: "18", x2: "21", y1: "12", y2: "12" }],
    ["line", { x1: "3", x2: "6", y1: "12", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BluetoothOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m17 17-5 5V12l-5 5" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M14.5 9.5 17 7l-5-5v4.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BluetoothSearching = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }],
    ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66" }],
    ["path", { d: "M18 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bluetooth = [
  "svg",
  defaultAttributes,
  [["path", { d: "m7 7 10 10-5 5V2l5 5L7 17" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bold = [
  "svg",
  defaultAttributes,
  [["path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bolt = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bomb = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "11", cy: "13", r: "9" }],
    [
      "path",
      { d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" }
    ],
    ["path", { d: "m22 2-1.5 1.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bone = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookA = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["path", { d: "m8 13 4-7 4 7" }],
    ["path", { d: "M9.1 11h5.7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookAudio = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 6v7" }],
    ["path", { d: "M16 8v3" }],
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["path", { d: "M8 8v3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookCheck = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["path", { d: "m9 9.5 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookCopy = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 16V4a2 2 0 0 1 2-2h11" }],
    [
      "path",
      {
        d: "M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"
      }
    ],
    ["path", { d: "M5 14H4a2 2 0 1 0 0 4h1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookDashed = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 17h2" }],
    ["path", { d: "M12 22h2" }],
    ["path", { d: "M12 2h2" }],
    ["path", { d: "M18 22h1a1 1 0 0 0 1-1" }],
    ["path", { d: "M18 2h1a1 1 0 0 1 1 1v1" }],
    ["path", { d: "M20 15v2h-2" }],
    ["path", { d: "M20 8v3" }],
    ["path", { d: "M4 11V9" }],
    ["path", { d: "M4 19.5V15" }],
    ["path", { d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8" }],
    ["path", { d: "M8 22H6.5a1 1 0 0 1 0-5H8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 13V7" }],
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["path", { d: "m9 10 3 3 3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookHeadphones = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2" }],
    ["circle", { cx: "15", cy: "12", r: "1" }],
    ["circle", { cx: "9", cy: "12", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookHeart = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"
      }
    ],
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookImage = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" }],
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["circle", { cx: "10", cy: "8", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookKey = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m19 3 1 1" }],
    ["path", { d: "m20 2-4.5 4.5" }],
    ["path", { d: "M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" }],
    ["circle", { cx: "14", cy: "8", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookLock = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2" }],
    ["path", { d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }],
    ["rect", { x: "12", y: "6", width: "8", height: "5", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookMarked = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 2v8l3-3 3 3V2" }],
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookMinus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["path", { d: "M9 10h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookOpenCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 21V7" }],
    ["path", { d: "m16 12 2 2 4-4" }],
    [
      "path",
      {
        d: "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookOpenText = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 7v14" }],
    ["path", { d: "M16 12h2" }],
    ["path", { d: "M16 8h2" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
      }
    ],
    ["path", { d: "M6 12h2" }],
    ["path", { d: "M6 8h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookOpen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 7v14" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 7v6" }],
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["path", { d: "M9 10h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookText = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["path", { d: "M8 11h8" }],
    ["path", { d: "M8 7h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookType = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 13h4" }],
    ["path", { d: "M12 6v7" }],
    ["path", { d: "M16 8V6H8v2" }],
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookUp2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 13V7" }],
    ["path", { d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }],
    ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }],
    ["path", { d: "m9 10 3-3 3 3" }],
    ["path", { d: "m9 5 3-3 3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 13V7" }],
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["path", { d: "m9 10 3-3 3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookUser = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 13a3 3 0 1 0-6 0" }],
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["circle", { cx: "12", cy: "8", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m14.5 7-5 5" }],
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ],
    ["path", { d: "m9.5 7 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Book = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookmarkCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }],
    ["path", { d: "m9 10 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookmarkMinus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }],
    ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookmarkPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }],
    ["line", { x1: "12", x2: "12", y1: "7", y2: "13" }],
    ["line", { x1: "15", x2: "9", y1: "10", y2: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BookmarkX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }],
    ["path", { d: "m14.5 7.5-5 5" }],
    ["path", { d: "m9.5 7.5 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bookmark = [
  "svg",
  defaultAttributes,
  [["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BoomBox = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }],
    ["path", { d: "M8 8v1" }],
    ["path", { d: "M12 8v1" }],
    ["path", { d: "M16 8v1" }],
    ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2" }],
    ["circle", { cx: "8", cy: "15", r: "2" }],
    ["circle", { cx: "16", cy: "15", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BotMessageSquare = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 6V2H8" }],
    ["path", { d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" }],
    ["path", { d: "M2 12h2" }],
    ["path", { d: "M9 11v2" }],
    ["path", { d: "M15 11v2" }],
    ["path", { d: "M20 12h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BotOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13.67 8H18a2 2 0 0 1 2 2v4.33" }],
    ["path", { d: "M2 14h2" }],
    ["path", { d: "M20 14h2" }],
    ["path", { d: "M22 22 2 2" }],
    ["path", { d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" }],
    ["path", { d: "M9 13v2" }],
    ["path", { d: "M9.67 4H12v2.33" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bot = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 8V4H8" }],
    ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2" }],
    ["path", { d: "M2 14h2" }],
    ["path", { d: "M20 14h2" }],
    ["path", { d: "M15 13v2" }],
    ["path", { d: "M9 13v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Box = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      }
    ],
    ["path", { d: "m3.3 7 8.7 5 8.7-5" }],
    ["path", { d: "M12 22V12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Boxes = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
      }
    ],
    ["path", { d: "m7 16.5-4.74-2.85" }],
    ["path", { d: "m7 16.5 5-3" }],
    ["path", { d: "M7 16.5v5.17" }],
    [
      "path",
      {
        d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
      }
    ],
    ["path", { d: "m17 16.5-5-3" }],
    ["path", { d: "m17 16.5 4.74-2.85" }],
    ["path", { d: "M17 16.5v5.17" }],
    [
      "path",
      {
        d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
      }
    ],
    ["path", { d: "M12 8 7.26 5.15" }],
    ["path", { d: "m12 8 4.74-2.85" }],
    ["path", { d: "M12 13.5V8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Braces = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }],
    ["path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Brackets = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 3h3v18h-3" }],
    ["path", { d: "M8 21H5V3h3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BrainCircuit = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }
    ],
    ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4" }],
    ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }],
    ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }],
    ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }],
    ["path", { d: "M12 13h4" }],
    ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1" }],
    ["path", { d: "M12 8h8" }],
    ["path", { d: "M16 8V5a2 2 0 0 1 2-2" }],
    ["circle", { cx: "16", cy: "13", r: ".5" }],
    ["circle", { cx: "18", cy: "3", r: ".5" }],
    ["circle", { cx: "20", cy: "21", r: ".5" }],
    ["circle", { cx: "20", cy: "8", r: ".5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BrainCog = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"
      }
    ],
    ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375" }],
    ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }],
    ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }],
    ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396" }],
    ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }],
    ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18" }],
    ["circle", { cx: "12", cy: "12", r: "3" }],
    ["path", { d: "m15.7 10.4-.9.4" }],
    ["path", { d: "m9.2 13.2-.9.4" }],
    ["path", { d: "m13.6 15.7-.4-.9" }],
    ["path", { d: "m10.8 9.2-.4-.9" }],
    ["path", { d: "m15.7 13.5-.9-.4" }],
    ["path", { d: "m9.2 10.9-.9-.4" }],
    ["path", { d: "m10.5 15.7.4-.9" }],
    ["path", { d: "m13.1 9.2.4-.9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Brain = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }
    ],
    [
      "path",
      { d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" }
    ],
    ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" }],
    ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375" }],
    ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5" }],
    ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396" }],
    ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396" }],
    ["path", { d: "M6 18a4 4 0 0 1-1.967-.516" }],
    ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BrickWall = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M12 9v6" }],
    ["path", { d: "M16 15v6" }],
    ["path", { d: "M16 3v6" }],
    ["path", { d: "M3 15h18" }],
    ["path", { d: "M3 9h18" }],
    ["path", { d: "M8 15v6" }],
    ["path", { d: "M8 3v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BriefcaseBusiness = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 12h.01" }],
    ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }],
    ["path", { d: "M22 13a18.15 18.15 0 0 1-20 0" }],
    ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BriefcaseConveyorBelt = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 20v2" }],
    ["path", { d: "M14 20v2" }],
    ["path", { d: "M18 20v2" }],
    ["path", { d: "M21 20H3" }],
    ["path", { d: "M6 20v2" }],
    ["path", { d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" }],
    ["rect", { x: "4", y: "6", width: "16", height: "10", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BriefcaseMedical = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 11v4" }],
    ["path", { d: "M14 13h-4" }],
    ["path", { d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }],
    ["path", { d: "M18 6v14" }],
    ["path", { d: "M6 6v14" }],
    ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Briefcase = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }],
    ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BringToFront = [
  "svg",
  defaultAttributes,
  [
    ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2" }],
    ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" }],
    ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Brush = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" }],
    [
      "path",
      {
        d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BugOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" }],
    ["path", { d: "M14.12 3.88 16 2" }],
    ["path", { d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" }],
    ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" }],
    ["path", { d: "M12 20v-8" }],
    ["path", { d: "M6 13H2" }],
    ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BugPlay = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
      }
    ],
    ["path", { d: "M14.12 3.88 16 2" }],
    ["path", { d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5" }],
    ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }],
    ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }],
    ["path", { d: "M6 13H2" }],
    ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }],
    ["path", { d: "m8 2 1.88 1.88" }],
    ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bug = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m8 2 1.88 1.88" }],
    ["path", { d: "M14.12 3.88 16 2" }],
    ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }],
    ["path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" }],
    ["path", { d: "M12 20v-9" }],
    ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5" }],
    ["path", { d: "M6 13H2" }],
    ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4" }],
    ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4" }],
    ["path", { d: "M22 13h-4" }],
    ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Building2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" }],
    ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }],
    ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M10 6h4" }],
    ["path", { d: "M10 10h4" }],
    ["path", { d: "M10 14h4" }],
    ["path", { d: "M10 18h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Building = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }],
    ["path", { d: "M9 22v-4h6v4" }],
    ["path", { d: "M8 6h.01" }],
    ["path", { d: "M16 6h.01" }],
    ["path", { d: "M12 6h.01" }],
    ["path", { d: "M12 10h.01" }],
    ["path", { d: "M12 14h.01" }],
    ["path", { d: "M16 10h.01" }],
    ["path", { d: "M16 14h.01" }],
    ["path", { d: "M8 10h.01" }],
    ["path", { d: "M8 14h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const BusFront = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 6 2 7" }],
    ["path", { d: "M10 6h4" }],
    ["path", { d: "m22 7-2-1" }],
    ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }],
    ["path", { d: "M4 11h16" }],
    ["path", { d: "M8 15h.01" }],
    ["path", { d: "M16 15h.01" }],
    ["path", { d: "M6 19v2" }],
    ["path", { d: "M18 21v-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Bus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 6v6" }],
    ["path", { d: "M15 6v6" }],
    ["path", { d: "M2 12h19.6" }],
    [
      "path",
      {
        d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
      }
    ],
    ["circle", { cx: "7", cy: "18", r: "2" }],
    ["path", { d: "M9 18h5" }],
    ["circle", { cx: "16", cy: "18", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CableCar = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 3h.01" }],
    ["path", { d: "M14 2h.01" }],
    ["path", { d: "m2 9 20-5" }],
    ["path", { d: "M12 12V6.5" }],
    ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3" }],
    ["path", { d: "M9 12v5" }],
    ["path", { d: "M15 12v5" }],
    ["path", { d: "M4 17h16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cable = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" }],
    ["path", { d: "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" }],
    ["path", { d: "M21 21v-2h-4" }],
    ["path", { d: "M3 5h4V3" }],
    ["path", { d: "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CakeSlice = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "9", cy: "7", r: "2" }],
    ["path", { d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6" }],
    ["path", { d: "M16 13H3" }],
    ["path", { d: "M16 17H3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cake = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }],
    ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }],
    ["path", { d: "M2 21h20" }],
    ["path", { d: "M7 8v3" }],
    ["path", { d: "M12 8v3" }],
    ["path", { d: "M17 8v3" }],
    ["path", { d: "M7 4h.01" }],
    ["path", { d: "M12 4h.01" }],
    ["path", { d: "M17 4h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Calculator = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
    ["line", { x1: "8", x2: "16", y1: "6", y2: "6" }],
    ["line", { x1: "16", x2: "16", y1: "14", y2: "18" }],
    ["path", { d: "M16 10h.01" }],
    ["path", { d: "M12 10h.01" }],
    ["path", { d: "M8 10h.01" }],
    ["path", { d: "M12 14h.01" }],
    ["path", { d: "M8 14h.01" }],
    ["path", { d: "M12 18h.01" }],
    ["path", { d: "M8 18h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarArrowDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m14 18 4 4 4-4" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M18 14v8" }],
    ["path", { d: "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M8 2v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarArrowUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m14 18 4-4 4 4" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M18 22v-8" }],
    ["path", { d: "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M8 2v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarCheck2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "m16 20 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "m9 16 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarClock = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M3 10h5" }],
    ["path", { d: "M17.5 17.5 16 16.3V14" }],
    ["circle", { cx: "16", cy: "16", r: "6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarCog = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m15.2 16.9-.9-.4" }],
    ["path", { d: "m15.2 19.1-.9.4" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "m16.9 15.2-.4-.9" }],
    ["path", { d: "m16.9 20.8-.4.9" }],
    ["path", { d: "m19.5 14.3-.4.9" }],
    ["path", { d: "m19.5 21.7-.4-.9" }],
    ["path", { d: "M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }],
    ["path", { d: "m21.7 16.5-.9.4" }],
    ["path", { d: "m21.7 19.5-.9-.4" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M8 2v4" }],
    ["circle", { cx: "18", cy: "18", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarDays = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M8 14h.01" }],
    ["path", { d: "M12 14h.01" }],
    ["path", { d: "M16 14h.01" }],
    ["path", { d: "M8 18h.01" }],
    ["path", { d: "M12 18h.01" }],
    ["path", { d: "M16 18h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarFold = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M15 22v-4a2 2 0 0 1 2-2h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarHeart = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" }],
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    [
      "path",
      {
        d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarMinus2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M10 16h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarMinus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 19h6" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M8 2v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" }],
    ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M3 10h7" }],
    ["path", { d: "M21 10h-5.5" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarPlus2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M10 16h4" }],
    ["path", { d: "M12 14v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M16 19h6" }],
    ["path", { d: "M19 16v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarRange = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M17 14h-6" }],
    ["path", { d: "M13 18H7" }],
    ["path", { d: "M7 14h.01" }],
    ["path", { d: "M17 18h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarSearch = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" }],
    ["path", { d: "m22 22-1.875-1.875" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "M8 2v4" }],
    ["circle", { cx: "18", cy: "18", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarX2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "m17 22 5-5" }],
    ["path", { d: "m17 17 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CalendarX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
    ["path", { d: "M3 10h18" }],
    ["path", { d: "m14 14-4 4" }],
    ["path", { d: "m10 14 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Calendar = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }],
    ["path", { d: "M3 10h18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CameraOff = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
    ["path", { d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" }],
    ["path", { d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" }],
    ["path", { d: "M14.121 15.121A3 3 0 1 1 9.88 10.88" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Camera = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
      }
    ],
    ["circle", { cx: "12", cy: "13", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CandyCane = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" }
    ],
    ["path", { d: "M17.75 7 15 2.1" }],
    ["path", { d: "M10.9 4.8 13 9" }],
    ["path", { d: "m7.9 9.7 2 4.4" }],
    ["path", { d: "M4.9 14.7 7 18.9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CandyOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1" }],
    ["path", { d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657" }],
    ["path", { d: "M14 16.5V14" }],
    ["path", { d: "M14 6.5v1.843" }],
    ["path", { d: "M10 10v7.5" }],
    [
      "path",
      { d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1" }
    ],
    [
      "path",
      { d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1" }
    ],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Candy = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" }],
    ["path", { d: "M14 6.5v10" }],
    ["path", { d: "M10 7.5v10" }],
    ["path", { d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1" }],
    ["path", { d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cannabis = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 22v-4" }],
    [
      "path",
      {
        d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CaptionsOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10.5 5H19a2 2 0 0 1 2 2v8.5" }],
    ["path", { d: "M17 11h-.5" }],
    ["path", { d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M7 11h4" }],
    ["path", { d: "M7 15h2.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Captions = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "14", x: "3", y: "5", rx: "2", ry: "2" }],
    ["path", { d: "M7 15h4M15 15h2M7 11h2M13 11h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CarFront = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }],
    ["path", { d: "M7 14h.01" }],
    ["path", { d: "M17 14h.01" }],
    ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }],
    ["path", { d: "M5 18v2" }],
    ["path", { d: "M19 18v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CarTaxiFront = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 2h4" }],
    ["path", { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }],
    ["path", { d: "M7 14h.01" }],
    ["path", { d: "M17 14h.01" }],
    ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2" }],
    ["path", { d: "M5 18v2" }],
    ["path", { d: "M19 18v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Car = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
      }
    ],
    ["circle", { cx: "7", cy: "17", r: "2" }],
    ["path", { d: "M9 17h6" }],
    ["circle", { cx: "17", cy: "17", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Caravan = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }],
    ["path", { d: "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" }],
    ["path", { d: "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" }],
    ["circle", { cx: "8", cy: "19", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Carrot = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
      }
    ],
    ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }],
    ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CaseLower = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "7", cy: "12", r: "3" }],
    ["path", { d: "M10 9v6" }],
    ["circle", { cx: "17", cy: "12", r: "3" }],
    ["path", { d: "M14 7v8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CaseSensitive = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 15 4-8 4 8" }],
    ["path", { d: "M4 13h6" }],
    ["circle", { cx: "18", cy: "12", r: "3" }],
    ["path", { d: "M21 9v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CaseUpper = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 15 4-8 4 8" }],
    ["path", { d: "M4 13h6" }],
    ["path", { d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CassetteTape = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
    ["circle", { cx: "8", cy: "10", r: "2" }],
    ["path", { d: "M8 12h8" }],
    ["circle", { cx: "16", cy: "10", r: "2" }],
    ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cast = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }],
    ["path", { d: "M2 12a9 9 0 0 1 8 8" }],
    ["path", { d: "M2 16a5 5 0 0 1 4 4" }],
    ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Castle = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" }],
    ["path", { d: "M18 11V4H6v7" }],
    ["path", { d: "M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4" }],
    ["path", { d: "M22 11V9" }],
    ["path", { d: "M2 11V9" }],
    ["path", { d: "M6 4V2" }],
    ["path", { d: "M18 4V2" }],
    ["path", { d: "M10 4V2" }],
    ["path", { d: "M14 4V2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cat = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"
      }
    ],
    ["path", { d: "M8 14v.5" }],
    ["path", { d: "M16 14v.5" }],
    ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cctv = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" }
    ],
    [
      "path",
      {
        d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"
      }
    ],
    ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" }],
    ["path", { d: "M2 21v-4" }],
    ["path", { d: "M7 9h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartArea = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    [
      "path",
      {
        d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartBarBig = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }],
    ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartBarDecreasing = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { d: "M7 11h8" }],
    ["path", { d: "M7 16h3" }],
    ["path", { d: "M7 6h12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartBarIncreasing = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { d: "M7 11h8" }],
    ["path", { d: "M7 16h12" }],
    ["path", { d: "M7 6h3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartBarStacked = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 13v4" }],
    ["path", { d: "M15 5v4" }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["rect", { x: "7", y: "13", width: "9", height: "4", rx: "1" }],
    ["rect", { x: "7", y: "5", width: "12", height: "4", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartBar = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { d: "M7 16h8" }],
    ["path", { d: "M7 11h12" }],
    ["path", { d: "M7 6h3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartCandlestick = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 5v4" }],
    ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1" }],
    ["path", { d: "M9 15v2" }],
    ["path", { d: "M17 3v2" }],
    ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1" }],
    ["path", { d: "M17 13v3" }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartColumnBig = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }],
    ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartColumnDecreasing = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 17V9" }],
    ["path", { d: "M18 17v-3" }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { d: "M8 17V5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartColumnIncreasing = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 17V9" }],
    ["path", { d: "M18 17V5" }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { d: "M8 17v-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartColumnStacked = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 13H7" }],
    ["path", { d: "M19 9h-4" }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["rect", { x: "15", y: "5", width: "4", height: "12", rx: "1" }],
    ["rect", { x: "7", y: "8", width: "4", height: "9", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartColumn = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { d: "M18 17V9" }],
    ["path", { d: "M13 17V5" }],
    ["path", { d: "M8 17v-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartGantt = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 6h8" }],
    ["path", { d: "M12 16h6" }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { d: "M8 11h7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { d: "m19 9-5 5-4-4-3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartNetwork = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m13.11 7.664 1.78 2.672" }],
    ["path", { d: "m14.162 12.788-3.324 1.424" }],
    ["path", { d: "m20 4-6.06 1.515" }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["circle", { cx: "12", cy: "6", r: "2" }],
    ["circle", { cx: "16", cy: "12", r: "2" }],
    ["circle", { cx: "9", cy: "15", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartNoAxesColumnDecreasing = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 20V10" }],
    ["path", { d: "M18 20v-4" }],
    ["path", { d: "M6 20V4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartNoAxesColumnIncreasing = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "12", x2: "12", y1: "20", y2: "10" }],
    ["line", { x1: "18", x2: "18", y1: "20", y2: "4" }],
    ["line", { x1: "6", x2: "6", y1: "20", y2: "16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartNoAxesColumn = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "18", x2: "18", y1: "20", y2: "10" }],
    ["line", { x1: "12", x2: "12", y1: "20", y2: "4" }],
    ["line", { x1: "6", x2: "6", y1: "20", y2: "14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartNoAxesCombined = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 16v5" }],
    ["path", { d: "M16 14v7" }],
    ["path", { d: "M20 10v11" }],
    ["path", { d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" }],
    ["path", { d: "M4 18v3" }],
    ["path", { d: "M8 14v7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartNoAxesGantt = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 6h10" }],
    ["path", { d: "M6 12h9" }],
    ["path", { d: "M11 18h7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartPie = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
      }
    ],
    ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartScatter = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }],
    ["circle", { cx: "18.5", cy: "5.5", r: ".5", fill: "currentColor" }],
    ["circle", { cx: "11.5", cy: "11.5", r: ".5", fill: "currentColor" }],
    ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }],
    ["circle", { cx: "17.5", cy: "14.5", r: ".5", fill: "currentColor" }],
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChartSpline = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CheckCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 6 7 17l-5-5" }],
    ["path", { d: "m22 10-7.5 7.5L13 16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Check = ["svg", defaultAttributes, [["path", { d: "M20 6 9 17l-5-5" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChefHat = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
      }
    ],
    ["path", { d: "M6 17h12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cherry = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }],
    ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }],
    ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" }],
    ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronDown = ["svg", defaultAttributes, [["path", { d: "m6 9 6 6 6-6" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronFirst = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m17 18-6-6 6-6" }],
    ["path", { d: "M7 6v12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronLast = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m7 18 6-6-6-6" }],
    ["path", { d: "M17 6v12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronLeft = ["svg", defaultAttributes, [["path", { d: "m15 18-6-6 6-6" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronRight = ["svg", defaultAttributes, [["path", { d: "m9 18 6-6-6-6" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronUp = ["svg", defaultAttributes, [["path", { d: "m18 15-6-6-6 6" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronsDownUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m7 20 5-5 5 5" }],
    ["path", { d: "m7 4 5 5 5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronsDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m7 6 5 5 5-5" }],
    ["path", { d: "m7 13 5 5 5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronsLeftRightEllipsis = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m18 8 4 4-4 4" }],
    ["path", { d: "m6 8-4 4 4 4" }],
    ["path", { d: "M8 12h.01" }],
    ["path", { d: "M12 12h.01" }],
    ["path", { d: "M16 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronsLeftRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m9 7-5 5 5 5" }],
    ["path", { d: "m15 7 5 5-5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronsLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m11 17-5-5 5-5" }],
    ["path", { d: "m18 17-5-5 5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronsRightLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m20 17-5-5 5-5" }],
    ["path", { d: "m4 17 5-5-5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronsRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m6 17 5-5-5-5" }],
    ["path", { d: "m13 17 5-5-5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronsUpDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m7 15 5 5 5-5" }],
    ["path", { d: "m7 9 5-5 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ChevronsUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m17 11-5-5-5 5" }],
    ["path", { d: "m17 18-5-5-5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Chrome = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "4" }],
    ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8" }],
    ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14" }],
    ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Church = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 9h4" }],
    ["path", { d: "M12 7v5" }],
    ["path", { d: "M14 22v-4a2 2 0 0 0-4 0v4" }],
    [
      "path",
      {
        d: "M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"
      }
    ],
    [
      "path",
      {
        d: "m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CigaretteOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" }],
    ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" }],
    ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }],
    ["path", { d: "M7 12v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cigarette = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" }],
    ["path", { d: "M18 8c0-2.5-2-2.5-2-5" }],
    ["path", { d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }],
    ["path", { d: "M22 8c0-2.5-2-2.5-2-5" }],
    ["path", { d: "M7 12v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleAlert = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleArrowDown = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 8v8" }],
    ["path", { d: "m8 12 4 4 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleArrowLeft = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M16 12H8" }],
    ["path", { d: "m12 8-4 4 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleArrowOutDownLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 12a10 10 0 1 1 10 10" }],
    ["path", { d: "m2 22 10-10" }],
    ["path", { d: "M8 22H2v-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleArrowOutDownRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 22a10 10 0 1 1 10-10" }],
    ["path", { d: "M22 22 12 12" }],
    ["path", { d: "M22 16v6h-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleArrowOutUpLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 8V2h6" }],
    ["path", { d: "m2 2 10 10" }],
    ["path", { d: "M12 2A10 10 0 1 1 2 12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleArrowOutUpRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 12A10 10 0 1 1 12 2" }],
    ["path", { d: "M22 2 12 12" }],
    ["path", { d: "M16 2h6v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleArrowRight = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 12h8" }],
    ["path", { d: "m12 16 4-4-4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleArrowUp = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m16 12-4-4-4 4" }],
    ["path", { d: "M12 16V8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleCheckBig = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335" }],
    ["path", { d: "m9 11 3 3L22 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleCheck = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m9 12 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleChevronDown = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m16 10-4 4-4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleChevronLeft = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m14 16-4-4 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleChevronRight = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m10 8 4 4-4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleChevronUp = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m8 14 4-4 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleDashed = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10.1 2.182a10 10 0 0 1 3.8 0" }],
    ["path", { d: "M13.9 21.818a10 10 0 0 1-3.8 0" }],
    ["path", { d: "M17.609 3.721a10 10 0 0 1 2.69 2.7" }],
    ["path", { d: "M2.182 13.9a10 10 0 0 1 0-3.8" }],
    ["path", { d: "M20.279 17.609a10 10 0 0 1-2.7 2.69" }],
    ["path", { d: "M21.818 10.1a10 10 0 0 1 0 3.8" }],
    ["path", { d: "M3.721 6.391a10 10 0 0 1 2.7-2.69" }],
    ["path", { d: "M6.391 20.279a10 10 0 0 1-2.69-2.7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleDivide = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }],
    ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }],
    ["circle", { cx: "12", cy: "12", r: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleDollarSign = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
    ["path", { d: "M12 18V6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleDotDashed = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }],
    ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }],
    ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }],
    ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }],
    ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }],
    ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }],
    ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }],
    ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }],
    ["circle", { cx: "12", cy: "12", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleDot = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleEllipsis = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M17 12h.01" }],
    ["path", { d: "M12 12h.01" }],
    ["path", { d: "M7 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleEqual = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 10h10" }],
    ["path", { d: "M7 14h10" }],
    ["circle", { cx: "12", cy: "12", r: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleFadingArrowUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }],
    ["path", { d: "m16 12-4-4-4 4" }],
    ["path", { d: "M12 16V8" }],
    ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }],
    ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }],
    ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }],
    ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleFadingPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75" }],
    ["path", { d: "M12 8v8" }],
    ["path", { d: "M16 12H8" }],
    ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3" }],
    ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4" }],
    ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857" }],
    ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleGauge = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7" }],
    ["circle", { cx: "12", cy: "12", r: "2" }],
    ["path", { d: "M13.4 10.6 19 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleHelp = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
    ["path", { d: "M12 17h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleMinus = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 12h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65" }],
    ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleParkingOff = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m5 5 14 14" }],
    ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }],
    ["path", { d: "M9 17v-2.34" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleParking = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CirclePause = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["line", { x1: "10", x2: "10", y1: "15", y2: "9" }],
    ["line", { x1: "14", x2: "14", y1: "15", y2: "9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CirclePercent = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m15 9-6 6" }],
    ["path", { d: "M9 9h.01" }],
    ["path", { d: "M15 15h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CirclePlay = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polygon", { points: "10 8 16 12 10 16 10 8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CirclePlus = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 12h8" }],
    ["path", { d: "M12 8v8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CirclePower = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 7v4" }],
    ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }],
    ["circle", { cx: "12", cy: "12", r: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleSlash2 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M22 2 2 22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleSlash = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleStop = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleUserRound = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 20a6 6 0 0 0-12 0" }],
    ["circle", { cx: "12", cy: "10", r: "4" }],
    ["circle", { cx: "12", cy: "12", r: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleUser = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "10", r: "3" }],
    ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircleX = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m15 9-6 6" }],
    ["path", { d: "m9 9 6 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Circle = ["svg", defaultAttributes, [["circle", { cx: "12", cy: "12", r: "10" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CircuitBoard = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3" }],
    ["circle", { cx: "9", cy: "9", r: "2" }],
    ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4" }],
    ["circle", { cx: "15", cy: "15", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Citrus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" }
    ],
    ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34" }],
    ["path", { d: "m14 10-5.5 5.5" }],
    ["path", { d: "M14 17.85V10H6.15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clapperboard = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" }],
    ["path", { d: "m6.2 5.3 3.1 3.9" }],
    ["path", { d: "m12.4 3.4 3.1 4" }],
    ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClipboardCheck = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
    ["path", { d: "m9 14 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClipboardCopy = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
    ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4" }],
    ["path", { d: "M21 14H11" }],
    ["path", { d: "m15 10-4 4 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClipboardList = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M12 11h4" }],
    ["path", { d: "M12 16h4" }],
    ["path", { d: "M8 11h.01" }],
    ["path", { d: "M8 16h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClipboardMinus = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M9 14h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClipboardPaste = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z" }],
    [
      "path",
      {
        d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"
      }
    ],
    ["path", { d: "m17 10 4 4-4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClipboardPenLine = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }],
    ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1" }],
    ["path", { d: "M8 18h1" }],
    [
      "path",
      {
        d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClipboardPen = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" }],
    ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2" }],
    [
      "path",
      {
        d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClipboardPlus = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M9 14h6" }],
    ["path", { d: "M12 17v-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClipboardType = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M9 12v-1h6v1" }],
    ["path", { d: "M11 17h2" }],
    ["path", { d: "M12 11v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClipboardX = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }],
    ["path", { d: "m15 11-6 6" }],
    ["path", { d: "m9 11 6 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clipboard = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock1 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 14.5 8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock10 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 8 10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock11 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 9.5 8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock12 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock2 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 16 10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock3 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 16.5 12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock4 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 16 14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock5 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 14.5 16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock6 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 12 16.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock7 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 9.5 16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock8 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 8 14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock9 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 7.5 12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClockAlert = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 6v6l4 2" }],
    ["path", { d: "M16 21.16a10 10 0 1 1 5-13.516" }],
    ["path", { d: "M20 11.5v6" }],
    ["path", { d: "M20 21.5h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClockArrowDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12.338 21.994A10 10 0 1 1 21.925 13.227" }],
    ["path", { d: "M12 6v6l2 1" }],
    ["path", { d: "m14 18 4 4 4-4" }],
    ["path", { d: "M18 14v8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ClockArrowUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13.228 21.925A10 10 0 1 1 21.994 12.338" }],
    ["path", { d: "M12 6v6l1.562.781" }],
    ["path", { d: "m14 18 4-4 4 4" }],
    ["path", { d: "M18 22v-8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clock = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 16 14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudCog = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "17", r: "3" }],
    ["path", { d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }],
    ["path", { d: "m15.7 18.4-.9-.3" }],
    ["path", { d: "m9.2 15.9-.9-.3" }],
    ["path", { d: "m10.6 20.7.3-.9" }],
    ["path", { d: "m13.1 14.2.3-.9" }],
    ["path", { d: "m13.6 20.7-.4-1" }],
    ["path", { d: "m10.8 14.3-.4-1" }],
    ["path", { d: "m8.3 18.6 1-.4" }],
    ["path", { d: "m14.7 15.8 1-.4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudDownload = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 13v8l-4-4" }],
    ["path", { d: "m12 21 4-4" }],
    ["path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudDrizzle = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
    ["path", { d: "M8 19v1" }],
    ["path", { d: "M8 14v1" }],
    ["path", { d: "M16 19v1" }],
    ["path", { d: "M16 14v1" }],
    ["path", { d: "M12 21v1" }],
    ["path", { d: "M12 16v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudFog = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
    ["path", { d: "M16 17H7" }],
    ["path", { d: "M17 21H9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudHail = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
    ["path", { d: "M16 14v2" }],
    ["path", { d: "M8 14v2" }],
    ["path", { d: "M16 20h.01" }],
    ["path", { d: "M8 20h.01" }],
    ["path", { d: "M12 16v2" }],
    ["path", { d: "M12 22h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudLightning = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" }],
    ["path", { d: "m13 12-3 5h4l-3 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudMoonRain = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }],
    ["path", { d: "M11 20v2" }],
    ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }],
    ["path", { d: "M7 19v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudMoon = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }],
    ["path", { d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" }],
    ["path", { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudRainWind = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
    ["path", { d: "m9.2 22 3-7" }],
    ["path", { d: "m9 13-3 7" }],
    ["path", { d: "m17 13-3 7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudRain = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
    ["path", { d: "M16 14v6" }],
    ["path", { d: "M8 14v6" }],
    ["path", { d: "M12 16v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudSnow = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
    ["path", { d: "M8 15h.01" }],
    ["path", { d: "M8 19h.01" }],
    ["path", { d: "M12 17h.01" }],
    ["path", { d: "M12 21h.01" }],
    ["path", { d: "M16 15h.01" }],
    ["path", { d: "M16 19h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudSunRain = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2v2" }],
    ["path", { d: "m4.93 4.93 1.41 1.41" }],
    ["path", { d: "M20 12h2" }],
    ["path", { d: "m19.07 4.93-1.41 1.41" }],
    ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }],
    ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }],
    ["path", { d: "M11 20v2" }],
    ["path", { d: "M7 19v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudSun = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2v2" }],
    ["path", { d: "m4.93 4.93 1.41 1.41" }],
    ["path", { d: "M20 12h2" }],
    ["path", { d: "m19.07 4.93-1.41 1.41" }],
    ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128" }],
    ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CloudUpload = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 13v8" }],
    ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
    ["path", { d: "m8 17 4-4 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cloud = [
  "svg",
  defaultAttributes,
  [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cloudy = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }],
    ["path", { d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Clover = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16.17 7.83 2 22" }],
    [
      "path",
      {
        d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"
      }
    ],
    ["path", { d: "m7.83 7.83 8.34 8.34" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Club = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" }
    ],
    ["path", { d: "M12 17.66L12 22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CodeXml = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m18 16 4-4-4-4" }],
    ["path", { d: "m6 8-4 4 4 4" }],
    ["path", { d: "m14.5 4-5 16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Code = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "16 18 22 12 16 6" }],
    ["polyline", { points: "8 6 2 12 8 18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Codepen = [
  "svg",
  defaultAttributes,
  [
    ["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }],
    ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5" }],
    ["polyline", { points: "22 8.5 12 15.5 2 8.5" }],
    ["polyline", { points: "2 15.5 12 8.5 22 15.5" }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Codesandbox = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    ],
    ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21" }],
    ["polyline", { points: "7.5 19.79 7.5 14.6 3 12" }],
    ["polyline", { points: "21 12 16.5 14.6 16.5 19.79" }],
    ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }],
    ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Coffee = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 2v2" }],
    ["path", { d: "M14 2v2" }],
    [
      "path",
      {
        d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
      }
    ],
    ["path", { d: "M6 2v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cog = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" }],
    ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }],
    ["path", { d: "M12 2v2" }],
    ["path", { d: "M12 22v-2" }],
    ["path", { d: "m17 20.66-1-1.73" }],
    ["path", { d: "M11 10.27 7 3.34" }],
    ["path", { d: "m20.66 17-1.73-1" }],
    ["path", { d: "m3.34 7 1.73 1" }],
    ["path", { d: "M14 12h8" }],
    ["path", { d: "M2 12h2" }],
    ["path", { d: "m20.66 7-1.73 1" }],
    ["path", { d: "m3.34 17 1.73-1" }],
    ["path", { d: "m17 3.34-1 1.73" }],
    ["path", { d: "m11 13.73-4 6.93" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Coins = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "8", cy: "8", r: "6" }],
    ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18" }],
    ["path", { d: "M7 6h1v4" }],
    ["path", { d: "m16.71 13.88.7.71-2.82 2.82" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Columns2 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M12 3v18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Columns3 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M9 3v18" }],
    ["path", { d: "M15 3v18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Columns4 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M7.5 3v18" }],
    ["path", { d: "M12 3v18" }],
    ["path", { d: "M16.5 3v18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Combine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 18H5a3 3 0 0 1-3-3v-1" }],
    ["path", { d: "M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }],
    ["path", { d: "M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }],
    ["path", { d: "m7 21 3-3-3-3" }],
    ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2" }],
    ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Command = [
  "svg",
  defaultAttributes,
  [["path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Compass = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Component = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" }],
    ["path", { d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" }],
    ["path", { d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" }],
    ["path", { d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Computer = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2" }],
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
    ["path", { d: "M6 18h2" }],
    ["path", { d: "M12 18h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ConciergeBell = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" }],
    ["path", { d: "M20 16a8 8 0 1 0-16 0" }],
    ["path", { d: "M12 4v4" }],
    ["path", { d: "M10 4h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cone = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" }],
    ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Construction = [
  "svg",
  defaultAttributes,
  [
    ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1" }],
    ["path", { d: "M17 14v7" }],
    ["path", { d: "M7 14v7" }],
    ["path", { d: "M17 3v3" }],
    ["path", { d: "M7 3v3" }],
    ["path", { d: "M10 14 2.3 6.3" }],
    ["path", { d: "m14 6 7.7 7.7" }],
    ["path", { d: "m8 6 8 8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ContactRound = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 2v2" }],
    ["path", { d: "M17.915 22a6 6 0 0 0-12 0" }],
    ["path", { d: "M8 2v2" }],
    ["circle", { cx: "12", cy: "12", r: "4" }],
    ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Contact = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 2v2" }],
    ["path", { d: "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M8 2v2" }],
    ["circle", { cx: "12", cy: "11", r: "3" }],
    ["rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Container = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
      }
    ],
    ["path", { d: "M10 21.9V14L2.1 9.1" }],
    ["path", { d: "m10 14 11.9-6.9" }],
    ["path", { d: "M14 19.8v-8.1" }],
    ["path", { d: "M18 17.5V9.4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Contrast = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 18a6 6 0 0 0 0-12v12z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cookie = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" }],
    ["path", { d: "M8.5 8.5v.01" }],
    ["path", { d: "M16 15.5v.01" }],
    ["path", { d: "M12 12v.01" }],
    ["path", { d: "M11 17v.01" }],
    ["path", { d: "M7 14v.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CookingPot = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 12h20" }],
    ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }],
    ["path", { d: "m4 8 16-4" }],
    ["path", { d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CopyCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m12 15 2 2 4-4" }],
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CopyMinus = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }],
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CopyPlus = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "15", x2: "15", y1: "12", y2: "18" }],
    ["line", { x1: "12", x2: "18", y1: "15", y2: "15" }],
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CopySlash = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "12", x2: "18", y1: "18", y2: "12" }],
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CopyX = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "12", x2: "18", y1: "12", y2: "18" }],
    ["line", { x1: "12", x2: "18", y1: "18", y2: "12" }],
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Copy = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Copyleft = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Copyright = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CornerDownLeft = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "9 10 4 15 9 20" }],
    ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CornerDownRight = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "15 10 20 15 15 20" }],
    ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CornerLeftDown = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "14 15 9 20 4 15" }],
    ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CornerLeftUp = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "14 9 9 4 4 9" }],
    ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CornerRightDown = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "10 15 15 20 20 15" }],
    ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CornerRightUp = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "10 9 15 4 20 9" }],
    ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CornerUpLeft = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "9 14 4 9 9 4" }],
    ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CornerUpRight = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "15 14 20 9 15 4" }],
    ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cpu = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "16", x: "4", y: "4", rx: "2" }],
    ["rect", { width: "6", height: "6", x: "9", y: "9", rx: "1" }],
    ["path", { d: "M15 2v2" }],
    ["path", { d: "M15 20v2" }],
    ["path", { d: "M2 15h2" }],
    ["path", { d: "M2 9h2" }],
    ["path", { d: "M20 15h2" }],
    ["path", { d: "M20 9h2" }],
    ["path", { d: "M9 2v2" }],
    ["path", { d: "M9 20v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CreativeCommons = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }],
    ["path", { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CreditCard = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Croissant = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"
      }
    ],
    [
      "path",
      { d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83" }
    ],
    ["path", { d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" }],
    [
      "path",
      {
        d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"
      }
    ],
    ["path", { d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Crop = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14" }],
    ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cross = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Crosshair = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["line", { x1: "22", x2: "18", y1: "12", y2: "12" }],
    ["line", { x1: "6", x2: "2", y1: "12", y2: "12" }],
    ["line", { x1: "12", x2: "12", y1: "6", y2: "2" }],
    ["line", { x1: "12", x2: "12", y1: "22", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Crown = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
      }
    ],
    ["path", { d: "M5 21h14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cuboid = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"
      }
    ],
    ["path", { d: "M10 22v-8L2.25 9.15" }],
    ["path", { d: "m10 14 11.77-6.87" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const CupSoda = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }],
    ["path", { d: "M5 8h14" }],
    ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }],
    ["path", { d: "m12 8 1-6h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Currency = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "8" }],
    ["line", { x1: "3", x2: "6", y1: "3", y2: "6" }],
    ["line", { x1: "21", x2: "18", y1: "3", y2: "6" }],
    ["line", { x1: "3", x2: "6", y1: "21", y2: "18" }],
    ["line", { x1: "21", x2: "18", y1: "21", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Cylinder = [
  "svg",
  defaultAttributes,
  [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
    ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dam = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }],
    ["path", { d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }],
    ["path", { d: "M2 10h4" }],
    ["path", { d: "M2 14h4" }],
    ["path", { d: "M2 18h4" }],
    ["path", { d: "M2 6h4" }],
    ["path", { d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const DatabaseBackup = [
  "svg",
  defaultAttributes,
  [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
    ["path", { d: "M3 12a9 3 0 0 0 5 2.69" }],
    ["path", { d: "M21 9.3V5" }],
    ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88" }],
    ["path", { d: "M12 12v4h4" }],
    ["path", { d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const DatabaseZap = [
  "svg",
  defaultAttributes,
  [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84" }],
    ["path", { d: "M21 5V8" }],
    ["path", { d: "M21 12L18 17H22L19 22" }],
    ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Database = [
  "svg",
  defaultAttributes,
  [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Delete = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
      }
    ],
    ["path", { d: "m12 9 6 6" }],
    ["path", { d: "m18 9-6 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dessert = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "4", r: "2" }],
    [
      "path",
      {
        d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"
      }
    ],
    ["path", { d: "M3.2 14.8a9 9 0 0 0 17.6 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Diameter = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "19", cy: "19", r: "2" }],
    ["circle", { cx: "5", cy: "5", r: "2" }],
    ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86" }],
    ["path", { d: "m6.41 6.41 11.18 11.18" }],
    ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const DiamondMinus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
      }
    ],
    ["path", { d: "M8 12h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const DiamondPercent = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"
      }
    ],
    ["path", { d: "M9.2 9.2h.01" }],
    ["path", { d: "m14.5 9.5-5 5" }],
    ["path", { d: "M14.7 14.8h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const DiamondPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 8v8" }],
    [
      "path",
      {
        d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
      }
    ],
    ["path", { d: "M8 12h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Diamond = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dice1 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M12 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dice2 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M15 9h.01" }],
    ["path", { d: "M9 15h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dice3 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M16 8h.01" }],
    ["path", { d: "M12 12h.01" }],
    ["path", { d: "M8 16h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dice4 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M16 8h.01" }],
    ["path", { d: "M8 8h.01" }],
    ["path", { d: "M8 16h.01" }],
    ["path", { d: "M16 16h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dice5 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M16 8h.01" }],
    ["path", { d: "M8 8h.01" }],
    ["path", { d: "M8 16h.01" }],
    ["path", { d: "M16 16h.01" }],
    ["path", { d: "M12 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dice6 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M16 8h.01" }],
    ["path", { d: "M16 12h.01" }],
    ["path", { d: "M16 16h.01" }],
    ["path", { d: "M8 8h.01" }],
    ["path", { d: "M8 12h.01" }],
    ["path", { d: "M8 16h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dices = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2" }],
    ["path", { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" }],
    ["path", { d: "M6 18h.01" }],
    ["path", { d: "M10 14h.01" }],
    ["path", { d: "M15 6h.01" }],
    ["path", { d: "M18 9h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Diff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 3v14" }],
    ["path", { d: "M5 10h14" }],
    ["path", { d: "M5 21h14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Disc2 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "4" }],
    ["path", { d: "M12 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Disc3 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2" }],
    ["circle", { cx: "12", cy: "12", r: "2" }],
    ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const DiscAlbum = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["circle", { cx: "12", cy: "12", r: "5" }],
    ["path", { d: "M12 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Disc = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Divide = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "6", r: "1" }],
    ["line", { x1: "5", x2: "19", y1: "12", y2: "12" }],
    ["circle", { cx: "12", cy: "18", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const DnaOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" }],
    ["path", { d: "m17 6-2.891-2.891" }],
    ["path", { d: "M2 15c3.333-3 6.667-3 10-3" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "m20 9 .891.891" }],
    ["path", { d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" }],
    ["path", { d: "M3.109 14.109 4 15" }],
    ["path", { d: "m6.5 12.5 1 1" }],
    ["path", { d: "m7 18 2.891 2.891" }],
    ["path", { d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dna = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m10 16 1.5 1.5" }],
    ["path", { d: "m14 8-1.5-1.5" }],
    ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }],
    ["path", { d: "m16.5 10.5 1 1" }],
    ["path", { d: "m17 6-2.891-2.891" }],
    ["path", { d: "M2 15c6.667-6 13.333 0 20-6" }],
    ["path", { d: "m20 9 .891.891" }],
    ["path", { d: "M3.109 14.109 4 15" }],
    ["path", { d: "m6.5 12.5 1 1" }],
    ["path", { d: "m7 18 2.891 2.891" }],
    ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dock = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 8h20" }],
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
    ["path", { d: "M6 16h12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dog = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11.25 16.25h1.5L12 17z" }],
    ["path", { d: "M16 14v.5" }],
    [
      "path",
      {
        d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"
      }
    ],
    ["path", { d: "M8 14v.5" }],
    [
      "path",
      {
        d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const DollarSign = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }],
    ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Donut = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const DoorClosed = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }],
    ["path", { d: "M2 20h20" }],
    ["path", { d: "M14 12v.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const DoorOpen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14" }],
    ["path", { d: "M2 20h3" }],
    ["path", { d: "M13 20h9" }],
    ["path", { d: "M10 12v.01" }],
    [
      "path",
      {
        d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dot = ["svg", defaultAttributes, [["circle", { cx: "12.1", cy: "12.1", r: "1" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Download = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["polyline", { points: "7 10 12 15 17 10" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const DraftingCompass = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m12.99 6.74 1.93 3.44" }],
    ["path", { d: "M19.136 12a10 10 0 0 1-14.271 0" }],
    ["path", { d: "m21 21-2.16-3.84" }],
    ["path", { d: "m3 21 8.02-14.26" }],
    ["circle", { cx: "12", cy: "5", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Drama = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 11h.01" }],
    ["path", { d: "M14 6h.01" }],
    ["path", { d: "M18 6h.01" }],
    ["path", { d: "M6.5 13.1h.01" }],
    ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" }],
    ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0" }],
    [
      "path",
      {
        d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
      }
    ],
    ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dribbble = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" }],
    ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" }],
    ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Drill = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z" }],
    ["path", { d: "M18 6h4" }],
    ["path", { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" }],
    ["path", { d: "m5 10-2 8" }],
    ["path", { d: "M12 10v3c0 .6-.4 1-1 1H8" }],
    ["path", { d: "m7 18 2-8" }],
    ["path", { d: "M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Droplet = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Droplets = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
      }
    ],
    [
      "path",
      {
        d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Drum = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m2 2 8 8" }],
    ["path", { d: "m22 2-8 8" }],
    ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5" }],
    ["path", { d: "M7 13.4v7.9" }],
    ["path", { d: "M12 14v8" }],
    ["path", { d: "M17 13.4v7.9" }],
    ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Drumstick = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }],
    ["path", { d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Dumbbell = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14.4 14.4 9.6 9.6" }],
    [
      "path",
      {
        d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"
      }
    ],
    ["path", { d: "m21.5 21.5-1.4-1.4" }],
    ["path", { d: "M3.9 3.9 2.5 2.5" }],
    [
      "path",
      {
        d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const EarOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" }],
    ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14" }],
    ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" }],
    ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ear = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" }],
    ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const EarthLock = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 3.34V5a3 3 0 0 0 3 3" }],
    ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }],
    ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }],
    ["path", { d: "M12 2a10 10 0 1 0 9.54 13" }],
    ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }],
    ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Earth = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54" }],
    [
      "path",
      { d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" }
    ],
    ["path", { d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }],
    ["circle", { cx: "12", cy: "12", r: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Eclipse = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 2a7 7 0 1 0 10 10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const EggFried = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "11.5", cy: "12.5", r: "3.5" }],
    [
      "path",
      {
        d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const EggOff = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"
      }
    ],
    [
      "path",
      {
        d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"
      }
    ],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Egg = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const EllipsisVertical = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "1" }],
    ["circle", { cx: "12", cy: "5", r: "1" }],
    ["circle", { cx: "12", cy: "19", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ellipsis = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "1" }],
    ["circle", { cx: "19", cy: "12", r: "1" }],
    ["circle", { cx: "5", cy: "12", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const EqualNot = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "5", x2: "19", y1: "9", y2: "9" }],
    ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }],
    ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Equal = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "5", x2: "19", y1: "9", y2: "9" }],
    ["line", { x1: "5", x2: "19", y1: "15", y2: "15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Eraser = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" }
    ],
    ["path", { d: "M22 21H7" }],
    ["path", { d: "m5 11 9 9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const EthernetPort = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" }
    ],
    ["path", { d: "M6 8v1" }],
    ["path", { d: "M10 8v1" }],
    ["path", { d: "M14 8v1" }],
    ["path", { d: "M18 8v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Euro = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 10h12" }],
    ["path", { d: "M4 14h9" }],
    [
      "path",
      { d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Expand = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8" }],
    ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6" }],
    ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6" }],
    ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ExternalLink = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 3h6v6" }],
    ["path", { d: "M10 14 21 3" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const EyeOff = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
      }
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
      }
    ],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Eye = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Facebook = [
  "svg",
  defaultAttributes,
  [["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Factory = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }
    ],
    ["path", { d: "M17 18h1" }],
    ["path", { d: "M12 18h1" }],
    ["path", { d: "M7 18h1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Fan = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
      }
    ],
    ["path", { d: "M12 12v.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FastForward = [
  "svg",
  defaultAttributes,
  [
    ["polygon", { points: "13 19 22 12 13 5 13 19" }],
    ["polygon", { points: "2 19 11 12 2 5 2 19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Feather = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"
      }
    ],
    ["path", { d: "M16 8 2 22" }],
    ["path", { d: "M17.5 15H9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Fence = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }],
    ["path", { d: "M6 8h4" }],
    ["path", { d: "M6 18h4" }],
    ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }],
    ["path", { d: "M14 8h4" }],
    ["path", { d: "M14 18h4" }],
    ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FerrisWheel = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "2" }],
    ["path", { d: "M12 2v4" }],
    ["path", { d: "m6.8 15-3.5 2" }],
    ["path", { d: "m20.7 7-3.5 2" }],
    ["path", { d: "M6.8 9 3.3 7" }],
    ["path", { d: "m20.7 17-3.5-2" }],
    ["path", { d: "m9 22 3-8 3 8" }],
    ["path", { d: "M8 22h8" }],
    ["path", { d: "M18 18.7a9 9 0 1 0-12 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Figma = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" }],
    ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" }],
    ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" }],
    ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" }],
    ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileArchive = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 12v-1" }],
    ["path", { d: "M10 18v-2" }],
    ["path", { d: "M10 7V6" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }],
    ["circle", { cx: "10", cy: "20", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileAudio2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["circle", { cx: "3", cy: "17", r: "1" }],
    ["path", { d: "M2 17v-3a4 4 0 0 1 8 0v3" }],
    ["circle", { cx: "9", cy: "17", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileAudio = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    [
      "path",
      {
        d: "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileAxis3d = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "m8 18 4-4" }],
    ["path", { d: "M8 10v8h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileBadge2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["circle", { cx: "12", cy: "10", r: "3" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "m14 12.5 1 5.5-3-1-3 1 1-5.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileBadge = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }],
    ["path", { d: "M7 16.5 8 22l-3-1-3 1 1-5.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileBox = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    [
      "path",
      {
        d: "M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"
      }
    ],
    ["path", { d: "M7 17v5" }],
    ["path", { d: "M11.7 14.2 7 17l-4.7-2.8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileChartColumnIncreasing = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M8 18v-2" }],
    ["path", { d: "M12 18v-4" }],
    ["path", { d: "M16 18v-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileChartColumn = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M8 18v-1" }],
    ["path", { d: "M12 18v-6" }],
    ["path", { d: "M16 18v-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileChartLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "m16 13-3.5 3.5-2-2L8 17" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileChartPie = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5" }],
    ["path", { d: "M4.017 11.512a6 6 0 1 0 8.466 8.475" }],
    [
      "path",
      {
        d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileCheck2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "m3 15 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "m9 15 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileClock = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["circle", { cx: "8", cy: "16", r: "6" }],
    ["path", { d: "M9.5 17.5 8 16.25V14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileCode2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "m5 12-3 3 3 3" }],
    ["path", { d: "m9 18 3-3-3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileCode = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 12.5 8 15l2 2.5" }],
    ["path", { d: "m14 12.5 2 2.5-2 2.5" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileCog = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "m3.2 12.9-.9-.4" }],
    ["path", { d: "m3.2 15.1-.9.4" }],
    ["path", { d: "M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5" }],
    ["path", { d: "m4.9 11.2-.4-.9" }],
    ["path", { d: "m4.9 16.8-.4.9" }],
    ["path", { d: "m7.5 10.3-.4.9" }],
    ["path", { d: "m7.5 17.7-.4-.9" }],
    ["path", { d: "m9.7 12.5-.9.4" }],
    ["path", { d: "m9.7 15.5-.9-.4" }],
    ["circle", { cx: "6", cy: "14", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileDiff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M9 10h6" }],
    ["path", { d: "M12 13V7" }],
    ["path", { d: "M9 17h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileDigit = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["rect", { width: "4", height: "6", x: "2", y: "12", rx: "2" }],
    ["path", { d: "M10 12h2v6" }],
    ["path", { d: "M10 18h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M12 18v-6" }],
    ["path", { d: "m9 15 3 3 3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileHeart = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    [
      "path",
      {
        d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileImage = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["circle", { cx: "10", cy: "12", r: "2" }],
    ["path", { d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileInput = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M2 15h10" }],
    ["path", { d: "m9 18 3-3-3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileJson2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }],
    ["path", { d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileJson = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }],
    ["path", { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileKey2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["circle", { cx: "4", cy: "16", r: "2" }],
    ["path", { d: "m10 10-4.5 4.5" }],
    ["path", { d: "m9 11 1 1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileKey = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["circle", { cx: "10", cy: "16", r: "2" }],
    ["path", { d: "m16 10-4.5 4.5" }],
    ["path", { d: "m15 11 1 1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileLock2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["rect", { width: "8", height: "5", x: "2", y: "13", rx: "1" }],
    ["path", { d: "M8 13v-2a2 2 0 1 0-4 0v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileLock = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["rect", { width: "8", height: "6", x: "8", y: "12", rx: "1" }],
    ["path", { d: "M10 12v-2a2 2 0 1 1 4 0v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileMinus2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M3 15h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileMinus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M9 15h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileMusic = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "14", cy: "16", r: "2" }],
    ["circle", { cx: "6", cy: "18", r: "2" }],
    ["path", { d: "M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5" }],
    ["path", { d: "M8 18v-7.7L16 9v7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileOutput = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" }],
    ["path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" }],
    ["path", { d: "m5 11-3 3" }],
    ["path", { d: "m5 17-3-3h10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FilePenLine = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
      }
    ],
    [
      "path",
      {
        d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      }
    ],
    ["path", { d: "M8 18h1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FilePen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    [
      "path",
      {
        d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FilePlus2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M3 15h6" }],
    ["path", { d: "M6 12v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FilePlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M9 15h6" }],
    ["path", { d: "M12 18v-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileQuestion = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 17h.01" }],
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }],
    ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileScan = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M16 14a2 2 0 0 0-2 2" }],
    ["path", { d: "M20 14a2 2 0 0 1 2 2" }],
    ["path", { d: "M20 22a2 2 0 0 0 2-2" }],
    ["path", { d: "M16 22a2 2 0 0 1-2-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileSearch2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["circle", { cx: "11.5", cy: "14.5", r: "2.5" }],
    ["path", { d: "M13.3 16.3 15 18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileSearch = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }],
    ["path", { d: "m9 18-1.5-1.5" }],
    ["circle", { cx: "5", cy: "14", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileSliders = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M8 12h8" }],
    ["path", { d: "M10 11v2" }],
    ["path", { d: "M8 17h8" }],
    ["path", { d: "M14 16v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileSpreadsheet = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M8 13h2" }],
    ["path", { d: "M14 13h2" }],
    ["path", { d: "M8 17h2" }],
    ["path", { d: "M14 17h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileStack = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 7h-3a2 2 0 0 1-2-2V2" }],
    [
      "path",
      { d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z" }
    ],
    ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" }],
    ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileSymlink = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m10 18 3-3-3-3" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    [
      "path",
      { d: "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileTerminal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "m8 16 2-2-2-2" }],
    ["path", { d: "M12 18h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileText = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M10 9H8" }],
    ["path", { d: "M16 13H8" }],
    ["path", { d: "M16 17H8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileType2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M2 13v-1h6v1" }],
    ["path", { d: "M5 12v6" }],
    ["path", { d: "M4 18h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileType = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M9 13v-1h6v1" }],
    ["path", { d: "M12 12v6" }],
    ["path", { d: "M11 18h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M12 12v6" }],
    ["path", { d: "m15 15-3-3-3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileUser = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M15 18a3 3 0 1 0-6 0" }],
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }],
    ["circle", { cx: "12", cy: "13", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileVideo2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["rect", { width: "8", height: "6", x: "2", y: "12", rx: "1" }],
    ["path", { d: "m10 15.5 4 2.5v-6l-4 2.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileVideo = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "m10 11 5 3-5 3v-6Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileVolume2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M8 15h.01" }],
    ["path", { d: "M11.5 13.5a2.5 2.5 0 0 1 0 3" }],
    ["path", { d: "M15 12a5 5 0 0 1 0 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileVolume = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 11a5 5 0 0 1 0 6" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23" }],
    [
      "path",
      {
        d: "M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileWarning = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M12 9v4" }],
    ["path", { d: "M12 17h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileX2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "m8 12.5-5 5" }],
    ["path", { d: "m3 12.5 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FileX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "m14.5 12.5-5 5" }],
    ["path", { d: "m9.5 12.5 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const File = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Files = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }],
    ["path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" }],
    ["path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Film = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M7 3v18" }],
    ["path", { d: "M3 7.5h4" }],
    ["path", { d: "M3 12h18" }],
    ["path", { d: "M3 16.5h4" }],
    ["path", { d: "M17 3v18" }],
    ["path", { d: "M17 7.5h4" }],
    ["path", { d: "M17 16.5h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FilterX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" }],
    ["path", { d: "m22 3-5 5" }],
    ["path", { d: "m17 3 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Filter = [
  "svg",
  defaultAttributes,
  [["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Fingerprint = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }],
    ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88" }],
    ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02" }],
    ["path", { d: "M2 12a10 10 0 0 1 18-6" }],
    ["path", { d: "M2 16h.01" }],
    ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6" }],
    ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" }],
    ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2" }],
    ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FireExtinguisher = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" }],
    ["path", { d: "M9 18h8" }],
    ["path", { d: "M18 3h-3" }],
    ["path", { d: "M11 3a6 6 0 0 0-6 6v11" }],
    ["path", { d: "M5 13h4" }],
    ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FishOff = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"
      }
    ],
    [
      "path",
      {
        d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"
      }
    ],
    [
      "path",
      {
        d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FishSymbol = [
  "svg",
  defaultAttributes,
  [["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Fish = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
      }
    ],
    ["path", { d: "M18 12v.5" }],
    ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86" }],
    [
      "path",
      {
        d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
      }
    ],
    ["path", { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }],
    ["path", { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlagOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2c3 0 5 2 8 2s4-1 4-1v11" }],
    ["path", { d: "M4 22V4" }],
    ["path", { d: "M4 15s1-1 4-1 5 2 8 2" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlagTriangleLeft = [
  "svg",
  defaultAttributes,
  [["path", { d: "M17 22V2L7 7l10 5" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlagTriangleRight = [
  "svg",
  defaultAttributes,
  [["path", { d: "M7 22V2l10 5-10 5" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Flag = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }],
    ["line", { x1: "4", x2: "4", y1: "22", y2: "15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlameKindling = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
      }
    ],
    ["path", { d: "m5 22 14-4" }],
    ["path", { d: "m5 18 14 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Flame = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlashlightOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" }],
    ["path", { d: "M7 2h11v4c0 2-2 2-2 4v1" }],
    ["line", { x1: "11", x2: "18", y1: "6", y2: "6" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Flashlight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z" }],
    ["line", { x1: "6", x2: "18", y1: "6", y2: "6" }],
    ["line", { x1: "12", x2: "12", y1: "12", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlaskConicalOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542" }],
    ["path", { d: "M10 2v2.343" }],
    ["path", { d: "M14 2v6.343" }],
    ["path", { d: "M8.5 2h7" }],
    ["path", { d: "M7 16h9" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlaskConical = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"
      }
    ],
    ["path", { d: "M8.5 2h7" }],
    ["path", { d: "M7 16h10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlaskRound = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 2v7.31" }],
    ["path", { d: "M14 9.3V1.99" }],
    ["path", { d: "M8.5 2h7" }],
    ["path", { d: "M14 9.3a6.5 6.5 0 1 1-4 0" }],
    ["path", { d: "M5.52 16h12.96" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlipHorizontal2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 7 5 5-5 5V7" }],
    ["path", { d: "m21 7-5 5 5 5V7" }],
    ["path", { d: "M12 20v2" }],
    ["path", { d: "M12 14v2" }],
    ["path", { d: "M12 8v2" }],
    ["path", { d: "M12 2v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlipHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }],
    ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }],
    ["path", { d: "M12 20v2" }],
    ["path", { d: "M12 14v2" }],
    ["path", { d: "M12 8v2" }],
    ["path", { d: "M12 2v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlipVertical2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m17 3-5 5-5-5h10" }],
    ["path", { d: "m17 21-5-5-5 5h10" }],
    ["path", { d: "M4 12H2" }],
    ["path", { d: "M10 12H8" }],
    ["path", { d: "M16 12h-2" }],
    ["path", { d: "M22 12h-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FlipVertical = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }],
    ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }],
    ["path", { d: "M4 12H2" }],
    ["path", { d: "M10 12H8" }],
    ["path", { d: "M16 12h-2" }],
    ["path", { d: "M22 12h-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Flower2 = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
      }
    ],
    ["circle", { cx: "12", cy: "8", r: "2" }],
    ["path", { d: "M12 10v12" }],
    ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }],
    ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Flower = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "3" }],
    [
      "path",
      {
        d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
      }
    ],
    ["path", { d: "M12 7.5V9" }],
    ["path", { d: "M7.5 12H9" }],
    ["path", { d: "M16.5 12H15" }],
    ["path", { d: "M12 16.5V15" }],
    ["path", { d: "m8 8 1.88 1.88" }],
    ["path", { d: "M14.12 9.88 16 8" }],
    ["path", { d: "m8 16 1.88-1.88" }],
    ["path", { d: "M14.12 14.12 16 16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Focus = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "3" }],
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FoldHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 12h6" }],
    ["path", { d: "M22 12h-6" }],
    ["path", { d: "M12 2v2" }],
    ["path", { d: "M12 8v2" }],
    ["path", { d: "M12 14v2" }],
    ["path", { d: "M12 20v2" }],
    ["path", { d: "m19 9-3 3 3 3" }],
    ["path", { d: "m5 15 3-3-3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FoldVertical = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 22v-6" }],
    ["path", { d: "M12 8V2" }],
    ["path", { d: "M4 12H2" }],
    ["path", { d: "M10 12H8" }],
    ["path", { d: "M16 12h-2" }],
    ["path", { d: "M22 12h-2" }],
    ["path", { d: "m15 19-3-3-3 3" }],
    ["path", { d: "m15 5-3 3-3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderArchive = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "15", cy: "19", r: "2" }],
    [
      "path",
      {
        d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"
      }
    ],
    ["path", { d: "M15 11v-1" }],
    ["path", { d: "M15 17v-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderCheck = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ],
    ["path", { d: "m9 13 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderClock = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "16", cy: "16", r: "6" }],
    [
      "path",
      {
        d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"
      }
    ],
    ["path", { d: "M16 14v2l1 1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderClosed = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ],
    ["path", { d: "M2 10h20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderCode = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 10.5 8 13l2 2.5" }],
    ["path", { d: "m14 10.5 2 2.5-2 2.5" }],
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderCog = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "18", cy: "18", r: "3" }],
    [
      "path",
      {
        d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"
      }
    ],
    ["path", { d: "m21.7 19.4-.9-.3" }],
    ["path", { d: "m15.2 16.9-.9-.3" }],
    ["path", { d: "m16.6 21.7.3-.9" }],
    ["path", { d: "m19.1 15.2.3-.9" }],
    ["path", { d: "m19.6 21.7-.4-1" }],
    ["path", { d: "m16.8 15.3-.4-1" }],
    ["path", { d: "m14.3 19.6 1-.4" }],
    ["path", { d: "m20.7 16.8 1-.4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderDot = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
      }
    ],
    ["circle", { cx: "12", cy: "13", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderDown = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ],
    ["path", { d: "M12 10v6" }],
    ["path", { d: "m15 13-3 3-3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderGit2 = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
      }
    ],
    ["circle", { cx: "13", cy: "12", r: "2" }],
    ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8" }],
    ["circle", { cx: "20", cy: "19", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderGit = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "13", r: "2" }],
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ],
    ["path", { d: "M14 13h3" }],
    ["path", { d: "M7 13h3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderHeart = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"
      }
    ],
    [
      "path",
      {
        d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderInput = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"
      }
    ],
    ["path", { d: "M2 13h10" }],
    ["path", { d: "m9 16 3-3-3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderKanban = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
      }
    ],
    ["path", { d: "M8 10v4" }],
    ["path", { d: "M12 10v2" }],
    ["path", { d: "M16 10v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderKey = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "16", cy: "20", r: "2" }],
    [
      "path",
      {
        d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"
      }
    ],
    ["path", { d: "m22 14-4.5 4.5" }],
    ["path", { d: "m21 15 1 1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderLock = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1" }],
    [
      "path",
      {
        d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"
      }
    ],
    ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderMinus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 13h6" }],
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderOpenDot = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
      }
    ],
    ["circle", { cx: "14", cy: "15", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderOpen = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderOutput = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"
      }
    ],
    ["path", { d: "M2 13h10" }],
    ["path", { d: "m5 10-3 3 3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderPen = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"
      }
    ],
    [
      "path",
      {
        d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 10v6" }],
    ["path", { d: "M9 13h6" }],
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderRoot = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
      }
    ],
    ["circle", { cx: "12", cy: "13", r: "2" }],
    ["path", { d: "M12 15v5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderSearch2 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "11.5", cy: "12.5", r: "2.5" }],
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ],
    ["path", { d: "M13.3 14.3 15 16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderSearch = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"
      }
    ],
    ["path", { d: "m21 21-1.9-1.9" }],
    ["circle", { cx: "17", cy: "17", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderSymlink = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
      }
    ],
    ["path", { d: "m8 16 3-3-3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderSync = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"
      }
    ],
    ["path", { d: "M12 10v4h4" }],
    ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5" }],
    ["path", { d: "M22 22v-4h-4" }],
    ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderTree = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
      }
    ],
    [
      "path",
      {
        d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
      }
    ],
    ["path", { d: "M3 5a2 2 0 0 0 2 2h3" }],
    ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderUp = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ],
    ["path", { d: "M12 10v6" }],
    ["path", { d: "m9 13 3-3 3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const FolderX = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ],
    ["path", { d: "m9.5 10.5 5 5" }],
    ["path", { d: "m14.5 10.5-5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Folder = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Folders = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
      }
    ],
    ["path", { d: "M2 8v11a2 2 0 0 0 2 2h14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Footprints = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
      }
    ],
    [
      "path",
      {
        d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
      }
    ],
    ["path", { d: "M16 17h4" }],
    ["path", { d: "M4 13h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Forklift = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5" }],
    ["circle", { cx: "13", cy: "19", r: "2" }],
    ["circle", { cx: "5", cy: "19", r: "2" }],
    ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Forward = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "15 17 20 12 15 7" }],
    ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Frame = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "22", x2: "2", y1: "6", y2: "6" }],
    ["line", { x1: "22", x2: "2", y1: "18", y2: "18" }],
    ["line", { x1: "6", x2: "6", y1: "2", y2: "22" }],
    ["line", { x1: "18", x2: "18", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Framer = [
  "svg",
  defaultAttributes,
  [["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Frown = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2" }],
    ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
    ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Fuel = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "3", x2: "15", y1: "22", y2: "22" }],
    ["line", { x1: "4", x2: "14", y1: "9", y2: "9" }],
    ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" }],
    [
      "path",
      { d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Fullscreen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
    ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GalleryHorizontalEnd = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 7v10" }],
    ["path", { d: "M6 5v14" }],
    ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GalleryHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 3v18" }],
    ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2" }],
    ["path", { d: "M22 3v18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GalleryThumbnails = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M4 21h1" }],
    ["path", { d: "M9 21h1" }],
    ["path", { d: "M14 21h1" }],
    ["path", { d: "M19 21h1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GalleryVerticalEnd = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 2h10" }],
    ["path", { d: "M5 6h14" }],
    ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GalleryVertical = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 2h18" }],
    ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2" }],
    ["path", { d: "M3 22h18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Gamepad2 = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "6", x2: "10", y1: "11", y2: "11" }],
    ["line", { x1: "8", x2: "8", y1: "9", y2: "13" }],
    ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12" }],
    ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10" }],
    [
      "path",
      {
        d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Gamepad = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "6", x2: "10", y1: "12", y2: "12" }],
    ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }],
    ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13" }],
    ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11" }],
    ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Gauge = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m12 14 4-4" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Gavel = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" }],
    ["path", { d: "m16 16 6-6" }],
    ["path", { d: "m8 8 6-6" }],
    ["path", { d: "m9 7 8 8" }],
    ["path", { d: "m21 11-8-8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Gem = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 3h12l4 6-10 13L2 9Z" }],
    ["path", { d: "M11 3 8 9l4 13 4-13-3-6" }],
    ["path", { d: "M2 9h20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ghost = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 10h.01" }],
    ["path", { d: "M15 10h.01" }],
    ["path", { d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Gift = [
  "svg",
  defaultAttributes,
  [
    ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1" }],
    ["path", { d: "M12 8v13" }],
    ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }],
    [
      "path",
      { d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitBranchPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 3v12" }],
    ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }],
    ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }],
    ["path", { d: "M15 6a9 9 0 0 0-9 9" }],
    ["path", { d: "M18 15v6" }],
    ["path", { d: "M21 18h-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitBranch = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "6", x2: "6", y1: "3", y2: "15" }],
    ["circle", { cx: "18", cy: "6", r: "3" }],
    ["circle", { cx: "6", cy: "18", r: "3" }],
    ["path", { d: "M18 9a9 9 0 0 1-9 9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitCommitHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "3" }],
    ["line", { x1: "3", x2: "9", y1: "12", y2: "12" }],
    ["line", { x1: "15", x2: "21", y1: "12", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitCommitVertical = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 3v6" }],
    ["circle", { cx: "12", cy: "12", r: "3" }],
    ["path", { d: "M12 15v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitCompareArrows = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "5", cy: "6", r: "3" }],
    ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }],
    ["path", { d: "m15 9-3-3 3-3" }],
    ["circle", { cx: "19", cy: "18", r: "3" }],
    ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9" }],
    ["path", { d: "m9 15 3 3-3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitCompare = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "18", cy: "18", r: "3" }],
    ["circle", { cx: "6", cy: "6", r: "3" }],
    ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }],
    ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitFork = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "18", r: "3" }],
    ["circle", { cx: "6", cy: "6", r: "3" }],
    ["circle", { cx: "18", cy: "6", r: "3" }],
    ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }],
    ["path", { d: "M12 12v3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitGraph = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "5", cy: "6", r: "3" }],
    ["path", { d: "M5 9v6" }],
    ["circle", { cx: "5", cy: "18", r: "3" }],
    ["path", { d: "M12 3v18" }],
    ["circle", { cx: "19", cy: "6", r: "3" }],
    ["path", { d: "M16 15.7A9 9 0 0 0 19 9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitMerge = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "18", cy: "18", r: "3" }],
    ["circle", { cx: "6", cy: "6", r: "3" }],
    ["path", { d: "M6 21V9a9 9 0 0 0 9 9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitPullRequestArrow = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "5", cy: "6", r: "3" }],
    ["path", { d: "M5 9v12" }],
    ["circle", { cx: "19", cy: "18", r: "3" }],
    ["path", { d: "m15 9-3-3 3-3" }],
    ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitPullRequestClosed = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "6", cy: "6", r: "3" }],
    ["path", { d: "M6 9v12" }],
    ["path", { d: "m21 3-6 6" }],
    ["path", { d: "m21 9-6-6" }],
    ["path", { d: "M18 11.5V15" }],
    ["circle", { cx: "18", cy: "18", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitPullRequestCreateArrow = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "5", cy: "6", r: "3" }],
    ["path", { d: "M5 9v12" }],
    ["path", { d: "m15 9-3-3 3-3" }],
    ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3" }],
    ["path", { d: "M19 15v6" }],
    ["path", { d: "M22 18h-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitPullRequestCreate = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "6", cy: "6", r: "3" }],
    ["path", { d: "M6 9v12" }],
    ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3" }],
    ["path", { d: "M18 15v6" }],
    ["path", { d: "M21 18h-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitPullRequestDraft = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "18", cy: "18", r: "3" }],
    ["circle", { cx: "6", cy: "6", r: "3" }],
    ["path", { d: "M18 6V5" }],
    ["path", { d: "M18 11v-1" }],
    ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GitPullRequest = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "18", cy: "18", r: "3" }],
    ["circle", { cx: "6", cy: "6", r: "3" }],
    ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7" }],
    ["line", { x1: "6", x2: "6", y1: "9", y2: "21" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Github = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Gitlab = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GlassWater = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" }],
    ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Glasses = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "6", cy: "15", r: "4" }],
    ["circle", { cx: "18", cy: "15", r: "4" }],
    ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }],
    ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }],
    ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GlobeLock = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" }],
    ["path", { d: "M2 12h8.5" }],
    ["path", { d: "M20 6V4a2 2 0 1 0-4 0v2" }],
    ["rect", { width: "8", height: "5", x: "14", y: "6", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Globe = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }],
    ["path", { d: "M2 12h20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Goal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 13V2l8 4-8 4" }],
    ["path", { d: "M20.561 10.222a9 9 0 1 1-12.55-5.29" }],
    ["path", { d: "M8.002 9.997a5 5 0 1 0 8.9 2.02" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Grab = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }],
    ["path", { d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }],
    ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }],
    ["path", { d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
    ["path", { d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GraduationCap = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
      }
    ],
    ["path", { d: "M22 10v6" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Grape = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 5V2l-5.89 5.89" }],
    ["circle", { cx: "16.6", cy: "15.89", r: "3" }],
    ["circle", { cx: "8.11", cy: "7.4", r: "3" }],
    ["circle", { cx: "12.35", cy: "11.65", r: "3" }],
    ["circle", { cx: "13.91", cy: "5.85", r: "3" }],
    ["circle", { cx: "18.15", cy: "10.09", r: "3" }],
    ["circle", { cx: "6.56", cy: "13.2", r: "3" }],
    ["circle", { cx: "10.8", cy: "17.44", r: "3" }],
    ["circle", { cx: "5", cy: "19", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Grid2x2Check = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
      }
    ],
    ["path", { d: "m16 19 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Grid2x2Plus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
      }
    ],
    ["path", { d: "M16 19h6" }],
    ["path", { d: "M19 22v-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Grid2x2X = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
      }
    ],
    ["path", { d: "m16 16 5 5" }],
    ["path", { d: "m16 21 5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Grid2x2 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 12h18" }],
    ["path", { d: "M12 3v18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Grid3x3 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 9h18" }],
    ["path", { d: "M3 15h18" }],
    ["path", { d: "M9 3v18" }],
    ["path", { d: "M15 3v18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GripHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "9", r: "1" }],
    ["circle", { cx: "19", cy: "9", r: "1" }],
    ["circle", { cx: "5", cy: "9", r: "1" }],
    ["circle", { cx: "12", cy: "15", r: "1" }],
    ["circle", { cx: "19", cy: "15", r: "1" }],
    ["circle", { cx: "5", cy: "15", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const GripVertical = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "9", cy: "12", r: "1" }],
    ["circle", { cx: "9", cy: "5", r: "1" }],
    ["circle", { cx: "9", cy: "19", r: "1" }],
    ["circle", { cx: "15", cy: "12", r: "1" }],
    ["circle", { cx: "15", cy: "5", r: "1" }],
    ["circle", { cx: "15", cy: "19", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Grip = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "5", r: "1" }],
    ["circle", { cx: "19", cy: "5", r: "1" }],
    ["circle", { cx: "5", cy: "5", r: "1" }],
    ["circle", { cx: "12", cy: "12", r: "1" }],
    ["circle", { cx: "19", cy: "12", r: "1" }],
    ["circle", { cx: "5", cy: "12", r: "1" }],
    ["circle", { cx: "12", cy: "19", r: "1" }],
    ["circle", { cx: "19", cy: "19", r: "1" }],
    ["circle", { cx: "5", cy: "19", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Group = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2" }],
    ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2" }],
    ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2" }],
    ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2" }],
    ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1" }],
    ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Guitar = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m11.9 12.1 4.514-4.514" }],
    [
      "path",
      {
        d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"
      }
    ],
    ["path", { d: "m6 16 2 2" }],
    [
      "path",
      {
        d: "M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"
      }
    ],
    ["circle", { cx: "11.5", cy: "12.5", r: ".5", fill: "currentColor" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ham = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" }],
    [
      "path",
      { d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" }
    ],
    [
      "path",
      {
        d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"
      }
    ],
    ["path", { d: "m8.5 16.5-1-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Hammer = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" }],
    ["path", { d: "m18 15 4-4" }],
    [
      "path",
      {
        d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HandCoins = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }],
    [
      "path",
      {
        d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
      }
    ],
    ["path", { d: "m2 16 6 6" }],
    ["circle", { cx: "16", cy: "9", r: "2.9" }],
    ["circle", { cx: "6", cy: "5", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HandHeart = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" }],
    [
      "path",
      {
        d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
      }
    ],
    ["path", { d: "m2 15 6 6" }],
    [
      "path",
      {
        d: "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HandHelping = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" }],
    [
      "path",
      {
        d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
      }
    ],
    ["path", { d: "m2 13 6 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HandMetal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }],
    ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2" }],
    ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9" }],
    [
      "path",
      {
        d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HandPlatter = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 3V2" }],
    ["path", { d: "M5 10a7.1 7.1 0 0 1 14 0" }],
    ["path", { d: "M4 10h16" }],
    ["path", { d: "M2 14h12a2 2 0 1 1 0 4h-2" }],
    [
      "path",
      {
        d: "m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18"
      }
    ],
    ["path", { d: "M5 14v7H2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Hand = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
    ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }],
    ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }],
    [
      "path",
      {
        d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Handshake = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3" }],
    [
      "path",
      {
        d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
      }
    ],
    ["path", { d: "m21 3 1 11h-2" }],
    ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }],
    ["path", { d: "M3 4h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HardDriveDownload = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2v8" }],
    ["path", { d: "m16 6-4 4-4-4" }],
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
    ["path", { d: "M6 18h.01" }],
    ["path", { d: "M10 18h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HardDriveUpload = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m16 6-4-4-4 4" }],
    ["path", { d: "M12 2v8" }],
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
    ["path", { d: "M6 18h.01" }],
    ["path", { d: "M10 18h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HardDrive = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "22", x2: "2", y1: "12", y2: "12" }],
    [
      "path",
      {
        d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    ],
    ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16" }],
    ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HardHat = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" }],
    ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }],
    ["path", { d: "M4 15v-3a6 6 0 0 1 6-6" }],
    ["path", { d: "M14 6a6 6 0 0 1 6 6v3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Hash = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "4", x2: "20", y1: "9", y2: "9" }],
    ["line", { x1: "4", x2: "20", y1: "15", y2: "15" }],
    ["line", { x1: "10", x2: "8", y1: "3", y2: "21" }],
    ["line", { x1: "16", x2: "14", y1: "3", y2: "21" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Haze = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m5.2 6.2 1.4 1.4" }],
    ["path", { d: "M2 13h2" }],
    ["path", { d: "M20 13h2" }],
    ["path", { d: "m17.4 7.6 1.4-1.4" }],
    ["path", { d: "M22 17H2" }],
    ["path", { d: "M22 21H2" }],
    ["path", { d: "M16 13a4 4 0 0 0-8 0" }],
    ["path", { d: "M12 5V2.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HdmiPort = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" }
    ],
    ["path", { d: "M7.5 12h9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Heading1 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 12h8" }],
    ["path", { d: "M4 18V6" }],
    ["path", { d: "M12 18V6" }],
    ["path", { d: "m17 12 3-2v8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Heading2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 12h8" }],
    ["path", { d: "M4 18V6" }],
    ["path", { d: "M12 18V6" }],
    ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Heading3 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 12h8" }],
    ["path", { d: "M4 18V6" }],
    ["path", { d: "M12 18V6" }],
    ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }],
    ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Heading4 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 12h8" }],
    ["path", { d: "M4 18V6" }],
    ["path", { d: "M12 18V6" }],
    ["path", { d: "M17 10v4h4" }],
    ["path", { d: "M21 10v8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Heading5 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 12h8" }],
    ["path", { d: "M4 18V6" }],
    ["path", { d: "M12 18V6" }],
    ["path", { d: "M17 13v-3h4" }],
    ["path", { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Heading6 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 12h8" }],
    ["path", { d: "M4 18V6" }],
    ["path", { d: "M12 18V6" }],
    ["circle", { cx: "19", cy: "16", r: "2" }],
    ["path", { d: "M20 10c-2 2-3 3.5-3 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Heading = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 12h12" }],
    ["path", { d: "M6 20V4" }],
    ["path", { d: "M18 20V4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HeadphoneOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 14h-1.343" }],
    ["path", { d: "M9.128 3.47A9 9 0 0 1 21 12v3.343" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" }],
    [
      "path",
      { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Headphones = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Headset = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"
      }
    ],
    ["path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HeartCrack = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ],
    ["path", { d: "m12 13-1-1 2-2-3-3 2-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HeartHandshake = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ],
    [
      "path",
      {
        d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
      }
    ],
    ["path", { d: "m18 15-2-2" }],
    ["path", { d: "m15 18-2-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HeartOff = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "2", y1: "2", x2: "22", y2: "22" }],
    ["path", { d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35" }],
    [
      "path",
      {
        d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HeartPulse = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ],
    ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Heart = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Heater = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 8c2-3-2-3 0-6" }],
    ["path", { d: "M15.5 8c2-3-2-3 0-6" }],
    ["path", { d: "M6 10h.01" }],
    ["path", { d: "M6 14h.01" }],
    ["path", { d: "M10 16v-4" }],
    ["path", { d: "M14 16v-4" }],
    ["path", { d: "M18 16v-4" }],
    ["path", { d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" }],
    ["path", { d: "M5 20v2" }],
    ["path", { d: "M19 20v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Hexagon = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Highlighter = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m9 11-6 6v3h9l3-3" }],
    ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const History = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
    ["path", { d: "M3 3v5h5" }],
    ["path", { d: "M12 7v5l4 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HopOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" }],
    [
      "path",
      { d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28" }
    ],
    ["path", { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" }],
    [
      "path",
      { d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25" }
    ],
    ["path", { d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" }],
    [
      "path",
      {
        d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"
      }
    ],
    [
      "path",
      { d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28" }
    ],
    ["path", { d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Hop = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" }
    ],
    [
      "path",
      {
        d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"
      }
    ],
    [
      "path",
      { d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" }
    ],
    [
      "path",
      { d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" }
    ],
    [
      "path",
      { d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" }
    ],
    [
      "path",
      { d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" }
    ],
    ["path", { d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1" }],
    [
      "path",
      {
        d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Hospital = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 6v4" }],
    ["path", { d: "M14 14h-4" }],
    ["path", { d: "M14 18h-4" }],
    ["path", { d: "M14 8h-4" }],
    ["path", { d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Hotel = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 22v-6.57" }],
    ["path", { d: "M12 11h.01" }],
    ["path", { d: "M12 7h.01" }],
    ["path", { d: "M14 15.43V22" }],
    ["path", { d: "M15 16a5 5 0 0 0-6 0" }],
    ["path", { d: "M16 11h.01" }],
    ["path", { d: "M16 7h.01" }],
    ["path", { d: "M8 11h.01" }],
    ["path", { d: "M8 7h.01" }],
    ["rect", { x: "4", y: "2", width: "16", height: "20", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Hourglass = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 22h14" }],
    ["path", { d: "M5 2h14" }],
    ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" }],
    ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HousePlug = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 12V8.964" }],
    ["path", { d: "M14 12V8.964" }],
    ["path", { d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" }],
    [
      "path",
      {
        d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const HousePlus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"
      }
    ],
    ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }],
    ["path", { d: "M15 6h6" }],
    ["path", { d: "M18 3v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const House = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const IceCreamBowl = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" }
    ],
    ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0" }],
    ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const IceCreamCone = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }],
    ["path", { d: "M17 7A5 5 0 0 0 7 7" }],
    ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const IdCard = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 10h2" }],
    ["path", { d: "M16 14h2" }],
    ["path", { d: "M6.17 15a3 3 0 0 1 5.66 0" }],
    ["circle", { cx: "9", cy: "11", r: "2" }],
    ["rect", { x: "2", y: "5", width: "20", height: "14", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ImageDown = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
      }
    ],
    ["path", { d: "m14 19 3 3v-5.5" }],
    ["path", { d: "m17 22 3-3" }],
    ["circle", { cx: "9", cy: "9", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ImageMinus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }],
    ["line", { x1: "16", x2: "22", y1: "5", y2: "5" }],
    ["circle", { cx: "9", cy: "9", r: "2" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ImageOff = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
    ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83" }],
    ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21" }],
    ["line", { x1: "18", x2: "21", y1: "12", y2: "15" }],
    ["path", { d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" }],
    ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ImagePlay = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m11 16-5 5" }],
    ["path", { d: "M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5" }],
    [
      "path",
      {
        d: "M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
      }
    ],
    ["circle", { cx: "9", cy: "9", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ImagePlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 5h6" }],
    ["path", { d: "M19 2v6" }],
    ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }],
    ["circle", { cx: "9", cy: "9", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ImageUp = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
      }
    ],
    ["path", { d: "m14 19.5 3-3 3 3" }],
    ["path", { d: "M17 22v-5.5" }],
    ["circle", { cx: "9", cy: "9", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Image = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["circle", { cx: "9", cy: "9", r: "2" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Images = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }],
    ["path", { d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" }],
    ["circle", { cx: "12", cy: "8", r: "2" }],
    ["rect", { width: "16", height: "16", x: "6", y: "2", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Import = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 3v12" }],
    ["path", { d: "m8 11 4 4 4-4" }],
    ["path", { d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Inbox = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12" }],
    [
      "path",
      {
        d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const IndentDecrease = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "7 8 3 12 7 16" }],
    ["line", { x1: "21", x2: "11", y1: "12", y2: "12" }],
    ["line", { x1: "21", x2: "11", y1: "6", y2: "6" }],
    ["line", { x1: "21", x2: "11", y1: "18", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const IndentIncrease = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "3 8 7 12 3 16" }],
    ["line", { x1: "21", x2: "11", y1: "12", y2: "12" }],
    ["line", { x1: "21", x2: "11", y1: "6", y2: "6" }],
    ["line", { x1: "21", x2: "11", y1: "18", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const IndianRupee = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 3h12" }],
    ["path", { d: "M6 8h12" }],
    ["path", { d: "m6 13 8.5 8" }],
    ["path", { d: "M6 13h3" }],
    ["path", { d: "M9 13c6.667 0 6.667-10 0-10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Infinity = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Info = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M12 16v-4" }],
    ["path", { d: "M12 8h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const InspectionPanel = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M7 7h.01" }],
    ["path", { d: "M17 7h.01" }],
    ["path", { d: "M7 17h.01" }],
    ["path", { d: "M17 17h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Instagram = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }],
    ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Italic = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "19", x2: "10", y1: "4", y2: "4" }],
    ["line", { x1: "14", x2: "5", y1: "20", y2: "20" }],
    ["line", { x1: "15", x2: "9", y1: "4", y2: "20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const IterationCcw = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8" }],
    ["polyline", { points: "16 14 20 18 16 22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const IterationCw = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4" }],
    ["polyline", { points: "8 22 4 18 8 14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const JapaneseYen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3" }],
    ["path", { d: "M6 15h12" }],
    ["path", { d: "M6 11h12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Joystick = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" }],
    ["path", { d: "M6 15v-2" }],
    ["path", { d: "M12 15V9" }],
    ["circle", { cx: "12", cy: "6", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Kanban = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 5v11" }],
    ["path", { d: "M12 5v6" }],
    ["path", { d: "M18 5v14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const KeyRound = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      }
    ],
    ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const KeySquare = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"
      }
    ],
    ["path", { d: "m14 7 3 3" }],
    [
      "path",
      {
        d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Key = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" }],
    ["path", { d: "m21 2-9.6 9.6" }],
    ["circle", { cx: "7.5", cy: "15.5", r: "5.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const KeyboardMusic = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
    ["path", { d: "M6 8h4" }],
    ["path", { d: "M14 8h.01" }],
    ["path", { d: "M18 8h.01" }],
    ["path", { d: "M2 12h20" }],
    ["path", { d: "M6 12v4" }],
    ["path", { d: "M10 12v4" }],
    ["path", { d: "M14 12v4" }],
    ["path", { d: "M18 12v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const KeyboardOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M 20 4 A2 2 0 0 1 22 6" }],
    ["path", { d: "M 22 6 L 22 16.41" }],
    ["path", { d: "M 7 16 L 16 16" }],
    ["path", { d: "M 9.69 4 L 20 4" }],
    ["path", { d: "M14 8h.01" }],
    ["path", { d: "M18 8h.01" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }],
    ["path", { d: "M6 8h.01" }],
    ["path", { d: "M8 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Keyboard = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 8h.01" }],
    ["path", { d: "M12 12h.01" }],
    ["path", { d: "M14 8h.01" }],
    ["path", { d: "M16 12h.01" }],
    ["path", { d: "M18 8h.01" }],
    ["path", { d: "M6 8h.01" }],
    ["path", { d: "M7 16h10" }],
    ["path", { d: "M8 12h.01" }],
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LampCeiling = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2v5" }],
    ["path", { d: "M6 7h12l4 9H2l4-9Z" }],
    ["path", { d: "M9.17 16a3 3 0 1 0 5.66 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LampDesk = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m14 5-3 3 2 7 8-8-7-2Z" }],
    ["path", { d: "m14 5-3 3-3-3 3-3 3 3Z" }],
    ["path", { d: "M9.5 6.5 4 12l3 6" }],
    ["path", { d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LampFloor = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 2h6l3 7H6l3-7Z" }],
    ["path", { d: "M12 9v13" }],
    ["path", { d: "M9 22h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LampWallDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 13h6l3 7H8l3-7Z" }],
    ["path", { d: "M14 13V8a2 2 0 0 0-2-2H8" }],
    ["path", { d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LampWallUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 4h6l3 7H8l3-7Z" }],
    ["path", { d: "M14 11v5a2 2 0 0 1-2 2H8" }],
    ["path", { d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Lamp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2h8l4 10H4L8 2Z" }],
    ["path", { d: "M12 12v6" }],
    ["path", { d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LandPlot = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m12 8 6-3-6-3v10" }],
    [
      "path",
      {
        d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"
      }
    ],
    ["path", { d: "m6.49 12.85 11.02 6.3" }],
    ["path", { d: "M17.51 12.85 6.5 19.15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Landmark = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "3", x2: "21", y1: "22", y2: "22" }],
    ["line", { x1: "6", x2: "6", y1: "18", y2: "11" }],
    ["line", { x1: "10", x2: "10", y1: "18", y2: "11" }],
    ["line", { x1: "14", x2: "14", y1: "18", y2: "11" }],
    ["line", { x1: "18", x2: "18", y1: "18", y2: "11" }],
    ["polygon", { points: "12 2 20 7 4 7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Languages = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m5 8 6 6" }],
    ["path", { d: "m4 14 6-6 2-3" }],
    ["path", { d: "M2 5h12" }],
    ["path", { d: "M7 2h1" }],
    ["path", { d: "m22 22-5-10-5 10" }],
    ["path", { d: "M14 18h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LaptopMinimal = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2" }],
    ["line", { x1: "2", x2: "22", y1: "20", y2: "20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Laptop = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LassoSelect = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 22a5 5 0 0 1-2-4" }],
    ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91" }],
    [
      "path",
      { d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" }
    ],
    ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }],
    [
      "path",
      {
        d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Lasso = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 22a5 5 0 0 1-2-4" }],
    [
      "path",
      { d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1" }
    ],
    ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Laugh = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" }],
    ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
    ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Layers2 = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"
      }
    ],
    [
      "path",
      {
        d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Layers3 = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
      }
    ],
    [
      "path",
      {
        d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
      }
    ],
    [
      "path",
      {
        d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Layers = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
      }
    ],
    ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" }],
    ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LayoutDashboard = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1" }],
    ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1" }],
    ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1" }],
    ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LayoutGrid = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
    ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
    ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LayoutList = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1" }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }],
    ["path", { d: "M14 4h7" }],
    ["path", { d: "M14 9h7" }],
    ["path", { d: "M14 15h7" }],
    ["path", { d: "M14 20h7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LayoutPanelLeft = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1" }],
    ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1" }],
    ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LayoutPanelTop = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }],
    ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1" }],
    ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LayoutTemplate = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1" }],
    ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1" }],
    ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Leaf = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }
    ],
    ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LeafyGreen = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"
      }
    ],
    ["path", { d: "M2 22 17 7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Lectern = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"
      }
    ],
    ["path", { d: "M18 6V3a1 1 0 0 0-1-1h-3" }],
    ["rect", { width: "8", height: "12", x: "8", y: "10", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LetterText = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 12h6" }],
    ["path", { d: "M15 6h6" }],
    ["path", { d: "m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" }],
    ["path", { d: "M3 18h18" }],
    ["path", { d: "M4 11h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LibraryBig = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1" }],
    ["path", { d: "M7 3v18" }],
    [
      "path",
      {
        d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Library = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m16 6 4 14" }],
    ["path", { d: "M12 6v14" }],
    ["path", { d: "M8 8v12" }],
    ["path", { d: "M4 4v16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LifeBuoy = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "m4.93 4.93 4.24 4.24" }],
    ["path", { d: "m14.83 9.17 4.24-4.24" }],
    ["path", { d: "m14.83 14.83 4.24 4.24" }],
    ["path", { d: "m9.17 14.83-4.24 4.24" }],
    ["circle", { cx: "12", cy: "12", r: "4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ligature = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" }],
    ["path", { d: "M6 12h4" }],
    ["path", { d: "M14 12h2v8" }],
    ["path", { d: "M6 20h4" }],
    ["path", { d: "M14 20h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LightbulbOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" }],
    ["path", { d: "M9 18h6" }],
    ["path", { d: "M10 22h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Lightbulb = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
      }
    ],
    ["path", { d: "M9 18h6" }],
    ["path", { d: "M10 22h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Link2Off = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 17H7A5 5 0 0 1 7 7" }],
    ["path", { d: "M15 7h2a5 5 0 0 1 4 8" }],
    ["line", { x1: "8", x2: "12", y1: "12", y2: "12" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Link2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2" }],
    ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2" }],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Link = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }],
    ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Linkedin = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9" }],
    ["circle", { cx: "4", cy: "4", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 18H3" }],
    ["path", { d: "m15 18 2 2 4-4" }],
    ["path", { d: "M16 12H3" }],
    ["path", { d: "M16 6H3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListChecks = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 17 2 2 4-4" }],
    ["path", { d: "m3 7 2 2 4-4" }],
    ["path", { d: "M13 6h8" }],
    ["path", { d: "M13 12h8" }],
    ["path", { d: "M13 18h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListCollapse = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 10 2.5-2.5L3 5" }],
    ["path", { d: "m3 19 2.5-2.5L3 14" }],
    ["path", { d: "M10 6h11" }],
    ["path", { d: "M10 12h11" }],
    ["path", { d: "M10 18h11" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListEnd = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 12H3" }],
    ["path", { d: "M16 6H3" }],
    ["path", { d: "M10 18H3" }],
    ["path", { d: "M21 6v10a2 2 0 0 1-2 2h-5" }],
    ["path", { d: "m16 16-2 2 2 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListFilter = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 6h18" }],
    ["path", { d: "M7 12h10" }],
    ["path", { d: "M10 18h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListMinus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 12H3" }],
    ["path", { d: "M16 6H3" }],
    ["path", { d: "M16 18H3" }],
    ["path", { d: "M21 12h-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListMusic = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15V6" }],
    ["path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }],
    ["path", { d: "M12 12H3" }],
    ["path", { d: "M16 6H3" }],
    ["path", { d: "M12 18H3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListOrdered = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "10", x2: "21", y1: "6", y2: "6" }],
    ["line", { x1: "10", x2: "21", y1: "12", y2: "12" }],
    ["line", { x1: "10", x2: "21", y1: "18", y2: "18" }],
    ["path", { d: "M4 6h1v4" }],
    ["path", { d: "M4 10h2" }],
    ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 12H3" }],
    ["path", { d: "M16 6H3" }],
    ["path", { d: "M16 18H3" }],
    ["path", { d: "M18 9v6" }],
    ["path", { d: "M21 12h-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListRestart = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 6H3" }],
    ["path", { d: "M7 12H3" }],
    ["path", { d: "M7 18H3" }],
    ["path", { d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" }],
    ["path", { d: "M11 10v4h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListStart = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 12H3" }],
    ["path", { d: "M16 18H3" }],
    ["path", { d: "M10 6H3" }],
    ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5" }],
    ["path", { d: "m16 8-2-2 2-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListTodo = [
  "svg",
  defaultAttributes,
  [
    ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1" }],
    ["path", { d: "m3 17 2 2 4-4" }],
    ["path", { d: "M13 6h8" }],
    ["path", { d: "M13 12h8" }],
    ["path", { d: "M13 18h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListTree = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 12h-8" }],
    ["path", { d: "M21 6H8" }],
    ["path", { d: "M21 18h-8" }],
    ["path", { d: "M3 6v4c0 1.1.9 2 2 2h3" }],
    ["path", { d: "M3 10v6c0 1.1.9 2 2 2h3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListVideo = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 12H3" }],
    ["path", { d: "M16 6H3" }],
    ["path", { d: "M12 18H3" }],
    ["path", { d: "m16 12 5 3-5 3v-6Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ListX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 12H3" }],
    ["path", { d: "M16 6H3" }],
    ["path", { d: "M16 18H3" }],
    ["path", { d: "m19 10-4 4" }],
    ["path", { d: "m15 10 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const List = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "8", x2: "21", y1: "6", y2: "6" }],
    ["line", { x1: "8", x2: "21", y1: "12", y2: "12" }],
    ["line", { x1: "8", x2: "21", y1: "18", y2: "18" }],
    ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6" }],
    ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12" }],
    ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LoaderCircle = [
  "svg",
  defaultAttributes,
  [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LoaderPinwheel = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" }],
    ["path", { d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" }],
    ["path", { d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" }],
    ["circle", { cx: "12", cy: "12", r: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Loader = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2v4" }],
    ["path", { d: "m16.2 7.8 2.9-2.9" }],
    ["path", { d: "M18 12h4" }],
    ["path", { d: "m16.2 16.2 2.9 2.9" }],
    ["path", { d: "M12 18v4" }],
    ["path", { d: "m4.9 19.1 2.9-2.9" }],
    ["path", { d: "M2 12h4" }],
    ["path", { d: "m4.9 4.9 2.9 2.9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LocateFixed = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
    ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
    ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
    ["circle", { cx: "12", cy: "12", r: "7" }],
    ["circle", { cx: "12", cy: "12", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LocateOff = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
    ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
    ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
    ["path", { d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11" }],
    ["path", { d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Locate = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "2", x2: "5", y1: "12", y2: "12" }],
    ["line", { x1: "19", x2: "22", y1: "12", y2: "12" }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "5" }],
    ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }],
    ["circle", { cx: "12", cy: "12", r: "7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LockKeyholeOpen = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "16", r: "1" }],
    ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2" }],
    ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LockKeyhole = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "16", r: "1" }],
    ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2" }],
    ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LockOpen = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Lock = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LogIn = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }],
    ["polyline", { points: "10 17 15 12 10 7" }],
    ["line", { x1: "15", x2: "3", y1: "12", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const LogOut = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }],
    ["polyline", { points: "16 17 21 12 16 7" }],
    ["line", { x1: "21", x2: "9", y1: "12", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Logs = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 12h8" }],
    ["path", { d: "M13 18h8" }],
    ["path", { d: "M13 6h8" }],
    ["path", { d: "M3 12h1" }],
    ["path", { d: "M3 18h1" }],
    ["path", { d: "M3 6h1" }],
    ["path", { d: "M8 12h1" }],
    ["path", { d: "M8 18h1" }],
    ["path", { d: "M8 6h1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Lollipop = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "11", cy: "11", r: "8" }],
    ["path", { d: "m21 21-4.3-4.3" }],
    ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Luggage = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }],
    ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }],
    ["path", { d: "M10 20h4" }],
    ["circle", { cx: "16", cy: "20", r: "2" }],
    ["circle", { cx: "8", cy: "20", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Magnet = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"
      }
    ],
    ["path", { d: "m5 8 4 4" }],
    ["path", { d: "m12 15 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MailCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
    ["path", { d: "m16 19 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MailMinus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
    ["path", { d: "M16 19h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MailOpen = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
      }
    ],
    ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MailPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
    ["path", { d: "M19 16v6" }],
    ["path", { d: "M16 19h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MailQuestion = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
    ["path", { d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" }],
    ["path", { d: "M20 22v.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MailSearch = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
    ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }],
    ["circle", { cx: "18", cy: "18", r: "3" }],
    ["path", { d: "m22 22-1.5-1.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MailWarning = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
    ["path", { d: "M20 14v4" }],
    ["path", { d: "M20 22v.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MailX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }],
    ["path", { d: "m17 17 4 4" }],
    ["path", { d: "m21 17-4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Mail = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Mailbox = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" }],
    ["polyline", { points: "15,9 18,9 18,11" }],
    ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" }],
    ["line", { x1: "6", x2: "7", y1: "10", y2: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Mails = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "13", x: "6", y: "4", rx: "2" }],
    ["path", { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" }],
    ["path", { d: "M2 8v11c0 1.1.9 2 2 2h14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPinCheckInside = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    ["path", { d: "m9 10 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPinCheck = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"
      }
    ],
    ["circle", { cx: "12", cy: "10", r: "3" }],
    ["path", { d: "m16 18 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPinHouse = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"
      }
    ],
    ["path", { d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" }],
    ["path", { d: "M18 22v-3" }],
    ["circle", { cx: "10", cy: "10", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPinMinusInside = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    ["path", { d: "M9 10h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPinMinus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
      }
    ],
    ["circle", { cx: "12", cy: "10", r: "3" }],
    ["path", { d: "M16 18h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPinOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12.75 7.09a3 3 0 0 1 2.16 2.16" }],
    [
      "path",
      {
        d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"
      }
    ],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" }],
    ["path", { d: "M9.13 9.13a3 3 0 0 0 3.74 3.74" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPinPlusInside = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    ["path", { d: "M12 7v6" }],
    ["path", { d: "M9 10h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPinPlus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
      }
    ],
    ["circle", { cx: "12", cy: "10", r: "3" }],
    ["path", { d: "M16 18h6" }],
    ["path", { d: "M19 15v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPinXInside = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    ["path", { d: "m14.5 7.5-5 5" }],
    ["path", { d: "m9.5 7.5 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPinX = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"
      }
    ],
    ["circle", { cx: "12", cy: "10", r: "3" }],
    ["path", { d: "m21.5 15.5-5 5" }],
    ["path", { d: "m21.5 20.5-5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPin = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    ["circle", { cx: "12", cy: "10", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MapPinned = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
      }
    ],
    ["circle", { cx: "12", cy: "8", r: "2" }],
    [
      "path",
      {
        d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Map = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
      }
    ],
    ["path", { d: "M15 5.764v15" }],
    ["path", { d: "M9 3.236v15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Martini = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 22h8" }],
    ["path", { d: "M12 11v11" }],
    ["path", { d: "m19 3-7 8-7-8Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Maximize2 = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "15 3 21 3 21 9" }],
    ["polyline", { points: "9 21 3 21 3 15" }],
    ["line", { x1: "21", x2: "14", y1: "3", y2: "10" }],
    ["line", { x1: "3", x2: "10", y1: "21", y2: "14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Maximize = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }],
    ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }],
    ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }],
    ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Medal = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
      }
    ],
    ["path", { d: "M11 12 5.12 2.2" }],
    ["path", { d: "m13 12 5.88-9.8" }],
    ["path", { d: "M8 7h8" }],
    ["circle", { cx: "12", cy: "17", r: "5" }],
    ["path", { d: "M12 18v-2h-.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MegaphoneOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9.26 9.26 3 11v3l14.14 3.14" }],
    ["path", { d: "M21 15.34V6l-7.31 2.03" }],
    ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Megaphone = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m3 11 18-5v12L3 14v-3z" }],
    ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Meh = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["line", { x1: "8", x2: "16", y1: "15", y2: "15" }],
    ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
    ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MemoryStick = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 19v-3" }],
    ["path", { d: "M10 19v-3" }],
    ["path", { d: "M14 19v-3" }],
    ["path", { d: "M18 19v-3" }],
    ["path", { d: "M8 11V9" }],
    ["path", { d: "M16 11V9" }],
    ["path", { d: "M12 11V9" }],
    ["path", { d: "M2 15h20" }],
    [
      "path",
      {
        d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Menu = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Merge = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m8 6 4-4 4 4" }],
    ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }],
    ["path", { d: "m20 22-5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageCircleCode = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 9.5 8 12l2 2.5" }],
    ["path", { d: "m14 9.5 2 2.5-2 2.5" }],
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageCircleDashed = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" }],
    ["path", { d: "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" }],
    ["path", { d: "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" }],
    ["path", { d: "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" }],
    ["path", { d: "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" }],
    ["path", { d: "M3.5 17.5 2 22l4.5-1.5" }],
    ["path", { d: "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" }],
    ["path", { d: "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageCircleHeart = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
    [
      "path",
      {
        d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageCircleMore = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
    ["path", { d: "M8 12h.01" }],
    ["path", { d: "M12 12h.01" }],
    ["path", { d: "M16 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageCircleOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20.5 14.9A9 9 0 0 0 9.1 3.5" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageCirclePlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
    ["path", { d: "M8 12h8" }],
    ["path", { d: "M12 8v8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageCircleQuestion = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
    ["path", { d: "M12 17h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageCircleReply = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
    ["path", { d: "m10 15-3-3 3-3" }],
    ["path", { d: "M7 12h7a2 2 0 0 1 2 2v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageCircleWarning = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
    ["path", { d: "M12 8v4" }],
    ["path", { d: "M12 16h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageCircleX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }],
    ["path", { d: "m15 9-6 6" }],
    ["path", { d: "m9 9 6 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageCircle = [
  "svg",
  defaultAttributes,
  [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareCode = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 7.5 8 10l2 2.5" }],
    ["path", { d: "m14 7.5 2 2.5-2 2.5" }],
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareDashed = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 17H7l-4 4v-7" }],
    ["path", { d: "M14 17h1" }],
    ["path", { d: "M14 3h1" }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
    ["path", { d: "M21 14v1a2 2 0 0 1-2 2" }],
    ["path", { d: "M21 9v1" }],
    ["path", { d: "M3 9v1" }],
    ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
    ["path", { d: "M9 3h1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareDiff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }],
    ["path", { d: "M9 10h6" }],
    ["path", { d: "M12 7v6" }],
    ["path", { d: "M9 17h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareDot = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7" }],
    ["circle", { cx: "18", cy: "6", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareHeart = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
    [
      "path",
      {
        d: "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareLock = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M19 15v-2a2 2 0 1 0-4 0v2" }],
    ["path", { d: "M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5" }],
    ["rect", { x: "13", y: "15", width: "8", height: "5", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareMore = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
    ["path", { d: "M8 10h.01" }],
    ["path", { d: "M12 10h.01" }],
    ["path", { d: "M16 10h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquarePlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
    ["path", { d: "M12 7v6" }],
    ["path", { d: "M9 10h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareQuote = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
    ["path", { d: "M8 12a2 2 0 0 0 2-2V8H8" }],
    ["path", { d: "M14 12a2 2 0 0 0 2-2V8h-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareReply = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
    ["path", { d: "m10 7-3 3 3 3" }],
    ["path", { d: "M17 13v-1a2 2 0 0 0-2-2H7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareShare = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7" }],
    ["path", { d: "M16 3h5v5" }],
    ["path", { d: "m16 8 5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareText = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
    ["path", { d: "M13 8H7" }],
    ["path", { d: "M17 12H7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareWarning = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
    ["path", { d: "M12 7v2" }],
    ["path", { d: "M12 13h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquareX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }],
    ["path", { d: "m14.5 7.5-5 5" }],
    ["path", { d: "m9.5 7.5 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessageSquare = [
  "svg",
  defaultAttributes,
  [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MessagesSquare = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" }],
    ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MicOff = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }],
    ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" }],
    ["path", { d: "M5 10v2a7 7 0 0 0 12 5" }],
    ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33" }],
    ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12" }],
    ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MicVocal = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" }
    ],
    [
      "path",
      {
        d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"
      }
    ],
    ["circle", { cx: "16", cy: "7", r: "5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Mic = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }],
    ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }],
    ["line", { x1: "12", x2: "12", y1: "19", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Microchip = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 12h2" }],
    ["path", { d: "M18 16h2" }],
    ["path", { d: "M18 20h2" }],
    ["path", { d: "M18 4h2" }],
    ["path", { d: "M18 8h2" }],
    ["path", { d: "M4 12h2" }],
    ["path", { d: "M4 16h2" }],
    ["path", { d: "M4 20h2" }],
    ["path", { d: "M4 4h2" }],
    ["path", { d: "M4 8h2" }],
    [
      "path",
      {
        d: "M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Microscope = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 18h8" }],
    ["path", { d: "M3 22h18" }],
    ["path", { d: "M14 22a7 7 0 1 0 0-14h-1" }],
    ["path", { d: "M9 14h2" }],
    ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }],
    ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Microwave = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2" }],
    ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1" }],
    ["path", { d: "M18 8v7" }],
    ["path", { d: "M6 19v2" }],
    ["path", { d: "M18 19v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Milestone = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 13v8" }],
    ["path", { d: "M12 3v3" }],
    [
      "path",
      {
        d: "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MilkOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2h8" }],
    [
      "path",
      {
        d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"
      }
    ],
    ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Milk = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2h8" }],
    [
      "path",
      {
        d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
      }
    ],
    ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Minimize2 = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "4 14 10 14 10 20" }],
    ["polyline", { points: "20 10 14 10 14 4" }],
    ["line", { x1: "14", x2: "21", y1: "10", y2: "3" }],
    ["line", { x1: "3", x2: "10", y1: "21", y2: "14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Minimize = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }],
    ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }],
    ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }],
    ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Minus = ["svg", defaultAttributes, [["path", { d: "M5 12h14" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m9 10 2 2 4-4" }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
    ["path", { d: "M12 17v4" }],
    ["path", { d: "M8 21h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorCog = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 17v4" }],
    ["path", { d: "m15.2 4.9-.9-.4" }],
    ["path", { d: "m15.2 7.1-.9.4" }],
    ["path", { d: "m16.9 3.2-.4-.9" }],
    ["path", { d: "m16.9 8.8-.4.9" }],
    ["path", { d: "m19.5 2.3-.4.9" }],
    ["path", { d: "m19.5 9.7-.4-.9" }],
    ["path", { d: "m21.7 4.5-.9.4" }],
    ["path", { d: "m21.7 7.5-.9-.4" }],
    ["path", { d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }],
    ["path", { d: "M8 21h8" }],
    ["circle", { cx: "18", cy: "6", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorDot = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "19", cy: "6", r: "3" }],
    ["path", { d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" }],
    ["path", { d: "M12 17v4" }],
    ["path", { d: "M8 21h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 13V7" }],
    ["path", { d: "m15 10-3 3-3-3" }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
    ["path", { d: "M12 17v4" }],
    ["path", { d: "M8 21h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" }],
    ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9" }],
    ["path", { d: "M8 21h8" }],
    ["path", { d: "M12 17v4" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorPause = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 13V7" }],
    ["path", { d: "M14 13V7" }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
    ["path", { d: "M12 17v4" }],
    ["path", { d: "M8 21h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorPlay = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
      }
    ],
    ["path", { d: "M12 17v4" }],
    ["path", { d: "M8 21h8" }],
    ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorSmartphone = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }],
    ["path", { d: "M10 19v-3.96 3.15" }],
    ["path", { d: "M7 19h5" }],
    ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorSpeaker = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5.5 20H8" }],
    ["path", { d: "M17 9h.01" }],
    ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2" }],
    ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }],
    ["circle", { cx: "17", cy: "15", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorStop = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 17v4" }],
    ["path", { d: "M8 21h8" }],
    ["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }],
    ["rect", { x: "9", y: "7", width: "6", height: "6", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m9 10 3-3 3 3" }],
    ["path", { d: "M12 13V7" }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
    ["path", { d: "M12 17v4" }],
    ["path", { d: "M8 21h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MonitorX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m14.5 12.5-5-5" }],
    ["path", { d: "m9.5 12.5 5-5" }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
    ["path", { d: "M12 17v4" }],
    ["path", { d: "M8 21h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Monitor = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoonStar = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" }],
    ["path", { d: "M20 3v4" }],
    ["path", { d: "M22 5h-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Moon = [
  "svg",
  defaultAttributes,
  [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MountainSnow = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }],
    ["path", { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Mountain = [
  "svg",
  defaultAttributes,
  [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MouseOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 6v.343" }],
    ["path", { d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" }],
    ["path", { d: "M19 13.343V9A7 7 0 0 0 8.56 2.902" }],
    ["path", { d: "M22 22 2 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MousePointer2 = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MousePointerBan = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"
      }
    ],
    ["circle", { cx: "16", cy: "16", r: "6" }],
    ["path", { d: "m11.8 11.8 8.4 8.4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MousePointerClick = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 4.1 12 6" }],
    ["path", { d: "m5.1 8-2.9-.8" }],
    ["path", { d: "m6 12-1.9 2" }],
    ["path", { d: "M7.2 2.2 8 5.1" }],
    [
      "path",
      {
        d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MousePointer = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12.586 12.586 19 19" }],
    [
      "path",
      {
        d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Mouse = [
  "svg",
  defaultAttributes,
  [
    ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7" }],
    ["path", { d: "M12 6v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Move3d = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 3v16h16" }],
    ["path", { d: "m5 19 6-6" }],
    ["path", { d: "m2 6 3-3 3 3" }],
    ["path", { d: "m18 16 3 3-3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveDiagonal2 = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "5 11 5 5 11 5" }],
    ["polyline", { points: "19 13 19 19 13 19" }],
    ["line", { x1: "5", x2: "19", y1: "5", y2: "19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveDiagonal = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "13 5 19 5 19 11" }],
    ["polyline", { points: "11 19 5 19 5 13" }],
    ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveDownLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 19H5V13" }],
    ["path", { d: "M19 5L5 19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveDownRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M19 13V19H13" }],
    ["path", { d: "M5 5L19 19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 18L12 22L16 18" }],
    ["path", { d: "M12 2V22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "18 8 22 12 18 16" }],
    ["polyline", { points: "6 8 2 12 6 16" }],
    ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 8L2 12L6 16" }],
    ["path", { d: "M2 12H22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 8L22 12L18 16" }],
    ["path", { d: "M2 12H22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveUpLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 11V5H11" }],
    ["path", { d: "M5 5L19 19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveUpRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 5H19V11" }],
    ["path", { d: "M19 5L5 19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 6L12 2L16 6" }],
    ["path", { d: "M12 2V22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const MoveVertical = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "8 18 12 22 16 18" }],
    ["polyline", { points: "8 6 12 2 16 6" }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Move = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "5 9 2 12 5 15" }],
    ["polyline", { points: "9 5 12 2 15 5" }],
    ["polyline", { points: "15 19 12 22 9 19" }],
    ["polyline", { points: "19 9 22 12 19 15" }],
    ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Music2 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "8", cy: "18", r: "4" }],
    ["path", { d: "M12 18V2l7 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Music3 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "18", r: "4" }],
    ["path", { d: "M16 18V2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Music4 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 18V5l12-2v13" }],
    ["path", { d: "m9 9 12-2" }],
    ["circle", { cx: "6", cy: "18", r: "3" }],
    ["circle", { cx: "18", cy: "16", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Music = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 18V5l12-2v13" }],
    ["circle", { cx: "6", cy: "18", r: "3" }],
    ["circle", { cx: "18", cy: "16", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Navigation2Off = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }],
    ["path", { d: "M14.53 8.88 12 2l-1.17 3.17" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Navigation2 = [
  "svg",
  defaultAttributes,
  [["polygon", { points: "12 2 19 21 12 17 5 21 12 2" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const NavigationOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43" }],
    ["path", { d: "M17.39 11.73 22 2l-9.73 4.61" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Navigation = [
  "svg",
  defaultAttributes,
  [["polygon", { points: "3 11 22 2 13 21 11 13 3 11" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Network = [
  "svg",
  defaultAttributes,
  [
    ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1" }],
    ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1" }],
    ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1" }],
    ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }],
    ["path", { d: "M12 12V8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Newspaper = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
      }
    ],
    ["path", { d: "M18 14h-8" }],
    ["path", { d: "M15 18h-5" }],
    ["path", { d: "M10 6h8v4h-8V6Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Nfc = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36" }],
    ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58" }],
    ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" }],
    ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const NotebookPen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" }],
    ["path", { d: "M2 6h4" }],
    ["path", { d: "M2 10h4" }],
    ["path", { d: "M2 14h4" }],
    ["path", { d: "M2 18h4" }],
    [
      "path",
      {
        d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const NotebookTabs = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 6h4" }],
    ["path", { d: "M2 10h4" }],
    ["path", { d: "M2 14h4" }],
    ["path", { d: "M2 18h4" }],
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
    ["path", { d: "M15 2v20" }],
    ["path", { d: "M15 7h5" }],
    ["path", { d: "M15 12h5" }],
    ["path", { d: "M15 17h5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const NotebookText = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 6h4" }],
    ["path", { d: "M2 10h4" }],
    ["path", { d: "M2 14h4" }],
    ["path", { d: "M2 18h4" }],
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
    ["path", { d: "M9.5 8h5" }],
    ["path", { d: "M9.5 12H16" }],
    ["path", { d: "M9.5 16H14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Notebook = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 6h4" }],
    ["path", { d: "M2 10h4" }],
    ["path", { d: "M2 14h4" }],
    ["path", { d: "M2 18h4" }],
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
    ["path", { d: "M16 2v20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const NotepadTextDashed = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M12 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M20 12v2" }],
    ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1" }],
    ["path", { d: "M13 22h-2" }],
    ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2" }],
    ["path", { d: "M4 14v-2" }],
    ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M8 10h6" }],
    ["path", { d: "M8 14h8" }],
    ["path", { d: "M8 18h5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const NotepadText = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 2v4" }],
    ["path", { d: "M12 2v4" }],
    ["path", { d: "M16 2v4" }],
    ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2" }],
    ["path", { d: "M8 10h6" }],
    ["path", { d: "M8 14h8" }],
    ["path", { d: "M8 18h5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const NutOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 4V2" }],
    [
      "path",
      {
        d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"
      }
    ],
    ["path", { d: "M19 10v3.343" }],
    [
      "path",
      {
        d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"
      }
    ],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Nut = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 4V2" }],
    [
      "path",
      {
        d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"
      }
    ],
    [
      "path",
      {
        d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const OctagonAlert = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 16h.01" }],
    ["path", { d: "M12 8v4" }],
    [
      "path",
      {
        d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const OctagonMinus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
      }
    ],
    ["path", { d: "M8 12h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const OctagonPause = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 15V9" }],
    ["path", { d: "M14 15V9" }],
    [
      "path",
      {
        d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const OctagonX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m15 9-6 6" }],
    [
      "path",
      {
        d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
      }
    ],
    ["path", { d: "m9 9 6 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Octagon = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Omega = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Option = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3h6l6 18h6" }],
    ["path", { d: "M14 3h7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Orbit = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "3" }],
    ["circle", { cx: "19", cy: "5", r: "2" }],
    ["circle", { cx: "5", cy: "19", r: "2" }],
    ["path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416" }],
    ["path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Origami = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" }],
    [
      "path",
      { d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" }
    ],
    [
      "path",
      {
        d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Package2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" }],
    ["path", { d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" }],
    ["path", { d: "M12 3v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PackageCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m16 16 2 2 4-4" }],
    [
      "path",
      {
        d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
      }
    ],
    ["path", { d: "m7.5 4.27 9 5.15" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7" }],
    ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PackageMinus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 16h6" }],
    [
      "path",
      {
        d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
      }
    ],
    ["path", { d: "m7.5 4.27 9 5.15" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7" }],
    ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PackageOpen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 22v-9" }],
    [
      "path",
      {
        d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"
      }
    ],
    [
      "path",
      {
        d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"
      }
    ],
    [
      "path",
      {
        d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PackagePlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 16h6" }],
    ["path", { d: "M19 13v6" }],
    [
      "path",
      {
        d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
      }
    ],
    ["path", { d: "m7.5 4.27 9 5.15" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7" }],
    ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PackageSearch = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
      }
    ],
    ["path", { d: "m7.5 4.27 9 5.15" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7" }],
    ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }],
    ["circle", { cx: "18.5", cy: "15.5", r: "2.5" }],
    ["path", { d: "M20.27 17.27 22 19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PackageX = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
      }
    ],
    ["path", { d: "m7.5 4.27 9 5.15" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7" }],
    ["line", { x1: "12", x2: "12", y1: "22", y2: "12" }],
    ["path", { d: "m17 13 5 5m-5 0 5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Package = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m7.5 4.27 9 5.15" }],
    [
      "path",
      {
        d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      }
    ],
    ["path", { d: "m3.3 7 8.7 5 8.7-5" }],
    ["path", { d: "M12 22V12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PaintBucket = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }],
    ["path", { d: "m5 2 5 5" }],
    ["path", { d: "M2 13h15" }],
    ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PaintRoller = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "6", x: "2", y: "2", rx: "2" }],
    ["path", { d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }],
    ["rect", { width: "4", height: "6", x: "8", y: "16", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PaintbrushVertical = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 2v2" }],
    ["path", { d: "M14 2v4" }],
    ["path", { d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" }],
    [
      "path",
      {
        d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Paintbrush = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m14.622 17.897-10.68-2.913" }],
    [
      "path",
      {
        d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
      }
    ],
    [
      "path",
      {
        d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Palette = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor" }],
    ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor" }],
    ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor" }],
    ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor" }],
    [
      "path",
      {
        d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelBottomClose = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 15h18" }],
    ["path", { d: "m15 8-3 3-3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelBottomDashed = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M14 15h1" }],
    ["path", { d: "M19 15h2" }],
    ["path", { d: "M3 15h2" }],
    ["path", { d: "M9 15h1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelBottomOpen = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 15h18" }],
    ["path", { d: "m9 10 3-3 3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelBottom = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 15h18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelLeftClose = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M9 3v18" }],
    ["path", { d: "m16 15-3-3 3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelLeftDashed = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M9 14v1" }],
    ["path", { d: "M9 19v2" }],
    ["path", { d: "M9 3v2" }],
    ["path", { d: "M9 9v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelLeftOpen = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M9 3v18" }],
    ["path", { d: "m14 9 3 3-3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelLeft = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M9 3v18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelRightClose = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M15 3v18" }],
    ["path", { d: "m8 9 3 3-3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelRightDashed = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M15 14v1" }],
    ["path", { d: "M15 19v2" }],
    ["path", { d: "M15 3v2" }],
    ["path", { d: "M15 9v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelRightOpen = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M15 3v18" }],
    ["path", { d: "m10 15-3-3 3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelRight = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M15 3v18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelTopClose = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 9h18" }],
    ["path", { d: "m9 16 3-3 3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelTopDashed = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M14 9h1" }],
    ["path", { d: "M19 9h2" }],
    ["path", { d: "M3 9h2" }],
    ["path", { d: "M9 9h1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelTopOpen = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 9h18" }],
    ["path", { d: "m15 14-3 3-3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelTop = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 9h18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelsLeftBottom = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M9 3v18" }],
    ["path", { d: "M9 15h12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelsRightBottom = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 15h12" }],
    ["path", { d: "M15 3v18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PanelsTopLeft = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 9h18" }],
    ["path", { d: "M9 21V9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Paperclip = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Parentheses = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }],
    ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ParkingMeter = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 9a3 3 0 1 1 6 0" }],
    ["path", { d: "M12 12v3" }],
    ["path", { d: "M11 15h2" }],
    [
      "path",
      { d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3" }
    ],
    ["path", { d: "M12 19v3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PartyPopper = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5.8 11.3 2 22l10.7-3.79" }],
    ["path", { d: "M4 3h.01" }],
    ["path", { d: "M22 8h.01" }],
    ["path", { d: "M15 2h.01" }],
    ["path", { d: "M22 20h.01" }],
    [
      "path",
      {
        d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
      }
    ],
    ["path", { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" }],
    ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" }],
    [
      "path",
      {
        d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pause = [
  "svg",
  defaultAttributes,
  [
    ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1" }],
    ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PawPrint = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "11", cy: "4", r: "2" }],
    ["circle", { cx: "18", cy: "8", r: "2" }],
    ["circle", { cx: "20", cy: "16", r: "2" }],
    [
      "path",
      {
        d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PcCase = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2" }],
    ["path", { d: "M15 14h.01" }],
    ["path", { d: "M9 6h6" }],
    ["path", { d: "M9 10h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PenLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 20h9" }],
    [
      "path",
      {
        d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PenOff = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
      }
    ],
    ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PenTool = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"
      }
    ],
    [
      "path",
      {
        d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"
      }
    ],
    ["path", { d: "m2.3 2.3 7.286 7.286" }],
    ["circle", { cx: "11", cy: "11", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pen = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PencilLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 20h9" }],
    [
      "path",
      {
        d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
      }
    ],
    ["path", { d: "m15 5 3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PencilOff = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
      }
    ],
    ["path", { d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }],
    ["path", { d: "m15 5 4 4" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PencilRuler = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" }],
    ["path", { d: "m8 6 2-2" }],
    ["path", { d: "m18 16 2-2" }],
    ["path", { d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" }],
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
      }
    ],
    ["path", { d: "m15 5 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pencil = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
      }
    ],
    ["path", { d: "m15 5 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pentagon = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Percent = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }],
    ["circle", { cx: "6.5", cy: "6.5", r: "2.5" }],
    ["circle", { cx: "17.5", cy: "17.5", r: "2.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PersonStanding = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "5", r: "1" }],
    ["path", { d: "m9 20 3-6 3 6" }],
    ["path", { d: "m6 8 6 2 6-2" }],
    ["path", { d: "M12 10v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PhilippinePeso = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20 11H4" }],
    ["path", { d: "M20 7H4" }],
    ["path", { d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PhoneCall = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ],
    ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94" }],
    ["path", { d: "M14.05 6A5 5 0 0 1 18 10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PhoneForwarded = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "18 2 22 6 18 10" }],
    ["line", { x1: "14", x2: "22", y1: "6", y2: "6" }],
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PhoneIncoming = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "16 2 16 8 22 8" }],
    ["line", { x1: "22", x2: "16", y1: "2", y2: "8" }],
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PhoneMissed = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "22", x2: "16", y1: "2", y2: "8" }],
    ["line", { x1: "16", x2: "22", y1: "2", y2: "8" }],
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PhoneOff = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
      }
    ],
    ["line", { x1: "22", x2: "2", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PhoneOutgoing = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "22 8 22 2 16 2" }],
    ["line", { x1: "16", x2: "22", y1: "8", y2: "2" }],
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Phone = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pi = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "9", x2: "9", y1: "4", y2: "20" }],
    ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13" }],
    ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Piano = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"
      }
    ],
    ["path", { d: "M2 14h20" }],
    ["path", { d: "M6 14v4" }],
    ["path", { d: "M10 14v4" }],
    ["path", { d: "M14 14v4" }],
    ["path", { d: "M18 14v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pickaxe = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" }],
    [
      "path",
      {
        d: "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"
      }
    ],
    [
      "path",
      {
        d: "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"
      }
    ],
    [
      "path",
      {
        d: "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PictureInPicture2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" }],
    ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PictureInPicture = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3" }],
    ["rect", { width: "10", height: "7", x: "12", y: "13.5", ry: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PiggyBank = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"
      }
    ],
    ["path", { d: "M2 9v1c0 1.1.9 2 2 2h1" }],
    ["path", { d: "M16 11h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PilcrowLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 3v11" }],
    ["path", { d: "M14 9h-3a3 3 0 0 1 0-6h9" }],
    ["path", { d: "M18 3v11" }],
    ["path", { d: "M22 18H2l4-4" }],
    ["path", { d: "m6 22-4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PilcrowRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 3v11" }],
    ["path", { d: "M10 9H7a1 1 0 0 1 0-6h8" }],
    ["path", { d: "M14 3v11" }],
    ["path", { d: "m18 14 4 4H2" }],
    ["path", { d: "m22 18-4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pilcrow = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 4v16" }],
    ["path", { d: "M17 4v16" }],
    ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PillBottle = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" }],
    ["path", { d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" }],
    ["rect", { width: "16", height: "5", x: "4", y: "2", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pill = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }],
    ["path", { d: "m8.5 8.5 7 7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PinOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 17v5" }],
    ["path", { d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pin = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 17v5" }],
    [
      "path",
      {
        d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pipette = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m2 22 1-1h3l9-9" }],
    ["path", { d: "M3 21v-3l9-9" }],
    [
      "path",
      {
        d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pizza = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 11h.01" }],
    ["path", { d: "M11 15h.01" }],
    ["path", { d: "M16 16h.01" }],
    ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16" }],
    ["path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PlaneLanding = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 22h20" }],
    [
      "path",
      {
        d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PlaneTakeoff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 22h20" }],
    [
      "path",
      {
        d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Plane = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Play = ["svg", defaultAttributes, [["polygon", { points: "6 3 20 12 6 21 6 3" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Plug2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 2v6" }],
    ["path", { d: "M15 2v6" }],
    ["path", { d: "M12 17v5" }],
    ["path", { d: "M5 8h14" }],
    ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PlugZap = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }],
    ["path", { d: "m2 22 3-3" }],
    ["path", { d: "M7.5 13.5 10 11" }],
    ["path", { d: "M10.5 16.5 13 14" }],
    ["path", { d: "m18 3-4 4h6l-4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Plug = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 22v-5" }],
    ["path", { d: "M9 8V2" }],
    ["path", { d: "M15 8V2" }],
    ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Plus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 12h14" }],
    ["path", { d: "M12 5v14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PocketKnife = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" }],
    ["path", { d: "M18 6h.01" }],
    ["path", { d: "M6 18h.01" }],
    ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }],
    ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pocket = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z" }],
    ["polyline", { points: "8 10 12 14 16 10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Podcast = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16.85 18.58a9 9 0 1 0-9.7 0" }],
    ["path", { d: "M8 14a5 5 0 1 1 8 0" }],
    ["circle", { cx: "12", cy: "11", r: "1" }],
    ["path", { d: "M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PointerOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957" }],
    ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295" }],
    ["path", { d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" }],
    [
      "path",
      {
        d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"
      }
    ],
    ["path", { d: "M6 6v8" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pointer = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 14a8 8 0 0 1-8 8" }],
    ["path", { d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }],
    ["path", { d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" }],
    ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" }],
    [
      "path",
      {
        d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Popcorn = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" }],
    ["path", { d: "M10 22 9 8" }],
    ["path", { d: "m14 22 1-14" }],
    [
      "path",
      {
        d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Popsicle = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"
      }
    ],
    ["path", { d: "m22 22-5.5-5.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PoundSterling = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 7c0-5.333-8-5.333-8 0" }],
    ["path", { d: "M10 7v14" }],
    ["path", { d: "M6 21h12" }],
    ["path", { d: "M6 13h10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PowerOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15" }],
    ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68" }],
    ["path", { d: "M12 2v4" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Power = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2v10" }],
    ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Presentation = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 3h20" }],
    ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }],
    ["path", { d: "m7 21 5-5 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const PrinterCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" }],
    ["path", { d: "m16 19 2 2 4-4" }],
    ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Printer = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }],
    ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Projector = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 7 3 5" }],
    ["path", { d: "M9 6V3" }],
    ["path", { d: "m13 7 2-2" }],
    ["circle", { cx: "9", cy: "13", r: "3" }],
    [
      "path",
      { d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" }
    ],
    ["path", { d: "M16 16h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Proportions = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
    ["path", { d: "M12 9v11" }],
    ["path", { d: "M2 9h13a2 2 0 0 1 2 2v9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Puzzle = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Pyramid = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"
      }
    ],
    ["path", { d: "M12 2v20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const QrCode = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1" }],
    ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1" }],
    ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1" }],
    ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3" }],
    ["path", { d: "M21 21v.01" }],
    ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7" }],
    ["path", { d: "M3 12h.01" }],
    ["path", { d: "M12 3h.01" }],
    ["path", { d: "M12 16v.01" }],
    ["path", { d: "M16 12h1" }],
    ["path", { d: "M21 12v.01" }],
    ["path", { d: "M12 21v-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Quote = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
      }
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Rabbit = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 16a3 3 0 0 1 2.24 5" }],
    ["path", { d: "M18 12h.01" }],
    [
      "path",
      {
        d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"
      }
    ],
    ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3" }],
    ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Radar = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34" }],
    ["path", { d: "M4 6h.01" }],
    ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35" }],
    ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67" }],
    ["path", { d: "M12 18h.01" }],
    ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67" }],
    ["circle", { cx: "12", cy: "12", r: "2" }],
    ["path", { d: "m13.41 10.59 5.66-5.66" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Radiation = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 12h.01" }],
    [
      "path",
      {
        d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"
      }
    ],
    [
      "path",
      {
        d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"
      }
    ],
    [
      "path",
      {
        d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Radical = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RadioReceiver = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 16v2" }],
    ["path", { d: "M19 16v2" }],
    ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2" }],
    ["path", { d: "M18 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RadioTower = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }],
    ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }],
    ["circle", { cx: "12", cy: "9", r: "2" }],
    ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47" }],
    ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }],
    ["path", { d: "M9.5 18h5" }],
    ["path", { d: "m8 22 4-11 4 11" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Radio = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9" }],
    ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" }],
    ["circle", { cx: "12", cy: "12", r: "2" }],
    ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" }],
    ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Radius = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82" }],
    ["circle", { cx: "19", cy: "19", r: "2" }],
    ["path", { d: "m13.41 13.41 4.18 4.18" }],
    ["circle", { cx: "12", cy: "12", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RailSymbol = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 15h14" }],
    ["path", { d: "M5 9h14" }],
    ["path", { d: "m14 20-5-5 6-6-5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Rainbow = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 17a10 10 0 0 0-20 0" }],
    ["path", { d: "M6 17a6 6 0 0 1 12 0" }],
    ["path", { d: "M10 17a2 2 0 0 1 4 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Rat = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      { d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4" }
    ],
    [
      "path",
      {
        d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"
      }
    ],
    ["path", { d: "M13.2 18a3 3 0 0 0-2.2-5" }],
    ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12" }],
    ["path", { d: "M16 9h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ratio = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }],
    ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ReceiptCent = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
    ["path", { d: "M12 6.5v11" }],
    ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ReceiptEuro = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
    ["path", { d: "M8 12h5" }],
    ["path", { d: "M16 9.5a4 4 0 1 0 0 5.2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ReceiptIndianRupee = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
    ["path", { d: "M8 7h8" }],
    ["path", { d: "M12 17.5 8 15h1a4 4 0 0 0 0-8" }],
    ["path", { d: "M8 11h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ReceiptJapaneseYen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
    ["path", { d: "m12 10 3-3" }],
    ["path", { d: "m9 7 3 3v7.5" }],
    ["path", { d: "M9 11h6" }],
    ["path", { d: "M9 15h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ReceiptPoundSterling = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
    ["path", { d: "M8 13h5" }],
    ["path", { d: "M10 17V9.5a2.5 2.5 0 0 1 5 0" }],
    ["path", { d: "M8 17h7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ReceiptRussianRuble = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
    ["path", { d: "M8 15h5" }],
    ["path", { d: "M8 11h5a2 2 0 1 0 0-4h-3v10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ReceiptSwissFranc = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
    ["path", { d: "M10 17V7h5" }],
    ["path", { d: "M10 11h4" }],
    ["path", { d: "M8 15h5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ReceiptText = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
    ["path", { d: "M14 8H8" }],
    ["path", { d: "M16 12H8" }],
    ["path", { d: "M13 16H8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Receipt = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" }],
    ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
    ["path", { d: "M12 17.5v-11" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RectangleEllipsis = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }],
    ["path", { d: "M12 12h.01" }],
    ["path", { d: "M17 12h.01" }],
    ["path", { d: "M7 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RectangleHorizontal = [
  "svg",
  defaultAttributes,
  [["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RectangleVertical = [
  "svg",
  defaultAttributes,
  [["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Recycle = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" }],
    ["path", { d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" }],
    ["path", { d: "m14 16-3 3 3 3" }],
    ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598" }],
    [
      "path",
      {
        d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
      }
    ],
    ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Redo2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m15 14 5-5-5-5" }],
    ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RedoDot = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "17", r: "1" }],
    ["path", { d: "M21 7v6h-6" }],
    ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Redo = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 7v6h-6" }],
    ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RefreshCcwDot = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 2v6h6" }],
    ["path", { d: "M21 12A9 9 0 0 0 6 5.3L3 8" }],
    ["path", { d: "M21 22v-6h-6" }],
    ["path", { d: "M3 12a9 9 0 0 0 15 6.7l3-2.7" }],
    ["circle", { cx: "12", cy: "12", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RefreshCcw = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
    ["path", { d: "M3 3v5h5" }],
    ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }],
    ["path", { d: "M16 16h5v5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RefreshCwOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" }],
    ["path", { d: "M8 16H3v5" }],
    ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64" }],
    ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" }],
    ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87" }],
    ["path", { d: "M21 3v5h-5" }],
    ["path", { d: "M22 22 2 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RefreshCw = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }],
    ["path", { d: "M21 3v5h-5" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }],
    ["path", { d: "M8 16H3v5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Refrigerator = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" }],
    ["path", { d: "M5 10h14" }],
    ["path", { d: "M15 7v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Regex = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 3v10" }],
    ["path", { d: "m12.67 5.5 8.66 5" }],
    ["path", { d: "m12.67 10.5 8.66-5" }],
    ["path", { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RemoveFormatting = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 7V4h16v3" }],
    ["path", { d: "M5 20h6" }],
    ["path", { d: "M13 4 8 20" }],
    ["path", { d: "m15 15 5 5" }],
    ["path", { d: "m20 15-5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Repeat1 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m17 2 4 4-4 4" }],
    ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }],
    ["path", { d: "m7 22-4-4 4-4" }],
    ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }],
    ["path", { d: "M11 10h1v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Repeat2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m2 9 3-3 3 3" }],
    ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6" }],
    ["path", { d: "m22 15-3 3-3-3" }],
    ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Repeat = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m17 2 4 4-4 4" }],
    ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }],
    ["path", { d: "m7 22-4-4 4-4" }],
    ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ReplaceAll = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }],
    ["path", { d: "M14 4a2 2 0 0 1 2-2" }],
    ["path", { d: "M16 10a2 2 0 0 1-2-2" }],
    ["path", { d: "M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }],
    ["path", { d: "M20 2a2 2 0 0 1 2 2" }],
    ["path", { d: "M22 8a2 2 0 0 1-2 2" }],
    ["path", { d: "m3 7 3 3 3-3" }],
    ["path", { d: "M6 10V5a 3 3 0 0 1 3-3h1" }],
    ["rect", { x: "2", y: "14", width: "8", height: "8", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Replace = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 4a2 2 0 0 1 2-2" }],
    ["path", { d: "M16 10a2 2 0 0 1-2-2" }],
    ["path", { d: "M20 2a2 2 0 0 1 2 2" }],
    ["path", { d: "M22 8a2 2 0 0 1-2 2" }],
    ["path", { d: "m3 7 3 3 3-3" }],
    ["path", { d: "M6 10V5a3 3 0 0 1 3-3h1" }],
    ["rect", { x: "2", y: "14", width: "8", height: "8", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ReplyAll = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "7 17 2 12 7 7" }],
    ["polyline", { points: "12 17 7 12 12 7" }],
    ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Reply = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "9 17 4 12 9 7" }],
    ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Rewind = [
  "svg",
  defaultAttributes,
  [
    ["polygon", { points: "11 19 2 12 11 5 11 19" }],
    ["polygon", { points: "22 19 13 12 22 5 22 19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ribbon = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" }],
    ["path", { d: "m12 18 2.57-3.5" }],
    ["path", { d: "M6.243 9.016a7 7 0 0 1 11.507-.009" }],
    ["path", { d: "M9.35 14.53 12 11.22" }],
    [
      "path",
      {
        d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Rocket = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      }
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
      }
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RockingChair = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "3.5 2 6.5 12.5 18 12.5" }],
    ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20" }],
    ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20" }],
    ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RollerCoaster = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 19V5" }],
    ["path", { d: "M10 19V6.8" }],
    ["path", { d: "M14 19v-7.8" }],
    ["path", { d: "M18 5v4" }],
    ["path", { d: "M18 19v-6" }],
    ["path", { d: "M22 19V9" }],
    ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Rotate3d = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
      }
    ],
    ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814" }],
    [
      "path",
      {
        d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RotateCcwSquare = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20 9V7a2 2 0 0 0-2-2h-6" }],
    ["path", { d: "m15 2-3 3 3 3" }],
    ["path", { d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RotateCcw = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }],
    ["path", { d: "M3 3v5h5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RotateCwSquare = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 5H6a2 2 0 0 0-2 2v3" }],
    ["path", { d: "m9 8 3-3-3-3" }],
    ["path", { d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RotateCw = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }],
    ["path", { d: "M21 3v5h-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RouteOff = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "6", cy: "19", r: "3" }],
    ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2" }],
    ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }],
    ["path", { d: "M15 5h-4.3" }],
    ["circle", { cx: "18", cy: "5", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Route = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "6", cy: "19", r: "3" }],
    ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }],
    ["circle", { cx: "18", cy: "5", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Router = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2" }],
    ["path", { d: "M6.01 18H6" }],
    ["path", { d: "M10.01 18H10" }],
    ["path", { d: "M15 10v4" }],
    ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0" }],
    ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Rows2 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 12h18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Rows3 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M21 9H3" }],
    ["path", { d: "M21 15H3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Rows4 = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M21 7.5H3" }],
    ["path", { d: "M21 12H3" }],
    ["path", { d: "M21 16.5H3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Rss = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 11a9 9 0 0 1 9 9" }],
    ["path", { d: "M4 4a16 16 0 0 1 16 16" }],
    ["circle", { cx: "5", cy: "19", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ruler = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
      }
    ],
    ["path", { d: "m14.5 12.5 2-2" }],
    ["path", { d: "m11.5 9.5 2-2" }],
    ["path", { d: "m8.5 6.5 2-2" }],
    ["path", { d: "m17.5 15.5 2-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const RussianRuble = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18" }],
    ["path", { d: "M6 15h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sailboat = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" }],
    ["path", { d: "M21 14 10 2 3 14h18Z" }],
    ["path", { d: "M10 2v16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Salad = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 21h10" }],
    ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }],
    [
      "path",
      {
        d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
      }
    ],
    ["path", { d: "m13 12 4-4" }],
    ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sandwich = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" }],
    [
      "path",
      { d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83" }
    ],
    ["path", { d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" }],
    ["path", { d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SatelliteDish = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z" }],
    ["path", { d: "m9 15 3-3" }],
    ["path", { d: "M17 13a6 6 0 0 0-6-6" }],
    ["path", { d: "M21 13A10 10 0 0 0 11 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Satellite = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 7 9 3 5 7l4 4" }],
    ["path", { d: "m17 11 4 4-4 4-4-4" }],
    ["path", { d: "m8 12 4 4 6-6-4-4Z" }],
    ["path", { d: "m16 8 3-3" }],
    ["path", { d: "M9 21a6 6 0 0 0-6-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SaveAll = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 2v3a1 1 0 0 0 1 1h5" }],
    ["path", { d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" }],
    ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6" }],
    [
      "path",
      {
        d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SaveOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 13H8a1 1 0 0 0-1 1v7" }],
    ["path", { d: "M14 8h1" }],
    ["path", { d: "M17 21v-4" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" }],
    ["path", { d: "M29.5 11.5s5 5 4 5" }],
    ["path", { d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Save = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      }
    ],
    ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
    ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Scale3d = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "19", cy: "19", r: "2" }],
    ["circle", { cx: "5", cy: "5", r: "2" }],
    ["path", { d: "M5 7v12h12" }],
    ["path", { d: "m5 19 6-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Scale = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
    ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
    ["path", { d: "M7 21h10" }],
    ["path", { d: "M12 3v18" }],
    ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Scaling = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }],
    ["path", { d: "M14 15H9v-5" }],
    ["path", { d: "M16 3h5v5" }],
    ["path", { d: "M21 3 9 15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ScanBarcode = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
    ["path", { d: "M8 7v10" }],
    ["path", { d: "M12 7v10" }],
    ["path", { d: "M17 7v10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ScanEye = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
    ["circle", { cx: "12", cy: "12", r: "1" }],
    [
      "path",
      {
        d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ScanFace = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
    ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
    ["path", { d: "M9 9h.01" }],
    ["path", { d: "M15 9h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ScanLine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
    ["path", { d: "M7 12h10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ScanQrCode = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 12v4a1 1 0 0 1-1 1h-4" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M17 8V7" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M7 17h.01" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
    ["rect", { x: "7", y: "7", width: "5", height: "5", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ScanSearch = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
    ["circle", { cx: "12", cy: "12", r: "3" }],
    ["path", { d: "m16 16-1.9-1.9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ScanText = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }],
    ["path", { d: "M7 8h8" }],
    ["path", { d: "M7 12h10" }],
    ["path", { d: "M7 16h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Scan = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const School = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 22v-4a2 2 0 1 0-4 0v4" }],
    ["path", { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" }],
    ["path", { d: "M18 5v17" }],
    ["path", { d: "m4 6 8-4 8 4" }],
    ["path", { d: "M6 5v17" }],
    ["circle", { cx: "12", cy: "9", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ScissorsLineDashed = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5.42 9.42 8 12" }],
    ["circle", { cx: "4", cy: "8", r: "2" }],
    ["path", { d: "m14 6-8.58 8.58" }],
    ["circle", { cx: "4", cy: "16", r: "2" }],
    ["path", { d: "M10.8 14.8 14 18" }],
    ["path", { d: "M16 12h-2" }],
    ["path", { d: "M22 12h-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Scissors = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "6", cy: "6", r: "3" }],
    ["path", { d: "M8.12 8.12 12 12" }],
    ["path", { d: "M20 4 8.12 15.88" }],
    ["circle", { cx: "6", cy: "18", r: "3" }],
    ["path", { d: "M14.8 14.8 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ScreenShareOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }],
    ["path", { d: "M8 21h8" }],
    ["path", { d: "M12 17v4" }],
    ["path", { d: "m22 3-5 5" }],
    ["path", { d: "m17 3 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ScreenShare = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }],
    ["path", { d: "M8 21h8" }],
    ["path", { d: "M12 17v4" }],
    ["path", { d: "m17 8 5-5" }],
    ["path", { d: "M17 3h5v5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ScrollText = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 12h-5" }],
    ["path", { d: "M15 8h-5" }],
    ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }],
    [
      "path",
      {
        d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Scroll = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }],
    [
      "path",
      {
        d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SearchCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m8 11 2 2 4-4" }],
    ["circle", { cx: "11", cy: "11", r: "8" }],
    ["path", { d: "m21 21-4.3-4.3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SearchCode = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m13 13.5 2-2.5-2-2.5" }],
    ["path", { d: "m21 21-4.3-4.3" }],
    ["path", { d: "M9 8.5 7 11l2 2.5" }],
    ["circle", { cx: "11", cy: "11", r: "8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SearchSlash = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m13.5 8.5-5 5" }],
    ["circle", { cx: "11", cy: "11", r: "8" }],
    ["path", { d: "m21 21-4.3-4.3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SearchX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m13.5 8.5-5 5" }],
    ["path", { d: "m8.5 8.5 5 5" }],
    ["circle", { cx: "11", cy: "11", r: "8" }],
    ["path", { d: "m21 21-4.3-4.3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Search = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "11", cy: "11", r: "8" }],
    ["path", { d: "m21 21-4.3-4.3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Section = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" }],
    ["path", { d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SendHorizontal = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
      }
    ],
    ["path", { d: "M6 12h16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SendToBack = [
  "svg",
  defaultAttributes,
  [
    ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2" }],
    ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2" }],
    ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1" }],
    ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Send = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
      }
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SeparatorHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "3", x2: "21", y1: "12", y2: "12" }],
    ["polyline", { points: "8 8 12 4 16 8" }],
    ["polyline", { points: "16 16 12 20 8 16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SeparatorVertical = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "12", x2: "12", y1: "3", y2: "21" }],
    ["polyline", { points: "8 8 4 12 8 16" }],
    ["polyline", { points: "16 16 20 12 16 8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ServerCog = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "3" }],
    ["path", { d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" }],
    [
      "path",
      { d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" }
    ],
    ["path", { d: "M6 6h.01" }],
    ["path", { d: "M6 18h.01" }],
    ["path", { d: "m15.7 13.4-.9-.3" }],
    ["path", { d: "m9.2 10.9-.9-.3" }],
    ["path", { d: "m10.6 15.7.3-.9" }],
    ["path", { d: "m13.6 15.7-.4-1" }],
    ["path", { d: "m10.8 9.3-.4-1" }],
    ["path", { d: "m8.3 13.6 1-.4" }],
    ["path", { d: "m14.7 10.8 1-.4" }],
    ["path", { d: "m13.4 8.3-.3.9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ServerCrash = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" }],
    ["path", { d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" }],
    ["path", { d: "M6 6h.01" }],
    ["path", { d: "M6 18h.01" }],
    ["path", { d: "m13 6-4 6h6l-4 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ServerOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" }],
    ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" }],
    ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1" }],
    ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" }],
    ["path", { d: "M6 18h.01" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Server = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2" }],
    ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2" }],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6" }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Settings2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20 7h-9" }],
    ["path", { d: "M14 17H5" }],
    ["circle", { cx: "17", cy: "17", r: "3" }],
    ["circle", { cx: "7", cy: "7", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Settings = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    ],
    ["circle", { cx: "12", cy: "12", r: "3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Shapes = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
      }
    ],
    ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" }],
    ["circle", { cx: "17.5", cy: "17.5", r: "3.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Share2 = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "18", cy: "5", r: "3" }],
    ["circle", { cx: "6", cy: "12", r: "3" }],
    ["circle", { cx: "18", cy: "19", r: "3" }],
    ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }],
    ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Share = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }],
    ["polyline", { points: "16 6 12 2 8 6" }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sheet = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["line", { x1: "3", x2: "21", y1: "9", y2: "9" }],
    ["line", { x1: "3", x2: "21", y1: "15", y2: "15" }],
    ["line", { x1: "9", x2: "9", y1: "9", y2: "21" }],
    ["line", { x1: "15", x2: "15", y1: "9", y2: "21" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Shell = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShieldAlert = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { d: "M12 8v4" }],
    ["path", { d: "M12 16h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShieldBan = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { d: "m4.243 5.21 14.39 12.472" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShieldCheck = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { d: "m9 12 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShieldEllipsis = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { d: "M8 12h.01" }],
    ["path", { d: "M12 12h.01" }],
    ["path", { d: "M16 12h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShieldHalf = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { d: "M12 22V2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShieldMinus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { d: "M9 12h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShieldOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m2 2 20 20" }],
    [
      "path",
      {
        d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"
      }
    ],
    [
      "path",
      {
        d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShieldPlus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { d: "M9 12h6" }],
    ["path", { d: "M12 9v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShieldQuestion = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }],
    ["path", { d: "M12 17h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShieldX = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { d: "m14.5 9.5-5 5" }],
    ["path", { d: "m9.5 9.5 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Shield = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShipWheel = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "8" }],
    ["path", { d: "M12 2v7.5" }],
    ["path", { d: "m19 5-5.23 5.23" }],
    ["path", { d: "M22 12h-7.5" }],
    ["path", { d: "m19 19-5.23-5.23" }],
    ["path", { d: "M12 14.5V22" }],
    ["path", { d: "M10.23 13.77 5 19" }],
    ["path", { d: "M9.5 12H2" }],
    ["path", { d: "M10.23 10.23 5 5" }],
    ["circle", { cx: "12", cy: "12", r: "2.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ship = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
      }
    ],
    ["path", { d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" }],
    ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" }],
    ["path", { d: "M12 10v4" }],
    ["path", { d: "M12 2v3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Shirt = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShoppingBag = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }],
    ["path", { d: "M3 6h18" }],
    ["path", { d: "M16 10a4 4 0 0 1-8 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShoppingBasket = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m15 11-1 9" }],
    ["path", { d: "m19 11-4-7" }],
    ["path", { d: "M2 11h20" }],
    ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" }],
    ["path", { d: "M4.5 15.5h15" }],
    ["path", { d: "m5 11 4-7" }],
    ["path", { d: "m9 11 1 9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShoppingCart = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "8", cy: "21", r: "1" }],
    ["circle", { cx: "19", cy: "21", r: "1" }],
    [
      "path",
      { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Shovel = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 22v-5l5-5 5 5-5 5z" }],
    ["path", { d: "M9.5 14.5 16 8" }],
    ["path", { d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ShowerHead = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m4 4 2.5 2.5" }],
    ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7" }],
    ["path", { d: "M15 5 5 15" }],
    ["path", { d: "M14 17v.01" }],
    ["path", { d: "M10 16v.01" }],
    ["path", { d: "M13 13v.01" }],
    ["path", { d: "M16 10v.01" }],
    ["path", { d: "M11 20v.01" }],
    ["path", { d: "M17 14v.01" }],
    ["path", { d: "M20 11v.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Shrink = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }],
    ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6" }],
    ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6" }],
    ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Shrub = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 22v-7l-2-2" }],
    ["path", { d: "M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z" }],
    ["path", { d: "m14 14-2 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Shuffle = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" }],
    ["path", { d: "m18 2 4 4-4 4" }],
    ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2" }],
    ["path", { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" }],
    ["path", { d: "m18 14 4 4-4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sigma = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SignalHigh = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 20h.01" }],
    ["path", { d: "M7 20v-4" }],
    ["path", { d: "M12 20v-8" }],
    ["path", { d: "M17 20V8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SignalLow = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 20h.01" }],
    ["path", { d: "M7 20v-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SignalMedium = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 20h.01" }],
    ["path", { d: "M7 20v-4" }],
    ["path", { d: "M12 20v-8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SignalZero = ["svg", defaultAttributes, [["path", { d: "M2 20h.01" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Signal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 20h.01" }],
    ["path", { d: "M7 20v-4" }],
    ["path", { d: "M12 20v-8" }],
    ["path", { d: "M17 20V8" }],
    ["path", { d: "M22 4v16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Signature = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"
      }
    ],
    ["path", { d: "M3 21h18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SignpostBig = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 9H4L2 7l2-2h6" }],
    ["path", { d: "M14 5h6l2 2-2 2h-6" }],
    ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18" }],
    ["path", { d: "M8 22h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Signpost = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 13v8" }],
    ["path", { d: "M12 3v3" }],
    [
      "path",
      {
        d: "M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Siren = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6" }],
    ["path", { d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" }],
    ["path", { d: "M21 12h1" }],
    ["path", { d: "M18.5 4.5 18 5" }],
    ["path", { d: "M2 12h1" }],
    ["path", { d: "M12 2v1" }],
    ["path", { d: "m4.929 4.929.707.707" }],
    ["path", { d: "M12 12v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SkipBack = [
  "svg",
  defaultAttributes,
  [
    ["polygon", { points: "19 20 9 12 19 4 19 20" }],
    ["line", { x1: "5", x2: "5", y1: "19", y2: "5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SkipForward = [
  "svg",
  defaultAttributes,
  [
    ["polygon", { points: "5 4 15 12 5 20 5 4" }],
    ["line", { x1: "19", x2: "19", y1: "5", y2: "19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Skull = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m12.5 17-.5-1-.5 1h1z" }],
    [
      "path",
      {
        d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
      }
    ],
    ["circle", { cx: "15", cy: "12", r: "1" }],
    ["circle", { cx: "9", cy: "12", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Slack = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5" }],
    ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" }],
    ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5" }],
    ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" }],
    ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5" }],
    ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" }],
    ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5" }],
    ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Slash = ["svg", defaultAttributes, [["path", { d: "M22 2 2 22" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Slice = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m8 14-6 6h9v-3" }],
    ["path", { d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SlidersHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "21", x2: "14", y1: "4", y2: "4" }],
    ["line", { x1: "10", x2: "3", y1: "4", y2: "4" }],
    ["line", { x1: "21", x2: "12", y1: "12", y2: "12" }],
    ["line", { x1: "8", x2: "3", y1: "12", y2: "12" }],
    ["line", { x1: "21", x2: "16", y1: "20", y2: "20" }],
    ["line", { x1: "12", x2: "3", y1: "20", y2: "20" }],
    ["line", { x1: "14", x2: "14", y1: "2", y2: "6" }],
    ["line", { x1: "8", x2: "8", y1: "10", y2: "14" }],
    ["line", { x1: "16", x2: "16", y1: "18", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SlidersVertical = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "4", x2: "4", y1: "21", y2: "14" }],
    ["line", { x1: "4", x2: "4", y1: "10", y2: "3" }],
    ["line", { x1: "12", x2: "12", y1: "21", y2: "12" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "3" }],
    ["line", { x1: "20", x2: "20", y1: "21", y2: "16" }],
    ["line", { x1: "20", x2: "20", y1: "12", y2: "3" }],
    ["line", { x1: "2", x2: "6", y1: "14", y2: "14" }],
    ["line", { x1: "10", x2: "14", y1: "8", y2: "8" }],
    ["line", { x1: "18", x2: "22", y1: "16", y2: "16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SmartphoneCharging = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }],
    ["path", { d: "M12.667 8 10 12h4l-2.667 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SmartphoneNfc = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1" }],
    ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36" }],
    ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }],
    ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Smartphone = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2" }],
    ["path", { d: "M12 18h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SmilePlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 11v1a10 10 0 1 1-9-10" }],
    ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
    ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
    ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }],
    ["path", { d: "M16 5h6" }],
    ["path", { d: "M19 2v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Smile = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2" }],
    ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9" }],
    ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Snail = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" }],
    ["circle", { cx: "10", cy: "13", r: "8" }],
    ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" }],
    ["path", { d: "M18 3 19.1 5.2" }],
    ["path", { d: "M22 3 20.9 5.2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Snowflake = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "2", x2: "22", y1: "12", y2: "12" }],
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22" }],
    ["path", { d: "m20 16-4-4 4-4" }],
    ["path", { d: "m4 8 4 4-4 4" }],
    ["path", { d: "m16 4-4 4-4-4" }],
    ["path", { d: "m8 20 4-4 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sofa = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }],
    [
      "path",
      {
        d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
      }
    ],
    ["path", { d: "M4 18v2" }],
    ["path", { d: "M20 18v2" }],
    ["path", { d: "M12 4v9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Soup = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }],
    ["path", { d: "M7 21h10" }],
    ["path", { d: "M19.5 12 22 6" }],
    ["path", { d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }],
    ["path", { d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }],
    ["path", { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Space = [
  "svg",
  defaultAttributes,
  [["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Spade = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"
      }
    ],
    ["path", { d: "M12 18v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sparkle = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sparkles = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
      }
    ],
    ["path", { d: "M20 3v4" }],
    ["path", { d: "M22 5h-4" }],
    ["path", { d: "M4 17v2" }],
    ["path", { d: "M5 18H3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Speaker = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2" }],
    ["path", { d: "M12 6h.01" }],
    ["circle", { cx: "12", cy: "14", r: "4" }],
    ["path", { d: "M12 14h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Speech = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
      }
    ],
    ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" }],
    ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SpellCheck2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m6 16 6-12 6 12" }],
    ["path", { d: "M8 12h8" }],
    [
      "path",
      {
        d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SpellCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m6 16 6-12 6 12" }],
    ["path", { d: "M8 12h8" }],
    ["path", { d: "m16 20 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Spline = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "19", cy: "5", r: "2" }],
    ["circle", { cx: "5", cy: "19", r: "2" }],
    ["path", { d: "M5 17A12 12 0 0 1 17 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Split = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 3h5v5" }],
    ["path", { d: "M8 3H3v5" }],
    ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }],
    ["path", { d: "m15 9 6-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SprayCan = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 3h.01" }],
    ["path", { d: "M7 5h.01" }],
    ["path", { d: "M11 7h.01" }],
    ["path", { d: "M3 7h.01" }],
    ["path", { d: "M7 9h.01" }],
    ["path", { d: "M3 11h.01" }],
    ["rect", { width: "4", height: "4", x: "15", y: "5" }],
    ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }],
    ["path", { d: "m13 14 8-2" }],
    ["path", { d: "m13 19 8-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sprout = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 20h10" }],
    ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10" }],
    [
      "path",
      {
        d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
      }
    ],
    [
      "path",
      { d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareActivity = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowDownLeft = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m16 8-8 8" }],
    ["path", { d: "M16 16H8V8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowDownRight = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m8 8 8 8" }],
    ["path", { d: "M16 8v8H8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowDown = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M12 8v8" }],
    ["path", { d: "m8 12 4 4 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowLeft = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m12 8-4 4 4 4" }],
    ["path", { d: "M16 12H8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowOutDownLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" }],
    ["path", { d: "m3 21 9-9" }],
    ["path", { d: "M9 21H3v-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowOutDownRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }],
    ["path", { d: "m21 21-9-9" }],
    ["path", { d: "M21 15v6h-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowOutUpLeft = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" }],
    ["path", { d: "m3 3 9 9" }],
    ["path", { d: "M3 9V3h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowOutUpRight = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }],
    ["path", { d: "m21 3-9 9" }],
    ["path", { d: "M15 3h6v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowRight = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M8 12h8" }],
    ["path", { d: "m12 16 4-4-4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowUpLeft = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M8 16V8h8" }],
    ["path", { d: "M16 16 8 8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowUpRight = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M8 8h8v8" }],
    ["path", { d: "m8 16 8-8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareArrowUp = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m16 12-4-4-4 4" }],
    ["path", { d: "M12 16V8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareAsterisk = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M12 8v8" }],
    ["path", { d: "m8.5 14 7-4" }],
    ["path", { d: "m8.5 10 7 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareBottomDashedScissors = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2" }],
    ["path", { d: "M10 22H8" }],
    ["path", { d: "M16 22h-2" }],
    ["circle", { cx: "8", cy: "8", r: "2" }],
    ["path", { d: "M9.414 9.414 12 12" }],
    ["path", { d: "M14.8 14.8 18 18" }],
    ["circle", { cx: "8", cy: "16", r: "2" }],
    ["path", { d: "m18 6-8.586 8.586" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareChartGantt = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M9 8h7" }],
    ["path", { d: "M8 12h6" }],
    ["path", { d: "M11 16h5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareCheckBig = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5" }],
    ["path", { d: "m9 11 3 3L22 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareCheck = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m9 12 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareChevronDown = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m16 10-4 4-4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareChevronLeft = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m14 16-4-4 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareChevronRight = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m10 8 4 4-4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareChevronUp = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m8 14 4-4 4 4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareCode = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 9.5 8 12l2 2.5" }],
    ["path", { d: "m14 9.5 2 2.5-2 2.5" }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareDashedBottomCode = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 9.5 8 12l2 2.5" }],
    ["path", { d: "M14 21h1" }],
    ["path", { d: "m14 9.5 2 2.5-2 2.5" }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }],
    ["path", { d: "M9 21h1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareDashedBottom = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }],
    ["path", { d: "M9 21h1" }],
    ["path", { d: "M14 21h1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareDashedKanban = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 7v7" }],
    ["path", { d: "M12 7v4" }],
    ["path", { d: "M16 7v9" }],
    ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
    ["path", { d: "M9 3h1" }],
    ["path", { d: "M14 3h1" }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
    ["path", { d: "M21 9v1" }],
    ["path", { d: "M21 14v1" }],
    ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
    ["path", { d: "M14 21h1" }],
    ["path", { d: "M9 21h1" }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
    ["path", { d: "M3 14v1" }],
    ["path", { d: "M3 9v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareDashedMousePointer = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
      }
    ],
    ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
    ["path", { d: "M9 3h1" }],
    ["path", { d: "M9 21h2" }],
    ["path", { d: "M14 3h1" }],
    ["path", { d: "M3 9v1" }],
    ["path", { d: "M21 9v2" }],
    ["path", { d: "M3 14v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareDashed = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
    ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
    ["path", { d: "M9 3h1" }],
    ["path", { d: "M9 21h1" }],
    ["path", { d: "M14 3h1" }],
    ["path", { d: "M14 21h1" }],
    ["path", { d: "M3 9v1" }],
    ["path", { d: "M21 9v1" }],
    ["path", { d: "M3 14v1" }],
    ["path", { d: "M21 14v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareDivide = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12" }],
    ["line", { x1: "12", x2: "12", y1: "16", y2: "16" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareDot = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["circle", { cx: "12", cy: "12", r: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareEqual = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M7 10h10" }],
    ["path", { d: "M7 14h10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareFunction = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }],
    ["path", { d: "M9 11.2h5.7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareKanban = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M8 7v7" }],
    ["path", { d: "M12 7v4" }],
    ["path", { d: "M16 7v9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareLibrary = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M7 7v10" }],
    ["path", { d: "M11 7v10" }],
    ["path", { d: "m15 7 2 10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareM = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M8 16V8l4 4 4-4v8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareMenu = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M7 8h10" }],
    ["path", { d: "M7 12h10" }],
    ["path", { d: "M7 16h10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareMinus = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M8 12h8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareMousePointer = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
      }
    ],
    ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareParkingOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" }],
    ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2" }],
    ["path", { d: "M9 17v-2.3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareParking = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquarePen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }],
    [
      "path",
      {
        d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquarePercent = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m15 9-6 6" }],
    ["path", { d: "M9 9h.01" }],
    ["path", { d: "M15 15h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquarePi = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M7 7h10" }],
    ["path", { d: "M10 7v10" }],
    ["path", { d: "M16 17a2 2 0 0 1-2-2V7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquarePilcrow = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }],
    ["path", { d: "M12 7v10" }],
    ["path", { d: "M16 7v10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquarePlay = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "m9 8 6 4-6 4Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquarePlus = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M8 12h8" }],
    ["path", { d: "M12 8v8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquarePower = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 7v4" }],
    ["path", { d: "M7.998 9.003a5 5 0 1 0 8-.005" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareRadical = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 12h2l2 5 2-10h4" }],
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareScissors = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "2" }],
    ["circle", { cx: "8", cy: "8", r: "2" }],
    ["path", { d: "M9.414 9.414 12 12" }],
    ["path", { d: "M14.8 14.8 18 18" }],
    ["circle", { cx: "8", cy: "16", r: "2" }],
    ["path", { d: "m18 6-8.586 8.586" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareSigma = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareSlash = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["line", { x1: "9", x2: "15", y1: "15", y2: "9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareSplitHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" }],
    ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" }],
    ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareSplitVertical = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" }],
    ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" }],
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareSquare = [
  "svg",
  defaultAttributes,
  [
    ["rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }],
    ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareStack = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }],
    ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }],
    ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareTerminal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m7 11 2-2-2-2" }],
    ["path", { d: "M11 13h4" }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareUserRound = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 21a6 6 0 0 0-12 0" }],
    ["circle", { cx: "12", cy: "11", r: "4" }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareUser = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["circle", { cx: "12", cy: "10", r: "3" }],
    ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SquareX = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["path", { d: "m15 9-6 6" }],
    ["path", { d: "m9 9 6 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Square = [
  "svg",
  defaultAttributes,
  [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Squircle = [
  "svg",
  defaultAttributes,
  [["path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Squirrel = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15.236 22a3 3 0 0 0-2.2-5" }],
    ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" }],
    ["path", { d: "M18 13h.01" }],
    [
      "path",
      {
        d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Stamp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 22h14" }],
    [
      "path",
      {
        d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"
      }
    ],
    ["path", { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const StarHalf = [
  "svg",
  defaultAttributes,
  [["path", { d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const StarOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43" }],
    ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Star = [
  "svg",
  defaultAttributes,
  [
    [
      "polygon",
      {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const StepBack = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "18", x2: "18", y1: "20", y2: "4" }],
    ["polygon", { points: "14,20 4,12 14,4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const StepForward = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "6", x2: "6", y1: "4", y2: "20" }],
    ["polygon", { points: "10,4 20,12 10,20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Stethoscope = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 2v2" }],
    ["path", { d: "M5 2v2" }],
    ["path", { d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }],
    ["path", { d: "M8 15a6 6 0 0 0 12 0v-3" }],
    ["circle", { cx: "20", cy: "10", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sticker = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" }],
    ["path", { d: "M14 3v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M8 13h.01" }],
    ["path", { d: "M16 13h.01" }],
    ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const StickyNote = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }],
    ["path", { d: "M15 3v4a2 2 0 0 0 2 2h4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Store = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" }],
    ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }],
    ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }],
    ["path", { d: "M2 7h20" }],
    [
      "path",
      {
        d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const StretchHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2" }],
    ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const StretchVertical = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2" }],
    ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Strikethrough = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }],
    ["path", { d: "M14 12a4 4 0 0 1 0 8H6" }],
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Subscript = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m4 5 8 8" }],
    ["path", { d: "m12 5-8 8" }],
    [
      "path",
      {
        d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SunDim = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "4" }],
    ["path", { d: "M12 4h.01" }],
    ["path", { d: "M20 12h.01" }],
    ["path", { d: "M12 20h.01" }],
    ["path", { d: "M4 12h.01" }],
    ["path", { d: "M17.657 6.343h.01" }],
    ["path", { d: "M17.657 17.657h.01" }],
    ["path", { d: "M6.343 17.657h.01" }],
    ["path", { d: "M6.343 6.343h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SunMedium = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "4" }],
    ["path", { d: "M12 3v1" }],
    ["path", { d: "M12 20v1" }],
    ["path", { d: "M3 12h1" }],
    ["path", { d: "M20 12h1" }],
    ["path", { d: "m18.364 5.636-.707.707" }],
    ["path", { d: "m6.343 17.657-.707.707" }],
    ["path", { d: "m5.636 5.636.707.707" }],
    ["path", { d: "m17.657 17.657.707.707" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SunMoon = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" }],
    ["path", { d: "M12 2v2" }],
    ["path", { d: "M12 20v2" }],
    ["path", { d: "m4.9 4.9 1.4 1.4" }],
    ["path", { d: "m17.7 17.7 1.4 1.4" }],
    ["path", { d: "M2 12h2" }],
    ["path", { d: "M20 12h2" }],
    ["path", { d: "m6.3 17.7-1.4 1.4" }],
    ["path", { d: "m19.1 4.9-1.4 1.4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SunSnow = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 9a3 3 0 1 0 0 6" }],
    ["path", { d: "M2 12h1" }],
    ["path", { d: "M14 21V3" }],
    ["path", { d: "M10 4V3" }],
    ["path", { d: "M10 21v-1" }],
    ["path", { d: "m3.64 18.36.7-.7" }],
    ["path", { d: "m4.34 6.34-.7-.7" }],
    ["path", { d: "M14 12h8" }],
    ["path", { d: "m17 4-3 3" }],
    ["path", { d: "m14 17 3 3" }],
    ["path", { d: "m21 15-3-3 3-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sun = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "4" }],
    ["path", { d: "M12 2v2" }],
    ["path", { d: "M12 20v2" }],
    ["path", { d: "m4.93 4.93 1.41 1.41" }],
    ["path", { d: "m17.66 17.66 1.41 1.41" }],
    ["path", { d: "M2 12h2" }],
    ["path", { d: "M20 12h2" }],
    ["path", { d: "m6.34 17.66-1.41 1.41" }],
    ["path", { d: "m19.07 4.93-1.41 1.41" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sunrise = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2v8" }],
    ["path", { d: "m4.93 10.93 1.41 1.41" }],
    ["path", { d: "M2 18h2" }],
    ["path", { d: "M20 18h2" }],
    ["path", { d: "m19.07 10.93-1.41 1.41" }],
    ["path", { d: "M22 22H2" }],
    ["path", { d: "m8 6 4-4 4 4" }],
    ["path", { d: "M16 18a4 4 0 0 0-8 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sunset = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 10V2" }],
    ["path", { d: "m4.93 10.93 1.41 1.41" }],
    ["path", { d: "M2 18h2" }],
    ["path", { d: "M20 18h2" }],
    ["path", { d: "m19.07 10.93-1.41 1.41" }],
    ["path", { d: "M22 22H2" }],
    ["path", { d: "m16 6-4 4-4-4" }],
    ["path", { d: "M16 18a4 4 0 0 0-8 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Superscript = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m4 19 8-8" }],
    ["path", { d: "m12 19-8-8" }],
    [
      "path",
      {
        d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SwatchBook = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" }],
    ["path", { d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" }],
    ["path", { d: "M 7 17h.01" }],
    [
      "path",
      { d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SwissFranc = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 21V3h8" }],
    ["path", { d: "M6 16h9" }],
    ["path", { d: "M10 9.5h7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const SwitchCamera = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }],
    ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }],
    ["circle", { cx: "12", cy: "12", r: "3" }],
    ["path", { d: "m18 22-3-3 3-3" }],
    ["path", { d: "m6 2 3 3-3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Sword = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }],
    ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }],
    ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }],
    ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Swords = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }],
    ["line", { x1: "13", x2: "19", y1: "19", y2: "13" }],
    ["line", { x1: "16", x2: "20", y1: "16", y2: "20" }],
    ["line", { x1: "19", x2: "21", y1: "21", y2: "19" }],
    ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }],
    ["line", { x1: "5", x2: "9", y1: "14", y2: "18" }],
    ["line", { x1: "7", x2: "4", y1: "17", y2: "20" }],
    ["line", { x1: "3", x2: "5", y1: "19", y2: "21" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Syringe = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m18 2 4 4" }],
    ["path", { d: "m17 7 3-3" }],
    ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" }],
    ["path", { d: "m9 11 4 4" }],
    ["path", { d: "m5 19-3 3" }],
    ["path", { d: "m14 4 6 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Table2 = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TableCellsMerge = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 21v-6" }],
    ["path", { d: "M12 9V3" }],
    ["path", { d: "M3 15h18" }],
    ["path", { d: "M3 9h18" }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TableCellsSplit = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 15V9" }],
    ["path", { d: "M3 15h18" }],
    ["path", { d: "M3 9h18" }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TableColumnsSplit = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 14v2" }],
    ["path", { d: "M14 20v2" }],
    ["path", { d: "M14 2v2" }],
    ["path", { d: "M14 8v2" }],
    ["path", { d: "M2 15h8" }],
    ["path", { d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" }],
    ["path", { d: "M2 9h8" }],
    ["path", { d: "M22 15h-4" }],
    ["path", { d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }],
    ["path", { d: "M22 9h-4" }],
    ["path", { d: "M5 3v18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TableOfContents = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 12H3" }],
    ["path", { d: "M16 18H3" }],
    ["path", { d: "M16 6H3" }],
    ["path", { d: "M21 12h.01" }],
    ["path", { d: "M21 18h.01" }],
    ["path", { d: "M21 6h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TableProperties = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 3v18" }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M21 9H3" }],
    ["path", { d: "M21 15H3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TableRowsSplit = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 10h2" }],
    ["path", { d: "M15 22v-8" }],
    ["path", { d: "M15 2v4" }],
    ["path", { d: "M2 10h2" }],
    ["path", { d: "M20 10h2" }],
    ["path", { d: "M3 19h18" }],
    ["path", { d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" }],
    ["path", { d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" }],
    ["path", { d: "M8 10h2" }],
    ["path", { d: "M9 22v-8" }],
    ["path", { d: "M9 2v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Table = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 3v18" }],
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 9h18" }],
    ["path", { d: "M3 15h18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TabletSmartphone = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2" }],
    ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }],
    ["path", { d: "M8 18h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tablet = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2" }],
    ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tablets = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "7", cy: "7", r: "5" }],
    ["circle", { cx: "17", cy: "17", r: "5" }],
    ["path", { d: "M12 17h10" }],
    ["path", { d: "m3.46 10.54 7.08-7.08" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tag = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
      }
    ],
    ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tags = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }],
    [
      "path",
      {
        d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"
      }
    ],
    ["circle", { cx: "6.5", cy: "9.5", r: ".5", fill: "currentColor" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tally1 = ["svg", defaultAttributes, [["path", { d: "M4 4v16" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tally2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 4v16" }],
    ["path", { d: "M9 4v16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tally3 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 4v16" }],
    ["path", { d: "M9 4v16" }],
    ["path", { d: "M14 4v16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tally4 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 4v16" }],
    ["path", { d: "M9 4v16" }],
    ["path", { d: "M14 4v16" }],
    ["path", { d: "M19 4v16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tally5 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 4v16" }],
    ["path", { d: "M9 4v16" }],
    ["path", { d: "M14 4v16" }],
    ["path", { d: "M19 4v16" }],
    ["path", { d: "M22 6 2 18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tangent = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "17", cy: "4", r: "2" }],
    ["path", { d: "M15.59 5.41 5.41 15.59" }],
    ["circle", { cx: "4", cy: "17", r: "2" }],
    ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Target = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["circle", { cx: "12", cy: "12", r: "6" }],
    ["circle", { cx: "12", cy: "12", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Telescope = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"
      }
    ],
    ["path", { d: "m13.56 11.747 4.332-.924" }],
    ["path", { d: "m16 21-3.105-6.21" }],
    [
      "path",
      {
        d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
      }
    ],
    ["path", { d: "m6.158 8.633 1.114 4.456" }],
    ["path", { d: "m8 21 3.105-6.21" }],
    ["circle", { cx: "12", cy: "13", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TentTree = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "4", cy: "4", r: "2" }],
    ["path", { d: "m14 5 3-3 3 3" }],
    ["path", { d: "m14 10 3-3 3 3" }],
    ["path", { d: "M17 14V2" }],
    ["path", { d: "M17 14H7l-5 8h20Z" }],
    ["path", { d: "M8 14v8" }],
    ["path", { d: "m9 14 5 8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tent = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3.5 21 14 3" }],
    ["path", { d: "M20.5 21 10 3" }],
    ["path", { d: "M15.5 21 12 15l-3.5 6" }],
    ["path", { d: "M2 21h20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Terminal = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "4 17 10 11 4 5" }],
    ["line", { x1: "12", x2: "20", y1: "19", y2: "19" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TestTubeDiagonal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" }],
    ["path", { d: "m16 2 6 6" }],
    ["path", { d: "M12 16H4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TestTube = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" }],
    ["path", { d: "M8.5 2h7" }],
    ["path", { d: "M14.5 16h-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TestTubes = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" }],
    ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" }],
    ["path", { d: "M3 2h7" }],
    ["path", { d: "M14 2h7" }],
    ["path", { d: "M9 16H4" }],
    ["path", { d: "M20 16h-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TextCursorInput = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" }],
    ["path", { d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" }],
    ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }],
    ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }],
    ["path", { d: "M9 7v10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TextCursor = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }],
    ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1" }],
    ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TextQuote = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 6H3" }],
    ["path", { d: "M21 12H8" }],
    ["path", { d: "M21 18H8" }],
    ["path", { d: "M3 12v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TextSearch = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 6H3" }],
    ["path", { d: "M10 12H3" }],
    ["path", { d: "M10 18H3" }],
    ["circle", { cx: "17", cy: "15", r: "3" }],
    ["path", { d: "m21 19-1.9-1.9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TextSelect = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M5 3a2 2 0 0 0-2 2" }],
    ["path", { d: "M19 3a2 2 0 0 1 2 2" }],
    ["path", { d: "M21 19a2 2 0 0 1-2 2" }],
    ["path", { d: "M5 21a2 2 0 0 1-2-2" }],
    ["path", { d: "M9 3h1" }],
    ["path", { d: "M9 21h1" }],
    ["path", { d: "M14 3h1" }],
    ["path", { d: "M14 21h1" }],
    ["path", { d: "M3 9v1" }],
    ["path", { d: "M21 9v1" }],
    ["path", { d: "M3 14v1" }],
    ["path", { d: "M21 14v1" }],
    ["line", { x1: "7", x2: "15", y1: "8", y2: "8" }],
    ["line", { x1: "7", x2: "17", y1: "12", y2: "12" }],
    ["line", { x1: "7", x2: "13", y1: "16", y2: "16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Text = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 6.1H3" }],
    ["path", { d: "M21 12.1H3" }],
    ["path", { d: "M15.1 18H3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Theater = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 10s3-3 3-8" }],
    ["path", { d: "M22 10s-3-3-3-8" }],
    ["path", { d: "M10 2c0 4.4-3.6 8-8 8" }],
    ["path", { d: "M14 2c0 4.4 3.6 8 8 8" }],
    ["path", { d: "M2 10s2 2 2 5" }],
    ["path", { d: "M22 10s-2 2-2 5" }],
    ["path", { d: "M8 15h8" }],
    ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }],
    ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ThermometerSnowflake = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 12h10" }],
    ["path", { d: "M9 4v16" }],
    ["path", { d: "m3 9 3 3-3 3" }],
    ["path", { d: "M12 6 9 9 6 6" }],
    ["path", { d: "m6 18 3-3 1.5 1.5" }],
    ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ThermometerSun = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 9a4 4 0 0 0-2 7.5" }],
    ["path", { d: "M12 3v2" }],
    ["path", { d: "m6.6 18.4-1.4 1.4" }],
    ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }],
    ["path", { d: "M4 13H2" }],
    ["path", { d: "M6.34 7.34 4.93 5.93" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Thermometer = [
  "svg",
  defaultAttributes,
  [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ThumbsDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 14V2" }],
    [
      "path",
      {
        d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ThumbsUp = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 10v12" }],
    [
      "path",
      {
        d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TicketCheck = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
      }
    ],
    ["path", { d: "m9 12 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TicketMinus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
      }
    ],
    ["path", { d: "M9 12h6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TicketPercent = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
      }
    ],
    ["path", { d: "M9 9h.01" }],
    ["path", { d: "m15 9-6 6" }],
    ["path", { d: "M15 15h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TicketPlus = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
      }
    ],
    ["path", { d: "M9 12h6" }],
    ["path", { d: "M12 9v6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TicketSlash = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
      }
    ],
    ["path", { d: "m9.5 14.5 5-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TicketX = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
      }
    ],
    ["path", { d: "m9.5 14.5 5-5" }],
    ["path", { d: "m9.5 9.5 5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ticket = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
      }
    ],
    ["path", { d: "M13 5v2" }],
    ["path", { d: "M13 17v2" }],
    ["path", { d: "M13 11v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TicketsPlane = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" }],
    ["path", { d: "m12 13.5 3.75.5" }],
    ["path", { d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" }],
    ["path", { d: "M6 10V8" }],
    ["path", { d: "M6 14v1" }],
    ["path", { d: "M6 19v2" }],
    ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tickets = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" }],
    ["path", { d: "M6 10V8" }],
    ["path", { d: "M6 14v1" }],
    ["path", { d: "M6 19v2" }],
    ["rect", { x: "2", y: "8", width: "20", height: "13", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TimerOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 2h4" }],
    ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }],
    ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M12 12v-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TimerReset = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 2h4" }],
    ["path", { d: "M12 14v-4" }],
    ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }],
    ["path", { d: "M9 17H4v5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Timer = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "10", x2: "14", y1: "2", y2: "2" }],
    ["line", { x1: "12", x2: "15", y1: "14", y2: "11" }],
    ["circle", { cx: "12", cy: "14", r: "8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ToggleLeft = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6" }],
    ["circle", { cx: "8", cy: "12", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ToggleRight = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6" }],
    ["circle", { cx: "16", cy: "12", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tornado = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 4H3" }],
    ["path", { d: "M18 8H6" }],
    ["path", { d: "M19 12H9" }],
    ["path", { d: "M16 16h-6" }],
    ["path", { d: "M11 20H9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Torus = [
  "svg",
  defaultAttributes,
  [
    ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2" }],
    ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TouchpadOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" }],
    ["path", { d: "M2 14h12" }],
    ["path", { d: "M22 14h-2" }],
    ["path", { d: "M12 20v-6" }],
    ["path", { d: "m2 2 20 20" }],
    ["path", { d: "M22 16V6a2 2 0 0 0-2-2H10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Touchpad = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
    ["path", { d: "M2 14h20" }],
    ["path", { d: "M12 20v-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TowerControl = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" }],
    ["path", { d: "M8 13v9" }],
    ["path", { d: "M16 22v-9" }],
    ["path", { d: "m9 6 1 7" }],
    ["path", { d: "m15 6-1 7" }],
    ["path", { d: "M12 6V2" }],
    ["path", { d: "M13 2h-2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ToyBrick = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1" }],
    ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }],
    ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tractor = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" }],
    ["path", { d: "M16 18h-5" }],
    ["path", { d: "M18 5a1 1 0 0 0-1 1v5.573" }],
    ["path", { d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" }],
    ["path", { d: "M4 11V4" }],
    ["path", { d: "M7 15h.01" }],
    ["path", { d: "M8 10.1V4" }],
    ["circle", { cx: "18", cy: "18", r: "2" }],
    ["circle", { cx: "7", cy: "15", r: "5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TrafficCone = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0" }],
    ["path", { d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3" }],
    [
      "path",
      {
        d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"
      }
    ],
    [
      "path",
      {
        d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TrainFrontTunnel = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10" }],
    ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }],
    ["path", { d: "M10 15h.01" }],
    ["path", { d: "M14 15h.01" }],
    ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }],
    ["path", { d: "m9 19-2 3" }],
    ["path", { d: "m15 19 2 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TrainFront = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1" }],
    ["path", { d: "m9 15-1-1" }],
    ["path", { d: "m15 15 1-1" }],
    ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" }],
    ["path", { d: "m8 19-2 3" }],
    ["path", { d: "m16 19 2 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TrainTrack = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 17 17 2" }],
    ["path", { d: "m2 14 8 8" }],
    ["path", { d: "m5 11 8 8" }],
    ["path", { d: "m8 8 8 8" }],
    ["path", { d: "m11 5 8 8" }],
    ["path", { d: "m14 2 8 8" }],
    ["path", { d: "M7 22 22 7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TramFront = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2" }],
    ["path", { d: "M4 11h16" }],
    ["path", { d: "M12 3v8" }],
    ["path", { d: "m8 19-2 3" }],
    ["path", { d: "m18 22-2-3" }],
    ["path", { d: "M8 15h.01" }],
    ["path", { d: "M16 15h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Trash2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 6h18" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }],
    ["line", { x1: "10", x2: "10", y1: "11", y2: "17" }],
    ["line", { x1: "14", x2: "14", y1: "11", y2: "17" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Trash = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 6h18" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TreeDeciduous = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"
      }
    ],
    ["path", { d: "M12 19v3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TreePalm = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" }],
    ["path", { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" }],
    [
      "path",
      {
        d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"
      }
    ],
    ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TreePine = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
      }
    ],
    ["path", { d: "M12 22v-3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Trees = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }],
    ["path", { d: "M7 16v6" }],
    ["path", { d: "M13 19v3" }],
    [
      "path",
      {
        d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Trello = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" }],
    ["rect", { width: "3", height: "9", x: "7", y: "7" }],
    ["rect", { width: "3", height: "5", x: "14", y: "7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TrendingDown = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7" }],
    ["polyline", { points: "16 17 22 17 22 11" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TrendingUpDown = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14.828 14.828 21 21" }],
    ["path", { d: "M21 16v5h-5" }],
    ["path", { d: "m21 3-9 9-4-4-6 6" }],
    ["path", { d: "M21 8V3h-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TrendingUp = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }],
    ["polyline", { points: "16 7 22 7 22 13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TriangleAlert = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }],
    ["path", { d: "M12 9v4" }],
    ["path", { d: "M12 17h.01" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TriangleRight = [
  "svg",
  defaultAttributes,
  [["path", { d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Triangle = [
  "svg",
  defaultAttributes,
  [["path", { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Trophy = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }],
    ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }],
    ["path", { d: "M4 22h16" }],
    ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" }],
    ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" }],
    ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Truck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }],
    ["path", { d: "M15 18H9" }],
    [
      "path",
      { d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" }
    ],
    ["circle", { cx: "17", cy: "18", r: "2" }],
    ["circle", { cx: "7", cy: "18", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Turtle = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"
      }
    ],
    ["path", { d: "M4.82 7.9 8 10" }],
    ["path", { d: "M15.18 7.9 12 10" }],
    ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TvMinimalPlay = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
      }
    ],
    ["path", { d: "M7 21h10" }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TvMinimal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M7 21h10" }],
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Tv = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", ry: "2" }],
    ["polyline", { points: "17 2 12 7 7 2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Twitch = [
  "svg",
  defaultAttributes,
  [["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Twitter = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const TypeOutline = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Type = [
  "svg",
  defaultAttributes,
  [
    ["polyline", { points: "4 7 4 4 20 4 20 7" }],
    ["line", { x1: "9", x2: "15", y1: "20", y2: "20" }],
    ["line", { x1: "12", x2: "12", y1: "4", y2: "20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UmbrellaOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2v1" }],
    ["path", { d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575" }],
    ["path", { d: "M17.5 12H22A10 10 0 0 0 9.004 3.455" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Umbrella = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z" }],
    ["path", { d: "M12 12v8a2 2 0 0 0 4 0" }],
    ["path", { d: "M12 2v1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Underline = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }],
    ["line", { x1: "4", x2: "20", y1: "20", y2: "20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Undo2 = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M9 14 4 9l5-5" }],
    ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UndoDot = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "17", r: "1" }],
    ["path", { d: "M3 7v6h6" }],
    ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Undo = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 7v6h6" }],
    ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UnfoldHorizontal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 12h6" }],
    ["path", { d: "M8 12H2" }],
    ["path", { d: "M12 2v2" }],
    ["path", { d: "M12 8v2" }],
    ["path", { d: "M12 14v2" }],
    ["path", { d: "M12 20v2" }],
    ["path", { d: "m19 15 3-3-3-3" }],
    ["path", { d: "m5 9-3 3 3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UnfoldVertical = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 22v-6" }],
    ["path", { d: "M12 8V2" }],
    ["path", { d: "M4 12H2" }],
    ["path", { d: "M10 12H8" }],
    ["path", { d: "M16 12h-2" }],
    ["path", { d: "M22 12h-2" }],
    ["path", { d: "m15 19-3 3-3-3" }],
    ["path", { d: "m15 5-3-3-3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Ungroup = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1" }],
    ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const University = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "10", r: "1" }],
    ["path", { d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" }],
    ["path", { d: "M6 17v.01" }],
    ["path", { d: "M6 13v.01" }],
    ["path", { d: "M18 17v.01" }],
    ["path", { d: "M18 13v.01" }],
    ["path", { d: "M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Unlink2 = [
  "svg",
  defaultAttributes,
  [["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" }]]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Unlink = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
      }
    ],
    [
      "path",
      { d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }
    ],
    ["line", { x1: "8", x2: "8", y1: "2", y2: "5" }],
    ["line", { x1: "2", x2: "5", y1: "8", y2: "8" }],
    ["line", { x1: "16", x2: "16", y1: "19", y2: "22" }],
    ["line", { x1: "19", x2: "22", y1: "16", y2: "16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Unplug = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m19 5 3-3" }],
    ["path", { d: "m2 22 3-3" }],
    ["path", { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }],
    ["path", { d: "M7.5 13.5 10 11" }],
    ["path", { d: "M10.5 16.5 13 14" }],
    ["path", { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Upload = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["polyline", { points: "17 8 12 3 7 8" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Usb = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "10", cy: "7", r: "1" }],
    ["circle", { cx: "4", cy: "20", r: "1" }],
    ["path", { d: "M4.7 19.3 19 5" }],
    ["path", { d: "m21 3-3 1 2 2Z" }],
    ["path", { d: "M9.26 7.68 5 12l2 5" }],
    ["path", { d: "m10 14 5 2 3.5-3.5" }],
    ["path", { d: "m18 12 1-1 1 1-1 1Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "9", cy: "7", r: "4" }],
    ["polyline", { points: "16 11 18 13 22 9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserCog = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "18", cy: "15", r: "3" }],
    ["circle", { cx: "9", cy: "7", r: "4" }],
    ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2" }],
    ["path", { d: "m21.7 16.4-.9-.3" }],
    ["path", { d: "m15.2 13.9-.9-.3" }],
    ["path", { d: "m16.6 18.7.3-.9" }],
    ["path", { d: "m19.1 12.2.3-.9" }],
    ["path", { d: "m19.6 18.7-.4-1" }],
    ["path", { d: "m16.8 12.3-.4-1" }],
    ["path", { d: "m14.3 16.6 1-.4" }],
    ["path", { d: "m20.7 13.8 1-.4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserMinus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "9", cy: "7", r: "4" }],
    ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserPen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M11.5 15H7a4 4 0 0 0-4 4v2" }],
    [
      "path",
      {
        d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      }
    ],
    ["circle", { cx: "10", cy: "7", r: "4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "9", cy: "7", r: "4" }],
    ["line", { x1: "19", x2: "19", y1: "8", y2: "14" }],
    ["line", { x1: "22", x2: "16", y1: "11", y2: "11" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserRoundCheck = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
    ["circle", { cx: "10", cy: "8", r: "5" }],
    ["path", { d: "m16 19 2 2 4-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserRoundCog = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }],
    ["circle", { cx: "10", cy: "8", r: "5" }],
    ["circle", { cx: "18", cy: "18", r: "3" }],
    ["path", { d: "m19.5 14.3-.4.9" }],
    ["path", { d: "m16.9 20.8-.4.9" }],
    ["path", { d: "m21.7 19.5-.9-.4" }],
    ["path", { d: "m15.2 16.9-.9-.4" }],
    ["path", { d: "m21.7 16.5-.9.4" }],
    ["path", { d: "m15.2 19.1-.9.4" }],
    ["path", { d: "m19.5 21.7-.4-.9" }],
    ["path", { d: "m16.9 15.2-.4-.9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserRoundMinus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
    ["circle", { cx: "10", cy: "8", r: "5" }],
    ["path", { d: "M22 19h-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserRoundPen = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 21a8 8 0 0 1 10.821-7.487" }],
    [
      "path",
      {
        d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
      }
    ],
    ["circle", { cx: "10", cy: "8", r: "5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserRoundPlus = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 21a8 8 0 0 1 13.292-6" }],
    ["circle", { cx: "10", cy: "8", r: "5" }],
    ["path", { d: "M19 16v6" }],
    ["path", { d: "M22 19h-6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserRoundSearch = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "10", cy: "8", r: "5" }],
    ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62" }],
    ["circle", { cx: "18", cy: "18", r: "3" }],
    ["path", { d: "m22 22-1.9-1.9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserRoundX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 21a8 8 0 0 1 11.873-7" }],
    ["circle", { cx: "10", cy: "8", r: "5" }],
    ["path", { d: "m17 17 5 5" }],
    ["path", { d: "m22 17-5 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserRound = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "8", r: "5" }],
    ["path", { d: "M20 21a8 8 0 0 0-16 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserSearch = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "10", cy: "7", r: "4" }],
    ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "17", cy: "17", r: "3" }],
    ["path", { d: "m21 21-1.9-1.9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UserX = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "9", cy: "7", r: "4" }],
    ["line", { x1: "17", x2: "22", y1: "8", y2: "13" }],
    ["line", { x1: "22", x2: "17", y1: "8", y2: "13" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const User = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "12", cy: "7", r: "4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UsersRound = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 21a8 8 0 0 0-16 0" }],
    ["circle", { cx: "10", cy: "8", r: "5" }],
    ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Users = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
    ["circle", { cx: "9", cy: "7", r: "4" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UtensilsCrossed = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" }],
    ["path", { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" }],
    ["path", { d: "m2.1 21.8 6.4-6.3" }],
    ["path", { d: "m19 5-7 7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Utensils = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }],
    ["path", { d: "M7 2v20" }],
    ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const UtilityPole = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 2v20" }],
    ["path", { d: "M2 5h20" }],
    ["path", { d: "M3 3v2" }],
    ["path", { d: "M7 3v2" }],
    ["path", { d: "M17 3v2" }],
    ["path", { d: "M21 3v2" }],
    ["path", { d: "m19 5-7 7-7-7" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Variable = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 21s-4-3-4-9 4-9 4-9" }],
    ["path", { d: "M16 3s4 3 4 9-4 9-4 9" }],
    ["line", { x1: "15", x2: "9", y1: "9", y2: "15" }],
    ["line", { x1: "9", x2: "15", y1: "9", y2: "15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Vault = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" }],
    ["path", { d: "m7.9 7.9 2.7 2.7" }],
    ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor" }],
    ["path", { d: "m13.4 10.6 2.7-2.7" }],
    ["circle", { cx: "7.5", cy: "16.5", r: ".5", fill: "currentColor" }],
    ["path", { d: "m7.9 16.1 2.7-2.7" }],
    ["circle", { cx: "16.5", cy: "16.5", r: ".5", fill: "currentColor" }],
    ["path", { d: "m13.4 13.4 2.7 2.7" }],
    ["circle", { cx: "12", cy: "12", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Vegan = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" }],
    ["path", { d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6" }],
    ["path", { d: "M17.41 3.6a10 10 0 1 0 3 3" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const VenetianMask = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"
      }
    ],
    ["path", { d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" }],
    ["path", { d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const VibrateOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }],
    ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }],
    ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }],
    ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Vibrate = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m2 8 2 2-2 2 2 2-2 2" }],
    ["path", { d: "m22 8-2 2 2 2-2 2 2 2" }],
    ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const VideoOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" }],
    ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Video = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }],
    ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Videotape = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }],
    ["path", { d: "M2 8h20" }],
    ["circle", { cx: "8", cy: "14", r: "2" }],
    ["path", { d: "M8 12h8" }],
    ["circle", { cx: "16", cy: "14", r: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const View = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }],
    ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }],
    ["circle", { cx: "12", cy: "12", r: "1" }],
    [
      "path",
      {
        d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Voicemail = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "6", cy: "12", r: "4" }],
    ["circle", { cx: "18", cy: "12", r: "4" }],
    ["line", { x1: "6", x2: "18", y1: "16", y2: "16" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Volume1 = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
      }
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Volume2 = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
      }
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6" }],
    ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const VolumeOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M16 9a5 5 0 0 1 .95 2.293" }],
    ["path", { d: "M19.364 5.636a9 9 0 0 1 1.889 9.96" }],
    ["path", { d: "m2 2 20 20" }],
    [
      "path",
      {
        d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"
      }
    ],
    ["path", { d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const VolumeX = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
      }
    ],
    ["line", { x1: "22", x2: "16", y1: "9", y2: "15" }],
    ["line", { x1: "16", x2: "22", y1: "9", y2: "15" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Volume = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Vote = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m9 12 2 2 4-4" }],
    ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }],
    ["path", { d: "M22 19H2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WalletCards = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }],
    [
      "path",
      { d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WalletMinimal = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 14h.01" }],
    ["path", { d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Wallet = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
      }
    ],
    ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Wallpaper = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "8", cy: "9", r: "2" }],
    [
      "path",
      {
        d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
      }
    ],
    ["path", { d: "M8 21h8" }],
    ["path", { d: "M12 17v4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WandSparkles = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
      }
    ],
    ["path", { d: "m14 7 3 3" }],
    ["path", { d: "M5 6v4" }],
    ["path", { d: "M19 14v4" }],
    ["path", { d: "M10 2v2" }],
    ["path", { d: "M7 8H3" }],
    ["path", { d: "M21 16h-4" }],
    ["path", { d: "M11 3H9" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Wand = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M15 4V2" }],
    ["path", { d: "M15 16v-2" }],
    ["path", { d: "M8 9h2" }],
    ["path", { d: "M20 9h2" }],
    ["path", { d: "M17.8 11.8 19 13" }],
    ["path", { d: "M15 9h.01" }],
    ["path", { d: "M17.8 6.2 19 5" }],
    ["path", { d: "m3 21 9-9" }],
    ["path", { d: "M12.2 6.2 11 5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Warehouse = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"
      }
    ],
    ["path", { d: "M6 18h12" }],
    ["path", { d: "M6 14h12" }],
    ["rect", { width: "12", height: "12", x: "6", y: "10" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WashingMachine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M3 6h3" }],
    ["path", { d: "M17 6h.01" }],
    ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2" }],
    ["circle", { cx: "12", cy: "13", r: "5" }],
    ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Watch = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "12", r: "6" }],
    ["polyline", { points: "12 10 12 12 13 13" }],
    ["path", { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" }],
    ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Waves = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
      }
    ],
    [
      "path",
      {
        d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
      }
    ],
    [
      "path",
      {
        d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Waypoints = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "4.5", r: "2.5" }],
    ["path", { d: "m10.2 6.3-3.9 3.9" }],
    ["circle", { cx: "4.5", cy: "12", r: "2.5" }],
    ["path", { d: "M7 12h10" }],
    ["circle", { cx: "19.5", cy: "12", r: "2.5" }],
    ["path", { d: "m13.8 17.7 3.9-3.9" }],
    ["circle", { cx: "12", cy: "19.5", r: "2.5" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Webcam = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "10", r: "8" }],
    ["circle", { cx: "12", cy: "10", r: "3" }],
    ["path", { d: "M7 22h10" }],
    ["path", { d: "M12 22v-4" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WebhookOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" }],
    ["path", { d: "M9 3.4a4 4 0 0 1 6.52.66" }],
    ["path", { d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" }],
    ["path", { d: "M20.3 20.3a4 4 0 0 1-2.3.7" }],
    ["path", { d: "M18.6 13a4 4 0 0 1 3.357 3.414" }],
    ["path", { d: "m12 6 .6 1" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Webhook = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" }],
    ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" }],
    ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Weight = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "12", cy: "5", r: "3" }],
    [
      "path",
      {
        d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WheatOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m2 22 10-10" }],
    ["path", { d: "m16 8-1.17 1.17" }],
    [
      "path",
      {
        d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
      }
    ],
    ["path", { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" }],
    ["path", { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" }],
    ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }],
    [
      "path",
      {
        d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
      }
    ],
    ["path", { d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" }],
    ["path", { d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" }],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Wheat = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M2 22 16 8" }],
    [
      "path",
      {
        d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
      }
    ],
    [
      "path",
      { d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }
    ],
    [
      "path",
      {
        d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
      }
    ],
    ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }],
    [
      "path",
      {
        d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
      }
    ],
    [
      "path",
      {
        d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
      }
    ],
    [
      "path",
      {
        d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WholeWord = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "7", cy: "12", r: "3" }],
    ["path", { d: "M10 9v6" }],
    ["circle", { cx: "17", cy: "12", r: "3" }],
    ["path", { d: "M14 7v8" }],
    ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WifiHigh = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 20h.01" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WifiLow = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 20h.01" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WifiOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 20h.01" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69" }],
    ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643" }],
    ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764" }],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WifiZero = ["svg", defaultAttributes, [["path", { d: "M12 20h.01" }]]];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Wifi = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M12 20h.01" }],
    ["path", { d: "M2 8.82a15 15 0 0 1 20 0" }],
    ["path", { d: "M5 12.859a10 10 0 0 1 14 0" }],
    ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Wind = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" }],
    ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2" }],
    ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WineOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 22h8" }],
    ["path", { d: "M7 10h3m7 0h-1.343" }],
    ["path", { d: "M12 15v7" }],
    [
      "path",
      {
        d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"
      }
    ],
    ["line", { x1: "2", x2: "22", y1: "2", y2: "22" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Wine = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M8 22h8" }],
    ["path", { d: "M7 10h10" }],
    ["path", { d: "M12 15v7" }],
    ["path", { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Workflow = [
  "svg",
  defaultAttributes,
  [
    ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2" }],
    ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4" }],
    ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Worm = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "m19 12-1.5 3" }],
    ["path", { d: "M19.63 18.81 22 20" }],
    [
      "path",
      {
        d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const WrapText = [
  "svg",
  defaultAttributes,
  [
    ["line", { x1: "3", x2: "21", y1: "6", y2: "6" }],
    ["path", { d: "M3 12h15a3 3 0 1 1 0 6h-4" }],
    ["polyline", { points: "16 16 14 18 16 20" }],
    ["line", { x1: "3", x2: "10", y1: "18", y2: "18" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Wrench = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const X = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M18 6 6 18" }],
    ["path", { d: "m6 6 12 12" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Youtube = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
      }
    ],
    ["path", { d: "m10 15 5-3-5-3z" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ZapOff = [
  "svg",
  defaultAttributes,
  [
    ["path", { d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" }],
    ["path", { d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" }],
    [
      "path",
      {
        d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"
      }
    ],
    ["path", { d: "m2 2 20 20" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const Zap = [
  "svg",
  defaultAttributes,
  [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      }
    ]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ZoomIn = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "11", cy: "11", r: "8" }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }],
    ["line", { x1: "11", x2: "11", y1: "8", y2: "14" }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const ZoomOut = [
  "svg",
  defaultAttributes,
  [
    ["circle", { cx: "11", cy: "11", r: "8" }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65" }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11" }]
  ]
];

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var iconsAndAliases = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AArrowDown: AArrowDown,
  AArrowUp: AArrowUp,
  ALargeSmall: ALargeSmall,
  Accessibility: Accessibility,
  Activity: Activity,
  AirVent: AirVent,
  Airplay: Airplay,
  AlarmCheck: AlarmClockCheck,
  AlarmClockCheck: AlarmClockCheck,
  AlarmClockMinus: AlarmClockMinus,
  AlarmMinus: AlarmClockMinus,
  AlarmClockOff: AlarmClockOff,
  AlarmClockPlus: AlarmClockPlus,
  AlarmPlus: AlarmClockPlus,
  AlarmClock: AlarmClock,
  AlarmSmoke: AlarmSmoke,
  Album: Album,
  AlignCenterHorizontal: AlignCenterHorizontal,
  AlignCenterVertical: AlignCenterVertical,
  AlignCenter: AlignCenter,
  AlignEndHorizontal: AlignEndHorizontal,
  AlignEndVertical: AlignEndVertical,
  AlignHorizontalDistributeCenter: AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd: AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart: AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter: AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd: AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart: AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround: AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween: AlignHorizontalSpaceBetween,
  AlignJustify: AlignJustify,
  AlignLeft: AlignLeft,
  AlignRight: AlignRight,
  AlignStartHorizontal: AlignStartHorizontal,
  AlignStartVertical: AlignStartVertical,
  AlignVerticalDistributeCenter: AlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd: AlignVerticalDistributeEnd,
  AlignVerticalDistributeStart: AlignVerticalDistributeStart,
  AlignVerticalJustifyCenter: AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd: AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart: AlignVerticalJustifyStart,
  AlignVerticalSpaceAround: AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween: AlignVerticalSpaceBetween,
  Ambulance: Ambulance,
  Ampersand: Ampersand,
  Ampersands: Ampersands,
  Amphora: Amphora,
  Anchor: Anchor,
  Angry: Angry,
  Annoyed: Annoyed,
  Antenna: Antenna,
  Anvil: Anvil,
  Aperture: Aperture,
  AppWindowMac: AppWindowMac,
  AppWindow: AppWindow,
  Apple: Apple,
  ArchiveRestore: ArchiveRestore,
  ArchiveX: ArchiveX,
  Archive: Archive,
  Armchair: Armchair,
  ArrowBigDownDash: ArrowBigDownDash,
  ArrowBigDown: ArrowBigDown,
  ArrowBigLeftDash: ArrowBigLeftDash,
  ArrowBigLeft: ArrowBigLeft,
  ArrowBigRightDash: ArrowBigRightDash,
  ArrowBigRight: ArrowBigRight,
  ArrowBigUpDash: ArrowBigUpDash,
  ArrowBigUp: ArrowBigUp,
  ArrowDown01: ArrowDown01,
  ArrowDown10: ArrowDown10,
  ArrowDownAZ: ArrowDownAZ,
  ArrowDownAz: ArrowDownAZ,
  ArrowDownFromLine: ArrowDownFromLine,
  ArrowDownLeft: ArrowDownLeft,
  ArrowDownNarrowWide: ArrowDownNarrowWide,
  ArrowDownRight: ArrowDownRight,
  ArrowDownToDot: ArrowDownToDot,
  ArrowDownToLine: ArrowDownToLine,
  ArrowDownUp: ArrowDownUp,
  ArrowDownWideNarrow: ArrowDownWideNarrow,
  SortDesc: ArrowDownWideNarrow,
  ArrowDownZA: ArrowDownZA,
  ArrowDownZa: ArrowDownZA,
  ArrowDown: ArrowDown,
  ArrowLeftFromLine: ArrowLeftFromLine,
  ArrowLeftRight: ArrowLeftRight,
  ArrowLeftToLine: ArrowLeftToLine,
  ArrowLeft: ArrowLeft,
  ArrowRightFromLine: ArrowRightFromLine,
  ArrowRightLeft: ArrowRightLeft,
  ArrowRightToLine: ArrowRightToLine,
  ArrowRight: ArrowRight,
  ArrowUp01: ArrowUp01,
  ArrowUp10: ArrowUp10,
  ArrowUpAZ: ArrowUpAZ,
  ArrowUpAz: ArrowUpAZ,
  ArrowUpDown: ArrowUpDown,
  ArrowUpFromDot: ArrowUpFromDot,
  ArrowUpFromLine: ArrowUpFromLine,
  ArrowUpLeft: ArrowUpLeft,
  ArrowUpNarrowWide: ArrowUpNarrowWide,
  SortAsc: ArrowUpNarrowWide,
  ArrowUpRight: ArrowUpRight,
  ArrowUpToLine: ArrowUpToLine,
  ArrowUpWideNarrow: ArrowUpWideNarrow,
  ArrowUpZA: ArrowUpZA,
  ArrowUpZa: ArrowUpZA,
  ArrowUp: ArrowUp,
  ArrowsUpFromLine: ArrowsUpFromLine,
  Asterisk: Asterisk,
  AtSign: AtSign,
  Atom: Atom,
  AudioLines: AudioLines,
  AudioWaveform: AudioWaveform,
  Award: Award,
  Axe: Axe,
  Axis3D: Axis3d,
  Axis3d: Axis3d,
  Baby: Baby,
  Backpack: Backpack,
  BadgeAlert: BadgeAlert,
  BadgeCent: BadgeCent,
  BadgeCheck: BadgeCheck,
  Verified: BadgeCheck,
  BadgeDollarSign: BadgeDollarSign,
  BadgeEuro: BadgeEuro,
  BadgeHelp: BadgeHelp,
  BadgeIndianRupee: BadgeIndianRupee,
  BadgeInfo: BadgeInfo,
  BadgeJapaneseYen: BadgeJapaneseYen,
  BadgeMinus: BadgeMinus,
  BadgePercent: BadgePercent,
  BadgePlus: BadgePlus,
  BadgePoundSterling: BadgePoundSterling,
  BadgeRussianRuble: BadgeRussianRuble,
  BadgeSwissFranc: BadgeSwissFranc,
  BadgeX: BadgeX,
  Badge: Badge,
  BaggageClaim: BaggageClaim,
  Ban: Ban,
  Banana: Banana,
  Bandage: Bandage,
  Banknote: Banknote,
  Barcode: Barcode,
  Baseline: Baseline,
  Bath: Bath,
  BatteryCharging: BatteryCharging,
  BatteryFull: BatteryFull,
  BatteryLow: BatteryLow,
  BatteryMedium: BatteryMedium,
  BatteryWarning: BatteryWarning,
  Battery: Battery,
  Beaker: Beaker,
  BeanOff: BeanOff,
  Bean: Bean,
  BedDouble: BedDouble,
  BedSingle: BedSingle,
  Bed: Bed,
  Beef: Beef,
  BeerOff: BeerOff,
  Beer: Beer,
  BellDot: BellDot,
  BellElectric: BellElectric,
  BellMinus: BellMinus,
  BellOff: BellOff,
  BellPlus: BellPlus,
  BellRing: BellRing,
  Bell: Bell,
  BetweenHorizonalEnd: BetweenHorizontalEnd,
  BetweenHorizontalEnd: BetweenHorizontalEnd,
  BetweenHorizonalStart: BetweenHorizontalStart,
  BetweenHorizontalStart: BetweenHorizontalStart,
  BetweenVerticalEnd: BetweenVerticalEnd,
  BetweenVerticalStart: BetweenVerticalStart,
  BicepsFlexed: BicepsFlexed,
  Bike: Bike,
  Binary: Binary,
  Binoculars: Binoculars,
  Biohazard: Biohazard,
  Bird: Bird,
  Bitcoin: Bitcoin,
  Blend: Blend,
  Blinds: Blinds,
  Blocks: Blocks,
  BluetoothConnected: BluetoothConnected,
  BluetoothOff: BluetoothOff,
  BluetoothSearching: BluetoothSearching,
  Bluetooth: Bluetooth,
  Bold: Bold,
  Bolt: Bolt,
  Bomb: Bomb,
  Bone: Bone,
  BookA: BookA,
  BookAudio: BookAudio,
  BookCheck: BookCheck,
  BookCopy: BookCopy,
  BookDashed: BookDashed,
  BookTemplate: BookDashed,
  BookDown: BookDown,
  BookHeadphones: BookHeadphones,
  BookHeart: BookHeart,
  BookImage: BookImage,
  BookKey: BookKey,
  BookLock: BookLock,
  BookMarked: BookMarked,
  BookMinus: BookMinus,
  BookOpenCheck: BookOpenCheck,
  BookOpenText: BookOpenText,
  BookOpen: BookOpen,
  BookPlus: BookPlus,
  BookText: BookText,
  BookType: BookType,
  BookUp2: BookUp2,
  BookUp: BookUp,
  BookUser: BookUser,
  BookX: BookX,
  Book: Book,
  BookmarkCheck: BookmarkCheck,
  BookmarkMinus: BookmarkMinus,
  BookmarkPlus: BookmarkPlus,
  BookmarkX: BookmarkX,
  Bookmark: Bookmark,
  BoomBox: BoomBox,
  BotMessageSquare: BotMessageSquare,
  BotOff: BotOff,
  Bot: Bot,
  Box: Box,
  Boxes: Boxes,
  Braces: Braces,
  CurlyBraces: Braces,
  Brackets: Brackets,
  BrainCircuit: BrainCircuit,
  BrainCog: BrainCog,
  Brain: Brain,
  BrickWall: BrickWall,
  BriefcaseBusiness: BriefcaseBusiness,
  BriefcaseConveyorBelt: BriefcaseConveyorBelt,
  BriefcaseMedical: BriefcaseMedical,
  Briefcase: Briefcase,
  BringToFront: BringToFront,
  Brush: Brush,
  BugOff: BugOff,
  BugPlay: BugPlay,
  Bug: Bug,
  Building2: Building2,
  Building: Building,
  BusFront: BusFront,
  Bus: Bus,
  CableCar: CableCar,
  Cable: Cable,
  CakeSlice: CakeSlice,
  Cake: Cake,
  Calculator: Calculator,
  CalendarArrowDown: CalendarArrowDown,
  CalendarArrowUp: CalendarArrowUp,
  CalendarCheck2: CalendarCheck2,
  CalendarCheck: CalendarCheck,
  CalendarClock: CalendarClock,
  CalendarCog: CalendarCog,
  CalendarDays: CalendarDays,
  CalendarFold: CalendarFold,
  CalendarHeart: CalendarHeart,
  CalendarMinus2: CalendarMinus2,
  CalendarMinus: CalendarMinus,
  CalendarOff: CalendarOff,
  CalendarPlus2: CalendarPlus2,
  CalendarPlus: CalendarPlus,
  CalendarRange: CalendarRange,
  CalendarSearch: CalendarSearch,
  CalendarX2: CalendarX2,
  CalendarX: CalendarX,
  Calendar: Calendar,
  CameraOff: CameraOff,
  Camera: Camera,
  CandyCane: CandyCane,
  CandyOff: CandyOff,
  Candy: Candy,
  Cannabis: Cannabis,
  CaptionsOff: CaptionsOff,
  Captions: Captions,
  Subtitles: Captions,
  CarFront: CarFront,
  CarTaxiFront: CarTaxiFront,
  Car: Car,
  Caravan: Caravan,
  Carrot: Carrot,
  CaseLower: CaseLower,
  CaseSensitive: CaseSensitive,
  CaseUpper: CaseUpper,
  CassetteTape: CassetteTape,
  Cast: Cast,
  Castle: Castle,
  Cat: Cat,
  Cctv: Cctv,
  AreaChart: ChartArea,
  ChartArea: ChartArea,
  BarChartHorizontalBig: ChartBarBig,
  ChartBarBig: ChartBarBig,
  ChartBarDecreasing: ChartBarDecreasing,
  ChartBarIncreasing: ChartBarIncreasing,
  ChartBarStacked: ChartBarStacked,
  BarChartHorizontal: ChartBar,
  ChartBar: ChartBar,
  CandlestickChart: ChartCandlestick,
  ChartCandlestick: ChartCandlestick,
  BarChartBig: ChartColumnBig,
  ChartColumnBig: ChartColumnBig,
  ChartColumnDecreasing: ChartColumnDecreasing,
  BarChart4: ChartColumnIncreasing,
  ChartColumnIncreasing: ChartColumnIncreasing,
  ChartColumnStacked: ChartColumnStacked,
  BarChart3: ChartColumn,
  ChartColumn: ChartColumn,
  ChartGantt: ChartGantt,
  ChartLine: ChartLine,
  LineChart: ChartLine,
  ChartNetwork: ChartNetwork,
  ChartNoAxesColumnDecreasing: ChartNoAxesColumnDecreasing,
  BarChart: ChartNoAxesColumnIncreasing,
  ChartNoAxesColumnIncreasing: ChartNoAxesColumnIncreasing,
  BarChart2: ChartNoAxesColumn,
  ChartNoAxesColumn: ChartNoAxesColumn,
  ChartNoAxesCombined: ChartNoAxesCombined,
  ChartNoAxesGantt: ChartNoAxesGantt,
  GanttChart: ChartNoAxesGantt,
  ChartPie: ChartPie,
  PieChart: ChartPie,
  ChartScatter: ChartScatter,
  ScatterChart: ChartScatter,
  ChartSpline: ChartSpline,
  CheckCheck: CheckCheck,
  Check: Check,
  ChefHat: ChefHat,
  Cherry: Cherry,
  ChevronDown: ChevronDown,
  ChevronFirst: ChevronFirst,
  ChevronLast: ChevronLast,
  ChevronLeft: ChevronLeft,
  ChevronRight: ChevronRight,
  ChevronUp: ChevronUp,
  ChevronsDownUp: ChevronsDownUp,
  ChevronsDown: ChevronsDown,
  ChevronsLeftRightEllipsis: ChevronsLeftRightEllipsis,
  ChevronsLeftRight: ChevronsLeftRight,
  ChevronsLeft: ChevronsLeft,
  ChevronsRightLeft: ChevronsRightLeft,
  ChevronsRight: ChevronsRight,
  ChevronsUpDown: ChevronsUpDown,
  ChevronsUp: ChevronsUp,
  Chrome: Chrome,
  Church: Church,
  CigaretteOff: CigaretteOff,
  Cigarette: Cigarette,
  AlertCircle: CircleAlert,
  CircleAlert: CircleAlert,
  ArrowDownCircle: CircleArrowDown,
  CircleArrowDown: CircleArrowDown,
  ArrowLeftCircle: CircleArrowLeft,
  CircleArrowLeft: CircleArrowLeft,
  ArrowDownLeftFromCircle: CircleArrowOutDownLeft,
  CircleArrowOutDownLeft: CircleArrowOutDownLeft,
  ArrowDownRightFromCircle: CircleArrowOutDownRight,
  CircleArrowOutDownRight: CircleArrowOutDownRight,
  ArrowUpLeftFromCircle: CircleArrowOutUpLeft,
  CircleArrowOutUpLeft: CircleArrowOutUpLeft,
  ArrowUpRightFromCircle: CircleArrowOutUpRight,
  CircleArrowOutUpRight: CircleArrowOutUpRight,
  ArrowRightCircle: CircleArrowRight,
  CircleArrowRight: CircleArrowRight,
  ArrowUpCircle: CircleArrowUp,
  CircleArrowUp: CircleArrowUp,
  CheckCircle: CircleCheckBig,
  CircleCheckBig: CircleCheckBig,
  CheckCircle2: CircleCheck,
  CircleCheck: CircleCheck,
  ChevronDownCircle: CircleChevronDown,
  CircleChevronDown: CircleChevronDown,
  ChevronLeftCircle: CircleChevronLeft,
  CircleChevronLeft: CircleChevronLeft,
  ChevronRightCircle: CircleChevronRight,
  CircleChevronRight: CircleChevronRight,
  ChevronUpCircle: CircleChevronUp,
  CircleChevronUp: CircleChevronUp,
  CircleDashed: CircleDashed,
  CircleDivide: CircleDivide,
  DivideCircle: CircleDivide,
  CircleDollarSign: CircleDollarSign,
  CircleDotDashed: CircleDotDashed,
  CircleDot: CircleDot,
  CircleEllipsis: CircleEllipsis,
  CircleEqual: CircleEqual,
  CircleFadingArrowUp: CircleFadingArrowUp,
  CircleFadingPlus: CircleFadingPlus,
  CircleGauge: CircleGauge,
  GaugeCircle: CircleGauge,
  CircleHelp: CircleHelp,
  HelpCircle: CircleHelp,
  CircleMinus: CircleMinus,
  MinusCircle: CircleMinus,
  CircleOff: CircleOff,
  CircleParkingOff: CircleParkingOff,
  ParkingCircleOff: CircleParkingOff,
  CircleParking: CircleParking,
  ParkingCircle: CircleParking,
  CirclePause: CirclePause,
  PauseCircle: CirclePause,
  CirclePercent: CirclePercent,
  PercentCircle: CirclePercent,
  CirclePlay: CirclePlay,
  PlayCircle: CirclePlay,
  CirclePlus: CirclePlus,
  PlusCircle: CirclePlus,
  CirclePower: CirclePower,
  PowerCircle: CirclePower,
  CircleSlash2: CircleSlash2,
  CircleSlashed: CircleSlash2,
  CircleSlash: CircleSlash,
  CircleStop: CircleStop,
  StopCircle: CircleStop,
  CircleUserRound: CircleUserRound,
  UserCircle2: CircleUserRound,
  CircleUser: CircleUser,
  UserCircle: CircleUser,
  CircleX: CircleX,
  XCircle: CircleX,
  Circle: Circle,
  CircuitBoard: CircuitBoard,
  Citrus: Citrus,
  Clapperboard: Clapperboard,
  ClipboardCheck: ClipboardCheck,
  ClipboardCopy: ClipboardCopy,
  ClipboardList: ClipboardList,
  ClipboardMinus: ClipboardMinus,
  ClipboardPaste: ClipboardPaste,
  ClipboardPenLine: ClipboardPenLine,
  ClipboardSignature: ClipboardPenLine,
  ClipboardEdit: ClipboardPen,
  ClipboardPen: ClipboardPen,
  ClipboardPlus: ClipboardPlus,
  ClipboardType: ClipboardType,
  ClipboardX: ClipboardX,
  Clipboard: Clipboard,
  Clock1: Clock1,
  Clock10: Clock10,
  Clock11: Clock11,
  Clock12: Clock12,
  Clock2: Clock2,
  Clock3: Clock3,
  Clock4: Clock4,
  Clock5: Clock5,
  Clock6: Clock6,
  Clock7: Clock7,
  Clock8: Clock8,
  Clock9: Clock9,
  ClockAlert: ClockAlert,
  ClockArrowDown: ClockArrowDown,
  ClockArrowUp: ClockArrowUp,
  Clock: Clock,
  CloudCog: CloudCog,
  CloudDownload: CloudDownload,
  DownloadCloud: CloudDownload,
  CloudDrizzle: CloudDrizzle,
  CloudFog: CloudFog,
  CloudHail: CloudHail,
  CloudLightning: CloudLightning,
  CloudMoonRain: CloudMoonRain,
  CloudMoon: CloudMoon,
  CloudOff: CloudOff,
  CloudRainWind: CloudRainWind,
  CloudRain: CloudRain,
  CloudSnow: CloudSnow,
  CloudSunRain: CloudSunRain,
  CloudSun: CloudSun,
  CloudUpload: CloudUpload,
  UploadCloud: CloudUpload,
  Cloud: Cloud,
  Cloudy: Cloudy,
  Clover: Clover,
  Club: Club,
  Code2: CodeXml,
  CodeXml: CodeXml,
  Code: Code,
  Codepen: Codepen,
  Codesandbox: Codesandbox,
  Coffee: Coffee,
  Cog: Cog,
  Coins: Coins,
  Columns: Columns2,
  Columns2: Columns2,
  Columns3: Columns3,
  PanelsLeftRight: Columns3,
  Columns4: Columns4,
  Combine: Combine,
  Command: Command,
  Compass: Compass,
  Component: Component,
  Computer: Computer,
  ConciergeBell: ConciergeBell,
  Cone: Cone,
  Construction: Construction,
  Contact2: ContactRound,
  ContactRound: ContactRound,
  Contact: Contact,
  Container: Container,
  Contrast: Contrast,
  Cookie: Cookie,
  CookingPot: CookingPot,
  CopyCheck: CopyCheck,
  CopyMinus: CopyMinus,
  CopyPlus: CopyPlus,
  CopySlash: CopySlash,
  CopyX: CopyX,
  Copy: Copy,
  Copyleft: Copyleft,
  Copyright: Copyright,
  CornerDownLeft: CornerDownLeft,
  CornerDownRight: CornerDownRight,
  CornerLeftDown: CornerLeftDown,
  CornerLeftUp: CornerLeftUp,
  CornerRightDown: CornerRightDown,
  CornerRightUp: CornerRightUp,
  CornerUpLeft: CornerUpLeft,
  CornerUpRight: CornerUpRight,
  Cpu: Cpu,
  CreativeCommons: CreativeCommons,
  CreditCard: CreditCard,
  Croissant: Croissant,
  Crop: Crop,
  Cross: Cross,
  Crosshair: Crosshair,
  Crown: Crown,
  Cuboid: Cuboid,
  CupSoda: CupSoda,
  Currency: Currency,
  Cylinder: Cylinder,
  Dam: Dam,
  DatabaseBackup: DatabaseBackup,
  DatabaseZap: DatabaseZap,
  Database: Database,
  Delete: Delete,
  Dessert: Dessert,
  Diameter: Diameter,
  DiamondMinus: DiamondMinus,
  DiamondPercent: DiamondPercent,
  PercentDiamond: DiamondPercent,
  DiamondPlus: DiamondPlus,
  Diamond: Diamond,
  Dice1: Dice1,
  Dice2: Dice2,
  Dice3: Dice3,
  Dice4: Dice4,
  Dice5: Dice5,
  Dice6: Dice6,
  Dices: Dices,
  Diff: Diff,
  Disc2: Disc2,
  Disc3: Disc3,
  DiscAlbum: DiscAlbum,
  Disc: Disc,
  Divide: Divide,
  DnaOff: DnaOff,
  Dna: Dna,
  Dock: Dock,
  Dog: Dog,
  DollarSign: DollarSign,
  Donut: Donut,
  DoorClosed: DoorClosed,
  DoorOpen: DoorOpen,
  Dot: Dot,
  Download: Download,
  DraftingCompass: DraftingCompass,
  Drama: Drama,
  Dribbble: Dribbble,
  Drill: Drill,
  Droplet: Droplet,
  Droplets: Droplets,
  Drum: Drum,
  Drumstick: Drumstick,
  Dumbbell: Dumbbell,
  EarOff: EarOff,
  Ear: Ear,
  EarthLock: EarthLock,
  Earth: Earth,
  Globe2: Earth,
  Eclipse: Eclipse,
  EggFried: EggFried,
  EggOff: EggOff,
  Egg: Egg,
  EllipsisVertical: EllipsisVertical,
  MoreVertical: EllipsisVertical,
  Ellipsis: Ellipsis,
  MoreHorizontal: Ellipsis,
  EqualNot: EqualNot,
  Equal: Equal,
  Eraser: Eraser,
  EthernetPort: EthernetPort,
  Euro: Euro,
  Expand: Expand,
  ExternalLink: ExternalLink,
  EyeOff: EyeOff,
  Eye: Eye,
  Facebook: Facebook,
  Factory: Factory,
  Fan: Fan,
  FastForward: FastForward,
  Feather: Feather,
  Fence: Fence,
  FerrisWheel: FerrisWheel,
  Figma: Figma,
  FileArchive: FileArchive,
  FileAudio2: FileAudio2,
  FileAudio: FileAudio,
  FileAxis3D: FileAxis3d,
  FileAxis3d: FileAxis3d,
  FileBadge2: FileBadge2,
  FileBadge: FileBadge,
  FileBox: FileBox,
  FileBarChart: FileChartColumnIncreasing,
  FileChartColumnIncreasing: FileChartColumnIncreasing,
  FileBarChart2: FileChartColumn,
  FileChartColumn: FileChartColumn,
  FileChartLine: FileChartLine,
  FileLineChart: FileChartLine,
  FileChartPie: FileChartPie,
  FilePieChart: FileChartPie,
  FileCheck2: FileCheck2,
  FileCheck: FileCheck,
  FileClock: FileClock,
  FileCode2: FileCode2,
  FileCode: FileCode,
  FileCog: FileCog,
  FileCog2: FileCog,
  FileDiff: FileDiff,
  FileDigit: FileDigit,
  FileDown: FileDown,
  FileHeart: FileHeart,
  FileImage: FileImage,
  FileInput: FileInput,
  FileJson2: FileJson2,
  FileJson: FileJson,
  FileKey2: FileKey2,
  FileKey: FileKey,
  FileLock2: FileLock2,
  FileLock: FileLock,
  FileMinus2: FileMinus2,
  FileMinus: FileMinus,
  FileMusic: FileMusic,
  FileOutput: FileOutput,
  FilePenLine: FilePenLine,
  FileSignature: FilePenLine,
  FileEdit: FilePen,
  FilePen: FilePen,
  FilePlus2: FilePlus2,
  FilePlus: FilePlus,
  FileQuestion: FileQuestion,
  FileScan: FileScan,
  FileSearch2: FileSearch2,
  FileSearch: FileSearch,
  FileSliders: FileSliders,
  FileSpreadsheet: FileSpreadsheet,
  FileStack: FileStack,
  FileSymlink: FileSymlink,
  FileTerminal: FileTerminal,
  FileText: FileText,
  FileType2: FileType2,
  FileType: FileType,
  FileUp: FileUp,
  FileUser: FileUser,
  FileVideo2: FileVideo2,
  FileVideo: FileVideo,
  FileVolume2: FileVolume2,
  FileVolume: FileVolume,
  FileWarning: FileWarning,
  FileX2: FileX2,
  FileX: FileX,
  File: File,
  Files: Files,
  Film: Film,
  FilterX: FilterX,
  Filter: Filter,
  Fingerprint: Fingerprint,
  FireExtinguisher: FireExtinguisher,
  FishOff: FishOff,
  FishSymbol: FishSymbol,
  Fish: Fish,
  FlagOff: FlagOff,
  FlagTriangleLeft: FlagTriangleLeft,
  FlagTriangleRight: FlagTriangleRight,
  Flag: Flag,
  FlameKindling: FlameKindling,
  Flame: Flame,
  FlashlightOff: FlashlightOff,
  Flashlight: Flashlight,
  FlaskConicalOff: FlaskConicalOff,
  FlaskConical: FlaskConical,
  FlaskRound: FlaskRound,
  FlipHorizontal2: FlipHorizontal2,
  FlipHorizontal: FlipHorizontal,
  FlipVertical2: FlipVertical2,
  FlipVertical: FlipVertical,
  Flower2: Flower2,
  Flower: Flower,
  Focus: Focus,
  FoldHorizontal: FoldHorizontal,
  FoldVertical: FoldVertical,
  FolderArchive: FolderArchive,
  FolderCheck: FolderCheck,
  FolderClock: FolderClock,
  FolderClosed: FolderClosed,
  FolderCode: FolderCode,
  FolderCog: FolderCog,
  FolderCog2: FolderCog,
  FolderDot: FolderDot,
  FolderDown: FolderDown,
  FolderGit2: FolderGit2,
  FolderGit: FolderGit,
  FolderHeart: FolderHeart,
  FolderInput: FolderInput,
  FolderKanban: FolderKanban,
  FolderKey: FolderKey,
  FolderLock: FolderLock,
  FolderMinus: FolderMinus,
  FolderOpenDot: FolderOpenDot,
  FolderOpen: FolderOpen,
  FolderOutput: FolderOutput,
  FolderEdit: FolderPen,
  FolderPen: FolderPen,
  FolderPlus: FolderPlus,
  FolderRoot: FolderRoot,
  FolderSearch2: FolderSearch2,
  FolderSearch: FolderSearch,
  FolderSymlink: FolderSymlink,
  FolderSync: FolderSync,
  FolderTree: FolderTree,
  FolderUp: FolderUp,
  FolderX: FolderX,
  Folder: Folder,
  Folders: Folders,
  Footprints: Footprints,
  Forklift: Forklift,
  Forward: Forward,
  Frame: Frame,
  Framer: Framer,
  Frown: Frown,
  Fuel: Fuel,
  Fullscreen: Fullscreen,
  GalleryHorizontalEnd: GalleryHorizontalEnd,
  GalleryHorizontal: GalleryHorizontal,
  GalleryThumbnails: GalleryThumbnails,
  GalleryVerticalEnd: GalleryVerticalEnd,
  GalleryVertical: GalleryVertical,
  Gamepad2: Gamepad2,
  Gamepad: Gamepad,
  Gauge: Gauge,
  Gavel: Gavel,
  Gem: Gem,
  Ghost: Ghost,
  Gift: Gift,
  GitBranchPlus: GitBranchPlus,
  GitBranch: GitBranch,
  GitCommit: GitCommitHorizontal,
  GitCommitHorizontal: GitCommitHorizontal,
  GitCommitVertical: GitCommitVertical,
  GitCompareArrows: GitCompareArrows,
  GitCompare: GitCompare,
  GitFork: GitFork,
  GitGraph: GitGraph,
  GitMerge: GitMerge,
  GitPullRequestArrow: GitPullRequestArrow,
  GitPullRequestClosed: GitPullRequestClosed,
  GitPullRequestCreateArrow: GitPullRequestCreateArrow,
  GitPullRequestCreate: GitPullRequestCreate,
  GitPullRequestDraft: GitPullRequestDraft,
  GitPullRequest: GitPullRequest,
  Github: Github,
  Gitlab: Gitlab,
  GlassWater: GlassWater,
  Glasses: Glasses,
  GlobeLock: GlobeLock,
  Globe: Globe,
  Goal: Goal,
  Grab: Grab,
  GraduationCap: GraduationCap,
  Grape: Grape,
  Grid2x2Check: Grid2x2Check,
  Grid2x2Plus: Grid2x2Plus,
  Grid2x2X: Grid2x2X,
  Grid2X2: Grid2x2,
  Grid2x2: Grid2x2,
  Grid: Grid3x3,
  Grid3X3: Grid3x3,
  Grid3x3: Grid3x3,
  GripHorizontal: GripHorizontal,
  GripVertical: GripVertical,
  Grip: Grip,
  Group: Group,
  Guitar: Guitar,
  Ham: Ham,
  Hammer: Hammer,
  HandCoins: HandCoins,
  HandHeart: HandHeart,
  HandHelping: HandHelping,
  HelpingHand: HandHelping,
  HandMetal: HandMetal,
  HandPlatter: HandPlatter,
  Hand: Hand,
  Handshake: Handshake,
  HardDriveDownload: HardDriveDownload,
  HardDriveUpload: HardDriveUpload,
  HardDrive: HardDrive,
  HardHat: HardHat,
  Hash: Hash,
  Haze: Haze,
  HdmiPort: HdmiPort,
  Heading1: Heading1,
  Heading2: Heading2,
  Heading3: Heading3,
  Heading4: Heading4,
  Heading5: Heading5,
  Heading6: Heading6,
  Heading: Heading,
  HeadphoneOff: HeadphoneOff,
  Headphones: Headphones,
  Headset: Headset,
  HeartCrack: HeartCrack,
  HeartHandshake: HeartHandshake,
  HeartOff: HeartOff,
  HeartPulse: HeartPulse,
  Heart: Heart,
  Heater: Heater,
  Hexagon: Hexagon,
  Highlighter: Highlighter,
  History: History,
  HopOff: HopOff,
  Hop: Hop,
  Hospital: Hospital,
  Hotel: Hotel,
  Hourglass: Hourglass,
  HousePlug: HousePlug,
  HousePlus: HousePlus,
  Home: House,
  House: House,
  IceCream2: IceCreamBowl,
  IceCreamBowl: IceCreamBowl,
  IceCream: IceCreamCone,
  IceCreamCone: IceCreamCone,
  IdCard: IdCard,
  ImageDown: ImageDown,
  ImageMinus: ImageMinus,
  ImageOff: ImageOff,
  ImagePlay: ImagePlay,
  ImagePlus: ImagePlus,
  ImageUp: ImageUp,
  Image: Image,
  Images: Images,
  Import: Import,
  Inbox: Inbox,
  IndentDecrease: IndentDecrease,
  Outdent: IndentDecrease,
  Indent: IndentIncrease,
  IndentIncrease: IndentIncrease,
  IndianRupee: IndianRupee,
  Infinity: Infinity,
  Info: Info,
  InspectionPanel: InspectionPanel,
  Instagram: Instagram,
  Italic: Italic,
  IterationCcw: IterationCcw,
  IterationCw: IterationCw,
  JapaneseYen: JapaneseYen,
  Joystick: Joystick,
  Kanban: Kanban,
  KeyRound: KeyRound,
  KeySquare: KeySquare,
  Key: Key,
  KeyboardMusic: KeyboardMusic,
  KeyboardOff: KeyboardOff,
  Keyboard: Keyboard,
  LampCeiling: LampCeiling,
  LampDesk: LampDesk,
  LampFloor: LampFloor,
  LampWallDown: LampWallDown,
  LampWallUp: LampWallUp,
  Lamp: Lamp,
  LandPlot: LandPlot,
  Landmark: Landmark,
  Languages: Languages,
  Laptop2: LaptopMinimal,
  LaptopMinimal: LaptopMinimal,
  Laptop: Laptop,
  LassoSelect: LassoSelect,
  Lasso: Lasso,
  Laugh: Laugh,
  Layers2: Layers2,
  Layers3: Layers3,
  Layers: Layers,
  LayoutDashboard: LayoutDashboard,
  LayoutGrid: LayoutGrid,
  LayoutList: LayoutList,
  LayoutPanelLeft: LayoutPanelLeft,
  LayoutPanelTop: LayoutPanelTop,
  LayoutTemplate: LayoutTemplate,
  Leaf: Leaf,
  LeafyGreen: LeafyGreen,
  Lectern: Lectern,
  LetterText: LetterText,
  LibraryBig: LibraryBig,
  Library: Library,
  LifeBuoy: LifeBuoy,
  Ligature: Ligature,
  LightbulbOff: LightbulbOff,
  Lightbulb: Lightbulb,
  Link2Off: Link2Off,
  Link2: Link2,
  Link: Link,
  Linkedin: Linkedin,
  ListCheck: ListCheck,
  ListChecks: ListChecks,
  ListCollapse: ListCollapse,
  ListEnd: ListEnd,
  ListFilter: ListFilter,
  ListMinus: ListMinus,
  ListMusic: ListMusic,
  ListOrdered: ListOrdered,
  ListPlus: ListPlus,
  ListRestart: ListRestart,
  ListStart: ListStart,
  ListTodo: ListTodo,
  ListTree: ListTree,
  ListVideo: ListVideo,
  ListX: ListX,
  List: List,
  Loader2: LoaderCircle,
  LoaderCircle: LoaderCircle,
  LoaderPinwheel: LoaderPinwheel,
  Loader: Loader,
  LocateFixed: LocateFixed,
  LocateOff: LocateOff,
  Locate: Locate,
  LockKeyholeOpen: LockKeyholeOpen,
  UnlockKeyhole: LockKeyholeOpen,
  LockKeyhole: LockKeyhole,
  LockOpen: LockOpen,
  Unlock: LockOpen,
  Lock: Lock,
  LogIn: LogIn,
  LogOut: LogOut,
  Logs: Logs,
  Lollipop: Lollipop,
  Luggage: Luggage,
  Magnet: Magnet,
  MailCheck: MailCheck,
  MailMinus: MailMinus,
  MailOpen: MailOpen,
  MailPlus: MailPlus,
  MailQuestion: MailQuestion,
  MailSearch: MailSearch,
  MailWarning: MailWarning,
  MailX: MailX,
  Mail: Mail,
  Mailbox: Mailbox,
  Mails: Mails,
  MapPinCheckInside: MapPinCheckInside,
  MapPinCheck: MapPinCheck,
  MapPinHouse: MapPinHouse,
  MapPinMinusInside: MapPinMinusInside,
  MapPinMinus: MapPinMinus,
  MapPinOff: MapPinOff,
  MapPinPlusInside: MapPinPlusInside,
  MapPinPlus: MapPinPlus,
  MapPinXInside: MapPinXInside,
  MapPinX: MapPinX,
  MapPin: MapPin,
  MapPinned: MapPinned,
  Map: Map,
  Martini: Martini,
  Maximize2: Maximize2,
  Maximize: Maximize,
  Medal: Medal,
  MegaphoneOff: MegaphoneOff,
  Megaphone: Megaphone,
  Meh: Meh,
  MemoryStick: MemoryStick,
  Menu: Menu,
  Merge: Merge,
  MessageCircleCode: MessageCircleCode,
  MessageCircleDashed: MessageCircleDashed,
  MessageCircleHeart: MessageCircleHeart,
  MessageCircleMore: MessageCircleMore,
  MessageCircleOff: MessageCircleOff,
  MessageCirclePlus: MessageCirclePlus,
  MessageCircleQuestion: MessageCircleQuestion,
  MessageCircleReply: MessageCircleReply,
  MessageCircleWarning: MessageCircleWarning,
  MessageCircleX: MessageCircleX,
  MessageCircle: MessageCircle,
  MessageSquareCode: MessageSquareCode,
  MessageSquareDashed: MessageSquareDashed,
  MessageSquareDiff: MessageSquareDiff,
  MessageSquareDot: MessageSquareDot,
  MessageSquareHeart: MessageSquareHeart,
  MessageSquareLock: MessageSquareLock,
  MessageSquareMore: MessageSquareMore,
  MessageSquareOff: MessageSquareOff,
  MessageSquarePlus: MessageSquarePlus,
  MessageSquareQuote: MessageSquareQuote,
  MessageSquareReply: MessageSquareReply,
  MessageSquareShare: MessageSquareShare,
  MessageSquareText: MessageSquareText,
  MessageSquareWarning: MessageSquareWarning,
  MessageSquareX: MessageSquareX,
  MessageSquare: MessageSquare,
  MessagesSquare: MessagesSquare,
  MicOff: MicOff,
  Mic2: MicVocal,
  MicVocal: MicVocal,
  Mic: Mic,
  Microchip: Microchip,
  Microscope: Microscope,
  Microwave: Microwave,
  Milestone: Milestone,
  MilkOff: MilkOff,
  Milk: Milk,
  Minimize2: Minimize2,
  Minimize: Minimize,
  Minus: Minus,
  MonitorCheck: MonitorCheck,
  MonitorCog: MonitorCog,
  MonitorDot: MonitorDot,
  MonitorDown: MonitorDown,
  MonitorOff: MonitorOff,
  MonitorPause: MonitorPause,
  MonitorPlay: MonitorPlay,
  MonitorSmartphone: MonitorSmartphone,
  MonitorSpeaker: MonitorSpeaker,
  MonitorStop: MonitorStop,
  MonitorUp: MonitorUp,
  MonitorX: MonitorX,
  Monitor: Monitor,
  MoonStar: MoonStar,
  Moon: Moon,
  MountainSnow: MountainSnow,
  Mountain: Mountain,
  MouseOff: MouseOff,
  MousePointer2: MousePointer2,
  MousePointerBan: MousePointerBan,
  MousePointerClick: MousePointerClick,
  MousePointer: MousePointer,
  Mouse: Mouse,
  Move3D: Move3d,
  Move3d: Move3d,
  MoveDiagonal2: MoveDiagonal2,
  MoveDiagonal: MoveDiagonal,
  MoveDownLeft: MoveDownLeft,
  MoveDownRight: MoveDownRight,
  MoveDown: MoveDown,
  MoveHorizontal: MoveHorizontal,
  MoveLeft: MoveLeft,
  MoveRight: MoveRight,
  MoveUpLeft: MoveUpLeft,
  MoveUpRight: MoveUpRight,
  MoveUp: MoveUp,
  MoveVertical: MoveVertical,
  Move: Move,
  Music2: Music2,
  Music3: Music3,
  Music4: Music4,
  Music: Music,
  Navigation2Off: Navigation2Off,
  Navigation2: Navigation2,
  NavigationOff: NavigationOff,
  Navigation: Navigation,
  Network: Network,
  Newspaper: Newspaper,
  Nfc: Nfc,
  NotebookPen: NotebookPen,
  NotebookTabs: NotebookTabs,
  NotebookText: NotebookText,
  Notebook: Notebook,
  NotepadTextDashed: NotepadTextDashed,
  NotepadText: NotepadText,
  NutOff: NutOff,
  Nut: Nut,
  AlertOctagon: OctagonAlert,
  OctagonAlert: OctagonAlert,
  OctagonMinus: OctagonMinus,
  OctagonPause: OctagonPause,
  PauseOctagon: OctagonPause,
  OctagonX: OctagonX,
  XOctagon: OctagonX,
  Octagon: Octagon,
  Omega: Omega,
  Option: Option,
  Orbit: Orbit,
  Origami: Origami,
  Package2: Package2,
  PackageCheck: PackageCheck,
  PackageMinus: PackageMinus,
  PackageOpen: PackageOpen,
  PackagePlus: PackagePlus,
  PackageSearch: PackageSearch,
  PackageX: PackageX,
  Package: Package,
  PaintBucket: PaintBucket,
  PaintRoller: PaintRoller,
  Paintbrush2: PaintbrushVertical,
  PaintbrushVertical: PaintbrushVertical,
  Paintbrush: Paintbrush,
  Palette: Palette,
  PanelBottomClose: PanelBottomClose,
  PanelBottomDashed: PanelBottomDashed,
  PanelBottomInactive: PanelBottomDashed,
  PanelBottomOpen: PanelBottomOpen,
  PanelBottom: PanelBottom,
  PanelLeftClose: PanelLeftClose,
  SidebarClose: PanelLeftClose,
  PanelLeftDashed: PanelLeftDashed,
  PanelLeftInactive: PanelLeftDashed,
  PanelLeftOpen: PanelLeftOpen,
  SidebarOpen: PanelLeftOpen,
  PanelLeft: PanelLeft,
  Sidebar: PanelLeft,
  PanelRightClose: PanelRightClose,
  PanelRightDashed: PanelRightDashed,
  PanelRightInactive: PanelRightDashed,
  PanelRightOpen: PanelRightOpen,
  PanelRight: PanelRight,
  PanelTopClose: PanelTopClose,
  PanelTopDashed: PanelTopDashed,
  PanelTopInactive: PanelTopDashed,
  PanelTopOpen: PanelTopOpen,
  PanelTop: PanelTop,
  PanelsLeftBottom: PanelsLeftBottom,
  PanelsRightBottom: PanelsRightBottom,
  Layout: PanelsTopLeft,
  PanelsTopLeft: PanelsTopLeft,
  Paperclip: Paperclip,
  Parentheses: Parentheses,
  ParkingMeter: ParkingMeter,
  PartyPopper: PartyPopper,
  Pause: Pause,
  PawPrint: PawPrint,
  PcCase: PcCase,
  Edit3: PenLine,
  PenLine: PenLine,
  PenOff: PenOff,
  PenTool: PenTool,
  Edit2: Pen,
  Pen: Pen,
  PencilLine: PencilLine,
  PencilOff: PencilOff,
  PencilRuler: PencilRuler,
  Pencil: Pencil,
  Pentagon: Pentagon,
  Percent: Percent,
  PersonStanding: PersonStanding,
  PhilippinePeso: PhilippinePeso,
  PhoneCall: PhoneCall,
  PhoneForwarded: PhoneForwarded,
  PhoneIncoming: PhoneIncoming,
  PhoneMissed: PhoneMissed,
  PhoneOff: PhoneOff,
  PhoneOutgoing: PhoneOutgoing,
  Phone: Phone,
  Pi: Pi,
  Piano: Piano,
  Pickaxe: Pickaxe,
  PictureInPicture2: PictureInPicture2,
  PictureInPicture: PictureInPicture,
  PiggyBank: PiggyBank,
  PilcrowLeft: PilcrowLeft,
  PilcrowRight: PilcrowRight,
  Pilcrow: Pilcrow,
  PillBottle: PillBottle,
  Pill: Pill,
  PinOff: PinOff,
  Pin: Pin,
  Pipette: Pipette,
  Pizza: Pizza,
  PlaneLanding: PlaneLanding,
  PlaneTakeoff: PlaneTakeoff,
  Plane: Plane,
  Play: Play,
  Plug2: Plug2,
  PlugZap: PlugZap,
  PlugZap2: PlugZap,
  Plug: Plug,
  Plus: Plus,
  PocketKnife: PocketKnife,
  Pocket: Pocket,
  Podcast: Podcast,
  PointerOff: PointerOff,
  Pointer: Pointer,
  Popcorn: Popcorn,
  Popsicle: Popsicle,
  PoundSterling: PoundSterling,
  PowerOff: PowerOff,
  Power: Power,
  Presentation: Presentation,
  PrinterCheck: PrinterCheck,
  Printer: Printer,
  Projector: Projector,
  Proportions: Proportions,
  Puzzle: Puzzle,
  Pyramid: Pyramid,
  QrCode: QrCode,
  Quote: Quote,
  Rabbit: Rabbit,
  Radar: Radar,
  Radiation: Radiation,
  Radical: Radical,
  RadioReceiver: RadioReceiver,
  RadioTower: RadioTower,
  Radio: Radio,
  Radius: Radius,
  RailSymbol: RailSymbol,
  Rainbow: Rainbow,
  Rat: Rat,
  Ratio: Ratio,
  ReceiptCent: ReceiptCent,
  ReceiptEuro: ReceiptEuro,
  ReceiptIndianRupee: ReceiptIndianRupee,
  ReceiptJapaneseYen: ReceiptJapaneseYen,
  ReceiptPoundSterling: ReceiptPoundSterling,
  ReceiptRussianRuble: ReceiptRussianRuble,
  ReceiptSwissFranc: ReceiptSwissFranc,
  ReceiptText: ReceiptText,
  Receipt: Receipt,
  FormInput: RectangleEllipsis,
  RectangleEllipsis: RectangleEllipsis,
  RectangleHorizontal: RectangleHorizontal,
  RectangleVertical: RectangleVertical,
  Recycle: Recycle,
  Redo2: Redo2,
  RedoDot: RedoDot,
  Redo: Redo,
  RefreshCcwDot: RefreshCcwDot,
  RefreshCcw: RefreshCcw,
  RefreshCwOff: RefreshCwOff,
  RefreshCw: RefreshCw,
  Refrigerator: Refrigerator,
  Regex: Regex,
  RemoveFormatting: RemoveFormatting,
  Repeat1: Repeat1,
  Repeat2: Repeat2,
  Repeat: Repeat,
  ReplaceAll: ReplaceAll,
  Replace: Replace,
  ReplyAll: ReplyAll,
  Reply: Reply,
  Rewind: Rewind,
  Ribbon: Ribbon,
  Rocket: Rocket,
  RockingChair: RockingChair,
  RollerCoaster: RollerCoaster,
  Rotate3D: Rotate3d,
  Rotate3d: Rotate3d,
  RotateCcwSquare: RotateCcwSquare,
  RotateCcw: RotateCcw,
  RotateCwSquare: RotateCwSquare,
  RotateCw: RotateCw,
  RouteOff: RouteOff,
  Route: Route,
  Router: Router,
  Rows: Rows2,
  Rows2: Rows2,
  PanelsTopBottom: Rows3,
  Rows3: Rows3,
  Rows4: Rows4,
  Rss: Rss,
  Ruler: Ruler,
  RussianRuble: RussianRuble,
  Sailboat: Sailboat,
  Salad: Salad,
  Sandwich: Sandwich,
  SatelliteDish: SatelliteDish,
  Satellite: Satellite,
  SaveAll: SaveAll,
  SaveOff: SaveOff,
  Save: Save,
  Scale3D: Scale3d,
  Scale3d: Scale3d,
  Scale: Scale,
  Scaling: Scaling,
  ScanBarcode: ScanBarcode,
  ScanEye: ScanEye,
  ScanFace: ScanFace,
  ScanLine: ScanLine,
  ScanQrCode: ScanQrCode,
  ScanSearch: ScanSearch,
  ScanText: ScanText,
  Scan: Scan,
  School: School,
  ScissorsLineDashed: ScissorsLineDashed,
  Scissors: Scissors,
  ScreenShareOff: ScreenShareOff,
  ScreenShare: ScreenShare,
  ScrollText: ScrollText,
  Scroll: Scroll,
  SearchCheck: SearchCheck,
  SearchCode: SearchCode,
  SearchSlash: SearchSlash,
  SearchX: SearchX,
  Search: Search,
  Section: Section,
  SendHorizonal: SendHorizontal,
  SendHorizontal: SendHorizontal,
  SendToBack: SendToBack,
  Send: Send,
  SeparatorHorizontal: SeparatorHorizontal,
  SeparatorVertical: SeparatorVertical,
  ServerCog: ServerCog,
  ServerCrash: ServerCrash,
  ServerOff: ServerOff,
  Server: Server,
  Settings2: Settings2,
  Settings: Settings,
  Shapes: Shapes,
  Share2: Share2,
  Share: Share,
  Sheet: Sheet,
  Shell: Shell,
  ShieldAlert: ShieldAlert,
  ShieldBan: ShieldBan,
  ShieldCheck: ShieldCheck,
  ShieldEllipsis: ShieldEllipsis,
  ShieldHalf: ShieldHalf,
  ShieldMinus: ShieldMinus,
  ShieldOff: ShieldOff,
  ShieldPlus: ShieldPlus,
  ShieldQuestion: ShieldQuestion,
  ShieldClose: ShieldX,
  ShieldX: ShieldX,
  Shield: Shield,
  ShipWheel: ShipWheel,
  Ship: Ship,
  Shirt: Shirt,
  ShoppingBag: ShoppingBag,
  ShoppingBasket: ShoppingBasket,
  ShoppingCart: ShoppingCart,
  Shovel: Shovel,
  ShowerHead: ShowerHead,
  Shrink: Shrink,
  Shrub: Shrub,
  Shuffle: Shuffle,
  Sigma: Sigma,
  SignalHigh: SignalHigh,
  SignalLow: SignalLow,
  SignalMedium: SignalMedium,
  SignalZero: SignalZero,
  Signal: Signal,
  Signature: Signature,
  SignpostBig: SignpostBig,
  Signpost: Signpost,
  Siren: Siren,
  SkipBack: SkipBack,
  SkipForward: SkipForward,
  Skull: Skull,
  Slack: Slack,
  Slash: Slash,
  Slice: Slice,
  SlidersHorizontal: SlidersHorizontal,
  Sliders: SlidersVertical,
  SlidersVertical: SlidersVertical,
  SmartphoneCharging: SmartphoneCharging,
  SmartphoneNfc: SmartphoneNfc,
  Smartphone: Smartphone,
  SmilePlus: SmilePlus,
  Smile: Smile,
  Snail: Snail,
  Snowflake: Snowflake,
  Sofa: Sofa,
  Soup: Soup,
  Space: Space,
  Spade: Spade,
  Sparkle: Sparkle,
  Sparkles: Sparkles,
  Stars: Sparkles,
  Speaker: Speaker,
  Speech: Speech,
  SpellCheck2: SpellCheck2,
  SpellCheck: SpellCheck,
  Spline: Spline,
  Split: Split,
  SprayCan: SprayCan,
  Sprout: Sprout,
  ActivitySquare: SquareActivity,
  SquareActivity: SquareActivity,
  ArrowDownLeftSquare: SquareArrowDownLeft,
  SquareArrowDownLeft: SquareArrowDownLeft,
  ArrowDownRightSquare: SquareArrowDownRight,
  SquareArrowDownRight: SquareArrowDownRight,
  ArrowDownSquare: SquareArrowDown,
  SquareArrowDown: SquareArrowDown,
  ArrowLeftSquare: SquareArrowLeft,
  SquareArrowLeft: SquareArrowLeft,
  ArrowDownLeftFromSquare: SquareArrowOutDownLeft,
  SquareArrowOutDownLeft: SquareArrowOutDownLeft,
  ArrowDownRightFromSquare: SquareArrowOutDownRight,
  SquareArrowOutDownRight: SquareArrowOutDownRight,
  ArrowUpLeftFromSquare: SquareArrowOutUpLeft,
  SquareArrowOutUpLeft: SquareArrowOutUpLeft,
  ArrowUpRightFromSquare: SquareArrowOutUpRight,
  SquareArrowOutUpRight: SquareArrowOutUpRight,
  ArrowRightSquare: SquareArrowRight,
  SquareArrowRight: SquareArrowRight,
  ArrowUpLeftSquare: SquareArrowUpLeft,
  SquareArrowUpLeft: SquareArrowUpLeft,
  ArrowUpRightSquare: SquareArrowUpRight,
  SquareArrowUpRight: SquareArrowUpRight,
  ArrowUpSquare: SquareArrowUp,
  SquareArrowUp: SquareArrowUp,
  AsteriskSquare: SquareAsterisk,
  SquareAsterisk: SquareAsterisk,
  ScissorsSquareDashedBottom: SquareBottomDashedScissors,
  SquareBottomDashedScissors: SquareBottomDashedScissors,
  GanttChartSquare: SquareChartGantt,
  SquareChartGantt: SquareChartGantt,
  SquareGanttChart: SquareChartGantt,
  CheckSquare: SquareCheckBig,
  SquareCheckBig: SquareCheckBig,
  CheckSquare2: SquareCheck,
  SquareCheck: SquareCheck,
  ChevronDownSquare: SquareChevronDown,
  SquareChevronDown: SquareChevronDown,
  ChevronLeftSquare: SquareChevronLeft,
  SquareChevronLeft: SquareChevronLeft,
  ChevronRightSquare: SquareChevronRight,
  SquareChevronRight: SquareChevronRight,
  ChevronUpSquare: SquareChevronUp,
  SquareChevronUp: SquareChevronUp,
  CodeSquare: SquareCode,
  SquareCode: SquareCode,
  SquareDashedBottomCode: SquareDashedBottomCode,
  SquareDashedBottom: SquareDashedBottom,
  KanbanSquareDashed: SquareDashedKanban,
  SquareDashedKanban: SquareDashedKanban,
  MousePointerSquareDashed: SquareDashedMousePointer,
  SquareDashedMousePointer: SquareDashedMousePointer,
  BoxSelect: SquareDashed,
  SquareDashed: SquareDashed,
  DivideSquare: SquareDivide,
  SquareDivide: SquareDivide,
  DotSquare: SquareDot,
  SquareDot: SquareDot,
  EqualSquare: SquareEqual,
  SquareEqual: SquareEqual,
  FunctionSquare: SquareFunction,
  SquareFunction: SquareFunction,
  KanbanSquare: SquareKanban,
  SquareKanban: SquareKanban,
  LibrarySquare: SquareLibrary,
  SquareLibrary: SquareLibrary,
  MSquare: SquareM,
  SquareM: SquareM,
  MenuSquare: SquareMenu,
  SquareMenu: SquareMenu,
  MinusSquare: SquareMinus,
  SquareMinus: SquareMinus,
  Inspect: SquareMousePointer,
  SquareMousePointer: SquareMousePointer,
  ParkingSquareOff: SquareParkingOff,
  SquareParkingOff: SquareParkingOff,
  ParkingSquare: SquareParking,
  SquareParking: SquareParking,
  Edit: SquarePen,
  PenBox: SquarePen,
  PenSquare: SquarePen,
  SquarePen: SquarePen,
  PercentSquare: SquarePercent,
  SquarePercent: SquarePercent,
  PiSquare: SquarePi,
  SquarePi: SquarePi,
  PilcrowSquare: SquarePilcrow,
  SquarePilcrow: SquarePilcrow,
  PlaySquare: SquarePlay,
  SquarePlay: SquarePlay,
  PlusSquare: SquarePlus,
  SquarePlus: SquarePlus,
  PowerSquare: SquarePower,
  SquarePower: SquarePower,
  SquareRadical: SquareRadical,
  ScissorsSquare: SquareScissors,
  SquareScissors: SquareScissors,
  SigmaSquare: SquareSigma,
  SquareSigma: SquareSigma,
  SlashSquare: SquareSlash,
  SquareSlash: SquareSlash,
  SplitSquareHorizontal: SquareSplitHorizontal,
  SquareSplitHorizontal: SquareSplitHorizontal,
  SplitSquareVertical: SquareSplitVertical,
  SquareSplitVertical: SquareSplitVertical,
  SquareSquare: SquareSquare,
  SquareStack: SquareStack,
  SquareTerminal: SquareTerminal,
  TerminalSquare: SquareTerminal,
  SquareUserRound: SquareUserRound,
  UserSquare2: SquareUserRound,
  SquareUser: SquareUser,
  UserSquare: SquareUser,
  SquareX: SquareX,
  XSquare: SquareX,
  Square: Square,
  Squircle: Squircle,
  Squirrel: Squirrel,
  Stamp: Stamp,
  StarHalf: StarHalf,
  StarOff: StarOff,
  Star: Star,
  StepBack: StepBack,
  StepForward: StepForward,
  Stethoscope: Stethoscope,
  Sticker: Sticker,
  StickyNote: StickyNote,
  Store: Store,
  StretchHorizontal: StretchHorizontal,
  StretchVertical: StretchVertical,
  Strikethrough: Strikethrough,
  Subscript: Subscript,
  SunDim: SunDim,
  SunMedium: SunMedium,
  SunMoon: SunMoon,
  SunSnow: SunSnow,
  Sun: Sun,
  Sunrise: Sunrise,
  Sunset: Sunset,
  Superscript: Superscript,
  SwatchBook: SwatchBook,
  SwissFranc: SwissFranc,
  SwitchCamera: SwitchCamera,
  Sword: Sword,
  Swords: Swords,
  Syringe: Syringe,
  Table2: Table2,
  TableCellsMerge: TableCellsMerge,
  TableCellsSplit: TableCellsSplit,
  TableColumnsSplit: TableColumnsSplit,
  TableOfContents: TableOfContents,
  TableProperties: TableProperties,
  TableRowsSplit: TableRowsSplit,
  Table: Table,
  TabletSmartphone: TabletSmartphone,
  Tablet: Tablet,
  Tablets: Tablets,
  Tag: Tag,
  Tags: Tags,
  Tally1: Tally1,
  Tally2: Tally2,
  Tally3: Tally3,
  Tally4: Tally4,
  Tally5: Tally5,
  Tangent: Tangent,
  Target: Target,
  Telescope: Telescope,
  TentTree: TentTree,
  Tent: Tent,
  Terminal: Terminal,
  TestTube2: TestTubeDiagonal,
  TestTubeDiagonal: TestTubeDiagonal,
  TestTube: TestTube,
  TestTubes: TestTubes,
  TextCursorInput: TextCursorInput,
  TextCursor: TextCursor,
  TextQuote: TextQuote,
  TextSearch: TextSearch,
  TextSelect: TextSelect,
  TextSelection: TextSelect,
  Text: Text,
  Theater: Theater,
  ThermometerSnowflake: ThermometerSnowflake,
  ThermometerSun: ThermometerSun,
  Thermometer: Thermometer,
  ThumbsDown: ThumbsDown,
  ThumbsUp: ThumbsUp,
  TicketCheck: TicketCheck,
  TicketMinus: TicketMinus,
  TicketPercent: TicketPercent,
  TicketPlus: TicketPlus,
  TicketSlash: TicketSlash,
  TicketX: TicketX,
  Ticket: Ticket,
  TicketsPlane: TicketsPlane,
  Tickets: Tickets,
  TimerOff: TimerOff,
  TimerReset: TimerReset,
  Timer: Timer,
  ToggleLeft: ToggleLeft,
  ToggleRight: ToggleRight,
  Tornado: Tornado,
  Torus: Torus,
  TouchpadOff: TouchpadOff,
  Touchpad: Touchpad,
  TowerControl: TowerControl,
  ToyBrick: ToyBrick,
  Tractor: Tractor,
  TrafficCone: TrafficCone,
  TrainFrontTunnel: TrainFrontTunnel,
  TrainFront: TrainFront,
  TrainTrack: TrainTrack,
  Train: TramFront,
  TramFront: TramFront,
  Trash2: Trash2,
  Trash: Trash,
  TreeDeciduous: TreeDeciduous,
  Palmtree: TreePalm,
  TreePalm: TreePalm,
  TreePine: TreePine,
  Trees: Trees,
  Trello: Trello,
  TrendingDown: TrendingDown,
  TrendingUpDown: TrendingUpDown,
  TrendingUp: TrendingUp,
  AlertTriangle: TriangleAlert,
  TriangleAlert: TriangleAlert,
  TriangleRight: TriangleRight,
  Triangle: Triangle,
  Trophy: Trophy,
  Truck: Truck,
  Turtle: Turtle,
  TvMinimalPlay: TvMinimalPlay,
  Tv2: TvMinimal,
  TvMinimal: TvMinimal,
  Tv: Tv,
  Twitch: Twitch,
  Twitter: Twitter,
  TypeOutline: TypeOutline,
  Type: Type,
  UmbrellaOff: UmbrellaOff,
  Umbrella: Umbrella,
  Underline: Underline,
  Undo2: Undo2,
  UndoDot: UndoDot,
  Undo: Undo,
  UnfoldHorizontal: UnfoldHorizontal,
  UnfoldVertical: UnfoldVertical,
  Ungroup: Ungroup,
  School2: University,
  University: University,
  Unlink2: Unlink2,
  Unlink: Unlink,
  Unplug: Unplug,
  Upload: Upload,
  Usb: Usb,
  UserCheck: UserCheck,
  UserCog: UserCog,
  UserMinus: UserMinus,
  UserPen: UserPen,
  UserPlus: UserPlus,
  UserCheck2: UserRoundCheck,
  UserRoundCheck: UserRoundCheck,
  UserCog2: UserRoundCog,
  UserRoundCog: UserRoundCog,
  UserMinus2: UserRoundMinus,
  UserRoundMinus: UserRoundMinus,
  UserRoundPen: UserRoundPen,
  UserPlus2: UserRoundPlus,
  UserRoundPlus: UserRoundPlus,
  UserRoundSearch: UserRoundSearch,
  UserRoundX: UserRoundX,
  UserX2: UserRoundX,
  User2: UserRound,
  UserRound: UserRound,
  UserSearch: UserSearch,
  UserX: UserX,
  User: User,
  Users2: UsersRound,
  UsersRound: UsersRound,
  Users: Users,
  ForkKnifeCrossed: UtensilsCrossed,
  UtensilsCrossed: UtensilsCrossed,
  ForkKnife: Utensils,
  Utensils: Utensils,
  UtilityPole: UtilityPole,
  Variable: Variable,
  Vault: Vault,
  Vegan: Vegan,
  VenetianMask: VenetianMask,
  VibrateOff: VibrateOff,
  Vibrate: Vibrate,
  VideoOff: VideoOff,
  Video: Video,
  Videotape: Videotape,
  View: View,
  Voicemail: Voicemail,
  Volume1: Volume1,
  Volume2: Volume2,
  VolumeOff: VolumeOff,
  VolumeX: VolumeX,
  Volume: Volume,
  Vote: Vote,
  WalletCards: WalletCards,
  Wallet2: WalletMinimal,
  WalletMinimal: WalletMinimal,
  Wallet: Wallet,
  Wallpaper: Wallpaper,
  Wand2: WandSparkles,
  WandSparkles: WandSparkles,
  Wand: Wand,
  Warehouse: Warehouse,
  WashingMachine: WashingMachine,
  Watch: Watch,
  Waves: Waves,
  Waypoints: Waypoints,
  Webcam: Webcam,
  WebhookOff: WebhookOff,
  Webhook: Webhook,
  Weight: Weight,
  WheatOff: WheatOff,
  Wheat: Wheat,
  WholeWord: WholeWord,
  WifiHigh: WifiHigh,
  WifiLow: WifiLow,
  WifiOff: WifiOff,
  WifiZero: WifiZero,
  Wifi: Wifi,
  Wind: Wind,
  WineOff: WineOff,
  Wine: Wine,
  Workflow: Workflow,
  Worm: Worm,
  WrapText: WrapText,
  Wrench: Wrench,
  X: X,
  Youtube: Youtube,
  ZapOff: ZapOff,
  Zap: Zap,
  ZoomIn: ZoomIn,
  ZoomOut: ZoomOut
});

/**
 * @license lucide v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const createIcons = ({ icons = {}, nameAttr = "data-lucide", attrs = {} } = {}) => {
  if (!Object.values(icons).length) {
    throw new Error(
      "Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`"
    );
  }
  if (typeof document === "undefined") {
    throw new Error("`createIcons()` only works in a browser environment.");
  }
  const elementsToReplace = document.querySelectorAll(`[${nameAttr}]`);
  Array.from(elementsToReplace).forEach(
    (element) => replaceElement(element, { nameAttr, icons, attrs })
  );
  if (nameAttr === "data-lucide") {
    const deprecatedElements = document.querySelectorAll("[icon-name]");
    if (deprecatedElements.length > 0) {
      console.warn(
        "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
      );
      Array.from(deprecatedElements).forEach(
        (element) => replaceElement(element, { nameAttr: "icon-name", icons, attrs })
      );
    }
  }
};

export { AArrowDown, AArrowUp, ALargeSmall, Accessibility, Activity, SquareActivity as ActivitySquare, AirVent, Airplay, AlarmClockCheck as AlarmCheck, AlarmClock, AlarmClockCheck, AlarmClockMinus, AlarmClockOff, AlarmClockPlus, AlarmClockMinus as AlarmMinus, AlarmClockPlus as AlarmPlus, AlarmSmoke, Album, CircleAlert as AlertCircle, OctagonAlert as AlertOctagon, TriangleAlert as AlertTriangle, AlignCenter, AlignCenterHorizontal, AlignCenterVertical, AlignEndHorizontal, AlignEndVertical, AlignHorizontalDistributeCenter, AlignHorizontalDistributeEnd, AlignHorizontalDistributeStart, AlignHorizontalJustifyCenter, AlignHorizontalJustifyEnd, AlignHorizontalJustifyStart, AlignHorizontalSpaceAround, AlignHorizontalSpaceBetween, AlignJustify, AlignLeft, AlignRight, AlignStartHorizontal, AlignStartVertical, AlignVerticalDistributeCenter, AlignVerticalDistributeEnd, AlignVerticalDistributeStart, AlignVerticalJustifyCenter, AlignVerticalJustifyEnd, AlignVerticalJustifyStart, AlignVerticalSpaceAround, AlignVerticalSpaceBetween, Ambulance, Ampersand, Ampersands, Amphora, Anchor, Angry, Annoyed, Antenna, Anvil, Aperture, AppWindow, AppWindowMac, Apple, Archive, ArchiveRestore, ArchiveX, ChartArea as AreaChart, Armchair, ArrowBigDown, ArrowBigDownDash, ArrowBigLeft, ArrowBigLeftDash, ArrowBigRight, ArrowBigRightDash, ArrowBigUp, ArrowBigUpDash, ArrowDown, ArrowDown01, ArrowDown10, ArrowDownAZ, ArrowDownAZ as ArrowDownAz, CircleArrowDown as ArrowDownCircle, ArrowDownFromLine, ArrowDownLeft, CircleArrowOutDownLeft as ArrowDownLeftFromCircle, SquareArrowOutDownLeft as ArrowDownLeftFromSquare, SquareArrowDownLeft as ArrowDownLeftSquare, ArrowDownNarrowWide, ArrowDownRight, CircleArrowOutDownRight as ArrowDownRightFromCircle, SquareArrowOutDownRight as ArrowDownRightFromSquare, SquareArrowDownRight as ArrowDownRightSquare, SquareArrowDown as ArrowDownSquare, ArrowDownToDot, ArrowDownToLine, ArrowDownUp, ArrowDownWideNarrow, ArrowDownZA, ArrowDownZA as ArrowDownZa, ArrowLeft, CircleArrowLeft as ArrowLeftCircle, ArrowLeftFromLine, ArrowLeftRight, SquareArrowLeft as ArrowLeftSquare, ArrowLeftToLine, ArrowRight, CircleArrowRight as ArrowRightCircle, ArrowRightFromLine, ArrowRightLeft, SquareArrowRight as ArrowRightSquare, ArrowRightToLine, ArrowUp, ArrowUp01, ArrowUp10, ArrowUpAZ, ArrowUpAZ as ArrowUpAz, CircleArrowUp as ArrowUpCircle, ArrowUpDown, ArrowUpFromDot, ArrowUpFromLine, ArrowUpLeft, CircleArrowOutUpLeft as ArrowUpLeftFromCircle, SquareArrowOutUpLeft as ArrowUpLeftFromSquare, SquareArrowUpLeft as ArrowUpLeftSquare, ArrowUpNarrowWide, ArrowUpRight, CircleArrowOutUpRight as ArrowUpRightFromCircle, SquareArrowOutUpRight as ArrowUpRightFromSquare, SquareArrowUpRight as ArrowUpRightSquare, SquareArrowUp as ArrowUpSquare, ArrowUpToLine, ArrowUpWideNarrow, ArrowUpZA, ArrowUpZA as ArrowUpZa, ArrowsUpFromLine, Asterisk, SquareAsterisk as AsteriskSquare, AtSign, Atom, AudioLines, AudioWaveform, Award, Axe, Axis3d as Axis3D, Axis3d, Baby, Backpack, Badge, BadgeAlert, BadgeCent, BadgeCheck, BadgeDollarSign, BadgeEuro, BadgeHelp, BadgeIndianRupee, BadgeInfo, BadgeJapaneseYen, BadgeMinus, BadgePercent, BadgePlus, BadgePoundSterling, BadgeRussianRuble, BadgeSwissFranc, BadgeX, BaggageClaim, Ban, Banana, Bandage, Banknote, ChartNoAxesColumnIncreasing as BarChart, ChartNoAxesColumn as BarChart2, ChartColumn as BarChart3, ChartColumnIncreasing as BarChart4, ChartColumnBig as BarChartBig, ChartBar as BarChartHorizontal, ChartBarBig as BarChartHorizontalBig, Barcode, Baseline, Bath, Battery, BatteryCharging, BatteryFull, BatteryLow, BatteryMedium, BatteryWarning, Beaker, Bean, BeanOff, Bed, BedDouble, BedSingle, Beef, Beer, BeerOff, Bell, BellDot, BellElectric, BellMinus, BellOff, BellPlus, BellRing, BetweenHorizontalEnd as BetweenHorizonalEnd, BetweenHorizontalStart as BetweenHorizonalStart, BetweenHorizontalEnd, BetweenHorizontalStart, BetweenVerticalEnd, BetweenVerticalStart, BicepsFlexed, Bike, Binary, Binoculars, Biohazard, Bird, Bitcoin, Blend, Blinds, Blocks, Bluetooth, BluetoothConnected, BluetoothOff, BluetoothSearching, Bold, Bolt, Bomb, Bone, Book, BookA, BookAudio, BookCheck, BookCopy, BookDashed, BookDown, BookHeadphones, BookHeart, BookImage, BookKey, BookLock, BookMarked, BookMinus, BookOpen, BookOpenCheck, BookOpenText, BookPlus, BookDashed as BookTemplate, BookText, BookType, BookUp, BookUp2, BookUser, BookX, Bookmark, BookmarkCheck, BookmarkMinus, BookmarkPlus, BookmarkX, BoomBox, Bot, BotMessageSquare, BotOff, Box, SquareDashed as BoxSelect, Boxes, Braces, Brackets, Brain, BrainCircuit, BrainCog, BrickWall, Briefcase, BriefcaseBusiness, BriefcaseConveyorBelt, BriefcaseMedical, BringToFront, Brush, Bug, BugOff, BugPlay, Building, Building2, Bus, BusFront, Cable, CableCar, Cake, CakeSlice, Calculator, Calendar, CalendarArrowDown, CalendarArrowUp, CalendarCheck, CalendarCheck2, CalendarClock, CalendarCog, CalendarDays, CalendarFold, CalendarHeart, CalendarMinus, CalendarMinus2, CalendarOff, CalendarPlus, CalendarPlus2, CalendarRange, CalendarSearch, CalendarX, CalendarX2, Camera, CameraOff, ChartCandlestick as CandlestickChart, Candy, CandyCane, CandyOff, Cannabis, Captions, CaptionsOff, Car, CarFront, CarTaxiFront, Caravan, Carrot, CaseLower, CaseSensitive, CaseUpper, CassetteTape, Cast, Castle, Cat, Cctv, ChartArea, ChartBar, ChartBarBig, ChartBarDecreasing, ChartBarIncreasing, ChartBarStacked, ChartCandlestick, ChartColumn, ChartColumnBig, ChartColumnDecreasing, ChartColumnIncreasing, ChartColumnStacked, ChartGantt, ChartLine, ChartNetwork, ChartNoAxesColumn, ChartNoAxesColumnDecreasing, ChartNoAxesColumnIncreasing, ChartNoAxesCombined, ChartNoAxesGantt, ChartPie, ChartScatter, ChartSpline, Check, CheckCheck, CircleCheckBig as CheckCircle, CircleCheck as CheckCircle2, SquareCheckBig as CheckSquare, SquareCheck as CheckSquare2, ChefHat, Cherry, ChevronDown, CircleChevronDown as ChevronDownCircle, SquareChevronDown as ChevronDownSquare, ChevronFirst, ChevronLast, ChevronLeft, CircleChevronLeft as ChevronLeftCircle, SquareChevronLeft as ChevronLeftSquare, ChevronRight, CircleChevronRight as ChevronRightCircle, SquareChevronRight as ChevronRightSquare, ChevronUp, CircleChevronUp as ChevronUpCircle, SquareChevronUp as ChevronUpSquare, ChevronsDown, ChevronsDownUp, ChevronsLeft, ChevronsLeftRight, ChevronsLeftRightEllipsis, ChevronsRight, ChevronsRightLeft, ChevronsUp, ChevronsUpDown, Chrome, Church, Cigarette, CigaretteOff, Circle, CircleAlert, CircleArrowDown, CircleArrowLeft, CircleArrowOutDownLeft, CircleArrowOutDownRight, CircleArrowOutUpLeft, CircleArrowOutUpRight, CircleArrowRight, CircleArrowUp, CircleCheck, CircleCheckBig, CircleChevronDown, CircleChevronLeft, CircleChevronRight, CircleChevronUp, CircleDashed, CircleDivide, CircleDollarSign, CircleDot, CircleDotDashed, CircleEllipsis, CircleEqual, CircleFadingArrowUp, CircleFadingPlus, CircleGauge, CircleHelp, CircleMinus, CircleOff, CircleParking, CircleParkingOff, CirclePause, CirclePercent, CirclePlay, CirclePlus, CirclePower, CircleSlash, CircleSlash2, CircleSlash2 as CircleSlashed, CircleStop, CircleUser, CircleUserRound, CircleX, CircuitBoard, Citrus, Clapperboard, Clipboard, ClipboardCheck, ClipboardCopy, ClipboardPen as ClipboardEdit, ClipboardList, ClipboardMinus, ClipboardPaste, ClipboardPen, ClipboardPenLine, ClipboardPlus, ClipboardPenLine as ClipboardSignature, ClipboardType, ClipboardX, Clock, Clock1, Clock10, Clock11, Clock12, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, ClockAlert, ClockArrowDown, ClockArrowUp, Cloud, CloudCog, CloudDownload, CloudDrizzle, CloudFog, CloudHail, CloudLightning, CloudMoon, CloudMoonRain, CloudOff, CloudRain, CloudRainWind, CloudSnow, CloudSun, CloudSunRain, CloudUpload, Cloudy, Clover, Club, Code, CodeXml as Code2, SquareCode as CodeSquare, CodeXml, Codepen, Codesandbox, Coffee, Cog, Coins, Columns2 as Columns, Columns2, Columns3, Columns4, Combine, Command, Compass, Component, Computer, ConciergeBell, Cone, Construction, Contact, ContactRound as Contact2, ContactRound, Container, Contrast, Cookie, CookingPot, Copy, CopyCheck, CopyMinus, CopyPlus, CopySlash, CopyX, Copyleft, Copyright, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreativeCommons, CreditCard, Croissant, Crop, Cross, Crosshair, Crown, Cuboid, CupSoda, Braces as CurlyBraces, Currency, Cylinder, Dam, Database, DatabaseBackup, DatabaseZap, Delete, Dessert, Diameter, Diamond, DiamondMinus, DiamondPercent, DiamondPlus, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dices, Diff, Disc, Disc2, Disc3, DiscAlbum, Divide, CircleDivide as DivideCircle, SquareDivide as DivideSquare, Dna, DnaOff, Dock, Dog, DollarSign, Donut, DoorClosed, DoorOpen, Dot, SquareDot as DotSquare, Download, CloudDownload as DownloadCloud, DraftingCompass, Drama, Dribbble, Drill, Droplet, Droplets, Drum, Drumstick, Dumbbell, Ear, EarOff, Earth, EarthLock, Eclipse, SquarePen as Edit, Pen as Edit2, PenLine as Edit3, Egg, EggFried, EggOff, Ellipsis, EllipsisVertical, Equal, EqualNot, SquareEqual as EqualSquare, Eraser, EthernetPort, Euro, Expand, ExternalLink, Eye, EyeOff, Facebook, Factory, Fan, FastForward, Feather, Fence, FerrisWheel, Figma, File, FileArchive, FileAudio, FileAudio2, FileAxis3d as FileAxis3D, FileAxis3d, FileBadge, FileBadge2, FileChartColumnIncreasing as FileBarChart, FileChartColumn as FileBarChart2, FileBox, FileChartColumn, FileChartColumnIncreasing, FileChartLine, FileChartPie, FileCheck, FileCheck2, FileClock, FileCode, FileCode2, FileCog, FileCog as FileCog2, FileDiff, FileDigit, FileDown, FilePen as FileEdit, FileHeart, FileImage, FileInput, FileJson, FileJson2, FileKey, FileKey2, FileChartLine as FileLineChart, FileLock, FileLock2, FileMinus, FileMinus2, FileMusic, FileOutput, FilePen, FilePenLine, FileChartPie as FilePieChart, FilePlus, FilePlus2, FileQuestion, FileScan, FileSearch, FileSearch2, FilePenLine as FileSignature, FileSliders, FileSpreadsheet, FileStack, FileSymlink, FileTerminal, FileText, FileType, FileType2, FileUp, FileUser, FileVideo, FileVideo2, FileVolume, FileVolume2, FileWarning, FileX, FileX2, Files, Film, Filter, FilterX, Fingerprint, FireExtinguisher, Fish, FishOff, FishSymbol, Flag, FlagOff, FlagTriangleLeft, FlagTriangleRight, Flame, FlameKindling, Flashlight, FlashlightOff, FlaskConical, FlaskConicalOff, FlaskRound, FlipHorizontal, FlipHorizontal2, FlipVertical, FlipVertical2, Flower, Flower2, Focus, FoldHorizontal, FoldVertical, Folder, FolderArchive, FolderCheck, FolderClock, FolderClosed, FolderCode, FolderCog, FolderCog as FolderCog2, FolderDot, FolderDown, FolderPen as FolderEdit, FolderGit, FolderGit2, FolderHeart, FolderInput, FolderKanban, FolderKey, FolderLock, FolderMinus, FolderOpen, FolderOpenDot, FolderOutput, FolderPen, FolderPlus, FolderRoot, FolderSearch, FolderSearch2, FolderSymlink, FolderSync, FolderTree, FolderUp, FolderX, Folders, Footprints, Utensils as ForkKnife, UtensilsCrossed as ForkKnifeCrossed, Forklift, RectangleEllipsis as FormInput, Forward, Frame, Framer, Frown, Fuel, Fullscreen, SquareFunction as FunctionSquare, GalleryHorizontal, GalleryHorizontalEnd, GalleryThumbnails, GalleryVertical, GalleryVerticalEnd, Gamepad, Gamepad2, ChartNoAxesGantt as GanttChart, SquareChartGantt as GanttChartSquare, Gauge, CircleGauge as GaugeCircle, Gavel, Gem, Ghost, Gift, GitBranch, GitBranchPlus, GitCommitHorizontal as GitCommit, GitCommitHorizontal, GitCommitVertical, GitCompare, GitCompareArrows, GitFork, GitGraph, GitMerge, GitPullRequest, GitPullRequestArrow, GitPullRequestClosed, GitPullRequestCreate, GitPullRequestCreateArrow, GitPullRequestDraft, Github, Gitlab, GlassWater, Glasses, Globe, Earth as Globe2, GlobeLock, Goal, Grab, GraduationCap, Grape, Grid3x3 as Grid, Grid2x2 as Grid2X2, Grid2x2, Grid2x2Check, Grid2x2Plus, Grid2x2X, Grid3x3 as Grid3X3, Grid3x3, Grip, GripHorizontal, GripVertical, Group, Guitar, Ham, Hammer, Hand, HandCoins, HandHeart, HandHelping, HandMetal, HandPlatter, Handshake, HardDrive, HardDriveDownload, HardDriveUpload, HardHat, Hash, Haze, HdmiPort, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, HeadphoneOff, Headphones, Headset, Heart, HeartCrack, HeartHandshake, HeartOff, HeartPulse, Heater, CircleHelp as HelpCircle, HandHelping as HelpingHand, Hexagon, Highlighter, History, House as Home, Hop, HopOff, Hospital, Hotel, Hourglass, House, HousePlug, HousePlus, IceCreamCone as IceCream, IceCreamBowl as IceCream2, IceCreamBowl, IceCreamCone, IdCard, Image, ImageDown, ImageMinus, ImageOff, ImagePlay, ImagePlus, ImageUp, Images, Import, Inbox, IndentIncrease as Indent, IndentDecrease, IndentIncrease, IndianRupee, Infinity, Info, SquareMousePointer as Inspect, InspectionPanel, Instagram, Italic, IterationCcw, IterationCw, JapaneseYen, Joystick, Kanban, SquareKanban as KanbanSquare, SquareDashedKanban as KanbanSquareDashed, Key, KeyRound, KeySquare, Keyboard, KeyboardMusic, KeyboardOff, Lamp, LampCeiling, LampDesk, LampFloor, LampWallDown, LampWallUp, LandPlot, Landmark, Languages, Laptop, LaptopMinimal as Laptop2, LaptopMinimal, Lasso, LassoSelect, Laugh, Layers, Layers2, Layers3, PanelsTopLeft as Layout, LayoutDashboard, LayoutGrid, LayoutList, LayoutPanelLeft, LayoutPanelTop, LayoutTemplate, Leaf, LeafyGreen, Lectern, LetterText, Library, LibraryBig, SquareLibrary as LibrarySquare, LifeBuoy, Ligature, Lightbulb, LightbulbOff, ChartLine as LineChart, Link, Link2, Link2Off, Linkedin, List, ListCheck, ListChecks, ListCollapse, ListEnd, ListFilter, ListMinus, ListMusic, ListOrdered, ListPlus, ListRestart, ListStart, ListTodo, ListTree, ListVideo, ListX, Loader, LoaderCircle as Loader2, LoaderCircle, LoaderPinwheel, Locate, LocateFixed, LocateOff, Lock, LockKeyhole, LockKeyholeOpen, LockOpen, LogIn, LogOut, Logs, Lollipop, Luggage, SquareM as MSquare, Magnet, Mail, MailCheck, MailMinus, MailOpen, MailPlus, MailQuestion, MailSearch, MailWarning, MailX, Mailbox, Mails, Map, MapPin, MapPinCheck, MapPinCheckInside, MapPinHouse, MapPinMinus, MapPinMinusInside, MapPinOff, MapPinPlus, MapPinPlusInside, MapPinX, MapPinXInside, MapPinned, Martini, Maximize, Maximize2, Medal, Megaphone, MegaphoneOff, Meh, MemoryStick, Menu, SquareMenu as MenuSquare, Merge, MessageCircle, MessageCircleCode, MessageCircleDashed, MessageCircleHeart, MessageCircleMore, MessageCircleOff, MessageCirclePlus, MessageCircleQuestion, MessageCircleReply, MessageCircleWarning, MessageCircleX, MessageSquare, MessageSquareCode, MessageSquareDashed, MessageSquareDiff, MessageSquareDot, MessageSquareHeart, MessageSquareLock, MessageSquareMore, MessageSquareOff, MessageSquarePlus, MessageSquareQuote, MessageSquareReply, MessageSquareShare, MessageSquareText, MessageSquareWarning, MessageSquareX, MessagesSquare, Mic, MicVocal as Mic2, MicOff, MicVocal, Microchip, Microscope, Microwave, Milestone, Milk, MilkOff, Minimize, Minimize2, Minus, CircleMinus as MinusCircle, SquareMinus as MinusSquare, Monitor, MonitorCheck, MonitorCog, MonitorDot, MonitorDown, MonitorOff, MonitorPause, MonitorPlay, MonitorSmartphone, MonitorSpeaker, MonitorStop, MonitorUp, MonitorX, Moon, MoonStar, Ellipsis as MoreHorizontal, EllipsisVertical as MoreVertical, Mountain, MountainSnow, Mouse, MouseOff, MousePointer, MousePointer2, MousePointerBan, MousePointerClick, SquareDashedMousePointer as MousePointerSquareDashed, Move, Move3d as Move3D, Move3d, MoveDiagonal, MoveDiagonal2, MoveDown, MoveDownLeft, MoveDownRight, MoveHorizontal, MoveLeft, MoveRight, MoveUp, MoveUpLeft, MoveUpRight, MoveVertical, Music, Music2, Music3, Music4, Navigation, Navigation2, Navigation2Off, NavigationOff, Network, Newspaper, Nfc, Notebook, NotebookPen, NotebookTabs, NotebookText, NotepadText, NotepadTextDashed, Nut, NutOff, Octagon, OctagonAlert, OctagonMinus, OctagonPause, OctagonX, Omega, Option, Orbit, Origami, IndentDecrease as Outdent, Package, Package2, PackageCheck, PackageMinus, PackageOpen, PackagePlus, PackageSearch, PackageX, PaintBucket, PaintRoller, Paintbrush, PaintbrushVertical as Paintbrush2, PaintbrushVertical, Palette, TreePalm as Palmtree, PanelBottom, PanelBottomClose, PanelBottomDashed, PanelBottomDashed as PanelBottomInactive, PanelBottomOpen, PanelLeft, PanelLeftClose, PanelLeftDashed, PanelLeftDashed as PanelLeftInactive, PanelLeftOpen, PanelRight, PanelRightClose, PanelRightDashed, PanelRightDashed as PanelRightInactive, PanelRightOpen, PanelTop, PanelTopClose, PanelTopDashed, PanelTopDashed as PanelTopInactive, PanelTopOpen, PanelsLeftBottom, Columns3 as PanelsLeftRight, PanelsRightBottom, Rows3 as PanelsTopBottom, PanelsTopLeft, Paperclip, Parentheses, CircleParking as ParkingCircle, CircleParkingOff as ParkingCircleOff, ParkingMeter, SquareParking as ParkingSquare, SquareParkingOff as ParkingSquareOff, PartyPopper, Pause, CirclePause as PauseCircle, OctagonPause as PauseOctagon, PawPrint, PcCase, Pen, SquarePen as PenBox, PenLine, PenOff, SquarePen as PenSquare, PenTool, Pencil, PencilLine, PencilOff, PencilRuler, Pentagon, Percent, CirclePercent as PercentCircle, DiamondPercent as PercentDiamond, SquarePercent as PercentSquare, PersonStanding, PhilippinePeso, Phone, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, Pi, SquarePi as PiSquare, Piano, Pickaxe, PictureInPicture, PictureInPicture2, ChartPie as PieChart, PiggyBank, Pilcrow, PilcrowLeft, PilcrowRight, SquarePilcrow as PilcrowSquare, Pill, PillBottle, Pin, PinOff, Pipette, Pizza, Plane, PlaneLanding, PlaneTakeoff, Play, CirclePlay as PlayCircle, SquarePlay as PlaySquare, Plug, Plug2, PlugZap, PlugZap as PlugZap2, Plus, CirclePlus as PlusCircle, SquarePlus as PlusSquare, Pocket, PocketKnife, Podcast, Pointer, PointerOff, Popcorn, Popsicle, PoundSterling, Power, CirclePower as PowerCircle, PowerOff, SquarePower as PowerSquare, Presentation, Printer, PrinterCheck, Projector, Proportions, Puzzle, Pyramid, QrCode, Quote, Rabbit, Radar, Radiation, Radical, Radio, RadioReceiver, RadioTower, Radius, RailSymbol, Rainbow, Rat, Ratio, Receipt, ReceiptCent, ReceiptEuro, ReceiptIndianRupee, ReceiptJapaneseYen, ReceiptPoundSterling, ReceiptRussianRuble, ReceiptSwissFranc, ReceiptText, RectangleEllipsis, RectangleHorizontal, RectangleVertical, Recycle, Redo, Redo2, RedoDot, RefreshCcw, RefreshCcwDot, RefreshCw, RefreshCwOff, Refrigerator, Regex, RemoveFormatting, Repeat, Repeat1, Repeat2, Replace, ReplaceAll, Reply, ReplyAll, Rewind, Ribbon, Rocket, RockingChair, RollerCoaster, Rotate3d as Rotate3D, Rotate3d, RotateCcw, RotateCcwSquare, RotateCw, RotateCwSquare, Route, RouteOff, Router, Rows2 as Rows, Rows2, Rows3, Rows4, Rss, Ruler, RussianRuble, Sailboat, Salad, Sandwich, Satellite, SatelliteDish, Save, SaveAll, SaveOff, Scale, Scale3d as Scale3D, Scale3d, Scaling, Scan, ScanBarcode, ScanEye, ScanFace, ScanLine, ScanQrCode, ScanSearch, ScanText, ChartScatter as ScatterChart, School, University as School2, Scissors, ScissorsLineDashed, SquareScissors as ScissorsSquare, SquareBottomDashedScissors as ScissorsSquareDashedBottom, ScreenShare, ScreenShareOff, Scroll, ScrollText, Search, SearchCheck, SearchCode, SearchSlash, SearchX, Section, Send, SendHorizontal as SendHorizonal, SendHorizontal, SendToBack, SeparatorHorizontal, SeparatorVertical, Server, ServerCog, ServerCrash, ServerOff, Settings, Settings2, Shapes, Share, Share2, Sheet, Shell, Shield, ShieldAlert, ShieldBan, ShieldCheck, ShieldX as ShieldClose, ShieldEllipsis, ShieldHalf, ShieldMinus, ShieldOff, ShieldPlus, ShieldQuestion, ShieldX, Ship, ShipWheel, Shirt, ShoppingBag, ShoppingBasket, ShoppingCart, Shovel, ShowerHead, Shrink, Shrub, Shuffle, PanelLeft as Sidebar, PanelLeftClose as SidebarClose, PanelLeftOpen as SidebarOpen, Sigma, SquareSigma as SigmaSquare, Signal, SignalHigh, SignalLow, SignalMedium, SignalZero, Signature, Signpost, SignpostBig, Siren, SkipBack, SkipForward, Skull, Slack, Slash, SquareSlash as SlashSquare, Slice, SlidersVertical as Sliders, SlidersHorizontal, SlidersVertical, Smartphone, SmartphoneCharging, SmartphoneNfc, Smile, SmilePlus, Snail, Snowflake, Sofa, ArrowUpNarrowWide as SortAsc, ArrowDownWideNarrow as SortDesc, Soup, Space, Spade, Sparkle, Sparkles, Speaker, Speech, SpellCheck, SpellCheck2, Spline, Split, SquareSplitHorizontal as SplitSquareHorizontal, SquareSplitVertical as SplitSquareVertical, SprayCan, Sprout, Square, SquareActivity, SquareArrowDown, SquareArrowDownLeft, SquareArrowDownRight, SquareArrowLeft, SquareArrowOutDownLeft, SquareArrowOutDownRight, SquareArrowOutUpLeft, SquareArrowOutUpRight, SquareArrowRight, SquareArrowUp, SquareArrowUpLeft, SquareArrowUpRight, SquareAsterisk, SquareBottomDashedScissors, SquareChartGantt, SquareCheck, SquareCheckBig, SquareChevronDown, SquareChevronLeft, SquareChevronRight, SquareChevronUp, SquareCode, SquareDashed, SquareDashedBottom, SquareDashedBottomCode, SquareDashedKanban, SquareDashedMousePointer, SquareDivide, SquareDot, SquareEqual, SquareFunction, SquareChartGantt as SquareGanttChart, SquareKanban, SquareLibrary, SquareM, SquareMenu, SquareMinus, SquareMousePointer, SquareParking, SquareParkingOff, SquarePen, SquarePercent, SquarePi, SquarePilcrow, SquarePlay, SquarePlus, SquarePower, SquareRadical, SquareScissors, SquareSigma, SquareSlash, SquareSplitHorizontal, SquareSplitVertical, SquareSquare, SquareStack, SquareTerminal, SquareUser, SquareUserRound, SquareX, Squircle, Squirrel, Stamp, Star, StarHalf, StarOff, Sparkles as Stars, StepBack, StepForward, Stethoscope, Sticker, StickyNote, CircleStop as StopCircle, Store, StretchHorizontal, StretchVertical, Strikethrough, Subscript, Captions as Subtitles, Sun, SunDim, SunMedium, SunMoon, SunSnow, Sunrise, Sunset, Superscript, SwatchBook, SwissFranc, SwitchCamera, Sword, Swords, Syringe, Table, Table2, TableCellsMerge, TableCellsSplit, TableColumnsSplit, TableOfContents, TableProperties, TableRowsSplit, Tablet, TabletSmartphone, Tablets, Tag, Tags, Tally1, Tally2, Tally3, Tally4, Tally5, Tangent, Target, Telescope, Tent, TentTree, Terminal, SquareTerminal as TerminalSquare, TestTube, TestTubeDiagonal as TestTube2, TestTubeDiagonal, TestTubes, Text, TextCursor, TextCursorInput, TextQuote, TextSearch, TextSelect, TextSelect as TextSelection, Theater, Thermometer, ThermometerSnowflake, ThermometerSun, ThumbsDown, ThumbsUp, Ticket, TicketCheck, TicketMinus, TicketPercent, TicketPlus, TicketSlash, TicketX, Tickets, TicketsPlane, Timer, TimerOff, TimerReset, ToggleLeft, ToggleRight, Tornado, Torus, Touchpad, TouchpadOff, TowerControl, ToyBrick, Tractor, TrafficCone, TramFront as Train, TrainFront, TrainFrontTunnel, TrainTrack, TramFront, Trash, Trash2, TreeDeciduous, TreePalm, TreePine, Trees, Trello, TrendingDown, TrendingUp, TrendingUpDown, Triangle, TriangleAlert, TriangleRight, Trophy, Truck, Turtle, Tv, TvMinimal as Tv2, TvMinimal, TvMinimalPlay, Twitch, Twitter, Type, TypeOutline, Umbrella, UmbrellaOff, Underline, Undo, Undo2, UndoDot, UnfoldHorizontal, UnfoldVertical, Ungroup, University, Unlink, Unlink2, LockOpen as Unlock, LockKeyholeOpen as UnlockKeyhole, Unplug, Upload, CloudUpload as UploadCloud, Usb, User, UserRound as User2, UserCheck, UserRoundCheck as UserCheck2, CircleUser as UserCircle, CircleUserRound as UserCircle2, UserCog, UserRoundCog as UserCog2, UserMinus, UserRoundMinus as UserMinus2, UserPen, UserPlus, UserRoundPlus as UserPlus2, UserRound, UserRoundCheck, UserRoundCog, UserRoundMinus, UserRoundPen, UserRoundPlus, UserRoundSearch, UserRoundX, UserSearch, SquareUser as UserSquare, SquareUserRound as UserSquare2, UserX, UserRoundX as UserX2, Users, UsersRound as Users2, UsersRound, Utensils, UtensilsCrossed, UtilityPole, Variable, Vault, Vegan, VenetianMask, BadgeCheck as Verified, Vibrate, VibrateOff, Video, VideoOff, Videotape, View, Voicemail, Volume, Volume1, Volume2, VolumeOff, VolumeX, Vote, Wallet, WalletMinimal as Wallet2, WalletCards, WalletMinimal, Wallpaper, Wand, WandSparkles as Wand2, WandSparkles, Warehouse, WashingMachine, Watch, Waves, Waypoints, Webcam, Webhook, WebhookOff, Weight, Wheat, WheatOff, WholeWord, Wifi, WifiHigh, WifiLow, WifiOff, WifiZero, Wind, Wine, WineOff, Workflow, Worm, WrapText, Wrench, X, CircleX as XCircle, OctagonX as XOctagon, SquareX as XSquare, Youtube, Zap, ZapOff, ZoomIn, ZoomOut, createElement$1 as createElement, createIcons, iconsAndAliases as icons };
