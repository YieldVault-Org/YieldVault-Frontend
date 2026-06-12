# Changelog

All notable changes to the YieldVault frontend are documented here. This
project follows [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Reusable UI components: `Tag`, `ProgressBar`, `CopyButton`, `Alert`,
  `Modal`, `Tooltip`, `Avatar`, `StatGrid`, `Pagination` and `ThemeToggle`.
- Hooks: `useToggle`, `usePrevious`, `useInterval`, `useOnClickOutside`,
  `useWindowSize` and `useKeyPress`.
- Formatting helpers for APY, projected yield and signed amounts.
- Validators for Stellar addresses and percentage ranges.
- Vault metadata and risk-tier constants under `src/constants/vaults.js`.
- Opt-in light theme via a persisted `data-theme` attribute.

## [0.1.0]

### Added

- Initial React + Vite frontend with routing, mock services and core pages
  (Home, Dashboard, VaultDetail, Positions).
