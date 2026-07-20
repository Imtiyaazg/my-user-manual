/* @ds-bundle: {"format":3,"namespace":"KuatDesignSystem_d9a28b","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"ButtonGroup","sourcePath":"components/actions/ButtonGroup.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"LinkButton","sourcePath":"components/actions/LinkButton.jsx"},{"name":"ContentCard","sourcePath":"components/brand/ContentCard.jsx"},{"name":"KuatHeader","sourcePath":"components/brand/KuatHeader.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"LogoLockup","sourcePath":"components/brand/LogoLockup.jsx"},{"name":"RadialProgress","sourcePath":"components/brand/RadialProgress.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"AvatarStack","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"CardHeader","sourcePath":"components/display/Card.jsx"},{"name":"CardBody","sourcePath":"components/display/Card.jsx"},{"name":"CardFooter","sourcePath":"components/display/Card.jsx"},{"name":"Chart","sourcePath":"components/display/Chart.jsx"},{"name":"DataTable","sourcePath":"components/display/DataTable.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"DatePicker","sourcePath":"components/forms/DatePicker.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Command","sourcePath":"components/navigation/Command.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Accordion","sourcePath":"components/surfaces/Accordion.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Separator","sourcePath":"components/surfaces/Separator.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"52f59b996207","components/actions/ButtonGroup.jsx":"680940a75491","components/actions/IconButton.jsx":"40c984aa5108","components/actions/LinkButton.jsx":"8ea566af6d01","components/brand/ContentCard.jsx":"8d722a6675c6","components/brand/KuatHeader.jsx":"c290da485da6","components/brand/Logo.jsx":"b7abff9a479d","components/brand/LogoLockup.jsx":"a52f9ba94ce4","components/brand/RadialProgress.jsx":"4cd89b0df1ad","components/display/Avatar.jsx":"ce5741eabad4","components/display/Badge.jsx":"818f4b714d94","components/display/Card.jsx":"fcc41411d83c","components/display/Chart.jsx":"acb053f2f411","components/display/DataTable.jsx":"53784af0d833","components/feedback/Alert.jsx":"34586e8be056","components/feedback/Progress.jsx":"11111d0bc1e5","components/feedback/Skeleton.jsx":"3e10ea5b09e6","components/feedback/Spinner.jsx":"8065ec5051e1","components/feedback/Toast.jsx":"4c5e79fa4dc3","components/feedback/Tooltip.jsx":"8547a805fec6","components/forms/Checkbox.jsx":"f4fda0d32b79","components/forms/DatePicker.jsx":"db233e5b0e0b","components/forms/Field.jsx":"06a967bf73d0","components/forms/Input.jsx":"8e7d20fbe2c7","components/forms/Label.jsx":"c11399202f4d","components/forms/Radio.jsx":"7abab778cbc0","components/forms/Select.jsx":"2a21a9ffd200","components/forms/Slider.jsx":"031414f78f8a","components/forms/Switch.jsx":"d14e9fc8a2d8","components/forms/Textarea.jsx":"718e595888dd","components/navigation/Breadcrumb.jsx":"3d7ef9d2cbe0","components/navigation/Command.jsx":"f39516b329be","components/navigation/Pagination.jsx":"88310eecf74e","components/navigation/Tabs.jsx":"bee255722955","components/surfaces/Accordion.jsx":"3279af05ef36","components/surfaces/Dialog.jsx":"a4188daa75b5","components/surfaces/Separator.jsx":"5824a58d12a2","ui_kits/delivery-hub/Dashboard.jsx":"3e414fa3d1cc","ui_kits/delivery-hub/Sidebar.jsx":"fe6f00063b63"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KuatDesignSystem_d9a28b = window.KuatDesignSystem_d9a28b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Kuat Button — skin × variant × size, with full interaction states.
 * Built on the --kuat-button-* token family from kuat-core.
 */
const SKINS = ["ee-blue", "tech-blue", "transform-teal", "equal-ember"];
const SIZES = {
  sm: {
    height: 32,
    padding: "0 12px",
    font: "var(--text-sm)",
    gap: 6,
    icon: 16
  },
  md: {
    height: 36,
    padding: "0 16px",
    font: "var(--text-sm)",
    gap: 8,
    icon: 16
  },
  lg: {
    height: 40,
    padding: "0 20px",
    font: "var(--text-base)",
    gap: 8,
    icon: 18
  }
};
function resolve(skin, variant) {
  const s = SKINS.includes(skin) ? skin : "ee-blue";
  const base = `--kuat-button-${s}`;
  if (variant === "primary") {
    return {
      background: `var(${base}-primary-background)`,
      color: `var(${base}-primary-foreground)`,
      border: "1px solid transparent",
      hoverBg: `var(${base}-primary-background--hover)`,
      activeBg: `var(${base}-primary-background--active)`
    };
  }
  if (variant === "secondary") {
    return {
      background: `var(${base}-secondary-background)`,
      color: `var(${base}-secondary-foreground)`,
      border: "1px solid transparent",
      hoverBg: `var(${base}-secondary-background--hover)`,
      activeBg: `var(${base}-secondary-background--active)`
    };
  }
  if (variant === "outline") {
    return {
      background: "transparent",
      color: `var(${base}-outline-foreground)`,
      border: `1px solid var(${base}-outline-border)`,
      hoverBg: `var(${base}-outline-background--hover)`,
      activeBg: `var(${base}-outline-background--active)`
    };
  }
  if (variant === "ghost") {
    return {
      background: "transparent",
      color: `var(${base}-ghost-foreground)`,
      border: "1px solid transparent",
      hoverBg: `var(${base}-ghost-background--hover)`,
      activeBg: `var(${base}-ghost-background--active)`
    };
  }
  if (variant === "ghost-muted") {
    return {
      background: "transparent",
      color: "var(--kuat-button-ghost-muted-foreground)",
      border: "1px solid transparent",
      hoverBg: "var(--kuat-button-ghost-muted-background--hover)",
      activeBg: "var(--kuat-button-ghost-muted-background--active)"
    };
  }
  // destructive
  return {
    background: "var(--kuat-button-destructive-background)",
    color: "var(--kuat-button-destructive-foreground)",
    border: "1px solid transparent",
    hoverBg: "var(--kuat-button-destructive-background--hover)",
    activeBg: "var(--kuat-button-destructive-background--hover)"
  };
}
function Button({
  children,
  skin = "ee-blue",
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sz = SIZES[size] || SIZES.md;
  const c = resolve(skin, variant);
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const bg = disabled ? variant === "outline" || variant === "ghost" || variant === "ghost-muted" ? "transparent" : "var(--slate-200)" : active ? c.activeBg : hover ? c.hoverBg : c.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: sz.gap,
      width: fullWidth ? "100%" : "auto",
      height: sz.height,
      padding: sz.padding,
      font: "inherit",
      fontFamily: "var(--font-sans)",
      fontSize: sz.font,
      fontWeight: "var(--font-weight-medium)",
      lineHeight: 1,
      letterSpacing: "var(--tracking-normal)",
      color: disabled ? "var(--slate-500)" : c.color,
      background: bg,
      border: disabled && c.border.includes("1px solid var") ? "1px solid var(--slate-300)" : c.border,
      borderRadius: "var(--radius)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 120ms ease, border-color 120ms ease, box-shadow 120ms ease",
      userSelect: "none",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), leftIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: sz.icon,
      height: sz.icon
    }
  }, leftIcon) : null, children, rightIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: sz.icon,
      height: sz.icon
    }
  }, rightIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/ButtonGroup.jsx
try { (() => {
/**
 * Kuat ButtonGroup — segments a set of related actions into one joined control.
 * Pass items as [{ label, icon, value }]; selected highlights one segment.
 */
function ButtonGroup({
  items = [],
  value,
  onChange,
  skin = "ee-blue",
  size = "md",
  style
}) {
  const heights = {
    sm: 32,
    md: 36,
    lg: 40
  };
  const h = heights[size] || 36;
  const fg = `var(--kuat-button-${skin}-outline-foreground)`;
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    style: {
      display: "inline-flex",
      borderRadius: "var(--radius)",
      overflow: "hidden",
      border: "1px solid var(--border)",
      ...style
    }
  }, items.map((it, i) => {
    const active = value !== undefined ? value === it.value : false;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value ?? i,
      type: "button",
      onClick: () => onChange && onChange(it.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: h,
        padding: "0 14px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--font-weight-medium)",
        color: active ? "var(--brand-byte-white)" : "var(--slate-700)",
        background: active ? `var(--kuat-button-${skin}-primary-background)` : "var(--background)",
        border: "none",
        borderLeft: i === 0 ? "none" : "1px solid var(--border)",
        cursor: "pointer",
        transition: "background 120ms ease, color 120ms ease"
      }
    }, it.icon ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 16,
        height: 16
      }
    }, it.icon) : null, it.label);
  }));
}
Object.assign(__ds_scope, { ButtonGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ButtonGroup.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    size: 32,
    icon: 16
  },
  md: {
    size: 36,
    icon: 18
  },
  lg: {
    size: 40,
    icon: 20
  }
};

/**
 * Kuat IconButton — square, icon-only action. Shares Button skins/variants.
 */
