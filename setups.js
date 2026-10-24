// ============================================================
//  Connestee Falls — Event Setup Reference
//  This is the ONLY file you need to edit to add or change a setup.
//
//  Each setup looks like this:
//
//  {
//    id: "short-name-no-spaces",       // used in the web address, keep unique
//    name: "What the crew calls it",
//    room: "Cherokee",                  // must match a name in ROOMS below
//    headcount: "100 seated",           // optional, shows on the card
//    photos: ["photos/file.jpg"],       // drop photos in the photos folder
//    steps: [                           // the checklist, in setup order
//      "Do this first",
//      "Then this",
//    ],
//    notes: [                           // optional: reminders, things people forget
//      "Something to remember",
//    ],
//  },
//
//  Copy a block, paste it, change the words, save. Refresh the page.
// ============================================================

const ROOMS = ["Cherokee", "Hemlock", "Oak", "Willow", "Overlook", "Lounge", "Pavilion"];

const SETUPS = [
  {
    id: "quarterly-board-meeting",
    name: "Quarterly Board Meeting",
    room: "Cherokee",
    headcount: "100 seated",
    photos: ["photos/board-meeting-1.jpg", "photos/board-meeting-2.jpg"],
    steps: [
      "100 chairs for the audience, theater style, with a center aisle",
      "Mic stand in the center aisle",
      "Head table for board members: 3 silver tops, 8 chairs",
      "Podium on the golf course side of the room",
      "Both flags to the right of the podium",
      "One silver table in the back, in front of the AV closet, for IT — 2 chairs",
      "One silver table at the Cherokee entrance (under the light switches) for coffee and water",
      "3 glass water bottles on the head table with cups for the board",
    ],
    notes: [
      "Glass water bottles are in the server station",
    ],
  },
  {
    id: "fishing-club-meeting",
    name: "Fishing Club — Monthly Meeting",
    room: "Cherokee",
    headcount: "About 40 seated",
    photos: ["photos/fishing-club.jpg"],
    steps: [
      "Chairs in a wide semicircle facing the screen, 3 rows deep, with the center open (see photo)",
      "Podium at the front, screen side",
      "American flag on its stand to the left of the podium",
      "Skirted table against the back wall for the laptop / presenter",
      "A/V: screen down, projector on, ClickShare ready for a PowerPoint — no microphone needed",
      "Coffee station: silver table at the Cherokee entrance with coffee, water, cups",
      "Pastries on the coffee station",
    ],
    notes: [
      "Flag goes out every time — don't skip it",
      "No mic needed, but have the AV closet unlocked in case the presenter asks",
      "Coffee and pastries come from F&B — confirm the headcount with them the day before",
    ],
  },
  {
    id: "strings-and-things",
    name: "Strings & Things",
    room: "Hemlock",
    headcount: "8 players",
    photos: ["photos/strings-and-things.jpg"],
    steps: [
      "Pull the piano and music stands out of the closet closest to the entry",
      "Set the piano off its base, then put the base back in the closet",
      "Plug in the piano",
      "8 chairs in a semicircle in front of the piano",
      "3 or 4 music stands",
    ],
    notes: [],
  },
  {
    id: "newbies-bee-bazaar",
    name: "Newbies Bee Bazaar",
    room: "Cherokee",
    headcount: "Vendor tables",
    photos: ["photos/bee-bazaar-plan.jpg"],
    steps: [
      "Rectangular vendor tables in 4 rows, the long way across the room — 4 or 5 per row as drawn on the plan",
      "One round table in the middle of the room, between the rows",
      "One round table in the front corner with the screens behind it",
      "3 silver tops in a line along the front of the room",
      "One small table at the front corner (marked with a ? on the plan — check with the organizer)",
      "7 more tables go in Carolina II",
    ],
    notes: [
      "Count tables off the plan before you start pulling — the plan is the source of truth, not this list",
      "Plan is from the 2026 bazaar; confirm with the organizer if the layout changed",
    ],
  },
  {
    id: "chorale-rehearsal",
    name: "Mountain Chorale — Rehearsal",
    room: "Hemlock",
    headcount: "Hemlock 16 · Oak 16 · Willow 10",
    photos: ["photos/chorale-rehearsal-room-1.jpg", "photos/chorale-rehearsal-room-2.jpg", "photos/chorale-rehearsal-keyboard.jpg", "photos/chorale-rehearsal-speaker.jpg", "photos/chorale-rehearsal-plan.jpg"],
    steps: [
      "Hemlock: chairs in curved rows facing the front, all facing the microphone (see photos)",
      "Hemlock: Roland RD-2000 keyboard on the Gator stand at front left, with bench and bar stool",
      "Hemlock: keyboard cable — XLR from the keyboard's BALANCED L out (red-taped end) to CH 1 on the JBL EON ONE speaker",
      "Hemlock: JBL EON ONE speaker next to the keyboard, column pole in, plugged in",
      "Hemlock: mic on a boom stand in front of the chairs, music stands out front for the director",
      "Hemlock: tables at the entrance",
      "Oak (altos): 16 chairs, music stand, small table, keyboard",
      "Willow (bass): 10 chairs, small table, music stand, keyboard with stand, bench",
      "Breakout rooms: 10 chairs each in a curve, music stand and keyboard at the front (see lower boxes on the plan)",
    ],
    notes: [
      "On the plan: KB = keyboard, MS = music stand",
      "Rehearsals are Thursdays, roughly 1:00–5:00, for the length of the season — check the current schedule for start and end dates",
      "Last two weeks of the season move to Cherokee with the full stage and risers (see Chorale — Stage & Risers)",
    ],
  },
  {
    id: "chorale-stage-risers",
    name: "Mountain Chorale — Stage & Risers",
    room: "Cherokee",
    headcount: "50 chairs on risers",
    photos: ["photos/chorale-stage.jpg", "photos/chorale-risers.jpg"],
    steps: [
      "Build the stage first — see Stage Build (3 platforms, railings, dividers)",
      "4 wooden risers across the front of the stage, numbered 1–4 left to right",
      "14 chair risers behind the stage — double-stack the back 2 rows",
      "50 chairs on the risers, plus the chair boxes",
      "3 dividers on the right side of the stage, in front of the garage door",
      "Roland keyboard on a keyboard stand, with bench, at stage left",
      "JBL speaker, mic with cable, mic stand, music stands",
      "Chairs at stage right for the orchestra; space in front for small groups",
      "Full audio setup for performance nights",
    ],
    notes: [
      "Risers need to be up by 11:00 on the first Cherokee rehearsal day",
      "Performance nights have a buffet — coordinate with F&B",
    ],
  },
  {
    id: "stage-build",
    name: "Stage Build (CATS / Chorale)",
    room: "Cherokee",
    headcount: "",
    photos: ["photos/cats-stage.jpg", "photos/chorale-stage.jpg"],
    steps: [
      "Bring the 3-tier platforms in from the garage",
      "Open the platforms and hook them together",
      "Set the 6 triangle wooden pieces in between each level of the platform",
      "Clamp the 5 short railings on the sides of the stage",
      "2 long railings on the ends at the back of the stage",
      "Set the stairs",
      "Do a walk-around: every railing clamped, no gaps between sections",
    ],
    notes: [
      "For Chorale, add the 4 wooden risers in front and 3 dividers on the right — see Chorale — Stage & Risers",
    ],
  },
  {
    id: "paws-for-a-cause",
    name: "Paws for a Cause",
    room: "Pavilion",
    headcount: "26 vendors",
    photos: ["photos/paws-plan.jpg"],
    steps: [
      "Eating area (80' tent): 3 rows of 5 picnic tables",
      "Stage and TV at the far end of the eating area",
      "2 six-foot folding tables at the entrance for check-in",
      "Keyboard and live guitar area next to check-in; music by the entrance",
      "Second pavilion: picnic tables in a horseshoe shape, all the same height",
      "Second pavilion: 4 high-top tables, same height as the picnics",
      "Second pavilion: 6' folding table along the side for food, one more 6' folding table on the end",
      "Check-out and sponsorship table near the exit of the second pavilion",
    ],
    notes: [
      "Open questions on the plan: parking, check-in out front, and a member change — confirm with the organizer before setup day",
      "Vendors run along the drive side — 26 of them",
    ],
  },
  {
    id: "carolina-1-standard",
    name: "Carolina 1 — Standard Dining Setup",
    room: "Overlook",
    headcount: "Everyday layout",
    photos: ["photos/carolina-1-a.jpg", "photos/carolina-1-b.jpg"],
    steps: [
      "Rounds 1–3 along the window wall, as on the table map",
      "Square tables 4–11 in two columns, turned on point (diamond)",
      "Line up the points of the squares so each column runs straight down the room",
      "4 chairs per table, pushed in",
      "Walk the aisles — a server with a tray needs to pass between the chair backs without anyone pulling in",
    ],
    notes: [
      "Points of the tables lined up is what makes the room look right from the entrance — sight down each column before you leave",
      "If you reset after an event, this is the layout to return to",
    ],
  },
  {
    id: "carolina-2-standard",
    name: "Carolina 2 — Standard Dining Setup",
    room: "Overlook",
    headcount: "Everyday layout",
    photos: ["photos/carolina-2.jpg"],
    steps: [
      "Long table (36) along the window wall: squares pushed together end to end, chairs down both sides",
      "Square tables 31–35, 37, 38 on point (diamond) in the open area toward the stone wall, as on the table map",
      "Line up the points of the squares so they read as a straight row",
      "4 chairs per square, pushed in",
      "Walk the aisles — a server with a tray needs to pass between the chair backs without anyone pulling in",
    ],
    notes: [
      "Points of the squares lined up is what makes the room look right from the entrance",
      "Keep the path past the column clear",
      "If you reset after an event, this is the layout to return to",
    ],
  },
  {
    id: "lounge-standard",
    name: "Lounge — Standard Setup",
    room: "Lounge",
    headcount: "20 tables",
    photos: ["photos/lounge-table-map.jpg", "photos/lounge-1.jpg", "photos/lounge-2.jpg", "photos/lounge-3.jpg", "photos/lounge-4.jpg", "photos/lounge-5.jpg"],
    steps: [
      "20 tables total — place them as shown on the map: one big table next to the pool table, a row along the back wall, a cluster in the middle, and a row along the far wall",
      "Big tables (3): two squares pushed together end to end, chairs down both sides, armed chairs on the ends",
      "Four-tops: on point (diamond), points lined up so each row reads straight",
      "Four-tops: 2 armed chairs and 2 armless chairs at each table",
      "Chairs pushed in, all facing the table",
      "Walk the aisles — a server with a tray needs to pass between the chair backs without anyone pulling in",
    ],
    notes: [
      "Four-tops get 2 armed + 2 armless. Big tables get the armed chairs on the ends.",
      "Hardwood floor — lift chairs, don't drag them",
      "If you reset after an event, this is the layout to return to",
    ],
  },
  {
    id: "lounge-music-night",
    name: "Lounge — Music Night",
    room: "Lounge",
    headcount: "Communal seating",
    photos: ["photos/lounge-music-night-1.jpg", "photos/lounge-music-night-2.jpg"],
    steps: [
      "Start from the standard Lounge layout, then push the four-tops together into long rows — squares square-on (not on point), edges touching",
      "Long rows run along the window side and down the center; keep a wide aisle from the bar to the windows",
      "Chairs down both sides of each row, armed chairs on the ends",
      "Walk the aisles — a server with a tray needs to pass between the chair backs without anyone pulling in",
    ],
    notes: [
      "Hardwood floor — lift chairs, don't drag them",
      "Reset to Lounge — Standard Setup after the event",
    ],
  },
  {
    id: "willow-standard",
    name: "Willow — Standard Setup",
    room: "Willow",
    headcount: "3 rounds · 3 squares",
    photos: ["photos/willow-standard.jpg"],
    steps: [
      "3 round tables along the window wall, 4 chairs each",
      "3 square tables down the inside of the room, 4 chairs each",
      "Line up the points of the square tables so they read as a straight row",
      "Chairs pushed in, all facing the table",
      "Keep the walkway open from the door to the counter at the back",
    ],
    notes: [
      "Points of the squares lined up is what makes the room look right from the door",
      "If you reset after an event, this is the layout to return to",
    ],
  },
  {
    id: "oak-standard",
    name: "Oak — Standard Setup",
    room: "Oak",
    headcount: "7 square tables",
    photos: ["photos/oak-standard.jpg"],
    steps: [
      "Square tables along both long walls — 3 down the picture-wall side, 3 down the window side, 1 at the back by the counter",
      "Line up the points of the square tables so each side reads as a straight row",
      "4 chairs per table, pushed in, all facing the table",
      "Keep the center aisle open from the door to the back counter",
    ],
    notes: [
      "Points of the squares lined up is what makes the room look right from the door",
      "If you reset after an event, this is the layout to return to",
    ],
  },
  {
    id: "overlook-table-numbers",
    name: "Overlook Dining Room — Table Numbers",
    room: "Overlook",
    headcount: "Reference map",
    photos: ["photos/overlook-table-map.jpg"],
    steps: [
      "Carolina 1: rounds 1–3 along the window wall, squares 4–11 in two columns",
      "Vista: squares 21–24 in a row",
      "Carolina 2: tables 31–38, with the long table 36 at the back",
    ],
    notes: [
      "Use this when a BEO calls out table numbers for a dining room event",
    ],
  },
];
