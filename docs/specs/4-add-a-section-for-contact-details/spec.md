Status: approved

# Spec: Add a section for contact details

Source: `docs/specs/4-add-a-section-for-contact-details/brief.md` (Brief stage, draft). Work item: "Add a section for contact details: +27 78 247 55 11".

## 1. Gate status

**Do not Build until the owner answers Open Questions Q1 and Q2 (Section 9).** The brief makes these blocking. This spec defines the behaviour conditional on a "yes" to public display. If the owner declines, the only change is none. Requirements in Section 5 are proposed and not approved.

## 2. Pack and contract status

- `AGENTS.md`, `.github/factory/pack.md`, and `.github/factory/handoffs.md` are not present in the repository. Reads of these paths failed.
- No pack overlays, Analyst section, or user-journey source exist to follow. Scenarios below use plain Given/When/Then, and the section layout is a reasonable default. The Spec Review stage should check both against the real contract once installed.
- No capability in the pack is declared absent, so no capability-based stop applies.

## 3. Business outcome and problem

- **Outcome:** a visitor to the "Working with me" guide can reach the owner by phone in one step, with no new channel, form, or backend.
- **Problem (as written):** the work item gives the number but not its purpose, audience, or availability rules. The requester has not said who should call, when, or for what.
- **Why it matters:** the guide currently offers no phone route. It has only "1:1s or DM works best" (Communication section).

## 4. Actors and stakeholders

- **Visitor:** anyone with the page URL. The page is `noindex`, but that is not access control. Visitors may be colleagues, collaborators, or strangers.
- **Owner (Imtiyaaz):** decides whether the number is published, which line it is, and the copy. Bears the spam and unsolicited-call risk.
- **Support or operators:** none. The page is static and has no admin or backend.

## 5. Current behaviour (evidence) and requested change

**Current behaviour (verified in `index.html`):**
- Single static HTML page with inline styles and CSS variables. No build, no test suite, no lint config.
- Sections, in order: hero (`<header>`), "Where & when I work", "Communication", "What you can expect from me", a two-column grid with "Outside work" and "My dislikes".
- No phone number, email, `tel:` link, or contact section exists anywhere in the file.
- Each section is a `<section>` with a card style: `var(--card-bg)`, `var(--border)`, `border-radius:14px`, and an emoji or icon heading with an `h2`.
- The dark theme is `html[data-theme="dark"]`, and it overrides `--card-bg`, `--border`, `--ee-blue-600` (link colour), and `--foreground`.
- Content states that core hours are 08:30–17:30 SAST, that the owner is offline by 17:30, and that the owner does not check Slack, email, or Teams outside working hours. It also asks that lunch (about an hour, varies by day) is not scheduled over.
- The Communication section says the owner prefers video on 1:1 calls, and that "1:1s or DM works best". A phone link is audio-only, so it sits in tension with the stated video preference.
- The page includes a browser-console line "All tests passing". This is decorative and is not evidence of tests.

**Requested change (proposed, not yet approved):** add one read-only "Contact" section to `index.html`, with the number shown as visible text and as a `tel:` link.

## 6. Scope

**In scope**
1. One new `<section>` in `index.html`, in the existing card style, with an `h2` heading. Default heading is "Contact" unless the owner chooses another.
2. Visible text: `+27 78 247 55 11`, exactly as supplied.
3. Link: `tel:+27782475511` (E.164). The visible text and the link target must represent the same number.
4. One short context line, confirmed by the owner (Q2). It must state the preferred use. It must not promise availability outside 08:30–17:30 SAST, and must not invite calls over the lunch slot.
5. Placement: between existing sections, not inside the hero. Default position is after "What you can expect from me" and before the two-column grid. The owner may choose otherwise.

**Out of scope unless the owner asks**
- Email, Teams, or any other channel. WhatsApp is in scope (C1, per Q3; see Build amendments).
- Contact forms, backend, data capture, analytics, or any form of tracking.
- JavaScript obfuscation of the number. It does not protect privacy and would be misleading.
- Changes to other sections, the hero, the version badge, or the "updated" date. Q4 decides the badge.
- vCard, QR code, or map links.

