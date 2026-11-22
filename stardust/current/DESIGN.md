---
name: IF-Hub (DSGV Markenportal der Sparkasse)
description: Internal brand and knowledge hub for Sparkasse Internet-Filiale editors and agencies
colors:
  sparkasse-red: "#ee0000"
  sparkasse-red-hover: "#d10000"
  white: "#ffffff"
  ink: "#292929"
  grey-dark: "#565656"
  grey-light: "#e3e3e3"
  ink-deep: "#111110"
  black: "#000000"
typography:
  display:
    fontFamily: "Sparkasse Regular, sans-serif"
    fontSize: "54px"
    fontWeight: 400
  h1:
    fontFamily: "Sparkasse_Rg, sans-serif"
    fontSize: "38px"
    fontWeight: 700
  h2:
    fontFamily: "Sparkasse Regular, sans-serif"
    fontSize: "28px"
    fontWeight: 400
  h3:
    fontFamily: "Sparkasse Regular, sans-serif"
    fontSize: "24px"
    fontWeight: 400
  body:
    fontFamily: "Sparkasse Light, sans-serif"
    fontSize: "20px"
    fontWeight: 300
  button:
    fontFamily: "Sparkasse Regular, sans-serif"
    fontSize: "16px"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "10px"
  lg: "30px"
  pill: "99px"
components:
  button-primary:
    backgroundColor: "{colors.sparkasse-red}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    typography: "{typography.button}"
  button-primary-hover:
    backgroundColor: "{colors.sparkasse-red-hover}"
  button-secondary:
    backgroundColor: "{colors.grey-dark}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
  header-bar:
    backgroundColor: "{colors.sparkasse-red}"
    textColor: "{colors.white}"
---
<!-- stardust:provenance writtenBy: stardust:extract · writtenAt: 2026-11-21T00:16:58Z · mode: descriptive · sources: _computed-styles.json, _brand-extraction.json -->

## Overview

The current IF-Hub is a Frontify-hosted portal in the Sparkasse corporate design: a red header bar, a full-bleed looping video hero with a large white headline, generous white space, image tiles with pill-shaped "Weiter" buttons, and corporate Sparkasse typefaces. The entry URL shows a split-screen login (white panel with the S logo and a red SSO pill on the left, a photograph on the right).

## Colors

Sparkasse red #ee0000 carries the header and primary actions (hover #d10000). Text is near-black #292929 on white; #565656 is used for secondary buttons and borders; #e3e3e3 for light dividers.

## Typography

Corporate Sparkasse faces (proprietary, self-hosted from the captured files): Sparkasse Regular for headings and buttons, Sparkasse Light for body text (20px), Sparkasse Medium for emphasis; the login page uses Sparkasse_Rg. Sizes are ad hoc: 54 / 38 / 28 / 24 / 20 / 16 / 14 px.

## Layout

Hub: fluid full-width sections (no shell cap measured); hero spans the viewport; tile grids below. Login: two equal halves, the form content capped at 370px.

## Shapes

Pill radius (99px) on all buttons; small radii (4–10px) on inputs and media; no shadows or gradients.

## Components

- Header bar: red, S logo left, four nav links and a search icon.
- Video hero: background mp4 with white headline (54px) and lede.
- Teaser tile: image, h3, short text, "Weiter" pill.
- Service card: image, h3, two-line text, "… besuchen" pill.
- Login panel: logo, h1 "Herzlich willkommen im IF- Hub", label, red SSO pill, "Zugang beantragen" link.

## Do's and Don'ts

- Do keep the Sparkasse red reserved for header and primary actions.
- Don't add shadows, gradients or new colors.
