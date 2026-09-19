# net.minecraft.entity.ai.attributes

- [AbstractAttributeMap](#abstractattributemap)
- [AttributeMap](#attributemap)
- [AttributeModifier](#attributemodifier)
- [BaseAttribute](#baseattribute)
- [IAttribute](#iattribute)
- [IAttributeInstance](#iattributeinstance)
- [ModifiableAttributeInstance](#modifiableattributeinstance)
- [RangedAttribute](#rangedattribute)
## AbstractAttributeMap

*class* `net.minecraft.entity.ai.attributes.AbstractAttributeMap`

### Fields
- `protected final java.util.Map<IAttribute,IAttributeInstance> attributes`
- `protected final java.util.Map<java.lang.String,IAttributeInstance> attributesByName`
- `protected final <any> descendantsByParent`

### Methods
- `public IAttributeInstance getAttributeInstance(IAttribute attribute)`
- `public IAttributeInstance getAttributeInstanceByName(java.lang.String attributeName)`
- `public IAttributeInstance registerAttribute(IAttribute attribute)`
- `protected abstract IAttributeInstance createInstance(IAttribute attribute)`
- `public java.util.Collection<IAttributeInstance> getAllAttributes()`
- `public void onAttributeModified(IAttributeInstance instance)`
- `public void removeAttributeModifiers(<any> modifiers)`
- `public void applyAttributeModifiers(<any> modifiers)`

## AttributeMap

*class* `net.minecraft.entity.ai.attributes.AttributeMap`

### Fields
- `protected final java.util.Map<java.lang.String,IAttributeInstance> instancesByName`

### Inherited fields
- from `net.minecraft.entity.ai.attributes.AbstractAttributeMap`: `attributes`, `attributesByName`, `descendantsByParent`

### Methods
- `public ModifiableAttributeInstance getAttributeInstance(IAttribute attribute)`
- `public ModifiableAttributeInstance getAttributeInstanceByName(java.lang.String attributeName)`
- `public IAttributeInstance registerAttribute(IAttribute attribute)`
- `protected IAttributeInstance createInstance(IAttribute attribute)`
- `public void onAttributeModified(IAttributeInstance instance)`
- `public java.util.Set<IAttributeInstance> getDirtyInstances()`
- `public java.util.Collection<IAttributeInstance> getWatchedAttributes()`

### Inherited methods
- from `net.minecraft.entity.ai.attributes.AbstractAttributeMap`: `applyAttributeModifiers`, `getAllAttributes`, `removeAttributeModifiers`

## AttributeModifier

*class* `net.minecraft.entity.ai.attributes.AttributeModifier`

### Methods
- `public java.util.UUID getID()`
- `public java.lang.String getName()`
- `public int getOperation()`
- `public double getAmount()`
- `public boolean isSaved()`
- `public AttributeModifier setSaved(boolean saved)`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public java.lang.String toString()`

## BaseAttribute

*class* `net.minecraft.entity.ai.attributes.BaseAttribute`

All Implemented Interfaces: IAttribute

### Methods
- `public java.lang.String getName()`
- `public double getDefaultValue()`
- `public boolean getShouldWatch()`
- `public BaseAttribute setShouldWatch(boolean shouldWatchIn)`
- `public IAttribute getParent()`
- `public int hashCode()`
- `public boolean equals(java.lang.Object p_equals_1_)`

### Inherited methods
- from `net.minecraft.entity.ai.attributes.IAttribute`: `clampValue`

## IAttribute

*interface* `net.minecraft.entity.ai.attributes.IAttribute`

### Methods
- `java.lang.String getName()`
- `double clampValue(double value)`
- `double getDefaultValue()`
- `boolean getShouldWatch()`
- `IAttribute getParent()`

## IAttributeInstance

*interface* `net.minecraft.entity.ai.attributes.IAttributeInstance`

### Methods
- `IAttribute getAttribute()`
- `double getBaseValue()`
- `void setBaseValue(double baseValue)`
- `java.util.Collection<AttributeModifier> getModifiersByOperation(int operation)`
- `java.util.Collection<AttributeModifier> getModifiers()`
- `boolean hasModifier(AttributeModifier modifier)`
- `AttributeModifier getModifier(java.util.UUID uuid)`
- `void applyModifier(AttributeModifier modifier)`
- `void removeModifier(AttributeModifier modifier)`
- `void removeModifier(java.util.UUID p_188479_1_)`
- `void removeAllModifiers()`
- `double getAttributeValue()`

## ModifiableAttributeInstance

*class* `net.minecraft.entity.ai.attributes.ModifiableAttributeInstance`

All Implemented Interfaces: IAttributeInstance

### Methods
- `public IAttribute getAttribute()`
- `public double getBaseValue()`
- `public void setBaseValue(double baseValue)`
- `public java.util.Collection<AttributeModifier> getModifiersByOperation(int operation)`
- `public java.util.Collection<AttributeModifier> getModifiers()`
- `public AttributeModifier getModifier(java.util.UUID uuid)`
- `public boolean hasModifier(AttributeModifier modifier)`
- `public void applyModifier(AttributeModifier modifier)`
- `protected void flagForUpdate()`
- `public void removeModifier(AttributeModifier modifier)`
- `public void removeModifier(java.util.UUID p_188479_1_)`
- `public void removeAllModifiers()`
- `public double getAttributeValue()`

## RangedAttribute

*class* `net.minecraft.entity.ai.attributes.RangedAttribute`

All Implemented Interfaces: IAttribute

### Methods
- `public RangedAttribute setDescription(java.lang.String descriptionIn)`
- `public java.lang.String getDescription()`
- `public double clampValue(double value)`

### Inherited methods
- from `net.minecraft.entity.ai.attributes.BaseAttribute`: `equals`, `getDefaultValue`, `getName`, `getParent`, `getShouldWatch`, `hashCode`, `setShouldWatch`
