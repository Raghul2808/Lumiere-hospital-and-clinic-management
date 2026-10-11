Header & Project Identifiers:
Dynamic status badges (Build Passing, Tailwind CSS, HL7 FHIR, MIT License).
Title, Domain, Candidate Name (Raghul M), and Register Number (2116240701409).
Live deployment URLs for reviewers and examiners.
Executive Summary & Functional Modules:
Doctor's EMR Console (doctor-portal.html): Live OPD triage queue, SOAP case sheet charting, quick vitals, interactive 640-slice CT / 3T MRI PACS viewer, and digital e-prescriptions.
Patient Health Portal (patient-portal.html): Real-time synced clinical records, laboratory diagnostic reference intervals, medication schedule adherence, and encrypted telehealth messaging.
Hospital Infrastructure Pages: Standalone portals for Checkups (checkups.html), Specialists (specialists.html), Centers of Excellence (centers.html), Facilities (facilities.html), and Admissions (booking.html).
System Architecture & Storage Mechanics:
Text-based ASCII architecture diagram illustrating the in-memory reactive engine (HEALTH_PORTAL_STATE), persistent storage (window.localStorage), and the enterprise cloud roadmap (PostgreSQL + Cloud Storage).
Repository Structure:
Clean file-tree representation of every standalone HTML page, configuration file, and script.
Quickstart & Developer Commands:
Step-by-step commands for cloning, running npm install, starting npm run dev on port 3000, creating production bundles with npm run build, and checking code quality with npm run lint.
Step-by-Step Clinical Demo Walkthrough & Academic License:
Guided instructions for demonstrating live cross-portal synchronization to an examiner or user.
flag
Checkpoint

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
# Lumiere-hospital-and-clinic-management
