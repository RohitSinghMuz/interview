// Interview Answer: "How do you optimize a React Native application?"
// ⭐ Interview-Ready Answer

// To optimize a React Native application, I focus on improving render performance, reducing bundle size, and minimizing work on the JS thread.

// 1. Reduce Unnecessary Re-renders

// I use React.memo, useCallback, and useMemo to avoid unwanted re-renders.

// I keep state local to components to avoid re-rendering the entire tree.

// 2. Optimize Lists

// I always use FlatList or SectionList instead of ScrollView for large data.

// I optimize them with getItemLayout, initialNumToRender, windowSize, and keyExtractor.

// 3. Optimize Images & Assets

// I compress images, use proper resolutions, and prefer WebP.

// I use caching libraries like react-native-fast-image for better performance.

// 4. Reduce JS Thread Load

// I offload heavy tasks to native modules or background threads.

// I debounce or throttle expensive operations and API calls.

// 5. Reduce App Bundle Size

// I enable Hermes for faster startup and smaller bundle.

// I remove unused libraries, enable ProGuard/R8, and use code splitting.

// 6. Screen Rendering Optimization

// I use lazy loading for screens.

// I avoid blocking UI and use skeleton loaders or placeholders.

// 7. Smooth Animations

// I use Reanimated or native driver-based animations for 60fps performance.

// 8. Use the New Architecture (Fabric + TurboModules)

// This improves UI responsiveness and reduces communication overhead between JS and Native.