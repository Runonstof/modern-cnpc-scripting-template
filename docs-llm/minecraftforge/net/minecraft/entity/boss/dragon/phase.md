# net.minecraft.entity.boss.dragon.phase

- [IPhase](#iphase)
- [PhaseBase](#phasebase)
- [PhaseChargingPlayer](#phasechargingplayer)
- [PhaseDying](#phasedying)
- [PhaseHoldingPattern](#phaseholdingpattern)
- [PhaseHover](#phasehover)
- [PhaseLanding](#phaselanding)
- [PhaseLandingApproach](#phaselandingapproach)
- [PhaseList](#phaselist)
- [PhaseManager](#phasemanager)
- [PhaseSittingAttacking](#phasesittingattacking)
- [PhaseSittingBase](#phasesittingbase)
- [PhaseSittingFlaming](#phasesittingflaming)
- [PhaseSittingScanning](#phasesittingscanning)
- [PhaseStrafePlayer](#phasestrafeplayer)
- [PhaseTakeoff](#phasetakeoff)
## IPhase

*interface* `net.minecraft.entity.boss.dragon.phase.IPhase`

### Methods
- `boolean getIsStationary()`
- `void doClientRenderEffects()`
- `void doLocalUpdate()`
- `void onCrystalDestroyed(EntityEnderCrystal crystal,  BlockPos pos,  DamageSource dmgSrc,  EntityPlayer plyr)`
- `void initPhase()`
- `void removeAreaEffect()`
- `float getMaxRiseOrFall()`
- `float getYawFactor()`
- `PhaseList<? extends IPhase> getType()`
- `Vec3d getTargetLocation()`
- `float getAdjustedDamage(MultiPartEntityPart pt,  DamageSource src,  float damage)`

## PhaseBase

*class* `net.minecraft.entity.boss.dragon.phase.PhaseBase`

All Implemented Interfaces: IPhase

### Fields
- `protected final EntityDragon dragon`

### Methods
- `public boolean getIsStationary()`
- `public void doClientRenderEffects()`
- `public void doLocalUpdate()`
- `public void onCrystalDestroyed(EntityEnderCrystal crystal,  BlockPos pos,  DamageSource dmgSrc,  EntityPlayer plyr)`
- `public void initPhase()`
- `public void removeAreaEffect()`
- `public float getMaxRiseOrFall()`
- `public Vec3d getTargetLocation()`
- `public float getAdjustedDamage(MultiPartEntityPart pt,  DamageSource src,  float damage)`
- `public float getYawFactor()`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.IPhase`: `getType`

## PhaseChargingPlayer

*class* `net.minecraft.entity.boss.dragon.phase.PhaseChargingPlayer`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public void doLocalUpdate()`
- `public void initPhase()`
- `public void setTarget(Vec3d p_188668_1_)`
- `public float getMaxRiseOrFall()`
- `public Vec3d getTargetLocation()`
- `public PhaseList<PhaseChargingPlayer> getType()`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `doClientRenderEffects`, `getAdjustedDamage`, `getIsStationary`, `getYawFactor`, `onCrystalDestroyed`, `removeAreaEffect`

## PhaseDying

*class* `net.minecraft.entity.boss.dragon.phase.PhaseDying`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public void doClientRenderEffects()`
- `public void doLocalUpdate()`
- `public void initPhase()`
- `public float getMaxRiseOrFall()`
- `public Vec3d getTargetLocation()`
- `public PhaseList<PhaseDying> getType()`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `getAdjustedDamage`, `getIsStationary`, `getYawFactor`, `onCrystalDestroyed`, `removeAreaEffect`

## PhaseHoldingPattern

*class* `net.minecraft.entity.boss.dragon.phase.PhaseHoldingPattern`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public PhaseList<PhaseHoldingPattern> getType()`
- `public void doLocalUpdate()`
- `public void initPhase()`
- `public Vec3d getTargetLocation()`
- `public void onCrystalDestroyed(EntityEnderCrystal crystal,  BlockPos pos,  DamageSource dmgSrc,  EntityPlayer plyr)`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `doClientRenderEffects`, `getAdjustedDamage`, `getIsStationary`, `getMaxRiseOrFall`, `getYawFactor`, `removeAreaEffect`

## PhaseHover

*class* `net.minecraft.entity.boss.dragon.phase.PhaseHover`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public void doLocalUpdate()`
- `public boolean getIsStationary()`
- `public void initPhase()`
- `public float getMaxRiseOrFall()`
- `public Vec3d getTargetLocation()`
- `public PhaseList<PhaseHover> getType()`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `doClientRenderEffects`, `getAdjustedDamage`, `getYawFactor`, `onCrystalDestroyed`, `removeAreaEffect`

## PhaseLanding

*class* `net.minecraft.entity.boss.dragon.phase.PhaseLanding`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public void doClientRenderEffects()`
- `public void doLocalUpdate()`
- `public float getMaxRiseOrFall()`
- `public float getYawFactor()`
- `public void initPhase()`
- `public Vec3d getTargetLocation()`
- `public PhaseList<PhaseLanding> getType()`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `getAdjustedDamage`, `getIsStationary`, `onCrystalDestroyed`, `removeAreaEffect`

## PhaseLandingApproach

*class* `net.minecraft.entity.boss.dragon.phase.PhaseLandingApproach`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public PhaseList<PhaseLandingApproach> getType()`
- `public void initPhase()`
- `public void doLocalUpdate()`
- `public Vec3d getTargetLocation()`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `doClientRenderEffects`, `getAdjustedDamage`, `getIsStationary`, `getMaxRiseOrFall`, `getYawFactor`, `onCrystalDestroyed`, `removeAreaEffect`

## PhaseList

*class* `net.minecraft.entity.boss.dragon.phase.PhaseList`

### Fields
- `public static final PhaseList<PhaseHoldingPattern> HOLDING_PATTERN`
- `public static final PhaseList<PhaseStrafePlayer> STRAFE_PLAYER`
- `public static final PhaseList<PhaseLandingApproach> LANDING_APPROACH`
- `public static final PhaseList<PhaseLanding> LANDING`
- `public static final PhaseList<PhaseTakeoff> TAKEOFF`
- `public static final PhaseList<PhaseSittingFlaming> SITTING_FLAMING`
- `public static final PhaseList<PhaseSittingScanning> SITTING_SCANNING`
- `public static final PhaseList<PhaseSittingAttacking> SITTING_ATTACKING`
- `public static final PhaseList<PhaseChargingPlayer> CHARGING_PLAYER`
- `public static final PhaseList<PhaseDying> DYING`
- `public static final PhaseList<PhaseHover> HOVER`

### Methods
- `public IPhase createPhase(EntityDragon dragon)`
- `protected java.lang.reflect.Constructor<? extends IPhase> getConstructor()  throws java.lang.NoSuchMethodException`
  - throws: java.lang.NoSuchMethodException
- `public int getId()`
- `public java.lang.String toString()`
- `public static PhaseList<?> getById(int idIn)`
- `public static int getTotalPhases()`

## PhaseManager

*class* `net.minecraft.entity.boss.dragon.phase.PhaseManager`

### Methods
- `public void setPhase(PhaseList<?> phaseIn)`
- `public IPhase getCurrentPhase()`
- `public <T extends IPhase> T getPhase(PhaseList<T> phaseIn)`

## PhaseSittingAttacking

*class* `net.minecraft.entity.boss.dragon.phase.PhaseSittingAttacking`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public void doClientRenderEffects()`
- `public void doLocalUpdate()`
- `public void initPhase()`
- `public PhaseList<PhaseSittingAttacking> getType()`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseSittingBase`: `getAdjustedDamage`, `getIsStationary`
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `getMaxRiseOrFall`, `getTargetLocation`, `getYawFactor`, `onCrystalDestroyed`, `removeAreaEffect`

## PhaseSittingBase

*class* `net.minecraft.entity.boss.dragon.phase.PhaseSittingBase`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public boolean getIsStationary()`
- `public float getAdjustedDamage(MultiPartEntityPart pt,  DamageSource src,  float damage)`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `doClientRenderEffects`, `doLocalUpdate`, `getMaxRiseOrFall`, `getTargetLocation`, `getYawFactor`, `initPhase`, `onCrystalDestroyed`, `removeAreaEffect`
- from `net.minecraft.entity.boss.dragon.phase.IPhase`: `getType`

## PhaseSittingFlaming

*class* `net.minecraft.entity.boss.dragon.phase.PhaseSittingFlaming`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public void doClientRenderEffects()`
- `public void doLocalUpdate()`
- `public void initPhase()`
- `public void removeAreaEffect()`
- `public PhaseList<PhaseSittingFlaming> getType()`
- `public void resetFlameCount()`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseSittingBase`: `getAdjustedDamage`, `getIsStationary`
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `getMaxRiseOrFall`, `getTargetLocation`, `getYawFactor`, `onCrystalDestroyed`

## PhaseSittingScanning

*class* `net.minecraft.entity.boss.dragon.phase.PhaseSittingScanning`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public void doLocalUpdate()`
- `public void initPhase()`
- `public PhaseList<PhaseSittingScanning> getType()`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseSittingBase`: `getAdjustedDamage`, `getIsStationary`
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `doClientRenderEffects`, `getMaxRiseOrFall`, `getTargetLocation`, `getYawFactor`, `onCrystalDestroyed`, `removeAreaEffect`

## PhaseStrafePlayer

*class* `net.minecraft.entity.boss.dragon.phase.PhaseStrafePlayer`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public void doLocalUpdate()`
- `public void initPhase()`
- `public void setTarget(EntityLivingBase p_188686_1_)`
- `public Vec3d getTargetLocation()`
- `public PhaseList<PhaseStrafePlayer> getType()`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `doClientRenderEffects`, `getAdjustedDamage`, `getIsStationary`, `getMaxRiseOrFall`, `getYawFactor`, `onCrystalDestroyed`, `removeAreaEffect`

## PhaseTakeoff

*class* `net.minecraft.entity.boss.dragon.phase.PhaseTakeoff`

All Implemented Interfaces: IPhase

### Inherited fields
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `dragon`

### Methods
- `public void doLocalUpdate()`
- `public void initPhase()`
- `public Vec3d getTargetLocation()`
- `public PhaseList<PhaseTakeoff> getType()`

### Inherited methods
- from `net.minecraft.entity.boss.dragon.phase.PhaseBase`: `doClientRenderEffects`, `getAdjustedDamage`, `getIsStationary`, `getMaxRiseOrFall`, `getYawFactor`, `onCrystalDestroyed`, `removeAreaEffect`
