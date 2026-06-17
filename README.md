# Yardstick Head Barista Sensory Pre-Learning Module

A static, mobile-first web training module for Yardstick Coffee Head Barista candidates. It covers sensory evaluation, CVA concepts, basic taste, aroma, intensity, thresholds, bias, cupping workflow, and practical preparation for the June 24 workshop and July 6 exam.

## How to run locally

Open `index.html` directly in a browser. No server or build step is required.

Progress and quiz score are saved in the browser with `localStorage`, so each learner's progress stays on the device/browser they use.

## How to deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload these files and folders to the repository root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/`
   - `README.md`
3. In GitHub, go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder, then save.
6. GitHub will provide the published Pages URL after deployment finishes.

## File structure

```text
yardstick-head-barista-sensory-module/
  index.html
  styles.css
  script.js
  assets/
    coffee-bean-guide.svg
    sensory-path.svg
    practice-checklist.txt
  README.md
```

## Notes for future edits

- Most lesson copy, form overviews, and activity markup are generated in `script.js`.
- Interactive behavior, quiz questions, flavor wheel data, and progress tracking also live in `script.js`.
- The Perception section uses tabbed information cards for orthonasal, retronasal, gustatory, and tactile concepts, with no diagrams or animations.
- The Taste & Intensity section uses collapsible coffee-focused taste cards instead of simulated practical exercises.
- The CVA Descriptive and Affective sections are non-interactive form overviews for familiarity before instructor-led practice.
- Visual styling and responsive layout live in `styles.css`.
- The module uses no external paid dependencies and should work on GitHub Pages.
- Keep CVA and SCA wording paraphrased unless you have permission to reproduce source text directly.
- If workshop dates change, update the hero timeline and workshop section in `script.js`.
- If the quiz changes, update the `quiz` array in `script.js`.
