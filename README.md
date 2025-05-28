Sure thing, Jacob. Here's a polished and informative `README.md` for the **"Life in Weeks"** web app — written as if it's ready to go public on GitHub:

---

# ⏳ Life in Weeks

Visualize your life — one week at a time.

## 🧠 What is this?

**Life in Weeks** is a minimalist yet powerful web application that helps you **visualize your entire life in weekly blocks**. Inspired by Tim Urban’s famous blog post *"Your Life in Weeks"*, this tool gives you a visceral sense of how much time has passed and how much might be left — assuming a user-defined expected lifespan.

The goal? To inspire reflection, urgency, and intentional living.


## ✨ Features

* 🗓 Input your **date of birth** and select your **expected lifespan**.
* 📊 See:

  * Total **weeks lived**.
  * Total **weeks remaining**.
  * **Percentage** of life completed.
* 🧱 A **grid visualization** of your life in weeks (52 weeks per row = 1 year).
* 🌙 Toggle between light and dark mode.
* 💬 Rotating inspirational life quotes.

---

## 🧮 How It Works

1. You input your birthdate and select an expected lifespan (e.g., 80 years).
2. The script calculates:

   * `weeksLived = (Current Date - Birth Date) / (7 days)`
   * `totalWeeks = lifespan * 52`
   * `weeksRemaining = totalWeeks - weeksLived`
3. A grid of `totalWeeks` squares is created:

   * Blue squares = **weeks you've already lived**.
   * Grey squares = **weeks you (theoretically) have left**.

Each square is interactive — hover to see which week it represents.

---

## 🧑‍💻 Technologies Used

* **HTML5** & **CSS3** — clean, responsive design with modern UI elements.
* **Vanilla JavaScript** — no frameworks needed, pure JS.
* **Responsive Design** — mobile-friendly and adaptive grid.

---

## 🛠️ Setup & Usage

1. **Clone the repo**:

   ```bash
   git clone https://github.com/Debronejacobs/Life_counter.git
   ```
2. **Navigate to the project directory**:

   ```bash
   cd Life_counter
   ```
3. **Open `index.html` in your browser**:

   ```bash
   open index.html
   ```

   Or just double-click it.

> No dependencies or build steps needed — it's a fully static app. Drop it into any web server or host it with Netlify, GitHub Pages, Vercel, etc.

---

## 📁 File Structure

```plaintext
📦 Life_counter/
├── lifespan.html         # Main HTML document
├── style.css          # (Inline in HTML for now)
└── script.js          # JS (also inline in HTML)
```

---

## 💡 Inspiration

> “The trouble is, you think you have time.”
> — Buddha

Inspired by Wait But Why’s visualization of life in weeks, this app makes your mortality **visible** — and your remaining time more **meaningful**.

---

## 📜 License

MIT License.
Feel free to fork, remix, and share.

---

## 🙋‍♂️ Author

Created by **Jacob Debrone** –
Tech tinkerer, ethical hacker, and seeker of deeper truths 🧠⚡

---

Would you like this turned into a downloadable `README.md` file or published to GitHub Pages with a link?
