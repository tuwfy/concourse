import os

template_html = """<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} · Concourse</title>
<meta name="theme-color" content="#1f4e3a">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles/main.css">
<link rel="stylesheet" href="styles/components.css">
</head>
<body>

<div class="gridlines" aria-hidden="true"><div><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div>

<nav class="top" id="topnav">
  <div class="container">
    <div class="row">
      <a class="logo" href="index.html">concourse<span class="dot"></span></a>
      <div class="nav-links">
        <a href="venues.html">Venues</a>
        <a href="dashboard.html">How it works</a>
        <a href="seminars.html">Seminars</a>
        <a href="growth.html">Growth</a>
      </div>
      <div class="nav-cta">
        <a class="btn btn-ghost" href="contact.html">Sign in</a>
        <a class="btn btn-solid" href="contact.html#demo">
          Book a demo
          <svg class="arr" viewBox="0 0 11 11" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 9 L9 2 M3.5 2 L9 2 L9 7.5"/></svg>
        </a>
      </div>
    </div>
  </div>
</nav>

<header class="page-head">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Home</a> · {eyebrow}</div>
    <h1>{title}</h1>
    <p class="lede">{desc}</p>
  </div>
</header>

<section style="padding-top: 0;">
  <div class="container">
    <div style="background: var(--paper-2); padding: 40px; border: 1px solid var(--line); border-radius: 4px;">
      <h3 style="font-family: var(--serif); font-size: 24px; margin-top:0;">Details</h3>
      <p style="font-family: var(--sans); font-size: 16px; line-height: 1.6; color: var(--ink-2);">{content}</p>
      <a href="index.html" class="btn btn-solid" style="margin-top: 20px;">Return Home</a>
    </div>
  </div>
</section>

<footer class="site">
  <div class="container">
    <div class="foot-bottom">
      <span>© 2026 Concourse Research, Inc.</span>
      <span>Privacy · Terms · Security</span>
    </div>
  </div>
</footer>
<script src="scripts/main.js"></script>
</body>
</html>"""

pages = {
    'press': { 'eyebrow': 'Media', 'title': 'Press & Media', 'desc': 'For press inquiries, contact media@concourse.co. Download our brand kit and recent press releases.', 'content': 'Concourse is constantly evolving the group hospitality space. Access our latest press releases, media kits, and brand assets here. For direct inquiries, please contact our PR team.' },
    'careers': { 'eyebrow': 'Careers', 'title': 'Join Concourse', 'desc': 'We are currently hiring for engineering and sales roles in our New York and London offices.', 'content': 'At Concourse, we are building the operational layer for group hospitality. We offer competitive salaries, equity, and a remote-friendly culture. Send your resume to careers@concourse.co to apply.' },
    'brief': { 'eyebrow': 'Tools', 'title': 'Brief Generator', 'desc': 'Our AI-powered brief generator helps you structure your RFP. This feature is currently in private beta for registered planners.', 'content': 'The Brief Generator uses advanced LLMs to automatically structure your event requirements into an industry-standard RFP. It analyzes your input to ensure all necessary details are included before routing to venues.' },
    'api': { 'eyebrow': 'Developers', 'title': 'API Documentation', 'desc': 'Integrate Concourse directly with your PMS or CRM. API access requires an enterprise agreement.', 'content': 'Our RESTful API allows deep integration with your existing PMS and CRM systems. View endpoints, authentication methods, and rate limits in the developer portal. Contact your platform engineer for credentials.' },
    'methodology': { 'eyebrow': 'Data', 'title': 'Methodology', 'desc': 'Our insights are derived from first-party closed-lost and benchmarking data across our network of 2,840+ properties.', 'content': 'We aggregate and anonymize weekly booking data to provide real-time market insights. Our data science team uses this to project 10-year growth forecasts and benchmark group ADRs with high precision.' },
    'subscribe': { 'eyebrow': 'Newsletter', 'title': 'Subscribe to The Brief', 'desc': 'Get weekly insights on group ADR and lead volume directly in your inbox.', 'content': 'Join 12,000+ hospitality professionals who receive our weekly insights. Enter your email above to subscribe. We respect your privacy and never sell your data.' },
    'session': { 'eyebrow': 'Seminars', 'title': 'Session Brief', 'desc': 'Download the full curriculum, speaker bios, and prep materials for this seminar.', 'content': 'This session brief contains the full agenda, prerequisites, and speaker background. Registered attendees will also receive a copy via email 48 hours before the event.' },
    'export': { 'eyebrow': 'Export', 'title': 'Export PDF', 'desc': 'Your export is being generated. It will automatically download once it is ready.', 'content': 'Generating high-quality PDF reports from your dashboard data. This process aggregates your KPIs and formats them for executive review.' },
    'sync': { 'eyebrow': 'Sync', 'title': 'Sync PMS', 'desc': 'Initiating manual sync with your Property Management System.', 'content': 'The sync process pulls the latest room blocks, availability, and confirmed reservations from your PMS. This ensures your Concourse dashboard is completely up-to-date.' },
    'brief_open': { 'eyebrow': 'Insights', 'title': 'The Brief', 'desc': 'Opening the full report. Please wait while we load the latest market data.', 'content': 'The full brief contains detailed analytics, competitor benchmarking, and actionable insights. Loading the complete dataset now...' }
}

for key, data in pages.items():
    with open(f"{key}.html", "w") as f:
        f.write(template_html.format(**data))

print("Created 10 new HTML pages.")
