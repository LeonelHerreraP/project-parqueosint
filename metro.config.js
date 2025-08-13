// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Soporte para WASM (expo-sqlite web)
config.resolver.assetExts = [...config.resolver.assetExts, 'wasm'];

// Desactiva el respeto a "exports" en resoluciones de Metro para el código de la app
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
