Here’s your complete `README.md` file in plain text format based on the challenge requirements and your completed work:

---

````
# CurveGraph Component (Vue 3)

This project includes a reusable and interactive Vue 3 component called `CurveGraph` that renders a non-linear mathematical curve (sin, cos, log, exp) using SVG.

---

## 🧩 Features

- 📈 Dynamically renders curves based on mathematical functions
- ⚙️ Supports: `sin`, `cos`, `log`, and `exp`
- 🎛️ Accepts a `scale` prop to stretch or compress the curve
- 🧪 Unit tested with Vitest and @testing-library/vue
- 📘 Documented with Storybook (interactive UI explorer)
- 💡 No UI libraries used — built entirely from scratch

---

## 🛠️ Tech Stack

- Vue 3 with `<script setup>`
- TypeScript
- Vite
- Vitest + Testing Library
- Storybook for documentation

---

## 📦 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/nikitachhattanicodeBlock/frontend_challenge.git
cd frontend_challenge
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

---

## 🧪 Run Tests

To execute the unit tests:

```bash
npm run test
```

All function variations (`sin`, `cos`, `log`, `exp`) are covered.

---

## 📘 Run Storybook

To launch the Storybook documentation:

```bash
npm run storybook
```

Explore all component states and props visually in the browser.

---

## 📂 File Structure

```
.
├── components/
│   └── CurveGraph.vue          # Main component
├── tests/
│   └── CurveGraph.test.ts      # Vitest test cases
├── .storybook/                 # Storybook config
├── stories/
│   └── CurveGraph.stories.ts   # Component docs and examples
├── vitest.setup.ts             # Testing config
├── tsconfig.json               # TypeScript config
└── README.md
```

---

## ✨ Props

| Prop           | Type     | Required | Description                               |         |   |                                     |
| -------------- | -------- | -------- | ----------------------------------------- | ------- | - | ----------------------------------- |
| `scale`        | `number` | ✅        | Controls the stretch/compression of curve |         |   |                                     |
| `functionName` | \`'sin'  | 'cos'    | 'log'                                     | 'exp'\` | ✅ | Defines the type of curve to render |

---

## ✅ Example Usage

```vue
<CurveGraph :scale="1" functionName="sin" />
```

---

## 🧪 Test Coverage

* Component renders for each `functionName` value
* `polyline` is rendered with correct `points`
* Edge case handled when `scale = 0`

---

## 📎 Notes

* This challenge avoids all UI libraries as per requirements
* Uses native SVG rendering for the curve
* Fully typed using TypeScript
* All sources and external help (e.g., AI/code references) have been cited during development

---

## 👤 Author

Nikita Chhattani
[GitHub Repo](https://github.com/nikitachhattanicodeBlock/frontend_challenge)

---

## 📄 License

This project is for demo/challenge purposes and does not currently use any license.

```

---

Let me know if you'd like to also:
- Add a badge for build/tests
- Push this directly to your repo
- Submit a polished version as a portfolio showcase

Would you like the Markdown version too?
```
