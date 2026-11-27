# Julie Tran portfolio design specification

## Scope and reference

This site is a continuously scrolling portfolio for Julie Tran at the intersection of IT, software development, design, and multimedia. The visual language mixes editorial type, hand-lettering, warm personal details, and sparse compositions against a continuous gradient canvas. The Canva export “Over here...” supplies the visual compositions and copy. It uses a 1440 × 810 design canvas. Adapt the relationships between the elements to the browser window and reproduce the compositions with live HTML, CSS, SVG, type, and approved individual assets.

The first two phases establish the section order, direct project routes, shared design tokens, animated landing, global navigation, and continuous scroll-responsive backdrop. Selected Work, About Me, Skills, and the case studies keep their interim content and layouts until their implementation phases. Use [project-content.md](project-content.md) for source wording and [asset-inventory.md](asset-inventory.md) for asset availability and publication status.

### Canva slide map

| Slides | Website destination | Design intent |
| --- | --- | --- |
| 1–2 | Homepage landing | Two states of one scene. A wide, centered greeting moves up and left as the lower-right character appears. |
| 3–7 | Homepage Selected Work | Five selection states of one wheel. Slide 3 is Senior Capstone, slide 4 is Digital Asset Management Application, slide 5 is Taxonomy System & IT Solutions, slide 6 is HackVA 2027, and slide 7 is SimVentions Mission Support. |
| 8 | Homepage Skills | Employee badge and lanyard concept. The heading in the mockup shares About Me styling. The implemented homepage places Skills after About Me. |
| 9 | Homepage About Me | Photo carousel at left, interests at right, “Julie Off the Clock” subtitle. The illustration is an image placeholder. |
| 10–11 | Senior Capstone | Case study title, metadata, problem and sponsor introduction, challenge breakdown, before image, and sponsor criteria. |
| 12–14 | Senior Capstone | Goal and process, three proposed solution tracks, sponsor change, team leadership, and a supporting photo layout. Slide 14 repeats the Team Lead narrative alongside photos. |
| 15–17 | Digital Asset Management | Metadata, problem, goal, incomplete limitations, process, deployment status, ongoing tagging work, and challenges. The photo on slide 15 duplicates a Capstone photo. |
| 18–19 | Taxonomy & IT Solutions | Metadata, problem and goal opposite limitations, followed by process and implementation details. |
| 20–21 | SimVentions Mission Support | Overview and process opposite the project list and video link. Slide 21 shows a single photo as a gallery reference. |
| 6 only | HackVA 2027 | The wheel establishes the project’s place. Use a minimal coming-soon page until Julie supplies case study content. |

## Visual identity

### Palette and composition

Representative colors were sampled from the rendered Canva slides. A pixel within a gradient records the composite color at that position. Use these values to tune the visual composition.

| Color | Reference sample | Use |
| --- | --- | --- |
| White | `#FFFFFF` | Opening canvas and light type in later sections. |
| Black | `#000000` | Opening blackout, greeting, and character linework. |
| Bright pink | `#FE49A4` | Landing glow centered behind the first greeting. |
| Yellow-green | `#C5DA48` to `#BBD63E` | Landing glow behind the second line. |
| Matte gray | `#949494` | Dominant backdrop after the landing. |
| Muted magenta | `#932D5F` | Later gradient wash at the left. |
| Olive | `#697B20` | Later gradient wash toward the left-center. |
| Metadata gray | `#4E4E4E` | Approximate panel composite over flat gray. |

Use broad, soft radial glows with substantial overlap and room for the compositions to breathe. Keep the lower-right of the landing mostly white for the character. Later sections carry subdued pink and olive from the upper left into neutral gray toward the right and lower edge. Use a light arc and marker dots for the wheel, a yellow-green selected dot, and light but muted inactive numbers. Keep the translucent navigation and case study metadata treatments restrained.

White on the sampled matte gray measures about 3:1. Use accessible darker compositions in text areas while retaining the gray source value in the surrounding canvas when possible. Check the gradient under text throughout a transition as well as the stable endpoints. Use shared CSS variables for colors, typography, spacing, radii, and timing, with component-level adjustments where the reference calls for them.

### Typography

