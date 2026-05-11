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
        # The string literally contains \', so we need to match it. 
        # In Python regex, \\\\' matches \'
        pattern1 = r'<a href="javascript:void\(0\)" onclick="window\.openInfoModal\(\\\'' + key + r'\\\'\)">'
        content = re.sub(pattern1, f'<a href="{new_page}">', content)
        
        pattern2 = r'<a class="btn btn-ghost" href="javascript:void\(0\)" onclick="window\.openInfoModal\(\\\'' + key + r'\\\'\)">'
        content = re.sub(pattern2, f'<a class="btn btn-ghost" href="{new_page}">', content)
        
        pattern3 = r'<a href="javascript:void\(0\)" onclick="window\.openInfoModal\(\\\'' + key + r'\\\'\)" class="btn btn-solid">'
        content = re.sub(pattern3, f'<a href="{new_page}" class="btn btn-solid">', content)

    with open(file, 'w') as f:
        f.write(content)

print("Fixed links.")