## 7. User journeys and scenarios

Scenarios are written as Given/When/Then. They are proposed behaviour, not current behaviour.

**S1: Visitor calls the owner from a phone (happy path)**
- Given the owner has approved public display and the page is deployed
- When a visitor on a phone opens the page and taps the phone link in the Contact section
- Then the device's dialler opens with `+27782475511` pre-filled, and the visitor is not taken to another page.

**S2: Visitor reads the number on desktop**
- Given the same page
- When a visitor on desktop reads the Contact section
- Then the visible text reads `+27 78 247 55 11`, and the link either opens the default calling app or does nothing harmful. The number is not truncated or reformatted.

**S3: Visitor reads the expectation line outside working hours**
- Given the visitor is reading the page at 19:00 SAST
- When they read the Contact section
- Then the context line does not imply the owner is reachable at that time. It is consistent with the existing "offline by 17:30" statement.

**S4: Keyboard user**
- Given a keyboard-only user
- When they tab through the page
- Then the phone link receives a visible focus indicator and activates with Enter.

**S5: Screen reader user**
- Given a screen reader user
- When they reach the link
- Then the accessible name identifies it as a phone number, for example "Call +27 78 247 55 11". A bare number with no context is not acceptable.

**S6: Dark theme**
- Given the visitor has selected dark mode, or the system preference is dark
- When they view the Contact section
- Then the text, heading, link, and card background meet the contrast criteria in AC6 and match the surrounding sections.

**S7: Narrow screen**
- Given a 320 px wide viewport
- When the page renders
- Then the number and the context line wrap cleanly, with no horizontal scrolling and no overlap with the theme toggle button (fixed bottom-right).

**S8: Owner declines public display**
- Given the owner does not approve public display (Q1 = no)
- When the Spec is updated
- Then no code change is made. The change is closed as "not approved", and the page stays unchanged.

## 8. Requirements and acceptance criteria

Each criterion must be verifiable by a stakeholder with a browser and a phone. Items marked **(Q)** wait on an owner answer.

**Functional**
- **AC1.** The page contains exactly one new section containing a visible heading and the visible text `+27 78 247 55 11`. Verified by inspecting the rendered page and `index.html`.
- **AC2.** The section contains exactly one `tel:` link (href `tel:+27782475511`) and exactly one `wa.me` link (href `https://wa.me/27782475511`). No other `tel:` or `wa.me` link is added.
- **AC3.** Visible text and hrefs are consistent. Stripping spaces from the visible text gives the same digits as the `tel:` href (with `+`) and as the `wa.me` href (digits only).
- **AC4.** Tapping the link on a phone opens the dialler with the number pre-filled. Verified manually on at least one iOS or Android device, and on one desktop browser for graceful behaviour.
- **AC5.** The context line is the owner-approved text (Q2) and contains no availability promise outside 08:30–17:30 SAST and no invitation to call during the lunch break. Verified by reading the copy against the approved text.

**Accessibility**
- **AC6.** Text and link colour contrast meet WCAG 2.2 AA (4.5:1 for body text, 3:1 for large text and UI borders) in both light and dark themes. Verified with a contrast checker on the rendered colours.
- **AC7.** The link has a visible focus indicator and is reachable by keyboard. Verified by tabbing through the page.
- **AC8.** Each link's accessible name includes the word "call" or "phone" and is not a bare number. The approved names are "Call +27 78 247 55 11" for the phone link and "Message on WhatsApp, phone +27 78 247 55 11" for the WhatsApp link. Verified with a screen reader or accessibility inspector.

