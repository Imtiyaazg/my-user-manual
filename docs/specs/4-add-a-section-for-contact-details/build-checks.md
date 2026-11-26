# Build checks (WI-3): 4-add-a-section-for-contact-details

Stage: Build, WI-3. Target: `index.html` as built by WI-2. No product file was edited.
Date: not recorded (no clock access in this run).

## Execution environment and limits

- `run_command` refused every call in this run. The allowed list is empty (`Allowed: none`). Shell and git commands therefore did not run.
- Content checks were run with the `search` tool instead (case-insensitive regex over the workspace). These are substitutes for the grep commands in the plan, not the commands themselves.
- The `git diff` checks cannot be substituted with `search`. They are marked **NOT RUN**.
- Search hits in `docs/` are omitted below unless they bear on a result. The new Contact block is at `index.html` lines 671–682 (comment to `</section>`, confirmed by `read_file`).
- Line numbers below come from `search` and `read_file`.

## Result summary

| # | Check | Outcome |
|---|---|---|
| 1 | AC2: exactly one tel: and one wa.me href | PASS (substitute: search) |
| 2 | AC3: visible digits match both hrefs | PASS (manual read) |
| 3 | AC1 and AC10: section count and card-pattern count | PASS (substitute: search) |
| 4 | AC11: `git diff --numstat` and `git diff` | NOT RUN (run_command refused) |
| 5 | AC12: script, fetch, analytics, src= in added lines | PASS for the new block (substitute: search). Diff-scope claim NOT RUN. |
| 6 | AC13: number appears only in new section | PASS (substitute: search) |
| 7 | AC8 (grep part): aria-labels contain call or phone | PASS (manual read) |
| 8 | outline:none and target= | PASS (substitute: search) |
| 9 | Hex literals in the new block | PASS (manual read of lines 671–682) |
| 10 | Availability or "24" wording in the new block | PASS for wording. The "24" hits are phone digits (false positives). |

No check failed.

---

## Check 1 (AC2): tel: and wa.me hrefs

Command as specified: `grep -o 'href="tel:[^"]*"' index.html` and `grep -o 'href="https://wa.me/[^"]*"' index.html`
Outcome: **NOT RUN** (run_command refused: `"grep -o href="tel:[^"]*" index.html" is not allowed in this run. Allowed: none`). The same refusal applied to the wa.me command.

Substitute: `search` for `href="tel:`
```
index.html:679: <li style="display:flex; gap:12px; font-size:16px; line-height:1.55;"><span aria-hidden="true" style="flex:none; width:7px; height:7px; border-radius:50%; background:var(--ee-blue-500); margin-top:9px
```
(The line is truncated in the tool output. The full line contains `<a href="tel:+27782475511" aria-label="Call +27 78 247 55 11" …>`, confirmed by `read_file` lines 671–682.)

Substitute: `search` for `href="https://wa\.me/`
```
index.html:680: <li style="display:flex; gap:12px; font-size:16px; line-height:1.55;"><span aria-hidden="true" style="flex:none; width:7px; height:7px; border-radius:50%; background:var(--ee-blue-500); margin-top:9px
```
(Full line contains `<a href="https://wa.me/27782475511" aria-label="Message on WhatsApp, phone +27 78 247 55 11" …>`.)

Result: exactly one `href="tel:` and exactly one `href="https://wa.me/` in `index.html`. Values: `tel:+27782475511` and `https://wa.me/27782475511`. **PASS** (substitute evidence; the `docs/` hits are spec and plan text, not product markup).

## Check 2 (AC3): visible digits match hrefs

Visible text (`read_file` lines 679–680): `+27 78 247 55 11` in both links.
Strip spaces: `+27782475511`.
- tel href `tel:+27782475511`: digits `27782475511` match. ✓
- wa.me href `https://wa.me/27782475511`: digits `27782475511` match. ✓

**PASS** (manual comparison of the `read_file` output).

## Check 3 (AC1 and AC10): section count and card-pattern count

Command as specified: `grep -c '<section' index.html` (baseline 5, expected 6) and the card-pattern count (baseline 3, expected 4).
Outcome: **NOT RUN** (run_command refused). The same refusal applied to the card-pattern command.

Substitute: `search` for `<section`, lines in `index.html`:
```
index.html:623: <section style="background:var(--card-bg, #fff); …
index.html:642: <section style="background:var(--card-bg, #fff); …
index.html:659: <section style="background:var(--card-bg, #fff); …
index.html:672: <section aria-labelledby="contact-heading" style="background:var(--card-bg, #fff); …
index.html:687: <section style="background:var(--card-bg, #fff); …
index.html:703: <section style="background:var(--card-bg, #fff); …
```
Count: 6 (expected 6). Baseline without line 672 is 5 (matches baseline).

Substitute: `search` for `padding:30px 32px; box-shadow:var\(--shadow-xs\); display:flex; flex-direction:column; gap:18px`, lines in `index.html`:
```
index.html:623: …
index.html:642: …
index.html:659: …
index.html:672: <section aria-labelledby="contact-heading" …
```
Count: 4 (expected 4). Lines 687 and 703 use `gap:16px`, so they are not counted. Baseline without line 672 is 3 (matches baseline).

**PASS** (substitute evidence).

## Check 4 (AC11): diff scope

