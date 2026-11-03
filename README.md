# ALFREDO GRE PORTAL

A free GRE preparation platform that runs entirely in the browser.

**Live site:** https://princekk122.github.io/alfredo-gre-portal/

## Features

- **Today's 40** — a new 40-question mixed set (20 Quant + 20 Verbal) every day.
- **Unique Quant questions** — 39 question generators build fresh problems for each device and each day: comparisons, multiple choice, select-all, numeric entry and data-interpretation tables. Answers are computed, so the key is always right.
- **Full GRE test** — the current GRE format: Analyze an Issue essay (30 min), Verbal 12 + 15 questions, Quant 12 + 15 questions, with adaptive second sections. Test-centre toolbar (Quit, Exit Section, Review, Mark, Help, Back, Next), Hide Time, calculator with Transfer Display, and an essay editor with Cut/Copy/Paste/Undo/Redo.
- **Practice builder** — choose measure, topic, difficulty and 10–40 questions; timed or untimed; error-log retries.
- **Marked results** — every answer scored with an explanation, topic breakdown and pacing feedback.
- **Vocabulary** — 140 high-frequency GRE words with spaced-repetition flashcards and quizzes.
- **Study tools** — formula sheet, GRE-style calculator, week-by-week study planner.
- **Study calendar** — plan sessions by day, auto-fill a plan up to test day, tick sessions off, and download the plan to Google or Apple Calendar (.ics).
- **Dashboard** — streak, XP, score estimates on the 130–170 scale, accuracy by topic, daily plan.

## How data is stored

This GitHub Pages version keeps each student's progress in their own browser (localStorage). Nothing is sent to a server.

The members version (book library with admin approval, direct messages with the admin, live "who's online", leaderboard, AI-written verbal questions, AI essay scoring and AI tutor) runs at the ALFREDO GRE PORTAL members site linked from the Library tab.

## Files

- `index.html` — the page structure
- `styles.css` — all styling (light and dark themes, exam screen)
- `app.js` — all logic and question content
- `README.md` — this description

## Run locally

Open `index.html` in any modern browser. No build step or dependencies.

## Deploy on GitHub Pages

1. Push this folder to a repository named `alfredo-gre-portal`.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://<your-username>.github.io/alfredo-gre-portal/`.

## Content

All practice questions, passages and essay prompts are original to this project. GRE® is a registered trademark of ETS; this project is not endorsed by or affiliated with ETS.
