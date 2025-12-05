// Interview Answer: What Are Native Modules in React Native?

// “Native Modules in React Native are a way to write functionality in platform-specific languages (Java/Kotlin for Android, Swift/Objective-C for iOS) and expose it to JavaScript, so we can use device capabilities that are not available in React Native by default.
// React Native runs JS, but the device APIs are native, so Native Modules act as a bridge to call native code from JS.”

// ⭐ When do we need Native Modules?

// You can say:

// Accessing device sensors (Battery, Bluetooth, NFC, Camera, Biometrics)

// Using platform-specific APIs that React Native doesn’t expose

// Performance-critical operations

// Background services

// Using third-party native SDKs