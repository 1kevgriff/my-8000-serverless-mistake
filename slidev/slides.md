---
theme: default
title: My $8,000 Serverless Mistake
author: Kevin Griffin
colorSchema: light
aspectRatio: 16/9
canvasWidth: 980
transition: fade
fonts:
  sans: Manrope
  mono: JetBrains Mono
  weights: '400,500,700,800'
layout: cover
eyebrow: Serverless · Cost · Architecture
subtitle: When the cloud bill is the real exception handler
byline: <b>Kevin Griffin</b> · 16× Microsoft MVP · .NET + Azure
---

# My $8,000 Serverless Mistake

<!--
Cold open: "I'm a member of an exclusive club — the accidentally-overspent-on-cloud club." Land the $8,000 now; it's the promise of the talk. 90-min slot: take time to settle the room. Bio is light here (16× MVP, .NET + Azure) — credibility, then move.
-->

---
layout: quote
---

I have a severe Azure bias.

<!--
The disclaimer, played straight — get the laugh. Do NOT preview the AWS story; it lands as a surprise in Part 5.
-->

---
layout: split
eyebrow: Roadmap
heading: What we'll cover
---

1. **The promise of serverless**
   …and what it actually is under the hood.
2. **Where it shines — and where it bankrupts you**
3. **The real bills I've paid**
4. **The fix, and how to avoid the club**
   Right tool + guardrails.

<!--
Four beats: what serverless actually is; where it shines vs bankrupts you; the real bills I've paid; the fix + how to avoid the club. Keep it quick — it's a map, not a stop.
-->

---
layout: section
number: 1
---

The promise<br>of serverless

<!--
Section 01. Set up the seductive pitch you're about to complicate.
-->

---
layout: quote
---

“It's just someone else's servers.”

<!--
The marketing promise: no infra, infinite scale, pay-per-use. Say it like you believed it — because you did.
-->

---
layout: split
eyebrow: Mental model
heading: Scale-out = more meters
---

- **More load spins up more hosts**
  Each host runs your functions in parallel.
- **Every instance is its own meter**
  Hold onto this — it detonates in the $8k story.
- **Trigger ⇒ Action**
  Blob / Queue / HTTP triggers invoke your functions.

<!--
Mental model that pays off later: more load → more hosts → each host is its own meter running in parallel. PLANT it lightly here; you detonate it in the $8k story. Then Trigger ⇒ Action: Blob / Queue / HTTP.
-->

---
layout: light
---

# The Azure Functions plans

| Plan                     |                  Billing model |           RAM / disk |      →0? |
| ------------------------ | -----------------------------: | -------------------: | -------: |
| Consumption (legacy)     |             GB-seconds + calls |     1.5 GB / ~0.5 GB |      Yes |
| Flex Consumption         |           Exec-time + baseline |          up to 4 GB |      Yes |
| **Elastic Premium EP1**  | **Per-sec × instances, ≥1 warm** | **3.5 GB / 250 GB** |   **No** |
| Dedicated                |       Flat — pay for the plan |        up to 256 GB |       No |
| Container Apps           |    You set min/max replicas |           you choose |    min=0 |

<!--
The plans landscape — the setup that makes the $8k land. Audience must know EP1 exists and how it bills. EP1 (highlighted row): per-second, across EVERY instance, never scales to zero, ≥1 always warm. Flex Consumption is today's default; Consumption is legacy; Container Apps — remember that name, it's the fix.
-->

---
layout: quote
---

I didn't move to EP1 for scale. I moved for RAM and a hard drive.

<!--
The hook and the whole trap: I moved to EP1 for RAM and a hard drive — TWICE, two different apps — not for scale. EP1's billing came along for the ride and I didn't read the fine print.
-->

---
layout: split
eyebrow: The fine print
heading: What EP1 really bills
---

- **Per second, at a premium rate**
- **Across every instance it scales out to**
- **Never below one always-warm instance**

> “More predictable” ≠ cheaper for continuous work.

<!--
Drive it home: "more predictable" pricing SOUNDS safe, but it bills per second, per instance, for every instance, and never drops below one warm. Gotcha: P-prefix SKUs (P1V2) are Dedicated, not Elastic Premium.
-->

---
layout: section
number: 2
---

