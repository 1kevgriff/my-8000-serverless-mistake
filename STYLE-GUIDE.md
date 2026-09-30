# Slide Style Guide

Derived from `slides/My $8000 Serverless Mistake v2.pptx` (42 slides,
16:9, 13.33" × 7.5"). Use it to extend this deck or to build new talks
in the same visual system.

## Pre-Talk Checklist

- Embed fonts in the file (see [Typography](#typography)).
- Confirm every split slide's rule sits 0.20" under its title (see
  [Layout Grid](#layout-grid)).
- Check that speaker notes exist on every slide.

## Principles

- **One idea per slide.** Statements, quotes, and big numbers each get a
  full slide.
- **Navy dominates, yellow signals.** Yellow marks what matters: numbers,
  kickers, bullets, and the edge stripe. Never use it for body copy.
- **Dark for punches, light for detail.** Statements, quotes, and section
  breaks sit on full navy. Lists, tables, and comparisons sit on paper.
- **Bold claim, quiet gloss.** Each point is one bold line plus an
  optional muted sentence below it.

## Color

| Token | Hex | Use |
| --- | --- | --- |
| Navy | `16303F` | Dominant background, text on light, table headers |
| Signal Yellow | `F4C233` | Stripe, kickers, big numbers, bullet markers |
| Deep Gold | `B08900` | List numbers (`01`–`05`) on light backgrounds |
| Paper | `F7F6F3` | Light background, table rows |
| Paper Alt | `ECEAE4` | Zebra rows in tables |
| Slate | `6A7B85` | Gloss lines and secondary table text on light |
| Mist | `A9C0CD` | Subtitles and secondary text on navy |
| Steel | `7E96A3` | Footer on navy, code text |
| Pewter | `9AA7AE` | Footer on light |
| White | `FFFFFF` | Headlines on navy |

The theme color scheme ("Serverless Mistake") carries this palette:
`dk1`/`dk2` Navy, `lt2` Paper, `accent1` Signal Yellow, `accent2` Deep
Gold, and `accent3`–`accent6` Slate, Mist, Steel, and Pewter. Existing
slides still hard-code their hex values. New shapes pick up the theme.

## Typography

- **Manrope** handles everything, and it's almost always bold.
  Regular weight is only for glosses, subtitles, and footers.
- **JetBrains Mono** is only for code or CLI blocks.
- Titles and statements are left-aligned and in sentence case. Nothing
  is centered.

Manrope is set as the theme's heading and body font. Neither Manrope
nor JetBrains Mono ships with Office, so embed them before presenting
anywhere else (File → Options → Save → Embed fonts in the file → all
characters).

| Role | Size | Weight | Color | Line spacing |
| --- | --- | --- | --- | --- |
| Hero number | 140pt | Bold | Signal Yellow | 85% |
| Section number | 100pt | Bold | Signal Yellow | — |
| Quote glyph `“` | 100pt | Bold | Signal Yellow | — |
| Cover title | 52pt | Bold | White | 102% |
| Statement / quote | 46pt | Bold | White | — |
| Section title | 42pt | Bold | White | — |
| Panel title | 38pt (30pt narrow) | Bold | White | 105% |
| Full-width title | 35–38pt | Bold | Navy | — |
| Hero caption | 32pt | Bold | White | 110% |
| List item | 22pt | Bold | Navy | 110% |
| Subtitle (cover) | 19pt | Regular | Mist | 140% |
| Hero sub-caption | 18pt | Regular | Mist | 140% |
| Gloss line | 17pt | Regular | Slate | 135% |
| Table text | 15pt | Bold / Regular | Navy / Slate | — |
| Code | 14pt | Regular (Mono) | Steel | — |
| Kicker | 13pt | Bold, ALL CAPS | Signal Yellow | — |
| Footer / page no. | 12pt | Regular / Bold | See Footer | — |

### List Rhythm

- Marker: `▪` plus two spaces, in Signal Yellow. Numbered lists use `01`
  plus two spaces, in Deep Gold.
- 22pt of space above each item, and 4pt above its gloss line.
- Three items is the norm and five is the maximum.

## Layout Grid

- Outer margin is 0.83"–0.90" on the left, and content starts at y = 0.90".
- The footer baseline row sits at y = 6.94".
- The split-panel content column starts at x = 5.42" and is 7.08" wide.
- The accent rule is 0.67" × 0.04" in Signal Yellow. It only appears
  under a panel title or above the closing title.
- Place the rule 0.20" below the bottom of the title's last line, not
  at a fixed y. That puts it at 2.40", 2.81", or 3.06" for panel titles
  of two lines, two lines with a kicker, or three lines.
- Keep panel titles to three lines at 38pt in the 4.72" panel.

## Slide Types

| # | Type | Background | Composition | Example slides |
| --- | --- | --- | --- | --- |
| 1 | Cover | Navy panel (7.92") + Paper | Title, subtitle, byline; headshot bottom-right | 1 |
| 2 | Statement | Navy + 0.25" yellow left stripe | 46pt line at x 1.11", upper-middle | 2 |
| 3 | Quote | Navy + stripe | Statement + 100pt `“` above | 5, 8, 12, 17, 22, 24, 28, 30, 37, 41 |
| 4 | Section break | Navy + stripe | `0N` at 100pt, title at 42pt below | 4, 10, 14, 19, 26, 31, 36 |
| 5 | Split list | Navy panel (4.72") + Paper | Optional kicker, title, rule left; list right | 3, 6, 9, 11, 13, 15, 16, 18, 20, 21, 25, 29, 32, 35, 38, 40 |
| 6 | Hero number | Navy + stripe | 140pt figure, 32pt caption, 18pt gloss | 23, 34 |
| 7 | Data table | Paper | 35pt navy title; navy header row with yellow text; zebra rows | 7, 27 |
| 8 | Comparison | Paper; navy left half below title | Bad option on navy (yellow heading), good option on paper (navy heading) | 33 |
| 9 | Code panel | Narrow navy panel (3.89") + Paper | Navy code card, JetBrains Mono | 39 |
| 10 | Closing | Navy with diagonal Paper wedge | Rule, 52pt CTA, URL, contact list, headshot | 42 |

### Section Numbering

- Sections run `01`–`07` and are always two digits.
- The section-break slide is the only place a section number appears at
  100pt.

## Footer

- Every slide except the cover (1) and the closing slide (42) carries a
  page number. It is right-aligned at x = 11.81", 12pt bold, and two
  digits (`07`).
- The left side reads `Kevin Griffin · consultwithgriff.com` at 12pt.
  It is omitted on full-width paper slides (7, 27, 33).

| Background | Footer text | Page number |
| --- | --- | --- |
| Navy | Steel `7E96A3` | Signal Yellow |
| Paper | Pewter `9AA7AE` | Navy |

On split slides the footer starts at the content column (x = 5.42"), not
at the slide edge.

## Copy Voice

- **Kickers** are optional: two or three words in ALL CAPS that frame
  the slide, such as `ROADMAP`, `THE FINE PRINT`, `TAKE-HOME`. Use them
  sparingly (four slides in this deck).
- **Titles** are short and opinionated, like a claim or a punchline:
  "What EP1 really bills", "OOM → the easy button".
- **Statements** are first-person and confessional, one or two
  sentences, ending with a period.
- **Numbers** carry commas and currency (`$8,000`). Use `~` for
  approximations (`~283×`), and real symbols instead of spelled-out
  words: `×`, `→`, `⇒`, `≠`, `—`.
- **Typography** uses curly quotes and an em dash with spaces (` — `).
- **Speaker notes** go on every slide. They carry delivery cues ("get
  the laugh", "do NOT preview…"), not a script to read aloud.
