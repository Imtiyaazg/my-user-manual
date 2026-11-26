Status: draft

# Design: Add a section for contact details

Run: 4-add-a-section-for-contact-details
Stage: Design
Sources: `brief.md` (draft), `spec.md` (approved, with "Answers at gate A")
Implementation target: `index.html` only (static HTML and inline CSS)

## 1. Gate A answers applied

These answers override the spec's open questions.

| Q | Answer | Design effect |
|---|---|---|
| Q1 | Personal number, public display approved | Publish `+27 78 247 55 11` in the Contact section. The number is the owner's personal mobile. |
| Q2 | "calls welcome during core hours" | Heading "Contact". Context line built around this wording (Section 5). |
| Q3 | WhatsApp as well | **Scope change.** The spec put WhatsApp out of scope, pending Q3. It is now in scope. Add a second link, `wa.me`. This is the only new channel. |
| Q4 | No change to version badge or "updated" date | Hero and badge are untouched. |
| Q5 | No required pack or handoff contract | No contract applied. This design uses the default sections below. |
| Q6 | No edit to Communication | The "I prefer video on" line stays as is. The Contact section does not mention video or audio. |

Legal and POPIA questions are not assessed here. The owner supplied the number as their own personal line. If it is personal data of a third party, or the owner is in a regulated context, a qualified POPIA review is needed before publication. This design does not decide that.

## 2. Summary of decisions

