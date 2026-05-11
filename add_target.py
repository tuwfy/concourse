import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in html_files:
    with open(file, 'r') as f:
        content = f.read()

    # Add target="_blank" to all elements with class containing 'btn'
    # We look for <a ... class="...btn..." ...>
    # If target="_blank" is not there, we add it.
    
    def add_target(match):
        full_tag = match.group(0)
        if 'target=' not in full_tag:
            # add target="_blank" right after <a
            return full_tag.replace('<a ', '<a target="_blank" ')
        return full_tag

    new_content = re.sub(r'<a\s+[^>]*class="[^"]*\bbtn\b[^"]*"[^>]*>', add_target, content)

    if new_content != content:
        with open(file, 'w') as f:
            f.write(new_content)

print("Added target=_blank to all buttons.")
