# net.minecraft.world.scores

- [Class DisplaySlot](#class-displayslot)
- [Class Team.CollisionRule](#class-team.collisionrule)
- [Class Team.Visibility](#class-team.visibility)
- [Objective](#objective)
- [PlayerTeam](#playerteam)
- [Score](#score)
- [Scoreboard](#scoreboard)
- [ScoreboardSaveData](#scoreboardsavedata)
- [Team](#team)
## Class DisplaySlot

*enum* `net.minecraft.world.scores.Class DisplaySlot`

### Fields
- `public static final StringRepresentable.EnumCodec<DisplaySlot> CODEC`
- `public static final IntFunction<DisplaySlot> BY_ID`
- `private final int id`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static DisplaySlot[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static DisplaySlot valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int id()`
- `public String getSerializedName()`
- `@Nullable public static DisplaySlot teamColorToSlot(ChatFormatting p_298500_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Team.CollisionRule

*enum* `net.minecraft.world.scores.Class Team.CollisionRule`

Enclosing class: Team

### Fields
- `private static final Map<String,Team.CollisionRule> BY_NAME`
- `public final String name`
- `public final int id`

### Methods
- `public static Team.CollisionRule[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Team.CollisionRule valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `@Nullable public static Team.CollisionRule byName(String p_83556_)`
- `public Component getDisplayName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Team.Visibility

*enum* `net.minecraft.world.scores.Class Team.Visibility`

Enclosing class: Team

### Fields
- `private static final Map<String,Team.Visibility> BY_NAME`
- `public final String name`
- `public final int id`

### Methods
- `public static Team.Visibility[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Team.Visibility valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static String[] getAllNames()`
- `@Nullable public static Team.Visibility byName(String p_83580_)`
- `public Component getDisplayName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Objective

*class* `net.minecraft.world.scores.Objective`

### Fields
- `private final Scoreboard scoreboard`
- `private final String name`
- `private final ObjectiveCriteria criteria`
- `private Component displayName`
- `private Component formattedDisplayName`
- `private ObjectiveCriteria.RenderType renderType`

### Methods
- `public Scoreboard getScoreboard()`
- `public String getName()`
- `public ObjectiveCriteria getCriteria()`
- `public Component getDisplayName()`
- `private Component createFormattedDisplayName()`
- `public Component getFormattedDisplayName()`
- `public void setDisplayName(Component p_83317_)`
- `public ObjectiveCriteria.RenderType getRenderType()`
- `public void setRenderType(ObjectiveCriteria.RenderType p_83315_)`

## PlayerTeam

*class* `net.minecraft.world.scores.PlayerTeam`

### Fields
- `private static final int BIT_FRIENDLY_FIRE` (= 0)
- `private static final int BIT_SEE_INVISIBLES` (= 1)
- `private final Scoreboard scoreboard`
- `private final String name`
- `private final Set<String> players`
- `private Component displayName`
- `private Component playerPrefix`
- `private Component playerSuffix`
- `private boolean allowFriendlyFire`
- `private boolean seeFriendlyInvisibles`
- `private Team.Visibility nameTagVisibility`
- `private Team.Visibility deathMessageVisibility`
- `private ChatFormatting color`
- `private Team.CollisionRule collisionRule`
- `private final Style displayNameStyle`

### Methods
- `public Scoreboard getScoreboard()`
- `public String getName()`
- `public Component getDisplayName()`
- `public MutableComponent getFormattedDisplayName()`
- `public void setDisplayName(Component p_83354_)`
- `public void setPlayerPrefix(@Nullable  Component p_83361_)`
- `public Component getPlayerPrefix()`
- `public void setPlayerSuffix(@Nullable  Component p_83366_)`
- `public Component getPlayerSuffix()`
- `public Collection<String> getPlayers()`
- `public MutableComponent getFormattedName(Component p_83369_)`
- `public static MutableComponent formatNameForTeam(@Nullable  Team p_83349_,  Component p_83350_)`
- `public boolean isAllowFriendlyFire()`
- `public void setAllowFriendlyFire(boolean p_83356_)`
- `public boolean canSeeFriendlyInvisibles()`
- `public void setSeeFriendlyInvisibles(boolean p_83363_)`
- `public Team.Visibility getNameTagVisibility()`
- `public Team.Visibility getDeathMessageVisibility()`
- `public void setNameTagVisibility(Team.Visibility p_83347_)`
- `public void setDeathMessageVisibility(Team.Visibility p_83359_)`
- `public Team.CollisionRule getCollisionRule()`
- `public void setCollisionRule(Team.CollisionRule p_83345_)`
- `public int packOptions()`
- `public void unpackOptions(int p_83343_)`
- `public void setColor(ChatFormatting p_83352_)`
- `public ChatFormatting getColor()`

### Inherited methods
- from `net.minecraft.world.scores.Team`: `isAlliedTo`

## Score

*class* `net.minecraft.world.scores.Score`

### Fields
- `public static final Comparator<Score> SCORE_COMPARATOR`
- `private final Scoreboard scoreboard`
- `private final Objective objective`
- `private final String owner`
- `private int count`
- `private boolean locked`
- `private boolean forceUpdate`

### Methods
- `public void add(int p_83394_)`
- `public void increment()`
- `public int getScore()`
- `public void reset()`
- `public void setScore(int p_83403_)`
- `public Objective getObjective()`
- `public String getOwner()`
- `public Scoreboard getScoreboard()`
- `public boolean isLocked()`
- `public void setLocked(boolean p_83399_)`

## Scoreboard

*class* `net.minecraft.world.scores.Scoreboard`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Map<String,Objective> objectivesByName`
- `private final Map<ObjectiveCriteria,List<Objective>> objectivesByCriteria`
- `private final Map<String,Map<Objective,Score>> playerScores`
- `private final Map<DisplaySlot,Objective> displayObjectives`
- `private final Map<String,PlayerTeam> teamsByName`
- `private final Map<String,PlayerTeam> teamsByPlayer`

### Methods
- `@Nullable public Objective getObjective(@Nullable  String p_83478_)`
- `public Objective addObjective(String p_83437_,  ObjectiveCriteria p_83438_,  Component p_83439_,  ObjectiveCriteria.RenderType p_83440_)`
- `public final void forAllObjectives(ObjectiveCriteria p_83428_,  String p_83429_,  Consumer<Score> p_83430_)`
- `public boolean hasPlayerScore(String p_83462_,  Objective p_83463_)`
- `public Score getOrCreatePlayerScore(String p_83472_,  Objective p_83473_)`
- `public Collection<Score> getPlayerScores(Objective p_83499_)`
- `public Collection<Objective> getObjectives()`
- `public Collection<String> getObjectiveNames()`
- `public Collection<String> getTrackedPlayers()`
- `public void resetPlayerScore(String p_83480_,  @Nullable  Objective p_83481_)`
- `public Map<Objective,Score> getPlayerScores(String p_83484_)`
- `public void removeObjective(Objective p_83503_)`
- `public void setDisplayObjective(DisplaySlot p_297926_,  @Nullable  Objective p_83419_)`
- `@Nullable public Objective getDisplayObjective(DisplaySlot p_297931_)`
- `@Nullable public PlayerTeam getPlayerTeam(String p_83490_)`
- `public PlayerTeam addPlayerTeam(String p_83493_)`
- `public void removePlayerTeam(PlayerTeam p_83476_)`
- `public boolean addPlayerToTeam(String p_83434_,  PlayerTeam p_83435_)`
- `public boolean removePlayerFromTeam(String p_83496_)`
- `public void removePlayerFromTeam(String p_83464_,  PlayerTeam p_83465_)`
- `public Collection<String> getTeamNames()`
- `public Collection<PlayerTeam> getPlayerTeams()`
- `@Nullable public PlayerTeam getPlayersTeam(String p_83501_)`
- `public void onObjectiveAdded(Objective p_83422_)`
- `public void onObjectiveChanged(Objective p_83455_)`
- `public void onObjectiveRemoved(Objective p_83467_)`
- `public void onScoreChanged(Score p_83424_)`
- `public void onPlayerRemoved(String p_83431_)`
- `public void onPlayerScoreRemoved(String p_83432_,  Objective p_83433_)`
- `public void onTeamAdded(PlayerTeam p_83423_)`
- `public void onTeamChanged(PlayerTeam p_83456_)`
- `public void onTeamRemoved(PlayerTeam p_83468_)`
- `public void entityRemoved(Entity p_83421_)`
- `protected ListTag savePlayerScores()`
- `protected void loadPlayerScores(ListTag p_83446_)`

## ScoreboardSaveData

*class* `net.minecraft.world.scores.ScoreboardSaveData`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final String FILE_ID` (= "scoreboard")
- `private final Scoreboard scoreboard`

### Methods
- `public ScoreboardSaveData load(CompoundTag p_166103_)`
- `private void loadTeams(ListTag p_83525_)`
- `private void loadTeamPlayers(PlayerTeam p_83515_,  ListTag p_83516_)`
- `private void loadDisplaySlots(CompoundTag p_83531_)`
- `private void loadObjectives(ListTag p_83529_)`
- `public CompoundTag save(CompoundTag p_83527_)`
- `private ListTag saveTeams()`
- `private void saveDisplaySlots(CompoundTag p_83533_)`
- `private ListTag saveObjectives()`

### Inherited methods
- from `net.minecraft.world.level.saveddata.SavedData`: `isDirty`, `save`, `setDirty`, `setDirty`

## Team

*class* `net.minecraft.world.scores.Team`

### Methods
- `public boolean isAlliedTo(@Nullable  Team p_83537_)`
- `public abstract String getName()`
- `public abstract MutableComponent getFormattedName(Component p_83538_)`
- `public abstract boolean canSeeFriendlyInvisibles()`
- `public abstract boolean isAllowFriendlyFire()`
- `public abstract Team.Visibility getNameTagVisibility()`
- `public abstract ChatFormatting getColor()`
- `public abstract Collection<String> getPlayers()`
- `public abstract Team.Visibility getDeathMessageVisibility()`
- `public abstract Team.CollisionRule getCollisionRule()`
