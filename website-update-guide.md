# 🌐 WEBSITE UPDATE GUIDE - BGG Version

Complete guide to deploy your new website with 3311 games

---

## 🎯 WHAT'S NEW

### **Complete Redesign:**
- ✅ Sidebar Filters (7 filters with multi-select)
- ✅ Grid + List Toggle
- ✅ Pagination (50 games per page)
- ✅ BGG Data Structure (all 69 columns)
- ✅ Game Detail Pages
- ✅ Multi-Sport/Type Support
- ✅ Responsive for all devices

---

## 📦 NEW FILES

You have 2 new files:

1. **index-bgg.html** - New homepage
2. **game-detail.html** - Detail pages

---

## 🚀 DEPLOYMENT OPTIONS

### **Option A: Replace Old index.html** ⭐ **RECOMMENDED**

**Steps:**
1. Rename old file: `index.html` → `index-old.html` (backup)
2. Rename new file: `index-bgg.html` → `index.html`
3. Keep `game-detail.html` as is
4. Deploy all files

**Result:** Website shows new version immediately

---

### **Option B: Test Side-by-Side**

**Steps:**
1. Keep old `index.html`
2. Upload `index-bgg.html` as is
3. Upload `game-detail.html`
4. Deploy

**Result:**
- Old version: `https://tabletop-sports-games.netlify.app/`
- New version: `https://tabletop-sports-games.netlify.app/index-bgg.html`

**Test new version, then switch!**

---

## 📋 STEP-BY-STEP DEPLOYMENT

### **Step 1: Prepare Files**

**Your project folder:**
```
D:\Tabletop Sports Games\tabletop-sports-games\
├── index.html (old - backup)
├── index-bgg.html (new)
├── game-detail.html (new)
├── contact.html
├── supabase-config.js
├── images/
└── .gitignore
```

---

### **Step 2: Backup Current Version**

**In your folder:**
1. Right-click `index.html`
2. Rename to `index-old.html`
3. This is your backup!

---

### **Step 3: Activate New Version**

**Rename:**
```
index-bgg.html → index.html
```

**Now you have:**
```
D:\Tabletop Sports Games\tabletop-sports-games\
├── index.html (NEW! was index-bgg.html)
├── index-old.html (backup)
├── game-detail.html (NEW!)
├── contact.html
├── supabase-config.js
└── ...
```

---

### **Step 4: Deploy via Netlify CLI**

**Open Terminal:**
```bash
cd "D:\Tabletop Sports Games\tabletop-sports-games"
```

**Deploy:**
```bash
netlify deploy --prod
```

**Wait ~30 seconds...**

---

### **Step 5: Test**

**Open browser:**
```
https://tabletop-sports-games.netlify.app
```

**Test checklist:**
- ✅ Shows 3311 games count
- ✅ Grid view works
- ✅ List view works
- ✅ Filters work (Sport, Type, etc.)
- ✅ Search works
- ✅ Pagination works (click page 2)
- ✅ Click a game → Detail page opens
- ✅ Detail page shows all info
- ✅ "Back to Games" works
- ✅ Mobile responsive

---

## 🧪 TESTING GUIDE

### **Test 1: Homepage**
1. Open homepage
2. Should see: "Showing 1-50 of 3311 games"
3. Should see: Grid with 50 games
4. Scroll down: Should see pagination

**✅ PASS** if all visible

---

### **Test 2: Filters**

**Sport Filter:**
1. Click "Basketball" checkbox
2. Games should filter
3. Count updates (e.g., "Showing 1-50 of 420 games")

**Multiple Filters:**
1. Also click "Dice" in Type
2. Should show Basketball AND Dice games
3. Count updates

**Clear:**
1. Click "Clear All Filters"
2. Back to 3311 games

**✅ PASS** if filtering works

---

### **Test 3: Search**
1. Type "football" in search bar
2. Games filter to those with "football" in name/description
3. Clear search → back to all games

**✅ PASS** if search works

---

### **Test 4: View Toggle**
1. Click "List View"
2. Games switch to list layout
3. Click "Grid View"
4. Back to grid

**✅ PASS** if both views work

---

### **Test 5: Pagination**
1. Click "Page 2"
2. Shows games 51-100
3. URL updates (scroll position resets)
4. Click "Page 1" → back to 1-50

**✅ PASS** if pagination works

---

### **Test 6: Game Detail**
1. Click any game card
2. Opens `game-detail.html?id=123`
3. Shows:
   - Game name & info
   - Images (3 thumbnails if available)
   - Description
   - Categories, Mechanics
   - Publisher with link
   - Authors
   - "View on BGG" button
4. Click "Back to Games" → returns to homepage

**✅ PASS** if detail page works

---

### **Test 7: Mobile**
1. Open on phone OR
2. Desktop: Press F12 → Toggle device toolbar
3. Check:
   - Filters collapsible/accessible
   - Grid becomes 1 column
   - Buttons work
   - Detail page responsive

**✅ PASS** if mobile works

---

## 🔧 TROUBLESHOOTING

### **Issue: "Showing 1-50 of 0 games"**

**Cause:** Supabase not connecting

**Fix:**
1. Check `supabase-config.js` exists
2. Check SUPABASE_URL and SUPABASE_KEY are correct
3. Open browser console (F12) → Check for errors
4. Try: Hard refresh (Ctrl+Shift+R)

---

