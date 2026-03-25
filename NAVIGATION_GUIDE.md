# 🧭 Navigation Guide - MEDI CARE System

## 🎯 How to Access Each Interface

### 📊 Admin Dashboard (Desktop)
**URL:** `/` (root)
- Full-width desktop interface
- Sidebar navigation
- Live map and requests
- All 5 pages available

**To Switch to Provider App:**
Click the **"Open Provider App"** button in the blue banner at the top

---

### 📱 Provider App (Mobile)
**URL:** `/provider`
- Mobile-sized interface (iPhone 14 Pro dimensions: 393×852px)
- Displayed in a device frame
- Centered on screen with dark background
- All 5 screens available

**To Return to Admin Dashboard:**
Click the **"← Back to Admin Dashboard"** button below the phone

---

## 🔗 Quick Links

### Direct Access URLs:
```
Admin Dashboard:  http://localhost:[PORT]/
Provider App:     http://localhost:[PORT]/provider
```

### Navigation Flow:
```
┌─────────────────────────────────────────────────────┐
│                 ADMIN DASHBOARD (/)                 │
│  ┌──────────────────────────────────────────────┐  │
│  │  [Blue Banner]                               │  │
│  │  "Open Provider App" button ─────────────┐   │  │
│  └──────────────────────────────────────────┼───┘  │
└─────────────────────────────────────────────┼──────┘
                                              │
                                              ↓
┌─────────────────────────────────────────────────────┐
│              PROVIDER APP (/provider)               │
│                                                     │
│        ┌─────────────────────────────┐            │
│        │   📱 iPhone Device Frame    │            │
│        │                             │            │
│        │  [Provider App Content]     │            │
│        │                             │            │
│        └─────────────────────────────┘            │
│                                                     │
│    [← Back to Admin Dashboard] ──────────────┐    │
└──────────────────────────────────────────────┼─────┘
                                               │
                                               ↓
                                        Returns to /
```

---

## 📱 Mobile Device Frame

### Specifications:
- **Device:** iPhone 14 Pro
- **Screen Size:** 393px × 852px
- **Frame Features:**
  - Rounded corners (3rem border radius)
  - Dark border (simulates device bezel)
  - Notch at top (authentic iPhone look)
  - Shadow for depth
  - Dark background for contrast

### Visual Layout:
```
┌─────────────────────────────────────────────┐
│     Dark Gray Background (Full Screen)     │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 📱 Provider Mobile App Preview      │   │  ← Info Badge
│  │ iPhone 14 Pro (393×852)             │   │
│  └─────────────────────────────────────┘   │
│                                             │
│        ╔════════════════════╗              │
│        ║    ┌────────┐      ║  ← Notch     │
│        ║    └────────┘      ║              │
│        ║                    ║              │
│        ║                    ║              │
│        ║   Provider App     ║  ← Screen    │
│        ║      Content       ║              │
│        ║                    ║              │
│        ║                    ║              │
│        ║                    ║              │
│        ╚════════════════════╝              │
│                                             │
│     ┌──────────────────────────┐           │
│     │ ← Back to Admin Dashboard │          │  ← Back Button
│     └──────────────────────────┘           │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🎨 Screen Context

### Admin Dashboard Context:
- **Layout:** Full width browser window
- **Optimal for:** Desktop/Laptop (1024px+)
- **Interaction:** Mouse and keyboard
- **Multiple windows:** Sidebar + Main content + Right panel

### Provider App Context:
- **Layout:** Fixed mobile dimensions in center
- **Optimal for:** Viewing mobile experience on desktop
- **Interaction:** Click simulates touch
- **Single view:** Full-screen mobile app

---

## 🚀 Testing Both Interfaces

### Complete Test Flow:

1. **Start at Admin Dashboard** (`/`)
   - View desktop interface
   - Explore sidebar navigation
   - Check live map and requests

2. **Switch to Provider App**
   - Click "Open Provider App" button in banner
   - OR manually navigate to `/provider`

3. **Experience Provider App**
   - Login screen
   - Toggle online/offline
   - Simulate request
   - Accept and complete job

4. **Return to Admin**
   - Click "Back to Admin Dashboard" button
   - OR manually navigate to `/`

---

## 💡 Pro Tips

### For Developers:
- Use browser DevTools to inspect mobile app
- The app is responsive within the 393px width
- Right-click on phone to open DevTools
- Network tab works for simulated API calls

### For Designers:
- The device frame shows exact mobile dimensions
- Screenshot the phone frame for presentations
- Test touch interactions with click
- Verify all content fits in viewport

### For Testers:
- Test both routes independently
- Check navigation between views
- Verify state persistence (if implemented)
- Test browser back/forward buttons

---

## 🔧 Customization

### To Change Device Size:
Edit `/src/app/pages/provider-app.tsx`:
```tsx
// Current: iPhone 14 Pro
<div className="w-[393px] h-[852px] ...">

// iPhone 12/13 Pro
<div className="w-[390px] h-[844px] ...">

// iPhone SE
<div className="w-[375px] h-[667px] ...">

// Samsung Galaxy S21
<div className="w-[360px] h-[800px] ...">
```

### To Remove Device Frame:
Change the provider app page to full-screen mobile view without the frame styling.

---

## 📊 Route Structure

```
/
├── / (root)
│   └── Admin Dashboard
│       ├── Dashboard (default)
│       ├── Patients
│       ├── Providers
│       ├── Requests
│       └── Reports
│
└── /provider
    └── Provider App
        ├── Login
        ├── Home/Status
        ├── Incoming Request
        ├── Active Job
        └── Job Completion
```

---

## 🎯 User Personas

### Admin/Dispatcher (Desktop Interface)
**Access:** `/`
**Goals:**
- Monitor all providers
- Assign requests efficiently
- Track real-time locations
- Generate reports

### Healthcare Provider (Mobile Interface)
**Access:** `/provider`
**Goals:**
- Accept/decline requests
- Navigate to patients
- Update job status
- Submit treatment reports

---

## 🌐 Browser Support

### Recommended Browsers:
- ✅ Chrome 90+ (best experience)
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Mobile Testing:
While the app shows a mobile frame on desktop, you can also:
1. Open `/provider` on actual mobile device
2. Use Chrome DevTools device emulation
3. Use responsive design mode in Firefox

---

## 📝 Bookmarks for Quick Access

Add these to your bookmarks bar:

```
[🖥️ Admin]  http://localhost:5173/
[📱 Provider] http://localhost:5173/provider
```

---

**Last Updated:** March 24, 2026  
**Version:** 2.0.0 (Separated Routing)
