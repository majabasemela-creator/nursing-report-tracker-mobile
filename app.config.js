{
  "expo": {
    "name": "Nursing Report Shift Tracker",
    "slug": "nursing-report-shift-tracker",
    "version": "1.0.0",
    "orientation": "portrait",
    "userInterfaceStyle": "light",
    "platforms": ["android", "ios"],
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "bundleIdentifier": "com.nursing.shifttracker",
      "supportsTablet": true
    },
    "android": {
      "package": "com.nursing.shifttracker",
      "allowBackup": true,
      "permissions": [
        "INTERNET",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE"
      ]
    },
    "extra": {
      "eas": {
        "projectId": "nursing-report-shift-tracker"
      }
    }
  }
}
