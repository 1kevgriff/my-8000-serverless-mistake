# Content Gaps Plan

Result of a gap interview on 2026-09-30, grounded in Azure Cost Management
data for the affected subscription (last 13 months). Figures are Cost
Management actuals, rounded.

## Problem Statement

The deck tells the $8,000 story as "we moved to an always-warm plan." The
billing data shows something sharper: the plan scaled out to roughly 41 EP1
instances and ran there around the clock. The deck also presents the
container move as a clean ending, while the plan still exists and relapsed
in May 2026. A mixed crowd will also ask "why not Flex Consumption?", and
the deck doesn't answer.

## Target Audience

Mixed conference crowd: story first, with enough depth to be credible.
Slot length varies by event; one deck, trimmed live.

## Core Additions

1. **The real math (new slide after 23).** Dec 2025, one EP1 plan:
   30,504 vCPU-hours ($5,186) + 106,764 GB-hours of memory ($1,303) =
   $6,489. At 744 hours that is ~41 EP1 instances on average, 24/7.
   Pays off the "every instance is its own meter" setup from slide 6.
   The team knew it scaled out; nobody connected scale to cost.
2. **Discovery beat (before slide 23).** Invoice shock: nobody knew until
   the bill arrived. One slide or a line of narration.
3. **"What I'd try today" (one slide, near 32).** Flex Consumption,
   Microsoft's replacement for legacy Consumption, offers up to 4 GB of
   memory without an always-warm premium plan, which removes the exact
   OOM trap on slide 21. It likely wasn't available when we upgraded.
   Still bills memory × run time, so continuous work belongs in containers.
4. **Cost of the fix (slide 32 or 33).** Engineering time to build the
   cron + queue framework, and built-ins we had to rebuild (trigger
   bindings, retries, poison handling). Worth it anyway.
5. **The fix is ongoing (near 34 or 38).** The EP1 plan still runs: it
   averaged ~11 instances in April 2026, ~21 in May, and Functions still
   costs ~$1.8K a month. The monitoring section exists because the problem
   comes back.

## Timeline From Billing Data

| Month | Functions total | EP1 plan avg instances |
| --- | --- | --- |
| Sep 2025 | $5.2K | not queried |
| Dec 2025 (peak) | $7.9K | ~41 |
| Feb–Apr 2026 | ~$2.5–2.8K | ~11 (Apr) |
| May 2026 | $6.0K | ~21 (month avg), plus a new pay-per-use app ($1.3K) |
| Jun–Sep 2026 | ~$1.8–1.9K | not queried |

Container Apps grew from ~$0.5K to ~$2.2K a month over the same period.

Daily detail around the relapse: ~13 instances on Apr 20, ~20 from Apr 22,
~38–40 from May 7–17 (back at the December peak), then ~4–5 from May 19
onward.

## Status

Built on 2026-09-30 (deck now 46 slides): invoice beat (23), ~40 instances
(25), Flex "Start with Flex" (34), cost of the fix on the Container Apps
slide (35), relapse statement (39).

## Ruled Out

- A separate 45-minute deck or optional modules. The deck stays single and
  gets trimmed live.
- A deep Flex vs EP1 vs Container Apps cost comparison. Flex gets one slide.
- Naming the company, subscription, or resources on slides.

## Open Questions

- **When did the team upgrade to EP1?** Flex went GA in late 2024. Billing
  data only reaches Sep 2025, when the plan was already at $5.2K.
- **What happened on May 18–19, 2026?** The plan dropped from ~40
  instances to ~5 overnight. That fix is the payoff for slide 39.
- **Source the savings on slide 37 (was 34).** There is no migration
  report, so "~$8,000 → ~$3,650/mo", −54%, and ~$52K/year need a source.
  Functions plus Container Apps was ~$8.5K in Dec 2025 and ~$4.0K in
  Aug 2026.
- **Slide 43's "the $52K report came from this"** claims a report that
  doesn't exist.
