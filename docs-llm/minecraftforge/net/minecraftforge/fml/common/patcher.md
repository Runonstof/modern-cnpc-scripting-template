# net.minecraftforge.fml.common.patcher

- [ClassPatch](#classpatch)
- [ClassPatchManager](#classpatchmanager)
- [GenDiffSet](#gendiffset)
## ClassPatch

*class* `net.minecraftforge.fml.common.patcher.ClassPatch`

### Fields
- `public final java.lang.String name`
- `public final java.lang.String sourceClassName`
- `public final java.lang.String targetClassName`
- `public final boolean existsAtTarget`
- `public final byte[] patch`
- `public final int inputChecksum`

### Methods
- `public java.lang.String toString()`

## ClassPatchManager

*class* `net.minecraftforge.fml.common.patcher.ClassPatchManager`

### Fields
- `public static final boolean dumpPatched`
- `public static final boolean DEBUG`
- `public static final ClassPatchManager INSTANCE`

### Methods
- `public byte[] getPatchedResource(java.lang.String name,  java.lang.String mappedName,  LaunchClassLoader loader)  throws java.io.IOException`
  - throws: java.io.IOException
- `public byte[] applyPatch(java.lang.String name,  java.lang.String mappedName,  byte[] inputData)`
- `public void setup(Side side)`

## GenDiffSet

*class* `net.minecraftforge.fml.common.patcher.GenDiffSet`

### Methods
- `public static void main(java.lang.String[] args)  throws java.io.IOException`
  - throws: java.io.IOException