function IconButton({
  icon,
  skin = "ee-blue",
  variant = "ghost",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
  onClick,
  style,
  ...rest
}) {
  const sz = SIZES[size] || SIZES.md;
  const base = `--kuat-button-${skin}`;
  const [hover, setHover] = React.useState(false);
  let bg = "transparent";
  let color = `var(${base}-ghost-foreground)`;
  let border = "1px solid transparent";
  if (variant === "primary") {
    bg = hover ? `var(${base}-primary-background--hover)` : `var(${base}-primary-background)`;
    color = `var(${base}-primary-foreground)`;
  } else if (variant === "secondary") {
    bg = hover ? `var(${base}-secondary-background--hover)` : `var(${base}-secondary-background)`;
    color = `var(${base}-secondary-foreground)`;
  } else if (variant === "outline") {
    bg = hover ? `var(${base}-outline-background--hover)` : "transparent";
    color = `var(${base}-outline-foreground)`;
    border = `1px solid var(${base}-outline-border)`;
  } else {
    bg = hover ? `var(${base}-ghost-background--hover)` : "transparent";
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: sz.size,
      height: sz.size,
      padding: 0,
      color: disabled ? "var(--slate-400)" : color,
      background: disabled ? "transparent" : bg,
      border,
      borderRadius: "var(--radius)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background 120ms ease",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: sz.icon,
      height: sz.icon
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/actions/LinkButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: "var(--text-sm)",
  md: "var(--text-sm)",
  lg: "var(--text-base)"
};

/**
 * Kuat LinkButton — text-only action that reads as a link but behaves like a button.
 */
function LinkButton({
  children,
  skin = "ee-blue",
  size = "md",
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const color = skin === "tech-blue" ? "var(--brand-tech-blue)" : skin === "transform-teal" ? "var(--brand-transform-teal)" : skin === "equal-ember" ? "var(--brand-equal-ember)" : "var(--brand-ee-blue)";
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: 0,
      background: "none",
      border: "none",
      fontFamily: "var(--font-sans)",
      fontSize: SIZES[size] || SIZES.md,
      fontWeight: "var(--font-weight-medium)",
      color: disabled ? "var(--slate-400)" : color,
      textDecoration: hover && !disabled ? "underline" : "none",
      textUnderlineOffset: 3,
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), leftIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16
    }
  }, leftIcon) : null, children, rightIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16
    }
  }, rightIcon) : null);
}
Object.assign(__ds_scope, { LinkButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/LinkButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/ContentCard.jsx
try { (() => {
/**
 * Kuat ContentCard — media + content surface used across EE marketing and product
 * views. Optional badge, category eyebrow, title, description, footer.
 */
function ContentCard({
  image,
  badge,
  category,
  title,
  description,
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--kuat-content-card-background, var(--card))",
      boxShadow: "inset 0 0 0 1px var(--border)",
      overflow: "hidden",
      paddingBottom: 8,
      width: "100%",
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: `url(${image}) center / cover no-repeat`,
      flexShrink: 0
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, category ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-semibold)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--kuat-content-card-title-foreground, var(--ee-blue-700))"
    }
  }, category) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-h4)",
      fontWeight: "var(--font-weight-semibold)",
      lineHeight: 1.25,
      color: "var(--card-foreground)"
    }
  }, title), badge)), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-base)",
      color: "var(--muted-foreground)"
    }
  }, description) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { ContentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ContentCard.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
/* Mark paths (the EE "bracket" symbol) and wordmark letter paths, lifted from
   the official EE logo SVGs so the component is fully self-contained. */
const MARK_PATHS = ["M102.74 38.8927H40.5969V57.5323H102.74V38.8927Z", "M102.74 75.3895H40.5969V93.029H102.74V75.3895Z", "M0.489227 2.44485V20.7938V110.382V128.741H19.1389H56.6732V110.382H19.1389V20.7938H56.6732V2.44485H19.1389H0.489227Z", "M124.198 2.44485H85.6262V21.0844H124.198V112.092H85.6262V130.741H124.198H142.847V112.092V21.0844V2.44485H124.198Z"];
const TEXT_PATHS = ["M220.235 1.45712L219.413 13.0751H197.72V23.2946H216.859V34.844H197.72V45.3862H219.667V57.0237H184.687V1.45712H220.235Z", "M227.495 29.0742C227.495 11.6766 233.601 0.136902 250.675 0.136902C267.75 0.136902 273.855 11.6766 273.855 29.0742V29.3382C273.855 41.4549 270.92 50.6084 263.454 55.2243L271.869 65.0037L260.568 70.7736L252.446 58.256C251.872 58.3312 251.293 58.3606 250.714 58.344C233.64 58.344 227.534 46.7945 227.534 29.3187L227.495 29.0742ZM241.194 29.2307C241.194 40.6921 243.669 46.55 250.685 46.55C257.701 46.55 260.254 40.6823 260.254 29.2307C260.254 17.779 257.691 11.9211 250.685 11.9211C243.679 11.9211 241.194 17.8572 241.194 29.2307Z", "M295.871 1.36911V35.2059C295.871 42.7947 297.436 46.5891 304.119 46.5891C310.802 46.5891 312.368 42.7947 312.368 35.2059V1.36911H325.401V35.8318C325.401 50.5009 320.284 58.3244 304.119 58.3244C287.955 58.3244 282.847 50.5009 282.847 35.8318V1.36911H295.871Z", "M361.282 1.45712C365.734 13.0751 373.493 37.0737 378.894 57.014H365.656L363.258 46.462H346.38L343.982 57.014H330.724C335.651 38.2094 341.53 19.6666 348.337 1.45712H361.282ZM354.599 16.7032C352.544 22.8838 350.89 28.9079 349.315 34.844H360.294C358.562 28.9079 356.996 22.8838 355.01 16.7032H354.599Z", "M399.139 1.45712V45.3862H421.076V57.0237H386.106V1.45712H399.139Z", "M220.235 75.2819L219.413 86.9096H197.72V97.1291H216.859V108.679H197.72V119.231H219.667V130.849H184.687V75.2819H220.235Z", "M240.773 75.3015C243.17 80.1912 246.712 87.0368 249.677 92.2101H249.931C252.984 87.2519 256.614 80.1716 258.924 75.3015H273.601C269.687 83.2228 263.63 93.6868 258.014 102.928L274.765 130.868H259.168L250.088 113.969H249.853L240.616 130.868H225.264L241.683 102.821C236.487 94.0193 229.941 82.1275 226.174 75.2819L240.773 75.3015Z", "M296.204 75.3015C301.096 75.3015 305.939 75.634 309.648 76.8759C315.842 79.0959 319.873 85.1982 319.873 93.7748C319.873 106.39 311.879 112.649 298.425 112.649H294.804V130.849H281.8V75.3015H296.204ZM294.804 101.021H297.358C302.965 101.021 306.164 100.366 306.164 93.7748C306.164 91.3006 305.254 89.1589 303.767 88.1614C302.28 87.1639 300.313 86.9292 297.505 86.9292H294.785L294.804 101.021Z", "M363.924 75.2819L363.092 86.9096H341.399V97.1291H360.538V108.679H341.399V119.231H363.346V130.849H328.366V75.2819H363.924Z", "M387.593 75.3015C392.485 75.3015 397.329 75.634 401.037 76.8759C407.221 79.0959 411.262 85.1884 411.262 93.7748C411.262 101.442 408.327 106.801 402.935 109.764L412.994 130.868H399.472L391.468 112.571C390.558 112.649 389.325 112.649 388.17 112.649H386.213V130.849H373.151V75.3015H387.593ZM386.194 101.276H388.748C394.354 101.276 397.554 100.366 397.554 93.7748C397.554 91.3006 396.644 88.9926 395.166 87.9951C393.689 86.9976 391.859 86.7629 388.885 86.7629H386.174L386.194 101.276Z", "M456.957 75.2819L456.135 86.9096H442.857V130.849H429.824V86.9096H416.213V75.2819H456.957Z", "M495.978 89.1393C492.031 87.0587 487.652 85.93 483.19 85.8437C481.553 85.7535 479.918 86.0343 478.405 86.6651C477.672 86.9348 477.045 87.4311 476.613 88.0819C476.182 88.7326 475.97 89.5039 476.008 90.2835C476.008 93.2174 478.943 94.9874 483.024 96.6401L487.642 98.4493C495.89 101.755 499.765 106.204 499.765 114.282C499.765 127.142 490.362 132.169 479.061 132.169C473.816 132.084 468.616 131.197 463.64 129.538L464.217 117.001C468.488 119.008 473.113 120.154 477.828 120.375C483.767 120.375 486.076 118.888 486.076 115.485C486.076 112.277 483.933 110.869 479.227 108.972L474.609 107.163C467.926 104.522 462.319 99.8282 462.319 90.5965C462.319 81.3647 469.002 73.9715 482.524 73.9715C487.385 74.0422 492.192 74.9931 496.712 76.7782L495.978 89.1393Z"];
const MARK_ONLY = ["M106.302 37.7865H41.6979V57.1042H106.302V37.7865Z", "M106.302 75.6187H41.6979V94.9434H106.302V75.6187Z", "M0 0V19.3212V113.672V133H19.3936H58.4165V113.672H19.3936V19.3212H58.4165V0H19.3936H0Z", "M128.613 0H88.5135V19.3212H128.613V113.672H88.5135V133H128.613H148V113.672V19.3212V0H128.613Z"];

/**
 * Kuat Logo — the Equal Experts wordmark or brand mark, fully self-contained.
 * tone: "colour" (blue mark + grey text), "mono-blue", "white", "black".
 */
function Logo({
  variant = "wordmark",
  tone = "colour",
  height = 28,
  style
}) {
  let mark = "#1795D4",
    text = "#808080";
  if (tone === "mono-blue") {
    mark = "#1795D4";
    text = "#1795D4";
  } else if (tone === "white") {
    mark = "#FFFFFF";
    text = "#FFFFFF";
  } else if (tone === "black") {
    mark = "#1A1A1A";
    text = "#1A1A1A";
  }
  if (variant === "mark") {
    return /*#__PURE__*/React.createElement("svg", {
      height: height,
      viewBox: "0 0 148 133",
      fill: "none",
      style: {
        display: "block",
        ...style
      },
      role: "img",
      "aria-label": "Equal Experts"
    }, MARK_ONLY.map((d, i) => /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d,
      fill: mark
    })));
  }
  return /*#__PURE__*/React.createElement("svg", {
    height: height,
    viewBox: "0 0 500 133",
    fill: "none",
    style: {
      display: "block",
      ...style
    },
    role: "img",
    "aria-label": "Equal Experts"
  }, MARK_PATHS.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: "m" + i,
    d: d,
    fill: mark
  })), TEXT_PATHS.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: "t" + i,
    d: d,
    fill: text
  })));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/LogoLockup.jsx