Command as specified: `git diff --numstat 5f281d3778 -- index.html` and `git diff 5f281d3778 -- index.html`
Outcome: **NOT RUN** (run_command refused: `"git diff --numstat 5f281d3778 -- index.html" is not allowed in this run. Allowed: none`).

No substitute exists for this check. The following are NOT verified:
- zero deletions
- additions only
- every hunk inside the new `<!-- Contact -->` block (`index.html` lines 671–682)

What `read_file` does show: the Contact block is present and well-formed. The rest of the file has no change that could be seen from one read. Nothing in this run confirms what changed relative to `5f281d3778`.

**NOT RUN.** Needs a run with `git` permitted.

## Check 5 (AC12): no script, fetch, analytics, or src= in the new block

Command as specified: grep the added lines (`git diff … | grep '^+' | grep -iE '<script|fetch|analytics|src='`).
Outcome: the diff command was **NOT RUN**. Substitute: `search` for `script|fetch|analytics|src=` over the workspace. Hits in `index.html`:
```
index.html:607: <img id="avatarEgg" … src="data:image/jpeg;base64,…"   (pre-existing hero avatar)
index.html:637: … I take an hour to fetch my kid from school. …           (pre-existing text, "fetch" as a word)
index.html:719: <script src="https://unpkg.com/lucide@0.469.0"></script>   (pre-existing)
index.html:720: <script>                                                     (pre-existing)
index.html:725: <script>                                                     (pre-existing)
index.html:754: </script>                                                    (pre-existing)
```
None of these hits falls in lines 671–682. The new block contains no `<script`, `fetch`, `analytics`, or `src=`. The `wa.me` href is plain navigation and does not match these patterns.

**PASS for the new block** (substitute evidence). The claim that the change added no script lines is NOT RUN, because it depends on the diff.

## Check 6 (AC13): number only in the new section

Command as specified: `grep -nE '78 ?247 ?55 ?11|782475511' index.html`
Outcome: **NOT RUN** (run_command refused: `"grep -nE …" is not allowed`). Substitute: `search` for `78 ?247 ?55 ?11|782475511`. Hits in `index.html`:
```
index.html:679: … (contains tel:+27782475511 and visible "+27 78 247 55 11")
index.html:680: … (contains wa.me/27782475511 and visible "+27 78 247 55 11")
```
Both hits are inside the new block (lines 671–682). There are no hits in `<head>`, `<title>`, or the `og:*` meta tags. `<meta name="robots" content="noindex">` is unchanged.

**PASS** (substitute evidence).

## Check 7 (AC8, grep part): aria-labels

From `read_file` lines 679–680:
- `aria-label="Call +27 78 247 55 11"` contains "Call" (call, case-insensitive). ✓
- `aria-label="Message on WhatsApp, phone +27 78 247 55 11"` contains "phone". ✓

The accessible-name check with assistive technology is a separate, manual step, not done here.

**PASS** (grep part only).

## Check 8: outline:none and target=

Command as specified: grep `index.html` for `outline:\s*none` and `target=`.
Outcome: **NOT RUN** (run_command refused). Substitute: `search` for `outline:\s*none|target=`. Hits in `index.html`: **none**. The only hits were in `docs/specs/…/design.md` (spec text), which are not product markup.

**PASS** (substitute evidence).

## Check 9: hex literals in the new block

Command as specified: grep the new block for `#`.
Outcome: **NOT RUN** as a grep (run_command refused). The `search` for `#[0-9a-f]{3,6}\b` on the whole file returned many hits, mostly pre-existing `:root` and theme tokens, and the output was truncated before the Contact block was reached. That result is therefore inconclusive.

Manual read of `index.html` lines 671–682 (`read_file`): the block uses `var(--…)` tokens and plain values such as `14px` and `1.55`, with no hex colours and no `#` characters. ✓

**PASS for the new block** (manual read). Method: read, not grep.

## Check 10: availability or "24" wording in the new block

Command as specified: grep the new block for `available|reachable|anytime|any time|24`.
Outcome: **NOT RUN** as a grep (run_command refused). Substitute: `search` for `available|reachable|anytime|any time|24`. Hits inside lines 671–682:
```
index.html:679: … <a href="tel:+27782475511" … >+27 78 247 55 11</a> …
index.html:680: … <a href="https://wa.me/27782475511" … >+27 78 247 55 11</a> …
```
Both hits match "24" inside the phone digits (`…82475…`, `…247…`). They are false positives. No availability promise appears. The context line (lines 674 and 676) reads: "Calls are welcome during core hours (08:30 – 17:30 SAST), except over my lunch break. I'm offline outside those hours, so WhatsApp messages may wait until the next working day." It contains none of `available`, `reachable`, `anytime`, or `any time`.

**PASS** for wording (substitute evidence). The "24" pattern is noisy when it matches digits, so a narrower check would be better in a later run.

---

## Observations (not failures)

- Check 9 used a manual read because the hex search output was truncated.
- Several AC checks still need a run with `run_command` permitted: checks 1 (tel and wa.me counts with `grep -o`), 3, 4, 5 (diff), and 6 (exact commands).
- Manual checks not in this file (owner or reviewer): AC4 device test, AC5 copy approval, AC6 contrast, AC7 focus, AC9 widths, AC14 console baseline, and the screen-reader check for AC8.
