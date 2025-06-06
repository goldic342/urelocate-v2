# URelocate

Web application that analyzes how successful the relocation will be as a percentage.
It also provides information about the cost of living and available jobs in the selected country.
Made at hackathon.

---

## **Table of Contents**

1. [Features](#features)
2. [Demo](#demo)
3. [Installation](#installation)
4. [WARNING](#warning)

---

## **Features**

- Feature 1: Percentage chance of relocation
- Feature 2: Cost of Living from [numbeo.com](https://numbeo.com)
- Feature 3: Jobs in selected country via careerjet [API](https://www.careerjet.gl/docs/api/careerjet)

---

## **Demo**

[Live Demo](https://urelocate.goldic.xyz)  
Demo will be here soon...

---

## **Installation**

### Steps

1. Install dependencies:

   ```bash
   cd frontend && npm i && cd ..
   ```

   ```bash
   cd backend && pip install -r requirements.txt
   ```

2. Set up environment variables:

   - Copy `.env.example` to `.env`:

     ```bash
     cp .env.example .env
     ```

   - Edit `.env` file to match your configuration.

3. Run the application:
   Frontend:

   ```bash
   npm run dev
   ```

   Backend:

   ```bash
   fastapi dev src/main.py
   ```

# Warning

There are a lot of bugs, even in prod environment. I was so lazy to fix them, so enjoy.