try { (() => {
/**
 * Kuat LogoLockup — EE logo paired with a product/service name via a divider.
 * The standard EE product chrome lockup.
 */
function LogoLockup({
  product,
  tone = "colour",
  height = 28,
  style
}) {
  const lineColor = tone === "white" ? "rgba(255,255,255,0.5)" : "var(--slate-300)";
  const productColor = tone === "white" ? "var(--brand-byte-white)" : "var(--slate-700)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: tone,
    height: height
  }), product ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: height * 0.85,
      background: lineColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: height * 0.6,
      fontWeight: "var(--font-weight-semibold)",
      color: productColor,
      whiteSpace: "nowrap"
    }
  }, product)) : null);
}
Object.assign(__ds_scope, { LogoLockup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LogoLockup.jsx", error: String((e && e.message) || e) }); }

// components/brand/KuatHeader.jsx
try { (() => {
/**
 * Kuat Header — standard EE product chrome. variant "default" (light) or "bold"
 * (tech-blue bar). nav: [{ label, active, href }]; actions render at the right.
 */
function KuatHeader({
  product,
  variant = "default",
  nav = [],
  actions,
  onNavClick,
  style
}) {
  const bold = variant === "bold";
  const bg = bold ? "var(--kuat-header-bold-background)" : "var(--kuat-header-default-background)";
  const fg = bold ? "var(--kuat-header-bold-foreground)" : "var(--kuat-header-default-foreground)";
  const fgSecondary = bold ? "var(--kuat-header-bold-foreground-secondary)" : "var(--kuat-header-default-foreground-secondary)";
  const logoTone = bold ? "white" : "colour";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      height: 64,
      padding: "0 24px",
      background: bg,
      borderBottom: bold ? "none" : "1px solid var(--border)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 32,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LogoLockup, {
    product: product,
    tone: logoTone,
    height: 26
  }), nav.length ? /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, nav.map((it, i) => {
    const active = it.active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => onNavClick && onNavClick(it),
      style: {
        padding: "8px 12px",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: active ? "var(--font-weight-semibold)" : "var(--font-weight-medium)",
        color: active ? fg : fgSecondary,
        borderRadius: "var(--radius)"
      }
    }, it.label);
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, actions));
}
Object.assign(__ds_scope, { KuatHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/KuatHeader.jsx", error: String((e && e.message) || e) }); }

// components/brand/RadialProgress.jsx
try { (() => {
const SIZES = {
  mini: 48,
  small: 64,
  medium: 96,
  large: 128
};

/**
 * Kuat RadialProgress — circular progress ring with centered label.
 * value 0–100; stroke aligns with the Figma border4 (4px) token.
 */
function RadialProgress({
  value = 0,
  size = "medium",
  label,
  skin = "ee-blue",
  style
}) {
  const px = SIZES[size] || 96;
  const stroke = 4;
  const r = (px - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const colors = {
    "ee-blue": "var(--ee-blue-500)",
    "transform-teal": "var(--transform-teal-500)",
    "equal-ember": "var(--equal-ember-500)",
    "tech-blue": "var(--tech-blue-500)"
  };
  const fg = colors[skin] || colors["ee-blue"];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: px,
      height: px,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: px,
    height: px,
    viewBox: `0 0 ${px} ${px}`,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: px / 2,
    cy: px / 2,
    r: r,
    fill: "none",
    stroke: "var(--kuat-radial-progress-background-bar, var(--slate-200))",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: px / 2,
    cy: px / 2,
    r: r,
    fill: "none",
    stroke: fg,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: circ,
    strokeDashoffset: circ * (1 - pct / 100),
    style: {
      transition: "stroke-dashoffset 320ms ease"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--font-weight-semibold)",
      fontSize: px * 0.26,
      color: "var(--foreground)"
    }
  }, label != null ? label : `${Math.round(pct)}%`));
}
Object.assign(__ds_scope, { RadialProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/RadialProgress.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 28,
  md: 36,
  lg: 48,
  xl: 64
};

/** Kuat Avatar — image or initials, with size and roundness options. */
function Avatar({
  src,
  alt = "",
  initials,
  size = "md",
  round = "full",
  style
}) {
  const px = SIZES[size] || 36;
  const radius = round === "full" ? "var(--radius-full)" : "var(--radius-md)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px,
      height: px,
      borderRadius: radius,
      overflow: "hidden",
      background: "var(--ee-blue-100)",
      color: "var(--ee-blue-700)",
      fontFamily: "var(--font-sans)",
      fontSize: px * 0.4,
      fontWeight: "var(--font-weight-semibold)",
      flexShrink: 0,
      userSelect: "none",
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?");
}

/** Overlapping stack of avatars; pass avatars=[{src|initials}] and optional extra count. */
function AvatarStack({
  avatars = [],
  size = "md",
  max = 4,
  style
}) {
  const px = SIZES[size] || 36;
  const shown = avatars.slice(0, max);
  const extra = avatars.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, shown.map((a, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -px * 0.3,
      borderRadius: "var(--radius-full)",
      boxShadow: "0 0 0 2px var(--background)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, _extends({}, a, {
    size: size
  })))), extra > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -px * 0.3,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px,
      height: px,
      borderRadius: "var(--radius-full)",
      background: "var(--slate-200)",
      color: "var(--slate-600)",
      fontFamily: "var(--font-sans)",
      fontSize: px * 0.34,
      fontWeight: 600,
      boxShadow: "0 0 0 2px var(--background)"
    }
  }, "+", extra) : null);
}
Object.assign(__ds_scope, { Avatar, AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const SKIN_COLORS = {
  "ee-blue": {
    solid: "var(--brand-ee-blue)",
    soft: "var(--ee-blue-100)",
    softFg: "var(--ee-blue-700)",
    line: "var(--ee-blue-500)"
  },
  "tech-blue": {
    solid: "var(--brand-tech-blue)",
    soft: "var(--tech-blue-100)",
    softFg: "var(--tech-blue-700)",
    line: "var(--tech-blue-500)"
  },
  "transform-teal": {
    solid: "var(--brand-transform-teal)",
    soft: "var(--transform-teal-100)",
    softFg: "var(--transform-teal-700)",
    line: "var(--transform-teal-500)"
  },
  "equal-ember": {
    solid: "var(--brand-equal-ember)",
    soft: "var(--equal-ember-100)",
    softFg: "var(--equal-ember-700)",
    line: "var(--equal-ember-500)"
  },
  neutral: {
    solid: "var(--slate-700)",
    soft: "var(--slate-100)",
    softFg: "var(--slate-700)",
    line: "var(--slate-300)"
  },
  destructive: {
    solid: "var(--destructive)",
    soft: "var(--red-100)",
    softFg: "var(--red-700)",
    line: "var(--red-500)"
  },
  success: {
    solid: "var(--green-600)",
    soft: "var(--green-100)",
    softFg: "var(--green-700)",
    line: "var(--green-500)"
  },
  warning: {
    solid: "var(--amber-500)",
    soft: "var(--amber-100)",
    softFg: "var(--amber-800)",
    line: "var(--amber-400)"
  }
};

/** Kuat Badge — compact status / category label. */
function Badge({
  children,
  skin = "ee-blue",
  variant = "secondary",
  round = false,
  leftIcon,
  style
}) {
  const c = SKIN_COLORS[skin] || SKIN_COLORS["ee-blue"];
  let bg = c.soft,
    fg = c.softFg,
    border = "1px solid transparent";
  if (variant === "primary") {
    bg = c.solid;
    fg = "var(--brand-byte-white)";
  } else if (variant === "outline") {
    bg = "transparent";
    fg = c.softFg;
    border = `1px solid ${c.line}`;
  } else if (variant === "ghost") {
    bg = "transparent";
    fg = c.softFg;
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "2px 8px",
      height: 22,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-medium)",
      lineHeight: 1,
      color: fg,
      background: bg,
      border,
      borderRadius: round ? "var(--radius-full)" : "var(--radius-sm)",
      whiteSpace: "nowrap",
      ...style
    }
  }, leftIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 12,
      height: 12
    }
  }, leftIcon) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
