// SSL Pinning
// ⭐ Interview Answer (Detailed – 1 minute)

// **“SSL Pinning ensures that the app communicates only with the trusted backend server.
// Even if someone tries to intercept the network traffic using fake certificates, the app compares the server certificate with the pinned certificate or public key stored inside the app.
// If the certificate doesn’t match, the connection is rejected.
// This prevents Man-in-the-Middle attacks, which is important for apps handling payments, finance, or sensitive data.

// In React Native, I’ve implemented this using react-native-ssl-pinning with Axios.
// I added the .cer file in both iOS and Android, configured the SSL pinning settings, and ensured all API calls go through the secure pinned connection.
// I’ve also used SHA256 hash pinning in cases where certificates change frequently.”*