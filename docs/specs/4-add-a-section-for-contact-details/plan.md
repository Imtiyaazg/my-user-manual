Status: draft

# Plan: Add a section for contact details

Run: 4-add-a-section-for-contact-details
Stage: Plan
Sources: `spec.md` (Status: approved, with "Answers at gate A"), `design.md` (Status: draft), `index.html` at base commit `5f281d3778`
Test allocation: SDET (read-only pass, reviewed by Foreman)

## 1. Summary

The change adds one read-only "Contact" section to `index.html`, placed after "What you can expect from me" and before the two-column grid. It shows `+27 78 247 55 11` as a `tel:+27782475511` link and a `https://wa.me/27782475511` link. The owner's gate A answers are applied as follows:

- Q1 is yes (personal number, public display approved).
- Q2 sets the tone: "calls welcome during core hours". The exact wording is still unapproved (see Section 6).
- Q3 is yes, so WhatsApp is in scope. This overrides spec §6 (see C1).
- Q4 is no, so the hero, version badge, and "updated" date do not change.
- Q5: no required pack or handoff contract applies.
- Q6 is no edit to the Communication section.

Legal and POPIA questions are not assessed here. The spec's qualified-review note still applies before publication.

## 2. Repo facts used for the plan

- `AGENTS.md`, `.github/factory/pack.md`, and `.github/factory/handoffs.md` are not installed. No pack gates, roster, or high-risk reviewer table exist. Gates in Section 5 are therefore the spec's manual and grep checks.
- There is no test suite, build, or lint config. The "All tests passing" console line is decorative and is not evidence.
- The page is one static file with inline styles. No new files, dependencies, scripts, or server entry points are needed. Design §3 applies.

## 3. Work items

Each work item has one owner and a done criterion. Items run in dependency order. Only WI-2 touches `index.html`, so no parallel build is needed.

| ID | Work item | Owner | Depends on | Done criterion |
|---|---|---|---|---|
| WI-0 | Amend the spec: record that WhatsApp is in scope (C1), replace AC2 with the design's two-link wording (C2), replace AC3 so it covers both link forms (C3), and set the AC8 and S5 wording (C4). Re-approve at gate A. | Senior Business Analyst | Human gate A re-check | `spec.md` shows the amendments with `Status: approved` again, and the human has confirmed them. |
| WI-1 | Owner confirms copy: heading (C9), context line and WhatsApp clause (C5), and the breakfast-versus-offline wording (C6). Confirm Q6 reading (C8). Foreman records the answers and dates in `status.md`. | Owner (human), recorded by Foreman | none | `status.md` holds the approved heading and context line, and the Q6 reading is confirmed. |
| WI-2 | Insert the Contact `<section>` into `index.html` using the design §4 markup, with the approved copy and the AC8 label from WI-0. Change nothing else. | UX/UI Designer | WI-0, WI-1, design approved (C10) | The diff adds only the new block. The checks in WI-3 pass. |
| WI-3 | Run the automatable checks in Section 5 on the built file and record each command and result. Confirm the diff hunks touch only the new block. | SDET | WI-2 | All automatable checks in Section 5 pass. Results are recorded in the Build report. |

Design §4 and §10 require one amendment before WI-2. The WhatsApp `aria-label` as written, "Message on WhatsApp, +27 78 247 55 11", does not contain "call" or "phone", so it fails AC8 (C4). The recommended label is "Message on WhatsApp, phone +27 78 247 55 11". This keeps AC8 as approved. The owner or Spec Review may choose another label, but it must include "call" or "phone".

## 4. Test allocation

Scenario mapping (S = scenario, from spec §7):

| ID | Work item | Layer | Procedure | Expected result | Verifier |
|---|---|---|---|---|---|
| S1 | WI-2, WI-3 | Manual device; static grep | Tap the phone link on iOS or Android, then cancel the dialer. Do not place a call. | Dialer opens with `+27782475511` pre-filled. Page does not navigate. | Owner or tester with a phone |
| S2 | WI-2 | Manual desktop | Read the section and click the phone link once. | Visible text is `+27 78 247 55 11` on one line. Click is harmless. | Reviewer |
| S3 | WI-2 | Manual copy review; grep | Read the context line. Grep the new block for `available\|reachable\|anytime\|any time\|24`. | No availability promise beyond 08:30–17:30 SAST. No matches. | Reviewer; owner signs off copy |
| S4 | WI-2 | Manual keyboard; grep | Tab to both links, press Enter on each. Grep the new block for `outline:\s*none`. | Visible focus ring on each. Enter activates. No matches. | Reviewer |
| S5 | WI-2 | Assistive technology (VoiceOver or NVDA) | Navigate by heading, then to each link. | Section announced as "Contact". Names contain "call" or "phone" (WI-0 wording). | Tester with AT |
| S6 | WI-2 | Contrast tool; manual theme toggle | Toggle the theme button and check the OS dark setting. Measure link and text colours. Grep the block for hex literals. | Text and link meet 4.5:1 in both themes. Card matches siblings. No hex literals. | Reviewer |
| S7 | WI-2 | Manual devtools at 320 px, scrolled | Set 320 px. Check `document.documentElement.scrollWidth === window.innerWidth`. Scroll the section under the fixed bottom-right toggle. | No horizontal scroll. Number readable. Toggle does not cover text (C7). | Reviewer |
| S8 | — | Git diff (not triggered while Q1 is yes) | If the owner withdraws, run `git diff 5f281d3778 -- index.html`. | Only the Contact block is removed. | Foreman at review |

Acceptance criteria mapping (AC, with the amendments from WI-0 applied):