/** Kuat Card — surface container with optional header, body and footer slots. */
function Card({
  children,
  padding = 20,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      color: "var(--card-foreground)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-sm)",
      overflow: "hidden",
      ...style
    }
  }, typeof children === "string" ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children) : children);
}
function CardHeader({
  title,
  description,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      padding: "20px 20px 0",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-h4)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--card-foreground)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--muted-foreground)"
    }
  }, description) : null), action);
}
function CardBody({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      ...style
    }
  }, children);
}
function CardFooter({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 20px 20px",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardBody, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Chart.jsx
try { (() => {
const PALETTE = ["var(--chart-blue-2)", "var(--chart-teal-2)", "var(--chart-amber-2)", "var(--chart-orange-2)", "var(--chart-blue-1)", "var(--chart-teal-3)"];
function niceTicks(max, count = 4) {
  if (max <= 0) return [0, 1];
  const raw = max / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = (norm >= 5 ? 10 : norm >= 2 ? 5 : norm >= 1 ? 2 : 1) * mag;
  const top = Math.ceil(max / step) * step;
  const ticks = [];
  for (let v = 0; v <= top + 1e-9; v += step) ticks.push(v);
  return ticks;
}
const fmt = n => {
  if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  if (Math.abs(n) >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  return String(n);
};

/**
 * Kuat Chart — line / area / bar / donut. Pure SVG, token-driven.
 * data: [{ label, <seriesKey>: number, ... }]  (donut: [{ label, value, color? }])
 * series: [{ key, label, color? }]
 */
function Chart({
  type = "line",
  data = [],
  series = [],
  height = 260,
  showGrid = true,
  showLegend = true,
  showAxis = true,
  valueFormat = fmt,
  style
}) {
  const [hover, setHover] = React.useState(null);
  const wrapRef = React.useRef(null);
  const [w, setW] = React.useState(640);
  React.useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(e => setW(e[0].contentRect.width));
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);
  const colorFor = (s, i) => s.color || PALETTE[i % PALETTE.length];
  if (type === "donut") return /*#__PURE__*/React.createElement(DonutChart, {
    data: data,
    height: height,
    showLegend: showLegend,
    valueFormat: valueFormat,
    hover: hover,
    setHover: setHover,
    style: style
  });
  const padL = showAxis ? 44 : 8,
    padR = 12,
    padT = 12,
    padB = showAxis ? 28 : 8;
  const innerW = Math.max(10, w - padL - padR);
  const innerH = Math.max(10, height - padT - padB);
  const maxVal = Math.max(1, ...data.flatMap(d => series.map(s => +d[s.key] || 0)));
  const ticks = niceTicks(maxVal);
  const top = ticks[ticks.length - 1];
  const y = v => padT + innerH - v / top * innerH;
  const n = data.length;
  const xBand = innerW / Math.max(1, n);
  const xCenter = i => padL + xBand * i + xBand / 2;
  const legend = showLegend && series.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px 18px",
      marginBottom: 14
    }
  }, series.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: s.key,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: "var(--muted-foreground)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: colorFor(s, i)
    }
  }), s.label || s.key))) : null;
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: {
      width: "100%",
      ...style
    }
  }, legend, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: height,
    viewBox: `0 0 ${w} ${height}`,
    style: {
      display: "block",
      overflow: "visible"
    },
    onMouseLeave: () => setHover(null)
  }, showGrid ? ticks.map((t, i) => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: padL,
    x2: w - padR,
    y1: y(t),
    y2: y(t),
    stroke: "var(--border)",
    strokeWidth: "1",
    strokeDasharray: t === 0 ? "0" : "3 4"
  })) : null, showAxis ? ticks.map((t, i) => /*#__PURE__*/React.createElement("text", {
    key: "l" + i,
    x: padL - 8,
    y: y(t) + 4,
    textAnchor: "end",
    fontFamily: "var(--font-mono)",
    fontSize: "11",
    fill: "var(--muted-foreground)"
  }, valueFormat(t))) : null, showAxis ? data.map((d, i) => /*#__PURE__*/React.createElement("text", {
    key: "x" + i,
    x: xCenter(i),
    y: height - 8,
    textAnchor: "middle",
    fontFamily: "var(--font-sans)",
    fontSize: "11",
    fill: "var(--muted-foreground)"
  }, d.label)) : null, type === "bar" ? (() => {
    const groupW = xBand * 0.64;
    const barW = groupW / Math.max(1, series.length);
    return data.map((d, di) => series.map((s, si) => {
      const v = +d[s.key] || 0;
      const bx = xCenter(di) - groupW / 2 + si * barW;
      const bh = v / top * innerH;
      const active = hover && hover.i === di;
      return /*#__PURE__*/React.createElement("rect", {
        key: s.key + di,
        x: bx + 1,
        y: padT + innerH - bh,
        width: Math.max(1, barW - 2),
        height: bh,
        rx: "3",
        fill: colorFor(s, si),
        opacity: hover && !active ? 0.55 : 1,
        style: {
          transition: "opacity 120ms ease"
        },
        onMouseEnter: () => setHover({
          i: di,
          x: xCenter(di)
        })
      });
    }));
  })() : series.map((s, si) => {
    const pts = data.map((d, i) => [xCenter(i), y(+d[s.key] || 0)]);
    const line = pts.map((p, i) => (i ? "L" : "M") + p[0] + " " + p[1]).join(" ");
    const c = colorFor(s, si);
    return /*#__PURE__*/React.createElement("g", {
      key: s.key
    }, type === "area" ? /*#__PURE__*/React.createElement("path", {
      d: `${line} L${pts[pts.length - 1][0]} ${padT + innerH} L${pts[0][0]} ${padT + innerH} Z`,
      fill: c,
      opacity: "0.12"
    }) : null, /*#__PURE__*/React.createElement("path", {
      d: line,
      fill: "none",
      stroke: c,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p[0],
      cy: p[1],
      r: hover && hover.i === i ? 4.5 : 0,
      fill: "var(--background)",
      stroke: c,
      strokeWidth: "2.5",
      style: {
        transition: "r 120ms ease"
      }
    })));
  }), data.map((d, i) => /*#__PURE__*/React.createElement("rect", {
    key: "h" + i,
    x: padL + xBand * i,
    y: padT,
    width: xBand,
    height: innerH,
    fill: "transparent",
    onMouseEnter: () => setHover({
      i,
      x: xCenter(i)
    })
  })), hover ? /*#__PURE__*/React.createElement("line", {
    x1: hover.x,
    x2: hover.x,
    y1: padT,
    y2: padT + innerH,
    stroke: "var(--slate-300)",
    strokeWidth: "1"
  }) : null), hover ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 4,
      pointerEvents: "none",
      left: Math.min(Math.max(hover.x - 70, 0), w - 150),
      background: "var(--popover, var(--background))",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      boxShadow: "var(--shadow-lg)",
      padding: "8px 10px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      minWidth: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--foreground)",
      marginBottom: 4
    }
  }, data[hover.i].label), series.map((s, si) => /*#__PURE__*/React.createElement("div", {
    key: s.key,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 14,
      color: "var(--muted-foreground)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 2,
      background: colorFor(s, si)
    }
  }), s.label || s.key), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--foreground)",
      fontWeight: "var(--font-weight-medium)"
    }
  }, valueFormat(+data[hover.i][s.key] || 0))))) : null));
}
function DonutChart({
  data,
  height,
  showLegend,
  valueFormat,
  hover,
  setHover,
  style
}) {
  const size = height;
  const cx = size / 2,
    cy = size / 2,
    r = size / 2 - 10,
    thick = size * 0.22;
  const total = data.reduce((a, d) => a + (+d.value || 0), 0) || 1;
  let acc = -Math.PI / 2;
  const arcs = data.map((d, i) => {
    const frac = (+d.value || 0) / total;
    const a0 = acc,
      a1 = acc + frac * Math.PI * 2;
    acc = a1;
    const large = a1 - a0 > Math.PI ? 1 : 0;
    const p = (a, rad) => [cx + rad * Math.cos(a), cy + rad * Math.sin(a)];
    const ri = r - thick;
    const [x0, y0] = p(a0, r),
      [x1, y1] = p(a1, r);
    const [x2, y2] = p(a1, ri),
      [x3, y3] = p(a0, ri);
    const dd = `M${x0} ${y0} A${r} ${r} 0 ${large} 1 ${x1} ${y1} L${x2} ${y2} A${ri} ${ri} 0 ${large} 0 ${x3} ${y3} Z`;
    return {
      d: dd,
      color: d.color || PALETTE[i % PALETTE.length],
      frac,
      label: d.label,
      value: +d.value || 0
    };
  });
  const active = hover != null ? data[hover] : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      flexWrap: "wrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`
  }, arcs.map((a, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: a.d,
    fill: a.color,
    opacity: hover != null && hover !== i ? 0.5 : 1,
    style: {
      transition: "opacity 120ms ease",
      cursor: "pointer"
    },
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(null)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--foreground)",
      letterSpacing: "-0.02em"
    }
  }, active ? valueFormat(active.value) : valueFormat(total)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: "var(--muted-foreground)"
    }
  }, active ? active.label : "Total"))), showLegend ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, arcs.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(null),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      opacity: hover != null && hover !== i ? 0.55 : 1,
      transition: "opacity 120ms ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 3,
      background: a.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--foreground)",
      minWidth: 90
    }
  }, a.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-sm)",
      color: "var(--muted-foreground)",
      marginLeft: "auto"
    }
  }, Math.round(a.frac * 100), "%")))) : null);
}
Object.assign(__ds_scope, { Chart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Chart.jsx", error: String((e && e.message) || e) }); }

// components/display/DataTable.jsx
try { (() => {
/**
 * Kuat DataTable — sortable, optionally selectable rows.
 * columns: [{ key, header, align?, width?, sortable?, render?(row) }]
 * data: array of row objects (each needs a stable `id`).
 */
function DataTable({
  columns = [],
  data = [],
  selectable = false,
  selectedIds,
  onSelectionChange,
  sort,
  onSortChange,
  rowKey = "id",
  density = "comfortable",
  emptyMessage = "No data available",
  stickyHeader = false,
  style
}) {
  // sort can be controlled ({ key, dir }) or uncontrolled.
  const [innerSort, setInnerSort] = React.useState(sort || null);
  const activeSort = sort !== undefined ? sort : innerSort;
  const setSort = next => {
    onSortChange ? onSortChange(next) : setInnerSort(next);
  };
  const [innerSel, setInnerSel] = React.useState(selectedIds || []);
  const sel = selectedIds !== undefined ? selectedIds : innerSel;
  const setSel = next => {
    onSelectionChange ? onSelectionChange(next) : setInnerSel(next);
  };
  const rowH = density === "compact" ? 38 : 48;
  const padY = density === "compact" ? "6px" : "10px";
  const sorted = React.useMemo(() => {
    if (!activeSort || !activeSort.key) return data;
    const {
      key,
      dir
    } = activeSort;
    const copy = [...data];
    copy.sort((a, b) => {
      const av = a[key],
        bv = b[key];
      if (av == null) return 1;
      if (bv == null) return -1;
      let r;
      if (typeof av === "number" && typeof bv === "number") r = av - bv;else r = String(av).localeCompare(String(bv), undefined, {
        numeric: true
      });
      return dir === "desc" ? -r : r;
    });
    return copy;
  }, [data, activeSort]);
  const toggleSort = col => {
    if (!col.sortable) return;
    if (!activeSort || activeSort.key !== col.key) return setSort({
      key: col.key,
      dir: "asc"
    });
    if (activeSort.dir === "asc") return setSort({
      key: col.key,
      dir: "desc"
    });
    return setSort(null);
  };
  const allChecked = sorted.length > 0 && sorted.every(r => sel.includes(r[rowKey]));
  const someChecked = sorted.some(r => sel.includes(r[rowKey])) && !allChecked;
  const toggleAll = () => setSel(allChecked ? [] : sorted.map(r => r[rowKey]));
  const toggleRow = id => setSel(sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id]);
  const th = {
    textAlign: "left",
    padding: `0 16px`,
    height: rowH,
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--font-weight-semibold)",
    letterSpacing: "0.02em",
    color: "var(--muted-foreground)",
    textTransform: "uppercase",
    background: "var(--muted)",
    borderBottom: "1px solid var(--border)",
    whiteSpace: "nowrap",
    userSelect: "none",
    position: stickyHeader ? "sticky" : "static",
    top: 0,
    zIndex: 1
  };
  const td = {
    padding: `${padY} 16px`,
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    color: "var(--foreground)",
    borderBottom: "1px solid var(--border)",
    verticalAlign: "middle"
  };
  const SortIcon = ({
    state
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: state ? "var(--primary)" : "var(--slate-300)",
    strokeWidth: "2.25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      marginLeft: 6,
      verticalAlign: "-2px",
      flexShrink: 0
    }
  }, state === "desc" ? /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "m18 15-6-6-6 6"
  }));
  const Check = ({
    checked,
    indeterminate,
    onChange
  }) => /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onChange();
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      borderRadius: "var(--radius-sm)",
      cursor: "pointer",
      border: `1px solid ${checked || indeterminate ? "var(--primary)" : "var(--border)"}`,
      background: checked || indeterminate ? "var(--primary)" : "var(--background)",
      transition: "background 120ms ease, border-color 120ms ease"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--primary-foreground)",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--primary-foreground)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      background: "var(--background)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable ? /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      width: 44,
      paddingRight: 0
    }
  }, /*#__PURE__*/React.createElement(Check, {
    checked: allChecked,
    indeterminate: someChecked,
    onChange: toggleAll
  })) : null, columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.key,
    style: {
      ...th,
      width: col.width,
      textAlign: col.align || "left",
      cursor: col.sortable ? "pointer" : "default"
    },
    onClick: () => toggleSort(col)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: col.align === "right" ? "flex-end" : "flex-start"
    }
  }, col.header, col.sortable ? /*#__PURE__*/React.createElement(SortIcon, {
    state: activeSort && activeSort.key === col.key ? activeSort.dir : null
  }) : null))))), /*#__PURE__*/React.createElement("tbody", null, sorted.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + (selectable ? 1 : 0),
    style: {
      ...td,
      textAlign: "center",
      color: "var(--muted-foreground)",
      padding: "40px 16px",
      borderBottom: "none"
    }
  }, emptyMessage)) : sorted.map(row => {
    const id = row[rowKey];
    const checked = sel.includes(id);
    return /*#__PURE__*/React.createElement("tr", {
      key: id,
      style: {
        background: checked ? "var(--accent)" : "transparent",
        transition: "background 120ms ease"
      },
      onMouseEnter: e => {
        if (!checked) e.currentTarget.style.background = "var(--muted)";
      },
      onMouseLeave: e => {
        if (!checked) e.currentTarget.style.background = "transparent";
      }
    }, selectable ? /*#__PURE__*/React.createElement("td", {
      style: {
        ...td,
        paddingRight: 0
      }
    }, /*#__PURE__*/React.createElement(Check, {
      checked: checked,
      onChange: () => toggleRow(id)
    })) : null, columns.map(col => /*#__PURE__*/React.createElement("td", {
      key: col.key,
      style: {
        ...td,
        textAlign: col.align || "left"
      }
    }, col.render ? col.render(row) : row[col.key])));
  })))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: "var(--slate-50)",
    border: "var(--slate-200)",
    fg: "var(--slate-700)",
    icon: "var(--slate-500)"
  },
  info: {
    bg: "var(--ee-blue-50)",
    border: "var(--ee-blue-200)",
    fg: "var(--ee-blue-800)",
    icon: "var(--ee-blue-600)"
  },
  success: {
    bg: "var(--green-50)",
    border: "var(--green-200)",
    fg: "var(--green-800)",
    icon: "var(--green-600)"
  },
  warning: {
    bg: "var(--amber-50)",
    border: "var(--amber-200)",
    fg: "var(--amber-900)",
    icon: "var(--amber-600)"
  },
  error: {
    bg: "var(--red-50)",
    border: "var(--red-200)",
    fg: "var(--red-800)",
    icon: "var(--red-600)"
  }
};