When serverless<br>shines

<!--
Section 02. Pivot to genuine praise — this earns you the right to criticize later.
-->

---
layout: split
eyebrow: Great fit
heading: Serverless at its best
---

1. **Short-lived executions**
   Seconds to minutes; ~10-min ceiling.
2. **No application-host ceremony**
   Triggers + automatic retries, free.
3. **Burstable scale, scale-to-zero**
   Near-zero at idle, knob to 11 on demand.

<!--
Where serverless is beautiful: short-lived executions (~10-min ceiling), no host ceremony + free retries, burstable scale-to-zero. Name a couple of real good fits to make it tangible.
-->

---
layout: quote
---

100,000 items on a queue — drained in minutes.

<!--
Marquee win — tell it as a love story: 100,000 items on a queue, Functions fan out and drain it fast, scale to zero when done. "This is the moment I fell in love with the tool."
-->

---
layout: split
eyebrow: The built-in warning
heading: …but SQL became the bottleneck
---

- **Functions scaled to 11**
  SQL connection limits did not.
- **You scale the part you control**
  …and stampede the part you don't.

<!--
The built-in warning: SQL became the bottleneck — Functions scaled to 11, SQL did not. Don't resolve it; let it hang as the bridge into Part 3.
-->

---
layout: section
number: 3
---

When it's the<br>wrong tool

<!--
Section 03. The turn: the problem isn't serverless — it's loving it too much.
-->

---
layout: split
eyebrow: Failure mode 1
heading: Dependencies can't scale
---

- **Database connection caps**
- **Third-party API rate limits**
- **Serverless stampedes them**
  Remember SQL choking while Functions scaled out.

<!--
Failure mode 1 — dependencies can't scale. Callback: "Remember SQL choking? That's this, exactly." DB connection caps, API rate limits. You scale the part you control and stampede the part you don't.
-->

---
layout: split
eyebrow: Taming it
heading: Put a governor on it
---

1. **Cap the scale-out / concurrency**
2. **Batch the work**
   N items per invocation, not one-per.
3. **Queue-based load leveling**
   The queue is your shock absorber.

<!--
Keep it cloud-agnostic — concepts, not Azure knobs: cap concurrency, batch the work, queue-based load leveling. "The queue is your shock absorber. The fix isn't don't-use-serverless — it's put a governor on it."
-->

---
layout: quote
---

When all you have is a Function, everything looks like a trigger.

<!--
The thesis slide. Maslow's hammer: when all you have is a Function, everything looks like a trigger. (A new toy makes you want to solve everything with it.) Let it breathe.
-->

---
layout: split
eyebrow: Failure mode 2
heading: Heavy, long-running work
---

- **Nothing downstream to overwhelm — still a bad fit**
- **You climb to an expensive always-warm plan for the resources**
- **Burst pricing works against you**

> This was my exact profile.

<!--
Failure mode 2 — its OWN beat, distinct from dependencies: high-compute / high-memory / long-running. Even with nothing downstream to overwhelm, you climb to an expensive always-warm plan for the resources and burst pricing fights you. This was my exact profile — ramp into the story.
-->

---
layout: section
number: 4
---

The $8,000<br>mistake

<!--
Section 04 — the heart of the talk. Most time, most emotion. Slow down.
-->

---
layout: split
eyebrow: The workload
heading: Continuous, memory-hungry
---

- **Pulled data from a third-party ticketing API, then processed it**
- **Scheduling forced it to run continuously — a constant grind**
- **Memory-heavy by nature**

<!--
The workload: pulled data from a third-party ticketing API and processed it; scheduling forced it to run continuously — a constant grind, memory-heavy. Genericize the vendor; never name the company.
-->

---
layout: split
eyebrow: The trap
heading: OOM → the easy button
---

- **Symptom: memory limits, OutOfMemory crashes on Consumption**
- **Fix: a teammate upgraded Consumption → EP1. Crash gone.**
- **Technically correct. Completely reasonable. The trap.**

<!--
The trap: OOM crashes on Consumption → a teammate upgraded to EP1 and the crash vanished. It WORKED. It was reasonable. That's exactly why it's a trap.
-->

---
layout: quote
---

