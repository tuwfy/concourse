import os
import re

css_file = 'styles/components.css'
with open(css_file, 'r') as f:
    content = f.read()

content = re.sub(r'padding:\s*clamp\([^)]+\)\s*0\s*clamp\([^)]+\);', 'padding: 80px 0 60px;', content)
content = re.sub(r'padding:\s*clamp\([^)]+\)\s*0;', 'padding: 80px 0;', content)
content = re.sub(r'margin-top:\s*clamp\([^)]+\);', 'margin-top: 40px;', content)
content = re.sub(r'font-size:\s*clamp\([^)]+\);', 'font-size: 60px;', content)

with open(css_file, 'w') as f:
    f.write(content)

css_file2 = 'styles/main.css'
with open(css_file2, 'r') as f:
    content = f.read()

content = re.sub(r'padding:\s*clamp\([^)]+\)\s*0\s*clamp\([^)]+\);', 'padding: 80px 0 60px;', content)
content = re.sub(r'padding:\s*clamp\([^)]+\)\s*0;', 'padding: 80px 0;', content)
content = re.sub(r'margin-top:\s*clamp\([^)]+\);', 'margin-top: 40px;', content)
content = re.sub(r'font-size:\s*clamp\([^)]+\);', 'font-size: 60px;', content)
content = re.sub(r'font-size:\s*clamp\(80px,\s*16vw,\s*260px\);', 'font-size: 80px;', content)

with open(css_file2, 'w') as f:
    f.write(content)

print("Replaced clamp in CSS.")
