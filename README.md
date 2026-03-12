# MySQL-Passport-OAuth - Secure Auth System

Zaawansowany system uwierzytelniania i autoryzacji użytkowników zbudowany w środowisku Node.js. Projekt demonstruje integrację zewnętrznych dostawców tożsamości (OAuth 2.0) z lokalną bazą danych MySQL oraz mechanizmem sesji Passport.js.

---

## 🛠 Funkcjonalności / Features
* **Multi-Strategy Authentication:** Obsługa logowania za pomocą kont lokalnych oraz zewnętrznych dostawców OAuth.
* **Database Persistence:** Przechowywanie profili użytkowników oraz szczegółowych logów aktywności (login logs) w bazie MySQL.
* **Session Management:** Bezpieczne zarządzanie sesjami użytkowników i ochrona tras (Route Guarding).
* **Audit Logging:** System rejestrowania zdarzeń logowania w celach analitycznych i bezpieczeństwa.

---

## 🚀 Konfiguracja i Instalacja / Setup

### 1. Wymagania / Requirements
* Node.js (Runtime)
* MySQL / MariaDB (Database)

### 2. Baza danych / Database
* Przejdź do katalogu `/DB`.
* Zaimportuj plik `loging_logs.sql` do swojego serwera MySQL, aby przygotować strukturę tabel dla użytkowników i rejestru zdarzeń.

### 3. Instalacja / Installation
Pobierz niezbędne moduły (Passport, Express, MySQL connector):
npm install

---

## 🚦 Uruchomienie / Getting Started
Przejdź do głównego katalogu aplikacji i uruchom serwer:

cd Main
node server.js

*Dla celów deweloperskich zalecane użycie: nodemon server.js*

---

## 📄 Licencja i Autor / License & Author
* **Author:** [xSuri](https://github.com/xSuri)

**Legal Note:** Projekt udostępniony do darmowego użytku i modyfikacji pod warunkiem zachowania informacji o autorze. Projekt stanowi studium przypadku (Case Study) w zakresie implementacji bezpiecznych systemów uwierzytelniania w aplikacjach webowych.

© 2020-2021 xSuri
