# My $8,000 Serverless Mistake

A cautionary tale about Azure Functions, burstable scale-out, and a serverless bill that quietly burned ~$8,000 a month.

- **Abstract:** [ABSTRACT.md](ABSTRACT.md)
- **Sessionize:** [My $8,000 Serverless Mistake](https://sessionize.com/s/kevingriffin/my-8000-serverless-mistake/99944)

## Slides

- [PowerPoint (.pptx)](slides/My%20$8000%20Serverless%20Mistake%20v2.pptx)
- [Slide style guide](STYLE-GUIDE.md)

## Key Takeaways

- **Serverless shines for the right problems:** short-lived executions, event-driven triggers (HTTP, queue, blob), automatic retries, and burst scale from zero to max throughput on demand.
- **Serverless struggles with the wrong ones:** dependencies that can't handle cloud scale (database connection limits, API rate limits) and high-compute or high-memory workloads.
- **Beware "everything is a nail":** loving a tool too much is how you end up running work on it that it was never suited for.
- **Watch your bill:** budgets only alert, so pair them with anomaly alerts and an automated brake (action groups), and check Cost Analysis regularly, before the invoice does it for you.

## Resources

### Azure Functions

- [Azure Functions hosting options](https://learn.microsoft.com/azure/azure-functions/functions-scale?WT.mc_id=DOP-MVP-4029061)
- [Azure Functions Premium plan](https://learn.microsoft.com/azure/azure-functions/functions-premium-plan?WT.mc_id=DOP-MVP-4029061)
- [Flex Consumption plan](https://learn.microsoft.com/azure/azure-functions/flex-consumption-plan?WT.mc_id=DOP-MVP-4029061)
- [Event-driven scaling (including limiting scale-out)](https://learn.microsoft.com/azure/azure-functions/event-driven-scaling?WT.mc_id=DOP-MVP-4029061)
- [Best practices for reliable Azure Functions](https://learn.microsoft.com/azure/azure-functions/functions-best-practices?WT.mc_id=DOP-MVP-4029061)

### Cost Management

- [Create and manage budgets](https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets?WT.mc_id=DOP-MVP-4029061)
- [Monitor usage and spending with cost alerts](https://learn.microsoft.com/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending?WT.mc_id=DOP-MVP-4029061)
- [Quickstart: Cost Analysis](https://learn.microsoft.com/azure/cost-management-billing/costs/quick-acm-cost-analysis?WT.mc_id=DOP-MVP-4029061)

## Delivered At

| Event | Date | Location |
| --- | --- | --- |
| [The Cloud & AI Summit 2026](https://www.cloudandaisummit.com/) | September 30 – October 2, 2026 | St. Charles, MO |
| The Commit Your Code Conference | December 2024 | Dallas, TX |

## About the Speaker

<img src="assets/kevin-griffin.png" alt="Kevin Griffin" width="160" align="right" />

**Kevin Griffin** — Microsoft MVP | .NET & Azure Consultant

Kevin Griffin has been running production .NET applications and teaching developers for over two decades. A Microsoft MVP specializing in .NET and Microsoft Azure, Kevin brings real-world experience from consulting and his own SaaS products. He's hosted the Hampton Roads .NET User Group since 2009 and founded RevolutionVA, a nonprofit supporting software development education in southeast Virginia. Kevin's talks blend hard-won lessons from production systems with practical advice you can use Monday morning.

- Website: [consultwithgriff.com](https://consultwithgriff.com)
- Bluesky: [@consultwithgriff.com](https://bsky.app/profile/consultwithgriff.com)
- LinkedIn: [1kevgriff](https://www.linkedin.com/in/1kevgriff)
- X: [@1kevgriff](https://x.com/1kevgriff)
- Instagram: [@1kevgriff](https://www.instagram.com/1kevgriff/)
- GitHub: [1kevgriff](https://github.com/1kevgriff)
- Sessionize: [kevingriffin](https://sessionize.com/kevingriffin/)

## License

Copyright © Kevin Griffin. All rights reserved.