/** Kuat Alert — inline contextual message with tone, icon, title and body. */
function Alert({
  tone = "info",
  title,
  children,
  icon,
  action,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      padding: "12px 14px",
      background: t.bg,
      border: `1px solid ${t.border}`,
      borderRadius: "var(--radius-lg)",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18,
      color: t.icon,
      flexShrink: 0,
      marginTop: 1
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-semibold)",
      color: t.fg
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: 1.5,
      color: t.fg,
      opacity: 0.9,
      marginTop: title ? 2 : 0
    }
  }, children) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action) : null));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
/** Kuat Progress — determinate horizontal bar (0–100). */
function Progress({
  value = 0,
  skin = "ee-blue",
  height = 8,
  style
}) {
  const colors = {
    "ee-blue": "var(--brand-ee-blue)",
    "transform-teal": "var(--brand-transform-teal)",
    "equal-ember": "var(--brand-equal-ember)",
    "tech-blue": "var(--brand-tech-blue)"
  };
  const fill = colors[skin] || colors["ee-blue"];
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height,
      borderRadius: "var(--radius-full)",
      background: "var(--slate-200)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: "var(--radius-full)",
      background: fill,
      transition: "width 240ms ease"
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
/** Kuat Skeleton — shimmering placeholder while content loads. */
function Skeleton({
  width = "100%",
  height = 16,
  round = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width,
      height,
      borderRadius: round ? "var(--radius-full)" : "var(--radius-sm)",
      background: "linear-gradient(90deg, var(--slate-200) 25%, var(--slate-100) 37%, var(--slate-200) 63%)",
      backgroundSize: "400% 100%",
      animation: "kuat-shimmer 1.4s ease infinite",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes kuat-shimmer{0%{background-position:100% 0}100%{background-position:-100% 0}}"));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
/** Kuat Spinner — indeterminate loading indicator. */
function Spinner({
  size = 20,
  color = "var(--primary)",
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      animation: "kuat-spin 0.8s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: "currentColor",
    strokeOpacity: "0.2",
    strokeWidth: "3",
    style: {
      color
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    style: {
      color
    }
  })), /*#__PURE__*/React.createElement("style", null, "@keyframes kuat-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  neutral: "var(--slate-500)",
  info: "var(--ee-blue-500)",
  success: "var(--green-600)",
  warning: "var(--amber-500)",
  error: "var(--red-600)"
};

/** Kuat Toast (Sonner) — transient notification card. Render in a stack. */
function Toast({
  tone = "neutral",
  title,
  description,
  icon,
  onClose,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      width: 340,
      padding: "12px 14px",
      background: "var(--background)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18,
      color: TONES[tone],
      flexShrink: 0,
      marginTop: 1
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--foreground)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--muted-foreground)",
      marginTop: 2,
      lineHeight: 1.4
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--muted-foreground)",
      padding: 0,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Kuat Tooltip — dark popover on hover/focus. Wraps a single trigger child. */
function Tooltip({
  label,
  side = "top",
  children,
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      zIndex: 30,
      ...pos,
      padding: "5px 9px",
      whiteSpace: "nowrap",
      background: "var(--popover)",
      color: "var(--popover-foreground)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-medium)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Kuat Checkbox — square check control with label support and indeterminate state. */
function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  onChange,
  id,
  style
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      borderRadius: "var(--radius-sm)",
      border: `1.5px solid ${on ? "var(--primary)" : "var(--slate-300)"}`,
      background: on ? "var(--primary)" : "var(--input)",
      color: "var(--primary-foreground)",
      transition: "background 120ms ease, border-color 120ms ease",
      flexShrink: 0
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--foreground)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/DatePicker.jsx
try { (() => {
const WD = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const toDate = v => v instanceof Date ? v : v ? new Date(v) : null;
const sameDay = (a, b) => a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const startOfMonth = d => new Date(d.getFullYear(), d.getMonth(), 1);
// Monday-first weekday index (0 = Mon … 6 = Sun)
const mondayIdx = d => (d.getDay() + 6) % 7;

/**
 * Kuat DatePicker — input trigger + calendar popover. Controlled via value/onChange.
 * value: Date | ISO string | null. onChange receives a Date.
 */
function DatePicker({
  value,
  onChange,
  placeholder = "Select date",
  size = "md",
  min,
  max,
  disabled = false,
  format,
  style
}) {
  const selected = toDate(value);
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState(selected || new Date());
  const ref = React.useRef(null);
  const minD = toDate(min),
    maxD = toDate(max);
  React.useEffect(() => {
    if (selected) setView(selected);
  }, [value]);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const heights = {
    sm: 32,
    md: 36,
    lg: 40
  };
  const h = heights[size] || 36;
  const fmt = format || (d => d.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }));
  const outOfRange = d => minD && d < startOfMonth(minD) && d < minD || maxD && d > maxD;
  const first = startOfMonth(view);
  const lead = mondayIdx(first);
  const days = [];
  for (let i = 0; i < lead; i++) days.push(null);
  const dim = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  for (let d = 1; d <= dim; d++) days.push(new Date(view.getFullYear(), view.getMonth(), d));
  while (days.length % 7 !== 0) days.push(null);
  const today = new Date();
  const navBtn = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: "var(--radius-sm)",
    cursor: "pointer",
    border: "1px solid var(--border)",
    background: "var(--background)",
    color: "var(--foreground)"
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      display: "inline-block",
      minWidth: 220,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      width: "100%",
      height: h,
      padding: "0 12px",
      background: "var(--input)",
      border: `1px solid ${open ? "var(--ring)" : "var(--border)"}`,
      borderRadius: "var(--radius)",
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: selected ? "var(--foreground)" : "var(--muted-foreground)",
      boxShadow: open ? "0 0 0 3px color-mix(in srgb, var(--ring) 35%, transparent)" : "none",
      transition: "border-color 120ms ease, box-shadow 120ms ease"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--muted-foreground)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18M8 2v4M16 2v4"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "left"
    }
  }, selected ? fmt(selected) : placeholder)), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 6px)",
      left: 0,
      zIndex: 30,
      background: "var(--popover, var(--background))",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: 14,
      width: 268
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: navBtn,
    onClick: () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1)),
    "aria-label": "Previous month"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--foreground)"
    }
  }, MONTHS[view.getMonth()], " ", view.getFullYear()), /*#__PURE__*/React.createElement("button", {
    style: navBtn,
    onClick: () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1)),
    "aria-label": "Next month"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: 2
    }
  }, WD.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      textAlign: "center",
      height: 28,
      lineHeight: "28px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--muted-foreground)"
    }
  }, d)), days.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("span", {
      key: "e" + i
    });
    const isSel = sameDay(d, selected);
    const isToday = sameDay(d, today);
    const off = outOfRange(d);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      disabled: off,
      onClick: () => {
        onChange && onChange(d);
        setOpen(false);
      },
      style: {
        height: 32,
        borderRadius: "var(--radius-sm)",
        border: "none",
        cursor: off ? "not-allowed" : "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: isSel ? "var(--font-weight-semibold)" : "var(--font-weight-normal)",
        background: isSel ? "var(--primary)" : "transparent",
        color: off ? "var(--slate-300)" : isSel ? "var(--primary-foreground)" : "var(--foreground)",
        boxShadow: isToday && !isSel ? "inset 0 0 0 1px var(--primary)" : "none",
        transition: "background 120ms ease"
      },
      onMouseEnter: e => {
        if (!isSel && !off) e.currentTarget.style.background = "var(--muted)";
      },
      onMouseLeave: e => {
        if (!isSel && !off) e.currentTarget.style.background = "transparent";
      }
    }, d.getDate());
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 12,
      paddingTop: 12,
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const t = new Date();
      if (!outOfRange(t)) {
        onChange && onChange(t);
        setOpen(false);
      }
    },
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--primary)"
    }
  }, "Today"), selected ? /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      onChange && onChange(null);
      setOpen(false);
    },
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-medium)",
      color: "var(--muted-foreground)"
    }
  }, "Clear") : null)) : null);
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 32,
    font: "var(--text-sm)",
    pad: "0 10px"
  },
  md: {
    height: 36,
    font: "var(--text-sm)",
    pad: "0 12px"
  },
  lg: {
    height: 40,
    font: "var(--text-base)",
    pad: "0 14px"
  }
};

