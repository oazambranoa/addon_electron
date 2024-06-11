# Installation Guide for addon_electron

Follow the steps below to install and run the `addon_electron` application.

## Step 1: Install Node Modules

First, navigate to the root directory of the project and install the node modules using `yarn`.

```bash
cd addon_electron
yarn install
```

## Step 2: Navigate to the `native-addon` Directory

Next, navigate to the native-addon directory

```bash 
cd native-addon
```

## Step 3: Install Node Modules with npm

In the `native-addon` directory, install the node modules using `npm`.

```bash
npm install
```

## Step 4: Build the Project with node-gyp

Still in the `native-addon` directory, build the project using `node-gyp`.

```bash
node-gyp build
```

## Step 5: Rebuild Node Modules

Copy the `addon.node` file located in `build/Release` to the `addon_electron/libs` directory.

```bash
node-gyp rebuild --target=31.0.0 --arch=x64 --dist-url=https://electronjs.org/headers
```

## Step 6: Copy the addon.node File

Copy the `addon.node` file located in `build/Release` to the `addon_electron/libs` directory.
    
```bash
cp build/Release/addon.node ../libs/
```

## Step 7: Run the Application

Navigate back to the root directory of the project and run the application using `yarn`.

```bash
cd ..
yarn start
```

That's it! You should now be able to run the `addon_electron` application.
