
# FrontEndMobileChallenge

The challenge is to build a Drawer Navigation layout for a React Native Application. This is the expected result:

<img src="https://github.com/nicolaspineyro/FrontEndMobileChallenge/assets/69359089/0198ff27-82dd-49a1-b3e9-0f2be20ea393"  width="200" height="425">


The challenge must follow this pattern:
```
DrawerMenu(one in a gif)
   tab navigator (bottom tab navigation)
       home (stack navigation)
           screen1
           screen2
       contact
```

# The Solution

The library chosen to implement this functionality was React Navigation because it offers advantages when working with nesting navigations, with the gif and the given pattern, an initial layout was like this:
```
* App (Drawer Navigator)
   - Start (Tab.Navigator)
         + Home (Stack.Navigator)
            - Screen1 (Screen)
            - Screen2 (Screen)
         + Profile (Screen)
         + Search (Screen)
   - Your Cart (Stack.Navigator)
         + Your Cart (Screen)
         + Item Details (Screen)
   - Favorites (Stack.Navigator)
         + Favorites (Screen)
   - Your Orders (Stack.Navigator)
         + Your Orders (Screen)  
```

For the animations react-native-reanimated was used because of its performance with animations using gestures. The animation its structured like this:
```
    <DrawerNavigationWrapper>
         <DrawerNavigator>
            <DrawerSceneWrapper>
               <DrawerScreen>
            </DrawerSceneWrapper>
         </DrawerNavigator>
    </DrawerNavigationWrapper>
```
There are two animations the one of the drawer screen sliding to the right and rotating (coordinated with the gesture and the progress of the drawer opening, managed by ```DrawerSceneWrapper```) and one when the drawer finishes opening (managed by ```DrawerNavigatorWrapper```) with this structure the result was:

<img src="https://github.com/nicolaspineyro/FrontEndMobileChallenge/assets/69359089/66bfd173-7889-444b-bd9f-392020aaae64"  width="200" height="425">


# Running the project

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 0: Clone this repository and install dependencies

First, you will need to clone this repository: 
```
git clone https://github.com/nicolaspineyro/FrontEndMobileChallenge.git
```

Then we need to install the project dependencies, run the following command from the _root_ of the React Native project:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```
Don't forget to install pods in the iOS case:

```
cd ios && pod install
```

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of the React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of the application. Run the following command to start the _Android_ or _iOS_ app:

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```


If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run the app — you can also run it directly from within Android Studio and Xcode respectively.


# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.


