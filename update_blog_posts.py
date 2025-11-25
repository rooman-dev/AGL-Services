#!/usr/bin/env python3
"""
Update blog posts 3-12 with proper titles, translations, and animations.
"""

import re
import json
from pathlib import Path

# Blog post metadata
BLOG_POSTS_DATA = {
    3: {
        'title_en': 'How to Create High-Performing Social Media Ads That Convert',
        'title_ar': 'كيفية إنشاء إعلانات وسائل التواصل الاجتماعي عالية الأداء التي تحقق تحويلات',
        'date': 'November 19, 2025',
        'date_ar': 'نوفمبر 19، 2025',
        'read_time': '9 min read',
        'read_time_ar': '9 دقائق قراءة'
    },
    4: {
        'title_en': 'SEO in 2025 — Strategies That Deliver Real, Sustainable Growth',
        'title_ar': 'تحسين محركات البحث في 2025 — استراتيجيات تحقق نموًا حقيقيًا ومستدامًا',
        'date': 'November 19, 2025',
        'date_ar': 'نوفمبر 19، 2025',
        'read_time': '10 min read',
        'read_time_ar': '10 دقائق قراءة'
    },
    5: {
        'title_en': 'Why Branding Is the Foundation of Digital Marketing Success',
        'title_ar': 'لماذا العلامة التجارية هي أساس نجاح التسويق الرقمي',
        'date': 'November 19, 2025',
        'date_ar': 'نوفمبر 19، 2025',
        'read_time': '8 min read',
        'read_time_ar': '8 دقائق قراءة'
    },
    6: {
        'title_en': 'Why Businesses Struggle on Social Media — And How to Fix It',
        'title_ar': 'لماذا تكافح الشركات على وسائل التواصل الاجتماعي — وكيفية إصلاح ذلك',
        'date': 'November 19, 2025',
        'date_ar': 'نوفمبر 19، 2025',
        'read_time': '7 min read',
        'read_time_ar': '7 دقائق قراءة'
    },
    7: {
        'title_en': 'Video Marketing Trends for 2025',
        'title_ar': 'اتجاهات التسويق بالفيديو لعام 2025',
        'date': 'November 20, 2025',
        'date_ar': 'نوفمبر 20، 2025',
        'read_time': '6 min read',
        'read_time_ar': '6 دقائق قراءة'
    },
    8: {
        'title_en': 'Email Marketing Automation Secrets',
        'title_ar': 'أسرار أتمتة التسويق عبر البريد الإلكتروني',
        'date': 'November 21, 2025',
        'date_ar': 'نوفمبر 21، 2025',
        'read_time': '8 min read',
        'read_time_ar': '8 دقائق قراءة'
    },
    9: {
        'title_en': 'PPC vs. Organic: Where to Spend?',
        'title_ar': 'الإعلانات المدفوعة مقابل العضوية: أين تنفق؟',
        'date': 'November 22, 2025',
        'date_ar': 'نوفمبر 22، 2025',
        'read_time': '7 min read',
        'read_time_ar': '7 دقائق قراءة'
    },
    10: {
        'title_en': 'Mobile-First Indexing Explained',
        'title_ar': 'شرح الفهرسة الموجهة للجوال أولاً',
        'date': 'November 23, 2025',
        'date_ar': 'نوفمبر 23، 2025',
        'read_time': '6 min read',
        'read_time_ar': '6 دقائق قراءة'
    },
    11: {
        'title_en': 'Data Privacy and Marketing',
        'title_ar': 'خصوصية البيانات والتسويق',
        'date': 'November 24, 2025',
        'date_ar': 'نوفمبر 24، 2025',
        'read_time': '8 min read',
        'read_time_ar': '8 دقائق قراءة'
    },
    12: {
        'title_en': 'Global Marketing Strategies',
        'title_ar': 'استراتيجيات التسويق العالمية',
        'date': 'November 25, 2025',
        'date_ar': 'نوفمبر 25، 2025',
        'read_time': '9 min read',
        'read_time_ar': '9 دقائق قراءة'
    }
}