### **Issue: "Error loading games"**

**Cause:** Database connection error

**Fix:**
1. Check Supabase project is not paused
2. Check RLS policies allow public read:
   ```sql
   -- In Supabase SQL Editor:
   SELECT * FROM games LIMIT 1;
   ```
   If error → Policy issue
3. Re-run: `database-schema-complete-66-columns.sql`

---

### **Issue: Filters show (0) count**

**Cause:** Field data missing or wrong format

**Check in Supabase:**
```sql
-- Check sport data
SELECT sport, COUNT(*) FROM games GROUP BY sport;

-- Check type data
SELECT type, COUNT(*) FROM games GROUP BY type;
```

**Expected:**
- Sports should be like: "Basketball", "Basketball; Ice Hockey"
- Types should be like: "Card", "Dice; Card"

---

### **Issue: Images not loading**

**Cause:** Image URLs broken or CORS issue

**Check:**
1. In Supabase: Open a game row
2. Check `image_url`, `thumbnail_url` have valid URLs
3. Test URL in browser directly

**Note:** Some BGG images might have CORS restrictions

---

### **Issue: Detail page 404**

**Cause:** `game-detail.html` not deployed

**Fix:**
1. Check file exists in folder
2. Re-deploy: `netlify deploy --prod`
3. Verify in Netlify dashboard: Deploys → Latest → Browse deploy

---

### **Issue: Multi-sport games not filtering**

**Example:** Game has "Basketball; Ice Hockey", filter "Basketball" doesn't find it

**Fix:** This should work! Check:
1. Open browser console (F12)
2. Click "Basketball" filter
3. Check console for errors
4. Check game data: `sport` field format

**Correct format:** "Basketball; Ice Hockey" (with semicolon and space)

---

## 📊 PERFORMANCE TIPS

### **Fast Loading:**

**Current:**
- Loads all 3311 games at once
- Filters client-side
- Fast after initial load

**If too slow:**
- Add server-side pagination (Phase 2)
- Supabase `.range()` for pagination
- Load 50 games per request

---

### **Image Optimization:**

**Current:** Uses BGG thumbnails (already optimized)

**To improve:**
- Host images on Cloudinary/Imgur
- Lazy load images (already implemented!)
- Use WebP format

---

## 🎨 CUSTOMIZATION

### **Change Colors:**

**In index.html, find `<style>` section:**

```css
/* Main gradient */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Change to YOUR colors: */
body {
    background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
}

/* Primary button color */
.btn-primary {
    background: #667eea; /* Change this */
}

/* Active filter color */
.view-btn.active {
    background: #667eea; /* Change this */
}
```

---

### **Change Games Per Page:**

**In index.html, find:**
```javascript
const gamesPerPage = 50;
```

**Change to:**
```javascript
const gamesPerPage = 24;  // Or 100, or whatever
```

---

### **Add/Remove Filters:**

**To add "Rating" filter:**

1. **In HTML, add filter section:**
```html
<div class="filter-section">
    <h4>Rating</h4>
    <div class="filter-options" id="ratingFilters"></div>
</div>
```

2. **In JavaScript, add builder:**
```javascript
function buildRatingFilters() {
    const ratingOptions = [
        { value: '7.5+', label: 'Excellent (7.5+)', count: 0 },
        { value: '6.5-7.5', label: 'Good (6.5-7.5)', count: 0 },
        // ... etc
    ];
    // Build filters...
}
```

3. **Add to filter logic:**
```javascript
// In applyFilters()
if (filters.rating.length > 0) {
    // Filter by rating
}
```

---

## 📱 CONTACT PAGE

**Your contact page still works!**

```
https://tabletop-sports-games.netlify.app/contact.html
```

**No changes needed!**

---

## 🔄 FUTURE UPDATES

### **When you add new games:**

**Option 1: Import via Script**
```bash
python import_bgg_to_supabase.py
```
New games get IDs 3312, 3313, etc.

**Option 2: Manual in Supabase**
1. Dashboard → Table Editor → games
2. Insert row
3. Fill all fields
4. Save

**Website updates automatically!** No redeploy needed!

---

### **When you update game data:**

**In Supabase:**
1. Table Editor → games
2. Find game
3. Edit fields
4. Save

**Website updates instantly!**

---

## ✅ SUCCESS CHECKLIST

After deployment:

- [ ] Homepage loads with 3311 games
- [ ] All 7 filters work
- [ ] Multi-select filters work (Basketball + Ice Hockey)
- [ ] Search works
- [ ] Grid/List toggle works
- [ ] Pagination works (50 per page)
- [ ] Game detail pages open
- [ ] Detail pages show all info
- [ ] Publisher link works
- [ ] BGG link works
- [ ] Mobile responsive
- [ ] Contact page still works

---

## 🎉 YOU'RE DONE!

**Your website now:**
- ✅ Shows 3311 BGG games
- ✅ Professional filters
- ✅ Beautiful grid/list views
- ✅ Detailed game pages
- ✅ Fast & responsive
- ✅ Ready to share!

**Share it:**
```
https://tabletop-sports-games.netlify.app
```

---

## 🆘 NEED HELP?

**If stuck:**
1. Check browser console (F12) for errors
2. Check Supabase logs
3. Check Netlify deploy logs
4. Re-read this guide
5. Try backup: Restore `index-old.html` → `index.html`

---

*Good luck! 🚀*
