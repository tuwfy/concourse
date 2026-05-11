import os

for file in ['styles/main.css', 'styles/components.css']:
    with open(file, 'r') as f:
        content = f.read()
    
    content = content.replace('—', '-')
    
    with open(file, 'w') as f:
        f.write(content)

print("Fixed CSS.")