/**
 * Kuat Input — single-line text field with focus ring and error state.
 */
function Input({
  size = "md",
  invalid = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  ...rest
}) {
  const sz = SIZES[size] || SIZES.md;
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? "var(--destructive)" : focus ? "var(--ring)" : "var(--border)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: sz.height,
      padding: sz.pad,
      background: disabled ? "var(--muted)" : "var(--input)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius)",
      boxShadow: focus ? "0 0 0 3px color-mix(in srgb, var(--ring) 35%, transparent)" : "none",
      transition: "border-color 120ms ease, box-shadow 120ms ease",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, leftIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16,
      color: "var(--muted-foreground)",
      flexShrink: 0
    }
  }, leftIcon) : null, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: sz.font,
      color: "var(--foreground)"
    }
  }, rest)), rightIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16,
      color: "var(--muted-foreground)",
      flexShrink: 0
    }
  }, rightIcon) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Kuat Label — form field label; set required to show the accent asterisk. */
function Label({
  children,
  htmlFor,
  required = false,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: htmlFor,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--font-weight-medium)",
      lineHeight: 1.2,
      color: disabled ? "var(--muted-foreground)" : "var(--foreground)",
      ...style
    }
  }, rest), children, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--destructive)"
    }
  }, "*") : null);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/**
 * Kuat Field — composes Label + control + help/error text into one block.
 */
function Field({
  label,
  htmlFor,
  required = false,
  help,
  error,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement(__ds_scope.Label, {
    htmlFor: htmlFor,
    required: required
  }, label) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: "var(--destructive)"
    }
  }, error) : help ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      color: "var(--muted-foreground)"
    }
  }, help) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/** Kuat Radio — single circular choice; compose several with a shared name. */
function Radio({
  checked = false,
  disabled = false,
  label,
  name,
  value,
  onChange,
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(value),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      borderRadius: "var(--radius-full)",
      border: `1.5px solid ${checked ? "var(--primary)" : "var(--slate-300)"}`,
      background: "var(--input)",
      flexShrink: 0,
      transition: "border-color 120ms ease"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "var(--radius-full)",
      background: "var(--primary)"
    }
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--foreground)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Kuat Select — trigger + popover list. Controlled via value/onChange.
 * options: [{ value, label }].
 */
function Select({
  options = [],
  value,
  onChange,
  placeholder = "Select…",
  size = "md",
  disabled = false,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  const heights = {
    sm: 32,
    md: 36,
    lg: 40
  };
  const h = heights[size] || 36;
  const selected = options.find(o => o.value === value);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      display: "inline-block",
      minWidth: 200,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      width: "100%",
      height: h,
      padding: "0 12px",
      background: "var(--input)",
      border: `1px solid ${open ? "var(--ring)" : "var(--border)"}`,
      borderRadius: "var(--radius)",
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: selected ? "var(--foreground)" : "var(--muted-foreground)",
      boxShadow: open ? "0 0 0 3px color-mix(in srgb, var(--ring) 35%, transparent)" : "none",
      transition: "border-color 120ms ease, box-shadow 120ms ease"
    }
  }, selected ? selected.label : placeholder, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--muted-foreground)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform 120ms ease"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      zIndex: 20,
      background: "var(--background)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      boxShadow: "var(--shadow-lg)",
      padding: 4,
      maxHeight: 240,
      overflowY: "auto"
    }
  }, options.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      onClick: () => {
        onChange && onChange(o.value);
        setOpen(false);
      },
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 10px",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        color: "var(--foreground)",
        background: active ? "var(--accent)" : "transparent"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = "var(--muted)";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = "transparent";
      }
    }, o.label, active ? /*#__PURE__*/React.createElement("svg", {
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--primary)",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    })) : null);
  })) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
