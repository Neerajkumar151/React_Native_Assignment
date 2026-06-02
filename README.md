# React Native Mobile Assignment

Welcome to my comprehensive React Native assignment repository. This project is a robust, multi-screen mobile application built with Expo, demonstrating a deep understanding of React Native architecture, custom theming, responsive flexbox layouts, and pixel-perfect UI replication from Figma designs.

## 🏗️ Project Architecture & Features

This application goes far beyond a single screen, featuring a highly modular and scalable architecture:

### 1. Custom Theming Engine
- Designed a centralized design system located in `src/theme/`.
- Dynamically injects `colors`, `spacing`, `radius`, and `typography` across all components using a custom `useTheme` hook, ensuring absolute visual consistency.

### 2. Reusable Foundation Components
Built a suite of highly reusable, robust UI building blocks in `src/Components/common/`:
- `AppButton` & `AppInput`: Standardized interactive elements.
- `Card` & `PressableCard`: Flexible container components.
- `AppKeyboardAvoidingView`: Ensures smooth cross-platform keyboard handling.
- `DynamicList`: Optimized data rendering.

### 3. Advanced Navigation
Implemented complex routing strategies using `@react-navigation`:
- **Nested Navigation**: A primary `Stack.Navigator` wrapping multiple specialized bottom tab navigators (`TabNavigator`, `DashboardTabNavigator`).
- **Custom Tab Bars**: Featuring custom floating action buttons, active/inactive state styling, and exact icon matching.

## 📱 Implemented Screens & Modules

I have successfully developed a wide variety of isolated features and screens:

### Fintech Dashboard UI (Pixel-Perfect Figma Match)
- **Dashboard Screen**: Features a custom profile header, a scrollable wallet card carousel (with balance masking logic), a quick access menu, and an accounts list section.
- **Funds Overview Screen**: Uses a highly responsive 2x2 grid layout, heavily reusing the `AccountCard` component with custom SVGs, gradient overrides, and updated typography to match exact design requirements.

### Social & Communication
- **Chat Screen (`ChatScreen.tsx`)**: Real-time messaging UI layouts.
- **Contacts (`Contact.tsx`, `ContactListScreen.tsx`)**: Renders lists and detailed contact information interfaces.

### Commerce & Media
- **Shopping Cart (`ShoppingCartScreen.tsx`)**: E-commerce layout simulating cart logic and item presentation.
- **Gallery (`Gallery.tsx`)**: Media and image presentation layouts.

### Playgrounds & Training
- **Flex Layout (`FlexLayout.tsx`)**: An advanced playground demonstrating complex flexbox alignment, wrapping, and distribution.
- **Training Hub (`Training.tsx`)**: Modularized sections (`LayoutSection`, `ListsSection`, `ButtonsSection`, `InputsSection`) demonstrating mastery over core UI patterns.

## 📸 Implementation Proofs

<details>
  <summary>Click to view all progression screenshots</summary>

  <img src="./assets/public_images/Screenshot_2026-06-02-12-06-53-168_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-12-07-04-829_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-12-07-07-448_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-12-08-15-039_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-12-14-26-200_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-12-14-28-572_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-06-28-855_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-05-994_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-10-174_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-12-584_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-14-904_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-18-357_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-21-690_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-25-287_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-27-611_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-33-976_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-36-035_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-39-755_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-43-694_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-47-380_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-50-426_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-53-044_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-56-313_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-19-58-850_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-20-01-238_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-20-06-336_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-20-08-498_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-20-23-428_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-20-27-455_host.exp.exponent.jpg.jpeg" width="250" />
  <img src="./assets/public_images/Screenshot_2026-06-02-18-20-32-337_host.exp.exponent.jpg.jpeg" width="250" />
</details>

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```