**Responsive and visual**
- **AC9.** At 320 px, 768 px, and 1280 px widths, the section renders without horizontal scroll and without text clipping. Verified in browser dev tools.
- **AC10.** The section uses the existing card pattern (border, radius, padding, heading style, and `var(--card-bg)`), so it visually matches the other sections. Verified by side-by-side review.
- **AC11.** No existing section, the hero, the version badge, or the "updated" date changes, unless Q4 says otherwise. Verified by diffing `index.html` against the previous commit, expecting only the new section to differ.

**Privacy and security**
- **AC12.** No JavaScript is added to hide, encode, or track the number. No analytics or third-party request is added. Verified by diff.
- **AC13.** The number appears only in the new section. It is not added to meta tags, the Open Graph description, or the page `<title>`. Verified by search.

**Quality (no automated checks exist)**
- **AC14.** The page loads without new console errors introduced by this change. Verified in browser dev tools. Note that the existing "All tests passing" console line is decorative and does not count as a test result.

## 9. Open questions (blocking unless noted)

| # | Question | Blocks | Owner |
|---|---|---|---|
| Q1 | May this number be shown on a public page? Is it a personal mobile or a dedicated business line? | Build | Owner |
| Q2 | What heading and context line should the section use (for example, "for urgent matters" or "calls welcome during core hours")? | Build | Owner |
| Q3 | Should the number also appear as WhatsApp? Assumed: call link only. | Build (default applies if unanswered) | Owner |
| Q4 | Should the version badge (v1.1) and "updated 20 Jul 2026" change? Assumed: no. | Build (default applies if unanswered) | Owner |
| Q5 | Is there a required pack or handoff contract for later stages? | Spec Review | Foreman or owner |
| Q6 | Video preference vs. audio-only call link: does the owner want the Communication section updated to mention phone, or is the existing "I prefer video on" line sufficient? | Spec Review (default: no edit) | Owner |

Legal questions are not assessed. If the number is personal data of a third party, or if the owner is in a regulated context, POPIA or similar review is needed before publication. This is for qualified review.

## 10. Assumptions

- A1. The only deliverable is `index.html`. Change is static HTML and inline CSS. No build, dependency, or backend.
- A2. The number `+27 78 247 55 11` is correct and is a South African mobile in E.164 form `+27782475511`.
- A3. The person who supplied the number is the owner and has authority to publish it, subject to Q1.
- A4. The page is deployed as a static file. Its `noindex` tag does not restrict access.
- A5. Visitors are assumed to be on mobile for the `tel:` link to be useful. Desktop visitors will see the number only.

## 11. Business rules

- BR1. The number is shown only if Q1 is "yes". Otherwise no change is made.
- BR2. The context line must not promise availability beyond the stated core hours.
- BR3. Any copy that suggests calls during the lunch break is excluded.
- BR4. The section is read-only. It does not collect data, log calls, or submit a form.

## 12. Risks and trade-offs

| Risk | Severity | Mitigation |
|---|---|---|
| Public exposure of a personal number leads to spam or unsolicited calls | High | Q1 gate. Recommend a dedicated line if the owner has one. Owner can remove the section at any time. |
| Visitor expects an immediate answer and is frustrated when the owner is offline | Medium | Context line (Q2) and AC5 |
| Phone link conflicts with the stated video preference | Low | Q6 |
| Page is `noindex` but still reachable, so the number is not secret | Medium | Stated in the risk record. Not mitigated by obfuscation (out of scope). |
| Visual inconsistency in dark theme | Low | AC6 and AC10 |
| Lunch-break boundary is not respected | Low | BR3 and AC5 |

**Alternatives** (from the brief, for decision):
1. Do nothing (safest for privacy).
2. Show the number in the hero (more visible, possibly unwanted).
3. Dedicated section (recommended).
4. vCard or QR code (deferred).

## 13. Measures

- **Outcome (owner-observed, not analytics):** number of calls or messages the owner receives that originate from the guide. Baseline unknown. Source: the owner's call log or channel. The page has no analytics, and adding any is a separate privacy decision.
- **Guardrails:** no unwanted calls or spam reported by the owner. No increase in messages outside core hours. Review at 30 days after publication. The 30-day review is a proposal for the owner to confirm.
- **No targets are set.** The repository has no baseline data.

