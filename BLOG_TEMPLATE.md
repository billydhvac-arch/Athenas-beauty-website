# Blog Post Template for Athena's Beauty

Use this template when creating new blog posts for SEO targeting.

## File Structure
Create new blog posts in: `src/data/blogPosts.ts` (or add to existing array in BlogPage.tsx)

## Template

```typescript
{
  id: 'UNIQUE_ID', // e.g., '11', '12', etc.
  title: 'MAIN KEYWORD | Secondary Keyword | Athena's Beauty Denton',
  // Example: "French Tip Nails in Denton: Classic Elegance | Athena's Beauty"
  
  excerpt: 'Compelling 150-200 character description with primary keyword.',
  // This appears in blog cards and search results
  
  content: `Full article content (800-1200 words) with:
    - H2 headings every 300 words
    - Primary keyword in first 100 words
    - "Denton, TX" mentioned 2-3 times naturally
    - Internal links to #services-page
    - Call-to-action at end
  `,
  
  date: 'Month Day, Year', // e.g., 'March 15, 2026'
  readTime: 'X min read', // e.g., '5 min read'
  category: 'Category', // 'Trends', 'Education', 'Tips', 'Inspiration'
  image: '/workX.jpg', // Use existing work images
  featured: false, // Only one post should be featured: true
}
```

## SEO Guidelines

### Title Format
- Include primary keyword near beginning
- Mention "Denton" or "Denton TX" when relevant
- Keep under 60 characters
- Examples:
  - "Builder Gel Nails in Denton: Complete Guide | Athena's Beauty"
  - "Spring 2026 Nail Trends Denton Students Love"
  - "Acrylic vs Dip Powder: Denton Nail Salon Guide"

### Content Structure
1. **Intro (100-150 words)**
   - Hook reader
   - Include primary keyword
   - Mention Denton location naturally

2. **Body Sections (600-900 words)**
   - Use H2 headers with keywords
   - Short paragraphs (2-3 sentences)
   - Bullet points for readability
   - Include service mentions with links

3. **Conclusion (100-150 words)**
   - Summarize key points
   - Strong call-to-action
   - Link to booking

### Keyword Placement
- Primary keyword: First 100 words, one H2, conclusion
- Secondary keywords: Spread naturally throughout
- "Denton TX" or "in Denton": 2-3 times per article
- Service names: Link to #services-page

### Internal Linking
Always link to services using this format:
`[Service Name](#services-page)`

Example:
"Our [builder gel nail services](#services-page) are perfect for..."

### Image Guidelines
- Use existing work images: /work1.jpg through /work8.jpg
- Alt text should describe the image + include keyword if natural

## Target Keywords by Priority

### High Priority (Use First)
- builder gel nails Denton
- acrylic nails Denton TX
- Gel-X extensions Denton
- custom nail art Denton
- nail salon near UNT
- nail artist Denton Texas

### Medium Priority
- dip powder nails Denton
- french tip nails Denton
- manicure Denton TX
- pedicure Denton
- nail designs 2026

### Long-tail Opportunities
- best nail salon for students Denton
- where to get builder gel near UNT
- affordable acrylic nails Denton TX
- luxury nail art Denton Texas

## Sample Blog Post Topics (Ready to Write)

1. "French Tip Nails in Denton: Timeless Elegance for Every Occasion"
2. "Nail Care Tips from Denton's Top Nail Artist"
3. "Why Denton Students Choose Athena's Beauty for Their Nails"
4. "Wedding Nail Ideas for Brides in Denton, TX"
5. "The Complete Guide to Nail Shapes: Denton Nail Salon Expert Advice"
6. "Chrome Nails Trend: How to Get the Look in Denton"
7. "Healthy Nail Tips: Advice from a Denton Nail Professional"
8. "Prom Nail Designs 2026: Trends for Denton High School Students"
9. "What's the Difference Between Gel and Acrylic? Denton Expert Explains"
10. "Best Nail Salons Near UNT: Why Students Choose Athena's Beauty"

## Call-to-Action Templates

End every post with one of these CTAs:

**Standard:**
"Ready to try [service]? [Book your appointment today](#book) at Athena's Beauty in Denton, TX."

**Service-specific:**
"Want beautiful [service] nails? [Schedule your visit](#book) to our Denton studio and experience the Athena's Beauty difference."

**Question-based:**
"Have questions about [topic]? [Contact us](#book) or book a consultation at our Denton nail salon."

## Categories

- **Trends**: New styles, seasonal looks, viral nail art
- **Education**: How-to guides, product comparisons, technique explanations
- **Tips**: Care advice, maintenance, nail health
- **Inspiration**: Gallery showcases, style ideas, occasion-based looks

---

Last Updated: March 9, 2026
For questions about blog SEO strategy, contact your marketing team.