1. **One new `<section>`** in `index.html`, placed after "What you can expect from me" and before the two-column grid (the spec's default). It follows the existing inline card pattern exactly.
2. **Two outbound links, both plain anchors:**
   - `tel:+27782475511` for calls.
   - `https://wa.me/27782475511` for WhatsApp. The `wa.me` format takes digits only, with no `+`.
3. **Visible text** is the supplied format, `+27 78 247 55 11`, for both links.
4. **No JavaScript, no new dependency, no build step, no backend, no data capture, no analytics.** The page keeps its existing `noindex` tag. The number does not go into `<title>`, `og:*`, or `meta` tags.
5. **Context line** states core hours and the lunch exception, and says that WhatsApp may wait until the next working day. It makes no availability promise outside 08:30–17:30 SAST.

## 3. Architecture and server surface

- **Architecture:** unchanged. The page is a single static HTML file. No new files.
- **Server entry points:** none added or changed. The page has no server-side code, forms, or APIs.
  - Identity check: not applicable.
  - Ownership check: not applicable.
  - Expected-state constraint: not applicable.
- **Data model:** none. Nothing is stored.
- **Configuration and secrets:** none. No environment variables and no `.env.example` change are needed. The number is public content, not a secret.
- **Third-party requests:** the new links are navigation only. Nothing is fetched on page load, so no new third-party request is added. The existing Google Fonts and Lucide CDN loads are unchanged.

## 4. Markup

Insert this block after the closing `</section>` of "What you can expect from me" and before the `<!-- Two-up: hobbies + dislikes -->` comment. Use the same inline-style pattern as the surrounding cards.

```html
<!-- Contact -->
<section aria-labelledby="contact-heading" style="background:var(--card-bg, #fff); border:1px solid var(--border); border-radius:14px; padding:30px 32px; box-shadow:var(--shadow-xs); display:flex; flex-direction:column; gap:18px;">
  <div style="display:flex; align-items:center; gap:14px;">
    <span aria-hidden="true" style="flex:none; font-size:30px; line-height:1;">📞</span>
    <h2 id="contact-heading" style="margin:0; font-size:21px; font-weight:600; letter-spacing:-.4px;">Contact</h2>
  </div>
  <p style="margin:0; font-size:16px; line-height:1.55;">Calls are welcome during core hours (08:30 – 17:30 SAST), except over my lunch break. I'm offline outside those hours, so WhatsApp messages may wait until the next working day.</p>
  <ul style="list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:13px;">
    <li style="display:flex; gap:12px; font-size:16px; line-height:1.55;"><span aria-hidden="true" style="flex:none; width:7px; height:7px; border-radius:50%; background:var(--ee-blue-500); margin-top:9px;"></span><span>Phone: <a href="tel:+27782475511" aria-label="Call +27 78 247 55 11" style="font-weight:600; white-space:nowrap; display:inline-flex; align-items:center; min-height:44px;">+27 78 247 55 11</a></span></li>
    <li style="display:flex; gap:12px; font-size:16px; line-height:1.55;"><span aria-hidden="true" style="flex:none; width:7px; height:7px; border-radius:50%; background:var(--ee-blue-500); margin-top:9px;"></span><span>WhatsApp: <a href="https://wa.me/27782475511" aria-label="Message on WhatsApp, +27 78 247 55 11" style="font-weight:600; white-space:nowrap; display:inline-flex; align-items:center; min-height:44px;">+27 78 247 55 11</a></span></li>
  </ul>
</section>
```

Notes on the markup:
- The `<section>` gets `aria-labelledby` so screen readers announce it by its heading.
- The `aria-label` values contain the visible number, so they meet the label-in-name rule. Each includes "Call" or "Message on WhatsApp", which satisfies AC8.
- The emoji is `aria-hidden`, following the existing sections.
- The link `min-height:44px` gives a comfortable touch target. It is inline-flex so the target grows without changing the line rhythm much.
- `white-space:nowrap` keeps the number on one line. At 320 px the number is about 170 px wide at 16 px, so it fits within the card's content width (about 216 px after padding).
- Do not add `target="_blank"`. Navigation stays in the same tab.

## 5. Copy

- **Heading:** "Contact".
- **Context line:** "Calls are welcome during core hours (08:30 – 17:30 SAST), except over my lunch break. I'm offline outside those hours, so WhatsApp messages may wait until the next working day."

Checks against the spec:
- AC5 and BR2: no availability promise outside 08:30–17:30 SAST.
- BR3: no invitation to call during lunch. The lunch exception is stated, and no lunch time is given because the slot varies.
- The "offline" and "next working day" wording follows the page's existing statements that the owner is offline after 17:30 and does not check messages outside working hours.

**Assumption to confirm:** the WhatsApp clause "may wait until the next working day" assumes the owner does not read WhatsApp outside core hours. This is drawn from the page's existing Slack, email, and Teams statement. The owner should confirm it applies to WhatsApp as well. If not, remove that sentence.

## 6. Placement and visual consistency

- The card uses the same border, radius, padding, shadow, background variable, heading size, and gap as the other single-column sections.
- The hover lift (`section:hover`) applies to the new section automatically, which matches the other cards.
- The dark theme needs no new variables. `var(--card-bg)`, `var(--border)`, `var(--ee-blue-500)`, and the global `a` colour (`var(--ee-blue-600)`) already switch with the theme.
- Approximate contrast, to be verified in a checker:
  - Dark: link `#7FB3E0` on card `#1A242E` is about 7:1, which passes AA. Body text `#E8EDF2` on the card is also well above 4.5:1.
  - Light: link `#1378AE` on white is about 5:1, which passes AA. The body text uses the foreground token.

## 7. Accessibility

- Heading structure: `h2` under the existing `h1`, consistent with the other sections.
- Links are keyboard reachable in document order. The default focus ring must stay visible. Do not add `outline:none`.
- Link text is the number, with a clear accessible name that starts with "Call" or "Message on WhatsApp" (AC8).
- No colour is the only signal: the labels "Phone:" and "WhatsApp:" are visible text.
- Reduced-motion handling is inherited from the existing `section` rules. No new animation is added.

## 8. Responsive behaviour

- The section sits in the single-column flow, so it uses the full 840 px max-width container on desktop and shrinks naturally on mobile.
- The `.version-badge` mobile rule does not affect this section.
- The fixed theme toggle (bottom-right, 44 px) does not overlap the section's text at 320 px, because the section's right padding is 32 px and the toggle sits in the page's bottom margin area. Verify this on the 320 px check.

## 9. Security and privacy

- No JavaScript is added. The number is not obfuscated, which would be misleading (out of scope per spec).
- No analytics, tracking, or third-party script is added.
- `<meta name="robots" content="noindex">` is unchanged. Note that `noindex` is not access control. The number is visible to anyone with the URL.
- The number appears only in the new section, not in `<title>`, `og:*`, `twitter:*`, or other metadata (AC13).
- No form, submission, or data capture.
- Exposure risk: a published personal number may attract spam or unsolicited calls. The owner can remove the section at any time. This is accepted on the owner's approval (Q1).
- Account deletion and data-subject paths: not applicable, because the page holds no user data.

## 10. Test plan

No test suite, build, or lint config exists in the repository. The browser console line "All tests passing" is decorative and is not evidence of tests. The verification is manual, against the acceptance criteria in `spec.md`, with the following changes:

- **AC2 (amended):** the section contains exactly one `tel:` link and exactly one `wa.me` link. No other links are added. This replaces the spec's "exactly one `<a>`", which predates Q3.
- **AC4:** tap the phone link on iOS or Android and confirm the dialler opens with the number. Tap the WhatsApp link and confirm it opens WhatsApp with the chat. On desktop, confirm graceful behaviour.
- **AC6:** contrast of the link and body text in both themes, checked with a contrast tool on the rendered colours.
- **AC7:** tab through the page. Both links receive a visible focus ring and activate with Enter.
- **AC8 (amended):** check both accessible names with a screen reader or accessibility inspector. Expected: "Call +27 78 247 55 11" and "Message on WhatsApp, +27 78 247 55 11".
- **AC9:** render at 320, 768, and 1280 px. No horizontal scroll and no clipped text.
- **AC10:** side-by-side visual check against the other cards in light and dark themes.
- **AC11:** `git diff` shows only the inserted section. The hero, version badge, "updated" date, Communication section, and other sections are unchanged (Q4 and Q6).
- **AC12 and AC13:** search `index.html` for the number. It should appear only in the new section's `tel:` and `wa.me` hrefs and visible text. Confirm no `<script>` change.
- **AC14:** load the page with the console open. No new errors.
- **Domain rules:** none. The page has no domain logic and no state transitions, so no unit tests apply.
- **E2E:** not applicable. There is no runnable app. The "primary journey" is manual: open the page, find the Contact section, tap or click the link.

Commands: none are required. Open `index.html` in a browser. To run a local server for mobile testing on a LAN address, use any static server, for example `python3 -m http.server 8080`. This is optional and not a repo requirement.

## 11. Risks and follow-ups

| Risk | Severity | Mitigation / owner |
|---|---|---|
| Personal number published publicly, causing spam or unsolicited calls | High | Owner approved (Q1). Owner can remove the section at any time. Consider a dedicated business line later. |
| Legal or POPIA position not assessed | Medium | Out of scope for this design. If the owner is in a regulated context or the number is third-party personal data, obtain qualified review before publishing. |
| WhatsApp expectation: owner may read WhatsApp outside hours | Medium | Owner to confirm the WhatsApp clause in Section 5. Remove it if inaccurate. |
| Phone and WhatsApp links are audio or chat, which may conflict with the "prefer video" line | Low | Q6 answered: no edit. Monitor for feedback. |
| Number is visible to anyone with the URL despite `noindex` | Medium | Stated risk. Not mitigated by obfuscation (out of scope). |
| Dark-theme contrast regression if a token changes | Low | Covered by AC6 check in Section 10. |
| `wa.me` link format depends on the WhatsApp service | Low | Standard public link format. No maintenance needed. |
| No automated checks in the repo | Medium | Manual checks above. Adding a test harness is out of scope and would be a new dependency. |

**Spec amendments required (for the Spec Review or Build stage to record):**
1. Scope: WhatsApp moves from out-of-scope to in-scope (Q3).
2. AC2: "exactly one `<a>`" becomes "exactly one `tel:` link and exactly one `wa.me` link".
3. AC8: applies to both links.
4. Q6 answer "No leave as is" is read as "no edit to the Communication section". The truncated answer text should be confirmed by the owner, but the design assumes no edit.

## 12. Open items

- Owner to confirm the WhatsApp clause in the context line (Section 5).
- Owner to confirm the heading "Contact" (default; Q2 did not name one).
- Qualified POPIA review, only if the number is third-party personal data or the owner is in a regulated context. Not assessed here.
- Build report must record the answers to Q1–Q4 and Q6 and the dates given.

## 13. Dependencies and rollback

- **Dependencies:** none new. Existing fonts and Lucide CDN are unchanged.
- **Rollback:** revert the single commit, or delete the inserted `<!-- Contact -->` block. No data migration, no config, and no cache issue beyond normal browser caching of the static page.

## 14. Handoff notes for Build and Review

- Insert the block in Section 4 at the placement in Section 2, changing nothing else.
- Use the copy in Section 5 unless the owner changes it.
- Do not change the `<meta name="robots">` tag, the hero, the version badge, the "updated" date, or any other section.
- Do not add JavaScript, analytics, forms, or third-party requests.
- Verify both themes, the three viewport widths, keyboard focus, and both accessible names before reporting done.
