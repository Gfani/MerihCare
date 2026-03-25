🎯 What the Service Provider App Must Do

Think like a nurse/doctor using the app:

They need to:

See incoming requests

Accept or reject jobs

Navigate to patient

Update status (on the way, arrived, completed)

View patient details

So the app is simple but action-focused.

📱 Core Screens You Must Design (Provider App)

You only need 5 main screens.

1️⃣ Login Screen

Simple:

Logo
Email / Phone
Password
[ Login ]

Optional:

“Remember me”

“Forgot password”

2️⃣ Home / Status Screen (VERY IMPORTANT)

This is the main screen when provider opens the app.

Layout:
[ ONLINE / OFFLINE TOGGLE ]

You are ONLINE

Current Status:
Available

Today's Summary:
- Jobs completed: 3
- Earnings: 500 birr
Add a big toggle:
[ GO ONLINE ] / [ GO OFFLINE ]

👉 This controls whether they receive requests.

3️⃣ Incoming Request Screen (CRITICAL)

When a request comes → full screen popup

🚨 EMERGENCY REQUEST

Patient: John Doe
Distance: 1.4 km
Location: Downtown
Symptoms: Chest pain

[ ACCEPT ]     [ DECLINE ]

💡 Add countdown timer:

Auto-decline in: 15 seconds

This is exactly how Uber works.

4️⃣ Navigation / Active Job Screen

After accepting:

Patient Name
Distance
ETA

[ MAP VIEW ]

Status:
→ On the way
→ Arrived
→ Treatment started

[ CALL PATIENT ]
[ NAVIGATE ]
Buttons:
[ ARRIVED ]
[ START SERVICE ]
[ COMPLETE JOB ]
5️⃣ Job Completion Screen

After finishing:

Job Completed ✅

Patient: John Doe
Duration: 45 min

[ Add Notes ]
[ Submit Report ]

Optional:

Rating system

Notes (symptoms, treatment)

🔥 IMPORTANT FEATURES (Don’t Skip)
1. Status System
Available
Busy
Offline
2. Real-time Location

The provider app must:

Send GPS location continuously

Update on admin dashboard (your map)

3. Notifications

When a request comes:

Sound alert 🔊

Popup screen

Vibrate (mobile)

4. Simple UI Rule

Provider app must be:

FAST
CLEAR
NO DISTRACTIONS

Unlike admin dashboard, this app should be minimal.

🎨 UI Style Recommendation

Use:

Same colors as dashboard (blue + purple)

Bigger buttons (mobile friendly)

Less text, more actions

🧩 How It Connects to Your Dashboard

Your system flow:

Patient requests service
↓
Admin sees request
↓
Admin assigns provider
↓
Provider receives request (THIS APP)
↓
Provider accepts
↓
Live tracking updates on dashboard

So this app is directly connected to your dashboard UI.