// Architecture of React Native

// React Native has two main architectures: the Old Architecture and the New Architecture. Most modern apps now use the New Architecture.

// ⭐ Old Architecture (Bridge Architecture)

// React Native was originally built with a three-layer architecture:

// 1. JavaScript Thread

// Runs your React code and business logic.

// Uses JavaScriptCore (JSC) engine.

// 2. Native Thread

// Handles native UI components (Android Views / iOS UIKit).

// 3. The Bridge

// A JSON-based asynchronous communication channel between JS and Native.

// Converts JS messages into JSON, sends them to Native, and vice-versa.

// Limitations

// Bridge is slow for large data.

// Only asynchronous communication.

// UI updates can lag.

// Heavy work can block the JS thread.

// ⭐ New Architecture (JSI + Fabric + TurboModules)

// To improve performance, React Native introduced a new architecture.

// 1. JSI (JavaScript Interface)

// Replaces the old Bridge.

// Allows direct, synchronous, and faster communication between JS and Native.

// No JSON serialization.

// 2. Fabric Renderer

// New UI rendering system.

// Faster rendering and layout.

// Supports React 18 features like concurrent rendering.

// Provides smoother animations.

// 3. TurboModules

// New Native Module system.

// Lazy loaded (loaded only when needed).

// Faster startup time.

// Works directly with JSI for fast communication.

// 4. Codegen

// Automatically generates type-safe bindings between JS and Native.

// Reduces bugs and improves performance.