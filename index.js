export function activate(api) {
  api.registerTheme({
    id: "theme-catppuccin-latte.theme",
    name: "catppuccin-latte",
    colorscheme: "light",
    vars: {
      "--color-surface-0": "#eff1f5", // base
      "--color-surface-1": "#e6e9ef", // mantle
      "--color-surface-2": "#dce0e8", // crust
      "--color-surface-3": "#ccd0da", // surface 0
      "--color-surface-4": "#dce0e8", // crust

      "--color-border": "#ccd0da", // surface 0
      "--color-border-subtle": "#bcc0cc", // surface 1

      "--color-text-primary": "#4c4f69", // text
      "--color-text-secondary": "#5c5f77", // subtext 1
      "--color-text-muted": "#6c6f85", // subtext 0

      "--color-accent": "#8839ef", // mauve
      "--color-accent-hover": "#ccd0da", // surface 0
      "--color-slider-fill": "#8839ef", // mauve

      // Ratings
      "--color-rating": "#df8e1d", // yellow
      "--color-flag-pick": "#4c4f69", // text
      "--color-flag-reject": "#d20f39", // red

      "--color-label-red": "#d20f39", // red
      "--color-label-yellow": "#df8e1d", // yellow
      "--color-label-green": "#40a02b", // green
      "--color-label-blue": "#1e66f5", // blue
      "--color-label-purple": "#8839ef", // mauve
    },
  });
}
