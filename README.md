# 3VIEW V1 — Clean Website

A simple first-launch website for 3VIEW built with:

- Next.js
- TypeScript
- Tailwind CSS
- Firebase Firestore
- Firebase App Hosting
- GoDaddy domain support

## Pages

- `/` Home
- `/about` About
- `/contact` Contact
- `/terms` Terms & Conditions
- `/privacy` Privacy Policy

There is intentionally no login, dashboard, provider portal, payment system, marketplace or project-management system in V1.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Firebase setup

1. Create a Firebase project.
2. Create a Web App inside the Firebase project.
3. Enable Firestore Database.
4. Copy `.env.local.example` to `.env.local`.
5. Paste the Firebase Web App configuration values into `.env.local`.
6. Deploy the included Firestore rules.

The contact form stores submissions in:

```text
contacts
```

Each document contains:

- name
- email
- phone
- subject
- message
- status
- createdAt

## Firebase App Hosting

Push the project to GitHub, then create an App Hosting backend in Firebase and connect the repository.

Add the same `NEXT_PUBLIC_FIREBASE_*` values as App Hosting environment variables.

## GoDaddy domain

After the site is deployed on Firebase App Hosting:

1. Open your Firebase App Hosting backend.
2. Add your custom domain.
3. Firebase will display the DNS records required for verification.
4. Open GoDaddy DNS management.
5. Add the exact records Firebase provides.
6. Wait for DNS propagation.
7. Firebase will provision HTTPS/SSL for the domain.

Do not copy generic DNS values from another project. Use the records Firebase gives for your actual backend/domain.

## Production note

The Terms & Conditions and Privacy Policy included here are starter website copy, not legal advice. Before public commercial launch, have the final policies reviewed for your business, jurisdiction, data handling, provider relationships and payment/refund model.

## Future phases

The V1 architecture intentionally leaves room for:

Customer → 3VIEW → Provider

Later you can add authentication, provider onboarding, project requests, file uploads, admin management, quotes, payments, milestones, messaging and provider payouts without turning the V1 landing site into a complicated application.
