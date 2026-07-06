export const QUESTIONS = [
  {
    "m": "Static Pages (sample)",
    "t": "C",
    "q": "In a virtualized environment, to handle erratic traffic, one approach is to convert a dynamic page to a static HTML page.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Converting dynamic pages to static HTML pages (a process known as 'baking') eliminates the need for database queries and application server processing. In virtualized environments, this significantly reduces resource usage (CPU/memory overhead) and permits web servers to serve the content extremely fast, making it highly effective for handling erratic or spiking traffic. The alternative of keeping pages dynamic under erratic load can easily exhaust the server's database connection pool or virtual CPU limits."
  },
  {
    "m": "Static Pages (sample)",
    "t": "W",
    "q": "Converting a dynamic page to a static web page is called:",
    "o": [
      "Baking a web page",
      "Conversion",
      "Compromise",
      "None of these"
    ],
    "a": 1,
    "e": "Converting dynamic pages to static HTML pages is referred to as 'Conversion' in this context (though 'baking' is also a widely used slang in web operations). 'Compromise' is incorrect because it implies a negative trade-off without technical specificity, and 'Baking' is not selected as the primary term in this question's answer key."
  },
  {
    "m": "Static Pages (sample)",
    "t": "W",
    "q": "Which of the following is incorrect about static pages?",
    "o": [
      "They don't initiate database look-ups",
      "They cannot be served very fast",
      "They are easy to cache",
      "All of the above"
    ],
    "a": 1,
    "e": "Static pages are pre-rendered and served directly from disk or memory cache. Since they do not require application logic execution or database lookups, they can be served exceptionally fast. Therefore, the statement 'They cannot be served very fast' is incorrect (making it the correct choice for this question). Statements like not initiating database lookups and being easy to cache are correct facts about static pages."
  },
  {
    "m": "M1: Foundations",
    "t": "I",
    "q": "What was the primary focus of the book's first edition?",
    "o": [
      "Capacity planning for cloud environments",
      "The transition to serverless architectures",
      "Use of public clouds",
      "Forecasting IT infrastructure spending"
    ],
    "a": 2,
    "e": "The first edition of the book focused primarily on capacity planning for the use of public clouds, which was a nascent and rapidly growing paradigm at the time. While cloud environments and forecasting are related, the specific emphasis was on transitioning from traditional datacenters to using public cloud resources. Serverless architectures were not yet a primary focus in the early edition."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "What is a significant benefit of serverless architectures?",
    "o": [
      "Reduced vendor dependencies",
      "Reduced operational cost and complexity",
      "Improved system performance at peak times",
      "Increased availability of digital media"
    ],
    "a": 1,
    "e": "Serverless architectures abstract the underlying server management and infrastructure provisioning away from developers. This dramatically reduces operational complexity and costs, as organizations only pay for the exact execution time of their functions rather than maintaining idle server capacity. It actually increases vendor lock-in (dependencies), making that choice incorrect."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "Which metric is NOT part of defining an application's load and capacity requirements?",
    "o": [
      "Response times",
      "Consumable capacity",
      "Peak-driven processing",
      "User satisfaction scores"
    ],
    "a": 3,
    "e": "Response times, consumable capacity, and peak-driven processing are direct operational and system metrics used to quantify and design system capacity. While user satisfaction scores (like Net Promoter Scores or app store ratings) are important business indicators, they are not direct metrics used to calculate or define low-level technical load and hardware capacity requirements."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "What is an example of peak-driven processing given in the text?",
    "o": [
      "Increased mobile traffic",
      "Daily routine operations of a web app",
      "Spike in tweets during the Super Bowl",
      "Continuous monitoring of system performance"
    ],
    "a": 2,
    "e": "Peak-driven processing refers to handling massive, concentrated traffic surges triggered by real-time events. The spike in tweets during the Super Bowl is a classic example of this phenomenon, where load suddenly increases by orders of magnitude. Daily routine operations and continuous monitoring represent steady-state or predictable patterns rather than sudden peak-driven events."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "What is a challenge of capacity planning in datacenters (vs. cloud)?",
    "o": [
      "Short supply-chain cycles",
      "High cost of elasticity",
      "Long supply-chain cycles and configuration overhead",
      "Ease of horizontal scaling"
    ],
    "a": 2,
    "e": "Traditional datacenters require physical procurement, shipping, rack mounting, and manual cabling of hardware, which creates long supply-chain cycles and significant configuration overhead. In contrast, cloud environments offer near-instant provisioning. High cost of elasticity is more of a cloud challenge if not managed properly, while ease of horizontal scaling is a cloud benefit, not a datacenter challenge."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "Why is 'quick and dirty' math important in capacity planning?",
    "o": [
      "It provides precise calculations",
      "It connects the dots between inputs and makes best guesses for the future",
      "It eliminates the need for horizontal scaling",
      "It ensures complete, unbiased information"
    ],
    "a": 1,
    "e": "In capacity planning, perfect information is rarely available. 'Quick and dirty' math (back-of-the-envelope calculations) allows engineers to rapidly link disparate inputs—such as user growth, request rates, and resource utilization—to make reasonable, actionable projections. It does not provide high precision, eliminate scaling needs, or guarantee unbiased completeness, but it prevents analysis paralysis."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "What is a potential risk of lacking proper detail in cloud capacity planning?",
    "o": [
      "Over-provisioning leading to increased costs",
      "Under-provisioning leading to poor user experience",
      "Long supply-chain cycles",
      "Difficulty setting up autoscaling policies"
    ],
    "a": 0,
    "e": "Because the cloud makes it extremely easy to spin up instances with the click of a button, a lack of detailed planning often leads to over-provisioning (running excessively large or unnecessary instances), which directly results in run-away costs (known as 'cloud jail'). Under-provisioning is also a risk, but the question targets the cost aspect associated with over-provisioning. Long supply-chain cycles are a datacenter issue, not a cloud issue."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "As functionality moves from hardware to software, what should the capacity-planning process include?",
    "o": [
      "Increased server capacity",
      "Autoscaling policies",
      "Detailed user satisfaction surveys",
      "Software components"
    ],
    "a": 3,
    "e": "Modern infrastructure relies heavily on virtualization, software-defined networking, and software load balancers. As these functions transition from physical appliances to software, the capacity-planning process must explicitly model and account for software components (such as thread pools, memory limits, and virtual queue sizes) rather than just physical hardware constraints."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "What are the three types of system failures crucial for capacity planning?",
    "o": [
      "Software bugs, hardware malfunctions, network outages",
      "SLA violations, graceful degradation, true system failure",
      "High latency, data loss, security breaches",
      "User errors, system overloads, database corruption"
    ],
    "a": 1,
    "e": "For capacity planning, system behavior under load is categorized into three critical states: SLA violations (where the system is functional but too slow), graceful degradation (where non-essential features are disabled to keep core functions running), and true system failure (complete service outage). The other choices list specific technical root causes or symptoms rather than these three macro-level capacity planning failure states."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "What does 'graceful degradation' refer to?",
    "o": [
      "Complete system shutdown",
      "Slightly reduced performance under increased load",
      "Sudden failure without warning",
      "Manual intervention to prevent failure"
    ],
    "a": 1,
    "e": "Graceful degradation is a design pattern where a system intentionally reduces its performance, response fidelity, or non-essential features (e.g., turning off recommendations or serving static cache) under extreme load to remain functional. This prevents a complete system shutdown or sudden catastrophic failure."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "Why tie server statistics to actual site or mobile app metrics?",
    "o": [
      "To reduce hardware upgrades",
      "To better understand and track how capacity changes over time",
      "To ensure data privacy",
      "To simplify architecture"
    ],
    "a": 1,
    "e": "Tying low-level system metrics (like CPU usage or disk I/O) to high-level business metrics (like active users or checkouts) allows you to establish a direct correlation between business growth and resource consumption. This correlation is essential for forecasting future capacity needs as the business scales, rather than analyzing raw hardware stats in a vacuum."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "What's crucial when deciding where to focus priority attention in capacity planning?",
    "o": [
      "Number of servers",
      "Cost of hardware",
      "Features that tax capacity more than others",
      "Total data storage capacity"
    ],
    "a": 2,
    "e": "Not all application features exert equal pressure on infrastructure resources. For example, photo resizing or database search options tax resources far more heavily than serving a simple profile page. Capacity planners must identify and prioritize these high-resource features because they represent the system's scaling bottlenecks."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "How does tying system stats to business metrics help non-technical stakeholders?",
    "o": [
      "Reduces system complexity",
      "Makes it easier to secure funding for hardware/software",
      "Helps find software bugs",
      "Ensures legal compliance"
    ],
    "a": 1,
    "e": "Non-technical stakeholders and finance departments rarely understand why they need to purchase more servers based on CPU metrics alone. Translating system resource usage into business metrics (e.g., 'every 10,000 new users require 2 database replicas') makes the business case clear, making it much easier to secure budgets and funding."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "What is the primary goal of capacity planning?",
    "o": [
      "Reduce operational footprint and improve resource utilization",
      "Deliver the best end-user experience",
      "Ensure all systems run at maximum capacity",
      "Minimize technology investment costs"
    ],
    "a": 1,
    "e": "The ultimate objective of capacity planning is to ensure that infrastructure is sufficiently provisioned to deliver a fast, reliable, and uninterrupted experience to the end-user. While cost reduction and resource utilization are important secondary constraints, they should not compromise the primary goal of meeting user demand and service-level targets."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "What approach manages unexpected traffic spikes without always running max capacity?",
    "o": [
      "Reducing active servers",
      "Queuing and caching-based approaches",
      "Decreasing quality of service",
      "Limiting number of users"
    ],
    "a": 1,
    "e": "Running at maximum capacity continuously is cost-prohibitive. Queuing (to buffer excess incoming requests) and caching (to serve content without querying backend databases) allow a system to absorb sudden traffic spikes gracefully without requiring a massive, permanently over-provisioned fleet of servers."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "Why is collaboration with product and engineering teams crucial in capacity planning?",
    "o": [
      "Reduce overall workload",
      "Align capacity requirements with roadmaps and predict needs accurately",
      "Minimize new hardware",
      "Ensure system security"
    ],
    "a": 1,
    "e": "Capacity planners must understand the upcoming product roadmap (e.g., new features, marketing campaigns, or regional rollouts) to anticipate changes in system demand. Collaborating with product and engineering teams ensures that infrastructure is provisioned ahead of new feature launches, preventing unexpected capacity crunches."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "What's a risk of not having adequate capacity ready during traffic spikes?",
    "o": [
      "Increased operational costs",
      "Improved user experience",
      "SLA violations and adverse user-experience impact",
      "Reduced data redundancy"
    ],
    "a": 2,
    "e": "When traffic spikes exceed the available server capacity, the system slows down or crashes entirely. This leads to Service Level Agreement (SLA) violations, failed user requests, and an extremely poor user experience, which can damage reputation and lead to direct financial loss."
  },
  {
    "m": "M1: Foundations",
    "t": "I",
    "q": "What's the purpose of using graphs and measurement tools in capacity planning?",
    "o": [
      "Simplify system architecture",
      "Visually represent performance and assist decision-making",
      "Reduce need for technical expertise",
      "Limit data collected"
    ],
    "a": 1,
    "e": "Visualizing performance metrics via charts and dashboards helps planners quickly identify bottlenecks, analyze trends, spot anomalies, and make informed provisioning decisions. Graphs don't directly simplify system architecture or eliminate the need for technical expertise, but they synthesize vast amounts of raw data into actionable insights."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "In cloud infrastructure, what does 'cloud jail' refer to?",
    "o": [
      "A security issue trapping data",
      "Excessive cloud spending and dependence on the provider",
      "Cloud service unavailability from downtime",
      "Restriction to a single geographic location"
    ],
    "a": 1,
    "e": "'Cloud jail' is a slang term describing the state where an organization becomes trapped by runaway cloud costs and heavy architectural lock-in with a specific cloud provider. This makes it financially and technically difficult to migrate away or optimize expenditures, negating the flexibility benefits of the cloud."
  },
  {
    "m": "M1: Foundations",
    "t": "I",
    "q": "What advantage do smaller companies have in procurement vs. larger companies?",
    "o": [
      "Better bulk-buying prices",
      "Faster procurement due to less cumbersome approval",
      "More vendor negotiating power",
      "Access to more advanced technology"
    ],
    "a": 1,
    "e": "Smaller companies have flatter organizational structures and fewer administrative processes, allowing them to make purchasing decisions and approve hardware procurement rapidly. Larger companies, while having better bulk-buying discounts and vendor negotiating power, are often slowed down by complex, multi-tiered corporate approval workflows."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "What is the primary goal of performance tuning?",
    "o": [
      "Add new hardware/software",
      "Optimize the existing system for better performance",
      "Predict future requirements from current usage",
      "Benchmark in artificial environments"
    ],
    "a": 1,
    "e": "Performance tuning focuses on modifying existing code, software configurations, database indexes, or operating system parameters to maximize the efficiency and throughput of the current system. While capacity planning involves forecasting and acquiring new resources, tuning ensures that existing resources are fully optimized first."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "Why should capacity planning be based on real-world observations?",
    "o": [
      "Theoretical measurements are always inaccurate",
      "Empirical observations give more relevant planning data",
      "Benchmarking tools are outdated",
      "It's a cloud-provider requirement"
    ],
    "a": 1,
    "e": "Theoretical models and synthetic benchmarks often fail to capture the complex, unpredictable interactions of real-world user traffic, network latency, and cache eviction patterns. Basing capacity plans on empirical observations from production systems ensures that the projections are highly relevant and accurate."
  },
  {
    "m": "M1: Foundations",
    "t": "I",
    "q": "What's a key challenge for web operations with user-generated content?",
    "o": [
      "Predicting growth patterns due to user control over content",
      "Ensuring data security",
      "Maintaining design aesthetics",
      "Integrating third-party services"
    ],
    "a": 0,
    "e": "User-generated content means that content creation and traffic are driven by user activity rather than editorial schedules. This makes predicting growth patterns highly challenging, as a single viral post or user-led trend can spark sudden, massive spikes. Security and design integrations are important, but do not present the primary growth predictability challenge."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "In the butcher-in-San-Francisco example, what's the preferred solution for increasing capacity?",
    "o": [
      "Tuning existing trucks to go faster",
      "Reducing the speed limit",
      "Purchasing more trucks",
      "Changing the route"
    ],
    "a": 2,
    "e": "In the butcher-in-San-Francisco example (which illustrates capacity planning vs. performance tuning), if the demand exceeds what a delivery truck can carry, the correct solution is to acquire more physical resources (purchasing more trucks). Tuning the engine or route cannot increase the load capacity if the truck is already physically full."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "How does architecture impact capacity management?",
    "o": [
      "Determines total cost of ownership",
      "Affects how easily/flexibly you can add or subtract capacity",
      "Dictates physical data-center location",
      "Influences visual design"
    ],
    "a": 1,
    "e": "Software and system architecture dictates how easily components can be separated, replicated, and distributed. A well-designed, decoupled architecture allows you to scale specific bottlenecked components horizontally (adding or subtracting capacity) with ease, whereas a tightly coupled monolithic architecture restricts this flexibility."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "Why monitor API usage in web services?",
    "o": [
      "Ensure coding-standard compliance",
      "Watch for emerging patterns and prevent abuse",
      "Track API popularity",
      "Maintain aesthetic quality"
    ],
    "a": 1,
    "e": "Monitoring API usage is essential to identify traffic patterns, ensure that third-party integrations are functioning correctly, and detect/prevent malicious or abusive usage (such as scraping or denial of service). It is not primarily used for tracking coding-standard compliance or visual aesthetics."
  },
  {
    "m": "M1: Foundations",
    "t": "W",
    "q": "What's the relationship between performance tuning and capacity planning?",
    "o": [
      "Same process, different names",
      "Different goals, but they affect each other",
      "Capacity planning always follows performance tuning",
      "Performance tuning is unnecessary if capacity planning is correct"
    ],
    "a": 1,
    "e": "Performance tuning (making existing code/systems run faster and use fewer resources) and capacity planning (forecasting and purchasing new resources) have different primary objectives, but they directly affect each other: tuning increases the effective ceiling of your current capacity, delaying the need for new hardware purchases."
  },
  {
    "m": "M1: Foundations",
    "t": "C",
    "q": "In the butcher example, what should the focus be when determining capacity needs?",
    "o": [
      "Enhancing speed of existing resources",
      "Acquiring additional resources",
      "Reducing demand",
      "Changing the business model"
    ],
    "a": 1,
    "e": "In the butcher example, the primary capacity planning lesson is that to handle increased structural demand, you must focus on acquiring additional resources (scaling out). Tuning the speed or routing of existing trucks offers diminishing returns and does not solve the absolute capacity bottleneck."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "Which of these is used in distributed monitoring software?",
    "o": [
      "Gomez",
      "Ganglia",
      "Elastra",
      "None of the above"
    ],
    "a": 1,
    "e": "Ganglia is a scalable, distributed monitoring system designed for high-performance computing systems such as clusters and grids, allowing real-time tracking of node metrics. Gomez is an external synthetic monitoring service, and Elastra is a cloud management platform."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "What's the primary purpose of capacity tracking tools?",
    "o": [
      "Generate availability alerts",
      "Automatically and routinely measure server behavior over time",
      "Manage network configurations",
      "Install/update software"
    ],
    "a": 1,
    "e": "Capacity tracking tools automate the continuous collection and recording of system metrics (CPU, RAM, disk, etc.) over long periods to analyze historical usage patterns and trends. While alerting is important, it is the primary role of availability monitoring tools (like Nagios), not capacity tracking."
  },
  {
    "m": "M2: Monitoring",
    "t": "C",
    "q": "Which of the following is NOT typically used for load testing?",
    "o": [
      "Loadrunner",
      "JMeter",
      "Iago",
      "Grafana"
    ],
    "a": 3,
    "e": "Grafana is a data visualization and dashboarding tool, not a load-testing generator. Loadrunner, JMeter, and Iago are all tools designed to generate synthetic user load to test system performance under stress."
  },
  {
    "m": "M2: Monitoring",
    "t": "C",
    "q": "What's a common database format used by metric-aggregation servers for time-series data?",
    "o": [
      "SQL Database",
      "NoSQL Database",
      "Round-Robin Database (RRD)",
      "Hierarchical Database"
    ],
    "a": 2,
    "e": "Round-Robin Database (RRD) is a standard time-series database format that stores data in a circular buffer, meaning the file size remains constant over time as older data is automatically consolidated and overwritten. This makes it ideal for metric-aggregation systems like RRDTool."
  },
  {
    "m": "M2: Monitoring",
    "t": "C",
    "q": "Which tool is specifically designed for querying and visualizing time-series operational metrics?",
    "o": [
      "Ganglia",
      "Graphite",
      "Grafana",
      "Cacti"
    ],
    "a": 2,
    "e": "Grafana is a highly popular open-source platform specifically designed for querying, visualizing, and alerting on time-series metrics. While Graphite and Ganglia collect/store metrics, Grafana provides the rich visualization layer. Cacti is a complete graphing tool but is older and less dedicated to interactive time-series queries."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "Which daemon periodically collects system and application performance metrics?",
    "o": [
      "Riemann",
      "Datadog",
      "collectd",
      "Sematext"
    ],
    "a": 2,
    "e": "collectd is a system daemon that periodically gathers system and application performance metrics and transmits them to a central server. Riemann is an event stream processor, and Datadog/Sematext are proprietary SaaS monitoring solutions rather than simple local collection daemons."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "What's the main advantage of RRDTool for storing system/network data?",
    "o": [
      "Stores unlimited data without loss",
      "Assumes interest in fine detail only for the recent past",
      "Real-time data analysis tool",
      "Primarily for alert generation"
    ],
    "a": 1,
    "e": "RRDTool uses a round-robin format where data is stored in high detail for the recent past (e.g., 5-minute averages for the last 24 hours) and then progressively aggregated into lower resolution (e.g., daily averages for the last year). This keeps storage requirements constant and manageable."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "What's the role of the agent in most metric collection systems?",
    "o": [
      "Display metrics in various forms",
      "Periodically collect data and send a summary to the aggregation server",
      "Manage network configurations",
      "Handle authentication/authorization"
    ],
    "a": 1,
    "e": "In metric collection systems, the agent runs on individual monitored servers to periodically gather system performance statistics (CPU, memory, disk, network) and transmit aggregated summaries to a central server. Visualization and configuration are handled elsewhere."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "Why might storing long periods of operations data not be useful?",
    "o": [
      "It's costly",
      "It can misguide decisions due to data staleness",
      "It's illegal long-term",
      "It takes too long to analyze"
    ],
    "a": 1,
    "e": "Storing very old operations data is often not useful because old patterns (e.g., traffic patterns from years ago when the application had different features) are stale and do not reflect current system behavior, which can misguide capacity forecasts. It also incurs unnecessary storage costs."
  },
  {
    "m": "M2: Monitoring",
    "t": "C",
    "q": "What protocol is commonly used for gathering metrics from networking/server equipment?",
    "o": [
      "HTTP",
      "FTP",
      "SNMP",
      "TCP/IP"
    ],
    "a": 2,
    "e": "Simple Network Management Protocol (SNMP) is the standard protocol used for monitoring and managing network devices (routers, switches) and server hardware. HTTP, FTP, and TCP/IP are general web/network protocols, not dedicated management/monitoring protocols."
  },
  {
    "m": "M2: Monitoring",
    "t": "C",
    "q": "What's the primary reason for using load balancers in web operations?",
    "o": [
      "Establish secure connections",
      "Distribute load among pools/clusters of machines",
      "Manage database queries",
      "Monitor network traffic"
    ],
    "a": 1,
    "e": "Load balancers distribute incoming network or application traffic across a pool of servers. This prevents any single server from becoming a performance bottleneck, ensures high availability, and facilitates horizontal scaling."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "What's the primary reason for collecting application-level metrics?",
    "o": [
      "Monitor CPU/disk on a single server",
      "Provide a comprehensive view of the entire system's performance",
      "Measure network latency",
      "Track concurrent users"
    ],
    "a": 1,
    "e": "Application-level metrics (such as checkouts per minute or signups) track logical business events. Collecting these metrics provides a holistic view of the system's business health and helps correlate hardware resource usage with user activity."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "Which is NOT an example of an application-level metric?",
    "o": [
      "Tweets per minute",
      "Messages per minute",
      "CPU usage per server",
      "Photos uploaded per minute"
    ],
    "a": 2,
    "e": "CPU usage per server is a low-level, system-specific hardware metric. Tweets per minute, messages per minute, and photos uploaded per minute are all application-level metrics that track user interactions with the application logic."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "What's a key benefit of tracking application-level metrics over server-specific ones?",
    "o": [
      "Easier to collect",
      "Provide insight into business and financial impacts",
      "Less error-prone",
      "Require less storage"
    ],
    "a": 1,
    "e": "System-level metrics (like CPU or RAM) are highly technical and do not directly show business value. Tracking application-level metrics (like successful purchases or transactions) directly translates infrastructure health into business performance and financial outcomes."
  },
  {
    "m": "M2: Monitoring",
    "t": "I",
    "q": "Which storage analogy is used to explain data storage considerations?",
    "o": [
      "A bucket of sand",
      "A box of chocolates",
      "A glass of water",
      "A balloon"
    ],
    "a": 2,
    "e": "The 'glass of water' analogy is used to explain storage capacity and performance: the volume of the glass represents storage capacity, while the speed at which you can pour water in/out represents performance (I/O throughput and latency)."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "What storage type has 'large, slow, inexpensive disks'?",
    "o": [
      "SSDs",
      "SAS drives",
      "SCSI drives",
      "ATA/SATA drives"
    ],
    "a": 3,
    "e": "ATA/SATA hard disk drives offer very large storage capacities at a very low cost per gigabyte, but they are significantly slower in terms of seek times and I/O operations per second (IOPS) compared to enterprise-grade SAS, SCSI, or Solid State Drives (SSDs)."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "Which metric is NOT typically used to compare HDD performance?",
    "o": [
      "Sustained transfer rate",
      "Average latency",
      "Network bandwidth",
      "Cache buffer size"
    ],
    "a": 2,
    "e": "HDD performance is evaluated using sustained transfer rates, average rotational latency, seek times, and cache buffer size. Network bandwidth is an external infrastructure metric, not a characteristic used to measure or compare internal hard disk drive performance."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "What key metric predicts when more storage hardware must be ordered?",
    "o": [
      "Total disk space consumption over time",
      "File accesses per minute",
      "Disk I/O ops per second",
      "CPU utilization on storage servers"
    ],
    "a": 0,
    "e": "To predict when to purchase new storage disks, planners track the rate of disk space consumption over time. While disk I/O and CPU are performance metrics, absolute storage volume depletion is forecasted via disk space capacity trends."
  },
  {
    "m": "M2: Monitoring",
    "t": "I",
    "q": "In the Flickr example, which days were peak periods for photo uploads?",
    "o": [
      "Fridays",
      "Mondays",
      "Sundays",
      "Saturdays"
    ],
    "a": 2,
    "e": "In the Flickr capacity planning case study, Sundays were identified as the peak periods for photo uploads, as users took photos over the weekend and uploaded them as the weekend ended."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "What's the main reason for setting retention policies on long-term data storage?",
    "o": [
      "Increase retrieval speed",
      "Reduce storage costs",
      "Improve data accuracy",
      "Enhance server performance"
    ],
    "a": 1,
    "e": "Data storage accumulates over time, which increases hardware, backup, and maintenance costs. Setting clear data retention policies (e.g., archiving or deleting logs/data after 90 days) keeps storage costs predictable and manageable."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "Which tool is NOT used for measuring storage performance?",
    "o": [
      "Hard Disk Sentinel",
      "IOBench",
      "ATTO Disk Benchmark",
      "Wireshark"
    ],
    "a": 3,
    "e": "Wireshark is a packet analyzer used for network troubleshooting and analysis. Hard Disk Sentinel, IOBench, and ATTO Disk Benchmark are specialized tools used to measure disk read/write throughput, IOPS, and general storage performance."
  },
  {
    "m": "M2: Monitoring",
    "t": "C",
    "q": "Which metric is important to track with any caching software?",
    "o": [
      "Total server uptime",
      "Database query execution time",
      "Cache hit ratio",
      "Number of CPU cores"
    ],
    "a": 2,
    "e": "The cache hit ratio represents the percentage of incoming requests successfully served from cache memory rather than querying the slower backend storage. Monitoring and optimizing this ratio is crucial for understanding cache performance and capacity."
  },
  {
    "m": "M2: Monitoring",
    "t": "C",
    "q": "What defines the capacity ceiling for a cache with a small or slowly increasing working set?",
    "o": [
      "CPU usage",
      "Hit ratio",
      "Disk I/O utilization",
      "Network usage"
    ],
    "a": 1,
    "e": "For a cache with a small or slow-growing working set, the capacity limit is defined by the cache hit ratio. If the cache size is large enough to hold the active working set, the hit ratio remains high, meaning the backend database is shielded and performance is maintained."
  },
  {
    "m": "M2: Monitoring",
    "t": "W",
    "q": "What's used as a guide to determine the maximum performance of a caching hardware platform?",
    "o": [
      "Memory usage",
      "Cache size",
      "Hit ratio",
      "Disk I/O wait"
    ],
    "a": 2,
    "e": "Caching hardware performance is largely guided by the cache hit ratio. A higher hit ratio means more requests are served from RAM, maximizing the throughput and minimizing latency of the hardware platform."
  },
  {
    "m": "M2: Monitoring",
    "t": "I",
    "q": "What's identified as the peak resource metric for a Squid caching server?",
    "o": [
      "CPU usage",
      "Memory usage",
      "Disk I/O wait",
      "Network usage"
    ],
    "a": 2,
    "e": "Squid is a web proxy cache. Because it reads and writes cached objects to local disk storage, its primary performance bottleneck under high load is disk I/O wait times, which represents the time the CPU spends waiting for disk reads/writes to complete."
  },
  {
    "m": "M2: Monitoring",
    "t": "I",
    "q": "What's the relationship between photo processing rates and CPU utilization?",
    "o": [
      "Linear",
      "Exponential",
      "Inverse",
      "No correlation"
    ],
    "a": 0,
    "e": "Photo processing (resizing, compression, conversion) is a highly CPU-intensive operation. The relationship between the rate of photos processed per second and CPU utilization is typically linear, meaning CPU usage increases predictably as more photos are processed."
  },
  {
    "m": "M2: Monitoring",
    "t": "C",
    "q": "What's the purpose of rate-limiting API calls?",
    "o": [
      "Increase API usage",
      "Decrease API usage",
      "Prevent abuse and ensure fair usage",
      "Track usage for billing"
    ],
    "a": 2,
    "e": "Rate-limiting API calls prevents individual clients or malicious actors from consuming excessive server resources. This prevents abuse, ensures fair resource sharing among all users, and protects the system from cascading capacity failures."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "Which are types of requirements/capacity goals interrelated with performance, availability, and reliability?",
    "o": [
      "External service monitoring",
      "Business requirements",
      "User expectations",
      "All of the above"
    ],
    "a": 3,
    "e": "System requirements and capacity goals are multi-faceted and interrelated. Business requirements (budget and goals), user expectations (acceptable latency), and external monitoring constraints all influence performance, availability, and reliability targets."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "Which metrics do commercial services use to monitor site performance?",
    "o": [
      "Page load time",
      "Time to first byte (TTFB)",
      "SSL time",
      "All of the above"
    ],
    "a": 3,
    "e": "Commercial monitoring services measure multiple metrics to evaluate site performance: page load time (total time to render), Time to First Byte (TTFB, server responsiveness), and SSL handshake time. All these contribute to the user-perceived performance."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "Why understand what monitoring services measure and how to interpret the numbers?",
    "o": [
      "Enforce SLAs with the statistics",
      "Be aware of how pages are requested",
      "Determine if they simulate human users",
      "All of the above"
    ],
    "a": 3,
    "e": "Understanding monitoring metrics is critical for: enforcing vendor SLAs, understanding how and from where users request pages, and determining whether the monitoring tool mimics real human browsing patterns (like browser caching and downloading assets)."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "What should be considered when using a monitoring service?",
    "o": [
      "Whether it simulates human users",
      "If it caches like a browser",
      "If time is network transfer vs. server time",
      "All of the above"
    ],
    "a": 3,
    "e": "When selecting and interpreting data from a monitoring service, it is critical to evaluate if it simulates actual human behavior, whether it uses browser-like caching strategies, and whether measured latency is due to network transit or backend server processing."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "Which enterprise-level monitoring service is mentioned in the text?",
    "o": [
      "PingDom",
      "SiteUptime",
      "Keynote",
      "Alertra"
    ],
    "a": 2,
    "e": "Keynote is a well-known, enterprise-level synthetic monitoring service mentioned in the text. Pingdom, SiteUptime, and Alertra are also monitoring tools, but Keynote was historically the enterprise standard referenced for synthetic measurement."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "What can induce a performance penalty or affect availability in a distributed database?",
    "o": [
      "Caching objects",
      "Guaranteeing consistency",
      "User expectations",
      "Network transfer time"
    ],
    "a": 1,
    "e": "In distributed databases, guaranteeing data consistency (ensuring all nodes have the exact same data at the same time) requires cross-node synchronization and locking protocols. According to the CAP theorem, this introduces network latency and performance penalties, affecting availability."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What is an SLA primarily used for in a business context?",
    "o": [
      "Define software requirements",
      "Make business people comfortable and establish performance metrics",
      "Outline project deadlines",
      "Describe company policies"
    ],
    "a": 1,
    "e": "In a business context, a Service Level Agreement (SLA) is primarily used to set performance and uptime metrics that ensure service quality while reassuring business stakeholders and clients of service reliability."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "Why do businesses tie revenue streams to unfettered API access?",
    "o": [
      "Ensure security",
      "Guarantee availability and performance of the API",
      "Facilitate user registration",
      "Manage marketing efforts"
    ],
    "a": 1,
    "e": "Businesses tie revenue models to API access contracts. To monetize APIs, they must guarantee high availability and consistent performance, which requires careful capacity planning to support the contracted SLA call volumes."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "Which metrics are proposed to quantify perceived performance of a site/app?",
    "o": [
      "Speed index",
      "Render start",
      "DOM interactive",
      "All of the above"
    ],
    "a": 3,
    "e": "Perceived user performance is best measured by metrics like Speed Index (how fast the visible area of the page populates), Render Start (when the first visual element appears), and DOM Interactive (when the user can first interact with the page)."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "Why is root-cause analysis of perceived slowness easier in monolithic architectures than in SOA/MSA?",
    "o": [
      "Monolithic architectures are more modern",
      "Monolithic architectures use more third-party vendors",
      "SOA/MSA don't use high-quality images",
      "SOA/MSA have complex interactions between microservices"
    ],
    "a": 3,
    "e": "In a monolithic architecture, all components run in a single process, making it easier to trace request flow. In Service-Oriented (SOA) or Microservices (MSA) architectures, requests traverse multiple independent microservices over the network, making root-cause latency analysis highly complex."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "In the shipping-company example, what API call rate might the contract permit?",
    "o": [
      "1 call/minute",
      "10 calls/second",
      "5 calls/minute",
      "20 calls/second"
    ],
    "a": 1,
    "e": "The shipping-company contract example allows for a call rate of 10 calls/second. Exceeding this rate will trigger rate-limiting policies or violate the service agreement terms."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "Which is NOT a User Timing 'Standard Mark Name'?",
    "o": [
      "mark_fully_loaded",
      "mark_time_to_user_action",
      "mark_page_weight",
      "mark_above_the_fold"
    ],
    "a": 2,
    "e": "User Timing API standard mark names include mark_fully_loaded, mark_time_to_user_action, and mark_above_the_fold. mark_page_weight is not a standard mark name under this framework because page weight is a payload size metric, not a timing marker."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "When might a website reach intolerable latency?",
    "o": [
      "At low traffic volumes",
      "When server CPU is underutilized",
      "At high traffic, before system-level metrics raise a flag",
      "When no third-party services are used"
    ],
    "a": 2,
    "e": "Under heavy traffic, application queues, lock contention, and database connections can build up. This leads to intolerable user latency and timeout issues long before hardware-level metrics (like CPU or RAM usage) show any warning flags."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What does an SLA typically cover for websites?",
    "o": [
      "Security and UI design",
      "Availability and performance",
      "Marketing and sales",
      "Development and testing"
    ],
    "a": 1,
    "e": "Service Level Agreements (SLAs) for web applications primarily focus on availability (uptime percentage) and performance (response time thresholds). Security and UI design are rarely covered in operational SLAs."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What does a 99.9% uptime SLA mean in allowable monthly downtime?",
    "o": [
      "10 minutes",
      "30 minutes",
      "43.2 minutes",
      "60 minutes"
    ],
    "a": 2,
    "e": "A month has approximately 43,200 minutes (30 days * 24 hours * 60 minutes). Therefore, a 99.9% uptime SLA allows for 0.1% downtime, which equals exactly 43.2 minutes of allowable downtime per month."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What's the acceptable downtime per year for a 99.99% SLA?",
    "o": [
      "8h 45m 36s",
      "52m 33s",
      "5m 15s",
      "32 seconds"
    ],
    "a": 1,
    "e": "A year has 525,600 minutes. A 99.99% uptime target allows for 0.01% downtime, which translates to approximately 52.56 minutes (or 52 minutes and 33 seconds) of allowable downtime per year."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What term refers to an availability of 99.999%?",
    "o": [
      "Three-nines",
      "Four-nines",
      "Five-nines",
      "Six-nines"
    ],
    "a": 2,
    "e": "The term 'five-nines' is the standard industry slang for 99.999% availability, allowing less than 5.26 minutes of downtime per year."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "If a site generates $3,000/minute in sales, how much revenue could be lost in 10 minutes of downtime (no recovery)?",
    "o": [
      "$30,000",
      "$15,000",
      "$45,000",
      "$3,000"
    ],
    "a": 0,
    "e": "If a site loses $3,000/minute in sales, then 10 minutes of downtime would result in a simple direct loss of $30,000 ($3,000/minute * 10 minutes) assuming no sales are recovered."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "What might be a more realistic impact of a brief service outage on revenue?",
    "o": [
      "Immediate loss with no recovery",
      "Increased revenue after the outage",
      "Customers pick up where they left off \u2014 minimal earnings impact",
      "Permanent loss of all potential sales"
    ],
    "a": 2,
    "e": "In reality, a brief service outage does not always mean a permanent loss of revenue. Many customers will wait, reload the page, or return later and complete their purchases once the site recovers, resulting in minimal long-term earnings impact."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What's a common usage of the term 'five-nines' in SLA discussions?",
    "o": [
      "Describe a feature set",
      "Indicate high availability of a site/system",
      "Refer to number of servers",
      "Measure bandwidth capacity"
    ],
    "a": 1,
    "e": "Five-nines refers to a 99.999% uptime target. In SLA discussions, this is used to denote an extremely high-availability system that permits less than 5.26 minutes of cumulative downtime per year."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "What's the primary purpose of architecture in backend systems?",
    "o": [
      "Design the layout of backend pieces for capacity planning",
      "Enhance security",
      "Reduce hardware cost",
      "Simplify the UI"
    ],
    "a": 0,
    "e": "The primary purpose of backend architecture design is to structure the layout of various backend components (caches, databases, app servers) to facilitate measurement, isolation of bottlenecks, and capacity planning."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "Why should architecture split easily into parts performing discrete tasks?",
    "o": [
      "Reduce power consumption",
      "Facilitate measurement and rapid response to changing conditions",
      "Improve aesthetic design",
      "Increase server count"
    ],
    "a": 1,
    "e": "Splitting architecture into discrete tasks (modular services) allows developers to easily measure the performance and resource footprint of individual features. This enables targeted horizontal scaling and rapid responses to changing resource demands."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What's a key benefit of Microservices Architecture (MSA)?",
    "o": [
      "Increases system complexity",
      "Allows quicker changes in response to bugs/feature requests",
      "Reduces need for monitoring",
      "Eliminates need for containerization"
    ],
    "a": 1,
    "e": "Microservices Architecture (MSA) breaks down applications into small, independent services. A key advantage of this modularity is that engineering teams can modify, fix bugs in, or deploy features to individual services independently and rapidly without redeploying the entire monolithic codebase."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "In a database-driven web example, what's the main difficulty of web server + database on the same hardware?",
    "o": [
      "Increased security risks",
      "Difficulty distinguishing stats for different components",
      "Higher maintenance cost",
      "Lower overall performance"
    ],
    "a": 1,
    "e": "When web server logic and database storage run on the same physical hardware, it is extremely difficult to isolate and analyze system statistics (CPU, memory, disk I/O) for each component, making capacity planning and bottleneck identification very challenging."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "What should be measured to decide when to add capacity to a split architecture?",
    "o": [
      "User logins per hour",
      "Web page size",
      "Impact of increased QPS on disk, I/O wait, RAM, and CPU",
      "Frequency of software updates"
    ],
    "a": 2,
    "e": "To determine when to add capacity to a split architecture, planners monitor how increased Queries Per Second (QPS) impact system resource constraints, specifically disk I/O wait times, memory usage (RAM), and CPU utilization on individual service tiers."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "Which metric measures web server performance?",
    "o": [
      "User satisfaction rate",
      "Number of software bugs",
      "Requests-per-second",
      "Number of user reviews"
    ],
    "a": 2,
    "e": "The standard metric for web server performance is the volume of HTTP requests it handles per second (Requests-per-second, or RPS). While page size and user reviews are useful for other teams, RPS is the primary capacity planning metric for web servers."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What is the 'ceiling' in architecture and capacity planning?",
    "o": [
      "Max number of users a system can handle",
      "The critical resource level that can't be crossed without failure/SLA violation",
      "Highest security level implemented",
      "Total cost of running the system"
    ],
    "a": 1,
    "e": "In capacity planning, the 'ceiling' refers to the maximum resource utilization threshold (e.g., 80% CPU or 70% disk I/O wait) beyond which the system starts violating performance SLAs or experiences failure."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "Why do public clouds offer a wide range of instance types?",
    "o": [
      "Cater to different budgets",
      "Provide a variety of OSes",
      "Different services exert different resource pressure",
      "Offer various security levels"
    ],
    "a": 2,
    "e": "Different software services place varying pressure on infrastructure resources (e.g., databases are memory and disk I/O bound, while rendering services are CPU bound). Public clouds offer diverse instance types (compute-optimized, memory-optimized) to match these varying workloads."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What's the purpose of determining the ceiling for each piece of architecture?",
    "o": [
      "Find maximum revenue potential",
      "Understand when to upgrade hardware",
      "Prevent failures/SLA violations by not exceeding resource limits",
      "Calculate total system cost"
    ],
    "a": 2,
    "e": "Determining the resource ceiling for each architecture component allows engineers to configure automated alerts and scaling rules that trigger before resource limits are exceeded, thereby preventing performance degradation or SLA violations."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "What does the 'small pieces, loosely joined' theory suggest?",
    "o": [
      "Combine all services into one large service",
      "Divide labor into smaller, independent, loosely connected units",
      "Reduce the number of servers",
      "Simplify the UI"
    ],
    "a": 1,
    "e": "The 'small pieces, loosely joined' architectural theory suggests dividing system workloads into smaller, decoupled, and independent units. This makes individual components easier to monitor, scale, and maintain without impacting the wider system."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "What can simple architectural changes help you understand?",
    "o": [
      "Total cost of ownership",
      "Security vulnerabilities",
      "How capacity is being used for different purposes",
      "User satisfaction rate"
    ],
    "a": 2,
    "e": "Separating monolithic systems into discrete services allows capacity planners to trace and understand exactly how system resource capacity is being consumed by different application features."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "Armed with current ceilings, what can you begin to assemble?",
    "o": [
      "A new UI",
      "A security plan",
      "The capacity plan",
      "A marketing strategy"
    ],
    "a": 2,
    "e": "Once you have identified the resource ceilings and scaling bottlenecks for each architectural component, you can assemble the comprehensive capacity plan to project future infrastructure requirements and costs."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What is vertical scaling?",
    "o": [
      "Adding more servers to share load",
      "Increasing resources within a single server",
      "Using cloud services for extra capacity",
      "Reducing the number of servers"
    ],
    "a": 1,
    "e": "Vertical scaling (scaling up) involves increasing the capacity of a single server by adding more resources, such as upgrading its CPU, RAM, or storage."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What is horizontal scaling?",
    "o": [
      "Adding more resources to a single server",
      "Decreasing server load by reducing traffic",
      "Adding more servers to share the load",
      "Using more powerful servers"
    ],
    "a": 2,
    "e": "Horizontal scaling (scaling out) involves adding more servers of the same size to the resource pool and distributing incoming workload among them using a load balancer."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What is diagonal scaling?",
    "o": [
      "Vertically scaling horizontally scaled nodes",
      "Scaling only CPU",
      "Scaling only memory",
      "Combining vertical and horizontal scaling on new servers"
    ],
    "a": 0,
    "e": "Diagonal scaling is a hybrid approach where you horizontally scale by adding more server nodes, but you also vertically scale the individual instances within that horizontal cluster to larger types."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "What's a potential disadvantage of relying solely on vertical scaling?",
    "o": [
      "Increased complexity managing multiple servers",
      "Higher costs and risk of a single point of failure",
      "Difficulty measuring individual server performance",
      "Lower CPU/memory utilization"
    ],
    "a": 1,
    "e": "Relying purely on vertical scaling is risky because a single server represents a Single Point of Failure (SPOF). Additionally, vertical scaling is limited by physical hardware limits and becomes exponentially expensive at the high end."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "In the Yahoo! example, how many dual-quad-core machines replaced 67 dual-CPU machines?",
    "o": [
      "20",
      "18",
      "15",
      "25"
    ],
    "a": 1,
    "e": "In the Yahoo! case study, the team scaled diagonally by replacing 67 older dual-CPU machines with 18 high-performance dual-quad-core servers."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "What was the primary benefit of diagonal scaling in the Yahoo! example?",
    "o": [
      "Decreased disk usage",
      "Increased network bandwidth",
      "Reduced load average and power consumption",
      "Improved security"
    ],
    "a": 2,
    "e": "In the Yahoo! case study, replacing many small servers with fewer, more powerful multi-core machines drastically reduced the overall load average, simplified management, and lowered power/cooling costs in the datacenter."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What does 'SPOF' stand for?",
    "o": [
      "Single Point of Failure",
      "Scalable Point of Function",
      "Standard Protocol of Functionality",
      "System Performance Optimization Framework"
    ],
    "a": 0,
    "e": "SPOF stands for Single Point of Failure. In systems architecture, a SPOF is any individual component whose failure will cause the entire system to stop functioning."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "Why is horizontal scaling considered advantageous for web applications?",
    "o": [
      "Increases cost efficiency of vertical scaling",
      "Allows easy synchronization between nodes",
      "Handles various levels of database abstraction/distribution",
      "Simplifies security management"
    ],
    "a": 2,
    "e": "Horizontal scaling (scaling out) allows web applications to distribute workloads across a pool of servers. This makes it highly advantageous because it can handle database abstraction, storage distribution, and web traffic growth by simply adding commodity instances rather than upgrading a single massive machine."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What does Disaster Recovery (DR) primarily focus on?",
    "o": [
      "Enhancing website security",
      "Saving business operations after a catastrophe",
      "Improving website performance",
      "Reducing server costs"
    ],
    "a": 1,
    "e": "Disaster Recovery (DR) is focused on business continuity—specifically, saving and restoring business operations, data, and critical applications in the event of a catastrophic site outage or regional disaster."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "Which is NOT typically considered a catastrophe for DR purposes?",
    "o": [
      "Datacenter power outages",
      "Earthquakes",
      "Single server failure",
      "Cooling outages"
    ],
    "a": 2,
    "e": "A single server failure is a routine operational issue that should be handled automatically by local redundancy (like load balancers and auto-scaling groups). It is not considered a catastrophe that triggers a Disaster Recovery (DR) plan, which is reserved for site-wide or regional outages."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "DR is part of which larger logistical plan?",
    "o": [
      "Vertical Scaling",
      "Business Continuity Planning (BCP)",
      "Capacity Management",
      "Horizontal Scaling"
    ],
    "a": 1,
    "e": "Disaster Recovery (DR) is a key subset of Business Continuity Planning (BCP). BCP is a broader logistical plan that ensures all aspects of a business (including people, processes, and systems) can continue operating during and after a disaster."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "What's a common solution for ensuring Disaster Recovery?",
    "o": [
      "Increase resources within a single server",
      "Deploy complete architectures in multiple physical locations",
      "Use only cloud services",
      "Reduce number of servers"
    ],
    "a": 1,
    "e": "To ensure Disaster Recovery, organisations deploy identical, complete system architectures across multiple physical, geographically separated locations (datacenters or regions) so that one site can take over if the other fails."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "What's a significant concern when implementing DR plans?",
    "o": [
      "Simplifying code deployment",
      "Multiplying infrastructure costs",
      "Enhancing server performance",
      "Reducing network bandwidth"
    ],
    "a": 1,
    "e": "Implementing a robust DR plan requires running duplicate or redundant infrastructure in multiple locations. This leads to multiplying infrastructure costs, which is a major concern that must be balanced against business risk."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "Why is recognizing trends important for capacity planning?",
    "o": [
      "Reduce server costs",
      "Identify the fastest servers",
      "Understand resource needs and recurring patterns over time",
      "Minimize network traffic"
    ],
    "a": 2,
    "e": "Recognizing trends in resource usage allows capacity planners to understand future resource demands, forecast growth, and identify recurring seasonal patterns (like weekly or holiday peaks) rather than reacting to short-term spikes."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "What can historical capacity data help you analyze?",
    "o": [
      "Hardware compatibility",
      "Resource trends and recurring patterns",
      "Server locations",
      "Network speed"
    ],
    "a": 1,
    "e": "Analyzing historical capacity data allows planners to identify long-term resource trends and recurring patterns (such as diurnal traffic waves or holiday spikes), which are crucial for building accurate predictive models."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What's the fundamental principle of capacity planning mentioned in the text?",
    "o": [
      "Estimating server costs",
      "Using ceiling values and historical data for predictions",
      "Reducing hardware redundancy",
      "Increasing network speed"
    ],
    "a": 1,
    "e": "The fundamental principle of capacity planning is using resource ceiling values (the point of performance degradation) and historical usage trends to predict exactly when future workloads will exceed system limits."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "What does adding a trendline in Excel help with?",
    "o": [
      "Reducing server load",
      "Forecasting future data from historical trends",
      "Minimizing network traffic",
      "Increasing storage capacity"
    ],
    "a": 1,
    "e": "Adding a trendline to historical data in Excel allows capacity planners to project (forecast) future resource utilization based on mathematical regression of past usage patterns."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "What does the process of curve fitting involve?",
    "o": [
      "Finding a mathematical equation that mimics the data",
      "Reducing the number of servers",
      "Enhancing network speed",
      "Increasing CPU performance"
    ],
    "a": 0,
    "e": "Curve fitting is the mathematical process of finding a mathematical equation (like linear, exponential, or polynomial equations) that best fits and mimics the plotted historical data points, enabling future forecasting."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "What metric was used to predict disk I/O wait times for databases at Flickr?",
    "o": [
      "Number of users",
      "Number of photos",
      "Ratio of photos-to-users",
      "Server uptime"
    ],
    "a": 2,
    "e": "Flickr used the ratio of photos-to-users as a key metric to predict database disk I/O wait times. As users upload more photos relative to active users, disk operations increase due to metadata updates and indexing workloads."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "C",
    "q": "What architectural change at Flickr helped manage growing data load?",
    "o": [
      "Implementing a monolithic database",
      "Increasing server CPU capacity",
      "Sharding the database",
      "Reducing network bandwidth"
    ],
    "a": 2,
    "e": "At Flickr, sharding the database (splitting database tables horizontally across multiple database servers based on user ID) was the key architectural change that allowed the system to scale and manage massive metadata growth."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "W",
    "q": "What's the danger of making forecasts with small datasets?",
    "o": [
      "Lack of accuracy and potential seasonal variations",
      "Increased network traffic",
      "Reduced server performance",
      "Higher hardware costs"
    ],
    "a": 0,
    "e": "Making forecasts using small datasets is highly risky because it lacks historical context. It cannot capture seasonal variations or long-term growth trends, leading to highly inaccurate capacity predictions."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "What's one advantage of using Excel macros for automating forecasting?",
    "o": [
      "Reducing server maintenance",
      "Integrating forecasts into dashboards/databases",
      "Increasing CPU performance",
      "Minimizing network traffic"
    ],
    "a": 1,
    "e": "Automating forecasts using Excel macros or scripts allows capacity planners to easily integrate predictions directly into corporate dashboards, automated reporting systems, and central databases."
  },
  {
    "m": "M3: SLAs & Architecture",
    "t": "I",
    "q": "What's the primary purpose of the open-source program fityk?",
    "o": [
      "Enhancing server speed",
      "Curve-fitting equations to arbitrary data",
      "Reducing data storage",
      "Increasing network bandwidth"
    ],
    "a": 1,
    "e": "Fityk is a specialized, open-source program designed for curve-fitting and data analysis, allowing engineers to fit complex mathematical equations to arbitrary resource datasets."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "C",
    "q": "What is the procurement pipeline?",
    "o": [
      "The process of obtaining new capacity",
      "The process of developing new software",
      "The process of hiring new employees",
      "The process of marketing new products"
    ],
    "a": 0,
    "e": "The procurement pipeline refers to the entire end-to-end process and time required to obtain new capacity, including hardware selection, approvals, purchasing, shipping, and server provisioning."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "C",
    "q": "What's a significant challenge in the procurement process for large organizations?",
    "o": [
      "Quick delivery times",
      "Long approval times for purchasing hardware",
      "Lack of developers",
      "Insufficient marketing strategies"
    ],
    "a": 1,
    "e": "In large organizations, bureaucratic purchasing approvals, vendor negotiations, and budget allocations often cause long approval times for hardware procurement, representing a major bottleneck for capacity scaling."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What metric is critical to watch when ordering equipment?",
    "o": [
      "CPU usage",
      "Memory allocation",
      "Procurement time",
      "Network speed"
    ],
    "a": 2,
    "e": "Procurement time (lead time) is a critical metric to monitor because if hardware takes 6 weeks to arrive and configure, capacity planners must place orders at least 6 weeks before the system reaches its resource ceiling."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "C",
    "q": "What is Just-in-Time (JIT) inventory practice?",
    "o": [
      "Maintaining large inventories for availability",
      "Ordering and stocking parts only as needed",
      "Increasing storage capacity before it's needed",
      "Reducing the number of suppliers"
    ],
    "a": 1,
    "e": "Just-in-Time (JIT) inventory is the practice of ordering and stocking components only when they are needed. In web operations, JIT provisioning (like on-demand cloud scaling) minimizes wasted capacity and reduces infrastructure costs."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "Why might startups order servers out of fear?",
    "o": [
      "Reduce operational costs",
      "Ensure enough capacity when launching new products",
      "Improve code quality",
      "Optimize marketing efforts"
    ],
    "a": 1,
    "e": "Startups often order servers out of fear of crashing during a launch or media event. Because they lack historical data to predict load, they over-provision to ensure enough capacity to survive peak traffic."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "C",
    "q": "What's one benefit of using memcached in web applications?",
    "o": [
      "Increasing database query times",
      "Reducing load on database servers",
      "Increasing storage costs",
      "Slowing down client response time"
    ],
    "a": 1,
    "e": "Memcached is an in-memory key-value cache. Using it reduces the load on database servers by serving high-frequency read queries directly from RAM, protecting database disks from becoming the bottleneck."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What can long-term traffic-pattern trends help inform?",
    "o": [
      "Immediate hardware needs",
      "Long-term decisions and site strategy",
      "Short-term marketing efforts",
      "Daily operational tasks"
    ],
    "a": 1,
    "e": "Long-term traffic-pattern trends provide broad insights that inform strategic business decisions, site architecture revisions, and long-term hardware contracts, rather than immediate daily operational fixes."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What's a typical daily traffic pattern for a US web server?",
    "o": [
      "Rises slowly in morning, peaks in afternoon, drops overnight",
      "Constant throughout the day",
      "Drops in morning, rises in evening",
      "Peaks overnight, drops during the day"
    ],
    "a": 0,
    "e": "A typical US-based web server sees traffic rise slowly in the morning as people wake up and start work, peak in the afternoon (during business hours), and drop to its lowest levels overnight."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What could be a side effect of deploying memcached?",
    "o": [
      "Decreased web server load",
      "Increased web server capacity issues",
      "Slower user response times",
      "Reduced database query speeds"
    ],
    "a": 1,
    "e": "Deploying Memcached handles database bottlenecks but shifts pressure to the web or application servers, which must handle increased requests and connection pools. This can lead to unexpected capacity issues on the web tier."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "Why is understanding user behavior important in capacity planning?",
    "o": [
      "Determines company financial health",
      "Provides valuable data for predicting future demand",
      "Ensures better marketing",
      "Reduces need for tech support"
    ],
    "a": 1,
    "e": "Understanding user behavior (such as average sessions, pages viewed, or checkout frequencies) provides capacity planners with the underlying driver metrics needed to predict future hardware demand under varying user traffic levels."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What's the relationship between capacity planning and product management?",
    "o": [
      "Completely independent",
      "Product management develops ideas; capacity planning only maintains infrastructure",
      "Both use data for forecasting and should align",
      "Capacity planning relies only on historical data"
    ],
    "a": 2,
    "e": "Capacity planning and product management are highly related because both use historical data and market projections to forecast future demand. They must align so that infrastructure capacity is ready before product changes launch."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What's a best practice for capacity planners regarding product management?",
    "o": [
      "Isolate to avoid interference",
      "Develop an ongoing conversation with product management",
      "Rely solely on historical data",
      "Avoid discussing new features"
    ],
    "a": 1,
    "e": "Capacity planners should maintain an ongoing, collaborative conversation with product management to stay informed of upcoming feature launches, marketing campaigns, or user growth plans that will impact server load."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "How often should forecasts be reviewed for accuracy?",
    "o": [
      "Monthly",
      "Bi-annually",
      "Weekly or even daily",
      "Annually"
    ],
    "a": 2,
    "e": "Resource usage and user behaviors can shift rapidly. Forecasts should be reviewed weekly or even daily to detect anomalies, track progress against ceilings, and adjust procurement timelines."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What should be done if hardware limitations change?",
    "o": [
      "Continue using old ceilings",
      "Update the metric used to determine the ceiling",
      "Ignore changes until next review",
      "Focus only on software improvements"
    ],
    "a": 1,
    "e": "When hardware limitations change (e.g., upgrading to faster CPUs or SSDs), the old capacity ceilings are no longer valid. Planners must update the metrics and resource thresholds used to determine the system's capacity ceiling."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What seasonal variation is mentioned in the text?",
    "o": [
      "Increased usage during summer holidays",
      "Decreased usage on weekdays",
      "Increased usage at the start of college in fall",
      "Decreased usage during Nov/Dec holidays"
    ],
    "a": 2,
    "e": "The text references seasonal variations in traffic, specifically noting increased internet and service usage at the start of college in the fall, which planners must anticipate."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What effect do seasonal variations have on forecasting?",
    "o": [
      "Simplify forecasting",
      "Make forecasting unnecessary",
      "Influence how wide or narrow the forecasting window should be",
      "Reduce need for hardware upgrades"
    ],
    "a": 2,
    "e": "Seasonal variations influence how wide or narrow the forecasting window should be. Planners need a wide enough window (e.g., a full year) to capture holiday or fall-start seasonal surges, otherwise their projections will be skewed."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "C",
    "q": "What's a key goal of automated deployment and configuration tools?",
    "o": [
      "Increase time to provision new capacity",
      "Minimize time to provision new capacity",
      "Increase hardware diversity",
      "Decentralize configuration management"
    ],
    "a": 1,
    "e": "A primary goal of automated deployment and configuration tools (like Ansible, Chef, or Puppet) is to minimize the time to provision new capacity, allowing teams to scale up rapidly when capacity thresholds are breached."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What advantage does a centralized configuration/management environment provide?",
    "o": [
      "Increases infrastructure complexity",
      "Makes replication and backup of files easier",
      "Eliminates need for version control",
      "Allows multiple servers to run config tasks independently"
    ],
    "a": 1,
    "e": "A centralized configuration management system makes replication, backups, auditing, and version control of configuration files far easier because all changes are managed in a single, authoritative repository."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "C",
    "q": "What's the 'holy grail' of deployment systems?",
    "o": [
      "Admins manually install software on new servers",
      "New servers automatically start working without admin intervention",
      "Keep hardware inventory distributed",
      "Perform config changes directly on individual servers"
    ],
    "a": 1,
    "e": "The 'holy grail' of deployment systems is zero-touch provisioning: a state where new physical or virtual servers automatically bootstrap, configure themselves, and join the active pool without manual administrative intervention."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What's a potential hindrance of disparate software configs across cluster nodes?",
    "o": [
      "Makes the system easier to optimize",
      "Limits performance optimization",
      "Simplifies troubleshooting",
      "Eliminates need for centralized management"
    ],
    "a": 1,
    "e": "Having disparate software configurations across cluster nodes limits performance optimization and complicates debugging. Standardized node environments are essential for predictable scaling and tuning."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "C",
    "q": "What's an advantage of image-based systems for OS installation?",
    "o": [
      "Greater accountability for installed files",
      "Faster installation process",
      "Uses package management tools",
      "More complex to manage"
    ],
    "a": 1,
    "e": "An advantage of image-based OS deployment (like copying a gold master disk image) is a much faster installation process compared to package-by-package installations from a repository."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "C",
    "q": "What does an Amazon Machine Image (AMI) include?",
    "o": [
      "Only the OS",
      "Only application servers",
      "Template for root volume, launch permissions, and block device mapping",
      "Template for root volume and app servers only"
    ],
    "a": 2,
    "e": "An Amazon Machine Image (AMI) includes the template for the root volume (OS, app server, software), launch permissions that control which AWS accounts can use the AMI, and block device mappings."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "What is the role of a client process in a typical configuration management system?",
    "o": [
      "Manually request configuration updates",
      "Periodically poll the server for new configurations",
      "Replace the server in case of failure",
      "Store all configurations locally"
    ],
    "a": 1,
    "e": "In agent-based configuration systems (like Puppet or Chef client), the client daemon runs on the target node and periodically polls the central server for new configurations, applying updates locally."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "W",
    "q": "In configuration management, what is a 'role'?",
    "o": [
      "A particular type of machine performing a specific task",
      "A collection of unrelated software/configs",
      "A single server dedicated to one unique task",
      "A temporary testing setting"
    ],
    "a": 0,
    "e": "In configuration management, a 'role' describes a particular type of machine performing a specific logical task (e.g., a database role, a web server role, or a caching role)."
  },
  {
    "m": "M4: Procurement & Config",
    "t": "I",
    "q": "Why is it beneficial to identify services common to multiple roles?",
    "o": [
      "Create redundant configuration routines",
      "Simplify deploying new roles by reusing existing configurations",
      "Ensure each role is unique/independent",
      "Avoid using common configurations"
    ],
    "a": 1,
    "e": "Identifying services common to multiple roles (like logging or monitoring daemons) simplifies configuration reuse, making it easier to define and deploy new roles by building on existing config blocks."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "C",
    "q": "What's a primary advantage of server virtualization?",
    "o": [
      "Direct hardware control",
      "Increased physical server count",
      "Efficient resource utilization",
      "Simplified network configurations"
    ],
    "a": 2,
    "e": "Server virtualization allows multiple virtual machines (VMs) to share the same physical server. This leads to highly efficient resource utilization, as multiple underutilized workloads are consolidated onto a single machine."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "C",
    "q": "What's a key benefit of migrating guest OS instances in virtualization?",
    "o": [
      "Improved network performance",
      "Enhanced application compatibility",
      "Fault tolerance and hardware-failure resilience",
      "Reduced power consumption"
    ],
    "a": 2,
    "e": "Migrating guest OS instances between physical hosts (e.g., VM live migration) provides fault tolerance and hardware-failure resilience, allowing physical servers to be serviced without application downtime."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "C",
    "q": "Why are containers considered efficient compared to VMs?",
    "o": [
      "They use a hypervisor for resource management",
      "They require less disk space for installation",
      "They share the host OS kernel for running applications",
      "They provide stronger isolation between apps"
    ],
    "a": 2,
    "e": "Containers are highly efficient compared to VMs because they share the host OS kernel and isolate application processes, avoiding the heavy memory and CPU overhead of running a full guest OS for each application."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "W",
    "q": "What's a potential disadvantage of virtualization for capacity planning?",
    "o": [
      "Complicated metric collection",
      "Inability to migrate VMs",
      "Reduced network performance",
      "Increased power consumption"
    ],
    "a": 0,
    "e": "A major disadvantage of virtualization for capacity planning is that it complicates metric collection. The hypervisor layer obscures direct hardware access, making it hard to measure true CPU, disk I/O, or memory contention."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "C",
    "q": "How do containers differ from VMs in resource consumption?",
    "o": [
      "Containers require more memory than VMs",
      "VMs share the host OS kernel; containers don't",
      "VMs are more portable across environments",
      "Containers run processes directly on the host OS without a hypervisor"
    ],
    "a": 3,
    "e": "Containers run processes directly on the host OS kernel without a hypervisor, consuming significantly fewer resources than VMs, which run complete guest OS instances on top of a hypervisor."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "W",
    "q": "What challenge do dedicated instances specifically address in cloud computing?",
    "o": [
      "Security concerns",
      "Performance isolation",
      "Cost management",
      "Container scalability"
    ],
    "a": 1,
    "e": "Dedicated hardware instances in public clouds address the challenge of performance isolation. They ensure that a customer's workload is isolated on a physical host, preventing 'noisy neighbors' from degrading performance."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "C",
    "q": "What contributes to performance variation among instances in cloud environments?",
    "o": [
      "Limited network topology",
      "Uniform hardware configuration",
      "Resource contention across customers",
      "Reduced instance diversity"
    ],
    "a": 2,
    "e": "Performance variations in public cloud instances are largely caused by resource contention (CPU steal time, disk I/O bottlenecks) from other customers sharing the same physical hardware."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "W",
    "q": "What distinguishes containers from VMs in terms of application portability?",
    "o": [
      "VMs are more portable across hypervisors",
      "Containers provide stronger isolation",
      "VMs share the host OS kernel",
      "Containers are less dependent on underlying hardware"
    ],
    "a": 3,
    "e": "Containers are highly portable because they package the application and all its dependencies, making them less dependent on the underlying hardware or hypervisor version compared to virtual machines."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "I",
    "q": "Which of the following is a type of cloud computing service?",
    "o": [
      "Service-as-a-Software",
      "Software-and-a-Server",
      "Software-as-a-Service",
      "Software-as-a-Server"
    ],
    "a": 2,
    "e": "Software-as-a-Service (SaaS) is a type of cloud computing service where users access software applications over the internet without managing the underlying infrastructure."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "W",
    "q": "In cloud computing, the client is on which end?",
    "o": [
      "Backend",
      "Frontend",
      "Depends",
      "Both A and B"
    ],
    "a": 1,
    "e": "In a cloud computing model, the client interaction resides on the frontend (e.g., browser or mobile client), which communicates with the backend services hosted in the cloud."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "C",
    "q": "Cloud computing is fundamentally based on:",
    "o": [
      "Modulation",
      "Hybridization",
      "Virtualization",
      "Multiplexing"
    ],
    "a": 2,
    "e": "Cloud computing is fundamentally based on virtualization, which abstracts physical hardware into poolable, dynamically allocatable virtual resources."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "I",
    "q": "True or false: Google Docs is a type of cloud computing.",
    "o": [
      "True",
      "False"
    ],
    "a": 0,
    "e": "Google Docs is a type of cloud computing (specifically SaaS) because the application logic and document storage run on Google's cloud servers, accessed via web browser interfaces."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "W",
    "q": "Which of these is NOT among the building blocks every successful cloud-computing platform should follow?",
    "o": [
      "World-class security",
      "Complete disaster recovery",
      "High availability",
      "Resource Utilization"
    ],
    "a": 3,
    "e": "World-class security, disaster recovery, and high availability are core operational pillars of cloud platforms. Resource utilization is an internal efficiency concern, not a building block/service guarantee for customers."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "C",
    "q": "In a ___ cloud computing environment, the organization manages some resources locally while others are provided externally.",
    "o": [
      "Public",
      "Hybrid",
      "Private",
      "All of the above"
    ],
    "a": 1,
    "e": "A hybrid cloud environment combines a private cloud (on-premises resources) with a public cloud (external resources), allowing data and applications to be shared between them."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "C",
    "q": "SLA stands for:",
    "o": [
      "Standard Level Assignments",
      "Service Level Agreements",
      "Standard Level Agreements",
      "Service Level Assignments"
    ],
    "a": 1,
    "e": "SLA stands for Service Level Agreement, which is a formal contract between a service provider and a customer specifying expected service levels (uptime, latency, throughput)."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "W",
    "q": "Which of these is identified as a cloud offering in the text?",
    "o": [
      "Web Applications",
      "Hadoop",
      "Intranet",
      "All of the mentioned"
    ],
    "a": 1,
    "e": "Hadoop is a framework for distributed storage and processing. In the text, it is referenced as a specific cloud offering for processing large scale data workloads."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "C",
    "q": "Which is the best-known cloud service model grouping?",
    "o": [
      "SaaS",
      "PaaS",
      "IaaS",
      "All of the above"
    ],
    "a": 3,
    "e": "SaaS (Software-as-a-Service), PaaS (Platform-as-a-Service), and IaaS (Infrastructure-as-a-Service) represent the three core service models of cloud computing, collectively describing different levels of user management."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "W",
    "q": "You can't count on a cloud provider maintaining your ___ in the face of government actions.",
    "o": [
      "Scalability",
      "Reliability",
      "Privacy",
      "None of the mentioned"
    ],
    "a": 2,
    "e": "You cannot guarantee your data privacy in the face of government actions (like subpoenas or national security letters) when relying on a public cloud provider, as the physical infrastructure is managed by a third party."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "C",
    "q": "Which provider type relies on virtual machine technology to deliver servers?",
    "o": [
      "CaaS",
      "AaaS",
      "PaaS",
      "IaaS"
    ],
    "a": 3,
    "e": "Infrastructure-as-a-Service (IaaS) providers (like AWS EC2 or Google Compute Engine) leverage virtual machine technology to deliver raw computing instances, storage, and networking over the internet."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "W",
    "q": "Which of these is an essential concept related to Cloud?",
    "o": [
      "Reliability",
      "Productivity",
      "Abstraction",
      "Productivity and reliability"
    ],
    "a": 2,
    "e": "Abstraction is a key concept of cloud computing. By abstracting the complex underlying physical hardware, networks, and storage systems, the cloud provides users with simple, virtualized APIs and interfaces."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "I",
    "q": "Which of these is a cloud platform by Amazon?",
    "o": [
      "Azure",
      "AWS",
      "Cloudera",
      "All of the mentioned"
    ],
    "a": 1,
    "e": "Amazon Web Services (AWS) is Amazon's comprehensive, market-leading cloud computing platform, offering over 200 fully featured services from data centers globally."
  },
  {
    "m": "M5: Virtualization & Cloud",
    "t": "C",
    "q": "Which is a unique attribute of cloud computing?",
    "o": [
      "Utility-type delivery",
      "Elasticity",
      "Low barrier to entry",
      "All of the above"
    ],
    "a": 3,
    "e": "Cloud computing is uniquely characterized by its utility-type delivery (pay-as-you-go), rapid elasticity (on-demand scaling), and low barrier to entry (no upfront capital expenditure)."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "Little's Law relates which three quantities in capacity/queuing analysis?",
    "o": [
      "Throughput, latency, error rate",
      "Average number in system, arrival rate, average time in system",
      "CPU cores, memory, disk I/O",
      "Uptime, downtime, MTTR"
    ],
    "a": 1,
    "e": "Little's Law is a fundamental queuing theory equation stating that the average number of items in a system (L) equals the average arrival rate (lambda) multiplied by the average time an item spends in the system (W)."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "Amdahl's Law is most often used to reason about:",
    "o": [
      "The theoretical speedup limit from parallelizing part of a workload",
      "The maximum allowable SLA downtime",
      "The cost of vertical vs horizontal scaling",
      "Cache eviction policy tradeoffs"
    ],
    "a": 0,
    "e": "Amdahl's Law is used to calculate the maximum theoretical speedup improvement of a system when only a part of it is parallelized. It proves that the serial (non-parallel) portion of any workload acts as the ultimate bottleneck."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "In load testing, a 'soak test' is designed to:",
    "o": [
      "Find the absolute breaking point under extreme load",
      "Detect memory leaks/degradation under sustained normal load over time",
      "Simulate a sudden traffic spike",
      "Test failover between data centers"
    ],
    "a": 1,
    "e": "A soak test (or endurance test) is a load testing practice where a system is subjected to a sustained normal or high workload over an extended period. This is primarily designed to detect memory leaks, resource exhaustion, or gradual performance degradation over time."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "A 'spike test' in load testing specifically evaluates:",
    "o": [
      "System behavior under a sudden, sharp increase in load",
      "Long-term data retention policies",
      "Database schema migrations",
      "Config management rollback"
    ],
    "a": 0,
    "e": "A spike test is a load test designed to evaluate system stability and recovery by sending a sudden, dramatic increase in traffic, measuring how well the auto-scalers and load balancers absorb the surge."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "The four SRE 'golden signals' for monitoring a service are:",
    "o": [
      "CPU, memory, disk, network",
      "Latency, traffic, errors, saturation",
      "Uptime, cost, headcount, tickets",
      "Throughput, hit ratio, ceiling, SPOF"
    ],
    "a": 1,
    "e": "The four 'golden signals' in SRE (Site Reliability Engineering) are Latency (time to serve a request), Traffic (demand/throughput), Errors (rate of failed requests), and Saturation (how full the most constrained resource is)."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "'Capacity headroom' (or buffer) generally refers to:",
    "o": [
      "The gap between current usage and the defined ceiling, reserved for spikes/growth",
      "The amount of unused disk space on a laptop",
      "The number of servers awaiting decommission",
      "The interval between forecast reviews"
    ],
    "a": 0,
    "e": "Capacity headroom (or capacity buffer) is the difference between current resource utilization and the absolute ceiling. Maintaining headroom is essential to absorb sudden traffic spikes or allow time for new servers to be provisioned."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "A canary deployment is best described as:",
    "o": [
      "Rolling a new version out to a small subset of traffic/servers before full rollout",
      "Deploying to two identical environments and switching traffic instantly",
      "A disaster-recovery failover pattern",
      "A load-testing technique for databases"
    ],
    "a": 0,
    "e": "A canary deployment involves rolling out a new software version to a tiny subset of production servers or users first. Planners monitor this subset for errors before deploying the update to the rest of the infrastructure."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "Blue-green deployment primarily helps with:",
    "o": [
      "Near-zero-downtime releases by switching traffic between two environments",
      "Forecasting seasonal traffic variation",
      "Reducing cache hit ratio",
      "Sharding a database"
    ],
    "a": 0,
    "e": "Blue-green deployment is a zero-downtime release strategy using two identical production environments. The 'green' environment runs the new code while the 'blue' environment handles active production traffic. Once verified, the router instantly switches traffic to green."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "Which best distinguishes database sharding from replication?",
    "o": [
      "Sharding splits data across nodes by key; replication copies the same data across nodes",
      "Sharding copies all data everywhere; replication splits it",
      "They're the same technique with different names",
      "Sharding is only used for caching, replication only for backups"
    ],
    "a": 0,
    "e": "Database sharding partitions database records horizontally across multiple physical servers based on a shard key, distributing the overall read/write workload. Replication, on the other hand, copies the entire database across nodes to achieve high availability and read scalability."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "An autoscaling policy triggered by CPU utilization is an example of:",
    "o": [
      "Reactive/metric-based scaling",
      "Diagonal scaling only",
      "A disaster-recovery mechanism",
      "A procurement pipeline step"
    ],
    "a": 0,
    "e": "Autoscaling policies triggered by real-time metric thresholds (such as CPU utilization exceeding 80%) are reactive scaling mechanisms, adjusting capacity on-demand in response to active resource pressure."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "'Noisy neighbor' in a multi-tenant cloud environment refers to:",
    "o": [
      "A co-located tenant consuming shared resources and degrading your performance",
      "A network security breach",
      "A misconfigured load balancer",
      "An SLA violation notice"
    ],
    "a": 0,
    "e": "A 'noisy neighbor' refers to a multi-tenant cloud scenario where one virtual machine on a shared hypervisor consumes excessive CPU, memory, or disk I/O, degrading the performance of other co-located tenant VMs."
  },
  {
    "m": "Bonus: Beyond the source",
    "t": "B",
    "q": "The CAP theorem states a distributed system can only fully guarantee two of which three properties?",
    "o": [
      "Consistency, Availability, Partition tolerance",
      "Capacity, Availability, Performance",
      "Cost, Availability, Provisioning",
      "Caching, Aggregation, Partitioning"
    ],
    "a": 0,
    "e": "The CAP theorem states that a distributed data store can simultaneously guarantee at most two of three properties: Consistency (all nodes see the same data at the same time), Availability (every request receives a non-error response), and Partition Tolerance (the system continues to operate despite network partition errors)."
  }
];