Status: draft

# Review: Add a section for contact details

Loop 0 of 2. Each reviewer's findings, verbatim. A reply without "Verdict: pass" counts as changes needed.

## Grumpy Reviewer

Verdict: pass

No P0 or P1 findings are open in the reviewed scope. The markup matches the design and the amended acceptance criteria. Three items below are worth fixing or confirming before merge, and the review leaves some checks unrun.

## Findings

**P2: Context line makes a WhatsApp claim the owner has not confirmed**
- Link: [index.html](index.html) lines 671–682, the context paragraph inside the Contact block.
- Flow: a public visitor reads the Contact section's context line.
- Trigger: the copy says "WhatsApp messages may wait until the next working day." The only source for it is the designer's inference from the Slack, email and Teams statement in the page. The design (§5) flags this as an assumption to confirm. The spec does not contain this sentence, and the owner has not confirmed it.
- Consequence: the page makes a public statement about the owner's WhatsApp habits that may be wrong. That creates the expectation mismatch the brief warned about.
- Evidence: strongly supported by code and docs. The text is in the design §5 and the Build amendments; the spec's "as written" copy is only the Q2 phrase.
- Fix: get the owner to confirm the WhatsApp clause, or cut the sentence and keep "Calls are welcome during core hours (08:30–17:30 SAST), except over my lunch break." Regression: the owner-approved copy string is the only copy rendered.

**P2: Approved spec was amended during Build without a recorded gate re-approval**
- Link: [docs/specs/4-add-a-section-for-contact-details/spec.md](docs/specs/4-add-a-section-for-contact-details/spec.md), "Build amendments" section at the end of the file.
- Flow: spec governance. The Build stage rewrote AC2, AC3 and AC8, and moved WhatsApp from out of scope to in scope. The file still says `Status: approved`.
- Evidence: the amendments are recorded by the agent. The human's Q3 answer ("Whatsapp as well") supports the scope change, but the acceptance-criteria wording was changed and the plan (WI-0) said it needed re-approval at gate A. The human's "don't wait for me again" covers the copy, not the criteria changes. The date is also missing.
- Fix: have Foreman record the date and the human's confirmation of the amended AC2, AC3 and AC8 in `status.md`. Keep the spec status unchanged until that is done. No code change.

**P3: Accessible name drops the visible "Phone:" and "WhatsApp:" labels**
- Link: [index.html](index.html) the two `<a>` tags in lines 679–680.
- Evidence: the `aria-label` overrides the visible text. The names "Call +27 78 247 55 11" and "Message on WhatsApp, phone +27 78 247 55 11" still contain the visible number, so WCAG 2.5.3 label-in-name is satisfied. This is cosmetic.
- Fix: none required. Keep it as is.

## Checks and validation

- Read: [index.html](index.html) lines 655–700, the spec's gate-A answers and Build amendments, and a workspace search for contact-related strings.
- Found that the Contact block is present, with one `tel:+27782475511` and one `https://wa.me/27782475511` href. The visible text matches both sets of digits. The `<section>` count and card-pattern count match the design's expectations. Hex literals, scripts and `outline:none` are absent from the block, based on reading the block and a search.
- Not run: `run_command` was disabled for this run. `git diff` against `5f281d3778` was not run, so AC11 (no other hunks changed) and the AC12 diff-scope claim are unverified. The `build-checks.md` file is candid about this.
- Not run: AC14 console baseline (`baseline-console.md` records it as not captured). Browser checks for AC4, AC6, AC7, AC9 and AC10 are also not run. The screen-reader check for AC8 is not run.

## Unreviewed areas

- Rendering in light and dark themes, at 320, 768 and 1280 px, and in the fixed toggle overlap.
- Whether the rest of `index.html` is byte-identical to the base commit.

## Verdict

No blocking defects in reviewed scope. The copy claim and the spec-amendment record need owner and Foreman sign-off before merge. Production readiness is not claimed. The diff-scope and browser checks are unverified.

## Security Engineer

Verdict: pass