| AC | Work item | Layer | Procedure | Expected result | Automatable |
|---|---|---|---|---|---|
| AC1 | WI-2 | Grep; manual render | `grep -c '<section' index.html` (baseline 5, expected 6). Heading renders. | One new section with heading and number. | Partly |
| AC2 (amended) | WI-3 | Grep | `grep -o 'href="tel:[^"]*"'` and `grep -o 'https://wa\.me/[^"]*'`. Count `<a ` before and after. | Exactly one `tel:+27782475511` and one `https://wa.me/27782475511`. `<a ` count up by 2. | Yes |
| AC3 (amended) | WI-3 | Grep | Strip spaces from visible text and compare digits to each href. | `tel:` href has `+27782475511`. `wa.me` href has `27782475511`. Both match the visible digits. | Yes |
| AC4 | Owner | Manual device and desktop | Tap the call link (cancel dialer). Tap the WhatsApp link (open chat, do not send). Click each on desktop. | Dialer pre-filled. WhatsApp opens. Desktop behaves gracefully. | No |
| AC5 | Owner | Manual copy review | Compare rendered context line with the approved text (WI-1). Run S3 grep. | Matches approved text. No availability or lunch-call promise. | No; needs WI-1 |
| AC6 | Reviewer | Contrast tool | Measure link and body text in both themes. Hand-calc (not verified): light `#1378AE` on white ≈ 4.9:1; dark `#7FB3E0` on `#1A242E` ≈ 7.1:1. | ≥ 4.5:1 for text and link in both themes. | Tool-assisted |
| AC7 | Reviewer | Manual keyboard; grep | As S4. | Focus ring visible on both links. | Partly |
| AC8 (amended, WI-0) | Tester with AT | Assistive technology; grep | `grep -n 'aria-label' index.html` in the new block. Check names with VoiceOver or NVDA. | Both names contain "call" or "phone". | Partly |
| AC9 | Reviewer | Manual devtools at 320, 768, 1280 px | `scrollWidth === innerWidth` and visual check for clipping. | No horizontal scroll, no clipping. | No |
| AC10 | Reviewer | Grep; side-by-side | `grep -c 'padding:30px 32px; box-shadow:var(--shadow-xs); display:flex; flex-direction:column; gap:18px' index.html`. Baseline 3, expected 4. | Visually matches siblings in both themes. | Partly |
| AC11 | SDET | Git diff | `git diff --numstat 5f281d3778 -- index.html`, then `git diff 5f281d3778 -- index.html`. | Additions only, zero deletions. Hunks inside the new block only. | Yes |
| AC12 | SDET | Git diff; grep on added lines | `git diff 5f281d3778 -- index.html \| grep '^+' \| grep -iE '<script\|fetch\|analytics\|src='`. | No matches. The `wa.me` href is navigation only. | Yes |
| AC13 | SDET | Grep | `grep -nE '78 ?247 ?55 ?11\|782475511' index.html`. Check that no match is in `<head>`, `<title>`, or `og:*`. `<meta name="robots">` unchanged. | Matches only inside the new section. | Yes |
| AC14 | Reviewer | Devtools console | Record console messages before and after the change. CDN or font failures present at baseline are excluded. | No new errors. | No; needs baseline capture |

## 5. Gates (Build and Review)

Foreman runs these at stage 8 and records each command and outcome in `status.md`. Because no pack is installed, these are the only gates.

1. WI-3 grep and git-diff checks: AC2, AC3, AC11, AC12, AC13, and the AC1 and AC10 counts.
2. Manual checks by the Reviewer at stage 9: S2, S3, S4, S6, S7, AC6, AC7, AC9, AC10 visual, AC14.
3. Manual checks by the owner: S1 and AC4 (device), AC5 (copy approval).
4. Assistive-technology check: S5 and AC8.
5. Baseline capture before WI-2 for AC14: record console messages on the unmodified page.

Stage 9 reviewers: the pack's high-risk table is absent, so the reviewer set is not defined by a pack. Foreman recommends an accessibility reviewer (AC6–AC8, AC9) and a privacy-minded reviewer for AC12 and AC13, because the number is personal data being published. Foreman will confirm the set with the human at gate B.

## 6. Open items and contradictions

These are recorded for Spec Review and Build. The first three block Build.

- **C5 (blocking):** Owner approved only the phrase "calls welcome during core hours". The heading and full context line, including the claim that WhatsApp "may wait until the next working day", were written by the designer and are unconfirmed. AC5 cannot pass until WI-1 is done.
- **C9 (blocking):** Heading "Contact" is a default. Owner to confirm.
- **C4 (blocking):** AC8 as written is not met by the WhatsApp label in design §4. Resolved by the WI-0 wording or the label change in Section 3.
- **C1:** Spec §6 still lists WhatsApp as out of scope. Overridden by Q3 gate answer. WI-0 amends it.
- **C2, C3:** Spec AC2 ("exactly one `<a>`") and AC3 (`+` in every href) do not fit the two-link design. WI-0 amends them.
- **C6:** Design says "I'm offline outside those hours". The page says the owner is "catching up on messages over breakfast" from 08:30, which is inside core hours. Minor, but owner decides.
- **C7:** Design §8 says the fixed toggle will not overlap because of padding. That is not sound for a fixed element over scrolling content. S7 now requires a scrolled check.
- **C8:** Q6 answer is truncated ("No leave as iss"). Read as no edit to Communication. Owner to confirm.
- **C10:** `design.md` is `Status: draft`. Build should not start until it is approved.
- **C11:** AC14 needs a pre-change console baseline.
- **C12:** POPIA or similar review is not assessed. Required before publication only if the number is third-party personal data or the owner is in a regulated context. This is for qualified review.

Plan approval: not yet. Build may start after WI-0, WI-1, and the design approval (C10) are recorded in `status.md`.
