import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

pages_to_make = {
    'press': 'press.html',
    'careers': 'careers.html',
    'brief': 'brief.html',
    'api': 'api.html',
    'methodology': 'methodology.html',
    'subscribe': 'subscribe.html',
    'session': 'session.html',
    'export': 'export.html',
    'sync': 'sync.html',
    'brief_open': 'brief_open.html'
}

for file in html_files:
    with open(file, 'r') as f:
        content = f.read()

    for key, new_page in pages_to_make.items():
        # Handle the standard onclick replacement
        content = re.sub(rf'<a href="javascript:void\(0\)" onclick="window\.openInfoModal\(\'{key}\'\)">', f'<a href="{new_page}">', content)
        content = re.sub(rf'<a class="btn btn-ghost" href="javascript:void\(0\)" onclick="window\.openInfoModal\(\'{key}\'\)">', f'<a class="btn btn-ghost" href="{new_page}">', content)
        # Handle dashboard special replacements
        content = re.sub(rf'<a href="javascript:void\(0\)" onclick="window\.openInfoModal\(\'{key}\'\)" class="btn btn-solid">', f'<a href="{new_page}" class="btn btn-solid">', content)
        content = re.sub(rf'window\.openInfoModal\(\'{key}\'\)', f"window.location.href='{new_page}'", content)

    with open(file, 'w') as f:
        f.write(content)

print("Updated links to new html pages.")
