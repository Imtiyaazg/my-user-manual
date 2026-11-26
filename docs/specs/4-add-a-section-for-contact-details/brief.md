Status: draft

# Brief: Add a section for contact details

## Recommendation

Add one small, read-only "Contact" section to the existing single-page guide `index.html`. It should show the phone number supplied in the work item as visible text and as a `tel:` link, styled like the existing cards. Do not publish the number until the owner confirms it is meant for public display. This is a product decision, and it is the main open question.

Intended outcome: people who read the guide can reach the owner by phone in one step, with no new channel, form, or backend.

## Problem and users

- **Users:** visitors to the "Working with me" guide, including colleagues, collaborators, and possibly people outside work. The requester has not named the audience.
- **Problem (as written):** the work item says only "Add a section for contact details: +27 78 247 55 11". It does not say why the number is needed, who should use it, or what it is for (calls, WhatsApp, urgent issues only, and so on).
- **Decision to make:** whether and how to expose a phone number on a public page.

## Evidence from the repository

- The repo has no `AGENTS.md`, `.github/factory/pack.md`, or `.github/factory/handoffs.md`. I therefore have no pack rules, overlays, or handoff contract. I have applied general product judgement only, and the later stages should check this brief against the real contract once it is installed.
- The only product file is `index.html`, a static page. Its sections are: hero (name, location, core-hours chips), "Where & when I work", "Communication", "What you can expect from me", "Outside work", and "My dislikes". The page has no contact section and no phone number, email, or link anywhere.
- The Communication section already says "Feedback is welcome. 1:1s or DM works best." A phone number would sit next to that guidance, so the copy should not contradict it. For example, it should not imply that calls are preferred over DM unless the owner wants that.
- The page is marked `<meta name="robots" content="noindex">`. That stops search indexing only. It does not restrict access, so anyone with the URL can read a number placed on the page.
- The page sets "Core hours 08:30–17:30 SAST" and says the owner is offline after 17:30 and does not check messages outside working hours. A phone number therefore needs a stated availability, or it will conflict with the page's own boundaries. The lunch-hour request ("Please don't schedule over my lunch break") also shows the owner cares about interruptions.
- Existing sections use a consistent card pattern with an icon or emoji heading, a list, and theme-aware CSS variables. The dark theme overrides several variables, so the new section must be checked in both themes.
- I found no test suite, build, or lint config. The browser console message "All tests passing" in the page script is decorative text and is not evidence of tests.
- The workspace `status.md` shows this run is at the Brief stage, on branch `foreman/4-add-a-section-for-contact-details`, from `5f281d3778`.

## Scope (proposed)

In scope:
1. One new `<section>` in `index.html` titled "Contact" (or the owner's preferred heading), in the existing card style.
2. The phone number as visible text, plus a `tel:` link using E.164 format, `+27782475511`. The display text stays as supplied, `+27 78 247 55 11`.
3. One short line of context, drafted and confirmed by the owner. It should state the preferred use (for example, "for urgent matters" or "calls are welcome during core hours") and must not promise availability outside 08:30–17:30 SAST.
4. Responsive and accessible: readable on narrow screens, sufficient colour contrast in light and dark themes, and a link with a clear accessible name.

Out of scope unless the owner asks:
- Email, WhatsApp, Teams, or other channels.
- A contact form, backend, or any data capture.
- Hiding or obfuscating the number with JavaScript. This does not protect privacy and would be misleading.
- Changes to the version badge or "updated" date, unless the owner wants the page treated as a new version.
- Changes to other sections.

## Alternatives

1. **Do nothing.** The page stays as is. This is the safest option for privacy, and the owner's existing "DM works best" line already gives a contact route. The cost is that the requester's explicit request is not met.
2. **Add the number in the hero** near the location and hours chips. This is more visible, but it makes the number the first thing every visitor sees, which may not be wanted.
3. **Add a dedicated contact section (recommended).** It is discoverable, simple, and matches the page's structure.
4. **Add a vCard download or QR code.** This is more useful for in-person contacts but adds scope and a file to maintain. Defer until there is a stated need.

## Trade-offs and risks

- **Privacy and consent (highest risk):** the number is personal, and the page is publicly reachable at its URL. Confirm the owner consents to public display, and whether it should be a personal mobile or a dedicated business line. Exposed numbers can attract spam or unsolicited calls. This is a personal-data decision for the owner. Legal or POPIA questions, if any, need qualified review and are not assessed here.
- **Expectation mismatch:** a visible number implies availability. The page says the owner is offline after 17:30 and does not check messages outside working hours, so the copy must set expectations.
- **Unrequested copy:** the content of the context line is a drafting choice. Confirm it before merge.
- **Visual consistency:** a new card must match the existing rhythm and dark theme. This is low risk but needs a visual check.

## Measures

No baseline data exists in the repository, and I have not invented targets. Proposed, to be confirmed by the owner:
- **Outcome:** number of calls or messages from the guide, if the owner can see call logs or a message source. Baseline unknown. Source: owner's phone or channel records, not analytics. The page has no analytics script, so there is no page-level measure. Adding analytics would be a separate privacy decision.
- **Guardrails:** no unwanted calls or spam reported by the owner, and no unexpected increase in messages outside core hours.
- **Quality checks:** page renders correctly at mobile and desktop widths, in light and dark themes. The `tel:` link works on a phone. The section meets basic contrast and keyboard focus requirements.

## Open questions for the owner (must answer before Spec or Build)

1. Is it OK to publish this number on a public page? Is it a personal or business line?
2. What heading should the section have, and what context should it give (for example, urgent matters only, or calls during core hours)?
3. Should it also be shown as WhatsApp, or only as a call link? (Assumed: call link only.)
4. Should the version badge and "updated" date change?
5. Is there a required handoff contract or pack that the later stages should follow? (The repo does not include one.)

## Assumptions

- The repository's only deliverable is `index.html`, and the change is a static HTML/CSS addition.
- The number supplied is correct and in E.164 format for `tel:` use.
- No new dependencies, build steps, or backend are needed.
- The owner is the person who supplied the number and wants it visible on the page.

## Next step

Hold at the Brief stage until the owner answers open questions 1 and 2. If the owner confirms public display, the Spec stage can define the exact copy, markup, and acceptance checks (visible text, `tel:` link, responsive layout, dark theme, and contrast).