No P0 or P1 finding is open. The new block is static markup with no script, form, or third-party request, and the number is published with the owner's approval (Q1 "Personal"). The open items below are verification gaps and documentation issues, not exploitable defects. I ran no commands; my tools are read-only.

## Findings

**P2-1: Diff scope (AC11) is not verified.**
- Evidence: the supplied diff is truncated before any `index.html` hunk, and [build-checks.md](docs/specs/4-add-a-section-for-contact-details/build-checks.md) marks Check 4 (`git diff --numstat`) as NOT RUN. [index.html](index.html) lines 670–680 show the Contact block, but one read cannot show whether anything else changed (hero, version badge, "updated" date, Communication, or the `robots` meta tag).
- Fix: run `git diff --numstat 5f281d3778 -- index.html` and confirm zero deletions and hunks only inside the Contact block. Then re-run the substitute checks as real `grep` commands.

**P2-2: Contrast (AC6) is asserted, not measured.**
- Evidence: [design.md](docs/specs/4-add-a-section-for-contact-details/design.md) §6 gives approximate ratios (light about 5:1, dark about 7:1). [plan.md](docs/specs/4-add-a-section-for-contact-details/plan.md) §4 gives different light figures (about 4.9:1). Neither was measured on the rendered page, and the theme token values were not read.
- Fix: measure the link and body text in both themes with a contrast tool, using the computed colours from `:root` and `html[data-theme="dark"]`. Record the results in the Build report.

**P2-3: Console baseline (AC14) was never captured.**
- Evidence: [baseline-console.md](docs/specs/4-add-a-section-for-contact-details/baseline-console.md) says NOT CAPTURED. Without a baseline, "no new console errors" cannot be claimed.
- Fix: load the unmodified page and the changed page in a browser, record console and failed-request output, and compare.

**P3-4: Spec amendments were recorded without an explicit approval.**
- Evidence: [spec.md](docs/specs/4-add-a-section-for-contact-details/spec.md) "Build amendments" changes AC2, AC3, and AC8 and the scope, but the date is blank and the file still says `Status: approved`. The approval basis cites the human's copy confirmation and "don't wait", which covers the copy and the heading but not the AC wording changes explicitly.
- Fix: have Foreman record the date and the human's acknowledgement of C2–C4 in `status.md`.

**P3-5: Privacy note on the published number.**
- Evidence: the number is in [index.html](index.html) lines 679–680. The page is `noindex` but publicly reachable (per the spec). Removing the block later does not remove the number from git history or from caches and copies.
- Fix: no code change needed. Tell the owner that removal does not undo prior exposure, and that a dedicated business line would limit the impact. POPIA is not assessed here, as the spec states.

**P3-6: WhatsApp availability clause is an assumption the owner has not separately confirmed.**
- Evidence: [index.html](index.html) line 675 says WhatsApp messages "may wait until the next working day". [design.md](docs/specs/4-add-a-section-for-contact-details/design.md) §5 flags this as an assumption. The human approved the copy as written, so this is accepted.
- Fix: none required. Note it for the owner to revisit if the WhatsApp habits differ.

## Checked and no issue found
- The `tel:` href is `+27782475511` and the `wa.me` href is `27782475511`. Both match the visible digits.
- The links have no `target="_blank"`, so there is no reverse-tabnabbing risk.
- No `outline:none`, no script, and no new third-party request appear in the Contact block.
- The aria-labels contain "Call" and "phone", and they include the visible number, which satisfies label-in-name.
- The `noindex` meta tag and the title are not altered by the new block.

## Scope and validation
- Reviewed: the Contact block in [index.html](index.html), the spec, design, plan, build-checks, baseline-console, and the spec's Build amendments.
- Not reviewed: the full `index.html` diff (truncated); rendered contrast, focus, and viewport behaviour; AT names; device dialler behaviour.
- Commands run: none. Checks in [build-checks.md](docs/specs/4-add-a-section-for-contact-details/build-checks.md) were substitute `search` results, and the git-based checks were not run.
- Line numbers: the `search` tool placed the tel and wa.me lines at 679 and 680, and my own count of the same read was two lower. Confirm exact positions with the `git diff` output.