- Use Glacial Indifference for the editorial hierarchy, navigation, case study titles, body text, and descriptions.
- Use FF Providence Sans for greetings, the character caption, wheel numbers and project labels, personal asides, and numbered section labels. The Canva export primarily uses ProvidenceSansPro-Bold with some ProvidenceSansPro regular. The site uses Gaegu Bold as the temporary handwriting face. The supplied Providence Office Bold files are a separate cut, and the archive does not supply a verified publisher grant for web use and repository distribution. See the asset inventory for licensing.
- The export also contains Inter and Anton for some source details. Glacial Indifference and the approved handwriting treatment are the website type hierarchy. The badge’s condensed name treatment is part of its future visual review.
- Keep large headings light and open. Use a compact handwritten treatment for labels and allow long project names to wrap. Keep sustained body copy in readable columns with a comfortable line height.

## Homepage and navigation

Keep the homepage in this order with stable anchors: Home (`/` or `#home`), Selected Work (`#selected-work`), About Me (`#about-me`), and Skills (`#skills`). The four sections share one continuous document and natural browser scrolling.

The shared fixed navigation aligns at the upper right. The tinted surface stays beneath its links and leaves the final greeting clear. Home, Selected Work, About Me, and Skills are standard links. Selected Work has a separate disclosure button for the five project routes. Touch and narrow layouts keep a Menu control available at the top and place the project links inside that disclosure.

The navigation fades in during the landing reveal. Afterward, downward scrolling hides the links and upward scrolling reveals them. Moving a mouse into the top 26 CSS pixels also reveals them. Keyboard-visible focus and open disclosures keep navigation accessible. Escape closes the innermost disclosure and returns focus to its button. Outside pointer interaction closes the disclosure. Section links keep the existing anchor and history behavior, with space beneath the fixed navigation.

Explicit Home activation from the link scrolls to the top and starts one fresh introduction, including from a project route. Each new Home request cancels its predecessor. Opening a direct section URL or returning through browser history keeps that destination. Selecting a section or scrolling to the top leaves the current introduction state in place. From a project, a section link returns to the requested anchor. The project dropdown uses the existing independent case-study routes.

### Shared scrolling canvas

One fixed backdrop sits behind the homepage. Two circular CSS glows reproduce sampled radial color and alpha profiles from the Canva states. The opening animation and scroll effects change their transforms and opacity on the same elements. Their centers and diameters follow the Canva proportions at 16:9, with nearby positions adjusted for the portrait greeting.

Scroll distance is normalized to the measured landing height. A soft shade advances from the lower landing edge and darkens the bright gradients to muted pink, olive, and gray. It reaches its text-safe density where Selected Work begins and deepens slightly farther down the document. The glow centers, sizes, and intensity continue drifting across the placeholder sections. The components use Motion values so scrolling updates visual properties without rendering the page every frame. Scroll remains natural.

Reduced motion settles the greeting and holds the glow geometry while the section colors change with document position. Project pages keep their independent gradient backgrounds.

### Animated landing · Phase 2

- The landing occupies `100svh`. A black document startup color and a black layer over the live scene give way to slide 1 in one second. The scene holds for five seconds from the end of the fade. The same text, glows, and character scale and translate into the second composition over 1.2 seconds.
- Slide 1 uses black “Hello...” and “I'm Julie!” over the centered pink and yellow-green glows with the tiny reference character at the lower right. At 1440×810, the source hello ink begins at approximately 24% from the left and 38% from the top. The name begins at approximately 53% and 63%. Live Gaegu text is sized against those ink bounds. The narrower apostrophe in Gaegu preserves the word spacing. Glyph shapes still differ from Providence Sans Pro.
- The second state moves the greeting and glows up and left. On wide screens, the left portion of “Hello...” crosses the edge as in the reference. The full greeting stays in the accessible heading. Narrow or tall screens keep the full word in view and adapt text spacing and art size to the viewport. Both states share the same DOM elements.
- The recovered character vector grows from the small lower-right position. “Over here...” appears next to it during the rearrangement. The settled state remains visible.
- A discreet “Skip intro” control appears during playback near the lower-left edge. It ends playback, keeps the final scene, and moves focus to the greeting. The scene can be scrolled at any time. Reduced motion displays the final state immediately.

### Selected Work · Phase 3

