# 📇 MEDI CARE - Quick Reference Card

## 🔗 URLs

| Interface | URL | Description |
|-----------|-----|-------------|
| **Admin Dashboard** | `/` | Desktop full-screen interface |
| **Provider App** | `/provider` | Mobile-sized device frame |

---

## 🖱️ Navigation

### Admin → Provider
Click the **"Open Provider App"** button in the blue banner at top

### Provider → Admin  
Click the **"← Back to Admin Dashboard"** button below the phone

---

## 📊 Admin Dashboard (`/`)

### Layout:
```
┌─────────┬──────────────────────┐
│ SIDEBAR │      CONTENT         │
│         │                      │
│ 5 Pages │  Map + Panels        │
└─────────┴──────────────────────┘
```

### Pages:
1. 📊 **Dashboard** - Map, stats, live requests
2. 👥 **Patients** - Patient database
3. 👨‍⚕️ **Providers** - Provider management
4. 📋 **Requests** - Request queue
5. 📊 **Reports** - Analytics

### Size:
- **Width:** 100% viewport
- **Height:** 100% viewport
- **Responsive:** Yes

---

## 📱 Provider App (`/provider`)

### Layout:
```
     ╔════════════════╗
     ║                ║
     ║  Mobile App    ║
     ║  (393×852)     ║
     ║                ║
     ╚════════════════╝
```

### Screens:
1. 🔐 **Login** - Authentication
2. 🏠 **Home** - Status & stats
3. 🚨 **Incoming Request** - 15s countdown
4. 🗺️ **Active Job** - Navigation & status
5. ✅ **Job Completion** - Report submission

### Size:
- **Width:** 393px (iPhone 14 Pro)
- **Height:** 852px (iPhone 14 Pro)
- **Responsive:** Fixed (within frame)

---

## 🎨 Visual Quick ID

### Admin Dashboard:
- ✅ Light gray background
- ✅ Full screen width
- ✅ Sidebar on left
- ✅ Blue banner at top

### Provider App:
- ✅ Dark gray background
- ✅ Centered phone frame
- ✅ iPhone notch visible
- ✅ Info badge top-left
- ✅ Back button below phone

---

## 🧪 Quick Test

1. Go to `/`
2. See admin dashboard
3. Click "Open Provider App"
4. See mobile frame at `/provider`
5. Click "Back to Admin Dashboard"
6. Return to `/`

---

## 🔥 Key Features

### Admin:
- Live provider map
- Request assignment
- Real-time tracking
- Comprehensive analytics

### Provider:
- Online/offline toggle
- 15-second countdown timer
- Status progression workflow
- Treatment report forms

---

## 📐 Dimensions

| Interface | Width | Height |
|-----------|-------|--------|
| **Admin** | 100% | 100% |
| **Provider** | 393px | 852px |

---

## 🎯 Quick Tips

### For Testing:
- Open both URLs in separate tabs
- Test workflow end-to-end
- Use browser DevTools on mobile frame

### For Demos:
- Full-screen `/provider` for presentations
- Dark background eliminates distractions
- Device frame looks professional

### For Development:
- Separate routes = easier debugging
- Independent state management
- Clean code separation

---

## 📞 Direct Links

**Local Development:**
```
Admin:    http://localhost:5173/
Provider: http://localhost:5173/provider
```

**Production (Example):**
```
Admin:    https://medicare.com/
Provider: https://medicare.com/provider
```

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Provider not showing | Check URL is `/provider` |
| Frame too big | Zoom out browser |
| Navigation not working | Verify React Router installed |
| Content overflow | Check screen at least 1280px wide |

---

## ✅ Status

**System:** MEDI CARE Healthcare Platform  
**Version:** 2.0.0  
**Status:** ✅ Fully Separated  
**Last Updated:** March 24, 2026

---

**Print this card for quick reference!** 📇
