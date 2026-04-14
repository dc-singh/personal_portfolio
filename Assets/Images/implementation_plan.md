# Patient Management Web App Implementation Plan

We will build a complete, full-stack Patient Management application using React for the frontend and FastAPI for the backend. The app features authentication, patient tracking, and a robust invoice/payment system.

## Proposed Architecture and Stack
**Frontend:** React (Vite, Functional Components, Hooks, Axios)
**Backend:** FastAPI (Python, REST)
**Database:** SQLite + SQLAlchemy
**File Storage:** Local file system for saving generated invoice JSONs.

## 1. Project Folder Structure

```text
/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py              # Application entry point & FastAPI setup
│   │   ├── database.py          # SQLAlchemy setup and connection
│   │   ├── models.py            # SQLAlchemy DB Models
│   │   ├── schemas.py           # Pydantic models for validation
│   │   ├── auth.py              # JWT authentication logic
│   │   ├── crud.py              # Database operations
│   │   └── routers/             # API Endpoints
│   │       ├── patients.py
│   │       ├── invoices.py
│   │       ├── payments.py
│   │       └── auth.py
│   ├── data/
│   │   └── invoices/            # Optional File Storage for generated JSON
│   ├── requirements.txt         # Python dependencies
│   └── run.py                   # Script to run Uvicorn
└── frontend/
    ├── src/
    │   ├── api/                 # Axios configuration and API calls
    │   ├── components/          # Reusable React components
    │   ├── pages/               # Main view components (Dashboard, Patient Detail, etc.)
    │   ├── App.jsx              # Main React router setup
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## 2. Database Schema

We rely on a relational database design as requested: `Patient (1) -> (Many) Invoices (1) -> (Many) Payments`

*   **Users** (For Admin Auth):
    *   `id` (PK), `username`, `hashed_password`
*   **Patients**:
    *   `id` (PK)
    *   `name`, `age`, `gender`, `phone` (Unique)
    *   `address`, `medical_history`
    *   `created_at`
*   **Appointments**:
    *   `id` (PK)
    *   `patient_id` (FK -> Patients.id)
    *   `date`, `notes`, `status`
*   **Invoices**:
    *   `id` (PK)
    *   `patient_id` (FK -> Patients.id)
    *   `services` (JSON encoded string or plain string)
    *   `total_amount` (Float)
    *   `status` (Enum: "unpaid", "partial", "paid")
    *   `created_at`
*   **Payments**:
    *   `id` (PK)
    *   `invoice_id` (FK -> Invoices.id)
    *   `amount_paid` (Float)
    *   `payment_method` (String: cash/card/UPI)
    *   `payment_date`

## 3. & 4. Backend and Frontend Code Execution
After plan approval, the actual files will be bootstrapped in the user workspace:
*   I will write the backend code including `models.py`, `schemas.py`, API routes, and JWT based auth.
*   I will use Vite to generate the React frontend, set up navigation (`react-router-dom`), form handling, API integration. 
*   I will implement premium styling using standard CSS, creating a polished, easy-to-use interface.

## 5. API Endpoints List

*   **Auth**:
    *   `POST /api/auth/token` - Login to get JWT
*   **Patients**:
    *   `GET /api/patients` - Search/List patients
    *   `POST /api/patients` - Add patient
    *   `GET /api/patients/{id}` - Get patient info
*   **Appointments**:
    *   `GET /api/patients/{id}/appointments`
    *   `POST /api/patients/{id}/appointments`
*   **Invoices**:
    *   `GET /api/patients/{id}/invoices` - Fetch all invoices of a specific patient
    *   `POST /api/patients/{id}/invoices` - Create invoice
    *   `GET /api/invoices/{id}` - Get specific invoice
*   **Payments**:
    *   `GET /api/invoices/{id}/payments` - Fetch all payments for an invoice
    *   `POST /api/invoices/{id}/payments` - Add payment (updates Invoice status automatically)

## 6. Invoice Generation Logic

*   **Database Level**: Invoices will track total amount and status.
*   **Payment Trigger**: Whenever a new Payment is added:
    1.  Fetch the associated invoice.
    2.  Sum all payments for that invoice + the new payment amount.
    3.  Compare the sum to `total_amount`.
    4.  Update the invoice `status` to "paid", "partial", or "unpaid".
*   **File Storage Logic**: Upon generating an Invoice (or when finalized/paid), an endpoint or background task will write the physical JSON to disk:
    *   Route: `backend/data/invoices/patient_{patient_id}/invoice_{invoice_id}.json` (ensures patient names aren't used for folders).

## 7. Step-by-Step Execution Plan

1.  **Backend Setup**: Define API Models, Schemas, and DB utilities.
2.  **API Dev**: Register endpoints prioritizing the critical logical flows (Patient -> Invoice -> Payment update status).
3.  **Frontend Layout Dev**: Scaffold Vite app. Create `axios` instance for JWT interceptors.
4.  **Frontend Views**: Building Dashboard (Search), Patient Details showing sub-lists (Appointments, Invoices, Payments). Incorporate dynamic design, vibrant colors, and subtle micro-animations to create a premium feel.
5.  **Integration & Tests**: Populate the system with sample data and ensure all functional requirements are met.

## Open Questions
- Do you have a preferred UI framework/library (e.g., Material-UI, Ant Design) or should I stick to standard Vanilla CSS with premium design patterns?
- Are there specific JWT expiration times or secret variables you want configured right from the start?

Please review the plan, and let me know if everything looks correct or if I should adjust anything.
