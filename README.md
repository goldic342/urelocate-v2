# URelocate

**URelocate** is a web application developed during a hackathon to assist individuals considering relocation to a new country. It evaluates the potential success rate of relocation and provides insights into the cost of living and available job opportunities in the selected destination.

---

## Live Demo

Access the application here: [Live Demo](https://urelocate.goldic.xyz)

_Note: The demo is in a development state and may contain bugs or incomplete features._

---

## Features

- **Relocation Success Probability**: Calculates the likelihood of a successful relocation based on various factors.
- **Cost of Living Analysis**: Fetches up-to-date cost of living data from [Numbeo](https://numbeo.com).
- **Job Opportunities**: Retrieves current job listings in the selected country via the [Careerjet API](https://www.careerjet.gl/docs/api/careerjet).

---

## Installation

To set up the project locally:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/goldic342/urelocate-v2.git
   cd urelocate-v2
   ```

2. **Install Frontend Dependencies**:

   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Install Backend Dependencies**:

   ```bash
   cd backend
   pip install -r requirements.txt
   cd ..
   ```

4. **Configure Environment Variables**:

   - Copy the example environment file:

     ```bash
     cp .env.example .env
     ```

   - Open `.env` and update the variables as needed.

5. **Run the Application**:

   - **Frontend**:

     ```bash
     cd frontend
     npm run dev
     ```

   - **Backend**:

     ```bash
     cd backend
     uvicorn src.main:app --reload
     ```

---

## Disclaimer

This project was developed rapidly during a hackathon and is not actively maintained. As such, it may contain bugs or incomplete features.

For any inquiries, please use the contact form available in the [Demo](https://urelocate.goldic.xyz).
