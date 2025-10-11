# AI-Storm Website Update - Quick Reference

## Files to Modify

### 1. Homepage Updates
**File**: `src/components/Hero.tsx`
- Change headline to: "AI-Storm: Democratizing Security Analysis Through AI"
- Update subheadline to emphasize 3 pain points (expertise, time, delays)
- Change CTA to: "Contact Us About Early Access"

**New File**: `src/components/WhyAIStorm.tsx`
- Create new component with 3 benefit cards
- Speed: "From Weeks to Days"
- Accessibility: "Framework Complexity, Simplified" (emphasizes HITL)
- Integration: "Security Without Delays"

**File**: `src/pages/Home.tsx`
- Add `<WhyAIStorm />` component after `<Hero />`

---

### 2. Products Page - Complete Overhaul
**File**: `src/components/Products.tsx`
- **DELETE**: Both existing products (Security Assurance Platform, Cortex Arena)
- **REPLACE**: With single AI-Storm product page

**New Structure**:
1. Hero: "AI-Storm: AI-Driven Security Analysis Platform"
2. Core Capabilities (3 cards):
   - STPA-Sec Foundation
   - Multi-Framework Analysis (STPA-Sec + STRIDE, mention AI systems support)
   - Human-in-the-Loop Intelligence
3. Who Is AI-Storm For (2 columns):
   - Enterprise & Routine Systems
   - Safety & Security-Critical Systems
4. How AI-Storm Works (4-step workflow)
5. Partner With Us (CTA for early access/testing)

---

### 3. About Page - New Narrative
**File**: `src/pages/About.tsx`
- **Section 1**: The Origin (master's thesis, automation gap)
- **Section 2**: The Partnership (Lori + Alvin)
- **Section 3**: The Mission (democratizing security)
- **Section 4**: The Team (placeholder for profiles)

---

## Key Content Changes Summary

### Messaging Focus:
- **Single product**: AI-Storm (not multiple products)
- **STPA-Sec backbone**: Emphasized throughout
- **HITL emphasis**: AI does analysis, humans supervise
- **All systems**: Not just safety-critical
- **Investor appeal**: Early access, partnership opportunities

### Removed Content:
- ❌ Security Assurance Platform (generic product)
- ❌ Cortex Arena (separate testing environment)
- ❌ Development roadmap (replaced with "Partner With Us")
- ❌ Generic "AI-powered security assurance" messaging

### Added Content:
- ✅ AI-Storm as flagship product
- ✅ STPA-Sec foundation emphasis
- ✅ HITL workflow explanation
- ✅ Enterprise vs. safety-critical use cases
- ✅ Origin story (thesis → partnership → AI-Storm)
- ✅ Partnership/early access opportunities

---

## Key Messaging Themes (Repeat Throughout)

1. **"Built on STPA-Sec"** - The backbone/foundation
2. **"Democratizing Security"** - Accessible to all teams
3. **"Speed + Quality"** - Automation without sacrificing rigor
4. **"Human-in-the-Loop"** - AI analyzes, humans supervise
5. **"All Systems"** - Enterprise to safety-critical

---

## Technical Notes

- **Tech Stack**: React + TypeScript + Vite + shadcn/ui (unchanged)
- **Icons**: lucide-react (already imported)
- **Components**: Use existing shadcn Card, Button, etc.
- **Styling**: Existing Tailwind classes + custom gradients
- **No new dependencies** required

---

## Testing Checklist

- [ ] Homepage hero displays correctly
- [ ] WhyAIStorm section renders with 3 cards
- [ ] Products page shows single AI-Storm product
- [ ] All CTAs link to /contact page
- [ ] About page displays new narrative
- [ ] Mobile responsive on all pages
- [ ] No TypeScript/build errors
- [ ] Deploy to Firebase successfully

---

## Deployment Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Deploy to Firebase
npm run deploy
```

---

## Contact for Questions

**Primary Contact**: Lori Pickering  
**Email**: lori@aisecurityassurance.com  
**Repository**: github.com/AISecurityAssurance/ai-sec-ally

---

**Full Specification**: See `AI-STORM-WEBSITE-UPDATE-SPEC.md` for complete implementation details
