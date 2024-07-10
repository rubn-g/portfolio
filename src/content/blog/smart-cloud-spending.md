---
title: "Smart cloud spending: Do more with less"
description: "In my career, simplifying and optimizing AWS expenditures has been a recurring challenge I've tackled for several companies. Recently, I've cut our current company's cloud spending by three times through a blend of strategic optimizations and technological tweaks."
pubDate: "Jul 10 2024"
heroImage: "/posts/aws-cost.jpg"
tags: ["AWS"]
---

I’ve worn many hats over my career, but one task keeps reappearing no matter where I go: reducing AWS cloud spending. Cloud costs can quickly spiral out of control, particularly if developers aren’t familiar with the nuances of AWS pricing and optimization. Recently, I managed to cut our AWS costs by three times, and I believe these insights could benefit many others facing the same challenge.

### Knowledge gaps and overengineering
One of the primary reasons for inflated cloud bills is a lack of deep understanding of cloud services.

For instance, many developers unnecessarily use API Gateway when a simple Lambda function with a URL would suffice - and it's free!

Additionally, blindly following AWS documentation can lead to overuse of services, as it often suggests utilizing a range of services, some of which can be overkill for simpler tasks, when cheaper or free alternatives exist.

### Underutilization of cost-saving features

- **Spot instances and Fargate Spot**: Many teams overlook spot instances for their compute needs. These instances can offer significant savings, up to 4x.
- **Misuse of Load Balancers**: Instead of deploying multiple Load Balancers, one can leverage a single Application Load Balancer with routing rules to manage different services.
- **Ignoring reserved instances**: Reserved Instances or compute capacity reservations can considerably reduce costs for predictable workloads.

### Infrastructure inefficiencies
I've seen companies using multiple Load Balancers when a single Application Load Balancer with proper routing rules would do the job.

Another frequent problem is the deployment of oversized computing instances. Rather than opting for large, costly machines, consider utilizing smaller instances equipped with autoscaling capabilities. This strategy ensures that you only pay for the resources you use. The cost of autoscaling is almost negligible, you only incur charges for CloudWatch alerts, provided you exceed the free tier offerings. Additionally, while you would still need to pay for the load balancer, in every case I've observed, this expense is substantially lower than the cost associated with large instances.

### Hidden costs
Egress traffic is often underestimated, yet it can markedly inflate your cloud expenses. Utilizing a CDN like Cloudflare can significantly curb these costs by leveraging free caching and reducing egress traffic. Additionally, Cloudflare offers robust DDoS protection, safeguarding your cloud budget from unexpected spikes due to surges in request volume.

Moreover, cloud service pricing pages can be deceptively opaque. Take, for instance, the pricing details for RDS Aurora Serverless v2. While it displays pricing based on half a vCPU's usage, it neglects to clearly state that the minimum resource requirement is actually 2 vCPUs. This crucial piece of information quadruples the minimum expense, catching users off guard with higher-than-anticipated costs.

### Suboptimal database usage**
Databases frequently suffer from over-provisioning, resulting in unnecessary costs for idle resources. Properly adjusting database capacity can significantly cut expenses. Additionally, optimizing queries by leveraging query insights and implementing appropriate indexes can lower CPU and memory usage. Adding a caching layer is another effective strategy that can reduce expenses by decreasing database load and size.

Once these foundational steps are taken, using autoscaled read replicas can further optimize resource usage. However, integrating read replicas necessitates architectural changes to redirect read queries, handle replication lag, and address other complexities.

### Data management
Excessive data storage in S3 is often a major cost driver. Implementing effective data lifecycle management strategies can result in significant savings. Because the cost per gigabyte is relatively low, many companies neglect the importance of a cleanup process and continuously add data to their S3 buckets. Over time, this can lead to bloated storage usage and escalating costs.

### Inter-dependent services
Some AWS services require additional components, adding to the overall cost. For example, NAT Gateway is required for advanced networking scenarios. Make sure you read the documentation for each service you will start using to determine if it has dependencies.

### Cloud vs. Bare metal
Interestingly, I've noticed a trend of companies realizing that sometimes, the cloud isn't the most cost-effective solution. In some cases, moving certain workloads back on-premise can result in significant savings and reduced complexity.

### The Cloud Isn’t Always the Best Answer

A final point worth mentioning: Over the past few years, many companies have realized that the cloud isn't always the best or most economical option for their needs. While AWS offers unbeatable flexibility and scalability, the costs can be prohibitive for certain use-cases, and bare metal servers or hybrid solutions might prove more cost-effective.

Also, the variety of services offered by AWS can be overwhelming, making it difficult to know where to start or what to choose, adding to the complexity of the decision-making process and the architecture of the overall solution.

### Closing Thoughts

Cutting down on AWS expenses demands a comprehensive understanding of the services you utilize and consistent monitoring of your costs. By keeping a close watch on your spending, you can easily pinpoint areas ripe for optimization and educating your team about the financial implications of the services they deploy, can empower them to make smarter, budget-conscious decisions.

---

Feel free to leave any questions or comments if you’re grappling with high AWS costs!
