# VoiceOwl Audio Transcription Server

## Overview

API service that accepts an audio file URL, mocks transcription, and stores
the result in MongoDB Atlas.

### Mongo DB setup

Here I have used a mongodb atlas, you can install the mongodb in local and keep the url in .env file

### Environment Variables

Please add your mongodb url and port in .env file
PORT=8000
MONGO_URL

#### Installation

Run the following for running the app in dev mode:

```bash
cd server
npm install
npm run dev
```

#### .gitignore file

I have added .gitignore file so node modules and other files that can be regenerated from npm install does
not go to git

# 🎧 VoiceOwl Audio Transcription Client

This is a simple **React + TypeScript** app built with **Vite**.  
It allows users to enter an **audio file URL**, send it to a backend API, and receive a **transcription result**.

---

## 🚀 Features

- ⚡ Built with **Vite + React + TypeScript**
- 📝 Enter any audio URL
- 🔗 Sends request to backend API using **Axios**
- 📜 Displays transcription result in the UI
- 🎨 Minimal and easy-to-extend codebase

---

## 📦 Installation & Setup

```bash
cd client
npm install
npm run dev
```
