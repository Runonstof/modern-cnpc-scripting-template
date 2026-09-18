# noppes.npcs.api.constants

- [AnimationType](#animationtype)
- [EntitiesType](#entitiestype)
- [GuiComponentType](#guicomponenttype)
- [ItemType](#itemtype)
- [JobType](#jobtype)
- [MarkType](#marktype)
- [OptionType](#optiontype)
- [ParticleType](#particletype)
- [PotionEffectType](#potioneffecttype)
- [QuestType](#questtype)
- [RoleType](#roletype)
- [SideType](#sidetype)
## AnimationType

*class* `noppes.npcs.api.constants.AnimationType`

Animation Types

### Fields
- `public static final int NONE` (= 0)
- `public static final int SIT` (= 1)
- `public static final int SLEEP` (= 2)
- `public static final int HUG` (= 3)
- `public static final int CROUCH` (= 4)
- `public static final int DANCE` (= 5)
- `public static final int AIM` (= 6)
- `public static final int CRAWL` (= 7)
- `public static final int POINT` (= 8)
- `public static final int CRY` (= 9)
- `public static final int WAVE` (= 10)
- `public static final int BOW` (= 11)
- `public static final int NO` (= 12)
- `public static final int YES` (= 13)
- `public static final int DEATH` (= 14)
- `public static final int WALK` (= 15)
- `public static final int IDLE` (= 16)
- `public static final int FLY` (= 17)
- `public static final int FLY_IDLE` (= 18)
- `public static final int STATIC` (= 19)
- `public static final int SWIM` (= 20)
- `public static final int WAG` (= 21)
- `public static Map<String,Integer> ALL`

### Methods
- `public static int valueOf(String name)`
- `public static String nameOf(int animation)`

## EntitiesType

*class* `noppes.npcs.api.constants.EntitiesType`

Entity Types

### Fields
- `public static final int ANY` (= -1)
- `public static final int UNKNOWN` (= 0)
- `public static final int PLAYER` (= 1)
- `public static final int NPC` (= 2)
- `public static final int MONSTER` (= 3)
- `public static final int ANIMAL` (= 4)
- `public static final int LIVING` (= 5)
- `public static final int ITEM` (= 6)
- `public static final int PROJECTILE` (= 7)
- `public static final int PIXELMON` (= 8)
- `public static final int VILLAGER` (= 9)
- `public static final int ARROW` (= 10)
- `public static final int THROWABLE` (= 11)

## GuiComponentType

*class* `noppes.npcs.api.constants.GuiComponentType`

### Fields
- `public static final int BUTTON` (= 0)
- `public static final int LABEL` (= 1)
- `public static final int TEXTURED_RECT` (= 2)
- `public static final int TEXT_FIELD` (= 3)
- `public static final int SCROLL` (= 4)
- `public static final int ITEM_SLOT` (= 5)
- `public static final int TEXT_AREA` (= 6)
- `public static final int BUTTON_LIST` (= 7)
- `public static final int SLIDER` (= 8)
- `public static final int ENTITY_DISPLAY` (= 9)
- `public static final int ASSETS_SELECTOR` (= 10)

## ItemType

*class* `noppes.npcs.api.constants.ItemType`

Item Types

### Fields
- `public static final int NORMAL` (= 0)
- `public static final int BOOK` (= 1)
- `public static final int BLOCK` (= 2)
- `public static final int ARMOR` (= 3)
- `public static final int SWORD` (= 4)
- `public static final int SEEDS` (= 5)
- `public static final int SCRIPTED` (= 6)

## JobType

*class* `noppes.npcs.api.constants.JobType`

Job Types

### Fields
- `public static final int NONE` (= 0)
- `public static final int BARD` (= 1)
- `public static final int HEALER` (= 2)
- `public static final int GUARD` (= 3)
- `public static final int ITEMGIVER` (= 4)
- `public static final int FOLLOWER` (= 5)
- `public static final int SPAWNER` (= 6)
- `public static final int CONVERSATION` (= 7)
- `public static final int CHUNKLOADER` (= 8)
- `public static final int PUPPET` (= 9)
- `public static final int BUILDER` (= 10)
- `public static final int FARMER` (= 11)
- `public static final int MAXSIZE` (= 12)

## MarkType

*class* `noppes.npcs.api.constants.MarkType`

### Fields
- `public static final int NONE` (= 0)
- `public static final int QUESTION` (= 1)
- `public static final int EXCLAMATION` (= 2)
- `public static final int POINTER` (= 3)
- `public static final int SKULL` (= 4)
- `public static final int CROSS` (= 5)
- `public static final int STAR` (= 6)

## OptionType

*class* `noppes.npcs.api.constants.OptionType`

### Fields
- `public static final int QUIT_OPTION` (= 0)
- `public static final int DIALOG_OPTION` (= 1)
- `public static final int DISABLED` (= 2)
- `public static final int ROLE_OPTION` (= 3)
- `public static final int COMMAND_BLOCK` (= 4)

## ParticleType

*class* `noppes.npcs.api.constants.ParticleType`

### Fields
- `public static final int NONE` (= 0)
- `public static final int SMOKE` (= 1)
- `public static final int PORTAL` (= 2)
- `public static final int REDSTONE` (= 3)
- `public static final int LIGHTNING` (= 4)
- `public static final int LARGE_SMOKE` (= 5)
- `public static final int MAGIC` (= 6)
- `public static final int ENCHANT` (= 7)
- `public static final int CRIT` (= 8)

### Methods
- `public static net.minecraft.core.particles.ParticleOptions getMCType(int type)`

## PotionEffectType

*class* `noppes.npcs.api.constants.PotionEffectType`

### Fields
- `public static final int NONE` (= 0)
- `public static final int FIRE` (= 666)
- `public static final int SPEED` (= 1)
- `public static final int SLOWNESS` (= 2)
- `public static final int HASTE` (= 3)
- `public static final int MINING_FATIGUE` (= 4)
- `public static final int STRENGTH` (= 5)
- `public static final int INSTANT_HEALTH` (= 6)
- `public static final int INSTANT_DAMAGE` (= 7)
- `public static final int JUMP_BOOST` (= 8)
- `public static final int NAUSEA` (= 9)
- `public static final int REGENERATION` (= 10)
- `public static final int RESISTANCE` (= 11)
- `public static final int FIRE_RESISTANCE` (= 12)
- `public static final int WATER_BREATHING` (= 13)
- `public static final int INVISIBILITY` (= 14)
- `public static final int BLINDNESS` (= 15)
- `public static final int NIGHT_VISION` (= 16)
- `public static final int HUNGER` (= 17)
- `public static final int WEAKNESS` (= 18)
- `public static final int POISON` (= 19)
- `public static final int WITHER` (= 20)
- `public static final int HEALTH_BOOST` (= 21)
- `public static final int ABSORPTION` (= 22)
- `public static final int SATURATION` (= 23)
- `public static final int GLOWING` (= 24)
- `public static final int LEVITATION` (= 25)
- `public static final int LUCK` (= 26)
- `public static final int UNLUCK` (= 27)
- `public static final int SLOW_FALLING` (= 28)
- `public static final int CONDUIT_POWER` (= 29)
- `public static final int DOLPHINS_GRACE` (= 30)
- `public static final int BAD_OMEN` (= 31)
- `public static final int HERO_OF_THE_VILLAGE` (= 32)

### Methods
- `public static net.minecraft.world.effect.MobEffect getMCType(int effect)`

## QuestType

*class* `noppes.npcs.api.constants.QuestType`

### Fields
- `public static final int ITEM` (= 0)
- `public static final int DIALOG` (= 1)
- `public static final int KILL` (= 2)
- `public static final int LOCATION` (= 3)
- `public static final int AREA_KILL` (= 4)
- `public static final int MANUAL` (= 5)

## RoleType

*class* `noppes.npcs.api.constants.RoleType`

Role Types

### Fields
- `public static final int NONE` (= 0)
- `public static final int TRADER` (= 1)
- `public static final int FOLLOWER` (= 2)
- `public static final int BANK` (= 3)
- `public static final int TRANSPORTER` (= 4)
- `public static final int MAILMAN` (= 5)
- `public static final int COMPANION` (= 6)
- `public static final int DIALOG` (= 7)
- `public static final int MAXSIZE` (= 8)

## SideType

*class* `noppes.npcs.api.constants.SideType`

Facing Types

### Fields
- `public static final int DOWN` (= 0)
- `public static final int UP` (= 1)
- `public static final int NORTH` (= 2)
- `public static final int SOUTH` (= 3)
- `public static final int WEST` (= 4)
- `public static final int EAST` (= 5)