/** Kuat Slider — single-thumb range. Controlled via value (0–max). */
function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onChange,
  style
}) {
  const ref = React.useRef(null);
  const pct = (value - min) / (max - min) * 100;
  const setFromEvent = clientX => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let p = (clientX - rect.left) / rect.width;
    p = Math.max(0, Math.min(1, p));
    let v = min + p * (max - min);
    v = Math.round(v / step) * step;
    onChange && onChange(v);
  };
  const onDown = e => {
    if (disabled) return;
    setFromEvent(e.clientX);
    const move = ev => setFromEvent(ev.clientX);
    const up = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    onMouseDown: onDown,
    style: {
      position: "relative",
      height: 18,
      display: "flex",
      alignItems: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 5,
      borderRadius: "var(--radius-full)",
      background: "var(--slate-200)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      width: `${pct}%`,
      height: 5,
      borderRadius: "var(--radius-full)",
      background: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${pct}% - 9px)`,
      width: 18,
      height: 18,
      borderRadius: "var(--radius-full)",
      background: "var(--brand-byte-white)",
      border: "2px solid var(--primary)",
      boxShadow: "var(--shadow-sm)"
    }
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Kuat Switch — on/off toggle. Track fills with EE Blue when on. */
function Switch({
  checked = false,
  disabled = false,
  onChange,
  label,
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: "relative",
      display: "inline-block",
      width: 36,
      height: 20,
      borderRadius: "var(--radius-full)",
      background: checked ? "var(--primary)" : "var(--slate-300)",
      transition: "background 160ms ease",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? 18 : 2,
      width: 16,
      height: 16,
      borderRadius: "var(--radius-full)",
      background: "var(--brand-byte-white)",
      boxShadow: "var(--shadow-sm)",
      transition: "left 160ms ease"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--foreground)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Kuat Textarea — multi-line text field matching Input styling. */
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? "var(--destructive)" : focus ? "var(--ring)" : "var(--border)";
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      padding: "10px 12px",
      resize: "vertical",
      background: disabled ? "var(--muted)" : "var(--input)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius)",
      boxShadow: focus ? "0 0 0 3px color-mix(in srgb, var(--ring) 35%, transparent)" : "none",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      lineHeight: "var(--leading-sm)",
      color: "var(--foreground)",
      outline: "none",
      transition: "border-color 120ms ease, box-shadow 120ms ease",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Kuat Breadcrumb — path trail. items: [{ label, href }]; last is current. */
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "wrap",
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--font-weight-medium)",
        color: "var(--foreground)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        color: "var(--muted-foreground)",
        textDecoration: "none"
      }
    }, it.label), !last ? /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--slate-400)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m9 18 6-6-6-6"
    })) : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Command.jsx
try { (() => {
/**
 * Kuat Command — searchable command palette with keyboard navigation.
 * items: [{ id, label, group?, icon?, shortcut?, keywords?, onSelect? }]
 * Inline by default; pass `open`/`onOpenChange` to render as a ⌘K overlay.
 */
function Command({
  items = [],
  placeholder = "Type a command or search…",
  emptyMessage = "No results found",
  open,
  onOpenChange,
  onSelect,
  autoFocus = true,
  style
}) {
  const overlay = open !== undefined;
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const inputRef = React.useRef(null);
  const listRef = React.useRef(null);
  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(it => {
      const hay = [it.label, it.group, ...(it.keywords || [])].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [items, query]);
  React.useEffect(() => {
    setActive(0);
  }, [query]);
  React.useEffect(() => {
    if ((overlay ? open : true) && autoFocus && inputRef.current) inputRef.current.focus();
  }, [open]);

  // ⌘K / Ctrl-K toggles when in overlay mode.
  React.useEffect(() => {
    if (!overlay) return;
    const onKey = e => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange && onOpenChange(!open);
      }
      if (e.key === "Escape" && open) onOpenChange && onOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [overlay, open]);
  const choose = it => {
    if (!it) return;
    it.onSelect && it.onSelect(it);
    onSelect && onSelect(it);
    if (overlay) {
      onOpenChange && onOpenChange(false);
      setQuery("");
    }
  };
  const onKeyDown = e => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(a => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(a => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(filtered[active]);
    }
  };
  React.useEffect(() => {
    const el = listRef.current && listRef.current.querySelector(`[data-idx="${active}"]`);
    if (el) el.scrollIntoView({
      block: "nearest"
    });
  }, [active]);

  // Group while preserving order; track flat index for keyboard nav.
  const groups = [];
  let flat = 0;
  filtered.forEach(it => {
    const g = it.group || "";
    let bucket = groups.find(x => x.name === g);
    if (!bucket) {
      bucket = {
        name: g,
        items: []
      };
      groups.push(bucket);
    }
    bucket.items.push({
      ...it,
      _idx: flat++
    });
  });
  const panel = /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--popover, var(--background))",
      border: overlay ? "none" : "1px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: overlay ? "var(--shadow-2xl)" : "var(--shadow-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 14px",
      height: 52,
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--muted-foreground)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: query,
    onChange: e => setQuery(e.target.value),
    onKeyDown: onKeyDown,
    placeholder: placeholder,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--foreground)"
    }
  }), overlay ? /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: "var(--muted-foreground)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-sm)",
      padding: "2px 6px",
      background: "var(--muted)"
    }
  }, "esc") : null), /*#__PURE__*/React.createElement("div", {
    ref: listRef,
    style: {
      maxHeight: 360,
      overflowY: "auto",
      padding: 6
    }
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 14px",
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--muted-foreground)"
    }
  }, emptyMessage) : groups.map(grp => /*#__PURE__*/React.createElement("div", {
    key: grp.name || "_",
    style: {
      marginBottom: 2
    }
  }, grp.name ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 10px 4px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--font-weight-semibold)",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--muted-foreground)"
    }
  }, grp.name) : null, grp.items.map(it => {
    const isActive = it._idx === active;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      "data-idx": it._idx,
      onMouseEnter: () => setActive(it._idx),
      onClick: () => choose(it),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "9px 10px",
        borderRadius: "var(--radius)",
        cursor: "pointer",
        background: isActive ? "var(--accent)" : "transparent",
        color: "var(--foreground)",
        transition: "background 100ms ease"
      }
    }, it.icon ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        color: "var(--muted-foreground)",
        flexShrink: 0
      }
    }, it.icon) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)"
      }
    }, it.label), it.shortcut ? /*#__PURE__*/React.createElement("kbd", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        color: "var(--muted-foreground)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-sm)",
        padding: "1px 6px",
        background: "var(--muted)"
      }
    }, it.shortcut) : null);
  })))));
  if (!overlay) return panel;
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpenChange && onOpenChange(false),
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      paddingTop: "14vh",
      background: "color-mix(in srgb, var(--slate-950) 45%, transparent)",
      backdropFilter: "blur(1px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "min(560px, 92vw)"
    }
  }, panel));
}
Object.assign(__ds_scope, { Command });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Command.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/** Kuat Pagination — page selector. Controlled via page/onChange (1-indexed). */
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style
}) {
  const go = p => {
    if (p >= 1 && p <= total && onChange) onChange(p);
  };
  const pages = [];
  const push = p => pages.push(p);
  if (total <= 7) {
    for (let i = 1; i <= total; i++) push(i);
  } else {
    push(1);
    if (page > 3) push("…");
    for (let i = Math.max(2, page - 1); i <= Math.min(total - 1, page + 1); i++) push(i);
    if (page < total - 2) push("…");
    push(total);
  }
  const cell = active => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 32,
    height: 32,
    padding: "0 6px",
    borderRadius: "var(--radius)",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    fontWeight: "var(--font-weight-medium)",
    border: `1px solid ${active ? "var(--primary)" : "var(--border)"}`,
    background: active ? "var(--primary)" : "var(--background)",
    color: active ? "var(--primary-foreground)" : "var(--foreground)"
  });
  const arrow = (dir, disabled) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    borderRadius: "var(--radius)",
    border: "1px solid var(--border)",
    background: "var(--background)",
    cursor: disabled ? "not-allowed" : "pointer",
    color: disabled ? "var(--slate-300)" : "var(--foreground)"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: arrow("prev", page <= 1),
    onClick: () => go(page - 1),
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }))), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: "e" + i,
    style: {
      minWidth: 24,
      textAlign: "center",
      color: "var(--muted-foreground)"
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    style: cell(p === page),
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    style: arrow("next", page >= total),
    onClick: () => go(page + 1),
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Kuat Tabs — underline tab bar. items: [{ value, label, count }].
 */
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1px solid var(--border)",
      ...style
    }
  }, items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      onClick: () => onChange && onChange(it.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "10px 12px",
        marginBottom: -1,
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--font-weight-medium)",
        color: active ? "var(--primary)" : "var(--muted-foreground)",
        borderBottom: `2px solid ${active ? "var(--primary)" : "transparent"}`,
        transition: "color 120ms ease, border-color 120ms ease"
      }
    }, it.label, it.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 18,
        height: 18,
        padding: "0 5px",
        borderRadius: "var(--radius-full)",
        background: active ? "var(--ee-blue-100)" : "var(--slate-100)",
        color: active ? "var(--ee-blue-700)" : "var(--slate-600)",
        fontSize: 11,
        fontWeight: 600
      }
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Accordion.jsx
try { (() => {
/**
 * Kuat Accordion — collapsible sections. items: [{ value, title, content }].
 * Single-open by default; pass multiple to allow several open.
 */
function Accordion({
  items = [],
  multiple = false,
  defaultOpen = [],
  style
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = v => {
    setOpen(prev => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(v)) next.delete(v);else next.add(v);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border)",
      ...style
    }
  }, items.map(it => {
    const isOpen = open.has(it.value);
    return /*#__PURE__*/React.createElement("div", {
      key: it.value,
      style: {
        borderBottom: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(it.value),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        width: "100%",
        padding: "14px 4px",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-base)",
        fontWeight: "var(--font-weight-medium)",
        color: "var(--foreground)",
        textAlign: "left"
      }
    }, it.title, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--muted-foreground)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform 160ms ease",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    }))), isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 4px 16px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-sm)",
        lineHeight: 1.55,
        color: "var(--muted-foreground)"
      }
    }, it.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
/**
 * Kuat Dialog — modal overlay. Controlled via open/onClose.
 */
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  width = 460,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      background: "color-mix(in srgb, var(--slate-900) 55%, transparent)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--background)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-2xl)",
      border: "1px solid var(--border)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 22px 0",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-h4)",
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--foreground)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--muted-foreground)",
      marginTop: 4,
      lineHeight: 1.5
    }
  }, description) : null), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--muted-foreground)",
      padding: 4,
      display: "inline-flex",
      marginRight: -4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 22px 0",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      color: "var(--foreground)"
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      padding: 22
    }
  }, footer) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 22
    }
  })));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Separator.jsx
try { (() => {
/** Kuat Separator — hairline divider, horizontal or vertical, optional label. */
function Separator({
  orientation = "horizontal",
  label,
  style
}) {
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        background: "var(--border)",
        ...style
      }
    });
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-xs)",
        color: "var(--muted-foreground)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-wide)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: 1,
      background: "var(--border)",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Separator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/delivery-hub/Dashboard.jsx
try { (() => {
// Delivery Hub — dashboard screen: KPI cards, delivery health, projects table.
const {
  Card,
  Badge,
  Progress,
  RadialProgress,
  Avatar,
  AvatarStack,
  Button,
  Tabs,
  Separator
} = window.KuatDesignSystem_d9a28b;
function Kpi({
  label,
  value,
  trend,
  dir,
  icon
}) {
  const up = dir === "up";
  const flat = dir === "flat";
  const trendColor = flat ? "var(--muted-foreground)" : up ? "var(--green-600)" : "var(--destructive)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--muted-foreground)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16,
      color: "var(--ee-blue-500)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: "100%",
      height: "100%"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--foreground)",
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: trendColor
    }
  }, !flat ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": up ? "trending-up" : "trending-down",
    style: {
      width: "100%",
      height: "100%"
    }
  })) : null, trend));
}
const PROJECTS = [{
  name: "Atlas Migration",
  client: "Northwind",
  status: "On track",
  tone: "success",
  progress: 78,
  team: [{
    initials: "AK"
  }, {
    initials: "JM"
  }, {
    initials: "RS"
  }]
}, {
  name: "Payments Platform",
  client: "Meridian Bank",
  status: "At risk",
  tone: "warning",
  progress: 41,
  team: [{
    initials: "TP"
  }, {
    initials: "VC"
  }]
}, {
  name: "Data Mesh",
  client: "Helios",
  status: "On track",
  tone: "success",
  progress: 63,
  team: [{
    initials: "LМ"
  }, {
    initials: "AK"
  }, {
    initials: "BN"
  }, {
    initials: "QR"
  }]
}, {
  name: "Mobile Rebuild",
  client: "Cobalt",
  status: "Blocked",
  tone: "destructive",
  progress: 22,
  team: [{
    initials: "JM"
  }, {
    initials: "RS"
  }]
}];
function ProjectsTable() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--foreground)"
    }
  }, "Active projects"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost-muted"
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1.4fr 1fr",
      padding: "0 18px 8px",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: "var(--muted-foreground)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Project"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", null, "Progress"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: "right"
    }
  }, "Team")), PROJECTS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1.4fr 1fr",
      alignItems: "center",
      padding: "12px 18px",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--foreground)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--muted-foreground)"
    }
  }, p.client)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    skin: p.tone,
    variant: p.tone === "success" ? "secondary" : "outline"
  }, p.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 120
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: p.progress,
    skin: p.tone === "destructive" ? "equal-ember" : "ee-blue"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--muted-foreground)",
      width: 30
    }
  }, p.progress, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(AvatarStack, {
    avatars: p.team,
    size: "sm",
    max: 3
  })))));
}
function Dashboard() {
  const [tab, setTab] = React.useState("week");
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Kpi, {
    label: "Active projects",
    value: "18",
    trend: "+2 this month",
    dir: "up",
    icon: "folder-kanban"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Billable hours",
    value: "1,284",
    trend: "+8% vs last week",
    dir: "up",
    icon: "clock"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Utilisation",
    value: "86%",
    trend: "No change",
    dir: "flat",
    icon: "gauge"
  }), /*#__PURE__*/React.createElement(Kpi, {
    label: "Approvals pending",
    value: "3",
    trend: "-5 since Monday",
    dir: "down",
    icon: "circle-check-big"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.7fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(ProjectsTable, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-xl)",
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--foreground)"
    }
  }, "Delivery health"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(RadialProgress, {
    value: 86,
    size: "medium"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--muted-foreground)"
    }
  }, "Utilisation")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(RadialProgress, {
    value: 64,
    size: "medium",
    skin: "transform-teal"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--muted-foreground)"
    }
  }, "On budget"))), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "week",
      label: "This week"
    }, {
      value: "month",
      label: "Month"
    }, {
      value: "qtr",
      label: "Quarter"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, [["Atlas Migration", 92], ["Data Mesh", 74], ["Payments Platform", 58]].map(([n, v]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-sans)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--foreground)"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted-foreground)"
    }
  }, v, "%")), /*#__PURE__*/React.createElement(Progress, {
    value: v,
    skin: "ee-blue",
    height: 6
  })))))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/delivery-hub/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/delivery-hub/Sidebar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Delivery Hub — sidebar navigation (tech-blue chrome per EE product rules).
const {
  LogoLockup,
  Avatar
} = window.KuatDesignSystem_d9a28b;
function NavItem({
  icon,
  label,
  active,
  badge,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      padding: "9px 12px",
      borderRadius: "var(--radius-md)",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: active ? "var(--font-weight-semibold)" : "var(--font-weight-medium)",
      color: active ? "var(--brand-byte-white)" : "rgba(255,255,255,0.72)",
      background: active ? "var(--sidebar-primary)" : hover ? "rgba(255,255,255,0.08)" : "transparent",
      transition: "background 120ms ease, color 120ms ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 18,
      height: 18,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: "100%",
      height: "100%"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), badge != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      borderRadius: "var(--radius-full)",
      background: "var(--equal-ember-500)",
      color: "#fff",
      fontSize: 11,
      fontWeight: 600
    }
  }, badge) : null);
}
function Sidebar({
  active,
  onNavigate
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const items = [{
    id: "dashboard",
    icon: "layout-dashboard",
    label: "Dashboard"
  }, {
    id: "projects",
    icon: "folder-kanban",
    label: "Projects"
  }, {
    id: "timesheets",
    icon: "clock",
    label: "Timesheets"
  }, {
    id: "approvals",
    icon: "circle-check-big",
    label: "Approvals",
    badge: 3
  }, {
    id: "reports",
    icon: "chart-line",
    label: "Reports"
  }, {
    id: "team",
    icon: "users",
    label: "Team"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      background: "var(--sidebar)",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 18px 16px"
    }
  }, /*#__PURE__*/React.createElement(LogoLockup, {
    product: "Delivery Hub",
    tone: "white",
    height: 24
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "4px 12px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.4)",
      padding: "8px 12px 4px"
    }
  }, "Workspace"), items.map(it => /*#__PURE__*/React.createElement(NavItem, _extends({
    key: it.id
  }, it, {
    active: active === it.id,
    onClick: () => onNavigate(it.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.12)",
      padding: "12px 14px",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "AK",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "#fff"
    }
  }, "Anya Kapoor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      color: "rgba(255,255,255,0.55)"
    }
  }, "Delivery Lead")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 16,
      height: 16,
      color: "rgba(255,255,255,0.55)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevrons-up-down",
    style: {
      width: "100%",
      height: "100%"
    }
  }))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/delivery-hub/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ButtonGroup = __ds_scope.ButtonGroup;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.LinkButton = __ds_scope.LinkButton;

__ds_ns.ContentCard = __ds_scope.ContentCard;

__ds_ns.KuatHeader = __ds_scope.KuatHeader;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.LogoLockup = __ds_scope.LogoLockup;

__ds_ns.RadialProgress = __ds_scope.RadialProgress;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Chart = __ds_scope.Chart;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Command = __ds_scope.Command;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Separator = __ds_scope.Separator;

})();
