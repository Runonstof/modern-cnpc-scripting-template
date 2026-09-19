# net.minecraft.client.main

- [GameConfiguration](#gameconfiguration)
- [GameConfiguration.DisplayInformation](#gameconfiguration.displayinformation)
- [GameConfiguration.FolderInformation](#gameconfiguration.folderinformation)
- [GameConfiguration.GameInformation](#gameconfiguration.gameinformation)
- [GameConfiguration.ServerInformation](#gameconfiguration.serverinformation)
- [GameConfiguration.UserInformation](#gameconfiguration.userinformation)
- [Main](#main)
## GameConfiguration

*class* `net.minecraft.client.main.GameConfiguration`

### Fields
- `public final GameConfiguration.UserInformation userInfo`
- `public final GameConfiguration.DisplayInformation displayInfo`
- `public final GameConfiguration.FolderInformation folderInfo`
- `public final GameConfiguration.GameInformation gameInfo`
- `public final GameConfiguration.ServerInformation serverInfo`

## GameConfiguration.DisplayInformation

*class* `net.minecraft.client.main.GameConfiguration.DisplayInformation`

Enclosing class: GameConfiguration

### Fields
- `public final int width`
- `public final int height`
- `public final boolean fullscreen`
- `public final boolean checkGlErrors`

## GameConfiguration.FolderInformation

*class* `net.minecraft.client.main.GameConfiguration.FolderInformation`

Enclosing class: GameConfiguration

### Fields
- `public final java.io.File mcDataDir`
- `public final java.io.File resourcePacksDir`
- `public final java.io.File assetsDir`
- `public final java.lang.String assetIndex`

### Methods
- `public ResourceIndex getAssetsIndex()`

## GameConfiguration.GameInformation

*class* `net.minecraft.client.main.GameConfiguration.GameInformation`

Enclosing class: GameConfiguration

### Fields
- `public final boolean isDemo`
- `public final java.lang.String version`
- `public final java.lang.String versionType`

## GameConfiguration.ServerInformation

*class* `net.minecraft.client.main.GameConfiguration.ServerInformation`

Enclosing class: GameConfiguration

### Fields
- `public final java.lang.String serverName`
- `public final int serverPort`

## GameConfiguration.UserInformation

*class* `net.minecraft.client.main.GameConfiguration.UserInformation`

Enclosing class: GameConfiguration

### Fields
- `public final Session session`
- `public final PropertyMap userProperties`
- `public final PropertyMap profileProperties`
- `public final java.net.Proxy proxy`

## Main

*class* `net.minecraft.client.main.Main`

### Methods
- `public static void main(java.lang.String[] p_main_0_)`