## 14. Dependencies

- Owner answers to Q1 and Q2 (blocking).
- Google Fonts and the Lucide CDN are already loaded by the page. No new external dependency is needed.
- No dependency on other runs or branches is known.

## 15. Exclusions

- Any channel other than the voice `tel:` link and the WhatsApp `wa.me` link (C1, per Q3; see Build amendments).
- Any form, backend, analytics, or tracking.
- Changes to existing sections, hero, version badge, or date (unless Q4 is answered "yes").
- Legal or POPIA assessment.

## 16. Handoff notes for Build and Review

- Keep the change to a single new `<section>` using the existing inline-style card pattern, placed as in Section 6.
- Use E.164 in the `href` (`tel:+27782475511`) and the supplied format in the visible text.
- Do not change the `<meta name="robots">` tag. Do not add the number to metadata.
- Verify both themes, the three viewport widths, keyboard focus, and the screen-reader name before reporting done.
- Record in the Build report the owner's answers to Q1 to Q4 and Q6, and the date they were given.

## Answers at gate A

From the human, when approving. They settle the open questions above.

| Q1 | May this number be shown on a public page? Is it a personal mobile or a dedicated business line? Personal | Build | Owner |
| Q2 | What heading and context line should the section use (for example, "for urgent matters" or "calls welcome during core hours")? "calls welcome during core hours" | Build | Owner |
| Q3 | Should the number also appear as WhatsApp? Assumed: call link only. Whatsapp as well | Build (default applies if unanswered) | Owner |
| Q4 | Should the version badge (v1.1) and "updated 20 Jul 2026" change? Assumed: no. No | Build (default applies if unanswered) | Owner |
| Q5 | Is there a required pack or handoff contract for later stages? No  | Spec Review | Foreman or owner |
| Q6 | Video preference vs. audio-only call link: does the owner want the Communication section updated to mention phone, or is the existing "I prefer video on" line sufficient? No leave as iss | Spec Review (default: no edit) | Owner |

Legal questions are not assessed. If the number is personal data of a third party, or if the owner is in a regulated context, POPIA or similar review is needed before publication. This is for qualified review.

## Build amendments

Recorded at Build stage, WI-0 (spec amendment). Status remains `approved`.

- **Date:** not recorded. This run had no clock access (`run_command` not permitted), so the Foreman should stamp the date when recording this entry.
- **Approval basis:** the human confirmed the copy at the Build resume and said not to wait for another gate A approval. These amendments stand as approved.

1. **C1, scope (per Q3, "Whatsapp as well"):** WhatsApp is in scope. §6 (Out of scope) and §15 (Exclusions) are amended in place to match. The only new channel is the `https://wa.me/27782475511` link. Other channels remain out of scope.
2. **C2, AC2:** replaced with the two-link wording above. This supersedes the original "exactly one `<a>`" wording, which predated Q3.
3. **C3, AC3:** replaced with the wording above, covering the `tel:` and `wa.me` forms. The `+` is kept in the `tel:` href only, and `wa.me` takes digits only.
4. **C4, AC8:** replaced with the wording above. The design's original WhatsApp label, "Message on WhatsApp, +27 78 247 55 11", did not contain "call" or "phone", so it failed AC8 and was changed to "Message on WhatsApp, phone +27 78 247 55 11". The phone link name is "Call +27 78 247 55 11".
5. **C9, heading:** the heading is "Contact" (human-confirmed). This resolves the default-heading open item in §6 item 1.
6. **AC5 (context line):** left as approved. The context line is the design §5 copy as written (human-confirmed). No change.
7. **Q6, Communication section:** no edit. The owner's answer reads "No, leave as is". The existing "I prefer video on" line stays, and the Communication section is not changed.

No other spec content was changed. Q4 (no change to the version badge or "updated" date) is unchanged, and AC11 still applies.