We didn't fix a problem. We converted a crash into a 24/7 subscription to burning compute.

<!--
Detonate the meter plant: we put a CONTINUOUS workload on a meter that never stops. "We didn't fix a problem — we converted a crash into a 24/7 subscription to burning compute."
-->

---
layout: stat
stat: ~$8,000
---

## Compute quietly burned in the first month or two

A continuous workload on a meter that never stops.

<!--
The number: ~$8,000, discovered the first month or two — billed the whole time nobody was looking. Say the real figure or ~$8k (your call). Figures are fine to show; no company/subscription name.
-->

---
layout: quote
---

It wasn't a bug. The system did exactly what we told it to.

<!--
Root cause, plainly: not a bug. The system did exactly what we told it. We told a premium always-on machine to run forever — and it billed us for forever.
-->

---
layout: split
eyebrow: The tell
heading: We did it again — for disk
---

- **A different app outgrew its disk allocation on deploy**
- **Cleaning old deploys was fiddly and unreliable**
- **So we reached for EP1 again. That's the hammer.**

> Modern fix: run-from-package.

<!--
The tell — we did it again, for disk. A different app outgrew its disk on deploy; cleaning old deploys was fiddly and unreliable; so we reached for EP1 again. That's the hammer. (Modern fix: run-from-package — verify before stage.)
-->

---
layout: section
number: 5
---

It's not<br>just Azure

<!--
Section 05 — disarm the bias joke. "You might think I just can't drive Azure. So let me indict myself on AWS too." Lighter story (~7-8 min) — frees time for Q&A.
-->

---
layout: light
---

# The AWS spike — AWS Lambda (US West / Oregon)

| Billing period           |    Bill total |        Lambda | GB-seconds |
| ------------------------ | ------------: | ------------: | ---------: |
| Jan 2025 (normal)        |        $42.27 |        $25.13 |     ~1.4M |
| **Feb 2025 (spike)**     | **$6,654.14** | **$6,613.76** |  **~396M** |
| Mar 2025 (recovered)     |       $207.71 |       $181.75 |    ~10.7M |

<!--
Real billed data. Normal ~$42/mo; the spike (Feb usage, billed Mar 1) was $6,654; recovered to ~$208. Cite the BILLING PERIOD, not the file name (the PDFs are named off-by-one). Redact account ID/name on any screenshot.
-->

---
layout: quote
---

Requests barely doubled. Compute went up ~283×.

<!--
The smoking gun: requests barely doubled, but GB-seconds went up ~283× (1.4M → 396M). This wasn't traffic — each execution ate the compute. GB-seconds = memory × duration.
-->

---
layout: split
eyebrow: Same mistake, different cloud
heading: Resource × time, again
---

- **GB-seconds = memory × duration — not request count**
- **A contractor's config change left it running away**
- **Code review catches bugs. It does not catch cost regressions.**

<!--
Same root cause as EP1: resource × time, different cloud. A contractor's config did it — and code review catches bugs, not COST regressions. That's the reason for budgets/anomaly alerts in Part 7.
-->

---
layout: quote
---

AWS forgave it — ~99% credited back. That was luck, not a strategy.

<!--
AWS issued a credit memo (~99% forgiven) — net ~$71 paid. Say it clearly: that was LUCK, not a strategy. Don't count on a refund.
-->

---
layout: section
number: 6
---

The fix:<br>containers

<!--
Section 06 — turn from scar to solution.
-->

---
layout: split
eyebrow: Where it landed
heading: Azure Container Apps
---

- **Cheaper-per-unit machines (ACA + ACI) for work that runs 100% of the time**
- **We built our own framework: cron + queue / Service Bus triggers**
- **Still scales — start at 1 instance, grow to 2, 3, more**

> A fleet of containers for a fraction of one EP1.

<!--
Azure Container Apps + Container Instances. Work ran 100% of the time (cron + queue / Service Bus), so it wanted bounded, always-on compute. We built our own framework; start at 1 instance, scale to 2, 3, more. A fleet of containers for a fraction of one EP1.
-->

---
layout: compare
---

# EP1 vs. Container Apps

::left::

### Elastic Premium (EP1)

Per-second, always-warm

Premium rate, even at idle

No cost ceiling you internalized

::right::

### Azure Container Apps

