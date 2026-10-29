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
    id: "quilters-monthly",
    name: "Quilters — Monthly Meeting",
    room: "Hemlock",
    headcount: "About 40 seated",
    photos: ["photos/quilters.jpg"],
    steps: [
      "Chairs theater style facing the TV wall — about 5 rows of 8, no aisle, rows straight",
      "Head table at the front: 3 squares pushed together end to end, facing the chairs, 4 chairs behind it",
      "Left side: 5 square tables pushed together end to end in one long row along the window wall",
      "Leave a wide aisle on the right side of the room",
    ],
    notes: [
      "Line up the chair backs row to row",
    ],
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
    photos: ["photos/chorale-rehearsal-room.jpg", "photos/chorale-rehearsal-keyboard.jpg", "photos/chorale-rehearsal-speaker.jpg", "photos/chorale-rehearsal-plan.jpg"],
    steps: [
      "Hemlock: chairs in curved rows across the back half of the room, all facing the microphone at the front (see photo)",
      "Hemlock: Roland RD-2000 keyboard on the Gator stand at front left, with bench and bar stool",
      "Hemlock: keyboard cable — XLR from the keyboard's BALANCED L out (red-taped end) to CH 1 on the JBL EON ONE speaker",
      "Hemlock: JBL EON ONE speaker next to the keyboard, column pole in, plugged in",
      "Hemlock: mic on a boom stand in front of the chairs, music stands out front for the director",
      "Hemlock: square tables pushed together in pairs along the right wall under the windows, and a row of tables along the left wall by the entrance",
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
      "Build the stage first (3 platforms, railings, dividers)",
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
    name: "Stage Build — CATS",
    room: "Cherokee",
    headcount: "24 stage sections",
    photos: ["photos/cats-stage.jpg"],
    steps: [
      "Stage sections are 4' × 8' platforms — 24 sections total",
      "Row 1: 4 sections parallel to the wall, pressed against it — center this row on the middle of the room before you add anything else",
      "Row 2: 10 sections running perpendicular to the wall, hooked onto the first row",
      "Row 3: another 10 sections running perpendicular to the wall, hooked onto the row in front of it",
      "Hook every section to its neighbors as you go so nothing shifts",
      "Side railings on both sides — these are the railings with the big C-clamp at the bottom; clamp each one onto the stage edge",
      "No railing across the back — the wall covers it",
      "Stairs on both sides of the stage (2 sets)",
      "Do a walk-around: every section hooked, every C-clamp tight, no gaps, both stair sets solid",
    ],
    notes: [
      "The CATS railings are not the Chorale railings — look for the C-clamp",
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
      "Left (window) side: 2 rounds along the window wall, with one square four-top in the second spot",
      "Right side: square four-tops on point (diamond) in a column, with a round in the back right corner",
      "Line up the points of the squares so each column runs straight down the room",
      "Keep the center aisle open the full length of the room",
      "4 chairs per table, pushed in",
      "Walk the aisles — a server with a tray needs to pass between the chair backs without anyone pulling in",
    ],
    notes: [
      "Layout changed Oct 2026 — the photos are current. Table 2 (left side) is now a square; the back right corner is now a round.",
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
      "Long table along the window wall: squares pushed together end to end, chairs down both sides",
      "7 square tables on point (diamond) in the open area toward the stone wall",
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
    id: "lounge-scramble-buffet",
    name: "Lounge — Scramble / Men's Golf Buffet",
    room: "Lounge",
    headcount: "Tables of 8",
    photos: ["photos/lounge-scramble-1.jpg", "photos/lounge-scramble-2.jpg", "photos/lounge-scramble-buffet.jpg", "photos/lounge-scramble-bar.jpg"],
    steps: [
      "Tables of 8: 3 squares pushed together end to end, square-on, edges tight — always 3 per table",
      "Rows of 8-tops run toward the windows, with an aisle between rows",
      "8 chairs per table: 3 down each side, 1 armed chair on each end",
      "Buffet: 3 silver tops in an L by the pool table, black spandex covers on",
      "Tea station: pull the bar stools from the front and right side of the bar and set them aside — that bar space is for the tea station",
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
    id: "overlook-layout-map",
    name: "Overlook Dining Room — Layout Map",
    room: "Overlook",
    headcount: "Bird's-eye view",
    photos: ["photos/overlook-table-map.jpg"],
    steps: [
      "Carolina 1 (left): 3 rounds along the window wall, 8 squares on point in two columns",
      "Vista (bottom): 4 squares on point in a row",
      "Carolina 2 (right): long table at the back, 7 squares on point toward the stone wall",
      "Line up the points of the squares in every section",
    ],
    notes: [
      "Use this to see how the three sections fit together — the numbers on the map are F&B's, not something the crew sets out",
    ],
  },
];
