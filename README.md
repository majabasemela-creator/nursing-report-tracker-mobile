# Nursing Report Shift Tracker

A mobile-friendly nursing report tracker designed for post-shift reporting.

## Features
- Nurse login screen
- Dashboard summary
- New shift report form
- Patient vitals tracking
- Interventions, medications, and follow-up notes
- Saved report history
- Local persistence using AsyncStorage

## Run locally

```bash
npm install
npm start
```

## Build for Android

```bash
npx expo install
npx expo run:android
```

For Play Store release, generate an Android production build using EAS:

```bash
npx expo install eas-cli
npx eas build --platform android
```

## Notes
This starter app is intended for a hospital or clinic workflow and can be extended with Firebase, PDF export, and patient records.

## Important for Google Play
Before publishing, complete all required store details:
- App icon and splash screen
- Signed Android release build
- Privacy policy
- Data safety declarations
- Content rating
- Google Play Console setup
