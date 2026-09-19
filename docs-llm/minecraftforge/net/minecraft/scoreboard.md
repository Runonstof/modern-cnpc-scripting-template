# net.minecraft.scoreboard

- [IScoreCriteria](#iscorecriteria)
- [IScoreCriteria.EnumRenderType](#iscorecriteria.enumrendertype)
- [Score](#score)
- [Scoreboard](#scoreboard)
- [ScoreboardSaveData](#scoreboardsavedata)
- [ScoreCriteria](#scorecriteria)
- [ScoreCriteriaColored](#scorecriteriacolored)
- [ScoreCriteriaHealth](#scorecriteriahealth)
- [ScoreCriteriaReadOnly](#scorecriteriareadonly)
- [ScoreCriteriaStat](#scorecriteriastat)
- [ScoreObjective](#scoreobjective)
- [ScorePlayerTeam](#scoreplayerteam)
- [ServerScoreboard](#serverscoreboard)
- [Team](#team)
- [Team.CollisionRule](#team.collisionrule)
- [Team.EnumVisible](#team.enumvisible)
## IScoreCriteria

*interface* `net.minecraft.scoreboard.IScoreCriteria`

### Fields
- `static final java.util.Map<java.lang.String,IScoreCriteria> INSTANCES`
- `static final IScoreCriteria DUMMY`
- `static final IScoreCriteria TRIGGER`
- `static final IScoreCriteria DEATH_COUNT`
- `static final IScoreCriteria PLAYER_KILL_COUNT`
- `static final IScoreCriteria TOTAL_KILL_COUNT`
- `static final IScoreCriteria HEALTH`
- `static final IScoreCriteria FOOD`
- `static final IScoreCriteria AIR`
- `static final IScoreCriteria ARMOR`
- `static final IScoreCriteria XP`
- `static final IScoreCriteria LEVEL`
- `static final IScoreCriteria[] TEAM_KILL`
- `static final IScoreCriteria[] KILLED_BY_TEAM`

### Methods
- `java.lang.String getName()`
- `boolean isReadOnly()`
- `IScoreCriteria.EnumRenderType getRenderType()`

## IScoreCriteria.EnumRenderType

*enum* `net.minecraft.scoreboard.IScoreCriteria.EnumRenderType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<IScoreCriteria.EnumRenderType>

Enclosing interface: IScoreCriteria

### Fields
- `public static final IScoreCriteria.EnumRenderType INTEGER`
- `public static final IScoreCriteria.EnumRenderType HEARTS`

### Methods
- `public static IScoreCriteria.EnumRenderType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (IScoreCriteria.EnumRenderType c : IScoreCriteria.EnumRenderType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static IScoreCriteria.EnumRenderType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public java.lang.String getRenderType()`
- `public static IScoreCriteria.EnumRenderType getByName(java.lang.String name)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Score

*class* `net.minecraft.scoreboard.Score`

### Fields
- `public static final java.util.Comparator<Score> SCORE_COMPARATOR`

### Methods
- `public void increaseScore(int amount)`
- `public void decreaseScore(int amount)`
- `public void incrementScore()`
- `public int getScorePoints()`
- `public void setScorePoints(int points)`
- `public ScoreObjective getObjective()`
- `public java.lang.String getPlayerName()`
- `public Scoreboard getScoreScoreboard()`
- `public boolean isLocked()`
- `public void setLocked(boolean locked)`

## Scoreboard

*class* `net.minecraft.scoreboard.Scoreboard`

### Methods
- `public ScoreObjective getObjective(java.lang.String name)`
- `public ScoreObjective addScoreObjective(java.lang.String name,  IScoreCriteria criteria)`
- `public java.util.Collection<ScoreObjective> getObjectivesFromCriteria(IScoreCriteria criteria)`
- `public boolean entityHasObjective(java.lang.String name,  ScoreObjective objective)`
- `public Score getOrCreateScore(java.lang.String username,  ScoreObjective objective)`
- `public java.util.Collection<Score> getSortedScores(ScoreObjective objective)`
- `public java.util.Collection<ScoreObjective> getScoreObjectives()`
- `public java.util.Collection<java.lang.String> getObjectiveNames()`
- `public void removeObjectiveFromEntity(java.lang.String name,  ScoreObjective objective)`
- `public java.util.Collection<Score> getScores()`
- `public java.util.Map<ScoreObjective,Score> getObjectivesForEntity(java.lang.String name)`
- `public void removeObjective(ScoreObjective objective)`
- `public void setObjectiveInDisplaySlot(int objectiveSlot,  ScoreObjective objective)`
- `public ScoreObjective getObjectiveInDisplaySlot(int slotIn)`
- `public ScorePlayerTeam getTeam(java.lang.String teamName)`
- `public ScorePlayerTeam createTeam(java.lang.String name)`
- `public void removeTeam(ScorePlayerTeam playerTeam)`
- `public boolean addPlayerToTeam(java.lang.String player,  java.lang.String newTeam)`
- `public boolean removePlayerFromTeams(java.lang.String playerName)`
- `public void removePlayerFromTeam(java.lang.String username,  ScorePlayerTeam playerTeam)`
- `public java.util.Collection<java.lang.String> getTeamNames()`
- `public java.util.Collection<ScorePlayerTeam> getTeams()`
- `public ScorePlayerTeam getPlayersTeam(java.lang.String username)`
- `public void onScoreObjectiveAdded(ScoreObjective scoreObjectiveIn)`
- `public void onObjectiveDisplayNameChanged(ScoreObjective objective)`
- `public void onScoreObjectiveRemoved(ScoreObjective objective)`
- `public void onScoreUpdated(Score scoreIn)`
- `public void broadcastScoreUpdate(java.lang.String scoreName)`
- `public void broadcastScoreUpdate(java.lang.String scoreName,  ScoreObjective objective)`
- `public void broadcastTeamCreated(ScorePlayerTeam playerTeam)`
- `public void broadcastTeamInfoUpdate(ScorePlayerTeam playerTeam)`
- `public void broadcastTeamRemove(ScorePlayerTeam playerTeam)`
- `public static java.lang.String getObjectiveDisplaySlot(int id)`
- `public static int getObjectiveDisplaySlotNumber(java.lang.String name)`
- `public static java.lang.String[] getDisplaySlotStrings()`
- `public void removeEntity(Entity entityIn)`

## ScoreboardSaveData

*class* `net.minecraft.scoreboard.ScoreboardSaveData`

All Implemented Interfaces: INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.world.storage.WorldSavedData`: `mapName`

### Methods
- `public void setScoreboard(Scoreboard scoreboardIn)`
- `public void readFromNBT(NBTTagCompound nbt)`
- `protected void readTeams(NBTTagList tagList)`
- `protected void loadTeamPlayers(ScorePlayerTeam playerTeam,  NBTTagList tagList)`
- `protected void readDisplayConfig(NBTTagCompound compound)`
- `protected void readObjectives(NBTTagList nbt)`
- `protected void readScores(NBTTagList nbt)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `protected NBTTagList teamsToNbt()`
- `protected void fillInDisplaySlots(NBTTagCompound compound)`
- `protected NBTTagList objectivesToNbt()`
- `protected NBTTagList scoresToNbt()`

### Inherited methods
- from `net.minecraft.world.storage.WorldSavedData`: `deserializeNBT`, `isDirty`, `markDirty`, `serializeNBT`, `setDirty`

## ScoreCriteria

*class* `net.minecraft.scoreboard.ScoreCriteria`

All Implemented Interfaces: IScoreCriteria

### Inherited fields
- from `net.minecraft.scoreboard.IScoreCriteria`: `AIR`, `ARMOR`, `DEATH_COUNT`, `DUMMY`, `FOOD`, `HEALTH`, `INSTANCES`, `KILLED_BY_TEAM`, `LEVEL`, `PLAYER_KILL_COUNT`, `TEAM_KILL`, `TOTAL_KILL_COUNT`, `TRIGGER`, `XP`

### Methods
- `public java.lang.String getName()`
- `public boolean isReadOnly()`
- `public IScoreCriteria.EnumRenderType getRenderType()`

## ScoreCriteriaColored

*class* `net.minecraft.scoreboard.ScoreCriteriaColored`

All Implemented Interfaces: IScoreCriteria

### Inherited fields
- from `net.minecraft.scoreboard.IScoreCriteria`: `AIR`, `ARMOR`, `DEATH_COUNT`, `DUMMY`, `FOOD`, `HEALTH`, `INSTANCES`, `KILLED_BY_TEAM`, `LEVEL`, `PLAYER_KILL_COUNT`, `TEAM_KILL`, `TOTAL_KILL_COUNT`, `TRIGGER`, `XP`

### Methods
- `public java.lang.String getName()`
- `public boolean isReadOnly()`
- `public IScoreCriteria.EnumRenderType getRenderType()`

## ScoreCriteriaHealth

*class* `net.minecraft.scoreboard.ScoreCriteriaHealth`

All Implemented Interfaces: IScoreCriteria

### Inherited fields
- from `net.minecraft.scoreboard.IScoreCriteria`: `AIR`, `ARMOR`, `DEATH_COUNT`, `DUMMY`, `FOOD`, `HEALTH`, `INSTANCES`, `KILLED_BY_TEAM`, `LEVEL`, `PLAYER_KILL_COUNT`, `TEAM_KILL`, `TOTAL_KILL_COUNT`, `TRIGGER`, `XP`

### Methods
- `public boolean isReadOnly()`
- `public IScoreCriteria.EnumRenderType getRenderType()`

### Inherited methods
- from `net.minecraft.scoreboard.ScoreCriteria`: `getName`

## ScoreCriteriaReadOnly

*class* `net.minecraft.scoreboard.ScoreCriteriaReadOnly`

All Implemented Interfaces: IScoreCriteria

### Inherited fields
- from `net.minecraft.scoreboard.IScoreCriteria`: `AIR`, `ARMOR`, `DEATH_COUNT`, `DUMMY`, `FOOD`, `HEALTH`, `INSTANCES`, `KILLED_BY_TEAM`, `LEVEL`, `PLAYER_KILL_COUNT`, `TEAM_KILL`, `TOTAL_KILL_COUNT`, `TRIGGER`, `XP`

### Methods
- `public boolean isReadOnly()`

### Inherited methods
- from `net.minecraft.scoreboard.ScoreCriteria`: `getName`, `getRenderType`

## ScoreCriteriaStat

*class* `net.minecraft.scoreboard.ScoreCriteriaStat`

All Implemented Interfaces: IScoreCriteria

### Inherited fields
- from `net.minecraft.scoreboard.IScoreCriteria`: `AIR`, `ARMOR`, `DEATH_COUNT`, `DUMMY`, `FOOD`, `HEALTH`, `INSTANCES`, `KILLED_BY_TEAM`, `LEVEL`, `PLAYER_KILL_COUNT`, `TEAM_KILL`, `TOTAL_KILL_COUNT`, `TRIGGER`, `XP`

### Inherited methods
- from `net.minecraft.scoreboard.ScoreCriteria`: `getName`, `getRenderType`, `isReadOnly`

## ScoreObjective

*class* `net.minecraft.scoreboard.ScoreObjective`

### Methods
- `public Scoreboard getScoreboard()`
- `public java.lang.String getName()`
- `public IScoreCriteria getCriteria()`
- `public java.lang.String getDisplayName()`
- `public void setDisplayName(java.lang.String nameIn)`
- `public IScoreCriteria.EnumRenderType getRenderType()`
- `public void setRenderType(IScoreCriteria.EnumRenderType type)`

## ScorePlayerTeam

*class* `net.minecraft.scoreboard.ScorePlayerTeam`

### Methods
- `public java.lang.String getName()`
- `public java.lang.String getDisplayName()`
- `public void setDisplayName(java.lang.String name)`
- `public java.util.Collection<java.lang.String> getMembershipCollection()`
- `public java.lang.String getPrefix()`
- `public void setPrefix(java.lang.String prefix)`
- `public java.lang.String getSuffix()`
- `public void setSuffix(java.lang.String suffix)`
- `public java.lang.String formatString(java.lang.String input)`
- `public static java.lang.String formatPlayerName(Team teamIn,  java.lang.String string)`
- `public boolean getAllowFriendlyFire()`
- `public void setAllowFriendlyFire(boolean friendlyFire)`
- `public boolean getSeeFriendlyInvisiblesEnabled()`
- `public void setSeeFriendlyInvisiblesEnabled(boolean friendlyInvisibles)`
- `public Team.EnumVisible getNameTagVisibility()`
- `public Team.EnumVisible getDeathMessageVisibility()`
- `public void setNameTagVisibility(Team.EnumVisible visibility)`
- `public void setDeathMessageVisibility(Team.EnumVisible visibility)`
- `public Team.CollisionRule getCollisionRule()`
- `public void setCollisionRule(Team.CollisionRule rule)`
- `public int getFriendlyFlags()`
- `public void setFriendlyFlags(int flags)`
- `public void setColor(TextFormatting color)`
- `public TextFormatting getColor()`

### Inherited methods
- from `net.minecraft.scoreboard.Team`: `isSameTeam`

## ServerScoreboard

*class* `net.minecraft.scoreboard.ServerScoreboard`

### Methods
- `public void onScoreUpdated(Score scoreIn)`
- `public void broadcastScoreUpdate(java.lang.String scoreName)`
- `public void broadcastScoreUpdate(java.lang.String scoreName,  ScoreObjective objective)`
- `public void setObjectiveInDisplaySlot(int objectiveSlot,  ScoreObjective objective)`
- `public boolean addPlayerToTeam(java.lang.String player,  java.lang.String newTeam)`
- `public void removePlayerFromTeam(java.lang.String username,  ScorePlayerTeam playerTeam)`
- `public void onScoreObjectiveAdded(ScoreObjective scoreObjectiveIn)`
- `public void onObjectiveDisplayNameChanged(ScoreObjective objective)`
- `public void onScoreObjectiveRemoved(ScoreObjective objective)`
- `public void broadcastTeamCreated(ScorePlayerTeam playerTeam)`
- `public void broadcastTeamInfoUpdate(ScorePlayerTeam playerTeam)`
- `public void broadcastTeamRemove(ScorePlayerTeam playerTeam)`
- `public void addDirtyRunnable(java.lang.Runnable runnable)`
- `protected void markSaveDataDirty()`
- `public java.util.List<Packet<?>> getCreatePackets(ScoreObjective objective)`
- `public void addObjective(ScoreObjective objective)`
- `public java.util.List<Packet<?>> getDestroyPackets(ScoreObjective p_96548_1_)`
- `public void sendDisplaySlotRemovalPackets(ScoreObjective p_96546_1_)`
- `public int getObjectiveDisplaySlotCount(ScoreObjective p_96552_1_)`

### Inherited methods
- from `net.minecraft.scoreboard.Scoreboard`: `addScoreObjective`, `createTeam`, `entityHasObjective`, `getDisplaySlotStrings`, `getObjective`, `getObjectiveDisplaySlot`, `getObjectiveDisplaySlotNumber`, `getObjectiveInDisplaySlot`, `getObjectiveNames`, `getObjectivesForEntity`, `getObjectivesFromCriteria`, `getOrCreateScore`, `getPlayersTeam`, `getScoreObjectives`, `getScores`, `getSortedScores`, `getTeam`, `getTeamNames`, `getTeams`, `removeEntity`, `removeObjective`, `removeObjectiveFromEntity`, `removePlayerFromTeams`, `removeTeam`

## Team

*class* `net.minecraft.scoreboard.Team`

### Methods
- `public boolean isSameTeam(Team other)`
- `public abstract java.lang.String getName()`
- `public abstract java.lang.String formatString(java.lang.String input)`
- `public abstract boolean getSeeFriendlyInvisiblesEnabled()`
- `public abstract boolean getAllowFriendlyFire()`
- `public abstract Team.EnumVisible getNameTagVisibility()`
- `public abstract TextFormatting getColor()`
- `public abstract java.util.Collection<java.lang.String> getMembershipCollection()`
- `public abstract Team.EnumVisible getDeathMessageVisibility()`
- `public abstract Team.CollisionRule getCollisionRule()`

## Team.CollisionRule

*enum* `net.minecraft.scoreboard.Team.CollisionRule`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Team.CollisionRule>

Enclosing class: Team

### Fields
- `public final java.lang.String name`
- `public final int id`
- `public static final Team.CollisionRule ALWAYS`
- `public static final Team.CollisionRule NEVER`
- `public static final Team.CollisionRule HIDE_FOR_OTHER_TEAMS`
- `public static final Team.CollisionRule HIDE_FOR_OWN_TEAM`

### Methods
- `public static Team.CollisionRule[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Team.CollisionRule c : Team.CollisionRule.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Team.CollisionRule valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static java.lang.String[] getNames()`
- `public static Team.CollisionRule getByName(java.lang.String nameIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Team.EnumVisible

*enum* `net.minecraft.scoreboard.Team.EnumVisible`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Team.EnumVisible>

Enclosing class: Team

### Fields
- `public final java.lang.String internalName`
- `public final int id`
- `public static final Team.EnumVisible ALWAYS`
- `public static final Team.EnumVisible NEVER`
- `public static final Team.EnumVisible HIDE_FOR_OTHER_TEAMS`
- `public static final Team.EnumVisible HIDE_FOR_OWN_TEAM`

### Methods
- `public static Team.EnumVisible[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Team.EnumVisible c : Team.EnumVisible.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Team.EnumVisible valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static java.lang.String[] getNames()`
- `public static Team.EnumVisible getByName(java.lang.String nameIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
