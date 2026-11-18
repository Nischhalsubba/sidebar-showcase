# Reproducible dependency installation and CI recovery

## Observed problem

The sidebar showcase is maintained under **app/**. On 18 November 2026, the pull-request **build** job failed during installation, before the Vite compilation step. The error from **npm ci** was:

> Invalid: lock file's vite@6.3.5 does not satisfy vite@6.4.1

The checked-in **app/package.json** declares Vite **6.4.1** while **app/package-lock.json** records Vite **6.3.5** for the root dependency. The lockfile also carries a previous root package name. These are reproducibility problems independent of the documentation change that exposed them.

CI reference: https://github.com/Nischhalsubba/sidebar-showcase/actions/runs/44219937736/job/134519014952

## Release principle

Do not weaken a clean-install gate, silence npm errors, or downgrade Vite merely to make a documentation PR appear green. A package/lockfile repair deserves a separately reviewed dependency change and a working full install. The dependency tree may have further incompatibilities or advisories that require investigation.

## Maintainer remediation checklist

1. Select the authoritative package manager. The application declares **pnpm@9.15.0** in its package metadata, but the repository also commits **package-lock.json** and its CI uses **npm ci**. Standardize on one supported lockfile and matching CI installer.
2. If using npm, with Node.js 22 or newer and an approved network/registry, regenerate a lockfile using the exact current package manifest:

~~~bash
cd app
npm install --package-lock-only --ignore-scripts --no-audit
npm ci
npm run check
~~~

3. Review the generated lockfile diff. Confirm the root package identity, manifest compatibility, Vite version and resolved transitive packages rather than accepting unexplained lockfile churn.
4. Run an appropriate dependency security audit and review any reported advisories. An install passing is not proof the dependencies are vulnerability-free.
5. If the team chooses pnpm instead, generate and commit a compatible **pnpm-lock.yaml** and update the CI install command in the same focused PR. Do not keep two authoritative lockfiles with contradictory resolution.
6. Repeat the exact GitHub Actions build on the PR head and retain the successful job URL in its description.

## Risk and verification record

Record the Node/npm or pnpm versions, registry used, install and build results, any dependency version changes, advisory impact, generated files and rollback path. If the build cannot be reproduced because access to a registry is blocked, leave the task explicitly unresolved; do not invent a passing test result.

## Intended separation from the sidebar QA guide

[SIDEBAR_STATE_AND_ACCESSIBILITY_MATRIX.md](./SIDEBAR_STATE_AND_ACCESSIBILITY_MATRIX.md) defines behavioral, keyboard and responsive acceptance. This document addresses **dependency reproducibility and the CI build gate**, which is a separate requirement.

## Recovery and rollback

A failed lockfile remediation should be reverted as a single focused package/lockfile/CI change. Preserve the previous lockfile for diagnostics and avoid forcing a partial dependency resolution into production.
