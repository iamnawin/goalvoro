# Goalvoro – Business Requirements Document (BRD)

**Version:** 1.0  
**Date:** 13‑Aug‑2025  
**Prepared by:** [Your Name]

---

## 1. Introduction

Goalvoro aims to make performance management both engaging and effective. Traditional KPI and OKR tools can feel like chores; Goalvoro turns them into quests. This document defines the business objectives, functional scope and non‑functional constraints for the MVP and future releases.

### 1.1 Purpose

This BRD provides a comprehensive specification for designers, developers, and stakeholders. It ensures everyone understands what Goalvoro must achieve, what is included in the initial release, and what may be added later.

---

## 2. Business Goals

1. **Increase employee engagement** by using gamification (quests, badges, levels and avatars).  
2. **Provide role‑specific customization** so each team sees relevant KPIs.  
3. **Enable managers** to set and monitor KPIs visually and intuitively.  
4. **Drive adoption** through simplicity and fun, resulting in better KPI attainment.  
5. **Deliver a scalable SaaS** with a freemium model (core free tier; premium for AI and analytics).

---

## 3. Target Audience

**Primary users** include developers, QA engineers, business analysts and sales staff within small‑ to medium‑sized IT businesses.  
**Secondary users** are managers and HR personnel who set KPIs and review team progress.  
Although designed for SMBs, the architecture will support multi‑tenant enterprise deployments later.

---

## 4. Success Metrics

- **User engagement:** at least 70 % of users log in daily and complete quests.  
- **User satisfaction:** Net Promoter Score (NPS) > 8/10 during pilot.  
- **Performance impact:** 20–30 % improvement in KPI attainment after adoption.

---

## 5. Scope

### 5.1 In‑Scope

* Role‑based dashboards mapping KPIs to quests.  
* Gamification (quests, badges, XP, coins, levels).  
* Manual KPI entry and CSV upload (MVP).  
* AI‑based quest suggestions (Phase 2).  
* Company/team‑wide progress visuals.  
* Leaderboards by role, team and company.  
* Avatar customization via earned rewards.  
* Admin panel for managers to create KPIs and quests.

### 5.2 Out‑of‑Scope (Phase 1)

* Native mobile apps (web PWA only).  
* Third‑party integrations (Jira, Trello, Slack etc.).  
* AR/VR or blockchain based features.  
* Real‑money transactions or financial rewards.

---

## 6. Functional Requirements

### 6.1 User Management

* **FR‑1** User registration and login with email/password.  
* **FR‑2** Guest access for MVP trials.  
* **FR‑3** Role selection at first login (developer, tester, BA, sales).  
* **FR‑4** Profile editing (role change, avatar customization).

### 6.2 Quest & KPI Management

* **FR‑5** List and display active quests per user role.  
* **FR‑6** Allow manual progress updates for KPIs.  
* **FR‑7** Unlock badges upon quest completion.  
* **FR‑8** Visualize company‑wide quests for shared goals.  
* **FR‑9** Generate AI‑suggested quests based on performance trends (Phase 2).

### 6.3 Gamification Mechanics

* **FR‑10** Experience points (XP) accumulation and level‑up system.  
* **FR‑11** Coins awarded on quest completion, used for cosmetic items.  
* **FR‑12** Leaderboards by role, team and overall company.  
* **FR‑13** Avatar customization with earned items and titles.

### 6.4 Admin Features

* **FR‑14** Create, edit and delete role‑specific KPIs.  
* **FR‑15** Link KPIs to quest templates.  
* **FR‑16** Bulk upload KPIs via CSV.  
* **FR‑17** Assign company‑wide quests.

### 6.5 Reporting & Analytics

* **FR‑18** View individual KPI history.  
* **FR‑19** Manager view of team KPI performance and quest completion rates.  
* **FR‑20** Export performance data (CSV/Excel).

---

## 7. Non‑Functional Requirements

### 7.1 Performance

* **NFR‑1** Pages must load within 3 seconds on a typical broadband connection.  
* **NFR‑2** The system must scale to at least 10 000 concurrent users.

### 7.2 Security

* **NFR‑3** Role‑based access control.  
* **NFR‑4** Encrypt all data in transit (HTTPS/TLS).  
* **NFR‑5** Store passwords using salted hashing.

### 7.3 Scalability

* **NFR‑6** Multi‑tenant architecture to support multiple organizations.  
* **NFR‑7** Modular backend design for future integrations.

### 7.4 Usability

* **NFR‑8** Responsive design (desktop‑first, mobile‑friendly).  
* **NFR‑9** Onboarding tutorial for new users.

### 7.5 Maintainability

* **NFR‑10** Clearly documented APIs and code.  
* **NFR‑11** Structured codebase to allow rapid iteration and feature addition.

---

## 8. Use Cases (MVP)

1. **User onboarding and role selection** – A new employee logs in, selects a role and receives their first quests.  
2. **Viewing & completing a quest** – A user sees quest details, updates progress and receives rewards on completion.  
3. **Manager sets KPIs** – An admin defines a new KPI and associates it with a quest template for a role.  
4. **Viewing company‑wide progress** – Users view the Team Village dashboard showing collective progress and their contribution.  
5. **AI‑generated quests** – AI analyzes past performance to suggest suitable next quests (Phase 2).  
6. **Avatar customization** – Users spend earned coins on cosmetic items.

---

## 9. Exclusions

* No native mobile apps or offline mode in Phase 1.  
* No handling of real‑money transactions or tangible rewards.  
* No third‑party tool integrations until Phase 2.  
* No advanced analytics beyond basic reporting in the MVP.

---

## 10. Future Enhancements (Phase 2+)

* API integrations with project management tools (Jira, Trello), messaging platforms (Slack).  
* Smarter AI insights and predictive analytics.  
* Team‑versus‑team competitions and seasonal events.  
* Native iOS/Android apps with push notifications.  
* Support for larger enterprises with custom domains and advanced security options.

---

This BRD serves as the reference for building the Goalvoro MVP and guiding its evolution into a full‑featured SaaS offering.