Right-sized, cheaper per unit

Bill matches actual use

Min/max replicas you choose

<!--
The compare slide does the work: EP1 (per-second, always-warm, no ceiling you internalized) vs Container Apps (right-sized, bill matches use, min/max replicas you choose).
-->

---
layout: stat
stat: −54%
---

## ~$8,000/mo → ~$3,650/mo

~$53K/year back in the budget — same workloads, durable 4+ months.

<!--
The win in one number: ~$8,000/mo → ~$3,650/mo, −54%, ~$53K/year, durable 4+ months. Figures fine; no subscription name. Decide exact vs rounded ("we cut it in half").
-->

---
layout: split
eyebrow: Take-home
heading: Should I go serverless?
---

1. **Finishes in seconds-to-minutes?**
2. **Low / moderate CPU & memory?**
3. **Dependencies survive max scale-out?**
4. **Bursty, not steady? And costed at peak?**
5. **Budgets + alerts wired up before go-live?**

<!--
Take-home checklist — the photograph-this slide. Walk the five questions; if any answer is "no," reconsider serverless for that workload.
-->

---
layout: section
number: 7
---

Watch<br>your bill

<!--
Section 07 — the landing.
-->

---
layout: quote
---

Azure budgets do NOT stop your spending.

<!--
Myth-buster: budgets only NOTIFY — resources aren't affected, spend isn't stopped, and cost data lags 8-24h. A budget alone would NOT have caught my $8k.
-->

---
layout: split
eyebrow: The governance stack
heading: Anomaly alerts first
---

- **Anomaly alerts — catch the spike that day, not month-end**
  Would have caught BOTH stories.
- **Budgets — they alert; they don't stop**
- **Action-group automation — the actual brake**
- **Cost Analysis as a habit + tagging**

<!--
The ONE thing: anomaly alerts. Both stories failed the same way — nobody knew until the invoice. Anomaly detection catches BOTH, the day the spike starts. "If you do one thing after this talk, turn it on." Then budgets (alert), action-group automation (the actual brake), Cost Analysis + tagging.
-->

---
layout: split
eyebrow: Modern practice
heading: AI-backed daily cost review
---

```bash
# Claude Code + Azure CLI, ~daily

az costmanagement query \
  --type ActualCost \
  --scope /subscriptions/<id>

# → plain-English findings + fixes
# the $53K report came from this
```

<!--
Modern, distinctive practice: AI-backed daily cost review — Claude Code + Azure CLI pull each subscription's costs, analyze, and recommend. "The $53K migration report came from exactly this workflow." Turns governance from a monthly chore into a daily signal.
-->

---
layout: split
eyebrow: Conclusions
heading: What to take with you
---

- **Serverless is amazing — for the right problems**
- **Avoid “everything is a nail” (RAM, disk, just bump the plan)**
- **Watch your bill — watching ≠ stopping; build the brake**
- **Two clouds, one lesson: it does exactly what you tell it**

<!--
Conclusions: serverless is great for the RIGHT problems; avoid "everything is a nail" (RAM, disk, just bump the plan); watch your bill — but watching ≠ stopping, build the brake and the alerts; two clouds, one lesson — it does exactly what you tell it.
-->

---
layout: quote
---

An $8,000 mistake. A $53,000-a-year fix.

<!--
Close on the WIN, not the scar: "An $8,000 mistake. A $53,000-a-year fix." Recap the arc — wrong tool → real bill → right tool → guardrails. Then the callback: "Welcome to the club — dues are about $8,000, but yours can be free if you remember this talk."
-->

---
layout: closing
---

# Let's keep talking.

### [consultwithgriff.com](https://consultwithgriff.com)

- [@1kevgriff](https://x.com/1kevgriff)
- [linkedin.com/in/1kevgriff](https://www.linkedin.com/in/1kevgriff)
- [github.com/1kevgriff](https://github.com/1kevgriff)
- [youtube.com/@consultwithgriff](https://youtube.com/@consultwithgriff)
- [@consultwithgriff.com](https://bsky.app/profile/consultwithgriff.com)

<!--
Thank them; point to the site and socials. consultwithgriff.com. Take Q&A here (you have ~5-8 min of slack from the lighter AWS story).
-->
