from django import template
import re

register = template.Library()

@register.filter(name='fix_orphans')
def fix_orphans(value):
    if not value:
        return value
    
    # Polskie spójniki i przyimki, które nie mogą zostać same na końcu linii
    orphans = ['z', 'i', 'w', 'o', 'u', 'a', 'do', 'na', 'za', 'ze', 'we', 'po']
    
    for word in orphans:
        # Zamieniamy spację po słowie na twardą spację (&nbsp;)
        pattern = re.compile(rf'\b({word})\s', re.IGNORECASE)
        value = pattern.sub(r'\1&nbsp;', value)
        
    return value