Set the section heading high on the right. Place a large partial circle at the left with its center near the viewport’s left edge. The visible open arc spans most of the section’s height and reaches approximately a quarter of the desktop viewport width at its midpoint. Place five labels outside the arc, one at the midpoint and two above and below. A small marker dot connects each item to the line. The active row continues across the center with its larger, white number, handwritten title, readable description, and paired arrow controls at the far right.

Use the following order.

| Number | Wheel title | Route |
| --- | --- | --- |
| 01 | Senior Capstone | `/projects/senior-capstone` |
| 02 | Digital Asset Management Application | `/projects/digital-asset-management` |
| 03 | Taxonomy System & IT Solutions | `/projects/taxonomy-it-solutions` |
| 04 | HackVA 2027 | `/projects/hackva-2027` |
| 05 | SimVentions Mission Support | `/projects/simventions-mission-support` |

Animate the numbers along the circular path so the active item settles at the midpoint. Order the states cyclically in both directions, including 05 ↔ 01, while updating the active title and description smoothly. Use a dedicated SVG arc for the geometry, with accessible HTML controls or equivalent focusable controls. Keep the title or a clearly named active project link available to open the corresponding route. Preserve the active selection when returning from a project, including through browser history or a link back to Selected Work.

Limit wheel-event handling to the wheel’s interactive region. Group a trackpad burst into one intentional step and release capture so the visitor can continue natural page scrolling. Arrows and focused keyboard controls advance and reverse the same state. Touch swipes provide another path to those controls while preserving normal vertical scrolling. Announce selection changes through concise accessible content and leave focus stable during motion. Keep the five project states and emphasize the active project at every viewport width.

When Selected Work first comes into view, show “Hover over the wheel and scroll to explore my work.” for 5 seconds. Use an equivalent touch instruction on touch-first devices, such as “Swipe the wheel or tap the arrows to explore my work.” Use a brief transform or opacity reveal, preserve focus, and leave the arrows available after dismissal.

### Shared project transition · Phase 3

On activation from the wheel, make the active title or its containing element the shared visual target. Expand it from its current position, fade the other wheel elements, and interpolate the title’s position and scale to the project heading. Introduce the scrollable destination gradient and then reveal its metadata and content. The wheel title and case study heading can differ in wording, so the transition identity should follow the project slug. Keep the dedicated project URL in normal history.

Use Motion shared layout, coordinated route state, or an equivalent approach with an exit lifecycle and cancellation. Resolve rapid clicks, Back, and Forward by disposing the outgoing visual state and releasing any temporary input restraint. Focus the destination’s heading and allow ordinary scrolling after its reveal. For a dropdown or direct URL entrance, use a brief fade or positional movement. Reduced motion presents the settled destination immediately.

### About Me · Phase 4

Place “About Me” and the handwritten “Julie Off the Clock” subtitle above a two-column composition. The carousel occupies the left. Keep the portrait and its side neighbors inside a space reserved at initial render. Position the following interest lines on the right.

- Photography & Videography — documenting special moments
- Drinking Boba — in the lab making new concoctions
- Meal Prepping — I love food
- Traveling — Next up... Japan!

Use CSS perspective and a `preserve-3d` track with `rotateY` and `translateZ` positions around a ring. Center the active portrait in the foreground. Show adjacent photos smaller, behind and beside it, with layered depth and restrained shadows. Use responsive receiving frames and contain portrait crops where needed to retain proportions and meaningful detail.

Auto-advance every 4 seconds by default and wrap in both directions. Previous, next, and pause/play are focusable controls. Support swipe on the carousel and pause advancement while it is outside the viewport, while the visitor is engaging with it, and when explicitly paused. Under reduced motion, start without autoplay and switch immediately for manual navigation. Describe visible photos with concise, factual alt text. Keep hidden items out of the keyboard order.

### Skills · Phase 7

Use the employee ID badge and lanyard as the visual anchor, with the lanyard entering from above and the badge hanging on the left or moving to the center on mobile. Preserve the impression of a portrait card with a name and affiliation treatment, using only approved assets and copy. Leave the body content as a reusable placeholder pending Julie’s final skills and layout direction. Source affiliations remain reference material pending approval of their website treatment.

