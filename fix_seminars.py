import re

with open('scripts/data.js', 'r') as f:
    content = f.read()

# Replace specific names with vague titles
content = re.sub(r"speaker: '[^']+',\n\s*speakerRole: '[^']+',\n\s*initials: '[^']+',", "speaker: 'Industry Expert',\n      speakerRole: 'Guest Speaker',\n      initials: 'IE',", content)

with open('scripts/data.js', 'w') as f:
    f.write(content)

print("Fixed seminars data")