def update_blog_post_title(post_num):
    """Update a blog post's title with translation keys."""
    filepath = f'/home/ormnao/Documents/Projects/AGL-Services/blog-post-{post_num}.html'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    data = BLOG_POSTS_DATA[post_num]
    
    # Update title with data-i18n and fade-in-up
    old_title_pattern = r'<h1 class="article-title[^"]*">.*?</h1>'
    new_title = f'<h1 class="article-title fade-in-up" data-i18n="blog_post_{post_num}_title">{data["title_en"]}</h1>'
    content = re.sub(old_title_pattern, new_title, content, flags=re.DOTALL)
    
    # Update meta with translation keys
    old_meta_pattern = r'<div class="article-meta">.*?</div>'
    new_meta = f'''<div class="article-meta">
          <span><i class="fas fa-calendar"></i> <span data-i18n="blog_post_{post_num}_date">{data['date']}</span></span>
          <span><i class="fas fa-clock"></i> <span data-i18n="blog_read_time">{data['read_time']}</span></span>
          <span><i class="fas fa-user"></i> <span data-i18n="company_name">AdsGeniusLab</span></span>
        </div>'''
    content = re.sub(old_meta_pattern, new_meta, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Updated blog-post-{post_num}.html title and metadata")

def update_blog_post_translations(post_num):
    """Update a blog post's translation object with title translations."""
    filepath = f'/home/ormnao/Documents/Projects/AGL-Services/blog-post-{post_num}.html'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    data = BLOG_POSTS_DATA[post_num]
    
    # Find the translation object
    en_trans_pattern = r"('footer_terms': 'Terms of Service')"
    ar_trans_pattern = r"('footer_terms': 'شروط الخدمة')"
    
    en_new = f"""'footer_terms': 'Terms of Service',
        'blog_post_{post_num}_title': '{data['title_en']}',
        'blog_post_{post_num}_date': '{data['date']}',
        'blog_read_time': '{data['read_time']}',
        'company_name': 'AdsGeniusLab'"""
    
    ar_new = f"""'footer_terms': 'شروط الخدمة',
        'blog_post_{post_num}_title': '{data['title_ar']}',
        'blog_post_{post_num}_date': '{data['date_ar']}',
        'blog_read_time': '{data['read_time_ar']}',
        'company_name': 'AdsGeniusLab'"""
    
    content = re.sub(en_trans_pattern, en_new, content)
    content = re.sub(ar_trans_pattern, ar_new, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Updated blog-post-{post_num}.html translations")

def add_fade_in_animations(post_num):
    """Add fade-in-up class to paragraphs if not already present."""
    filepath = f'/home/ormnao/Documents/Projects/AGL-Services/blog-post-{post_num}.html'
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find article-content section and add fade-in-up to paragraphs that don't have it
    article_pattern = r'<div class="article-content">(.*?)</div>\s*</div>\s*</section>'
    
    def add_animation(match):
        article_content = match.group(1)
        # Add fade-in-up to paragraphs without it
        article_content = re.sub(
            r'<p>(?!.*fade-in-up)',
            '<p class="fade-in-up">',
            article_content
        )
        return f'<div class="article-content">{article_content}</div>\n    </div>\n  </section>'
    
    content = re.sub(article_pattern, add_animation, content, flags=re.DOTALL)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ Added animations to blog-post-{post_num}.html")

if __name__ == '__main__':
    print("Updating blog posts 3-12...\n")
    
    for post_num in range(3, 13):
        try:
            update_blog_post_title(post_num)
            update_blog_post_translations(post_num)
            add_fade_in_animations(post_num)
        except Exception as e:
            print(f"✗ Error updating blog-post-{post_num}.html: {e}")
    
    print("\n✓ All blog posts updated successfully!")
