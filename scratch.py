import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in html_files:
    with open(file, 'r') as f:
        content = f.read()

    # Remove pricing from nav links
    content = re.sub(r'<a href="pricing\.html">Pricing</a>\n?\s*', '', content)
    
    # Remove "See pricing" buttons
    content = re.sub(r'<a class="btn btn-ghost" href="pricing\.html">See pricing</a>\n?\s*', '', content)
    
    # Change specific links to trigger modals
    # Press
    content = re.sub(r'<a href="#">Press</a>', r'<a href="javascript:void(0)" onclick="window.openInfoModal(\'press\')">Press</a>', content)
    
    # Careers
    content = re.sub(r'<a href="#">Careers</a>', r'<a href="javascript:void(0)" onclick="window.openInfoModal(\'careers\')">Careers</a>', content)
    
    # Brief generator
    content = re.sub(r'<a href="#">Brief generator</a>', r'<a href="javascript:void(0)" onclick="window.openInfoModal(\'brief\')">Brief generator</a>', content)
    
    # API docs
    content = re.sub(r'<a href="#">API docs</a>', r'<a href="javascript:void(0)" onclick="window.openInfoModal(\'api\')">API docs</a>', content)
    
    # Methodology
    content = re.sub(r'<a href="#">Methodology</a>', r'<a href="javascript:void(0)" onclick="window.openInfoModal(\'methodology\')">Methodology</a>', content)

    # Subscribe
    content = re.sub(r'<a href="#">Subscribe to The Brief →</a>', r'<a href="javascript:void(0)" onclick="window.openInfoModal(\'subscribe\')">Subscribe to The Brief →</a>', content)
    content = re.sub(r'<a class="btn btn-ghost" href="#">Subscribe to The Brief</a>', r'<a class="btn btn-ghost" href="javascript:void(0)" onclick="window.openInfoModal(\'subscribe\')">Subscribe to The Brief</a>', content)
    
    # Session brief
    content = re.sub(r'<a class="btn btn-ghost" href="#">Session brief</a>', r'<a class="btn btn-ghost" href="javascript:void(0)" onclick="window.openInfoModal(\'session\')">Session brief</a>', content)
    
    # Dashboard "Export" or whatever that button is
    content = re.sub(r'<a href="#" class="btn btn-solid">\s*<svg.*?svg>\s*Export PDF\s*</a>', r'<a href="javascript:void(0)" onclick="window.openInfoModal(\'export\')" class="btn btn-solid"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 1v7m-3-3l3 3 3-3m-4 4v1h8v-1"/></svg> Export PDF</a>', content, flags=re.DOTALL)

    # Also just in case, dashboard.html 254:
    content = re.sub(r'<a href="#" class="btn btn-solid">\s*Sync PMS\s*</a>', r'<a href="javascript:void(0)" onclick="window.openInfoModal(\'sync\')" class="btn btn-solid">Sync PMS</a>', content, flags=re.DOTALL)

    with open(file, 'w') as f:
        f.write(content)

print("Done replacing.")
