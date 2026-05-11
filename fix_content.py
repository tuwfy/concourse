import os
import re

# Fix HTML files
for file in os.listdir('.'):
    if file.endswith('.html'):
        with open(file, 'r') as f:
            content = f.read()
        
        # Replace em dash
        content = content.replace('—', '-')
        
        # Add target="_blank" to our newly created pages
        pages = ['press.html', 'careers.html', 'brief.html', 'api.html', 'methodology.html', 'subscribe.html', 'session.html', 'export.html', 'sync.html', 'brief_open.html']
        for p in pages:
            # We want to add target="_blank" if it's not already there
            # Using regex to match href="page.html" without target="_blank"
            content = re.sub(rf'href="{p}"(?!\s+target)', f'href="{p}" target="_blank"', content)
        
        with open(file, 'w') as f:
            f.write(content)

# Fix JS files
for file in os.listdir('scripts'):
    if file.endswith('.js'):
        with open(os.path.join('scripts', file), 'r') as f:
            content = f.read()
            
        content = content.replace('—', '-')
        
        with open(os.path.join('scripts', file), 'w') as f:
            f.write(content)

print("Fixed em dashes and added target=_blank")
