# noppes.npcs.api.entity.data

- [IData](#idata)
- [ILine](#iline)
- [IMark](#imark)
- [INPCAdvanced](#inpcadvanced)
- [INPCAi](#inpcai)
- [INPCDisplay](#inpcdisplay)
- [INPCInventory](#inpcinventory)
- [INPCJob](#inpcjob)
- [INPCMelee](#inpcmelee)
- [INPCRanged](#inpcranged)
- [INPCRole](#inpcrole)
- [INPCStats](#inpcstats)
- [IPixelmonPlayerData](#ipixelmonplayerdata)
- [IPlayerMail](#iplayermail)
## IData

*interface* `noppes.npcs.api.entity.data.IData`

### Methods
- `void put​(java.lang.String key, java.lang.Object value)`
- `java.lang.Object get​(java.lang.String key)`
- `void remove​(java.lang.String key)`
- `boolean has​(java.lang.String key)`
- `java.lang.String[] getKeys()`
- `void clear()`
  Removes all data

## ILine

*interface* `noppes.npcs.api.entity.data.ILine`

### Methods
- `java.lang.String getText()`
- `void setText​(java.lang.String text)`
- `java.lang.String getSound()`
- `void setSound​(java.lang.String sound)`
- `boolean getShowText()`
  - returns: If false the text will not show in the chat only in the text bubble
- `void setShowText​(boolean show)`

## IMark

*interface* `noppes.npcs.api.entity.data.IMark`

### Methods
- `IAvailability getAvailability()`
- `int getColor()`
- `void setColor​(int color)`
- `int getType()`
- `void setType​(int type)`
- `void update()`
  Calling this will send the changes you've made to the clients

## INPCAdvanced

*interface* `noppes.npcs.api.entity.data.INPCAdvanced`

### Methods
- `void setLine​(int type, int slot, java.lang.String text, java.lang.String sound)`
  - param: type - 0:Interact, 1:Attack, 2:World, 3:Killed, 4:Kill, 5:NPC Interact
  - param: slot - 0-7
- `java.lang.String getLine​(int type, int slot)`
  - param: type - 0:Interact, 1:Attack, 2:World, 3:Killed, 4:Kill, 5:NPC Interact
  - param: slot - 0-7
- `int getLineCount​(int type)`
  - param: type - 0:Interact, 1:Attack, 2:World, 3:Killed, 4:Kill, 5:NPC Interact
- `java.lang.String getSound​(int type)`
  - param: type - 0:Idle, 1:Angry, 2:Hurt, 3:Death, 4:Step
- `void setSound​(int type, java.lang.String sound)`
  - param: type - 0:Idle, 1:Angry, 2:Hurt, 3:Death, 4:Step

## INPCAi

*interface* `noppes.npcs.api.entity.data.INPCAi`

### Methods
- `int getAnimation()`
- `void setAnimation​(int type)`
- `int getCurrentAnimation()`
  - returns: Returns the npcs current animation. E.g. when npc is set to LYING it wont be lying while walking so it will be NORMAL
- `void setReturnsHome​(boolean bo)`
  - param: bo - Whether or not the npc will try to return to his home position
- `boolean getReturnsHome()`
- `int getRetaliateType()`
  - returns: Retaliation type. 0:Normal, 1:Panic, 2:Retreat, 3:Nothing
- `void setRetaliateType​(int type)`
  - param: type - Retaliation type. 0:Normal, 1:Panic, 2:Retreat, 3:Nothing
- `int getMovingType()`
  - returns: 0:Standing, 1:Wandering, 2:MovingPath
- `void setMovingType​(int type)`
  - param: type - 0:Standing, 1:Wandering, 2:MovingPath
- `int getNavigationType()`
  - returns: type 0:Ground, 1:Flying, 2:Swimming
- `void setNavigationType​(int type)`
  - param: type - 0:Ground, 1:Flying, 2:Swimming
- `int getStandingType()`
  - returns: 0:RotateBody, 1:NoRotation, 2:Stalking, 3:HeadRotation
- `void setStandingType​(int type)`
  - param: type - 0:RotateBody, 1:NoRotation, 2:Stalking, 3:HeadRotation
- `boolean getAttackInvisible()`
  - returns: Returns whether or not he can attack invisible entities
- `void setAttackInvisible​(boolean attack)`
- `int getWanderingRange()`
- `void setWanderingRange​(int range)`
  - param: range - (1-50)
- `boolean getInteractWithNPCs()`
- `void setInteractWithNPCs​(boolean interact)`
- `boolean getStopOnInteract()`
- `void setStopOnInteract​(boolean stopOnInteract)`
- `int getWalkingSpeed()`
- `void setWalkingSpeed​(int speed)`
  - param: speed - 0-10
- `int getMovingPathType()`
  - returns: 0:Looping, 1:Backtracking
- `boolean getMovingPathPauses()`
- `void setMovingPathType​(int type, boolean pauses)`
  - param: type - 0:Looping, 1:Backtracking
- `int getDoorInteract()`
- `void setDoorInteract​(int type)`
- `boolean getCanSwim()`
- `void setCanSwim​(boolean canSwim)`
- `int getSheltersFrom()`
  - returns: 0:Darkness, 1:Sunlight, 2:Disabled
- `void setSheltersFrom​(int type)`
  - param: type - 0:Darkness, 1:Sunlight, 2:Disabled
- `boolean getAttackLOS()`
  - returns: Whether the NPC requires Direct Line of Sight to Attack
- `void setAttackLOS​(boolean enabled)`
  - param: mustSee - Whether the NPC requires Direct Line of Sight to Attack
- `boolean getAvoidsWater()`
- `void setAvoidsWater​(boolean enabled)`
- `boolean getLeapAtTarget()`
- `void setLeapAtTarget​(boolean leap)`
- `int getTacticalType()`
- `void setTacticalType​(int type)`
- `int getTacticalRange()`
- `void setTacticalRange​(int range)`

## INPCDisplay

*interface* `noppes.npcs.api.entity.data.INPCDisplay`

### Methods
- `java.lang.String getName()`
- `void setName​(java.lang.String name)`
- `java.lang.String getTitle()`
- `void setTitle​(java.lang.String title)`
- `java.lang.String getSkinUrl()`
- `void setSkinUrl​(java.lang.String url)`
- `java.lang.String getSkinPlayer()`
- `void setSkinPlayer​(java.lang.String name)`
- `java.lang.String getSkinTexture()`
- `void setSkinTexture​(java.lang.String texture)`
- `boolean getHasLivingAnimation()`
- `void setHasLivingAnimation​(boolean enabled)`
- `int getVisible()`
  - returns: 0:visible, 1:invisible, 2:semi-invisible
- `void setVisible​(int type)`
  - param: type - 0:visible, 1:invisible, 2:semi-invisible
- `boolean isVisibleTo​(IPlayer player)`
  If the availability is set, you can check if its visible to the player or not
- `int getBossbar()`
  - returns: 0:invisible, 1:visible, 2:when-attacking
- `void setBossbar​(int type)`
  - param: type - 0:invisible, 1:visible, 2:when-attacking
- `int getSize()`
  - returns: 1-30
- `void setSize​(int size)`
  - param: size - 1-30
- `int getTint()`
- `void setTint​(int color)`
  - param: color - E.g. setTint(0xFF0000) sets the tint to red. (depending on the language you might want to look up how to convert hexadecimals to integers)
- `int getShowName()`
  - returns: 0:visible, 1:invisible, 2:when-attacking
- `void setShowName​(int type)`
  - param: type - 0:visible, 1:invisible, 2:when-attacking
- `void setCapeTexture​(java.lang.String texture)`
- `java.lang.String getCapeTexture()`
- `void setOverlayTexture​(java.lang.String texture)`
- `java.lang.String getOverlayTexture()`
- `void setModelScale​(int part, float x, float y, float z)`
  - param: part - 0:Head, 1:Body, 2:ArmLeft, 3:ArmRight, 4:LegLeft, 5:LegRight
- `float[] getModelScale​(int part)`
  - param: part - 0:Head, 1:Body, 2:ArmLeft, 3:ArmRight, 4:LegLeft, 5:LegRight
  - returns: Returns a float array
- `int getBossColor()`
  - returns: 0:Pink, 1:Blue, 2:Red, 3:Green, 4:Yellow, 5:Purple, 6:White
- `void setBossColor​(int color)`
  - param: color - 0:Pink, 1:Blue, 2:Red, 3:Green, 4:Yellow, 5:Purple, 6:White
- `void setModel​(java.lang.String model)`
  - param: model - Entity id from here
- `java.lang.String getModel()`
- `void setHasHitbox​(boolean bo)`
- `boolean getHasHitbox()`

## INPCInventory

*interface* `noppes.npcs.api.entity.data.INPCInventory`

### Methods
- `IItemStack getRightHand()`
- `void setRightHand​(IItemStack item)`
- `IItemStack getLeftHand()`
- `void setLeftHand​(IItemStack item)`
- `IItemStack getProjectile()`
- `void setProjectile​(IItemStack item)`
- `IItemStack getArmor​(int slot)`
  - param: slot - The armor slot to return. 0:head, 1:body, 2:legs, 3:boots
  - returns: Returns the armor item
- `void setArmor​(int slot, IItemStack item)`
  - param: slot - The armor slot to return. 0:head, 1:body, 2:legs, 3:boots
  - param: item -
- `void setDropItem​(int slot, IItemStack item, int chance)`
  - param: slot - 0-8
  - param: item -
  - param: chance - 1-100
- `IItemStack getDropItem​(int slot)`
  - param: slot - 0-8
- `int getExpMin()`
- `int getExpMax()`
- `int getExpRNG()`
  - returns: Returns a value between expMin and expMax
- `void setExp​(int min, int max)`
  Sets the random exp dropped when the npc dies
- `IItemStack[] getItemsRNG()`

## INPCJob

*interface* `noppes.npcs.api.entity.data.INPCJob`

### Methods
- `int getType()`

## INPCMelee

*interface* `noppes.npcs.api.entity.data.INPCMelee`

### Methods
- `int getStrength()`
- `void setStrength​(int strength)`
- `int getDelay()`
- `void setDelay​(int speed)`
- `int getRange()`
- `void setRange​(int range)`
- `int getKnockback()`
- `void setKnockback​(int knockback)`
- `int getEffectType()`
- `int getEffectTime()`
- `int getEffectStrength()`
- `void setEffect​(int type, int strength, int time)`

## INPCRanged

*interface* `noppes.npcs.api.entity.data.INPCRanged`

### Methods
- `int getStrength()`
- `void setStrength​(int strength)`
- `int getSpeed()`
  - returns: Speed of the projectile shot
- `void setSpeed​(int speed)`
  - param: speed - Speed of the projectile shot (default:10)
- `int getBurst()`
  Burst is the ammount shot at a time. E.g. a burst of 5 burst delay of 2 and a normal delay of 20,
   will shoot 5 projectiles with a delay of 2 ticks every 20 ticks.
- `void setBurst​(int count)`
- `int getBurstDelay()`
- `void setBurstDelay​(int delay)`
- `int getKnockback()`
- `void setKnockback​(int punch)`
- `int getSize()`
- `void setSize​(int size)`
- `boolean getRender3D()`
- `void setRender3D​(boolean render3d)`
- `boolean getSpins()`
- `void setSpins​(boolean spins)`
- `boolean getSticks()`
- `void setSticks​(boolean sticks)`
- `boolean getHasGravity()`
- `void setHasGravity​(boolean hasGravity)`
- `boolean getAccelerate()`
- `void setAccelerate​(boolean accelerate)`
- `int getExplodeSize()`
- `void setExplodeSize​(int size)`
- `int getEffectType()`
- `int getEffectTime()`
- `int getEffectStrength()`
- `void setEffect​(int type, int strength, int time)`
- `boolean getGlows()`
- `void setGlows​(boolean glows)`
- `int getParticle()`
- `void setParticle​(int type)`
- `java.lang.String getSound​(int type)`
  - param: type - 0:Fire
- `void setSound​(int type, java.lang.String sound)`
  - param: type - 0:Fire, 1:Hit, 2:Ground
- `int getShotCount()`
- `void setShotCount​(int count)`
- `boolean getHasAimAnimation()`
- `void setHasAimAnimation​(boolean aim)`
- `int getAccuracy()`
- `void setAccuracy​(int accuracy)`
- `int getRange()`
- `void setRange​(int range)`
- `int getDelayMin()`
- `int getDelayMax()`
- `int getDelayRNG()`
  - returns: Returns a value between delayMin and delayMax
- `void setDelay​(int min, int max)`
- `int getFireType()`
- `void setFireType​(int type)`
- `int getMeleeRange()`
- `void setMeleeRange​(int range)`

## INPCRole

*interface* `noppes.npcs.api.entity.data.INPCRole`

### Methods
- `int getType()`

## INPCStats

*interface* `noppes.npcs.api.entity.data.INPCStats`

### Methods
- `int getMaxHealth()`
- `void setMaxHealth​(int maxHealth)`
- `float getResistance​(int type)`
  - param: type - 0:Melee, 1:Ranged, 2:Explosion, 3:Knockback
  - returns: Returns value between 0 and 2. 0 being no resistance so increased damage and 2 being fully resistant. Normal is 1
- `void setResistance​(int type, float value)`
- `int getCombatRegen()`
  - returns: Returns the combat health regen per second
- `void setCombatRegen​(int regen)`
  - param: regen - The combat health regen per second
- `int getHealthRegen()`
  - returns: Returns the health regen per second when not in combat
- `void setHealthRegen​(int regen)`
  - param: regen - The health regen per second when not in combat
- `INPCMelee getMelee()`
- `INPCRanged getRanged()`
- `boolean getImmune​(int type)`
  - param: type - 0:Potion, 1:Falldamage, 2:Sunburning, 3:Fire, 4:Drowning, 5:Cobweb
- `void setImmune​(int type, boolean bo)`
  - param: type - 0:Potion, 1:Falldamage, 2:Sunburning, 3:Fire, 4:Drowning, 5:Cobweb
- `void setCreatureType​(int type)`
  (0=Normal, 1=Undead, 2=Arthropod) Only used for damage calculations with enchants
- `int getCreatureType()`
  (0=Normal, 1=Undead, 2=Arthropod) Only used for damage calculations with enchants
- `int getRespawnType()`
  - returns: 0:Yes, 1:Day, 2:Night, 3:No, 4:Naturally
- `void setRespawnType​(int type)`
  - param: type - 0:Yes, 1:Day, 2:Night, 3:No, 4:Naturally
- `int getRespawnTime()`
- `void setRespawnTime​(int seconds)`
- `boolean getHideDeadBody()`
- `void setHideDeadBody​(boolean hide)`
- `int getAggroRange()`
- `void setAggroRange​(int range)`

## IPixelmonPlayerData

*interface* `noppes.npcs.api.entity.data.IPixelmonPlayerData`

Returns objects from the Pixelmon API see https://reforged.gg/docs/

### Methods
- `java.lang.Object getParty()`
  Returns PartyStorage
- `java.lang.Object getPC()`
  Returns PCStorage

## IPlayerMail

*interface* `noppes.npcs.api.entity.data.IPlayerMail`

### Methods
- `java.lang.String getSender()`
- `void setSender​(java.lang.String sender)`
- `java.lang.String getSubject()`
- `void setSubject​(java.lang.String subject)`
- `java.lang.String[] getText()`
- `void setText​(java.lang.String[] text)`
- `IQuest getQuest()`
- `void setQuest​(int id)`
- `IContainer getContainer()`
