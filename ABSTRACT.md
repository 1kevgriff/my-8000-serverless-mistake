# My $8,000 Serverless Mistake

In the right circumstances, serverless technology can be a fantastic tool in your developer toolbox. I went deep down the serverless rabbit hole with Azure Functions, and it earned its place: I watched it drain 100,000 items off a queue in minutes. I still recommend it for the right workloads. But on my journey, I also found out what happens when you use it for the wrong ones.

This talk follows how our use of Azure Functions grew from bursty queue processing into continuous, memory-hungry workloads. When we upgraded to Elastic Premium to stop the crashes, it worked, and it quietly started burning about $8,000 a month in compute. I loved the tool too much to ask whether it was the right one. We'll cover how the plans actually bill, why scaling out can stampede the systems behind you, a second cloud-cost surprise, and how moving those workloads to containers cut our monthly bill by more than half.

You'll leave with a checklist for deciding whether a workload belongs on serverless, ways to put a governor on scale-out, and the guardrails (budgets, anomaly alerts, and an automated brake) that catch a runaway bill before the invoice does.
