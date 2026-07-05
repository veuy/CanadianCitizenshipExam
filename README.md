```markdown
# Canadian Citizenship Exam

**Try it here:** [canadiancitizenshipexam.netlify.app](https://canadiancitizenshipexam.netlify.app)

A study tool for the Canadian citizenship test. I built this while learning JavaScript from scratch.

---

## What it does

200 questions covering Canadian history, government, geography, and culture.

Two ways to study:

- **All Questions** — practice all 200 with instant feedback and explanations
- **Mock Exam** — simulates the real test with 20 random questions, no feedback until you submit, and a 45-minute timer. Pass mark is 15/20 (75%)

Works offline and installs to your phone's home screen like a normal app.

---

## How to run locally

```
npm install
npm run dev        # dev server with hot reload
npm run build      # production build
npm run preview    # preview the build
```

Or just open `index.html` in a browser.

---

## How it's built

Plain HTML, CSS, and JavaScript — no frameworks. I built this to learn JS before moving on to anything else.

- **Vite** for dev server and production builds
- **Service worker + web manifest** for offline support and PWA install
- **Netlify** for hosting — auto deploys when I push to GitHub

---

## Roadmap

Stuff I want to add as I keep learning:

### Next up
- **Wrong answer review** — redo only the questions you got wrong so you focus on weak spots
- **Save progress** — remember where you left off and past scores using localStorage
- **Question bookmarking** — star a question and come back to it later

### Soon after
- **Category filters** — pick a topic (history, government, geography) and study just that
- **Progress bar** — visual bar showing how far through the questions you are
- **Dark mode** — toggle for studying at night
- **Multiple choice shuffle** — randomize the answer order so it's not predictable

### Eventually
- **Stats dashboard** — track mock exam scores over time to see improvement
- **Keyboard shortcuts** — press 1-4 to pick answers, Enter for next
- **Sound effects** — subtle feedback when you get an answer right or wrong
- **Swipe navigation** — swipe between questions on mobile
- **Custom quiz length** — pick how many questions you want (10, 20, 50, all 200)
- **Unit tests** — write tests for the quiz logic and shuffle function

---

## Why I built this

I built this for personal since I am taking my Canadian citizenship exam soon, I also wanted to learn JavaScript by building something real. Turned into an actual app I use to study and can learn from the process.
```

---