## Project page system · Phases 5 and 6

Use a shared editorial shell for the five routes in the wheel table. Set the large light heading at the top, aligned with an inset content grid. Directly below it, use one semi-transparent panel whose metadata can wrap into fewer columns as width decreases. Support role, timeline, tools, and team or company. Use a definition list or similarly semantic structure.

Create a continuous case study with appropriate numbered headings, readable text measures, optional second-column photographs or supporting text, and wider sections where the source composition uses the full canvas. Keep the page heading and metadata at the top and omit their repeated slide instances. Use figures with known captions, galleries with controls, and links to related projects. Provide a visible link back to Selected Work and restore the originating selection. Design project backgrounds so their glows begin near the top left and the page content scrolls with them.

- **Senior Capstone — Master Salons** · Open with metadata, sponsor introduction, and approved team imagery. Give the four problem threads and sponsor criteria distinct headings. Place any approved pre-Capstone website image alongside the problem section. Follow with goal, process, proposed digital reception kiosk, website and hardware, the sponsor-change challenge, and one Team Lead narrative with supporting images. Preserve the proposal status of the work as written.
- **Digital Asset Management** · Show metadata, problem, goal, documented limitations, process, post-deployment maintenance and ongoing tagging, and challenges. Use the asset inventory’s screenshot placeholder and link to Taxonomy & IT Solutions. Preserve the distinction between the deployed application and ongoing AI auto-tagging. Use the reviewed, public-safe copy.
- **Taxonomy & IT Solutions** · Pair the problem and goal with limitations at wide widths. Follow with the research-to-documentation progression and sections for centralizing assets, taxonomy, safe transfer, and documentation. Link to Digital Asset Management. Keep the proposed NAS and the implemented workstation-based alternative distinct.
- **SimVentions Mission Support** · Pair the overview and process with the source project list and video link, then use a gallery of cleared photos. Use factual alt text and publish captions or project associations only when the source establishes them. Open the supplied LinkedIn video link in a new tab with `rel="noopener noreferrer"`.
- **HackVA 2027** · Show the project heading and a minimal coming-soon state with navigation back to Selected Work.

## Responsive and accessibility behavior

- At desktop widths, preserve the asymmetric landing and wheel compositions, the two-column About section, and broad editorial insets. At tablet widths, reduce negative space and scale the heading, arc, and columns fluidly. At mobile widths, allow text to wrap, reflow case studies and About into one column, keep controls in reach, and preserve the wheel’s arc and selected row. Use intentional local clipping only where a design element crosses the frame.
- Use semantic landmarks and one primary heading per page, labelled controls, clear keyboard focus, predictable tab order, a skip-to-content link, and sufficient contrast for text, icons, and control states. Ensure tested combinations meet WCAG AA contrast, including during background interpolation, and offer touch targets of about 44 CSS pixels where space allows.
- Respect `prefers-reduced-motion` across scroll-linked changes, the intro, the wheel, route transitions, and photo autoplay. Interaction, navigation, and documents remain available in their settled states.
- Reserve image space at load, size approved photos for the displayed viewport, and provide meaningful alt text. Keep decorative glow and illustration details hidden from assistive technology when separate text already conveys their purpose.
- Verify fresh deep links and refreshes for every project, keyboard and touch interactions, history restoration, zoom and small widths, and reduced motion. Check that scrolling past the wheel works by mouse, trackpad, touch, and keyboard, and that section anchor headings remain visible.

## Motion defaults for visual review

| Event | Initial behavior |
| --- | --- |
| Intro white fade | 1 second from blackout into slide 1. |
| Slide 1 hold | 5 seconds from the end of the fade. |
| Intro rearrangement | About 1.2 seconds with smooth deceleration into slide 2. |
| Wheel instruction | 5 seconds from its first display. |
| Wheel selection | Short snap to the next marker after one intentional input. |
| Wheel-to-project transition | Prominent shared-element movement followed by a short content reveal. Direct and dropdown entrances are briefer. |
| About carousel | 4-second autoplay interval while visible and unpaused. |

Use an easing curve with smooth deceleration for settling elements and brief transitions for hover, keyboard focus, and the navigation reveal. Use shared duration tokens for comparable transitions and tune the unspecified durations during each phase’s visual review.
