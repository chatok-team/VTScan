// forge.config.js
module.exports = {
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                // The ICO file to use as the icon for the generated Setup.exe
                setupIcon: './build/icon.ico'
            }
        },
        {
            // Path to a single image that will act as icon for the application
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    icon: './build/icon.ico'
                }
            }
        },
        {
            // Path to the icon to use for the app in the DMG window
            name: '@electron-forge/maker-dmg',
            config: {
                icon: './build/icon.ico'
            }
        },
        {
            name: '@electron-forge/maker-wix',
            config: {
                icon: './build/icon.ico'
            }
        }
    ]
};